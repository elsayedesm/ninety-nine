// Ninety Nine Marketing Agency - Centralized State & Dictionary Data Store

export const initialData = {
  hero: {
    en: {
      badge: "LEADING DIGITAL MARKETING AGENCY",
      title: "WE TAKE YOUR BRAND TO THE NEXT LEVEL",
      subtitle: "Data-driven performance marketing, high-impact video production, and viral social media campaigns built for explosive brand growth.",
      primaryCta: "Explore Portfolio",
      secondaryCta: "Book a Consultation"
    },
    ar: {
      badge: "وكالة التسويق الرقمي الأولى والرواد في الإبداع",
      title: "حوّل حملاتك الإعلانية إلى قوة بيعية تُغلق الصفقات وتضاعف المبيعات",
      subtitle: "عزّز الـ ROI لنشاطك التجاري من خلال تحسين كل مرحلة في الـ Sales Funnel ، للوصول إلى عملاء مستعدين للشراء بنفس ميزانيتك الإعلانية.",
      primaryCta: "استعرض أعمالنا",
      secondaryCta: "احجز استشارة مجانية"
    },
    stats: [
      { id: "s1", number: "+150", labelEn: "Campaigns Launched", labelAr: "حملة تسويقية ناجحة" },
      { id: "s2", number: "+380%", labelEn: "Average ROI Boost", labelAr: "متوسط زيادة العائد" },
      { id: "s3", number: "25M+", labelEn: "Total Ad Reach", labelAr: "وصول الإعلانات" },
      { id: "s4", number: "18", labelEn: "Industry Awards", labelAr: "جائزة إبداعية" }
    ]
  },

  about: {
    en: {
      tag: "OUR SERVICES",
      title: "What Services Does Ninety Nine Offer?",
      description: "At Ninety Nine, we offer a complete suite of marketing services designed to grow your business and deliver measurable results:",
    },
    ar: {
      tag: "",
      title: "ما الخدمات التي نقدمها في Ninety Nine؟",
      titleSuffix: "",
      description: "نقدم في Ninety Nine منظومة متكاملة من الخدمات التسويقية المصممة لدفع أعمالك نحو النمو وتحقيق نتائج ملموسة:",
    },
    services: [
      {
        id: "service-performance",
        icon: "Megaphone",
        titleEn: "Performance Marketing",
        titleAr: "(Performance Marketing)",
        descEn: "Manage campaigns across Meta, TikTok, and Google to get the best return from your ad budget.",
        descAr: "إدارة الحملات الإعلانية عبر Meta وTikTok وGoogle لتحقيق أفضل عائد من ميزانيتك الإعلانية."
      },
      {
        id: "service-content-copywriting",
        icon: "FileText",
        titleEn: "Content Strategy & Copywriting",
        titleAr: "(Content Strategy & Copywriting)",
        descEn: "Craft marketing messages that speak to your target audience and strengthen their engagement with your brand.",
        descAr: "صياغة رسائل تسويقية تخاطب جمهورك المستهدف، وتعزز تفاعله مع علامتك التجارية."
      },
      {
        id: "service-sales-funnels",
        icon: "TrendingUp",
        titleEn: "Sales Funnels",
        titleAr: "(Sales Funnels)",
        descEn: "Design a complete customer journey, from seeing an ad to making a purchase and becoming a loyal customer.",
        descAr: "تصميم رحلة متكاملة للعميل، بدءًا من مشاهدة الإعلان وحتى إتمام الشراء وتحويله إلى عميل دائم."
      }
    ]
  },

  whyChooseUs: {
    en: {
      tag: "WHY NINETY NINE",
      title: "You can manage your ads yourself... but why do you need Ninety Nine?",
      introduction: "We help you shorten a long journey of research and trial and error by identifying the right marketing strategy for your business: Performance Ads, Brand Awareness, or a mix of both.",
      structureTitle: "Our Structure",
      structureDescription: "We rely on a proven framework shaped by working with dozens of different businesses, contributing to millions in sales.",
      structureImpact: "If your business spends EGP 200,000 per month on ads without achieving the desired results, the issue may lie in your funnel. At Ninety Nine, we optimize conversion rates and refine your marketing message to generate more clients and net profit from the same budget.",
      audienceTitle: "Audience Segmentation"
    },
    ar: {
      tag: "",
      title: "يمكنك إدارة إعلاناتك بنفسك... لكن لماذا تحتاج إلى Ninety Nine؟",
      introduction: "نساعدك على اختصار رحلة طويلة من البحث والتجربة، من خلال تحديد الاستراتيجية التسويقية الأنسب لنشاطك التجاري: هل تحتاج إلى Performance Ads ، أم Brand Awareness ، أم مزيج بينهما؟",
      structureTitle: "منهجية العمل",
      structureDescription: "نعتمد على Structure مُجرّبة مع عشرات الأنشطة التجارية المختلفة، وأسهمت في تحقيق ملايين المبيعات.",
      structureImpact: "إذا كان نشاطك التجاري ينفق 200,000 جنيه شهريًا على الإعلانات دون تحقيق النتائج المرجوّة، فقد يكون الخلل في الـ Funnel . في Ninety Nine، نعمل على تحسين الـ Conversion Rate وتطوير رسالتك التسويقية، لنحقق من خلال الميزانية نفسها زيادة ملموسة في عدد الـ Clients وصافي الأرباح.",
      audienceTitle: ""
    },
    items: [
      {
        id: "partnership",
        icon: "Users",
        titleEn: "Strategic Partnership",
        titleAr: "شراكة استراتيجية متكاملة",
        descEn: "We act as your growth partner by building the strategy, optimizing funnels, and managing campaigns with measurable business impact.",
        descAr: "نحن نعمل كشريك نمو لك؛ نضع الاستراتيجيات، ونطور مسارات المبيعات، وندير حملاتك الإعلانية باحترافية لتحقيق نمو مستدام."
      },
      {
        id: "budget",
        icon: "Sliders",
        titleEn: "Smart Budget Management",
        titleAr: "إدارة احترافية للميزانية",
        descEn: "Our specialists continuously analyze performance to reduce wasted spend and turn your marketing budget into a predictable revenue engine.",
        descAr: "نوفر لك فريقًا متخصصًا يحلل البيانات باستمرار، ويعمل على تقليل هدر الميزانية وتحويل إنفاقك الإعلاني إلى أرباح حقيقية."
      },
      {
        id: "tracking",
        icon: "TrendingUp",
        titleEn: "Performance Tracking",
        titleAr: "تحكم دقيق في النتائج",
        descEn: "We give you a clear view of CPL, CPA, conversion rates, and traffic quality so every decision is backed by data.",
        descAr: "نمنحك رؤية واضحة لأداء حملاتك من خلال تتبع دقيق لـ CPL، وCPA، ومعدلات التحويل وحركة الزوار."
      },
      {
        id: "scaling",
        icon: "Check",
        titleEn: "Data-Driven Scaling",
        titleAr: "نمو مدروس",
        descEn: "We identify the campaigns and ad sets delivering the strongest results and scale them with confidence using real performance data.",
        descAr: "نحدد الحملات والمجموعات الإعلانية الأكثر تحقيقًا للنتائج، لنوسّع نطاقها ونزيد الميزانيات بناءً على بيانات فعلية وعائد استثماري واضح."
      }
    ],
    audienceSegments: [
      {
        id: "ready-to-buy",
        icon: "Check",
        titleEn: "Ready to Buy",
        titleAr: "Ready to Buy (مستعد للشراء)",
        descEn: "A customer convinced by your product or service and ready to make a purchase decision.",
        descAr: "عميل مقتنع بمنتجك أو خدمتك، ومستعد لاتخاذ قرار الشراء."
      },
      {
        id: "potential-customer",
        icon: "Users",
        titleEn: "Potential Customer",
        titleAr: "Potential Customer (عميل متردد)",
        descEn: "A customer who needs more information and trust in your brand before deciding to buy.",
        descAr: "يحتاج إلى مزيد من المعلومات وبناء الثقة مع علامتك التجارية لاتخاذ قرار الشراء."
      },
      {
        id: "lost-customer",
        icon: "TrendingUp",
        titleEn: "Lost Customer",
        titleAr: "Lost Customer (عميل غادر دون شراء)",
        descEn: "We reach them again through retargeting to encourage them to complete their purchase.",
        descAr: "نستهدفه مجددًا من خلال Retargeting (إعادة الاستهداف) لتحفيزه على إتمام عملية الشراء."
      }
    ]
  },

  works: [
    {
      id: "w1",
      category: "video",
      titleEn: "Neon Velocity Commercial",
      titleAr: "إعلان تجاري لشركة سرعة النيون",
      clientEn: "Velocity Motors",
      clientAr: "فيلوسيتي موتورز",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      summaryEn: "A high-octane 4K TV commercial campaign boosting test-drive inquiries by 310%.",
      summaryAr: "إعلان سينمائي 4K بدقة عالية أدى لزيادة حجز تجارب القيادة بنسبة 310%.",
      metricsEn: "+310% Leads | 4.2M Views",
      metricsAr: "+310% عملاء محتملين | 4.2 مليون مشاهدة",
      detailsEn: "Designed complete storyboard, RED 8K camera shooting, VFX animations, and targeted YouTube Bumper Ads strategy.",
      detailsAr: "قمنا بكتابة السيناريو، التصوير بريد 8K، إضافة المؤثرات البصرية وتوجيه الحملة الإعلانية على يوتيوب."
    },
    {
      id: "w2",
      category: "ads",
      titleEn: "Aura Cosmetics E-Commerce Scaling",
      titleAr: "مضاعفة مبيعات متجر أورا للتجميل",
      clientEn: "Aura Beauty Co.",
      clientAr: "أورا لمنتجات التجميل",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      summaryEn: "Scaled monthly revenue from $40k to $290k using UGC TikTok Ads & Meta Retargeting.",
      summaryAr: "زيادة الإيرادات الشهرية من 40 ألف إلى 290 ألف دولار عبر إعلانات تيك توك وفيسبوك.",
      metricsEn: "$290k Monthly Revenue | 5.4x ROAS",
      metricsAr: "290$ ألف إيراد شهري | عائد 5.4x",
      detailsEn: "Created 45+ UGC video variations, built automated WhatsApp funnels, and optimized landing page conversions.",
      detailsAr: "إنتاج أكثر من 45 فيديو إعلاني مع صناع محتوى، وبناء مسارات تحويل تلقائية لزيادة المبيعات."
    },
    {
      id: "w3",
      category: "branding",
      titleEn: "CyberBite Cloud Kitchen Rebrand",
      titleAr: "إعادة بناء الهوية لكلاود كيتشن سايبر بايت",
      clientEn: "CyberBite Foods",
      clientAr: "سلسلة مطاعم سايبر بايت",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      summaryEn: "Complete brand overhaul, futuristic packaging design, and viral launch campaign.",
      summaryAr: "إعادة هيكلة الهوية البصرية كاملة، تصميم التغليف المستقبلي وحملة تدشين واسعة.",
      metricsEn: "12 New Franchise Locations",
      metricsAr: "افتتاح 12 فرعاً جديداً",
      detailsEn: "Modern neon aesthetic logo system, packaging engineering, menu photography, and grand opening social buzz.",
      detailsAr: "تصميم شعار نيوني عصري، علب التغليف، تصوير الأطباق، وحملة إعلامية للافتتاح."
    },
    {
      id: "w4",
      category: "social",
      titleEn: "Apex Fitness App 1M Members Campaign",
      titleAr: "حملة تطبيق آبيكس لفيتنس (مليون مشترك)",
      clientEn: "Apex Global",
      clientAr: "تطبيق آبيكس للرياضة",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      summaryEn: "Generated over 1,000,000 active app downloads across MENA region in 90 days.",
      summaryAr: "تحقيق أكثر من 1,000,000 تحميل للتطبيق في الشرق الأوسط خلال 90 يوماً فقط.",
      metricsEn: "1.2M Downloads | #1 Store Rank",
      metricsAr: "1.2M تحميل | المرتبة الأولى بالمتاجر",
      detailsEn: "Fitness micro-influencers network, challenge hashtag creation, performance Meta app install ads.",
      detailsAr: "إدارة شبكة من 80 مؤثر رياضي، إطلاق هاشتاج تحدي تيك توك، وإعلانات تثبيت التطبيق."
    },
    {
      id: "w5",
      category: "ads",
      titleEn: "Vertex Real Estate Luxury Launches",
      titleAr: "إطلاق المجمعات السكنية الفاخرة لـ فيرتكس",
      clientEn: "Vertex Developments",
      clientAr: "فيرتكس للتطوير العقاري",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      summaryEn: "Sold out $18M compound phase within 14 days using Google Search & Instagram VIP Ads.",
      summaryAr: "بيع مرحلة سكنية بقيمة 18 مليون دولار خلال 14 يوماً عبر إعلانات جوجل وانستجرام.",
      metricsEn: "$18M Inventory Sold Out",
      metricsAr: "بيع بالكامل بقيمة 18$ مليون",
      detailsEn: "3D virtual tour video ads, ultra-high-net-worth customer profiling, lead qualification automation.",
      detailsAr: "إعلانات الجولات الافتراضية ثلاثية الأبعاد، واستخلاص بيانات كبار العملاء المستهدفين."
    },
    {
      id: "w6",
      category: "branding",
      titleEn: "FinPulse NeoBank Brand Creation",
      titleAr: "تأسيس هوية بنك فين بلس الرقمي",
      clientEn: "FinPulse Global",
      clientAr: "بنك فين بلس",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      summaryEn: "Designing a sleek fintech identity for Gen-Z and millennial digital banking users.",
      summaryAr: "تصميم هوية مالية عصرية لبنك رقمي يستهدف جيل الشباب والمبتكرين.",
      metricsEn: "+250k Waiting List Signups",
      metricsAr: "+250 ألف مسجل في قائمة الانتظار",
      detailsEn: "UI/UX design system, debit card metallic foil design, social brand voice guidelines.",
      detailsAr: "نظام التصميم الرقمي للتطبيق، تصميم بطاقات الصراف الآلي المعدنية، ودليل لغة العلامة."
    }
  ],

  clients: [],

  teamMembers: [],

  testimonials: [
    {
      id: "t1",
      nameEn: "Faris Al-Otaibi",
      nameAr: "فارس العتيبي",
      roleEn: "CEO, Velocity Motors",
      roleAr: "الرئيس التنفيذي، فيلوسيتي موتورز",
      quoteEn: "Ninety Nine completely revolutionized our digital presence. Their video production quality is Hollywood-level, and the ad campaign ROI exceeded all expectations!",
      quoteAr: "وكالة Ninety Nine غيرت تواجدنا الرقمي بالكامل. جودة إنتاج الفيديوهات لديهم بمستوى سينمائي عالمي، وعائد الإعلانات تجاوز كل توقعاتنا!",
      rating: 5
    },
    {
      id: "t2",
      nameEn: "Sarah Jenkins",
      nameAr: "سارة جينكينز",
      roleEn: "CMO, Aura Cosmetics",
      roleAr: "مديرة التسويق، أورا للتجميل",
      quoteEn: "Working with Ninety Nine feels like having a hyper-dedicated growth team. They scaled our store revenue 5x in less than four months. Absolutely incredible execution!",
      quoteAr: "العمل مع Ninety Nine يشبه امتلاك فريق نمو فائق الشغف. ضاعفوا مبيعات متجرنا 5 مرات خلال أقل من 4 أشهر. تنفيذ خيالي ومحترف!",
      rating: 5
    },
    {
      id: "t3",
      nameEn: "Eng. Ahmed Mansour",
      nameAr: "م. أحمد منصور",
      roleEn: "Managing Director, Vertex Developments",
      roleAr: "العضو المنتدب، فيرتكس للتطوير",
      quoteEn: "The speed at which they generated qualified real estate buyers was astonishing. Sold out our compound phase in 2 weeks flat!",
      quoteAr: "السرعة التي جلبوا بها المشتريين المباشرين لطلب العقارات كانت مذهلة! تم بيع كامل المرحلة في أسبوعين فقط!",
      rating: 5
    }
  ],

  plans: [
    {
      id: "p1",
      nameEn: "STARTER LAUNCH",
      nameAr: "باقة الانطلاق",
      popular: false,
      featuresEn: [
        "Manage 2 Main Social Platforms",
        "12 High-Quality Designed Posts",
        "4 Short Reels / TikTok Videos",
        "Basic Paid Ads Management ($1k Spend)",
        "Monthly ROI Performance Report",
        "Dedicated Account Executive"
      ],
      featuresAr: [
        "إدارة منصتين على التواصل الاجتماعي",
        "12 تصميم احترافي منشور",
        "4 فيديوهات ريلز / تيك توك قصيرة",
        "إدارة إعلانات ممولة (إنفاق حتى 1000$)",
        "تقرير أداء ونتائج شهري",
        "مدير حساب مخصص لمشروعك"
      ]
    },
    {
      id: "p2",
      nameEn: "GROWTH SCALE",
      nameAr: "باقة النمو والتوسع",
      popular: true,
      featuresEn: [
        "Manage 4 Social Platforms",
        "24 Custom Designed Posts / Stories",
        "8 Cinematic Shorts & Reels",
        "Advanced Multi-Channel Meta & TikTok Ads",
        "A/B Landing Page Copywriting & Funnels",
        "Weekly Strategy Meetings & 24/7 Priority Support"
      ],
      featuresAr: [
        "إدارة 4 منصات تواصل اجتماعي",
        "24 تصميم بوست وستوري مبتكر",
        "8 فيديوهات ريلز وسينمائية واسعة الانتشار",
        "حملات ممولة متطورة فيسبوك، تيك توك وجوجل",
        "كتابة نصوص صفحات الهبوط وتصميم مسارات التحويل",
        "اجتماعات استراتيجية أسبوعية ودعم أولوية"
      ]
    },
    {
      id: "p3",
      nameEn: "DOMINANCE ENTERPRISE",
      nameAr: "باقة السيطرة الكاملة",
      popular: false,
      featuresEn: [
        "Omnichannel Total Brand Takeover",
        "Unlimited High-Converting Graphics",
        "16 Commercial 4K Videos & Reels",
        "Full Influencer Network & PR Campaigns",
        "Full SEO Domination & Google Ads Scaling",
        "On-Site Shooting Crew & Full Creative Studio"
      ],
      featuresAr: [
        "إدارة وتغطية شاملة لكافة المنصات والموقع",
        "تصاميم جرافيك غير محدودة عالية التحويل",
        "16 فيديو إعلاني وسينمائي 4K شهرياً",
        "حملات مؤثرين وعلاقات عامة وتغطية صحفية",
        "تصدر محركات البحث وجوجل بالكامل",
        "طاقم تصوير ميداني مع استديو كامل مخصص"
      ]
    }
  ],

  messages: [],

  settings: {
    agencyName: "Ninety Nine Marketing Agency",
    contactEmail: "ninetynine",
    contactPhone: "+966 50 000 7468",
    officeAddressEn: "King Fahd Road, Business Tower 14, Riyadh, Saudi Arabia",
    officeAddressAr: "طريق الملك فهد، برج الأعمال 14، الرياض، المملكة العربية السعودية",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/966500007468"
  }
};
