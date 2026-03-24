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
    description: "",
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
      "Full OTT platform with CMS, multi-role access, and payment integration.",
    description:
      "Built a complete OTT streaming system with three independently deployed panels — Admin, Store, and User — each with distinct roles and capabilities. The platform supports live media management, content scheduling, subscription billing, and a full support ticketing system.",
    impact: [
      "Built OTT platform with 3 panels (Admin, Store, User) serving real subscribers",
      "Integrated Razorpay & Stripe enabling real payment collection and subscriptions",
      "Reduced manual content handling via a self-serve CMS with banner & media management",
      "Designed scalable multi-role architecture with JWT-based access control",
      "Implemented automated email system for subscription confirmations and support",
    ],
    features: [
      "🔐 Role-based access (Admin / Store / User)",
      "🎬 Video streaming with adaptive playback",
      "💳 Razorpay + Stripe payment gateway",
      "📩 Automated email system (Brevo)",
      "🎟 Support ticketing system",
      "📺 Banner & content CMS",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Razorpay", "Stripe", "Brevo"],
    links: [
      { label: "Store", url: "https://app.orocast.com/" },
      { label: "User App", url: "https://vmnstream.com/" },
      { label: "Admin", url: "https://admin.orocast.com/" },
    ],
    bgGradient: "from-rose-950/40 to-transparent",
  },
  {
    id: "podixa",
    title: "Podixa – Audiobook & PDF Platform",
    emoji: "🟢",
    color: "#10b981", // Emerald 500
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
    title: "Healistock – Inventory Management System",
    emoji: "🔵",
    color: "#3b82f6", // Blue 500
    shortDesc:
      "Multi-tenant inventory system with batch tracking and detailed reporting.",
    description:
      "Built a multi-tenant inventory management platform for scalable business operations. Each tenant operates their own isolated environment while sharing the same core infrastructure. The system tracks stock, batches, locations, disposal, and generates analytical reports.",
    impact: [
      "Built multi-tenant inventory system reducing manual stock tracking by large margin",
      "Implemented batch tracking system for full product lifecycle visibility",
      "Added location-based stock tracking enabling warehouse-level inventory control",
      "Built automated disposal and expiry reporting for compliance needs",
      "Designed scalable multi-tenant architecture with tenant-isolated data",
    ],
    features: [
      "📦 Real-time stock management",
      "🏷 Batch tracking system",
      "📍 Location-based inventory",
      "📊 Analytical reports & exports",
      "🗑 Disposal & expiry tracking",
      "🏢 Multi-tenant architecture",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "Tenant App", url: "https://inventoryui.icodexa.com/" },
      { label: "Admin Panel", url: "https://inventoryadmin.icodexa.com/" },
    ],
    bgGradient: "from-blue-950/40 to-transparent",
  },
  {
    id: "restaurant",
    title: "Restaurant Booking System",
    emoji: "🟡",
    color: "#eab308", // Yellow 500
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
