// ============================================================
// CONSTANTS — Single source of truth for all colors, data,
// social links, projects, skills, and SEO metadata.
// ============================================================

// ─── COLOR PALETTE ──────────────────────────────────────────
export const COLORS = {
  RED: "#f43f5e",        // Rose 500
  RED_DARK: "#e11d48",   // Rose 600
  RED_GLOW: "rgba(244, 63, 94, 0.25)",
  DARK: "#09090b",       // Zinc 950
  DARK_SURFACE: "#18181b",// Zinc 900
  DARK_CARD: "#27272a",   // Zinc 800
  DARK_BORDER: "rgba(255, 255, 255, 0.08)",
  GRAY: "#a1a1aa",       // Zinc 400
  GRAY_LIGHT: "#e4e4e7", // Zinc 200
  WHITE: "#fafafa",      // Zinc 50
  WHITE_MUTED: "#f4f4f5", // Zinc 100
};

// ─── SEO METADATA ───────────────────────────────────────────
export const SEO_META = {
  title: "Dinesh Kumar Sahoo | MERN Stack Developer Portfolio",
  description:
    "Full-stack MERN Developer specializing in SaaS platforms, streaming systems, multi-tenant apps, and payment integrations. Available for freelance work.",
  keywords:
    "MERN Developer India, Next.js Developer, Freelance Web Developer, Full Stack Developer, React Developer, Node.js Developer, MongoDB Developer, SaaS Developer",
  author: "Dinesh Kumar Sahoo",
  url: "https://dineshkumarsahoo.dev",
  image: "/og-image.png",
};

// ─── PERSONAL INFO ──────────────────────────────────────────
export const PERSONAL = {
  name: "Dinesh Kumar Sahoo",
  role: "Full Stack MERN Developer",
  tagline: "Building scalable SaaS & streaming platforms",
  bio: "I'm a MERN Stack Developer with hands-on experience building multi-tenant SaaS platforms, OTT streaming systems, and real-time applications. I turn complex business requirements into clean, scalable solutions with modern UI/UX.",
  email: "dineshsahoo702@gmail.com",
  phone: "+91 9777969647",
  whatsapp: "919777969647",
  linkedin: "https://www.linkedin.com/in/dinesh-kumar-sahoo-494a80290/",
  github: "https://github.com/diensy",
  location: "India",
  available: true,
  resumeFile: "/Dincesh_kumar_sahoo.pdf",
  image: "/645d2322-5b5a-4a61-930f-856511ea4ea0.jpeg",
};

// ─── NAVIGATION LINKS ───────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── SOCIAL LINKS ───────────────────────────────────────────
export const SOCIAL_LINKS = {
  email: `mailto:${PERSONAL.email}`,
  phone: `tel:${PERSONAL.phone}`,
  whatsapp: `https://wa.me/${PERSONAL.whatsapp}?text=Hi%20Dinesh%2C%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project.`,
  linkedin: PERSONAL.linkedin,
  github: PERSONAL.github,
};

// ─── EXPERIENCE ─────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: "RIXO SYSTEM IT SOLUTIONS",
    role: "Junior Software Developer",
    period: "Aug 2024 – Present",
    location: "India",
    description:
      "Building full-stack MERN applications for real-world clients, integrating complex payment systems, and developing scalable multi-tenant architectures.",
    bullets: [
      "Built full-stack MERN applications for 4 production platforms serving active users",
      "Integrated payment systems using Stripe and Razorpay across multiple projects",
      "Developed scalable admin dashboards with role-based access control for multi-tenant apps",
      "Implemented OTT streaming platform with CMS, subscriptions, and multi-role architecture",
      "Set up automated email workflows using Brevo API and Nodemailer",
    ],
  },
  {
    company: "SLI Company",
    role: "MERN Stack Developer Intern",
    period: "2024",
    location: "India",
    description:
      "Gained hands-on experience in full-stack web development and modern design principles using the MERN stack.",
    bullets: [
      "Learned and implemented modern web design using HTML, CSS, and JavaScript",
      "Built user interfaces and integrated backend REST APIs for seamless data flow",
      "Collaborated on practical projects to understand full-stack architecture",
    ],
  },
  {
    company: "IBM SkillBuild Summer Internship",
    role: "Frontend Developer Intern",
    period: "Jun 2024",
    location: "Remote / India",
    description:
      "Participated in the rigorous IBM SkillBuild program focused on frontend engineering and professional software development.",
    bullets: [
      "Developed responsive web applications adhering to industry best practices",
      "Gained proficiency in core frontend technologies and agile methodologies",
    ],
  },
];

// ─── EDUCATION ──────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    school: "United School of Business Management, Bhubaneswar",
    period: "Sep 2023 – Sep 2025",
    description:
      "Advanced coursework in software engineering, full-stack web development, and database architecture.",
  },
  {
    degree: "Bachelor of Science in Chemistry",
    school: "Mahavidyalaya Parjang, Dhenkanal",
    period: "Jun 2020 – Jul 2023",
    description: "Developed strong analytical thinking and research methodologies.",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Talcher Autonomous College, Talcher",
    period: "2018 – 2020",
    description: "Completed with a focus on Science (Physics, Chemistry, Math).",
  },
  {
    degree: "High School (10th)",
    school: "Roda Panchayt High School, Odisha",
    period: "Graduated: 2018",
    description: "Successfully completed secondary education.",
  },
];

// ─── SKILLS ─────────────────────────────────────────────────
export const SKILLS = {
  Frontend: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Material UI", icon: "Ⓜ️" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Framer Motion", icon: "🎞️" },
  ],
  Backend: [
    { name: "Node.js", icon: "💚" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST API", icon: "🔗" },
    { name: "GraphQL", icon: "🕸️" },
    { name: "JWT Auth", icon: "🔐" },
  ],
  Database: [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Mongoose", icon: "🔷" },
  ],
  Integrations: [
    { name: "Razorpay", icon: "💳" },
    { name: "Stripe", icon: "💠" },
    { name: "Nodemailer", icon: "📧" },
    { name: "Brevo API", icon: "📬" },
  ],
  Tools: [
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Postman", icon: "🟠" },
    { name: "VS Code", icon: "🔵" },
    { name: "Vercel", icon: "▲" },
  ],
  "AI & Extras": [
    { name: "OpenAI API", icon: "🤖" },
    { name: "Claude API", icon: "🧠" },
    { name: "Generative AI", icon: "✨" },
    { name: "WebSockets", icon: "⚡" },
  ],
};

// ─── TECH STRENGTH BARS ─────────────────────────────────────
export const TECH_STRENGTH = [
  { label: "Frontend (React / Next.js)", percentage: 88 },
  { label: "Backend (Node.js / Express)", percentage: 92 },
  { label: "Database (MongoDB / PostgreSQL)", percentage: 82 },
  { label: "API Integrations (Payments / Email)", percentage: 90 },
  { label: "DevOps (Git / Vercel / Deployment)", percentage: 78 },
  { label: "English (Professional Working)", percentage: 85 },
  { label: "Hindi (Native / Bilingual)", percentage: 95 },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "orocast",
    title: "Orocast – OTT Streaming Platform",
    emoji: "🔴",
    color: COLORS.RED,
    shortDesc:
      "Full-stack OTT ecosystem spanning User streaming app, Store (admin CMS), and Admin panel — with subscriptions, live streams, e-commerce, and more.",
    description:
      "Orocast is a production-grade OTT streaming platform built as a three-panel ecosystem: a User-facing streaming app, a Store admin (content CMS), and a master Admin panel. It delivers the complete OTT experience — from adaptive video playback and live streams to subscription billing, e-commerce merch, cast directories, blog systems, and QR-based authentication flows.",
    impact: [
      "Shipped 3 independently deployed panels (User, Store, Admin) serving real paid subscribers",
      "Integrated Stripe payments with QR payment flows, invoice generation (jsPDF), and subscription plans",
      "Built OTT-style catalog with movies, TV shows, seasons/episodes, live streams, and content gating",
      "Delivered full e-commerce merch store: product listing, cart, wishlist, checkout, and order tracking",
      "Implemented QR-based login/signup flows, OTP verification, and password reset authentication",
      "Reduced manual ops via CMS for VOD content, banners, genres, cast metadata, and ad slots",
      "Built multi-panel blog system with grids, filters, sidebars, and rich single-post templates",
    ],
    features: [
      "🎬 OTT catalog: movies, TV, live streams & episodes",
      "🔐 Auth: OTP, QR login/signup, password reset",
      "💳 Stripe + QR payments, invoices & receipts",
      "🛍 Merch store: cart, wishlist, checkout & orders",
      "📋 Cast & crew directory with profile pages",
      "📝 Blog system with filters, tags & rich posts",
      "📺 Personalized watchlists, playlists & favourites",
      "🎟 Subscription plans, billing & plan selection",
      "🎞 Adaptive playback: video.js + Shaka Player",
      "🗂 Content CMS: banners, genres, categories & ads",
      "👥 User mgmt: roles, teams, tickets & contact inbox",
      "📊 Overview dashboard & system settings",
    ],
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "Bootstrap 5",
      "GSAP",
      "Swiper",
      "video.js",
      "Shaka Player",
      "Stripe",
      "jsPDF",
      "Sass",
    ],
    links: [
      { label: "User App", url: "https://oasys.orocast.com/" },
      { label: "Store", url: "https://app.orocast.com/" },
      { label: "Admin", url: "https://admin.orocast.com/" },
    ],
    bgGradient: "from-rose-950/40 to-transparent",
    panels: [
      {
        label: "User App",
        color: "#E63946",
        description: "The end-user OTT streaming app — browse movies, TV shows, live streams, watchlists, playlists, cast pages, blog, merch store, and subscription flows.",
        images: [
          "/Images/Orocast/User/Screenshot_26-3-2026_03335_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03522_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03617_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03631_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03656_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03710_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03726_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03748_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_03822_oasys.orocast.com.jpeg",
          "/Images/Orocast/User/Screenshot_26-3-2026_0396_oasys.orocast.com.jpeg",
        ],
      },
      {
        label: "Store (CMS)",
        color: "#f59e0b",
        description: "The Store admin panel — a comprehensive CMS for managing VOD content, live streams, subscriptions, blog posts, merch, and distribution channels.",
        images: [
          "/Images/Orocast/Store/Screenshot_25-3-2026_233633_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_233659_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_23368_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_233819_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234059_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234118_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234134_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234157_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234212_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234227_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234253_app.orocast.com.jpeg",
          "/Images/Orocast/Store/Screenshot_25-3-2026_234314_app.orocast.com.jpeg",
          "/Images/Orocast/Store/screenshot-1774462211932.png",
        ],
      },
      {
        label: "Admin Panel",
        color: "#8b5cf6",
        description: "The master Admin panel — manages all stores, user accounts, roles & permissions, system settings, theme configuration, and platform-wide oversight.",
        images: [
          "/Images/Orocast/Admin/Screenshot_26-3-2026_0410_admin.orocast.com.jpeg",
          "/Images/Orocast/Admin/Screenshot_26-3-2026_04118_admin.orocast.com.jpeg",
          "/Images/Orocast/Admin/Screenshot_26-3-2026_04137_admin.orocast.com.jpeg",
        ],
      },
    ],
  },
  {
    id: "podixa",
    title: "Podixa – Audiobook & PDF Platform",
    emoji: "🟢",
    color: "#10b981",
    shortDesc:
      "Digital audiobook and PDF reading platform with content management.",
    description:
      "Designed and built a seamless digital reading and listening platform where users can browse, stream audiobooks, and read PDFs through a clean, distraction-free interface. Includes a backend content management system for publishers to upload and organize titles.",
    impact: [
      "Built a unified platform for audiobooks and PDF reading with zero buffering",
      "Delivered a clean, distraction-free reading UI that boosted user engagement",
      "Created a full CMS allowing publishers to self-manage their catalog",
      "Implemented optimized media streaming for smooth audio playback",
    ],
    features: [
      "📖 In-browser PDF reader",
      "🎧 Audiobook streaming player",
      "📂 Publisher content management",
      "🔍 Search and browse catalog",
      "📱 Mobile-first responsive UI",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: [{ label: "Live App", url: "https://www.podixa.com/" }],
    bgGradient: "from-emerald-950/40 to-transparent",
  },
  {
    id: "healistock",
    title: "Healistock – Enterprise Inventory System",
    emoji: "📦",
    color: "#3b82f6",
    shortDesc:
      "Multi-tenant enterprise inventory platform with real-time sync, RBAC, batch tracking, disposal compliance, and predictive analytics.",
    description:
      "Healistock is a production-grade, multi-tenant enterprise inventory management system deployed across two panels — a Tenant app for daily operations and an Admin panel for platform oversight. It delivers real-time stock management, batch tracking, disposal compliance, location-based inventory, and AI-powered predictive analytics with full cloud integration.",
    impact: [
      "Secured with Role-Based Access Control (RBAC + CASL) across Admin, Manager & User roles",
      "Real-time synchronization across all dashboards via Socket.io WebSockets",
      "Integrated AWS S3 for cloud-based asset management and secure file sharing",
      "Multi-format data exports (Excel/PDF) for vital inventory and compliance reports",
      "Automated recurring inventory reports using FullCalendar and Node.js cron jobs",
      "Implemented disposal compliance with is_disposed flags keeping operational views clean",
      "AI-powered insights using OpenAI API for demand forecasting and stock recommendations",
    ],
    features: [
      "🔐 Secure Auth & RBAC (CASL)",
      "⚡ Real-Time Sync (Socket.io)",
      "📊 Interactive Dashboards (ApexCharts)",
      "☁️ Cloud Asset Management (AWS S3)",
      "📦 Stock adjust, add, transfer & pick",
      "🏷 Batch tracking with expiry management",
      "🗑 Disposal compliance with history audit",
      "📍 Location-based inventory control",
      "📊 Analytical reports & Excel/PDF exports",
      "🏢 Multi-tenant isolated architecture",
      "🤖 AI demand forecasting (OpenAI API)",
      "📅 Automated reports (FullCalendar + cron)",
    ],
    tech: [
      "Vue.js 3",
      "Vuetify 3",
      "Pinia",
      "Vue Router",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "AWS S3",
      "Stripe SDK",
      "OpenAI API",
      "ApexCharts",
    ],
    links: [
      { label: "Tenant App", url: "https://inventoryui.icodexa.com/" },
      { label: "Admin Panel", url: "https://inventoryadmin.icodexa.com/" },
    ],
    bgGradient: "from-blue-950/40 to-transparent",
    panels: [
      {
        label: "Tenant App",
        color: "#3b82f6",
        description: "The operational Tenant panel — daily stock management, batch tracking, disposal compliance, location control, and real-time dashboards for warehouse teams.",
        images: [
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232528_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232545_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_23255_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_23261_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232629_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232643_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232655_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232712_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232729_localhost.jpeg",
          "/Images/Inventory/Tenant/Screenshot_25-3-2026_232747_localhost.jpeg",
        ],
      },
      {
        label: "Admin Panel",
        color: "#6366f1",
        description: "The Admin panel — platform-wide tenant management, user accounts, roles/permissions, subscription billing, system settings, and analytics overview.",
        images: [
          "/Images/Inventory/Admin/Screenshot_25-3-2026_233140_inventoryadmin.icodexa.com.jpeg",
          "/Images/Inventory/Admin/Screenshot_25-3-2026_233158_inventoryadmin.icodexa.com.jpeg",
          "/Images/Inventory/Admin/Screenshot_25-3-2026_233219_inventoryadmin.icodexa.com.jpeg",
          "/Images/Inventory/Admin/Screenshot_25-3-2026_233232_inventoryadmin.icodexa.com.jpeg",
          "/Images/Inventory/Admin/Screenshot_25-3-2026_233253_inventoryadmin.icodexa.com.jpeg",
          "/Images/Inventory/Admin/Screenshot_25-3-2026_233313_inventoryadmin.icodexa.com.jpeg",
        ],
      },
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant Booking System",
    emoji: "🟡",
    color: "#eab308",
    shortDesc:
      "Complete restaurant table booking and store management platform.",
    description:
      "Developed a full restaurant management system with two panels — Store (for individual restaurants) and Admin (for platform oversight). Customers can search for restaurants, view availability, and book tables in real time while restaurant owners manage their profile, menu, and reservations.",
    impact: [
      "Built end-to-end booking flow eliminating manual reservation phone calls",
      "Delivered store management panel enabling restaurants to manage tables in real time",
      "Designed clean customer-facing UI for browsing and table reservation",
      "Implemented admin oversight for multi-store management and analytics",
    ],
    features: [
      "🍽 Real-time table booking",
      "🏪 Store management panel",
      "📅 Reservation & availability management",
      "👥 Customer-facing booking flow",
      "📋 Admin multi-store oversight",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "Store Panel", url: "https://restaurantstoreui.icodexa.com/stores" },
      { label: "Admin Panel", url: "https://restaurantadminui.icodexa.com/" },
    ],
    bgGradient: "from-amber-950/40 to-transparent",
  },
  {
    id: "iptv-app",
    title: "IPTV React App",
    emoji: "📺",
    color: "#6366f1", // Indigo 500
    shortDesc:
      "Single-page React 19 + Vite 5 application for browsing and playing IPTV streams with HLS playback.",
    description:
      "A modern IPTV streaming dashboard built with React 19 and Vite 5. It features real-time M3U playlist parsing, HLS video playback (hls.js), protected routes, and a responsive split-view player. The app utilizes IntersectionObserver for progressive loading of thousands of channels and includes debounced search for seamless navigation.",
    impact: [
      "Built a high-performance IPTV player with low-latency HLS streaming and retry recovery",
      "Implemented dynamic M3U parsing from public IPTV-org sources with channel deduping",
      "Engineered a scalable channel list with debounced search and IntersectionObserver for 50-at-a-time loading",
      "Secured the application using JWT-based authentication with role-protected routing",
    ],
    features: [
      "📡 Real-time M3U parsing & sourcing",
      "🎥 Low-latency HLS playback (hls.js)",
      "🔍 Debounced search & filtering",
      "⚡ Progressive channel loading",
      "🔐 Protected routes & Auth (JWT)",
      "📱 Responsive split-view dashboard",
    ],
    tech: ["React 19", "Vite 5", "hls.js", "React Router 7", "IntersectionObserver", "Tailwind CSS"],
    links: [
      { label: "Live App", url: "https://watch.itzserious.tv/" },
    ],
    bgGradient: "from-indigo-950/40 to-transparent",
    panels: [
      {
        label: "App Interface",
        color: "#6366f1",
        description: "The main IPTV dashboard featuring the HLS player, channel sidebar, and authentication flows.",
        images: [
          "/Images/IPTV/Screenshot_26-3-2026_11339_watch.itzserious.tv.jpeg",
          "/Images/IPTV/Screenshot_26-3-2026_1148_watch.itzserious.tv.jpeg",
          "/Images/IPTV/Screenshot_26-3-2026_11618_localhost.jpeg",
        ],
      },
    ],
  },
  {
    id: "kitab-store",
    title: "Kitab Store – Online E-Book Platform",
    emoji: "📖",
    color: "#f59e0b", // Amber 500
    shortDesc:
      "Full-stack MERN application for browsing courses and e-books with secure authentication and protected content.",
    description:
      "Kitab Store is a comprehensive e-learning and e-book platform built with the MERN stack. It features a responsive frontend with Tailwind CSS and DaisyUI, a secure Node.js backend with password hashing, and a centralized authentication state using React Context. The application includes protected routes for premium content and a seamless user experience for browsing and accessing book catalogs.",
    impact: [
      "Developed a full-stack MERN application with a secure multi-role authentication system",
      "Implemented a robust backend with Node.js/Express and MongoDB for high-performance data handling",
      "Designed a premium, responsive UI using Tailwind CSS and DaisyUI with slick carousel integration",
      "Engineered a centralized state management system using React Context for seamless auth persistence",
    ],
    features: [
      "📚 Catalog: browse courses & e-books",
      "🔐 Secure Auth: password hashing (bcrypt)",
      "🛡️ Protected routes for course access",
      "🌓 Responsive UI with Dark/Light modes",
      "🎞️ Smooth sliders & carousels (react-slick)",
      "📩 Real-time notifications (react-hot-toast)",
    ],
    tech: ["React 18", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Context API", "DaisyUI"],
    links: [
      { label: "Local Dev Only", url: "#" },
    ],
    bgGradient: "from-amber-950/40 to-transparent",
    panels: [
      {
        label: "App Interface",
        color: "#f59e0b",
        description: "The main e-book dashboard featuring book listings, authentication flows, and course selections.",
        images: [
          "/Kitab Store/Screenshot_26-3-2026_1282_localhost.jpeg",
          "/Kitab Store/Screenshot_26-3-2026_12817_localhost.jpeg",
          "/Kitab Store/Screenshot_26-3-2026_13053_localhost.jpeg",
        ],
      },
    ],
  },
];

// ─── WHAT I CAN BUILD ────────────────────────────────────────
export const CAPABILITIES = [
  {
    icon: "🏗️",
    title: "SaaS Platforms",
    desc: "Multi-tenant, subscription-based software products built to scale",
  },
  {
    icon: "👥",
    title: "Multi-Tenant Apps",
    desc: "Isolated tenant environments on shared infrastructure with role-based access",
  },
  {
    icon: "💳",
    title: "Payment Systems",
    desc: "Stripe & Razorpay integrations, subscription billing, and invoicing",
  },
  {
    icon: "🖥️",
    title: "Admin Dashboards",
    desc: "Feature-rich control panels with analytics, reports, and management tools",
  },
  {
    icon: "📺",
    title: "Streaming Platforms",
    desc: "Video and audio streaming with CMS, subscriptions, and DRM support",
  },
  {
    icon: "⚡",
    title: "Real-Time Apps",
    desc: "Live data, chat systems, and real-time notifications with WebSockets",
  },
];

// ─── WHY CHOOSE ME ────────────────────────────────────────────
export const WHY_CHOOSE_ME = [
  {
    icon: "🚀",
    title: "Real Production Experience",
    desc: "4+ production apps built and deployed for real clients and active users",
  },
  {
    icon: "💳",
    title: "Payment & SaaS Expertise",
    desc: "Hands-on Stripe, Razorpay integrations, subscriptions, and billing logic",
  },
  {
    icon: "⚡",
    title: "Full-Stack Ownership",
    desc: "From database schema to UI animations — I own the full stack",
  },
  {
    icon: "🎯",
    title: "Fast Delivery",
    desc: "Clean, structured code shipped on schedule with clear communication",
  },
];
