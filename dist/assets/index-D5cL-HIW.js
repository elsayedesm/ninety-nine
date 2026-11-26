(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const me={hero:{en:{badge:"LEADING DIGITAL MARKETING AGENCY",title:"WE TAKE YOUR BRAND TO THE NEXT LEVEL",subtitle:"Data-driven performance marketing, high-impact video production, and viral social media campaigns built for explosive brand growth.",primaryCta:"Explore Portfolio",secondaryCta:"Book a Consultation"},ar:{badge:"وكالة التسويق الرقمي الأولى والرواد في الإبداع",title:"حوّل حملاتك الإعلانية إلى قوة بيعية تُغلق الصفقات وتضاعف المبيعات",subtitle:"عزّز الـ ROI لنشاطك التجاري من خلال تحسين كل مرحلة في الـ Sales Funnel ، للوصول إلى عملاء مستعدين للشراء بنفس ميزانيتك الإعلانية.",primaryCta:"استعرض أعمالنا",secondaryCta:"احجز استشارة مجانية"},stats:[{id:"s1",number:"+150",labelEn:"Campaigns Launched",labelAr:"حملة تسويقية ناجحة"},{id:"s2",number:"+380%",labelEn:"Average ROI Boost",labelAr:"متوسط زيادة العائد"},{id:"s3",number:"25M+",labelEn:"Total Ad Reach",labelAr:"وصول الإعلانات"},{id:"s4",number:"18",labelEn:"Industry Awards",labelAr:"جائزة إبداعية"}]},about:{en:{tag:"OUR SERVICES",title:"What Services Does Ninety Nine Offer?",description:"At Ninety Nine, we offer a complete suite of marketing services designed to grow your business and deliver measurable results:"},ar:{tag:"",title:"ما الخدمات التي نقدمها في Ninety Nine؟",titleSuffix:"",description:"نقدم في Ninety Nine منظومة متكاملة من الخدمات التسويقية المصممة لدفع أعمالك نحو النمو وتحقيق نتائج ملموسة:"},services:[{id:"service-performance",icon:"Megaphone",titleEn:"Performance Marketing",titleAr:"(Performance Marketing)",descEn:"Manage campaigns across Meta, TikTok, and Google to get the best return from your ad budget.",descAr:"إدارة الحملات الإعلانية عبر Meta وTikTok وGoogle لتحقيق أفضل عائد من ميزانيتك الإعلانية."},{id:"service-content-copywriting",icon:"FileText",titleEn:"Content Strategy & Copywriting",titleAr:"(Content Strategy & Copywriting)",descEn:"Craft marketing messages that speak to your target audience and strengthen their engagement with your brand.",descAr:"صياغة رسائل تسويقية تخاطب جمهورك المستهدف، وتعزز تفاعله مع علامتك التجارية."},{id:"service-sales-funnels",icon:"TrendingUp",titleEn:"Sales Funnels",titleAr:"(Sales Funnels)",descEn:"Design a complete customer journey, from seeing an ad to making a purchase and becoming a loyal customer.",descAr:"تصميم رحلة متكاملة للعميل، بدءًا من مشاهدة الإعلان وحتى إتمام الشراء وتحويله إلى عميل دائم."}]},whyChooseUs:{en:{tag:"WHY NINETY NINE",title:"You can manage your ads yourself... but why do you need Ninety Nine?",introduction:"We help you shorten a long journey of research and trial and error by identifying the right marketing strategy for your business: Performance Ads, Brand Awareness, or a mix of both.",structureTitle:"Our Structure",structureDescription:"We rely on a proven framework shaped by working with dozens of different businesses, contributing to millions in sales.",structureImpact:"If your business spends EGP 200,000 per month on ads without achieving the desired results, the issue may lie in your funnel. At Ninety Nine, we optimize conversion rates and refine your marketing message to generate more clients and net profit from the same budget.",audienceTitle:"Audience Segmentation"},ar:{tag:"",title:"يمكنك إدارة إعلاناتك بنفسك... لكن لماذا تحتاج إلى Ninety Nine؟",introduction:"نساعدك على اختصار رحلة طويلة من البحث والتجربة، من خلال تحديد الاستراتيجية التسويقية الأنسب لنشاطك التجاري: هل تحتاج إلى Performance Ads ، أم Brand Awareness ، أم مزيج بينهما؟",structureTitle:"منهجية العمل",structureDescription:"نعتمد على Structure مُجرّبة مع عشرات الأنشطة التجارية المختلفة، وأسهمت في تحقيق ملايين المبيعات.",structureImpact:"إذا كان نشاطك التجاري ينفق 200,000 جنيه شهريًا على الإعلانات دون تحقيق النتائج المرجوّة، فقد يكون الخلل في الـ Funnel . في Ninety Nine، نعمل على تحسين الـ Conversion Rate وتطوير رسالتك التسويقية، لنحقق من خلال الميزانية نفسها زيادة ملموسة في عدد الـ Clients وصافي الأرباح.",audienceTitle:""},items:[{id:"partnership",icon:"Users",titleEn:"Strategic Partnership",titleAr:"شراكة استراتيجية متكاملة",descEn:"We act as your growth partner by building the strategy, optimizing funnels, and managing campaigns with measurable business impact.",descAr:"نحن نعمل كشريك نمو لك؛ نضع الاستراتيجيات، ونطور مسارات المبيعات، وندير حملاتك الإعلانية باحترافية لتحقيق نمو مستدام."},{id:"budget",icon:"Sliders",titleEn:"Smart Budget Management",titleAr:"إدارة احترافية للميزانية",descEn:"Our specialists continuously analyze performance to reduce wasted spend and turn your marketing budget into a predictable revenue engine.",descAr:"نوفر لك فريقًا متخصصًا يحلل البيانات باستمرار، ويعمل على تقليل هدر الميزانية وتحويل إنفاقك الإعلاني إلى أرباح حقيقية."},{id:"tracking",icon:"TrendingUp",titleEn:"Performance Tracking",titleAr:"تحكم دقيق في النتائج",descEn:"We give you a clear view of CPL, CPA, conversion rates, and traffic quality so every decision is backed by data.",descAr:"نمنحك رؤية واضحة لأداء حملاتك من خلال تتبع دقيق لـ CPL، وCPA، ومعدلات التحويل وحركة الزوار."},{id:"scaling",icon:"Check",titleEn:"Data-Driven Scaling",titleAr:"نمو مدروس",descEn:"We identify the campaigns and ad sets delivering the strongest results and scale them with confidence using real performance data.",descAr:"نحدد الحملات والمجموعات الإعلانية الأكثر تحقيقًا للنتائج، لنوسّع نطاقها ونزيد الميزانيات بناءً على بيانات فعلية وعائد استثماري واضح."}],audienceSegments:[{id:"ready-to-buy",icon:"Check",titleEn:"Ready to Buy",titleAr:"Ready to Buy (مستعد للشراء)",descEn:"A customer convinced by your product or service and ready to make a purchase decision.",descAr:"عميل مقتنع بمنتجك أو خدمتك، ومستعد لاتخاذ قرار الشراء."},{id:"potential-customer",icon:"Users",titleEn:"Potential Customer",titleAr:"Potential Customer (عميل متردد)",descEn:"A customer who needs more information and trust in your brand before deciding to buy.",descAr:"يحتاج إلى مزيد من المعلومات وبناء الثقة مع علامتك التجارية لاتخاذ قرار الشراء."},{id:"lost-customer",icon:"TrendingUp",titleEn:"Lost Customer",titleAr:"Lost Customer (عميل غادر دون شراء)",descEn:"We reach them again through retargeting to encourage them to complete their purchase.",descAr:"نستهدفه مجددًا من خلال Retargeting (إعادة الاستهداف) لتحفيزه على إتمام عملية الشراء."}]},works:[{id:"w1",category:"video",titleEn:"Neon Velocity Commercial",titleAr:"إعلان تجاري لشركة سرعة النيون",clientEn:"Velocity Motors",clientAr:"فيلوسيتي موتورز",image:"https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",summaryEn:"A high-octane 4K TV commercial campaign boosting test-drive inquiries by 310%.",summaryAr:"إعلان سينمائي 4K بدقة عالية أدى لزيادة حجز تجارب القيادة بنسبة 310%.",metricsEn:"+310% Leads | 4.2M Views",metricsAr:"+310% عملاء محتملين | 4.2 مليون مشاهدة",detailsEn:"Designed complete storyboard, RED 8K camera shooting, VFX animations, and targeted YouTube Bumper Ads strategy.",detailsAr:"قمنا بكتابة السيناريو، التصوير بريد 8K، إضافة المؤثرات البصرية وتوجيه الحملة الإعلانية على يوتيوب."},{id:"w2",category:"ads",titleEn:"Aura Cosmetics E-Commerce Scaling",titleAr:"مضاعفة مبيعات متجر أورا للتجميل",clientEn:"Aura Beauty Co.",clientAr:"أورا لمنتجات التجميل",image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",summaryEn:"Scaled monthly revenue from $40k to $290k using UGC TikTok Ads & Meta Retargeting.",summaryAr:"زيادة الإيرادات الشهرية من 40 ألف إلى 290 ألف دولار عبر إعلانات تيك توك وفيسبوك.",metricsEn:"$290k Monthly Revenue | 5.4x ROAS",metricsAr:"290$ ألف إيراد شهري | عائد 5.4x",detailsEn:"Created 45+ UGC video variations, built automated WhatsApp funnels, and optimized landing page conversions.",detailsAr:"إنتاج أكثر من 45 فيديو إعلاني مع صناع محتوى، وبناء مسارات تحويل تلقائية لزيادة المبيعات."},{id:"w3",category:"branding",titleEn:"CyberBite Cloud Kitchen Rebrand",titleAr:"إعادة بناء الهوية لكلاود كيتشن سايبر بايت",clientEn:"CyberBite Foods",clientAr:"سلسلة مطاعم سايبر بايت",image:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",summaryEn:"Complete brand overhaul, futuristic packaging design, and viral launch campaign.",summaryAr:"إعادة هيكلة الهوية البصرية كاملة، تصميم التغليف المستقبلي وحملة تدشين واسعة.",metricsEn:"12 New Franchise Locations",metricsAr:"افتتاح 12 فرعاً جديداً",detailsEn:"Modern neon aesthetic logo system, packaging engineering, menu photography, and grand opening social buzz.",detailsAr:"تصميم شعار نيوني عصري، علب التغليف، تصوير الأطباق، وحملة إعلامية للافتتاح."},{id:"w4",category:"social",titleEn:"Apex Fitness App 1M Members Campaign",titleAr:"حملة تطبيق آبيكس لفيتنس (مليون مشترك)",clientEn:"Apex Global",clientAr:"تطبيق آبيكس للرياضة",image:"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",summaryEn:"Generated over 1,000,000 active app downloads across MENA region in 90 days.",summaryAr:"تحقيق أكثر من 1,000,000 تحميل للتطبيق في الشرق الأوسط خلال 90 يوماً فقط.",metricsEn:"1.2M Downloads | #1 Store Rank",metricsAr:"1.2M تحميل | المرتبة الأولى بالمتاجر",detailsEn:"Fitness micro-influencers network, challenge hashtag creation, performance Meta app install ads.",detailsAr:"إدارة شبكة من 80 مؤثر رياضي، إطلاق هاشتاج تحدي تيك توك، وإعلانات تثبيت التطبيق."},{id:"w5",category:"ads",titleEn:"Vertex Real Estate Luxury Launches",titleAr:"إطلاق المجمعات السكنية الفاخرة لـ فيرتكس",clientEn:"Vertex Developments",clientAr:"فيرتكس للتطوير العقاري",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",summaryEn:"Sold out $18M compound phase within 14 days using Google Search & Instagram VIP Ads.",summaryAr:"بيع مرحلة سكنية بقيمة 18 مليون دولار خلال 14 يوماً عبر إعلانات جوجل وانستجرام.",metricsEn:"$18M Inventory Sold Out",metricsAr:"بيع بالكامل بقيمة 18$ مليون",detailsEn:"3D virtual tour video ads, ultra-high-net-worth customer profiling, lead qualification automation.",detailsAr:"إعلانات الجولات الافتراضية ثلاثية الأبعاد، واستخلاص بيانات كبار العملاء المستهدفين."},{id:"w6",category:"branding",titleEn:"FinPulse NeoBank Brand Creation",titleAr:"تأسيس هوية بنك فين بلس الرقمي",clientEn:"FinPulse Global",clientAr:"بنك فين بلس",image:"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",summaryEn:"Designing a sleek fintech identity for Gen-Z and millennial digital banking users.",summaryAr:"تصميم هوية مالية عصرية لبنك رقمي يستهدف جيل الشباب والمبتكرين.",metricsEn:"+250k Waiting List Signups",metricsAr:"+250 ألف مسجل في قائمة الانتظار",detailsEn:"UI/UX design system, debit card metallic foil design, social brand voice guidelines.",detailsAr:"نظام التصميم الرقمي للتطبيق، تصميم بطاقات الصراف الآلي المعدنية، ودليل لغة العلامة."}],clients:[],teamMembers:[],testimonials:[{id:"t1",nameEn:"Faris Al-Otaibi",nameAr:"فارس العتيبي",roleEn:"CEO, Velocity Motors",roleAr:"الرئيس التنفيذي، فيلوسيتي موتورز",quoteEn:"Ninety Nine completely revolutionized our digital presence. Their video production quality is Hollywood-level, and the ad campaign ROI exceeded all expectations!",quoteAr:"وكالة Ninety Nine غيرت تواجدنا الرقمي بالكامل. جودة إنتاج الفيديوهات لديهم بمستوى سينمائي عالمي، وعائد الإعلانات تجاوز كل توقعاتنا!",rating:5},{id:"t2",nameEn:"Sarah Jenkins",nameAr:"سارة جينكينز",roleEn:"CMO, Aura Cosmetics",roleAr:"مديرة التسويق، أورا للتجميل",quoteEn:"Working with Ninety Nine feels like having a hyper-dedicated growth team. They scaled our store revenue 5x in less than four months. Absolutely incredible execution!",quoteAr:"العمل مع Ninety Nine يشبه امتلاك فريق نمو فائق الشغف. ضاعفوا مبيعات متجرنا 5 مرات خلال أقل من 4 أشهر. تنفيذ خيالي ومحترف!",rating:5},{id:"t3",nameEn:"Eng. Ahmed Mansour",nameAr:"م. أحمد منصور",roleEn:"Managing Director, Vertex Developments",roleAr:"العضو المنتدب، فيرتكس للتطوير",quoteEn:"The speed at which they generated qualified real estate buyers was astonishing. Sold out our compound phase in 2 weeks flat!",quoteAr:"السرعة التي جلبوا بها المشتريين المباشرين لطلب العقارات كانت مذهلة! تم بيع كامل المرحلة في أسبوعين فقط!",rating:5}],plans:[{id:"p1",nameEn:"STARTER LAUNCH",nameAr:"باقة الانطلاق",popular:!1,featuresEn:["Manage 2 Main Social Platforms","12 High-Quality Designed Posts","4 Short Reels / TikTok Videos","Basic Paid Ads Management ($1k Spend)","Monthly ROI Performance Report","Dedicated Account Executive"],featuresAr:["إدارة منصتين على التواصل الاجتماعي","12 تصميم احترافي منشور","4 فيديوهات ريلز / تيك توك قصيرة","إدارة إعلانات ممولة (إنفاق حتى 1000$)","تقرير أداء ونتائج شهري","مدير حساب مخصص لمشروعك"]},{id:"p2",nameEn:"GROWTH SCALE",nameAr:"باقة النمو والتوسع",popular:!0,featuresEn:["Manage 4 Social Platforms","24 Custom Designed Posts / Stories","8 Cinematic Shorts & Reels","Advanced Multi-Channel Meta & TikTok Ads","A/B Landing Page Copywriting & Funnels","Weekly Strategy Meetings & 24/7 Priority Support"],featuresAr:["إدارة 4 منصات تواصل اجتماعي","24 تصميم بوست وستوري مبتكر","8 فيديوهات ريلز وسينمائية واسعة الانتشار","حملات ممولة متطورة فيسبوك، تيك توك وجوجل","كتابة نصوص صفحات الهبوط وتصميم مسارات التحويل","اجتماعات استراتيجية أسبوعية ودعم أولوية"]},{id:"p3",nameEn:"DOMINANCE ENTERPRISE",nameAr:"باقة السيطرة الكاملة",popular:!1,featuresEn:["Omnichannel Total Brand Takeover","Unlimited High-Converting Graphics","16 Commercial 4K Videos & Reels","Full Influencer Network & PR Campaigns","Full SEO Domination & Google Ads Scaling","On-Site Shooting Crew & Full Creative Studio"],featuresAr:["إدارة وتغطية شاملة لكافة المنصات والموقع","تصاميم جرافيك غير محدودة عالية التحويل","16 فيديو إعلاني وسينمائي 4K شهرياً","حملات مؤثرين وعلاقات عامة وتغطية صحفية","تصدر محركات البحث وجوجل بالكامل","طاقم تصوير ميداني مع استديو كامل مخصص"]}],messages:[],settings:{agencyName:"Ninety Nine Marketing Agency",contactEmail:"ninetynine",contactPhone:"+966 50 000 7468",officeAddressEn:"King Fahd Road, Business Tower 14, Riyadh, Saudi Arabia",officeAddressAr:"طريق الملك فهد، برج الأعمال 14، الرياض، المملكة العربية السعودية",instagram:"https://instagram.com",tiktok:"https://tiktok.com",facebook:"https://facebook.com",linkedin:"https://linkedin.com",whatsapp:"https://wa.me/966500007468"}};var Qe={};(function t(e,a,n,i){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var l=new OffscreenCanvas(1,1),r=l.getContext("2d");r.fillRect(0,0,1,1);var v=l.transferToImageBitmap();r.createPattern(v,"no-repeat")}catch{return!1}return!0})();function m(){}function g(l){var r=a.exports.Promise,v=r!==void 0?r:e.Promise;return typeof v=="function"?new v(l):(l(m,m),null)}var p=(function(l,r){return{transform:function(v){if(l)return v;if(r.has(v))return r.get(v);var b=new OffscreenCanvas(v.width,v.height),x=b.getContext("2d");return x.drawImage(v,0,0),r.set(v,b),b},clear:function(){r.clear()}}})(d,new Map),u=(function(){var l=Math.floor(16.666666666666668),r,v,b={},x=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(A){var k=Math.random();return b[k]=requestAnimationFrame(function h(M){x===M||x+l-1<M?(x=M,delete b[k],A()):b[k]=requestAnimationFrame(h)}),k},v=function(A){b[A]&&cancelAnimationFrame(b[A])}):(r=function(A){return setTimeout(A,l)},v=function(A){return clearTimeout(A)}),{frame:r,cancel:v}})(),w=(function(){var l,r,v={};function b(x){function A(k,h){x.postMessage({options:k||{},callback:h})}x.init=function(h){var M=h.transferControlToOffscreen();x.postMessage({canvas:M},[M])},x.fire=function(h,M,P){if(r)return A(h,null),r;var L=Math.random().toString(36).slice(2);return r=g(function(N){function j(U){U.data.callback===L&&(delete v[L],x.removeEventListener("message",j),r=null,p.clear(),P(),N())}x.addEventListener("message",j),A(h,L),v[L]=j.bind(null,{data:{callback:L}})}),r},x.reset=function(){x.postMessage({reset:!0});for(var h in v)v[h](),delete v[h]}}return function(){if(l)return l;if(!n&&o){var x=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{l=new Worker(URL.createObjectURL(new Blob([x])))}catch(A){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",A),null}b(l)}return l}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function I(l,r){return r?r(l):l}function $(l){return l!=null}function f(l,r,v){return I(l&&$(l[r])?l[r]:E[r],v)}function O(l){return l<0?0:Math.floor(l)}function D(l,r){return Math.floor(Math.random()*(r-l))+l}function _(l){return parseInt(l,16)}function Y(l){return l.map(pt)}function pt(l){var r=String(l).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:_(r.substring(0,2)),g:_(r.substring(2,4)),b:_(r.substring(4,6))}}function gt(l){var r=f(l,"origin",Object);return r.x=f(r,"x",Number),r.y=f(r,"y",Number),r}function vt(l){l.width=document.documentElement.clientWidth,l.height=document.documentElement.clientHeight}function ht(l){var r=l.getBoundingClientRect();l.width=r.width,l.height=r.height}function ft(l){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=l,r}function bt(l,r,v,b,x,A,k,h,M){l.save(),l.translate(r,v),l.rotate(A),l.scale(b,x),l.arc(0,0,1,k,h,M),l.restore()}function yt(l){var r=l.angle*(Math.PI/180),v=l.spread*(Math.PI/180);return{x:l.x,y:l.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:l.startVelocity*.5+Math.random()*l.startVelocity,angle2D:-r+(.5*v-Math.random()*v),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:l.color,shape:l.shape,tick:0,totalTicks:l.ticks,decay:l.decay,drift:l.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:l.gravity*3,ovalScalar:.6,scalar:l.scalar,flat:l.flat}}function wt(l,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var v=r.tick++/r.totalTicks,b=r.x+r.random*r.tiltCos,x=r.y+r.random*r.tiltSin,A=r.wobbleX+r.random*r.tiltCos,k=r.wobbleY+r.random*r.tiltSin;if(l.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-v)+")",l.beginPath(),c&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))l.fill(xt(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(A-b)*.1,Math.abs(k-x)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var h=Math.PI/10*r.wobble,M=Math.abs(A-b)*.1,P=Math.abs(k-x)*.1,L=r.shape.bitmap.width*r.scalar,N=r.shape.bitmap.height*r.scalar,j=new DOMMatrix([Math.cos(h)*M,Math.sin(h)*M,-Math.sin(h)*P,Math.cos(h)*P,r.x,r.y]);j.multiplySelf(new DOMMatrix(r.shape.matrix));var U=l.createPattern(p.transform(r.shape.bitmap),"no-repeat");U.setTransform(j),l.globalAlpha=1-v,l.fillStyle=U,l.fillRect(r.x-L/2,r.y-N/2,L,N),l.globalAlpha=1}else if(r.shape==="circle")l.ellipse?l.ellipse(r.x,r.y,Math.abs(A-b)*r.ovalScalar,Math.abs(k-x)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):bt(l,r.x,r.y,Math.abs(A-b)*r.ovalScalar,Math.abs(k-x)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var T=Math.PI/2*3,z=4*r.scalar,Z=8*r.scalar,X=r.x,ee=r.y,te=5,Q=Math.PI/te;te--;)X=r.x+Math.cos(T)*Z,ee=r.y+Math.sin(T)*Z,l.lineTo(X,ee),T+=Q,X=r.x+Math.cos(T)*z,ee=r.y+Math.sin(T)*z,l.lineTo(X,ee),T+=Q;else l.moveTo(Math.floor(r.x),Math.floor(r.y)),l.lineTo(Math.floor(r.wobbleX),Math.floor(x)),l.lineTo(Math.floor(A),Math.floor(k)),l.lineTo(Math.floor(b),Math.floor(r.wobbleY));return l.closePath(),l.fill(),r.tick<r.totalTicks}function $t(l,r,v,b,x){var A=r.slice(),k=l.getContext("2d"),h,M,P=g(function(L){function N(){h=M=null,k.clearRect(0,0,b.width,b.height),p.clear(),x(),L()}function j(){n&&!(b.width===i.width&&b.height===i.height)&&(b.width=l.width=i.width,b.height=l.height=i.height),!b.width&&!b.height&&(v(l),b.width=l.width,b.height=l.height),k.clearRect(0,0,b.width,b.height),A=A.filter(function(U){return wt(k,U)}),A.length?h=u.frame(j):N()}h=u.frame(j),M=N});return{addFettis:function(L){return A=A.concat(L),P},canvas:l,promise:P,reset:function(){h&&u.cancel(h),M&&M()}}}function je(l,r){var v=!l,b=!!f(r||{},"resize"),x=!1,A=f(r,"disableForReducedMotion",Boolean),k=o&&!!f(r||{},"useWorker"),h=k?w():null,M=v?vt:ht,P=l&&h?!!l.__confetti_initialized:!1,L=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,N;function j(T,z,Z){for(var X=f(T,"particleCount",O),ee=f(T,"angle",Number),te=f(T,"spread",Number),Q=f(T,"startVelocity",Number),kt=f(T,"decay",Number),Mt=f(T,"gravity",Number),Ct=f(T,"drift",Number),Re=f(T,"colors",Y),It=f(T,"ticks",Number),Oe=f(T,"shapes"),Tt=f(T,"scalar"),St=!!f(T,"flat"),qe=gt(T),Ue=X,Ie=[],Bt=l.width*qe.x,Pt=l.height*qe.y;Ue--;)Ie.push(yt({x:Bt,y:Pt,angle:ee,spread:te,startVelocity:Q,color:Re[Ue%Re.length],shape:Oe[D(0,Oe.length)],ticks:It,decay:kt,gravity:Mt,drift:Ct,scalar:Tt,flat:St}));return N?N.addFettis(Ie):(N=$t(l,Ie,M,z,Z),N.promise)}function U(T){var z=A||f(T,"disableForReducedMotion",Boolean),Z=f(T,"zIndex",Number);if(z&&L)return g(function(Q){Q()});v&&N?l=N.canvas:v&&!l&&(l=ft(Z),document.body.appendChild(l)),b&&!P&&M(l);var X={width:l.width,height:l.height};h&&!P&&h.init(l),P=!0,h&&(l.__confetti_initialized=!0);function ee(){if(h){var Q={getBoundingClientRect:function(){if(!v)return l.getBoundingClientRect()}};M(Q),h.postMessage({resize:{width:Q.width,height:Q.height}});return}X.width=X.height=null}function te(){N=null,b&&(x=!1,e.removeEventListener("resize",ee)),v&&l&&(document.body.contains(l)&&document.body.removeChild(l),l=null,P=!1)}return b&&!x&&(x=!0,e.addEventListener("resize",ee,!1)),h?h.fire(T,X,te):j(T,X,te)}return U.reset=function(){h&&h.reset(),N&&N.reset()},U}var Ce;function De(){return Ce||(Ce=je(null,{useWorker:!0,resize:!0})),Ce}function xt(l,r,v,b,x,A,k){var h=new Path2D(l),M=new Path2D;M.addPath(h,new DOMMatrix(r));var P=new Path2D;return P.addPath(M,new DOMMatrix([Math.cos(k)*x,Math.sin(k)*x,-Math.sin(k)*A,Math.cos(k)*A,v,b])),P}function At(l){if(!c)throw new Error("path confetti are not supported in this browser");var r,v;typeof l=="string"?r=l:(r=l.path,v=l.matrix);var b=new Path2D(r),x=document.createElement("canvas"),A=x.getContext("2d");if(!v){for(var k=1e3,h=k,M=k,P=0,L=0,N,j,U=0;U<k;U+=2)for(var T=0;T<k;T+=2)A.isPointInPath(b,U,T,"nonzero")&&(h=Math.min(h,U),M=Math.min(M,T),P=Math.max(P,U),L=Math.max(L,T));N=P-h,j=L-M;var z=10,Z=Math.min(z/N,z/j);v=[Z,0,0,Z,-Math.round(N/2+h)*Z,-Math.round(j/2+M)*Z]}return{type:"path",path:r,matrix:v}}function Et(l){var r,v=1,b="#000000",x='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof l=="string"?r=l:(r=l.text,v="scalar"in l?l.scalar:v,x="fontFamily"in l?l.fontFamily:x,b="color"in l?l.color:b);var A=10*v,k=""+A+"px "+x,h=new OffscreenCanvas(A,A),M=h.getContext("2d");M.font=k;var P=M.measureText(r),L=Math.ceil(P.actualBoundingBoxRight+P.actualBoundingBoxLeft),N=Math.ceil(P.actualBoundingBoxAscent+P.actualBoundingBoxDescent),j=2,U=P.actualBoundingBoxLeft+j,T=P.actualBoundingBoxAscent+j;L+=j+j,N+=j+j,h=new OffscreenCanvas(L,N),M=h.getContext("2d"),M.font=k,M.fillStyle=b,M.fillText(r,U,T);var z=1/v;return{type:"bitmap",bitmap:h.transferToImageBitmap(),matrix:[z,0,0,z,-L*z/2,-N*z/2]}}a.exports=function(){return De().apply(this,arguments)},a.exports.reset=function(){De().reset()},a.exports.create=je,a.exports.shapeFromPath=At,a.exports.shapeFromText=Et})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Qe,!1);Qe.exports.create;const he="shot_agency_data";let s=Lt(),C="ar",xe=localStorage.getItem("shot_theme")||"dark",q=lt(),Ae="all",pe=!1,we=!1,F="overview",ae=!1,ge=null,de=null,G="",$e=0,Fe=null;function Nt(t){return typeof t!="string"?t:t.replace(/\bSHOT\b/gi,"Ninety Nine").replace(/\bshot\b/gi,"Ninety Nine")}function B(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ue(t){return!t||typeof t!="object"?t:Array.isArray(t)?t.map(e=>ue(e)):(Object.keys(t).forEach(e=>{const a=t[e];typeof a=="string"?t[e]=Nt(a):a&&typeof a=="object"&&(t[e]=ue(a))}),t)}function Lt(){const t=localStorage.getItem(he);if(t)try{const e=JSON.parse(t),a=ke(ue(e));return JSON.stringify(a)!==t&&localStorage.setItem(he,JSON.stringify(a)),a}catch(e){console.error("Error parsing storage data",e)}return ke(ue(JSON.parse(JSON.stringify(me))))}function J(){try{return localStorage.setItem(he,JSON.stringify(s)),!0}catch(t){return console.warn("localStorage quota exceeded",t),!1}}async function jt(){try{const t=await fetch(`${se}/api/site-content`);if(!t.ok)return!1;const e=await t.json();return e!=null&&e.data?(s=ke(ue(e.data)),J(),!0):!1}catch(t){return console.warn("Remote data sync unavailable:",t.message||t),!1}}const Dt="shot_media_db",fe="media",ve=new Map;let We=!1;function et(){return new Promise((t,e)=>{const a=indexedDB.open(Dt,1);a.onupgradeneeded=()=>a.result.createObjectStore(fe),a.onsuccess=()=>t(a.result),a.onerror=()=>e(a.error)})}async function Rt(t,e){const a=await et();return new Promise((n,i)=>{const o=a.transaction(fe,"readwrite");o.objectStore(fe).put(e,t),o.oncomplete=()=>n(),o.onerror=()=>i(o.error)})}async function tt(t){const e=await et();return new Promise((a,n)=>{const o=e.transaction(fe,"readonly").objectStore(fe).get(t);o.onsuccess=()=>a(o.result||null),o.onerror=()=>n(o.error)})}function H(t){return typeof t=="string"&&t.startsWith("idb:")}function at(t){return t.replace(/^idb:/,"")}function be(t){const[e,a]=t.split(","),n=(e.match(/:(.*?);/)||[])[1]||"application/octet-stream",i=atob(a),o=new Uint8Array(i.length);for(let c=0;c<i.length;c++)o[c]=i.charCodeAt(c);return new Blob([o],{type:n})}async function it(t){const e=`media-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;await Rt(e,t);const a=`idb:${e}`,n=URL.createObjectURL((t instanceof Blob,t));return ve.set(a,n),a}async function re(t){if(!H(t))return t;if(ve.has(t))return ve.get(t);const e=await tt(at(t));if(e){const a=URL.createObjectURL(e);return ve.set(t,a),a}return""}function oe(t){return t&&(H(t)?ve.get(t)||"":t)}function ie(t){if(!t)return"";const e=oe(t);return e||(H(t)?"":t)}async function Ot(){const t=document.querySelectorAll("[data-media-ref]");await Promise.all([...t].map(async e=>{const a=e.dataset.mediaRef;if(!a||!H(a))return;const n=await re(a);n&&(e.tagName==="IMG"||e.tagName==="VIDEO")&&(e.src=n)}))}function qt(t){const e=new Set;return(t.works||[]).forEach(a=>{H(a.videoUrl)&&e.add(a.videoUrl),H(a.image)&&e.add(a.image)}),[...e]}async function He(t){return!t||!t.startsWith("data:")?t:it(be(t))}async function nt(){var e,a;let t=!1;for(const n of s.works)(e=n.videoUrl)!=null&&e.startsWith("data:")&&(n.videoUrl=await He(n.videoUrl),t=!0),(a=n.image)!=null&&a.startsWith("data:")&&n.image.length>1e5&&(n.image=await He(n.image),t=!0);return t}async function Ut(){try{await nt()&&localStorage.setItem(he,JSON.stringify(s));const e=qt(s);await Promise.all(e.map(a=>re(a))),We=!0}catch(t){console.error("Media cache init failed",t),We=!0}}function Ft(t){const e=t.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/);return e?e[1]:null}function Wt(t){const e=Ft(t);return e?`https://img.youtube.com/vi/${e}/maxresdefault.jpg`:null}async function Ht(t){if(!t.match(/vimeo\.com\/(\d+)/))return null;try{return(await(await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(t)}`)).json()).thumbnail_url||null}catch{return null}}function Ee(t){return new Promise((e,a)=>{const n=document.createElement("video");n.muted=!0,n.playsInline=!0,n.preload="auto",n.crossOrigin="anonymous";let i=null;t instanceof Blob||t instanceof File?(i=URL.createObjectURL(t),n.src=i):n.src=t,n.onloadedmetadata=()=>{let o=2.5;n.duration<o&&(o=n.duration/2),n.currentTime=o},n.onseeked=()=>{setTimeout(()=>{try{const o=document.createElement("canvas");o.width=n.videoWidth||640,o.height=n.videoHeight||360,o.getContext("2d").drawImage(n,0,0,o.width,o.height);const d=o.toDataURL("image/jpeg",.8);e(d)}catch(o){a(o)}finally{i&&URL.revokeObjectURL(i)}},150)},n.onerror=()=>{i&&URL.revokeObjectURL(i),a(new Error("Video thumbnail failed"))}})}async function rt(t){if(!t)return null;const e=Wt(t);if(e)return e;const a=await Ht(t);if(a)return a;if(H(t)){const n=oe(t)||await re(t);if(n)try{const o=await(await fetch(n)).blob();return Ee(o)}catch{}}if(t.startsWith("data:video/"))try{return Ee(be(t))}catch{}if(/\.(mp4|webm|ogg|mov)(\?|$)/i.test(t))try{return Ee(t)}catch{}return null}function ot(t){const e=document.getElementById("adm-w-img-preview"),a=document.getElementById("adm-w-img");if(!e||!t)return;const n=oe(t)||t,i=(localStorage.getItem("shot_lang")||"ar")==="ar";e.innerHTML=`
    <div class="media-preview-box" style="margin-top:12px; position:relative; background:rgba(0,0,0,0.5); padding:10px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
      <img src="${n}" alt="preview" style="width:100%; max-height:220px; object-fit:cover; border-radius:var(--radius-md); display:block;" />
      <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.8rem; color:var(--accent-green);">${i?"✨ تم إنشاء الصورة تلقائياً من الفيديو":"✨ Auto-generated from video"}</span>
        <button type="button" class="btn-delete-media" style="padding:6px 14px; background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.4); border-radius:var(--radius-md); font-size:0.85rem; font-weight:700; cursor:pointer;">
          ${i?"🗑️ حذف الصورة فقط":"🗑️ Remove Image Only"}
        </button>
      </div>
    </div>
  `;const o=e.querySelector(".btn-delete-media");o&&(o.onclick=()=>{a&&(a.value=""),e.innerHTML=""})}async function Vt(t){const e=document.getElementById("adm-w-img");if(!e||e.value.trim())return;const a=await rt(t);a&&(a.startsWith("data:")&&a.length>15e4?e.value=await ne(be(a),localStorage.getItem(R)):e.value=a,ot(e.value))}async function zt(){if(await nt(),!J()){const e=(localStorage.getItem("shot_lang")||"ar")==="ar";y(e?"تعذر حفظ بعض البيانات — حجم التخزين ممتلئ":"Storage quota exceeded","error")}}function Me(){const t=[...s.works||[]].sort((e,a)=>{const n=e!=null&&e.createdAt?new Date(e.createdAt).getTime():0,i=a!=null&&a.createdAt?new Date(a.createdAt).getTime():0;return n!==i?i-n:0});return s.works=t,t}function ke(t){var n;if(!t)return t;ue(t),Object.entries({en:{tag:"ABOUT NINETY NINE",title:"We Turn Bold Ideas Into Viral Commercial Success",description:"Ninety Nine is a full-service creative marketing agency born to redefine how modern brands communicate, convert, and scale. We combine cutting-edge visual storytelling with ruthless digital ad strategy to dominate market attention."},ar:{tag:"عن وكالة Ninety Nine",title:"لماذا يحتاج مشروعك إلى وكالة تسويق مثل Ninety Nine؟",description:"وكالة Ninety Nine هي وكالة تسويق متكاملة تأسست لتعيد تعريف كيفية تواصل العلامات التجارية الحديثة وتحقيق أعلى نسب مبيعات. نجمع بين السرد البصري المبتكر وإستراتيجيات الإعلانات المدفوعة للسيطرة على السوق."}}).forEach(([i,o])=>{var d;const c=(d=t.about)==null?void 0:d[i];c&&Object.entries(o).forEach(([m,g])=>{c[m]===g&&(c[m]=me.about[i][m])})});const a=new Set(["srv1","srv2","srv3","srv4","srv5","srv6"]);return Array.isArray((n=t.about)==null?void 0:n.services)&&t.about.services.some(i=>a.has(i==null?void 0:i.id))&&(t.about.services=me.about.services.map(i=>({...i}))),t.clients=Array.isArray(t.clients)?t.clients.filter(i=>i&&typeof i=="object"&&typeof(i.image||i.logo)=="string"&&(i.image||i.logo)).map((i,o)=>({id:i.id||`client-logo-${o+1}`,image:i.image||i.logo})):[],t.teamMembers=Array.isArray(t.teamMembers)?t.teamMembers.filter(i=>i&&typeof i=="object").map((i,o)=>({id:typeof i.id=="string"&&i.id?i.id:`team-member-${o+1}`,name:typeof i.name=="string"?i.name:"",jobTitle:typeof i.jobTitle=="string"?i.jobTitle:"",description:typeof i.description=="string"?i.description:"",image:typeof i.image=="string"?i.image:""})).filter(i=>i.name&&i.jobTitle&&i.description&&i.image):[],Array.isArray(t.works)&&(t.works=[...t.works].sort((i,o)=>{const c=i!=null&&i.createdAt?new Date(i.createdAt).getTime():0,d=o!=null&&o.createdAt?new Date(o.createdAt).getTime():0;return c!==d?d-c:0})),t}function Gt(t=3){return Me().slice(0,t)}async function V(){Me(),await zt();let t=!1;try{await ea(),t=!0}catch(e){console.error("Could not save site content to the database:",e),y(C==="ar"?`تعذر حفظ التغييرات على الخادم: ${e.message}`:`Could not save changes to the server: ${e.message}`,"error")}finally{K()}return t}function st(){if(s.settings.whatsapp)return s.settings.whatsapp;const t=(s.settings.contactPhone||"").replace(/\D/g,"");return t?`https://wa.me/${t}`:"#"}function _t(){const t=document.querySelector(".whatsapp-float");t&&(t.href=st())}function Jt(t,e){return new Promise((a,n)=>{const i=new FileReader;i.onprogress=o=>{if(o.lengthComputable&&e){const c=Math.round(o.loaded/o.total*100);e(c)}},i.onload=()=>{e&&e(100),a(i.result)},i.onerror=o=>n(o),i.readAsDataURL(t)})}function Ve({urlInputId:t,fileInputId:e,previewId:a,currentValue:n,isVideoMode:i=!1,onUpdate:o}){const c=document.getElementById(t),d=document.getElementById(e),m=document.getElementById(a);if(!m)return;const g=(p,u=!1)=>{if(!p){m.innerHTML="";return}const w=oe(p)||p,E=(localStorage.getItem("shot_lang")||"ar")==="ar",I=u?E?"🗑️ حذف الفيديو فقط":"🗑️ Remove Video Only":E?"🗑️ حذف الصورة فقط":"🗑️ Remove Image Only";u?m.innerHTML=`
        <div class="media-preview-box" style="margin-top:12px; position:relative; background:rgba(0,0,0,0.5); padding:10px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <video src="${w}" controls style="width:100%; max-height:220px; border-radius:var(--radius-md); background:#000; display:block;"></video>
          <div style="margin-top:8px; display:flex; justify-content:flex-end;">
            <button type="button" class="btn-delete-media" style="padding:6px 14px; background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.4); border-radius:var(--radius-md); font-size:0.85rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:var(--transition);">
              ${I}
            </button>
          </div>
        </div>
      `:m.innerHTML=`
        <div class="media-preview-box" style="margin-top:12px; position:relative; background:rgba(0,0,0,0.5); padding:10px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
          <img src="${w}" alt="preview" style="width:100%; max-height:220px; object-fit:cover; border-radius:var(--radius-md); display:block;" />
          <div style="margin-top:8px; display:flex; justify-content:flex-end;">
            <button type="button" class="btn-delete-media" style="padding:6px 14px; background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.4); border-radius:var(--radius-md); font-size:0.85rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; transition:var(--transition);">
              ${I}
            </button>
          </div>
        </div>
      `;const $=m.querySelector(".btn-delete-media");$&&($.onclick=()=>{c&&(c.value=""),d&&(d.value=""),m.innerHTML="",o&&o("");const f=(localStorage.getItem("shot_lang")||"ar")==="ar";y(u?f?"تم حذف الفيديو فقط (تم الاحتفاظ بباقي الخانات)":"Video removed (form preserved)":f?"تم حذف الصورة فقط (تم الاحتفاظ بباقي الخانات)":"Image removed (form preserved)")})};if(n){const p=i||n.includes("video/")||H(n)||/\.(mp4|webm|ogg|mov)(\?|$)/i.test(n);H(n)?re(n).then(u=>g(u||n,p)):g(n,p)}c&&(c.oninput=()=>{const p=c.value.trim();if(p){const u=i||/\.(mp4|webm|ogg|mov)(\?|$)/i.test(p)||p.includes("youtube.com")||p.includes("youtu.be")||p.includes("vimeo.com")||p.includes("drive.google.com")||H(p);H(p)?re(p).then(w=>g(w||p,u)):g(p,u),i&&Vt(p)}else g("",!1);o&&o(p)}),d&&(d.onchange=async p=>{const u=p.target.files[0];if(!u)return;const w=i||u.type.startsWith("video/"),E=(localStorage.getItem("shot_lang")||"ar")==="ar";if(u.size>32*1024*1024){p.target.value="",y(E?"الحد الأقصى لحجم الملف هو 32 ميجابايت":"The maximum file size is 32 MB","error");return}m.innerHTML=`
        <div class="upload-progress-box" style="background:rgba(18,32,24,0.9); border:1px solid var(--accent-green); border-radius:var(--radius-md); padding:16px; margin-top:10px; box-shadow:0 4px 20px rgba(253,163,2,0.2);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; font-size:0.9rem; font-weight:700;">
            <span style="color:var(--accent-green); display:flex; align-items:center; gap:8px;">
              ${w?"🎬":"📁"} ${w?E?"جاري رفع الفيديو...":"Uploading video file...":E?"جاري رفع الصورة...":"Uploading image file..."}
            </span>
            <span id="upload-pct-num" style="color:var(--text-primary); font-family:var(--font-en); font-size:1rem; font-weight:900;">0%</span>
          </div>
          <div style="width:100%; height:10px; background:rgba(255,255,255,0.1); border-radius:5px; overflow:hidden;">
            <div id="upload-pct-bar" style="width:0%; height:100%; background:linear-gradient(90deg, #22c55e, var(--accent-green)); transition:width 0.1s ease; border-radius:5px;"></div>
          </div>
        </div>
      `;const I=m.querySelector("#upload-pct-num"),$=m.querySelector("#upload-pct-bar"),f=O=>{I&&(I.textContent=O+"%"),$&&($.style.width=O+"%")};try{if(w){f(30);const O=await ne(u,localStorage.getItem(R));f(70),c&&(c.value=O),g(O,!0),o&&o(O);const D=document.getElementById("adm-w-img");if(D&&!D.value.trim())try{const _=await Ee(u);_.length>15e4?D.value=await ne(be(_),localStorage.getItem(R)):D.value=_,ot(D.value)}catch(_){console.warn("Auto thumbnail failed",_)}f(100),y(E?"تم رفع الفيديو بنجاح! (الصورة التلقائية من الفيديو)":"Video uploaded! Thumbnail auto-generated.")}else{const O=await Jt(u,f);if(O.length>2e5){const D=await ne(u,localStorage.getItem(R));c&&(c.value=D),g(D,!1),o&&o(D)}else c&&(c.value=O),g(O,!1),o&&o(O);y(E?"تم رفع الصورة بنجاح!":"Image uploaded successfully!")}}catch{m.innerHTML="",y(E?"حدث خطأ أثناء رفع الملف":"Error uploading file","error")}})}function Kt(t,e,a){const n=document.getElementById(t),i=document.getElementById(e);if(!n||!i)return;let o=a;i.value=o,n.querySelectorAll(".star-pick").forEach(c=>{c.onclick=()=>{o=Number(c.dataset.val),i.value=o,n.querySelectorAll(".star-pick").forEach(d=>{d.classList.toggle("active",Number(d.dataset.val)<=o)})}})}function lt(){const t=window.location.hash.replace("#","").toLowerCase();return["home","about","works","clients","team","plans","contacts","admin"].includes(t)?t:"home"}function ye(t){q=t,window.location.hash=t,pe=!1,ae=!1,window.scrollTo({top:0,behavior:"smooth"}),K()}window.addEventListener("hashchange",()=>{const t=lt();t!==q&&(q=t,K())});window.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.shiftKey&&(t.key==="A"||t.key==="a")&&(t.preventDefault(),ye("admin"))});function Yt(){$e++,clearTimeout(Fe),$e>=3?($e=0,y(C==="ar"?"🔑 تم تفعيل الدخول السري للوحة التحكم":"🔑 Secret Admin Activated"),ye("admin")):Fe=setTimeout(()=>{$e=0},800)}const Zt="http://127.0.0.1:5000",se=Zt.replace(/\/+$/,""),R="shot_admin_token";async function Xt(){const t=localStorage.getItem(R);if(!t)return!1;try{const e=await fetch(`${se}/api/admin-check`,{headers:{Authorization:`Bearer ${t}`}}),a=await e.json();if(!e.ok||!a.valid)throw new Error(a.message||"Invalid admin token");return!0}catch{return localStorage.removeItem(R),!1}}async function Qt(t,e){try{const a=await fetch(`${se}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}),n=await a.json();if(!a.ok)throw new Error(n.message||"Authentication failed");return localStorage.setItem(R,n.token),{ok:!0,user:n.user}}catch(a){return localStorage.removeItem(R),{ok:!1,message:a.message||"Authentication failed"}}}async function le(t,e={}){const a=await fetch(`${se}${t}`,e),n=await a.json();if(!a.ok)throw new Error(n.message||`Request failed (${a.status})`);return n}async function ne(t,e){const a=await le("/api/media",{method:"PUT",headers:{Authorization:`Bearer ${e}`,"Content-Type":t.type||"application/octet-stream","X-Media-Type":t.type||"application/octet-stream"},body:t});return`${se}${a.url}`}async function Te(t,e){if(typeof t=="string"&&H(t)){const a=await tt(at(t));if(!a)throw new Error("A locally stored media file is missing. Re-upload it before saving.");return ne(a,e)}if(Array.isArray(t)){for(let a=0;a<t.length;a++)t[a]=await Te(t[a],e);return t}if(t&&typeof t=="object")for(const a of Object.keys(t))t[a]=await Te(t[a],e);return t}async function ea(){const t=localStorage.getItem(R);if(!t)throw new Error("Admin session expired. Please sign in again.");const e=await Te(JSON.parse(JSON.stringify(s)),t),a=await le("/api/site-content",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)});return s=ke(e),J(),a}async function ze(){const t=localStorage.getItem(R);if(!t)throw new Error("Admin session expired. Please sign in again.");const e=await le("/api/messages",{headers:{Authorization:`Bearer ${t}`}});s.messages=e.messages}async function dt(t){return le("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function S(t,e=20){return{Megaphone:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8 a3 3 0 1 1-5.8-1.6"/></svg>`,Video:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,Share2:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,Palette:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.67 0-.44-.18-.86-.47-1.16-.3-.3-.47-.72-.47-1.17 0-.92.75-1.67 1.67-1.67H16c3.3 0 6-2.7 6-6 0-4.6-4.5-8.5-10-8.5z"/></svg>`,Search:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,TrendingUp:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,Check:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,Sun:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,Moon:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,Star:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,Trash:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,Menu:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,X:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,LayoutDashboard:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,FileText:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,Briefcase:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,Users:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,CreditCard:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,Inbox:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,Sliders:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,LogOut:`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`}[t]||""}function ta(){const t=document.getElementById("bg-canvas");if(!t)return;const e=t.getContext("2d");let a,n,i=[],o={x:null,y:null,radius:140};function c(){a=t.width=window.innerWidth,n=t.height=window.innerHeight,m()}window.addEventListener("resize",c),window.addEventListener("mousemove",p=>{o.x=p.clientX,o.y=p.clientY});class d{constructor(){this.x=Math.random()*a,this.y=Math.random()*n,this.size=Math.random()*2.5+1,this.vx=(Math.random()-.5)*.6,this.vy=(Math.random()-.5)*.6,this.alpha=Math.random()*.65+.25}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>a)&&(this.vx*=-1),(this.y<0||this.y>n)&&(this.vy*=-1),o.x!=null&&o.y!=null){let u=o.x-this.x,w=o.y-this.y,E=Math.sqrt(u*u+w*w);if(E<o.radius){let I=(o.radius-E)/o.radius,$=u/E,f=w/E;this.x-=$*I*3,this.y-=f*I*3}}}draw(){e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.fillStyle=`rgba(253, 163, 2, ${this.alpha})`,e.shadowBlur=10,e.shadowColor="rgba(253, 163, 2, 0.6)",e.fill(),e.shadowBlur=0}}function m(){i=[];const p=Math.min(Math.floor(a*n/18e3),75);for(let u=0;u<p;u++)i.push(new d)}function g(){e.clearRect(0,0,a,n);for(let p=0;p<i.length;p++){i[p].update(),i[p].draw();for(let u=p+1;u<i.length;u++){let w=i[p].x-i[u].x,E=i[p].y-i[u].y,I=Math.sqrt(w*w+E*E);if(I<125){e.beginPath(),e.moveTo(i[p].x,i[p].y),e.lineTo(i[u].x,i[u].y);let $=(1-I/125)*.18;e.strokeStyle=`rgba(253, 163, 2, ${$})`,e.lineWidth=1,e.stroke()}}}requestAnimationFrame(g)}c(),g()}function y(t,e="success"){let a=document.querySelector(".toast-container");a||(a=document.createElement("div"),a.className="toast-container",document.body.appendChild(a));const n=document.createElement("div");n.className="toast",n.innerHTML=`<span>${e==="success"?"✅":"ℹ️"}</span> <span>${t}</span>`,a.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},3500)}function aa(t){xe=t,document.documentElement.setAttribute("data-theme",xe),localStorage.setItem("shot_theme",xe),Ne()}function ia(t){C=t,document.documentElement.setAttribute("lang",C),document.documentElement.setAttribute("dir",C==="ar"?"rtl":"ltr"),localStorage.setItem("shot_lang",C),K()}function K(){const t=C==="ar";Ne();let e=document.querySelector(".whatsapp-float");e||(e=document.createElement("a"),e.className="whatsapp-float",e.target="_blank",e.innerHTML='<svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',document.body.appendChild(e)),e.href=st();const a=document.getElementById("app-view");if(!a)return;if(q==="admin"){W(a);return}let n='<div class="page-wrapper">';q==="home"?n+=`
      <section class="hero-section">${na()}</section>
      <section class="section">${_e()}</section>
      <section class="section">${Ge()}</section>
      <section class="section">${Je(3)}</section>
      <section class="section">${Ke()}</section>
      <section class="section">${Ye()}</section>
      <section class="section">${Ze()}</section>
    `:q==="about"?n+=`
      <div class="page-header-banner">
        <span class="section-tag">${t?"عن وكالة Ninety Nine":"ABOUT NINETY NINE"}</span>
        <h1 class="gradient-text">${t?"روّاد التسويق الرقمي والإنتاج الإبداعي":"Leaders in Performance & Creative Media"}</h1>
      </div>
      <section class="section">${_e()}</section>
      <section class="section">${Ge()}</section>
    `:q==="works"?n+=`
      <div class="page-header-banner">${ct(!0)}</div>
      <section class="section">${Je(null,!1)}</section>
    `:q==="clients"?n+=`
      <div class="page-header-banner">${mt(!0)}</div>
      <section class="section">${Ke(!1)}</section>
    `:q==="team"?n+=`
      <div class="page-header-banner">
        <span class="section-tag">${t?"فريق العمل":"OUR TEAM"}</span>
        <h1 class="gradient-text">${t?"فريقنا":"Meet Our Team"}</h1>
      </div>
      <section class="section">${oa()}</section>
    `:q==="plans"?n+=`
      <div class="page-header-banner">
        <span class="section-tag">${t?"":"PLANS & SERVICES"}</span>
        <h1 class="gradient-text">${t?"باقات نمو متكاملة لمشروعك":"Tailored Growth Packages"}</h1>
      </div>
      <section class="section">${Ye()}</section>
    `:q==="contacts"&&(n+=`
      <div class="page-header-banner">
        <span class="section-tag">${t?"تواصل معنا الآن":"GET IN TOUCH"}</span>
        <h1 class="gradient-text">${t?"دعنا نطلق علامتك التجارية للقمة":"Let’s Shoot Your Brand To The Moon"}</h1>
      </div>
      <section class="section">${Ze()}</section>
    `),n+="</div>",a.innerHTML=n,sa(),ca(),Ot()}function Ne(){const t=C==="ar",e=document.getElementById("navbar");if(!e)return;e.innerHTML=`
    <div class="navbar-container">
      <!-- Secret Admin Trigger 1: Triple Click Logo -->
      <div class="brand-logo-container" id="secret-logo-btn">
        <img src="/logo.png" alt="Ninety Nine Logo" class="brand-logo-img" />
      </div>
      
      <ul class="nav-menu ${pe?"open":""}">
        <li><a class="nav-link ${q==="home"?"active":""}" data-view="home">${t?"الرئيسية":"Home"}</a></li>
        <li><a class="nav-link ${q==="about"?"active":""}" data-view="about">${t?"عن الشركة":"About"}</a></li>
        <li><a class="nav-link ${q==="works"?"active":""}" data-view="works">${t?"أعمالنا":"Works"}</a></li>
        <li><a class="nav-link ${q==="clients"?"active":""}" data-view="clients">${t?"عملاؤنا":"Clients"}</a></li>
        <li><a class="nav-link ${q==="team"?"active":""}" data-view="team">${t?"فريقنا":"Our Team"}</a></li>
        <li><a class="nav-link ${q==="plans"?"active":""}" data-view="plans">${t?"الباقات":"Plans"}</a></li>
        <li><a class="nav-link ${q==="contacts"?"active":""}" data-view="contacts">${t?"تواصل معنا":"Contacts"}</a></li>
      </ul>

      <div class="nav-actions">
        <button class="btn-primary" onclick="window.location.hash='contacts'; navigateTo('contacts');" style="padding: 9px 16px; font-size: 0.8rem;">
          ${t?"تواصل معنا":"Contact us"}
        </button>

        <!-- Mobile Toggle Button -->
        <button class="mobile-toggle" id="mobile-nav-toggle" title="القائمة">
          ${S(pe?"X":"Menu",22)}
        </button>
      </div>
    </div>
  `,document.getElementById("secret-logo-btn").onclick=Yt;const a=document.getElementById("mobile-nav-toggle");a&&(a.onclick=()=>{pe=!pe,Ne()}),e.querySelectorAll(".nav-link").forEach(n=>{n.onclick=()=>ye(n.dataset.view)})}function na(){const t=C==="ar",e=s.hero[C];return`
    <div class="hero-image-bg" aria-hidden="true"></div>
    <div class="hero-image-overlay"></div>
    <div class="hero-container">
      <div class="hero-badge">${e.badge}</div>
      <h1 class="hero-title gradient-text">${e.title}</h1>
      <p class="hero-subtitle">${e.subtitle}</p>
      
      <div class="hero-cta">
        <button class="btn-primary" onclick="window.location.hash='works'; navigateTo('works');" style="padding: 16px 36px; font-size: 1.05rem;">
          ${e.primaryCta}
        </button>
        <button class="btn-secondary" onclick="window.location.hash='contacts'; navigateTo('contacts');" style="padding: 16px 36px; font-size: 1.05rem;">
          ${e.secondaryCta}
        </button>
      </div>

      <div class="hero-stats">
        ${s.hero.stats.map(a=>`
          <div class="stat-card">
            <div class="stat-number">${a.number}</div>
            <div class="stat-label">${t?a.labelAr:a.labelEn}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Ge(){const t=C==="ar",e=s.about[C];return`
    <div class="section-header">
      <span class="section-tag">${e.tag}</span>
      <h2 class="section-title gradient-text">${e.title}</h2>
      <p class="section-desc">${e.description}</p>
    </div>

    <div class="about-grid">
      <div class="services-list" style="grid-column: span 2">
        ${s.about.services.map(a=>`
          <div class="service-item">
            <div class="service-icon">${S(a.icon,24)}</div>
            <h4 class="service-title">${t?a.titleAr:a.titleEn}</h4>
            <p class="service-desc">${t?a.descAr:a.descEn}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}function _e(){var o,c;const t=C==="ar",e=me.whyChooseUs[C],a={...e,...(o=s.whyChooseUs)==null?void 0:o[C]},n=t?"لماذا تختارنا؟":"Why Choose Us?";a.title===n&&(a.title=e.title);const i=((c=s.whyChooseUs)==null?void 0:c.audienceSegments)||me.whyChooseUs.audienceSegments;return`
    <div class="section-header why-choose-header">
      <span class="section-tag">${a.tag}</span>
      <h2 class="section-title gradient-text">${a.title}</h2>
      <p class="section-desc why-choose-intro">${a.introduction}</p>
    </div>

    <div class="why-choose-grid">
      ${s.whyChooseUs.items.map(d=>`
        <div class="why-choose-card">
          <div class="why-choose-icon">${S(d.icon,26)}</div>
          <h3 class="why-choose-title">${t?d.titleAr:d.titleEn}</h3>
          <p class="why-choose-desc">${t?d.descAr:d.descEn}</p>
        </div>
      `).join("")}
    </div>

    <div class="why-choose-extra">
      <div class="section-header why-choose-header why-choose-structure-header">
        <h3 class="section-title gradient-text">${a.structureTitle}</h3>
        <p class="section-desc">${a.structureDescription}</p>
        <div class="why-choose-structure-impact">${a.structureImpact}</div>
      </div>

      <div class="section-header why-choose-header">
        <h3 class="section-title gradient-text">${a.audienceTitle}</h3>
      </div>

      <div class="why-choose-grid audience-segment-grid">
        ${i.map(d=>`
          <div class="why-choose-card">
            <div class="why-choose-icon">${S(d.icon,26)}</div>
            <h3 class="why-choose-title">${t?d.titleAr:d.titleEn}</h3>
            <p class="why-choose-desc">${t?d.descAr:d.descEn}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Le(t){return{video:"فيديو",ads:"إعلانات",branding:"هوية تجارية",social:"تواصل اجتماعي"}[t]||t}function ra(t){return{"Performance Ads":"الإعلانات الممولة","Media Production":"إنتاج الفيديوهات","Social Media":"إدارة منصات التواصل",Branding:"تصميم الهوية البصرية","Full Package":"باقة متكاملة"}[t]||t}function ct(t=!1){const e=C==="ar",a=t?"h1":"h2";return`
    <span class="section-tag">${e?"":"OUR SUCCESS PARTNERS"}</span>
    <${a} class="${t?"gradient-text":"section-title gradient-text"}">${e?"مشاريع مختلفة نمت معنا، وأرقامها تتحدث عن نفسها!":"Different Projects Grew With Us, and the Numbers Speak for Themselves!"}</${a}>
    <p class="section-desc works-intro-desc">${e?"نفخر بشراكتنا مع نخبة من الشركات والمعارض والعلامات التجارية في مختلف المجالات داخل مصر وخارجها، ممن وضعوا ثقتهم في استراتيجياتنا، لنصنع معًا قصص نجاح ونحقق نموًا ملموسًا.":"We are proud to partner with leading companies, showrooms, and brands across diverse industries in Egypt and beyond. They trusted our strategies, and together we have built success stories and achieved measurable growth."}</p>
  `}function Je(t=null,e=!0){const a=C==="ar",n=[{id:"all",labelEn:"All Projects",labelAr:"جميع الأعمال"},{id:"video",labelEn:"Video Commercials",labelAr:"إعلانات الفيديو"},{id:"ads",labelEn:"Performance Ads",labelAr:"حملات ممولة"},{id:"branding",labelEn:"Branding Identity",labelAr:"هوية بصريّة"},{id:"social",labelEn:"Social Media",labelAr:"مواقع التواصل"}],i=Me(),o=Ae==="all"?i:i.filter(d=>d.category===Ae),c=t?Gt(t):o;return`
    ${e?`<div class="section-header works-section-header">${ct()}</div>`:""}

    ${t===null?`
      <div class="portfolio-filters">
        ${n.map(d=>`
          <button class="filter-btn ${Ae===d.id?"active":""}" data-cat="${d.id}">
            ${a?d.labelAr:d.labelEn}
          </button>
        `).join("")}
      </div>
    `:""}

    <div class="works-grid">
      ${c.map(d=>`
        <div class="work-card" data-id="${d.id}">
          <div class="work-img-wrapper">
            <img data-media-ref="${d.image||""}" src="${ie(d.image)}" alt="${a?d.titleAr:d.titleEn}" class="work-img" />
            ${d.videoUrl?'<div class="work-play-overlay">▶</div>':""}
            <span class="work-category-badge">${Le(d.category)}</span>
          </div>
          <div class="work-info">
            <h3 class="work-title">${a?d.titleAr:d.titleEn}</h3>
            <p class="work-summary">${a?d.summaryAr:d.summaryEn}</p>
            <div class="work-metrics">
              <span class="metric-tag">🔥 ${a?d.metricsAr:d.metricsEn}</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    ${t!==null?`
      <div style="display:flex; justify-content:center; margin-top:28px;">
        <button class="btn-secondary" onclick="navigateTo('works')" style="padding: 14px 28px; font-size: 1rem;">
          ${a?"للمزيد":"View More"}
        </button>
      </div>
    `:""}
  `}function mt(t=!1){const e=C==="ar",a=t?"h1":"h2";return`
    <span class="section-tag">${e?"":"CLIENTS & TESTIMONIALS"}</span>
    <${a} class="${t?"gradient-text":"section-title gradient-text"}">${e?"آراء عملائنا هي خير دليل على نتائجنا!":"Our Clients’ Feedback Is the Best Proof of Our Results!"}</${a}>
    <p class="section-desc clients-intro-desc">${e?"استمع إلى تجارب أصحاب الأعمال الذين شهدوا نقلة حقيقية في مبيعاتهم ونمو أعمالهم بعد الشراكة مع Ninety Nine.":"Hear from business owners who saw a real transformation in sales and business growth after partnering with Ninety Nine."}</p>
  `}function Ke(t=!0){const e=C==="ar",a=s.clients.length?Math.max(1,Math.ceil(1200/(s.clients.length*274))):0,n=Array.from({length:a},()=>s.clients).flat();return`
    ${t?`<div class="section-header clients-section-header">${mt()}</div>`:""}
    ${s.clients.length?`
      <div class="clients-marquee" aria-label="${e?"شعارات شركاء النجاح":"Client partner logos"}">
        <div class="clients-marquee-track">
          ${[0,1,2].map(i=>`
            <div class="clients-marquee-group"${i?' aria-hidden="true"':""}>
              ${n.map(o=>`
                <div class="client-logo-card">
                  <img src="${ie(o.image)}" alt="" loading="lazy" />
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    `:""}

    <div class="testimonials-grid">
      ${s.testimonials.map(i=>`
        <div class="testimonial-card">
          <div class="stars">${Array(i.rating).fill(S("Star",18)).join("")}</div>
          <p class="testimonial-quote">"${e?i.quoteAr:i.quoteEn}"</p>
          <div class="client-profile">
            <div class="client-avatar">${(e?i.nameAr:i.nameEn).charAt(0)}</div>
            <div>
              <div class="client-name">${e?i.nameAr:i.nameEn}</div>
              <div class="client-role">${e?i.roleAr:i.roleEn}</div>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `}function oa(){const t=C==="ar";return s.teamMembers.length?`
      <div class="team-grid">
        ${s.teamMembers.map(e=>`
          <article class="team-card">
            <img class="team-card-image" src="${B(ie(e.image))}" alt="${B(e.name)}" loading="lazy" />
            <div class="team-card-content">
              <h2 class="team-card-name">${B(e.name)}</h2>
              <p class="team-card-role">${B(e.jobTitle)}</p>
              <p class="team-card-description">${B(e.description)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    `:`<p class="team-empty-state">${t?"سيتم إضافة أعضاء فريقنا قريباً.":"Our team will be introduced here soon."}</p>`}function Ye(){const t=C==="ar";return`
    <div class="section-header">
      <span class="section-tag">${t?"":"PLANS & SERVICES"}</span>
      <h2 class="section-title gradient-text">${t?"باقات مصممة لسرعة النمو":"Flexible Growth Plans"}</h2>
      <p class="section-desc">${t?"اختر الباقة المناسبة لمرحلة مشروعك الحالية":"Choose the plan tailored for your current scaling phase."}</p>
    </div>

    <div class="plans-grid">
      ${s.plans.map(e=>{const a=t?e.featuresAr:e.featuresEn;return`
          <div class="plan-card ${e.popular?"popular":""}">
            ${e.popular?`<span class="popular-tag">${t?"الأكثر طلباً":"MOST POPULAR"}</span>`:""}
            <h3 class="plan-name">${t?e.nameAr:e.nameEn}</h3>
            <ul class="plan-features">
              ${a.map(n=>`<li>${S("Check",18)} <span>${n}</span></li>`).join("")}
            </ul>
            <button class="btn-primary plan-order-btn" data-id="${e.id}" style="width:100%; justify-content:center;">
              ${t?"اطلب الباقة الآن":"Request Plan Now"}
            </button>
          </div>
        `}).join("")}
    </div>
  `}function Ze(){const t=C==="ar";return`
    <div class="section-header">
      <span class="section-tag">${t?"":"GET IN TOUCH"}</span>
      <h2 class="section-title gradient-text">${t?"دعنا نطلق مشروعك إلى القمة اليوم":"Let’s Shoot Your Brand To The Top"}</h2>
    </div>

    <div class="contact-container">
      <div class="contact-info-card">
        <h3 style="font-size:1.6rem; margin-bottom:24px;">${t?"معلومات الاتصال المباشرة":"Direct Contact Info"}</h3>
        <div class="info-item">
          <div class="info-icon">📧</div>
          <div class="info-details">
            <h4>${t?"البريد الإلكتروني":"Email"}</h4>
            <p>${s.settings.contactEmail}</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📞</div>
          <div class="info-details">
            <h4>${t?"الهاتف / الواتساب":"Phone / WhatsApp"}</h4>
            <p>${s.settings.contactPhone}</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📍</div>
          <div class="info-details">
            <h4>${t?"المقر الرئيسي":"Headquarters"}</h4>
            <p>${t?s.settings.officeAddressAr:s.settings.officeAddressEn}</p>
          </div>
        </div>

        <div style="margin-top: 30px; display: flex; gap: 15px; flex-wrap: wrap;">
          ${s.settings.facebook?`
            <a href="${s.settings.facebook}" target="_blank" class="btn-secondary" style="padding: 10px 20px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
          `:""}
          ${s.settings.instagram?`
            <a href="${s.settings.instagram}" target="_blank" class="btn-secondary" style="padding: 10px 20px;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
          `:""}
        </div>
      </div>

      <div class="contact-form">
        <h3 style="font-size:1.6rem; margin-bottom:20px;">${t?"أرسل استفسارك التسويقي":"Send Marketing Inquiry"}</h3>
        <form id="public-contact-form">
          <div class="form-group">
            <label class="form-label">${t?"الاسم بالكامل":"Your Name"}</label>
            <input type="text" id="cf-name" class="form-input" required placeholder="${t?"مثال: عبد العزيز علي":"Alex Smith"}" />
          </div>
          <div class="form-group">
            <label class="form-label">${t?"البريد الإلكتروني":"Email Address"}</label>
            <input type="email" id="cf-email" class="form-input" required placeholder="alex@company.com" />
          </div>
          <div class="form-group">
            <label class="form-label">${t?"رقم الجوال":"Phone Number"}</label>
            <input type="tel" id="cf-phone" class="form-input" required placeholder="+966 50 123 4567" />
          </div>
          <div class="form-group">
            <label class="form-label">${t?"الخدمة المطلوبة":"Service Needed"}</label>
            <select id="cf-service" class="form-select">
              <option value="Performance Ads">${t?"الإعلانات الممولة":"Performance Ads"}</option>
              <option value="Media Production">${t?"إنتاج الفيديوهات":"Media & Video Production"}</option>
              <option value="Social Media">${t?"إدارة منصات التواصل":"Social Media Growth"}</option>
              <option value="Branding">${t?"تصميم الهوية البصرية":"Brand Identity"}</option>
              <option value="Full Package">${t?"باقة متكاملة":"Full Package Domination"}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">${t?"تفاصيل المشروع":"Project Details"}</label>
            <textarea id="cf-msg" class="form-textarea" rows="4" required placeholder="${t?"اكتب نبذة عن مشروعك وأهدافك...":"Tell us about your brand goals..."}" ></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width:100%; justify-content:center; padding:15px;">
            🚀 ${t?"إرسال الرسالة إلى فريق التسويق":"Send Message To Agency"}
          </button>
        </form>
      </div>
    </div>
  `}function sa(){const t=C==="ar";document.querySelectorAll(".filter-btn").forEach(a=>{a.onclick=()=>{Ae=a.dataset.cat,document.getElementById("app-view")&&K()}}),document.querySelectorAll(".work-card").forEach(a=>{a.onclick=()=>{const n=s.works.find(i=>i.id===a.dataset.id);n&&la(n)}}),document.querySelectorAll(".plan-order-btn").forEach(a=>{a.onclick=()=>{const n=s.plans.find(i=>i.id===a.dataset.id);n&&da(n)}});const e=document.getElementById("public-contact-form");e&&(e.onsubmit=async a=>{a.preventDefault();const n={name:document.getElementById("cf-name").value,email:document.getElementById("cf-email").value,phone:document.getElementById("cf-phone").value,service:document.getElementById("cf-service").value,budget:"Standard",message:document.getElementById("cf-msg").value,date:new Date().toISOString().replace("T"," ").slice(0,16),read:!1};try{const i=await dt(n);s.messages.unshift({...n,id:i.id}),J(),e.reset(),y(t?"شكراً لتواصلك! تم استلام رسالتك وسيتم الرد خلال ساعات.":"Thank you! Message sent to Ninety Nine agency inbox.")}catch(i){console.error("Could not submit contact message:",i),y(t?"تعذر إرسال الرسالة. حاول مرة أخرى لاحقاً.":"Could not send your message. Please try again later.","error")}})}function Xe(t){if(!t)return null;if(t.includes("...[local-video]"))return`<div style="padding:40px; text-align:center; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:var(--radius-md); margin-bottom:20px; color:#f87171;">⚠️ ${C==="ar"?"الفيديو تالف — يرجى إعادة رفعه":"Video corrupted — please re-upload"}</div>`;const e=oe(t)||t,a=e.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]+)/);if(a)return`<iframe src="https://www.youtube.com/embed/${a[1]}?autoplay=1" style="width:100%; height:400px; border:none; border-radius:var(--radius-md); margin-bottom:20px; background:#000;" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;const n=e.match(/vimeo\.com\/(\d+)/);if(n)return`<iframe src="https://player.vimeo.com/video/${n[1]}?autoplay=1" style="width:100%; height:400px; border:none; border-radius:var(--radius-md); margin-bottom:20px; background:#000;" allow="autoplay" allowfullscreen></iframe>`;const i=e.match(/drive\.google\.com\/file\/d\/([\w-]+)/);return i?`<iframe src="https://drive.google.com/file/d/${i[1]}/preview" style="width:100%; height:400px; border:none; border-radius:var(--radius-md); margin-bottom:20px; background:#000;" allow="autoplay" allowfullscreen></iframe>`:/\.(mp4|webm|ogg|mov)(\?|$)/i.test(e)||e.startsWith("data:video/")||e.startsWith("blob:")?`<video controls autoplay playsinline style="width:100%; max-height:420px; border-radius:var(--radius-md); margin-bottom:20px; background:#000;" src="${e}"></video>`:H(t)?`<div style="padding:40px; text-align:center; background:rgba(0,0,0,0.3); border-radius:var(--radius-md); margin-bottom:20px;">⏳ ${C==="ar"?"جاري تحميل الفيديو...":"Loading video..."}</div>`:`<video controls autoplay playsinline style="width:100%; max-height:420px; border-radius:var(--radius-md); margin-bottom:20px; background:#000;" src="${e}"></video>`}function ut(){const t=document.getElementById("project-modal");if(t){const e=t.querySelector("video");e&&(e.pause(),e.src="");const a=t.querySelector("iframe");a&&(a.src=""),t.classList.remove("active")}}function la(t){const e=C==="ar";let a=document.getElementById("project-modal");a||(a=document.createElement("div"),a.id="project-modal",a.className="modal-overlay",document.body.appendChild(a));const n=!!t.videoUrl,i=oe(t.videoUrl);let o;n?H(t.videoUrl)&&!i?o=`<div style="padding:40px; text-align:center; background:rgba(0,0,0,0.3); border-radius:var(--radius-md); margin-bottom:20px;">⏳ ${e?"جاري تحميل الفيديو...":"Loading video..."}</div>`:o=Xe(i||t.videoUrl):o=`<img data-media-ref="${t.image||""}" src="${ie(t.image)}" style="width:100%; height:280px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:20px;" />`,a.innerHTML=`
    <div class="modal-card" style="max-width:750px;">
      <button class="modal-close" onclick="closeProjectModal()">&times;</button>
      ${o}
      <span class="work-category-badge" style="position:static; display:inline-block; margin-bottom:12px;">${Le(t.category)}</span>
      <h2 style="font-size:1.8rem; margin-bottom:10px;">${e?t.titleAr:t.titleEn}</h2>
      <p style="color:var(--accent-green); font-weight:700; margin-bottom:16px;">👤 ${e?"العميل:":"Client:"} ${e?t.clientAr:t.clientEn}</p>
      <p style="color:var(--text-secondary); margin-bottom:20px; font-size:1.05rem; line-height:1.7;">${e?t.detailsAr:t.detailsEn}</p>
      <div style="background:var(--bg-card); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border-color); display:flex; gap:10px; align-items:center;">
        <span style="font-size:1.3rem;">📊</span>
        <span style="font-weight:800; color:var(--accent-green);">${e?t.metricsAr:t.metricsEn}</span>
      </div>
    </div>
  `,a.classList.add("active"),n&&H(t.videoUrl)&&!i?re(t.videoUrl).then(c=>{if(c&&a.classList.contains("active")){const d=a.querySelector(".modal-card");if(d){const m=d.querySelector("div");m&&(m.outerHTML=Xe(c))}}}):!n&&H(t.image)&&!oe(t.image)&&re(t.image).then(c=>{const d=a.querySelector("img[data-media-ref]");d&&c&&(d.src=c)}),a.onclick=c=>{c.target===a&&ut()}}function da(t){const e=C==="ar";let a=document.getElementById("order-modal");a||(a=document.createElement("div"),a.id="order-modal",a.className="modal-overlay",document.body.appendChild(a)),a.innerHTML=`
    <div class="modal-card">
      <button class="modal-close" onclick="document.getElementById('order-modal').classList.remove('active')">&times;</button>
      <h2 style="font-size:1.6rem; margin-bottom:8px;">${e?"طلب الاشتراك في الباقة":"Complete Plan Order"}</h2>
      <p style="color:var(--accent-green); font-size:1.2rem; font-weight:800; margin-bottom:20px;">
        ${e?t.nameAr:t.nameEn}
      </p>

      <form id="order-form">
        <div class="form-group">
          <label class="form-label">${e?"الاسم بالكامل":"Full Name"}</label>
          <input type="text" id="ord-name" class="form-input" required placeholder="${e?"مثال: محمد أحمد":"John Doe"}" />
        </div>
        <div class="form-group">
          <label class="form-label">${e?"البريد الإلكتروني":"Email Address"}</label>
          <input type="email" id="ord-email" class="form-input" required placeholder="name@company.com" />
        </div>
        <div class="form-group">
          <label class="form-label">${e?"رقم الهاتف / الواتساب":"Phone / WhatsApp"}</label>
          <input type="tel" id="ord-phone" class="form-input" required placeholder="+966 50 000 0000" />
        </div>
        <button type="submit" class="btn-primary" style="width:100%; justify-content:center; padding:14px; margin-top:10px;">
          ${e?"تأكيد إرسال الطلب":"Confirm Order"}
        </button>
      </form>
    </div>
  `,a.classList.add("active"),document.getElementById("order-form").onsubmit=async n=>{n.preventDefault();const i={name:document.getElementById("ord-name").value,email:document.getElementById("ord-email").value,phone:document.getElementById("ord-phone").value,service:`Plan Order: ${e?t.nameAr:t.nameEn}`,budget:"-",message:`Subscription requested for ${t.nameEn}`,date:new Date().toISOString().replace("T"," ").slice(0,16),read:!1};try{const o=await dt(i);s.messages.unshift({...i,id:o.id}),J(),a.classList.remove("active"),y(e?"تم استلام طلبك بنجاح! سيتواصل معك فريق التسويق فوراً":"Order received!")}catch(o){console.error("Could not submit plan order:",o),y(e?"تعذر إرسال الطلب. حاول مرة أخرى لاحقاً.":"Could not submit your order. Please try again later.","error")}}}function ca(){const t=C==="ar",e=document.getElementById("footer");e&&(e.innerHTML=`
    <div class="footer-container">
      <div class="footer-brand">
        <img src="logo.png" alt="Ninety Nine Logo" style="height:48px;" />
        <p>${t?"وكالة Ninety Nine للتسويق الرقمي وإنتاج الفيديوهات الإعلانية. نبتكر الاستراتيجيات ونحقق العوائد الاستثنائية.":"Ninety Nine Agency - High Impact Digital Marketing & Commercial Media Studio."}</p>
      </div>

      <div class="footer-col">
        <h4>${t?"صفحات الموقع":"Pages"}</h4>
        <ul class="footer-links">
          <li><a onclick="navigateTo('home')">${t?"الرئيسية":"Home"}</a></li>
          <li><a onclick="navigateTo('about')">${t?"عن الشركة":"About"}</a></li>
          <li><a onclick="navigateTo('works')">${t?"معرض الأعمال":"Works"}</a></li>
          <li><a onclick="navigateTo('plans')">${t?"الباقات":"Plans"}</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>${t?"خدماتنا":"Services"}</h4>
        <ul class="footer-links">
          <li><a onclick="navigateTo('about')">${t?"حملات الإعلانات":"Paid Ads"}</a></li>
          <li><a onclick="navigateTo('about')">${t?"إنتاج الفيديوهات":"Video Production"}</a></li>
          <li><a onclick="navigateTo('about')">${t?"السوشيال ميديا":"Social Media"}</a></li>
          <li><a onclick="navigateTo('about')">${t?"الهوية البصرية":"Branding"}</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>${t?"تواصل معنا":"Contact Us"}</h4>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:14px;">
          ${t?"جاهز للتوسع؟ تواصل معنا واطلب استشارة تسويقية مجانية.":"Ready to scale? Request your free consultation today."}
        </p>
        <button class="btn-primary" onclick="navigateTo('contacts')" style="width:100%; justify-content:center;">
          🚀 ${t?"ارسل استفسارك":"Contact Us"}
        </button>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© 2026 وكالة Ninety Nine للتسويق. جميع الحقوق محفوظة.</div>
      <div>صُمم بدقة وابتكار ⚡</div>
    </div>
  `)}function W(t){const e=C==="ar";if(!we){if(localStorage.getItem(R)){Xt().then(async o=>{if(o){try{await ze(),we=!0,W(t)}catch(c){console.error("Could not load admin messages:",c),y(e?"تعذر تحميل صندوق الرسائل من قاعدة البيانات":"Could not load the database inbox","error"),localStorage.removeItem(R),W(t)}return}localStorage.removeItem(R),W(t)}),t.innerHTML=`
        <div class="admin-login-screen">
          <div class="modal-card" style="max-width:440px; text-align:center;">
            <img src="logo.png" style="height:60px; margin:0 auto 20px;" />
            <h2 style="font-size:1.6rem; margin-bottom:8px;">${e?"التحقق من صلاحية الدخول":"Verifying Admin Access"}</h2>
            <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:24px;">
              ${e?"جاري التحقق من الجلسة الآمنة...":"Checking secure admin session..."}
            </p>
          </div>
        </div>
      `;return}t.innerHTML=`
      <div class="admin-login-screen">
        <div class="modal-card" style="max-width:440px; text-align:center;">
          <img src="logo.png" style="height:60px; margin:0 auto 20px;" />
          <h2 style="font-size:1.6rem; margin-bottom:8px;">${e?"دخول لوحة التحكم الآمنة":"Secure Admin Login"}</h2>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:24px;">
            ${e?"أدخل اسم المستخدم وكلمة المرور":"Enter your admin username and password"}
          </p>

          <form id="admin-login-form">
            <input type="text" id="admin-username" class="form-input" style="margin-bottom:14px;" placeholder="${e?"اسم المستخدم":"Username"}" required autofocus />
            <input type="password" id="admin-password" class="form-input" style="margin-bottom:20px;" placeholder="${e?"كلمة المرور":"Password"}" required />
            <div style="display:flex; gap:12px;">
              <button type="button" class="btn-secondary" onclick="navigateTo('home')" style="flex:1; justify-content:center;">
                ${e?"إلغاء":"Cancel"}
              </button>
              <button type="submit" class="btn-primary" style="flex:1.5; justify-content:center;">
                🔓 ${e?"دخول اللوحة":"Authenticate"}
              </button>
            </div>
          </form>
        </div>
      </div>
    `,document.getElementById("admin-login-form").onsubmit=async o=>{o.preventDefault();const c=document.getElementById("admin-username").value.trim(),d=document.getElementById("admin-password").value;if(!c||!d){y(e?"يرجى إدخال اسم المستخدم وكلمة المرور":"Please enter username and password","error");return}const m=await Qt(c,d);if(m.ok)try{await ze(),we=!0,W(t),y(e?"مرحباً بك في لوحة تحكم Ninety Nine الإدارية":"Welcome to Ninety Nine Admin Panel")}catch(g){console.error("Could not load admin messages:",g),localStorage.removeItem(R),y(e?"تعذر تحميل صندوق الرسائل من قاعدة البيانات":"Could not load the database inbox","error")}else y(e?"فشل تسجيل الدخول: "+m.message:"Login failed: "+m.message,"error")};return}const a=s.messages.filter(i=>!i.read).length;t.innerHTML=`
    <div class="admin-fullscreen-overlay">
      <!-- Admin Sidebar / Mobile Drawer Menu -->
      <aside class="admin-sidebar ${ae?"open":""}">
        <div class="admin-sidebar-header">
          <div class="admin-brand-box">
            <img src="logo.png" />
            <span style="font-weight:900; font-size:1.15rem; color:var(--accent-green);">الإدارة</span>
          </div>
          <span class="admin-badge-live">مباشر</span>
        </div>

        <ul class="admin-nav-list">
          <li class="admin-nav-item">
            <button class="${F==="overview"?"active":""}" data-tab="overview">
              <span>${S("LayoutDashboard",18)} ${e?"نظرة عامة والإحصائيات":"Overview"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="stats"?"active":""}" data-tab="stats">
              <span>${S("TrendingUp",18)} ${e?"إحصاءات الصفحة":"Stats Cards"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="content"?"active":""}" data-tab="content">
              <span>${S("FileText",18)} ${e?"محتوى الواجهة الرئيسية":"Hero Content"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="about"?"active":""}" data-tab="about">
              <span>${S("FileText",18)} ${e?"محتوى صفحة من نحن":"About Page"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="works"?"active":""}" data-tab="works">
              <span>${S("Briefcase",18)} ${e?"إدارة معرض الأعمال":"Portfolio Works"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="clients"?"active":""}" data-tab="clients">
              <span>${S("Users",18)} ${e?"":"Clients & Reviews"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="team"?"active":""}" data-tab="team">
              <span>${S("Users",18)} ${e?"إدارة فريق العمل":"Team Members"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="plans"?"active":""}" data-tab="plans">
              <span>${S("CreditCard",18)} ${e?"إدارة الباقات والخدمات":"Plans & Services"}</span>
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="messages"?"active":""}" data-tab="messages">
              <span>${S("Inbox",18)} ${e?"صندوق الوارد والطلبات":"Messages Inbox"}</span>
              ${a>0?`<span class="badge-status badge-red">${a}</span>`:""}
            </button>
          </li>
          <li class="admin-nav-item">
            <button class="${F==="settings"?"active":""}" data-tab="settings">
              <span>${S("Sliders",18)} ${e?"الإعدادات والنسخ":"Settings"}</span>
            </button>
          </li>
        </ul>

        <div class="admin-sidebar-footer">
          <div class="admin-user-info">
            <div class="admin-avatar">S</div>
            <div>
              <div style="font-weight:800; font-size:0.95rem;">إدارة Ninety Nine</div>
              <div style="color:var(--text-muted); font-size:0.78rem;">مدير النظام</div>
            </div>
          </div>
          <button class="btn-secondary" id="admin-exit-btn" style="width:100%; justify-content:center; padding:10px; border-color:rgba(239,68,68,0.4); color:#f87171;">
            ${S("LogOut",18)} ${e?"الخروج للموقع":"Exit Admin"}
          </button>
        </div>
      </aside>

      <!-- Admin Main Viewport -->
      <main class="admin-main-viewport">
        <header class="admin-topbar">
          <div class="admin-topbar-title">
            ${ma(F)}
          </div>
          
          <div style="display:flex; align-items:center; gap:12px;">
            <button class="btn-secondary" onclick="navigateTo('home')" style="padding:8px 16px; font-size:0.88rem;">
              🌐 ${e?"معاينة الموقع":"View Site"}
            </button>
            
            <!-- Mobile Admin Navigation Hamburger Button -->
            <button class="admin-mobile-toggle" id="admin-mobile-toggle-btn" title="قائمة الإدارة">
              ${S(ae?"X":"Menu",22)}
            </button>
          </div>
        </header>

        <div class="admin-content-area">
          ${ua(F)}
        </div>
      </main>
    </div>
  `;const n=document.getElementById("admin-mobile-toggle-btn");n&&(n.onclick=()=>{ae=!ae,W(t)}),t.querySelectorAll(".admin-nav-list button").forEach(i=>{i.onclick=()=>{F=i.dataset.tab,ae=!1,W(t)}}),document.getElementById("admin-exit-btn").onclick=()=>{we=!1,ae=!1,localStorage.removeItem(R),ye("home")},ga(F,t)}function ma(t){const e=C==="ar";return{overview:e?"📊 نظرة عامة وتحليلات الأداء الحية":"📊 Realtime Performance Analytics",stats:e?"📈 تحكم في إحصاءات الصفحة":"📈 Hero Stats Manager",content:e?"📝 محرر عناوين ونصوص الواجهة":"📝 Main Hero & Text Editor",about:e?"ℹ️ تعديل محتوى صفحة عن الشركة":"ℹ️ About Page Editor",works:e?"💼 إدارة مشاريع وقصص نجاح البورتفوليو":"💼 Portfolio Projects Management",clients:e?"👥 إدارة شركاء النجاح وتقييمات العملاء":"👥 Clients & Reviews Management",team:e?"👥 إدارة فريق العمل":"👥 Team Members Management",plans:e?"💳 تخصيص أسعار ومزايا باقات النمو":"💳 Pricing Packages Manager",messages:e?"📬 صندوق رسائل اتصل بنا وطلبات الباقات":"📬 Incoming Inquiries & Orders Inbox",settings:e?"⚙️ إعدادات الحماية وتخزين البيانات":"⚙️ Security & Data Backup Settings"}[t]||""}function ua(t){const e=C==="ar";if(t==="overview"){const a=s.messages.filter(i=>!i.read).length,n=s.messages.slice(0,4);return`
      <!-- Welcome Header Banner -->
      <div style="background: linear-gradient(135deg, rgba(253, 163, 2, 0.15) 0%, rgba(13, 23, 17, 0.9) 100%); border: 1px solid var(--accent-green); border-radius: var(--radius-lg); padding: 24px 30px; margin-bottom: 28px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <h2 style="font-size: 1.6rem; margin-bottom: 6px;" class="gradient-text">${e?"🚀 مرحباً بك في لوحة تحكم Ninety Nine الإدارية":"🚀 Welcome to Ninety Nine Executive Command Center"}</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin: 0;">
            ${e?"إليك الملخص التكتيكي للأداء والطلبات والتحليلات الحية للموقع اليوم.":"Here is your live tactical overview of website metrics, portfolio, and leads."}
          </p>
        </div>
        <div style="display: flex; gap: 10px;">
          <span class="pill-badge pill-green">🟢 ${e?"النظام يعمل بكفاءة":"System Operational"}</span>
          ${a>0?`<span class="pill-badge pill-red">📬 ${a} ${e?"طلبات غير مقروءة":"Unread"}</span>`:""}
        </div>
      </div>

      <!-- Top KPI Metric Cards -->
      <div class="admin-metrics-row">
        <div class="admin-metric-box">
          <div class="metric-header">
            <div class="metric-icon-wrap">${S("Inbox",22)}</div>
            <span class="metric-trend pill-badge ${a>0?"pill-red":"pill-green"}">${a>0?`${a} ${e?"جديد":"New"}`:e?"مستقر":"Up to date"}</span>
          </div>
          <div class="metric-val">${s.messages.length}</div>
          <div class="metric-lbl">${e?"إجمالي الطلبات والاستفسارات":"Total Inquiries"}</div>
        </div>

        <div class="admin-metric-box">
          <div class="metric-header">
            <div class="metric-icon-wrap">${S("Briefcase",22)}</div>
            <span class="metric-trend pill-badge pill-blue">🎬 ${s.works.filter(i=>i.category==="video").length} ${e?"فيديو":"Videos"}</span>
          </div>
          <div class="metric-val">${s.works.length}</div>
          <div class="metric-lbl">${e?"مشاريع البورتفوليو النشطة":"Portfolio Projects"}</div>
        </div>

        <div class="admin-metric-box">
          <div class="metric-header">
            <div class="metric-icon-wrap">${S("Users",22)}</div>
            <span class="metric-trend pill-badge pill-green">⭐ 5.0 / 5.0</span>
          </div>
          <div class="metric-val">${s.testimonials.length}</div>
          <div class="metric-lbl">${e?"تقييمات العملاء وشركاء النجاح":"Client Testimonials"}</div>
        </div>

        <div class="admin-metric-box">
          <div class="metric-header">
            <div class="metric-icon-wrap">${S("CreditCard",22)}</div>
            <span class="metric-trend pill-badge pill-purple">${e?"باقات النمو":"Growth Plans"}</span>
          </div>
          <div class="metric-val">${s.plans.length}</div>
          <div class="metric-lbl">${e?"باقات الخدمات المتوفرة":"Active Service Plans"}</div>
        </div>
      </div>

      <!-- Main Overview Content Grid (Quick Actions & System Status) -->
      <div class="overview-grid-two-col">
        <!-- Quick Control Actions Card -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 style="font-size: 1.25rem; display: flex; align-items: center; gap: 10px;">
              ⚡ <span>${e?"إجراءات الإدارة السريعة":"Quick Admin Actions"}</span>
            </h3>
            <span style="font-size: 0.82rem; color: var(--accent-green); font-weight: 700;">${e?"نقرة واحدة للتنفيذ":"1-Click Execution"}</span>
          </div>

          <div class="overview-action-grid">
            <button class="action-tile-btn" onclick="openEditWorkModal()">
              <div class="action-tile-icon">➕</div>
              <div>
                <div>${e?"إضافة مشروع جديد":"Add New Work"}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${e?"بورتفوليو، فيديو أو هوية":"Portfolio, Video, Ads"}</div>
              </div>
            </button>

            <button class="action-tile-btn" onclick="openEditTestimonialModal()">
              <div class="action-tile-icon">⭐</div>
              <div>
                <div>${e?"إضافة تقييم جديد":"Add Testimonial"}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${e?"رأي عميل وتقييم بالنجوم":"Client Review & Rating"}</div>
              </div>
            </button>

            <button class="action-tile-btn" onclick="openEditPlanModal()">
              <div class="action-tile-icon">💳</div>
              <div>
                <div>${e?"إضافة باقة جديدة":"Add Service Plan"}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${e?"باقة نمو ومزايا جديدة":"New Plan & Features"}</div>
              </div>
            </button>

            <button class="action-tile-btn" onclick="activeAdminTab='content'; renderApp();">
              <div class="action-tile-icon">📝</div>
              <div>
                <div>${e?"تعديل نصوص الواجهة":"Edit Hero Text"}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${e?"العناوين والأوصاف الرئيسية":"Titles & Descriptions"}</div>
              </div>
            </button>

            <button class="action-tile-btn" onclick="activeAdminTab='messages'; renderApp();">
              <div class="action-tile-icon">📬</div>
              <div>
                <div>${e?"صندوق الوارد والطلبات":"View All Messages"}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${e?`إجمالي ${s.messages.length} رسالة`:`${s.messages.length} Inquiries`}</div>
              </div>
            </button>

            <button class="action-tile-btn" onclick="activeAdminTab='settings'; renderApp();">
              <div class="action-tile-icon">⚙️</div>
              <div>
                <div>${e?"إعدادات الواتساب والحماية":"Security & WhatsApp"}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${e?"رقم الواتساب والرمز السري":"PIN & Contact Info"}</div>
              </div>
            </button>
          </div>
        </div>

        <!-- System & Security Health Status Card -->
        <div class="admin-card">
          <div class="admin-card-header">
            <h3 style="font-size: 1.25rem; display: flex; align-items: center; gap: 10px;">
              🖥️ <span>${e?"حالة السيرفر والتطبيق":"System Health & Security"}</span>
            </h3>
            <span class="pill-badge pill-green">🟢 مباشر</span>
          </div>

          <div class="sys-status-list">
            <div class="sys-status-item">
              <div class="sys-status-label">
                <span>⚡</span>
                <span>${e?"حالة خادم الويب":"Web Server Status"}</span>
              </div>
              <span style="color: var(--accent-green); font-weight: 800;">متصل بنسبة 100٪</span>
            </div>

            <div class="sys-status-item">
              <div class="sys-status-label">
                <span>💾</span>
                <span>${e?"الحفظ في قاعدة البيانات":"Database Persistence"}</span>
              </div>
              <span class="pill-badge pill-blue">MySQL</span>
            </div>

            <div class="sys-status-item">
              <div class="sys-status-label">
                <span>🔒</span>
                <span>${e?"حماية لوحة التحكم":"Admin Authentication"}</span>
              </div>
              <span style="font-weight: 800; color: var(--accent-green); font-family: var(--font-en);">JWT</span>
            </div>

            <div class="sys-status-item">
              <div class="sys-status-label">
                <span>🌐</span>
                <span>${e?"لغة واجهة الموقع":"Current Language"}</span>
              </div>
              <span class="pill-badge pill-purple">العربية (من اليمين إلى اليسار)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Inquiries Section -->
      <div class="admin-table-card">
        <div style="padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border);">
          <h3 style="font-size: 1.2rem; display: flex; align-items: center; gap: 10px;">
            📬 <span>${e?"أحدث طلبات الاتصال والاستفسارات":"Recent Incoming Inquiries"}</span>
          </h3>
          <button class="btn-secondary" onclick="activeAdminTab='messages'; renderApp();" style="padding: 6px 14px; font-size: 0.85rem;">
            ${e?"عرض كافة الرسائل ("+s.messages.length+")":"View All Inquiries"}
          </button>
        </div>

        ${n.length===0?`<p style="padding:24px; color:var(--text-muted);">${e?"لا توجد رسائل حالياً":"No recent messages"}</p>`:`
          <table class="admin-table-styled">
            <thead>
              <tr>
                <th>${e?"الراسل":"Sender"}</th>
                <th>${e?"رقم التواصل":"Contact"}</th>
                <th>${e?"نوع الخدمة":"Service"}</th>
                <th>${e?"التاريخ":"Date"}</th>
                <th>${e?"الحالة":"Status"}</th>
              </tr>
            </thead>
            <tbody>
              ${n.map(i=>`
                <tr style="${i.read?"":"background:rgba(253,163,2,0.1);"}">
                  <td><strong style="color:var(--text-primary);">${B(i.name)}</strong></td>
                  <td><span style="font-family:var(--font-en); font-size:0.9rem; color:var(--text-secondary);">📞 ${B(i.phone)}</span></td>
                  <td><span class="pill-badge pill-purple">${B(i.service)}</span></td>
                  <td><span class="pill-badge pill-blue">⏱️ ${B(i.date)}</span></td>
                  <td>
                    ${i.read?`<span class="pill-badge pill-green">${e?"🟢 مقروء":"Read"}</span>`:`<span class="pill-badge pill-red">${e?"🔴 غير مقروء":"Unread"}</span>`}
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `}
      </div>
    `}if(t==="stats")return`
      <div class="admin-card">
        <form id="admin-stats-form">
          <h3 style="color:var(--accent-green); margin-bottom:18px;">📈 ${e?"إحصاءات الصفحة الرئيسية":"Hero Statistics Cards"}</h3>
          <p style="color:var(--text-muted); margin-bottom:24px;">${e?"اضبط النص والرقم لكل بطاقة من الأربع بطاقات الإحصاء في الصفحة الرئيسية.":"Manage each of the four stat cards displayed on the homepage."}</p>

          ${s.hero.stats.map((a,n)=>`
            <div class="admin-card" style="padding:20px; margin-bottom:18px; background: rgba(253,163,2,0.03); border: 1px solid var(--border-color);">
              <h4 style="margin-bottom:16px; color:var(--accent-green);">${e?"بطاقة الإحصاء":"Stat Card"} ${n+1}</h4>
              <div class="form-group">
                <label class="form-label">${e?"القيمة/الرقم":"Number / Value"}</label>
                <input type="text" id="stat-number-${n}" class="form-input" value="${a.number}" />
              </div>
              <div class="form-group">
                <label class="form-label">${e?"العنوان بالعربي":"Arabic Label"}</label>
                <input type="text" id="stat-label-ar-${n}" class="form-input" value="${a.labelAr}" />
              </div>
              <div class="form-group">
                <label class="form-label">${e?"العنوان بالإنجليزية":"English Label"}</label>
                <input type="text" id="stat-label-en-${n}" class="form-input" value="${a.labelEn}" />
              </div>
            </div>
          `).join("")}

          <button type="submit" class="btn-primary" style="margin-top:8px;">💾 ${e?"حفظ كل إحصاءات الصفحة":"Save All Stats"}</button>
        </form>
      </div>
    `;if(t==="content")return`
      <div class="admin-card">
        <form id="admin-content-form">
          <h3 style="color:var(--accent-green); margin-bottom:16px;">🇸🇦 ${e?"محتوى الواجهة باللغة العربية":"Arabic Interface Content"}</h3>
          <div class="form-group">
            <label class="form-label">العنوان الرئيسي</label>
            <input type="text" id="adm-hero-title-ar" class="form-input" value="${s.hero.ar.title}" />
          </div>
          <div class="form-group">
            <label class="form-label">الوصف الفرعي</label>
            <textarea id="adm-hero-sub-ar" class="form-textarea" rows="2">${s.hero.ar.subtitle}</textarea>
          </div>

          <h3 style="color:var(--accent-green); margin-top:30px; margin-bottom:16px;">🇺🇸 محتوى الواجهة باللغة الإنجليزية</h3>
          <div class="form-group">
            <label class="form-label">العنوان الرئيسي (بالإنجليزية)</label>
            <input type="text" id="adm-hero-title-en" class="form-input" value="${s.hero.en.title}" />
          </div>
          <div class="form-group">
            <label class="form-label">الوصف الفرعي (بالإنجليزية)</label>
            <textarea id="adm-hero-sub-en" class="form-textarea" rows="2">${s.hero.en.subtitle}</textarea>
          </div>

          <button type="submit" class="btn-primary" style="margin-top:16px;">💾 ${e?"حفظ التعديلات فوراً":"Save Changes"}</button>
        </form>
      </div>
    `;if(t==="about")return`
      <div class="admin-card">
        <form id="admin-about-form">
          <h3 style="color:var(--accent-green); margin-bottom:16px;">🇸🇦 ${e?"عن الشركة (عربي)":"About (Arabic)"}</h3>
          <div class="form-group">
            <label class="form-label">العنوان الفرعي</label>
            <input type="text" id="adm-about-tag-ar" class="form-input" value="${s.about.ar.tag}" />
          </div>
          <div class="form-group">
            <label class="form-label">${e?"العنوان الرئيسي":"Title"}</label>
            <input type="text" id="adm-about-title-ar" class="form-input" value="${s.about.ar.title}" />
          </div>
          <div class="form-group">
            <label class="form-label">${e?"الوصف":"Description"}</label>
            <textarea id="adm-about-desc-ar" class="form-textarea" rows="4">${s.about.ar.description}</textarea>
          </div>

          <h3 style="color:var(--accent-green); margin-top:30px; margin-bottom:16px;">🇺🇸 عن الشركة (بالإنجليزية)</h3>
          <div class="form-group">
            <label class="form-label">العنوان الفرعي (بالإنجليزية)</label>
            <input type="text" id="adm-about-tag-en" class="form-input" value="${s.about.en.tag}" />
          </div>
          <div class="form-group">
            <label class="form-label">العنوان الرئيسي (بالإنجليزية)</label>
            <input type="text" id="adm-about-title-en" class="form-input" value="${s.about.en.title}" />
          </div>
          <div class="form-group">
            <label class="form-label">الوصف (بالإنجليزية)</label>
            <textarea id="adm-about-desc-en" class="form-textarea" rows="4">${s.about.en.description}</textarea>
          </div>

          <button type="submit" class="btn-primary" style="margin-top:16px;">💾 ${e?"حفظ تعديلات صفحة About":"Save About Page"}</button>
        </form>
      </div>
    `;if(t==="works")return`
      <div class="admin-table-card">
        <div style="padding:24px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--glass-border);">
          <h3 style="font-size:1.3rem;">💼 ${e?"مشاريع وقصص نجاح البورتفوليو":"Portfolio Projects"}</h3>
          <button class="btn-primary" id="add-work-trigger">➕ ${e?"إضافة مشروع جديد":"Add Work"}</button>
        </div>

        <table class="admin-table-styled">
          <thead>
            <tr>
              <th>${e?"المشروع والصورة":"Project & Preview"}</th>
              <th>${e?"التصنيف":"Category"}</th>
              <th>${e?"العميل":"Client"}</th>
              <th>${e?"النتائج":"Metrics"}</th>
              <th>${e?"إجراء":"Action"}</th>
            </tr>
          </thead>
          <tbody>
            ${s.works.map(a=>`
              <tr>
                <td>
                  <div class="admin-row-item">
                    <img data-media-ref="${a.image||""}" src="${ie(a.image)}" alt="${a.titleAr}" class="admin-row-thumb" />
                    <div class="admin-row-info">
                      <div class="admin-row-title">${e?a.titleAr:a.titleEn}</div>
                    </div>
                  </div>
                </td>
                <td><span class="pill-badge pill-green">🎬 ${Le(a.category)}</span></td>
                <td><span class="pill-badge pill-blue">👤 ${e?a.clientAr:a.clientEn}</span></td>
                <td><span style="font-weight:800; color:var(--accent-green);">${e?a.metricsAr:a.metricsEn}</span></td>
                <td>
                  <div style="display:flex; gap:8px;">
                    <button class="icon-btn edit-work-btn" data-id="${a.id}" style="width:38px; height:38px; color:var(--accent-green); border-color:var(--border-color);" title="${e?"تعديل":"Edit"}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="icon-btn delete-work-btn" data-id="${a.id}" style="width:38px; height:38px; color:#f87171; border-color:rgba(239,68,68,0.4);" title="${e?"حذف":"Delete"}">
                      ${S("Trash",18)}
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;if(t==="clients"){const a=s.clients.filter(n=>n.image);return`
      <div class="client-management-stack">
        <section class="admin-table-card client-logo-manager">
          <div class="client-logo-manager-header">
            <div>
              <h3 style="font-size:1.3rem;">🏷️ ${e?"شعارات شركاء النجاح":"Client Brand Logos"}</h3>
              <p>${e?"أضف شعارات العملاء كصور فقط، ويمكنك سحب عدة صور وإفلاتها هنا.":"Add client logos as images. Drag and drop multiple files here."}</p>
            </div>
            <span class="pill-badge pill-green">${a.length} ${e?"شعار":"logos"}</span>
          </div>

          <div class="client-logo-dropzone" id="client-logo-dropzone" role="button" tabindex="0" aria-controls="client-logo-files">
            <input id="client-logo-files" type="file" accept="image/*" multiple hidden />
            <span class="client-logo-drop-icon">↥</span>
            <strong>${e?"اسحب صور الشعارات وأفلتها هنا":"Drop logo images here"}</strong>
            <span>${e?"أو اضغط لاختيار الصور — PNG أو JPG أو SVG":"or click to browse — PNG, JPG, or SVG"}</span>
            <span class="client-logo-upload-status" id="client-logo-upload-status" aria-live="polite"></span>
          </div>

          <div class="client-logo-admin-grid">
            ${a.length?a.map(n=>`
              <div class="client-logo-admin-item">
                <div class="client-logo-admin-preview">
                  <img src="${ie(n.image)}" alt="" loading="lazy" />
                </div>
                <button class="icon-btn delete-client-logo-btn" data-id="${n.id}" type="button" title="${e?"حذف الشعار":"Delete logo"}" aria-label="${e?"حذف الشعار":"Delete logo"}">
                  ${S("Trash",18)}
                </button>
              </div>
            `).join(""):`
              <p class="client-logo-empty">${e?"لا توجد شعارات مضافة بعد.":"No logos added yet."}</p>
            `}
          </div>
        </section>

        <div class="admin-table-card">
        <div style="padding:24px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--glass-border);">
          <h3 style="font-size:1.3rem;">👥 ${e?"تقييمات وآراء العملاء":"Client Testimonials"}</h3>
          <button class="btn-primary" id="add-test-trigger">➕ ${e?"إضافة تقييم جديد":"Add Testimonial"}</button>
        </div>

        <table class="admin-table-styled">
          <thead>
            <tr>
              <th>${e?"اسم العميل":"Client Name"}</th>
              <th>${e?"المسمى الوظيفي والشركة":"Role & Company"}</th>
              <th>${e?"التقييم":"Rating"}</th>
              <th>${e?"الرأي":"Quote"}</th>
              <th>${e?"إجراء":"Action"}</th>
            </tr>
          </thead>
          <tbody>
            ${s.testimonials.map(n=>`
              <tr>
                <td>
                  <div class="admin-row-item">
                    <div class="admin-avatar" style="width:42px; height:42px; font-size:1.1rem; flex-shrink:0;">${(e?n.nameAr:n.nameEn).charAt(0)}</div>
                    <div class="admin-row-info">
                      <div class="admin-row-title">${e?n.nameAr:n.nameEn}</div>
                    </div>
                  </div>
                </td>
                <td><span class="pill-badge pill-purple">${e?n.roleAr:n.roleEn}</span></td>
                <td><span class="pill-badge pill-green">⭐ ${n.rating}.0 / 5.0</span></td>
                <td style="max-width:320px; color:var(--text-secondary); font-style:italic;">
                  "${(e?n.quoteAr:n.quoteEn).slice(0,80)}..."
                </td>
                <td>
                  <div style="display:flex; gap:8px;">
                    <button class="icon-btn edit-test-btn" data-id="${n.id}" style="width:38px; height:38px; color:var(--accent-green); border-color:var(--border-color);" title="${e?"تعديل":"Edit"}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="icon-btn delete-test-btn" data-id="${n.id}" style="width:38px; height:38px; color:#f87171; border-color:rgba(239,68,68,0.4);" title="${e?"حذف الرأي":"Delete Testimonial"}">
                      ${S("Trash",18)}
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        </div>
      </div>
    `}if(t==="team"){const a=s.teamMembers.find(i=>i.id===ge),n=G||(a==null?void 0:a.image)||"";return`
      <div class="team-admin-stack">
        <section class="admin-table-card team-member-manager">
          <div class="team-admin-header">
            <div>
              <h3>${e?a?"تعديل بيانات عضو الفريق":"إضافة عضو جديد للفريق":a?"Edit Team Member":"Add a Team Member"}</h3>
              <p>${e?"أضف صورة العضو واسمه ومسمّاه الوظيفي ووصفاً قصيراً عنه.":"Add a photo, name, job title, and a short description."}</p>
            </div>
            <span class="pill-badge pill-green">${s.teamMembers.length} ${e?"أعضاء":"members"}</span>
          </div>
          <form id="team-member-form" class="team-member-form">
            <div class="team-member-dropzone ${n?"has-image":""}" id="team-member-dropzone" role="button" tabindex="0" aria-controls="team-member-image">
              <input id="team-member-image" type="file" accept="image/*" hidden />
              ${n?`<img id="team-member-image-preview" src="${B(n)}" alt="${e?"معاينة صورة العضو":"Team member image preview"}" />`:`<span class="client-logo-drop-icon">↥</span><strong>${e?"اسحب صورة العضو وأفلتها هنا":"Drop a team member photo here"}</strong><span>${e?"أو اضغط لاختيار صورة":"or click to choose an image"}</span>`}
              <span class="team-member-upload-status" id="team-member-upload-status" aria-live="polite"></span>
            </div>
            <div class="team-member-fields">
              <label class="form-group">
                <span class="form-label">${e?"الاسم":"Name"}</span>
                <input class="form-input" id="team-member-name" type="text" maxlength="255" required value="${B((a==null?void 0:a.name)||"")}" />
              </label>
              <label class="form-group">
                <span class="form-label">${e?"المسمى الوظيفي":"Job title"}</span>
                <input class="form-input" id="team-member-job-title" type="text" maxlength="255" required value="${B((a==null?void 0:a.jobTitle)||"")}" />
              </label>
              <label class="form-group team-member-description-field">
                <span class="form-label">${e?"وصف قصير":"Short description"}</span>
                <textarea class="form-textarea" id="team-member-description" rows="3" maxlength="2000" required>${B((a==null?void 0:a.description)||"")}</textarea>
              </label>
              <div class="team-member-form-actions">
                ${a?`<button class="btn-secondary" id="cancel-team-edit" type="button">${e?"إلغاء التعديل":"Cancel edit"}</button>`:""}
                <button class="btn-primary" type="submit">${e?a?"حفظ التعديلات":"إضافة عضو الفريق":a?"Save changes":"Add team member"}</button>
              </div>
            </div>
          </form>
        </section>

        <section class="admin-table-card team-member-list">
          <h3>${e?"أعضاء الفريق":"Team members"}</h3>
          ${s.teamMembers.length?`
            <div class="team-admin-grid">
              ${s.teamMembers.map(i=>`
                <article class="team-admin-card">
                  <img src="${B(ie(i.image))}" alt="" loading="lazy" />
                  <div class="team-admin-card-info">
                    <strong>${B(i.name)}</strong>
                    <span>${B(i.jobTitle)}</span>
                    <p>${B(i.description)}</p>
                  </div>
                  <div class="team-admin-card-actions">
                    <button class="btn-secondary edit-team-member-btn" data-id="${B(i.id)}" type="button">${e?"تعديل":"Edit"}</button>
                    <button class="icon-btn delete-team-member-btn" data-id="${B(i.id)}" type="button" title="${e?"حذف العضو":"Delete member"}" aria-label="${e?"حذف العضو":"Delete member"}">${S("Trash",18)}</button>
                  </div>
                </article>
              `).join("")}
            </div>
          `:`<p class="team-admin-empty">${e?"لم تتم إضافة أعضاء إلى الفريق بعد.":"No team members have been added yet."}</p>`}
        </section>
      </div>
    `}return t==="plans"?`
      <div class="admin-table-card">
        <div style="padding:24px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--glass-border);">
          <h3 style="font-size:1.3rem;">💳 ${e?"إدارة الباقات والخدمات":"Plans & Services Management"}</h3>
          <button class="btn-primary" id="add-plan-trigger">➕ ${e?"إضافة باقة جديدة":"Add Plan"}</button>
        </div>

        <table class="admin-table-styled">
          <thead>
            <tr>
              <th>${e?"اسم الباقة":"Plan Name"}</th>
              <th>${e?"المميزات":"Features"}</th>
              <th>${e?"الحالة":"Status"}</th>
              <th>${e?"إجراء":"Action"}</th>
            </tr>
          </thead>
          <tbody>
            ${s.plans.map(a=>`
              <tr>
                <td>
                  <div class="admin-row-info">
                    <div class="admin-row-title">${e?a.nameAr:a.nameEn}</div>
                    <div class="admin-row-subtitle">${a.nameEn}</div>
                  </div>
                </td>
                <td style="max-width:300px; color:var(--text-muted); font-size:0.85rem;">
                  ${(e?a.featuresAr:a.featuresEn).join(", ").slice(0,80)}...
                </td>
                <td>
                  ${a.popular?`<span class="pill-badge pill-green">${e?"الأكثر طلباً":"Popular"}</span>`:"-"}
                </td>
                <td>
                  <div style="display:flex; gap:8px;">
                    <button class="icon-btn edit-plan-btn" data-id="${a.id}" style="width:38px; height:38px; color:var(--accent-green); border-color:var(--border-color);" title="${e?"تعديل":"Edit"}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="icon-btn delete-plan-btn" data-id="${a.id}" style="width:38px; height:38px; color:#f87171; border-color:rgba(239,68,68,0.4);" title="${e?"حذف":"Delete"}">
                      ${S("Trash",18)}
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:t==="messages"?`
      <div class="admin-table-card">
        <div style="padding:24px; border-bottom:1px solid var(--glass-border);">
          <h3 style="font-size:1.3rem;">📬 ${e?"صندوق الرسائل والطلبات الواردة":"Inbox Inquiries"}</h3>
        </div>

        ${s.messages.length===0?`<p style="padding:30px; color:var(--text-muted);">${e?"لا توجد رسائل حالياً":"No messages yet."}</p>`:`
          <table class="admin-table-styled">
            <thead>
              <tr>
                <th>${e?"التاريخ والوقت":"Date"}</th>
                <th>${e?"بيانات الراسل":"Contact Person"}</th>
                <th>${e?"نوع الخدمة":"Service"}</th>
                <th>${e?"الحالة":"Status"}</th>
                <th>${e?"إجراء":"Action"}</th>
              </tr>
            </thead>
            <tbody>
              ${s.messages.map(a=>`
                <tr style="${a.read?"":"background:rgba(253,163,2,0.12);"}">
                  <td><span class="pill-badge pill-blue">⏱️ ${B(a.date)}</span></td>
                  <td>
                    <div class="admin-row-info">
                      <div class="admin-row-title">${B(a.name)}</div>
                      <div class="admin-row-subtitle">📞 ${B(a.phone)} | ✉️ ${B(a.email)}</div>
                    </div>
                  </td>
                  <td><span class="pill-badge pill-purple">${B(ra(a.service))}</span></td>
                  <td>
                    ${a.read?'<span class="pill-badge pill-green">🟢 تم الاطلاع</span>':`<button class="pill-badge pill-red mark-read-btn" data-id="${B(a.id)}" style="cursor:pointer;">🔴 غير مقروء (اضغط للتعليم كقراءة)</button>`}
                  </td>
                  <td>
                    <button class="icon-btn delete-msg-btn" data-id="${B(a.id)}" style="width:38px; height:38px; color:#f87171; border-color:rgba(239,68,68,0.4);" title="${e?"حذف الرسالة":"Delete Message"}">
                      ${S("Trash",18)}
                    </button>
                  </td>
                </tr>
                <tr style="${a.read?"":"background:rgba(253,163,2,0.06);"}">
                  <td colspan="5" style="padding-top:0; padding-bottom:20px;">
                    <div style="background:rgba(18,30,24,0.7); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border-color); color:var(--text-secondary); font-style:italic;">
                      💬 "${B(a.message)}"
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        `}
      </div>
    `:t==="settings"?`
      <div class="admin-card">
        <h3 style="font-size:1.3rem; margin-bottom:20px;">⚙️ ${e?"إعدادات الحماية والبيانات":"Security Settings"}</h3>
        <form id="admin-settings-form">
          <div class="form-group">
            <label class="form-label">${e?"البريد الإلكتروني الرسمي":"Contact Email"}</label>
            <input type="email" id="adm-email" class="form-input" value="${s.settings.contactEmail}" required />
          </div>
          <div class="form-group">
            <label class="form-label">${e?"رقم الواتساب والاتصال":"WhatsApp Phone"}</label>
            <input type="text" id="adm-phone" class="form-input" value="${s.settings.contactPhone}" required />
          </div>
          <div class="form-group">
            <label class="form-label">${e?"رابط زر الواتساب (اختياري)":"WhatsApp Button Link (optional)"}</label>
            <input type="text" id="adm-whatsapp" class="form-input" value="${s.settings.whatsapp||""}" placeholder="https://wa.me/966500000000" />
            <small style="color:var(--text-muted); font-size:0.8rem; margin-top:6px; display:block;">
              ${e?"اتركه فارغاً ليتم توليد الرابط تلقائياً من رقم الهاتف":"Leave empty to auto-generate from phone number"}
            </small>
          </div>
          <div class="form-group">
            <label class="form-label">${e?"رابط الفيسبوك":"Facebook URL"}</label>
            <input type="text" id="adm-fb" class="form-input" value="${s.settings.facebook||""}" />
          </div>
          <div class="form-group">
            <label class="form-label">${e?"رابط الانستجرام":"Instagram URL"}</label>
            <input type="text" id="adm-insta" class="form-input" value="${s.settings.instagram||""}" />
          </div>
          <button type="submit" class="btn-primary" style="margin-top:10px;">💾 ${e?"حفظ الإعدادات":"Save Settings"}</button>
        </form>

        <hr style="border:none; border-top:1px solid var(--glass-border); margin:30px 0;" />
        
        <h4 style="color:#f87171; margin-bottom:12px;">🚨 ${e?"إعادة ضبط البيانات للافتراضي":"Reset All Data"}</h4>
        <button class="btn-secondary" id="reset-data-btn" style="border-color:#f87171; color:#f87171;">
          🔄 ${e?"استعادة البيانات الأصلية بالكامل":"Reset Factory Defaults"}
        </button>
      </div>
    `:""}function pa(t){try{const e=new URL(t,se);return e.origin!==new URL(se).origin?null:/^\/api\/media\/[a-f0-9-]+$/i.test(e.pathname)?e.pathname:null}catch{return null}}async function ce(t){const e=pa(t);if(!e)return;const a=localStorage.getItem(R);await le(e,{method:"DELETE",headers:{Authorization:`Bearer ${a}`}})}function ga(t,e){const a=C==="ar";if(t==="team"){va(e,a);return}if(t==="stats"){const n=document.getElementById("admin-stats-form");n&&(n.onsubmit=i=>{i.preventDefault(),s.hero.stats=s.hero.stats.map((o,c)=>({...o,number:document.getElementById(`stat-number-${c}`).value.trim()||o.number,labelAr:document.getElementById(`stat-label-ar-${c}`).value.trim()||o.labelAr,labelEn:document.getElementById(`stat-label-en-${c}`).value.trim()||o.labelEn})),V(),y(a?"تم تحديث إحصاءات الصفحة بنجاح":"Hero stats updated successfully")})}if(t==="content"){const n=document.getElementById("admin-content-form");n&&(n.onsubmit=i=>{i.preventDefault(),s.hero.ar.title=document.getElementById("adm-hero-title-ar").value,s.hero.ar.subtitle=document.getElementById("adm-hero-sub-ar").value,s.hero.en.title=document.getElementById("adm-hero-title-en").value,s.hero.en.subtitle=document.getElementById("adm-hero-sub-en").value,V(),y(a?"تم تحديث المحتوى بنجاح":"Content updated")})}if(t==="about"){const n=document.getElementById("admin-about-form");n&&(n.onsubmit=i=>{i.preventDefault(),s.about.ar.tag=document.getElementById("adm-about-tag-ar").value,s.about.ar.title=document.getElementById("adm-about-title-ar").value,s.about.ar.description=document.getElementById("adm-about-desc-ar").value,s.about.en.tag=document.getElementById("adm-about-tag-en").value,s.about.en.title=document.getElementById("adm-about-title-en").value,s.about.en.description=document.getElementById("adm-about-desc-en").value,V(),y(a?"تم تحديث صفحة About بنجاح":"About page updated")})}if(t==="works"){e.querySelectorAll(".edit-work-btn").forEach(i=>{i.onclick=()=>{const o=s.works.find(c=>c.id===i.dataset.id);o&&Se(o)}}),e.querySelectorAll(".delete-work-btn").forEach(i=>{i.onclick=()=>{confirm(a?"هل أنت متأكد من حذف هذا المشروع؟":"Delete this project?")&&(s.works=s.works.filter(o=>o.id!==i.dataset.id),V(),W(e),y(a?"تم حذف المشروع":"Work deleted"))}});const n=document.getElementById("add-work-trigger");n&&(n.onclick=()=>Se())}if(t==="clients"){const n=document.getElementById("client-logo-dropzone"),i=document.getElementById("client-logo-files"),o=document.getElementById("client-logo-upload-status"),c=async m=>{var w,E;const g=[...m];if(!g.length)return;const p=[],u=[];for(const[I,$]of g.entries()){if(!$.type.startsWith("image/")){u.push($.name);continue}if($.size>32*1024*1024){u.push($.name);continue}o&&(o.textContent=a?`جاري رفع ${I+1} من ${g.length}: ${$.name}`:`Uploading ${I+1} of ${g.length}: ${$.name}`);try{const f=await ne($,localStorage.getItem(R)),O=((E=(w=globalThis.crypto)==null?void 0:w.randomUUID)==null?void 0:E.call(w))||`client-logo-${Date.now()}-${I}`;p.push({id:O,image:f})}catch(f){console.error(`Could not upload client logo "${$.name}":`,f),u.push($.name)}}if(p.length&&(s.clients.push(...p),await V()?y(a?`تمت إضافة ${p.length} شعار بنجاح`:`Added ${p.length} logo${p.length===1?"":"s"}`):(s.clients=s.clients.filter($=>!p.some(f=>f.id===$.id)),J(),await Promise.all(p.map($=>ce($.image).catch(f=>{console.error("Could not clean up an unsaved client logo:",f)}))),K())),o&&(o.textContent=""),u.length){const I=a?`تعذر رفع ${u.length} ملف. تأكد أن الملفات صور وحجم كل ملف أقل من 32 ميجابايت.`:`Could not upload ${u.length} file(s). Use images under 32 MB each.`;y(I,"error")}i&&(i.value="")};n&&i&&(n.onclick=m=>{m.target!==i&&i.click()},n.onkeydown=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),i.click())},i.onchange=()=>c(i.files),n.ondragover=m=>{m.preventDefault(),n.classList.add("drag-active")},n.ondragleave=m=>{n.contains(m.relatedTarget)||n.classList.remove("drag-active")},n.ondrop=m=>{m.preventDefault(),n.classList.remove("drag-active"),c(m.dataTransfer.files)}),e.querySelectorAll(".delete-client-logo-btn").forEach(m=>{m.onclick=async()=>{const g=s.clients.find(u=>u.id===m.dataset.id);if(!g)return;if(s.clients=s.clients.filter(u=>u.id!==g.id),!await V()){s.clients.push(g),J(),K();return}try{await ce(g.image)}catch(u){console.error("Could not delete the removed client logo asset:",u),y(a?"تم حذف الشعار من الموقع، لكن تعذر حذف ملف الصورة من التخزين":"Logo removed, but its stored image could not be deleted","error");return}y(a?"تم حذف الشعار":"Logo deleted")}}),e.querySelectorAll(".edit-test-btn").forEach(m=>{m.onclick=()=>{const g=s.testimonials.find(p=>p.id===m.dataset.id);g&&Pe(g)}}),e.querySelectorAll(".delete-test-btn").forEach(m=>{m.onclick=()=>{confirm(a?"هل أنت متأكد من حذف هذا التقييم؟":"Delete this testimonial?")&&(s.testimonials=s.testimonials.filter(g=>g.id!==m.dataset.id),V(),W(e),y(a?"تم حذف التقييم":"Testimonial deleted"))}});const d=document.getElementById("add-test-trigger");d&&(d.onclick=()=>Pe())}if(t==="plans"){e.querySelectorAll(".edit-plan-btn").forEach(i=>{i.onclick=()=>{const o=s.plans.find(c=>c.id===i.dataset.id);o&&Be(o)}}),e.querySelectorAll(".delete-plan-btn").forEach(i=>{i.onclick=()=>{confirm(a?"حذف هذه الباقة؟":"Delete this plan?")&&(s.plans=s.plans.filter(o=>o.id!==i.dataset.id),V(),W(e))}});const n=document.getElementById("add-plan-trigger");n&&(n.onclick=()=>Be())}if(t==="messages"&&(e.querySelectorAll(".mark-read-btn").forEach(n=>{n.onclick=async()=>{const i=s.messages.find(o=>o.id===n.dataset.id);if(i)try{await le(`/api/messages/${encodeURIComponent(i.id)}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem(R)}`},body:JSON.stringify({read:!0})}),i.read=!0,J(),W(e)}catch(o){console.error("Could not update message status:",o),y(a?"تعذر تحديث حالة الرسالة":"Could not update message status","error")}}}),e.querySelectorAll(".delete-msg-btn").forEach(n=>{n.onclick=async()=>{try{await le(`/api/messages/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem(R)}`}}),s.messages=s.messages.filter(i=>i.id!==n.dataset.id),J(),W(e),y(a?"تم حذف الرسالة":"Message deleted")}catch(i){console.error("Could not delete message:",i),y(a?"تعذر حذف الرسالة":"Could not delete message","error")}}})),t==="settings"){const n=document.getElementById("admin-settings-form");n&&(n.onsubmit=o=>{o.preventDefault(),s.settings.contactEmail=document.getElementById("adm-email").value,s.settings.contactPhone=document.getElementById("adm-phone").value,s.settings.whatsapp=document.getElementById("adm-whatsapp").value.trim(),s.settings.facebook=document.getElementById("adm-fb").value,s.settings.instagram=document.getElementById("adm-insta").value,V(),_t(),y(a?"تم حفظ الإعدادات":"Settings saved")});const i=document.getElementById("reset-data-btn");i&&(i.onclick=()=>{confirm(a?"هل أنت تأكد من استعادة بيانات المصنع الأصلي؟":"Are you sure you want to reset data?")&&(localStorage.removeItem(he),s=JSON.parse(JSON.stringify(me)),V(),W(e),y(a?"تمت استعادة بيانات المصنع":"Factory reset!"))})}}function va(t,e){const a=document.getElementById("team-member-form"),n=document.getElementById("team-member-dropzone"),i=document.getElementById("team-member-image"),o=d=>{if(d){if(!d.type.startsWith("image/")||d.size>32*1024*1024){y(e?"اختر ملف صورة لا يتجاوز حجمه 32 ميجابايت":"Choose an image file under 32 MB","error"),i&&(i.value="");return}G.startsWith("blob:")&&URL.revokeObjectURL(G),de=d,G=URL.createObjectURL(d),W(t)}};n&&i&&(n.onclick=d=>{d.target!==i&&i.click()},n.onkeydown=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),i.click())},i.onchange=()=>{var d;return o((d=i.files)==null?void 0:d[0])},n.ondragover=d=>{d.preventDefault(),n.classList.add("drag-active")},n.ondragleave=d=>{n.contains(d.relatedTarget)||n.classList.remove("drag-active")},n.ondrop=d=>{var m;d.preventDefault(),n.classList.remove("drag-active"),o((m=d.dataTransfer.files)==null?void 0:m[0])}),a&&(a.onsubmit=async d=>{var f,O;d.preventDefault();const m=document.getElementById("team-member-name").value.trim(),g=document.getElementById("team-member-job-title").value.trim(),p=document.getElementById("team-member-description").value.trim(),u=s.teamMembers.find(D=>D.id===ge),w=[...s.teamMembers];let E=(u==null?void 0:u.image)||"",I="",$=!1;if(!m||!g||!p){y(e?"يرجى استكمال بيانات عضو الفريق":"Please complete all team member fields","error");return}try{if(de){const Y=document.getElementById("team-member-upload-status");Y&&(Y.textContent=e?"جاري رفع الصورة...":"Uploading image..."),E=await ne(de,localStorage.getItem(R)),I=E}if(!E){y(e?"يرجى اختيار صورة لعضو الفريق":"Please choose a team member photo","error");return}const D={id:(u==null?void 0:u.id)||((O=(f=globalThis.crypto)==null?void 0:f.randomUUID)==null?void 0:O.call(f))||`team-member-${Date.now()}`,name:m,jobTitle:g,description:p,image:E};if(u?s.teamMembers=s.teamMembers.map(Y=>Y.id===u.id?D:Y):s.teamMembers.push(D),$=!0,ge=null,de=null,G.startsWith("blob:")&&URL.revokeObjectURL(G),G="",!await V()){s.teamMembers=w,J(),$=!1,I&&await ce(I).catch(Y=>{console.error("Could not clean up an unsaved team member image:",Y)}),K();return}if(u&&I&&u.image!==I)try{await ce(u.image)}catch(Y){console.error("Could not delete the replaced team member image:",Y),y(e?"تم تحديث العضو، لكن تعذر حذف الصورة القديمة":"Member updated, but the old image could not be deleted","error");return}y(e?u?"تم تحديث بيانات عضو الفريق":"تمت إضافة عضو الفريق":u?"Team member updated":"Team member added")}catch(D){$&&(s.teamMembers=w,J(),K()),I&&await ce(I).catch(_=>{console.error("Could not clean up an unsaved team member image:",_)}),console.error("Could not save team member:",D),y(e?`تعذر حفظ عضو الفريق: ${D.message}`:`Could not save team member: ${D.message}`,"error")}});const c=document.getElementById("cancel-team-edit");c&&(c.onclick=()=>{ge=null,de=null,G.startsWith("blob:")&&URL.revokeObjectURL(G),G="",W(t)}),t.querySelectorAll(".edit-team-member-btn").forEach(d=>{d.onclick=()=>{const m=s.teamMembers.find(g=>g.id===d.dataset.id);m&&(ge=m.id,de=null,G.startsWith("blob:")&&URL.revokeObjectURL(G),G="",W(t))}}),t.querySelectorAll(".delete-team-member-btn").forEach(d=>{d.onclick=async()=>{const m=s.teamMembers.find(u=>u.id===d.dataset.id);if(!m||!confirm(e?"هل أنت متأكد من حذف عضو الفريق؟":"Delete this team member?"))return;const g=[...s.teamMembers];if(s.teamMembers=s.teamMembers.filter(u=>u.id!==m.id),!await V()){s.teamMembers=g,J(),K();return}try{await ce(m.image)}catch(u){console.error("Could not delete the removed team member image:",u),y(e?"تم حذف العضو، لكن تعذر حذف ملف الصورة من التخزين":"Member removed, but the stored image could not be deleted","error");return}y(e?"تم حذف عضو الفريق":"Team member deleted")}})}function Se(t=null){const e=C==="ar";let a=document.getElementById("edit-work-modal");a||(a=document.createElement("div"),a.id="edit-work-modal",a.className="modal-overlay",document.body.appendChild(a));const n=!!t,i=t||{id:"",category:"video",titleEn:"",titleAr:"",clientEn:"",clientAr:"",image:"",videoUrl:"",summaryEn:"",summaryAr:"",metricsEn:"",metricsAr:"",detailsEn:"",detailsAr:""};a.innerHTML=`
    <div class="modal-card" style="max-width: 800px;">
      <button class="modal-close" onclick="document.getElementById('edit-work-modal').classList.remove('active')">&times;</button>
      <h2 style="margin-bottom: 24px;">${n?e?"تعديل مشروع":"Edit Project":e?"إضافة مشروع جديد":"Add New Project"}</h2>
      
      <form id="edit-work-form" class="admin-form-grid">
        <div class="form-group grid-col-full">
          <label class="form-label">${e?"تصنيف المشروع":"Category"}</label>
          <select id="adm-w-cat" class="form-select">
            <option value="video" ${i.category==="video"?"selected":""}>فيديو</option>
            <option value="ads" ${i.category==="ads"?"selected":""}>إعلانات</option>
            <option value="branding" ${i.category==="branding"?"selected":""}>هوية تجارية</option>
            <option value="social" ${i.category==="social"?"selected":""}>تواصل اجتماعي</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">${e?"اسم المشروع (عربي)":"Title (Ar)"}</label>
          <input type="text" id="adm-w-title-ar" class="form-input" value="${i.titleAr||""}" placeholder="${e?"أدخل اسم المشروع...":"Project Title"}" />
        </div>
        <div class="form-group">
          <label class="form-label">اسم المشروع (بالإنجليزية)</label>
          <input type="text" id="adm-w-title-en" class="form-input" value="${i.titleEn||""}" placeholder="اسم المشروع باللغة الإنجليزية" />
        </div>

        <div class="form-group">
          <label class="form-label">${e?"اسم العميل (عربي)":"Client (Ar)"}</label>
          <input type="text" id="adm-w-client-ar" class="form-input" value="${i.clientAr||""}" placeholder="${e?"اسم العميل أو الشركة...":"Client Name"}" />
        </div>
        <div class="form-group">
          <label class="form-label">اسم العميل (بالإنجليزية)</label>
          <input type="text" id="adm-w-client-en" class="form-input" value="${i.clientEn||""}" placeholder="اسم العميل باللغة الإنجليزية" />
        </div>

        <div class="form-group grid-col-full">
          <label class="form-label">${e?"صورة المعاينة (رابط أو رفع من الجهاز)":"Preview Image (URL or upload)"}</label>
          <div class="media-input-group">
            <input type="text" id="adm-w-img" class="form-input" value="${i.image||""}" placeholder="https://..." />
            <label class="file-upload-btn">
              📁 ${e?"رفع صورة":"Upload Image"}
              <input type="file" id="adm-w-img-file" accept="image/*" hidden />
            </label>
          </div>
          <div id="adm-w-img-preview" class="media-preview"></div>
        </div>

        <div class="form-group grid-col-full" id="video-url-group">
          <label class="form-label">${e?"فيديو المشروع (رابط يوتيوب/فيميو أو رفع فيديو من الجهاز)":"Project Video (YouTube/Vimeo link or upload local video file)"}</label>
          <div class="media-input-group">
            <input type="text" id="adm-w-video" class="form-input" value="${i.videoUrl||""}" placeholder="https://...mp4" />
            <label class="file-upload-btn">
              🎬 ${e?"رفع فيديو":"Upload Video"}
              <input type="file" id="adm-w-video-file" accept="video/*" hidden />
            </label>
          </div>
          <div id="adm-w-video-preview" class="media-preview"></div>
        </div>

        <div class="form-group">
          <label class="form-label">${e?"وصف مختصر (عربي)":"Summary (Ar)"}</label>
          <textarea id="adm-w-sum-ar" class="form-textarea" rows="2" placeholder="${e?"وصف مختصر...":"Summary"}">${i.summaryAr||""}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">الوصف المختصر (بالإنجليزية)</label>
          <textarea id="adm-w-sum-en" class="form-textarea" rows="2" placeholder="الوصف المختصر باللغة الإنجليزية">${i.summaryEn||""}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label">${e?"النتائج/الأرقام (عربي)":"Metrics (Ar)"}</label>
          <input type="text" id="adm-w-met-ar" class="form-input" value="${i.metricsAr||""}" placeholder="${e?"مثال: +300% مبيعات":"e.g. +300% ROI"}" />
        </div>
        <div class="form-group">
          <label class="form-label">النتائج والأرقام (بالإنجليزية)</label>
          <input type="text" id="adm-w-met-en" class="form-input" value="${i.metricsEn||""}" placeholder="مثال: +300% عائد استثمار" />
        </div>

        <div class="form-group grid-col-full">
          <label class="form-label">${e?"تفاصيل المشروع (عربي)":"Full Details (Ar)"}</label>
          <textarea id="adm-w-det-ar" class="form-textarea" rows="3" placeholder="${e?"تفاصيل المشروع الكاملة...":"Full details"}">${i.detailsAr||""}</textarea>
        </div>
        <div class="form-group grid-col-full">
          <label class="form-label">تفاصيل المشروع (بالإنجليزية)</label>
          <textarea id="adm-w-det-en" class="form-textarea" rows="3" placeholder="تفاصيل المشروع باللغة الإنجليزية">${i.detailsEn||""}</textarea>
        </div>

        <div class="form-group grid-col-full" style="margin-top: 10px;">
          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 15px; font-size: 1.1rem;">
            💾 ${e?"حفظ المشروع والتغييرات":"Save Project Changes"}
          </button>
        </div>
      </form>
    </div>
  `,a.classList.add("active"),Ve({urlInputId:"adm-w-img",fileInputId:"adm-w-img-file",previewId:"adm-w-img-preview",currentValue:i.image,isVideoMode:!1}),Ve({urlInputId:"adm-w-video",fileInputId:"adm-w-video-file",previewId:"adm-w-video-preview",currentValue:i.videoUrl,isVideoMode:!0});const o=document.getElementById("edit-work-form");o&&(o.onsubmit=async c=>{c.preventDefault();const d=document.getElementById("adm-w-title-ar").value.trim(),m=document.getElementById("adm-w-title-en").value.trim(),g=document.getElementById("adm-w-client-ar").value.trim(),p=document.getElementById("adm-w-client-en").value.trim();if(!d&&!m){y(e?"يرجى كتابة اسم المشروع على الأقل":"Please enter project title","error");return}const u=document.getElementById("adm-w-cat").value;let w=document.getElementById("adm-w-img").value.trim();const E=document.getElementById("adm-w-video").value.trim();if(!w&&E){const $=await rt(E);$&&(w=$.startsWith("data:")&&$.length>15e4?await it(be($)):$,document.getElementById("adm-w-img").value=w)}w||(w="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80");const I={id:n?i.id:"w-"+Date.now(),category:u,createdAt:n&&i.createdAt||Date.now(),titleAr:d||m,titleEn:m||d,clientAr:g||(e?"عميل كتم السرية":"Confidential Client"),clientEn:p||g||"Confidential Client",image:w,videoUrl:E,summaryAr:document.getElementById("adm-w-sum-ar").value.trim()||d,summaryEn:document.getElementById("adm-w-sum-en").value.trim()||m||d,metricsAr:document.getElementById("adm-w-met-ar").value.trim()||(e?"مشروع متميز 🔥":"Featured Work 🔥"),metricsEn:document.getElementById("adm-w-met-en").value.trim()||"Featured Work 🔥",detailsAr:document.getElementById("adm-w-det-ar").value.trim()||(e?"تم إطلاق هذا المشروع بنجاح بتحقيق نتائج استثنائية.":"Project launched successfully."),detailsEn:document.getElementById("adm-w-det-en").value.trim()||"Project launched successfully."};if(n){const $=s.works.findIndex(f=>f.id===i.id);$!==-1?s.works[$]=I:s.works.unshift(I)}else s.works.push(I);Me(),V(),a.classList.remove("active"),y(e?"تم حفظ التعديلات على المشروع بنجاح! 🚀":"Project saved successfully!")})}function Be(t=null){const e=C==="ar";let a=document.getElementById("edit-plan-modal");a||(a=document.createElement("div"),a.id="edit-plan-modal",a.className="modal-overlay",document.body.appendChild(a));const n=!!t,i=t||{id:"",nameAr:"",nameEn:"",featuresAr:[],featuresEn:[],popular:!1};a.innerHTML=`
    <div class="modal-card">
      <button class="modal-close" onclick="document.getElementById('edit-plan-modal').classList.remove('active')">&times;</button>
      <h2 style="margin-bottom: 24px;">${n?e?"تعديل الباقة":"Edit Plan":e?"إضافة باقة جديدة":"Add New Plan"}</h2>
      
      <form id="edit-plan-form" class="admin-form-grid">
        <div class="form-group">
          <label class="form-label">${e?"اسم الباقة (عربي)":"Plan Name (Ar)"}</label>
          <input type="text" id="adm-p-name-ar" class="form-input" value="${i.nameAr||""}" placeholder="${e?"أدخل اسم الباقة...":"Plan Name"}" />
        </div>
        <div class="form-group">
          <label class="form-label">اسم الباقة (بالإنجليزية)</label>
          <input type="text" id="adm-p-name-en" class="form-input" value="${i.nameEn||""}" placeholder="اسم الباقة باللغة الإنجليزية" />
        </div>

        <div class="form-group grid-col-full">
          <label class="form-label" style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="adm-p-popular" ${i.popular?"checked":""} style="width: 18px; height: 18px;" />
            ${e?"باقة مميزة (أكثر طلباً)":"Highlight as Popular"}
          </label>
        </div>

        <div class="form-group grid-col-full">
          <label class="form-label">${e?"المميزات (عربي) - كل ميزة في سطر":"Features (Ar) - One per line"}</label>
          <textarea id="adm-p-feats-ar" class="form-textarea" rows="4" placeholder="${e?`ميزة 1
ميزة 2`:`Feature 1
Feature 2`}">${(i.featuresAr||[]).join(`
`)}</textarea>
        </div>
        <div class="form-group grid-col-full">
          <label class="form-label">المميزات (بالإنجليزية) - ميزة واحدة في كل سطر</label>
          <textarea id="adm-p-feats-en" class="form-textarea" rows="4" placeholder="الميزة الأولى
الميزة الثانية">${(i.featuresEn||[]).join(`
`)}</textarea>
        </div>

        <div class="form-group grid-col-full" style="margin-top: 10px;">
          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 14px; font-size: 1.05rem;">
            💾 ${e?"حفظ الباقة":"Save Plan"}
          </button>
        </div>
      </form>
    </div>
  `,a.classList.add("active");const o=document.getElementById("edit-plan-form");o&&(o.onsubmit=c=>{c.preventDefault();const d=document.getElementById("adm-p-name-ar").value.trim(),m=document.getElementById("adm-p-name-en").value.trim();if(!d&&!m){y(e?"يرجى كتابة اسم الباقة":"Please enter plan name","error");return}const g=document.getElementById("adm-p-feats-ar").value.split(`
`).map(w=>w.trim()).filter(Boolean),p=document.getElementById("adm-p-feats-en").value.split(`
`).map(w=>w.trim()).filter(Boolean),u={id:n?i.id:"p-"+Date.now(),nameAr:d||m,nameEn:m||d,popular:document.getElementById("adm-p-popular").checked,featuresAr:g.length?g:[e?"خدمة مخصصة":"Custom Service"],featuresEn:p.length?p:g.length?g:["Custom Service"]};if(n){const w=s.plans.findIndex(E=>E.id===i.id);w!==-1?s.plans[w]=u:s.plans.push(u)}else s.plans.push(u);V(),a.classList.remove("active"),y(e?"تم حفظ الباقة بنجاح":"Plan saved successfully")})}function Pe(t=null){const e=C==="ar";let a=document.getElementById("edit-test-modal");a||(a=document.createElement("div"),a.id="edit-test-modal",a.className="modal-overlay",document.body.appendChild(a));const n=!!t,i=t||{id:"",nameAr:"",nameEn:"",roleAr:"",roleEn:"",quoteAr:"",quoteEn:"",rating:5};a.innerHTML=`
    <div class="modal-card">
      <button class="modal-close" onclick="document.getElementById('edit-test-modal').classList.remove('active')">&times;</button>
      <h2 style="margin-bottom: 24px;">${n?e?"تعديل التقييم":"Edit Testimonial":e?"إضافة تقييم جديد":"Add New Testimonial"}</h2>
      
      <form id="edit-test-form" class="admin-form-grid">
        <div class="form-group">
          <label class="form-label">${e?"اسم العميل (عربي)":"Client Name (Ar)"}</label>
          <input type="text" id="adm-t-name-ar" class="form-input" value="${i.nameAr||""}" placeholder="${e?"أدخل اسم العميل...":"Client Name"}" />
        </div>
        <div class="form-group">
          <label class="form-label">اسم العميل (بالإنجليزية)</label>
          <input type="text" id="adm-t-name-en" class="form-input" value="${i.nameEn||""}" placeholder="اسم العميل باللغة الإنجليزية" />
        </div>
        <div class="form-group">
          <label class="form-label">${e?"المسمى الوظيفي والشركة (عربي)":"Job Title & Company (Ar)"}</label>
          <input type="text" id="adm-t-role-ar" class="form-input" value="${i.roleAr||""}" placeholder="${e?"مثال: مدير التسويق - شركة ABC":"e.g. CMO - ABC Corp"}" />
        </div>
        <div class="form-group">
          <label class="form-label">المسمى الوظيفي والشركة (بالإنجليزية)</label>
          <input type="text" id="adm-t-role-en" class="form-input" value="${i.roleEn||""}" placeholder="مثال: مدير التسويق - شركة ABC" />
        </div>

        <div class="form-group grid-col-full">
          <label class="form-label">${e?"التقييم بالنجوم":"Star Rating"}</label>
          <div class="star-rating-picker" id="star-picker">
            ${[1,2,3,4,5].map(c=>`<span class="star-pick ${c<=i.rating?"active":""}" data-val="${c}">★</span>`).join("")}
          </div>
          <input type="hidden" id="adm-t-rating" value="${i.rating||5}" />
        </div>

        <div class="form-group grid-col-full">
          <label class="form-label">${e?"رأي العميل (عربي)":"Client Review (Ar)"}</label>
          <textarea id="adm-t-quote-ar" class="form-textarea" rows="3" placeholder="${e?"اكتب رأي العميل هنا...":"Write review..."}">${i.quoteAr||""}</textarea>
        </div>
        <div class="form-group grid-col-full">
          <label class="form-label">رأي العميل (بالإنجليزية)</label>
          <textarea id="adm-t-quote-en" class="form-textarea" rows="3" placeholder="اكتب رأي العميل باللغة الإنجليزية">${i.quoteEn||""}</textarea>
        </div>

        <div class="form-group grid-col-full" style="margin-top: 10px;">
          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 14px; font-size: 1.05rem;">
            💾 ${e?"حفظ التقييم":"Save Testimonial"}
          </button>
        </div>
      </form>
    </div>
  `,a.classList.add("active"),Kt("star-picker","adm-t-rating",i.rating||5);const o=document.getElementById("edit-test-form");o&&(o.onsubmit=c=>{c.preventDefault();const d=document.getElementById("adm-t-name-ar").value.trim(),m=document.getElementById("adm-t-name-en").value.trim(),g=document.getElementById("adm-t-quote-ar").value.trim(),p=document.getElementById("adm-t-quote-en").value.trim();if(!d&&!m){y(e?"يرجى إدخال اسم العميل":"Please enter client name","error");return}const u=document.getElementById("adm-t-role-ar").value.trim(),w=document.getElementById("adm-t-role-en").value.trim(),E={id:n?i.id:"t-"+Date.now(),nameAr:d||m,nameEn:m||d,roleAr:u||w||(e?"عميل كتم السرية":"Client"),roleEn:w||u||"Client",rating:Number(document.getElementById("adm-t-rating").value)||5,quoteAr:g||p||(e?"تجربة ممتازة وخدمة استثنائية.":"Great experience."),quoteEn:p||g||"Great experience."};if(n){const I=s.testimonials.findIndex($=>$.id===i.id);I!==-1?s.testimonials[I]=E:s.testimonials.unshift(E)}else s.testimonials.unshift(E);V(),a.classList.remove("active"),y(e?"تم حفظ التقييم بنجاح":"Testimonial saved successfully")})}window.navigateTo=ye;window.closeProjectModal=ut;window.renderApp=K;window.openEditWorkModal=Se;window.openEditTestimonialModal=Pe;window.openEditPlanModal=Be;Object.defineProperty(window,"activeAdminTab",{get(){return F},set(t){F=t}});document.addEventListener("DOMContentLoaded",async()=>{aa(xe),ta(),await Ut(),await jt(),ia(C),K()});
