import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomBytes, randomUUID } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { initialData } from './data.js';

dotenv.config({ override: process.env.NODE_ENV !== 'production' });

const app = express();
const port = Number(process.env.PORT || 5000);
const nodeEnv = process.env.NODE_ENV;
if (nodeEnv !== 'development' && nodeEnv !== 'production') {
  throw new Error('NODE_ENV must be explicitly set to "development" or "production"');
}
const isProduction = nodeEnv === 'production';
const adminUsername = process.env.ADMIN_USERNAME || '';
const adminPassword = process.env.ADMIN_PASSWORD || '';
const jwtSecret = process.env.JWT_SECRET || (isProduction ? '' : randomBytes(32).toString('hex'));
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.join(currentDirectory, 'dist');

if (!adminUsername || !adminPassword) {
  throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD must be configured');
}

if (isProduction) {
  const requiredVariables = ['JWT_SECRET', 'DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
  const missingVariables = requiredVariables.filter((name) => !process.env[name]);
  if (missingVariables.length) {
    throw new Error(`Missing required production environment variables: ${missingVariables.join(', ')}`);
  }
  if (jwtSecret.length < 32) {
    throw new Error('JWT_SECRET must be at least 32 characters in production');
  }
  if (adminPassword.length < 12) {
    throw new Error('ADMIN_PASSWORD must be at least 12 characters in production');
  }
}

const allowedOrigins = new Set(
  (process.env.FRONTEND_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
);

const corsMiddleware = cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) return callback(null, true);
    if (!isProduction && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origin is not allowed by CORS'));
  }
});
app.use((req, res, next) => {
  const origin = req.get('origin');
  if (!origin) return next();
  try {
    if (new URL(origin).host === req.get('host')) return next();
  } catch {
    return res.status(403).json({ message: 'Invalid request origin' });
  }
  return corsMiddleware(req, res, next);
});
app.use(express.json({ limit: '10mb' }));

let db = null;
let usingFallbackStore = false;
const localUserStore = new Map();

const getDbConfig = () => ({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || adminPassword,
  database: process.env.DB_NAME || 'ninetynine_db',
  connectTimeout: 2000,
  multipleStatements: true,
  charset: 'utf8mb4'
});

const syncFallbackUser = () => {
  localUserStore.set(adminUsername, bcrypt.hashSync(adminPassword, 12));
};

const buildDefaultSiteData = () => JSON.parse(JSON.stringify(initialData));

const connectWithMySQL = async () => {
  const configuredHost = process.env.DB_HOST || '127.0.0.1';
  const hosts = isProduction
    ? [configuredHost]
    : Array.from(new Set([configuredHost, 'localhost', '127.0.0.1']));

  for (const host of hosts) {
    const candidate = mysql.createConnection({
      ...getDbConfig(),
      host,
      database: process.env.DB_NAME || 'ninetynine_db',
    });

    try {
      await new Promise((resolve, reject) => {
        candidate.connect((err) => {
          if (err) {
            candidate.destroy();
            reject(err);
            return;
          }
          resolve();
        });
      });

      db = candidate;
      return true;
    } catch (error) {
      console.warn(`MySQL connection failed for host ${host}:`, error.message);
    }
  }

  return false;
};

const ensureDatabaseSchema = () => {
  if (!db) return;

  const schemaSql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      role ENUM('admin') DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      key_name VARCHAR(100) NOT NULL UNIQUE,
      value_json JSON NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS works (
      id VARCHAR(100) PRIMARY KEY,
      category VARCHAR(50) NOT NULL,
      title_en TEXT NOT NULL,
      title_ar TEXT NOT NULL,
      client_en TEXT NOT NULL,
      client_ar TEXT NOT NULL,
      summary_en TEXT NOT NULL,
      summary_ar TEXT NOT NULL,
      details_en LONGTEXT NOT NULL,
      details_ar LONGTEXT NOT NULL,
      metrics_en TEXT NOT NULL,
      metrics_ar TEXT NOT NULL,
      image TEXT,
      video_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS messages (
      id VARCHAR(100) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      service VARCHAR(255) NOT NULL,
      budget VARCHAR(255) DEFAULT '',
      message TEXT NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      read_flag TINYINT(1) DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS site_content (
      id INT AUTO_INCREMENT PRIMARY KEY,
      section_name VARCHAR(50) NOT NULL UNIQUE,
      content_json JSON NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS media_assets (
      id CHAR(36) PRIMARY KEY,
      mime_type VARCHAR(100) NOT NULL,
      content LONGBLOB NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const query = (sql, params = []) => new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => err ? reject(err) : resolve(result));
  });

  return query(schemaSql)
    .then(async () => {
      const adminHash = await bcrypt.hash(adminPassword, 12);
      await query(
        `INSERT INTO users (username, password_hash, role)
         VALUES (?, ?, 'admin')
         ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), role = 'admin'`,
        [adminUsername, adminHash]
      );
      await query('DELETE FROM users WHERE username <> ?', [adminUsername]);

      const defaultData = buildDefaultSiteData();
      await query(
        `INSERT IGNORE INTO settings (key_name, value_json) VALUES ('site-settings', ?)`,
        [JSON.stringify(defaultData.settings || {})]
      );
      await query(
        `INSERT IGNORE INTO site_content (section_name, content_json) VALUES ('site-data', ?)`,
        [JSON.stringify(defaultData)]
      );

      for (const work of initialData.works || []) {
        await query(
          `INSERT IGNORE INTO works (id, category, title_en, title_ar, client_en, client_ar, summary_en, summary_ar, details_en, details_ar, metrics_en, metrics_ar, image, video_url, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            work.id, work.category, work.titleEn, work.titleAr, work.clientEn, work.clientAr,
            work.summaryEn, work.summaryAr, work.detailsEn, work.detailsAr, work.metricsEn,
            work.metricsAr, work.image || '', work.videoUrl || '',
            work.createdAt || new Date().toISOString().slice(0, 19).replace('T', ' ')
          ]
        );
      }

      console.log(`Admin user ready: ${adminUsername}`);
    })
    .catch((error) => {
      console.error('Failed to initialize database schema:', error);
      throw error;
    });
};

const bootstrapAuthStore = async () => {
  if (!isProduction) syncFallbackUser();

  try {
    const connected = await connectWithMySQL();
    if (!connected) {
      if (isProduction) throw new Error('MySQL is required in production but is unavailable');
      usingFallbackStore = true;
      console.warn('MySQL unavailable; using local auth fallback for development only.');
      return;
    }

    usingFallbackStore = false;
    console.log('MySQL connected');
    await ensureDatabaseSchema();
  } catch (error) {
    db?.destroy();
    db = null;
    if (isProduction) throw error;
    usingFallbackStore = true;
    console.warn('MySQL initialization failed; using local auth fallback for development only:', error.message);
  }
};

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Admin role required' });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const mapDbRowToWork = (row) => ({
  id: row.id,
  category: row.category,
  titleEn: row.title_en,
  titleAr: row.title_ar,
  clientEn: row.client_en,
  clientAr: row.client_ar,
  summaryEn: row.summary_en,
  summaryAr: row.summary_ar,
  detailsEn: row.details_en,
  detailsAr: row.details_ar,
  metricsEn: row.metrics_en,
  metricsAr: row.metrics_ar,
  image: row.image,
  videoUrl: row.video_url,
  createdAt: row.created_at
});

const mapDbRowToMessage = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
  phone: row.phone,
  service: row.service,
  budget: row.budget,
  message: row.message,
  date: row.date,
  read: Boolean(row.read_flag)
});

const mapDbRowToSetting = (row) => {
  try {
    return JSON.parse(row.value_json);
  } catch {
    return {};
  }
};

const mapDbRowToSiteData = (row) => {
  try {
    return JSON.parse(row.content_json);
  } catch {
    return buildDefaultSiteData();
  }
};

const ensureSettingsSeed = (cb) => {
  if (!db) return cb(null, {});

  db.query('SELECT * FROM settings WHERE key_name = ?', ['site-settings'], (err, rows) => {
    if (err) return cb(err);
    if (rows.length) return cb(null, mapDbRowToSetting(rows[0]));

    const defaultSettings = buildDefaultSiteData().settings || {};
    db.query(
      `INSERT INTO settings (key_name, value_json)
       VALUES ('site-settings', ?)
       ON DUPLICATE KEY UPDATE value_json = VALUES(value_json)`,
      [JSON.stringify(defaultSettings)],
      (insertErr) => {
        if (insertErr) return cb(insertErr);
        cb(null, defaultSettings);
      }
    );
  });
};

const ensureSiteDataSeed = (cb) => {
  if (!db) return cb(null, buildDefaultSiteData());

  db.query('SELECT * FROM site_content WHERE section_name = ?', ['site-data'], (err, rows) => {
    if (err) return cb(err);
    if (rows.length) return cb(null, mapDbRowToSiteData(rows[0]));

    const defaultData = buildDefaultSiteData();
    db.query(
      `INSERT INTO site_content (section_name, content_json)
       VALUES ('site-data', ?)
       ON DUPLICATE KEY UPDATE content_json = VALUES(content_json)`,
      [JSON.stringify(defaultData)],
      (insertErr) => {
        if (insertErr) return cb(insertErr);
        cb(null, defaultData);
      }
    );
  });
};

app.get('/api/site-settings', (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  ensureSettingsSeed((err, settings) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    const publicSettings = { ...settings };
    delete publicSettings.adminPin;
    res.json({ settings: publicSettings });
  });
});

app.get('/api/site-content', (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  ensureSiteDataSeed((err, data) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    const publicData = JSON.parse(JSON.stringify(data));
    publicData.messages = [];
    if (publicData.settings) delete publicData.settings.adminPin;
    res.json({ data: publicData });
  });
});

app.put('/api/site-content', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ message: 'Invalid site data' });
  }

  const payload = JSON.parse(JSON.stringify(req.body));
  delete payload.messages;
  if (payload.settings) delete payload.settings.adminPin;
  if (payload.teamMembers !== undefined) {
    if (!Array.isArray(payload.teamMembers) || payload.teamMembers.some((member) => (
      !member ||
      typeof member !== 'object' ||
      Array.isArray(member) ||
      typeof member.id !== 'string' ||
      !member.id.trim() ||
      member.id.length > 100 ||
      typeof member.name !== 'string' ||
      !member.name.trim() ||
      member.name.length > 255 ||
      typeof member.jobTitle !== 'string' ||
      !member.jobTitle.trim() ||
      member.jobTitle.length > 255 ||
      typeof member.description !== 'string' ||
      !member.description.trim() ||
      member.description.length > 2000 ||
      typeof member.image !== 'string' ||
      !member.image.trim() ||
      member.image.length > 2048
    ))) {
      return res.status(400).json({ message: 'Invalid team member data' });
    }
  }
  db.query(
    `INSERT INTO site_content (section_name, content_json)
     VALUES ('site-data', ?)
     ON DUPLICATE KEY UPDATE content_json = VALUES(content_json)`,
    [JSON.stringify(payload)],
    (err) => {
      if (err) return res.status(500).json({ message: 'Failed to save site data', error: err.message });

      const settings = payload.settings || {};
      db.query(
        `INSERT INTO settings (key_name, value_json)
         VALUES ('site-settings', ?)
         ON DUPLICATE KEY UPDATE value_json = VALUES(value_json)`,
        [JSON.stringify(settings)],
        (settingsErr) => {
          if (settingsErr) return res.status(500).json({ message: 'Failed to save site settings', error: settingsErr.message });
          res.json({ success: true });
        }
      );
    }
  );
});

app.get('/api/works', (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  db.query('SELECT * FROM works ORDER BY created_at DESC', (err, rows) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json({ works: rows.map(mapDbRowToWork) });
  });
});

app.post('/api/works', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  const work = req.body || {};
  const id = work.id || `w-${Date.now()}`;
  const payload = [
    id,
    work.category || 'video',
    work.titleEn || '',
    work.titleAr || '',
    work.clientEn || '',
    work.clientAr || '',
    work.summaryEn || '',
    work.summaryAr || '',
    work.detailsEn || '',
    work.detailsAr || '',
    work.metricsEn || '',
    work.metricsAr || '',
    work.image || '',
    work.videoUrl || '',
    work.createdAt || new Date().toISOString().slice(0, 19).replace('T', ' ')
  ];

  db.query(
    `INSERT INTO works (id, category, title_en, title_ar, client_en, client_ar, summary_en, summary_ar, details_en, details_ar, metrics_en, metrics_ar, image, video_url, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       category = VALUES(category),
       title_en = VALUES(title_en),
       title_ar = VALUES(title_ar),
       client_en = VALUES(client_en),
       client_ar = VALUES(client_ar),
       summary_en = VALUES(summary_en),
       summary_ar = VALUES(summary_ar),
       details_en = VALUES(details_en),
       details_ar = VALUES(details_ar),
       metrics_en = VALUES(metrics_en),
       metrics_ar = VALUES(metrics_ar),
       image = VALUES(image),
       video_url = VALUES(video_url),
       created_at = VALUES(created_at)`,
    payload,
    (err) => {
      if (err) return res.status(500).json({ message: 'Failed to save work', error: err.message });
      res.json({ success: true, id });
    }
  );
});

app.get('/api/messages', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  db.query('SELECT * FROM messages ORDER BY date DESC', (err, rows) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json({ messages: rows.map(mapDbRowToMessage) });
  });
});

app.post('/api/messages', (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  const item = req.body || {};
  const name = typeof item.name === 'string' ? item.name.trim() : '';
  const email = typeof item.email === 'string' ? item.email.trim() : '';
  const phone = typeof item.phone === 'string' ? item.phone.trim() : '';
  const service = typeof item.service === 'string' ? item.service.trim() : '';
  const budget = typeof item.budget === 'string' ? item.budget.trim() : '';
  const message = typeof item.message === 'string' ? item.message.trim() : '';

  if (!name || name.length > 255 || !message || message.length > 10000) {
    return res.status(400).json({ message: 'Name and message are required and must be within the allowed length' });
  }
  if (email.length > 255 || phone.length > 255 || service.length > 255 || budget.length > 255) {
    return res.status(400).json({ message: 'One or more fields exceed the allowed length' });
  }

  const id = randomUUID();

  db.query(
    `INSERT INTO messages (id, name, email, phone, service, budget, message, read_flag)
     VALUES (?, ?, ?, ?, ?, ?, ?, 0)`,
    [id, name, email, phone, service, budget, message],
    (err) => {
      if (err) return res.status(500).json({ message: 'Failed to save message', error: err.message });
      res.json({ success: true, id });
    }
  );
});

app.put('/api/messages/:id', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });
  if (typeof req.body?.read !== 'boolean') {
    return res.status(400).json({ message: 'A boolean read status is required' });
  }

  db.query(
    'UPDATE messages SET read_flag = ? WHERE id = ?',
    [req.body.read ? 1 : 0, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Failed to update message', error: err.message });
      if (!result.affectedRows) return res.status(404).json({ message: 'Message not found' });
      res.json({ success: true });
    }
  );
});

app.delete('/api/messages/:id', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  db.query('DELETE FROM messages WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Failed to delete message', error: err.message });
    if (!result.affectedRows) return res.status(404).json({ message: 'Message not found' });
    res.json({ success: true });
  });
});

app.put('/api/media', requireAdmin, express.raw({
  type: ['image/*', 'video/*', 'application/octet-stream'],
  limit: '32mb'
}), (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });
  if (!Buffer.isBuffer(req.body) || !req.body.length) {
    return res.status(400).json({ message: 'Media file is required' });
  }

  const mimeType = String(req.headers['x-media-type'] || req.headers['content-type'] || '');
  if (!/^(image|video)\/[a-zA-Z0-9.+-]+$/.test(mimeType)) {
    return res.status(415).json({ message: 'Only image and video files are supported' });
  }

  const id = randomUUID();
  db.query(
    'INSERT INTO media_assets (id, mime_type, content) VALUES (?, ?, ?)',
    [id, mimeType, req.body],
    (err) => {
      if (err) return res.status(500).json({ message: 'Failed to store media', error: err.message });
      res.status(201).json({ success: true, url: `/api/media/${id}` });
    }
  );
});

app.get('/api/media/:id', (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  db.query(
    'SELECT mime_type, content FROM media_assets WHERE id = ?',
    [req.params.id],
    (err, rows) => {
      if (err) return res.status(500).json({ message: 'Failed to load media' });
      if (!rows.length) return res.status(404).json({ message: 'Media not found' });
      res.set('Content-Type', rows[0].mime_type);
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
      res.send(rows[0].content);
    }
  );
});

app.delete('/api/media/:id', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  db.query('DELETE FROM media_assets WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Failed to delete media', error: err.message });
    if (!result.affectedRows) return res.status(404).json({ message: 'Media not found' });
    res.json({ success: true });
  });
});

app.put('/api/settings', requireAdmin, (req, res) => {
  if (!db) return res.status(503).json({ message: 'Database unavailable' });

  const key = 'site-settings';
  const settings = { ...(req.body || {}) };
  delete settings.adminPin;
  const payload = JSON.stringify(settings);

  db.query(
    `INSERT INTO settings (key_name, value_json)
     VALUES (?, ?)
     ON DUPLICATE KEY UPDATE value_json = VALUES(value_json)`,
    [key, payload],
    (err) => {
      if (err) return res.status(500).json({ message: 'Failed to save settings', error: err.message });
      res.json({ success: true });
    }
  );
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  if (usingFallbackStore) {
    const storedHash = localUserStore.get(username);
    if (!storedHash) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const valid = await bcrypt.compare(password, storedHash);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username, role: 'admin' }, jwtSecret, { expiresIn: '1h' });
    return res.json({ token, user: { username, role: 'admin' } });
  }

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error('Login query failed:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!results.length) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return res.json({ token, user: { username: user.username, role: user.role } });
  });
});

app.get('/api/admin-check', (req, res) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    if (decoded.role !== 'admin') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    return res.json({ valid: true, user: decoded });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
});

app.get('/health', (req, res) => {
  const ready = Boolean(db);
  res.json({
    ok: ready,
    status: ready ? 'server-ready' : 'database-unavailable',
    database: db ? 'mysql' : 'unavailable',
    authMode: usingFallbackStore ? 'local-fallback' : 'mysql'
  });
});

app.use(express.static(distDirectory));
app.get(/^(?!\/api\/).*/, (req, res, next) => {
  res.sendFile(path.join(distDirectory, 'index.html'), (error) => {
    if (error) next();
  });
});

bootstrapAuthStore()
  .then(() => {
    app.listen(port, isProduction ? '0.0.0.0' : '127.0.0.1', () => {
      console.log(`Ninety Nine server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Server startup failed:', error);
    process.exitCode = 1;
  });
