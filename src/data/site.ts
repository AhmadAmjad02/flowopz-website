// All site copy lives here. Update text, prices and links in this file.
// Copy follows the "FlowOpz Complete Website Copy Deck".

export const site = {
  name: "FlowOpz",
  // Live domain: used for canonical URLs, sitemap and social previews
  url: "https://flowopz.com",
  title: "GoHighLevel Expert & GHL Automation Agency | FlowOpz",
  description:
    "GoHighLevel (GHL) setup, snapshots, sub-accounts and workflow automation from $10/hr. FlowOpz builds GHL CRMs, n8n and Make integrations and speed-to-lead systems for agencies and businesses.",
  keywords: [
    "GoHighLevel",
    "GHL automation",
    "GoHighLevel snapshots",
    "GHL sub-account setup",
    "GoHighLevel workflows",
    "HighLevel CRM",
    "n8n",
    "Make",
    "Zapier",
    "Webhooks",
    "Klaviyo",
  ],
  tagline: "High-efficiency GHL architecture and automated backend infrastructure.",
  availability: "Currently accepting select projects • Fast turnaround",
  email: "info@flowopz.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/automations.flowopz/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/112716790/" },
  ],
  // WhatsApp number in international format without + or spaces, e.g. "923001234567"
  whatsapp: "",
  whatsappLabel: "WhatsApp",
  // Calendly (or GHL calendar) link. Used for the contact page embed and footer link.
  calendlyUrl: "",
  // Optional webhook (e.g. GoHighLevel inbound webhook) for the contact form. Empty = opens email app.
  formWebhook: "",
  location: "Monday – Friday · Global coverage",
  rate: "$10/hr",
  // Main call to action used across the site
  cta: { label: "Book a Free Consultation", href: "/contact" },
  offersCta: { label: "View Our Offers & Rates", href: "/pricing" },
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing & Offers", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

/* ---------------- Upwork profile + client reviews ---------------- */
// Copied from the public Upwork profile. Update when new reviews come in.

export const upwork = {
  url: "https://www.upwork.com/freelancers/muhammadu649",
  name: "Muhammad Umar",
  headline: "GoHighLevel (GHL) Expert | GHL Setup & Funnel Builder | GHL Automation",
  badge: "Top Rated",
  jobSuccess: "100%",
  rating: "5.0",
  ratingCount: 7,
  totalJobs: "28",
  totalHours: "1.5K",
  experience: "5+ years",
  reviews: [
    {
      quote: "Great experience working with him! He helped me build and set up my GHL round-robin automation exactly how I needed it. Very knowledgeable, responsive, and got everything working properly. Highly recommend!",
      author: "Sergio A.",
      project: "Operations Manager",
      date: "Oct 2026",
    },
    {
      quote: "Thank you again Muhammad! He helped me on the zoom fix my issue and completely fixed it and made sure it worked properly. Will 10/10 be coming back to him in the near future.",
      author: "Alaiza U.",
      project: "Fix Make.com → Stripe dynamic pricing checkout link for GoHighLevel",
      date: "Sep 2026",
    },
    {
      quote: "Incredible turnaround time! Mohammad fixed an automation issue in 30 minutes that I had been struggling with for four hours. He is a hardworking professional who clearly understands the nuances of GHL webhooks and n8n workflows. Highly recommended for any business looking to streamline their operations.",
      author: "Ahmed N.",
      project: "Connect GHL Webhooks with N8N & Build Weekly Lead Reports",
      date: "Mar 2026",
    },
    {
      quote: "Muhammad was the best that I have personally witnessed on Upwork. Great communicator and always available when I had a question.",
      author: "Muhammad S.",
      project: "GHL Workflow Troubleshooting and Pipeline Creation",
      date: "Mar 2026",
    },
    {
      quote: "Did a Great Job and finished the work with quality.",
      author: "Jim M.",
      project: "n8n Automation Tech",
      date: "May 2026",
    },
    {
      quote: "Muhammad is very skilled in n8n and GHL automation. He builds simple, smart workflows that save time and money. He understands business needs and delivers fast, clean, reliable results. Highly recommended.",
      author: "Ihsan U.",
      project: "n8n & GHL automation",
      date: "Feb 2026",
      source: "Upwork testimonial",
    },
    // Reviews from outside Upwork: add them here with a `source`, e.g.
    // { quote: "...", author: "Jane D.", project: "GHL setup", date: "Jan 2026", source: "Google" },
  ] as { quote: string; author: string; project: string; date: string; source?: string }[],
};

// Client testimonials from outside Upwork (shown after the Upwork reviews)
export const testimonials: { quote: string; author: string; role: string }[] = [
  { quote: "FlowOpz streamlined our entire client onboarding pipeline. Invoicing triggers, CRM pipeline changes, and automated follow-ups now run without a hitch. Incredible execution speed and reliability.", author: "David M.", role: "Operations Lead" },
  { quote: "Our lead conversion increased by over 30% within four weeks.", author: "David Miller", role: "Founder" },
  { quote: "The custom snapshot they built saved our agency dozens of hours per onboarding.", author: "Wen Zhang", role: "Operations Director" },
  { quote: "Fast turnaround, high-converting design, and flawless event tracking.", author: "Marcus Vance", role: "Head of Growth" },
  { quote: "They fixed a broken automation logic that had stalled us for weeks.", author: "Sarah Lindqvist", role: "Co-Founder" },
  { quote: "Eliminated at least 10 hours of manual data entry from my week.", author: "Tariq Qureshi", role: "Principal Consultant" },
];

// Footer "Proof" column (Upwork, directory listings, reviews, etc.)
export const proofLinks = [
  { label: "Upwork", href: upwork.url },
  { label: "Reviews", href: "/#reviews" },
];

/* ---------------- Home ---------------- */

export const home = {
  hero: {
    eyebrow: "GoHighLevel & Workflow Automation Specialists",
    title: "Clean Systems. Flawless Automations.",
    dim: "Scaled Operations.",
    text: "We engineer custom GoHighLevel snapshots and multi-app automations that run your business on autopilot, at an agile, accessible rate.",
    pill: `${upwork.badge} on Upwork · ${upwork.jobSuccess} Job Success`,
    // Demo CRM dashboard shown in the hero card (illustrative numbers)
    card: {
      chip: "FlowOpz CRM",
      status: "LIVE",
      kpiLabel: "New leads this week",
      kpi: "128",
      kpiDelta: "+38%",
      pipeline: [
        { stage: "New", count: 42, pct: 100 },
        { stage: "Contacted", count: 31, pct: 74 },
        { stage: "Booked", count: 18, pct: 43 },
        { stage: "Won", count: 9, pct: 22 },
      ],
      flow: ["Form submitted", "SMS sent in 2s", "Appointment booked"],
      field: "Book a free consultation",
    },
    // Small notification chips floating around the card
    floats: {
      saved: { value: "24/7", label: "systems that never sleep" },
    },
    caption: "Full-stack execution • Transparent hourly tracking • Zero bloated agency overhead.",
  },

  carousel: {
    heading: "Core service highlights",
    giant: ["Flawless automations.", "Scaled operations."],
    // theme: purple | lime | teal | blue | chrome
    cards: [
      { theme: "purple", left: "GoHighLevel", right: "Snapshots", title: "GoHighLevel (GHL) Setup", text: "Turnkey snapshots, sub-account architectures, custom fields, and branded client portals.", href: "/services#ghl" },
      { theme: "lime", left: "Automation", right: "n8n · Make", title: "Workflow & Webhook Automations", text: "Cross-platform data pipelines built using n8n, Make, and native webhooks to eliminate data entry.", href: "/services#automation" },
      { theme: "teal", left: "Email", right: "Klaviyo · CRM", title: "Email & Retention Systems", text: "Strategic drip sequences, list segmentation, and lifecycle automations across Klaviyo and CRM suites.", href: "/services#email" },
      { theme: "blue", left: "Speed-to-lead", right: "< 2 min", title: "True Speed-to-Lead", text: "Automated systems that respond to customer inquiries in seconds, eliminating missed sales opportunities.", href: "/services#automation" },
      { theme: "chrome", left: "Upwork", right: upwork.badge, title: `${upwork.badge}, ${upwork.jobSuccess} Job Success`, text: `${upwork.rating} rating from real Upwork clients.`, href: "/#reviews" },
    ],
  },

  beyond: {
    heading: "Stop Losing Revenue to Fragmented Tools & Manual Tasks.",
    top: "Fragmented tools,",
    bottom: "one clean flow.",
    copy: "You run marketing campaigns, but leads sit in unmonitored inboxes. Your team spends hours copying data between spreadsheets, and software subscriptions pile up without delivering ROI.",
    // Quick metrics bar
    stats: [
      { value: "$10/hr", label: "Flat, transparent base rate" },
      { value: "< 2 min", label: "Automated speed-to-lead setups" },
      { value: "100%", label: "Fully documented client handoffs" },
      { value: "24/7", label: "Systems that work while you sleep" },
    ],
  },

  work: {
    label: "Why choose FlowOpz",
    heading: "Why choose FlowOpz",
    // art: a1 | a2 | a3
    steps: [
      { art: "a1", left: "01   Developer-led", right: "Direct access", title: "Developer-Led Precision.", text: "You work directly with technical builders who understand code, databases, and APIs, not account managers who overpromise.", href: "/about" },
      { art: "a2", left: "02   Cost efficiency", right: "From $10/hr", title: "Radical Cost Efficiency.", text: "Enterprise-level workflows and custom builds starting at just $10/hour, giving agencies and founders high-margin leverage.", href: "/pricing" },
      { art: "a3", left: "03   Documentation", right: "SOPs + video", title: "Comprehensive SOPs.", text: "Every project concludes with clean documentation and video walkthroughs so your team never feels stranded.", href: "/about" },
    ],
    endTitle: "The FlowOpz Fix.",
    endText: "We tie your digital ecosystem together. From unified GoHighLevel CRMs to custom webhooks and n8n pipelines, we ensure every click turns into a tracked, nurtured lead.",
  },

  float: {
    title: "Proof, not promises.",
    sub: `${upwork.badge} on Upwork. ${upwork.jobSuccess} Job Success. ${upwork.rating} rating.`,
    // Labels shown on the floating tiles (in order)
    tiles: ["Workflows", `${upwork.badge} on Upwork`, "GHL Snapshots", "Webhooks", "n8n · Make", `${upwork.jobSuccess} Job Success`],
  },

  proof: {
    kicker: "Proof / authority",
    title: "Built by developers who ship working systems.",
    creds: [
      { title: `${upwork.badge} on Upwork`, tag: "Verified", text: `${upwork.jobSuccess} Job Success and a ${upwork.rating} client rating.` },
      // Hidden for now: uncomment to show again
      // { title: `${upwork.totalJobs} jobs, ${upwork.totalHours} hours`, tag: "Track record", text: `${upwork.experience} helping businesses with GoHighLevel, n8n and Zapier automation.` },
      { title: "Fully documented handoffs", tag: "Approach", text: "Clean SOPs and video walkthroughs on every project." },
    ],
    // Optional badge image placed in /public (e.g. "/badge.webp"). Empty = hidden.
    badge: { src: "", alt: "Certification badge", href: "#" },
    reviewsTitle: "What clients say",
  },

  faqTitle: "Straight answers.",

  // Default closing banner (used on every page unless a page sets its own)
  final: {
    title: "Ready to automate your backend",
    dim: "and scale your operations?",
    note: "Get dedicated technical support starting at $10/hour. Let’s build something durable.",
    primary: { label: "Get Started Today", href: "/contact" },
    secondary: { label: "View Our Offers & Rates", href: "/pricing" },
  },
};

export const faqs = [
  { q: "How much does it cost?", a: "Our flat base rate is $10/hour with transparent tracking and zero lock-in. Need more capacity? A Weekly Sprint is $200 for 20 hours, and Agency Dedicated is $400 for 40 hours. No hidden fees or bloated retainers." },
  { q: "What GoHighLevel and automation work do you do?", a: "GoHighLevel (GHL) setup, snapshots, sub-accounts and client portals, n8n, Make and webhook automations, and email and retention systems in Klaviyo and GHL." },
  { q: "What happens when a project is finished?", a: "It belongs to you. Every project ends with clean documentation, step-by-step SOPs and video walkthroughs, so your team keeps full ownership and confidence." },
  { q: "Who will I be working with?", a: `You work directly with technical builders, led by ${upwork.name}, a ${upwork.badge} GoHighLevel and automation expert on Upwork with ${upwork.jobSuccess} Job Success. No account managers in between.` },
];

/* ---------------- Services ---------------- */

export const services = {
  eyebrow: "End-to-End Solutions",
  title: "Technical Execution Across",
  dim: "CRM, Integrations, and Automations.",
  text: "Pick a single targeted fix or hire us by the hour to build and maintain your entire tech stack.",
  // style: purple | dark
  offers: [
    {
      id: "ghl",
      kicker: "Service 01",
      title: "GoHighLevel (GHL) Architecture & Snapshots",
      objective: "Turn your CRM into an automated sales engine.",
      points: [
        "Industry-specific GHL snapshots",
        "Custom CSS styling for portals and dashboards",
        "Multi-channel sequences (SMS, email, call whispers)",
        "Smart segmentation",
      ],
      style: "purple",
    },
    {
      id: "automation",
      kicker: "Service 02",
      title: "Advanced Integrations & Workflow Automation",
      objective: "Eliminate repetitive tasks with bulletproof automations.",
      points: [
        "Cross-platform data routing (n8n, Make, webhooks)",
        "Automated onboarding, contracts and payments",
        "Multi-channel team notifications",
        "Robust error handling",
      ],
      style: "dark",
    },
    {
      id: "email",
      kicker: "Service 03",
      title: "Email Marketing & Retention Campaigns",
      objective: "Keep your audience engaged and maximize lifetime value.",
      points: [
        "Behavioral drip sequences",
        "Responsive Klaviyo & GHL templates",
        "List hygiene and deliverability audits",
        "Conversion tracking",
      ],
      style: "dark",
    },
  ],
  processTitle: "How does a custom build work?",
  process: [
    "Book a discovery/audit call.",
    "We review your current process and goals.",
    "You receive a clear proposal with scope, estimated hours, and price.",
    "Work starts only after approval.",
  ],
};

/* ---------------- Pricing & Offers ---------------- */

export const pricing = {
  eyebrow: "Straightforward, Accessible Pricing",
  title: "Enterprise-Level Engineering.",
  dim: "Accessible Hourly Rates.",
  text: "Hire dedicated technical expertise for GHL setups, integrations, and automations at a flat $10/hour. No hidden fees or bloated retainers.",
  plans: [
    {
      name: "Hourly On-Demand",
      price: "$10",
      period: "/hr",
      text: "Pay only for the hours you use.",
      points: ["Ad-hoc tasks, tweaks and bug fixes", "Transparent tracking", "Zero lock-in"],
      style: "dark",
    },
    {
      name: "Weekly Sprint",
      price: "$200",
      period: "/week · 20 hrs",
      text: "Dedicated development blocks every week.",
      points: ["Dedicated dev blocks", "Priority queue", "Daily updates", "Full SOPs"],
      style: "purple",
    },
    {
      name: "Agency Dedicated",
      price: "$400",
      period: "/week · 40 hrs",
      text: "Full-time technical leverage for your agency.",
      points: ["Full-time leverage", "Custom snapshot builds", "Client handoffs", "Direct communication"],
      style: "dark",
    },
  ],
  estimatesTitle: "Output estimates at $10/hour",
  estimates: [
    { hours: "2–4 hours", text: "Single webhook connections, workflow tweaks, and quick automation fixes." },
    { hours: "5–10 hours", text: "Multi-step automation workflow (n8n/GHL) or lead nurture sequence." },
    { hours: "15–25 hours", text: "Turnkey GHL sub-account setup with calendars and core pipelines." },
  ],
  faqTitle: "Questions?",
};

/* ---------------- About ---------------- */

export const about = {
  eyebrow: "Behind the Systems",
  title: "We Build the Technical Engines",
  dim: "That Power Modern Businesses.",
  text: "FlowOpz was founded on a simple principle: high-performance systems and reliable automations should be efficient, accessible, and built right the first time.",
  philosophyKicker: "Our philosophy",
  philosophyTitle: "No Bloat. No Black Boxes. Just Working Systems.",
  prose: [
    "Most businesses don't need another expensive, disconnected SaaS tool. They need their existing platforms to communicate and their operational bottlenecks removed.",
    "At FlowOpz, we operate at the intersection of clean CRM architecture and robust backend engineering. Whether we are styling custom CSS for a client portal, wiring multi-step webhook triggers, or configuring a comprehensive CRM snapshot, we focus on durability, performance, and clear documentation.",
  ],
  valuesTitle: "Core values",
  values: [
    { title: "Clean Code & Lean Architecture", text: "We don't believe in duct-taped solutions. We build maintainable workflows and lean systems designed to scale as your business grows." },
    { title: "True Speed-to-Lead", text: "We design automated systems that respond to customer inquiries in seconds, eliminating missed sales opportunities." },
    { title: "Complete Transparency", text: "No hidden setup fees, surprise retainers, or vague project estimates. Our hourly rates and deliverables are open and straightforward." },
    { title: "Empowerment Through Documentation", text: "When we finish a project, it belongs to you. We provide step-by-step SOPs so your team maintains full ownership and confidence." },
  ],
  toolkitTitle: "The FlowOpz toolkit",
  toolkit: [
    { category: "CRM & Platforms", tools: "GoHighLevel (GHL), Sub-Account Snapshots, Client Portals" },
    { category: "Integration & Logic", tools: "n8n, Webhooks, REST APIs, Zapier, Make" },
    { category: "Lifecycle Marketing", tools: "Klaviyo, GHL Automations, Custom Email Templates" },
  ],
  credsTitle: "Credentials",
  creds: [
    { label: `Upwork, ${upwork.badge}`, href: upwork.url, style: "d" },
  ],
  final: {
    title: "Let’s collaborate on your next build",
    dim: "or technical overhaul.",
    note: "Get dedicated technical support starting at $10/hour.",
    primary: { label: "Contact FlowOpz", href: "/contact" },
    secondary: { label: "View Our Offers & Rates", href: "/pricing" },
  },
};

/* ---------------- Contact ---------------- */

export const contact = {
  eyebrow: "Get In Touch",
  title: "Let’s Talk Systems,",
  dim: "Automations, & Growth.",
  text: "Have a project in mind, need an automation audit, or ready to kick off an hourly sprint? Send us a message and we will respond within 1 hour.",
  details: [
    { label: "Email", value: "info@flowopz.com" },
    { label: "Hours", value: "Monday – Friday (Global coverage)" },
    { label: "Response time", value: "Under 1 hour" },
    { label: "Rate", value: "$10 USD/hour" },
  ],
  formTitle: "Tell us about your project",
  serviceOptions: [
    "GoHighLevel (GHL) Architecture & Snapshots",
    "Advanced Integrations & Workflow Automation",
    "Email Marketing & Retention Campaigns",
    "Hourly On-Demand support",
    "Weekly Sprint / Agency Dedicated",
    "Not sure yet",
  ],
  timelinePlaceholder: "e.g. ASAP, within 2 weeks, next month",
};
