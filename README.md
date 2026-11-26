# Ninety Nine

## Run locally

1. Install dependencies with `npm install`.
2. Create a local `.env` using `.env.example` as a guide. For local development, set `NODE_ENV=development`, the MySQL connection values, and admin credentials.
3. Start the API with `npm run server`.
4. In another terminal, start Vite with `npm run dev`.

The frontend runs on Vite and proxies API and health requests to the local API at `http://127.0.0.1:5000`, including when the workspace is remote. The API initializes the MySQL schema without overwriting existing site content.
Team member profiles are stored with the rest of the site content in MySQL, and their uploaded photos use the existing media API.

## Deploy

This project needs a host that can run a persistent Node.js process and connect to a MySQL database. Static-only hosting is not sufficient: the Node server serves the built frontend and provides the API.

1. Provision MySQL on the hosting provider. Configure a database user that can connect from the application host and create tables in the selected database; do not assume a `localhost`-only MySQL account will work remotely.
2. Set `NODE_ENV=production` and configure the production environment variables from `.env.example` in the host's secret/environment settings. Use unique strong credentials and a random `JWT_SECRET` of at least 32 characters. Do not upload or commit `.env`.
3. Use `npm ci` to install dependencies, `npm run build` as the build command, and `npm start` as the start command.
4. Set `FRONTEND_ORIGINS` only when the website and API use different origins. If they are separate, set `VITE_API_BASE_URL` to the API origin **before building**; the default is same-origin.
5. Enable HTTPS and automated MySQL backups. For uploaded media, configure MySQL `max_allowed_packet` to at least 64 MB; uploads are limited to 32 MB each.
6. Check `/health` after deployment. A ready production response must report `"ok": true` and `"database": "mysql"`.

The application creates missing tables and seeds initial records only when they are absent. Existing site content and admin passwords are not overwritten on restart. Site settings, portfolio content, contact messages, and uploaded media are stored in MySQL.
