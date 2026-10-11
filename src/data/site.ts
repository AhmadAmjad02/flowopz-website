// All site copy lives here. Update text, prices and links in this file.
// Placeholders such as $XX / XX+ / "#" are waiting for real Flowopz copy.

export const site = {
  name: "Flowopz",
  title: "Flowopz | Clean CRM & Automation",
  description:
    "Flowopz sets up clean CRM systems and automations, with real support when you get stuck. Book a discovery call to get started.",
  tagline: "Clean CRM. Real help. Automation that ships.",
  email: "info.flowopz@gmail.com",
  // WhatsApp number in international format without + or spaces, e.g. "923001234567"
  whatsapp: "",
  whatsappLabel: "WhatsApp",
  // Calendly (or GHL calendar) link. Used for the contact page embed and footer link.
  calendlyUrl: "",
  // Optional webhook (e.g. GoHighLevel inbound webhook) for the contact form. Empty = opens email app.
  formWebhook: "",
  location: "Working worldwide",
  // Main call to action used across the site
  cta: { label: "Book Discovery Call", href: "/contact" },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Get Started", href: "/get-started" },
  { label: "About", href: "/about" },
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
  ],
};

// Footer "Proof" column (Upwork, directory listings, reviews, etc.)
export const proofLinks = [
  { label: "Upwork", href: upwork.url },
  { label: "Reviews", href: "/#reviews" },
];

/* ---------------- Home ---------------- */

export const home = {
  hero: {
    title: "Get your CRM set up and running for $XX.",
    dim: "Includes X hours of support.",
    text: "Flowopz builds clean CRM systems and automations for growing businesses. Start with a working setup, add monthly support when you're stuck, or get a custom build after a proper audit.",
    secondary: { label: "See how support works", href: "/services#support" },
    eyebrow: "GoHighLevel · n8n · AI Automation",
    pill: `${upwork.badge} on Upwork · ${upwork.jobSuccess} Job Success`,
    // Demo CRM dashboard shown in the hero card (illustrative numbers)
    card: {
      chip: "Flowopz CRM",
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
      field: "Claim your CRM setup",
    },
    // Small notification chips floating around the card
    floats: {
      lead: { title: "New lead captured", sub: "Assigned to pipeline · 2s ago" },
      saved: { value: "20+ hrs", label: "saved per week" },
    },
    caption: "Book a discovery call, get your setup, and use your included support hours.",
  },

  carousel: {
    heading: "Clean CRM that ships. Three ways to work together.",
    giant: ["Clean CRM that ships.", "Real help."],
    // theme: purple | lime | teal | blue | chrome
    cards: [
      { theme: "purple", left: "Start here", right: "crm.setup", title: "Your CRM set up for $XX", text: "Includes X hours of support.", href: "/get-started" },
      { theme: "lime", left: "Support", right: "$XXX/month", title: "Expert help when you're stuck", text: "Book a call whenever something doesn't work.", href: "/services#support" },
      { theme: "teal", left: "Custom build", right: "audit + proposal", title: "Built around your business", text: "Audit first. Clear scope, hours and price.", href: "/services#custom" },
      { theme: "blue", left: "Upwork", right: upwork.badge, title: `${upwork.badge}, ${upwork.jobSuccess} Job Success`, text: `${upwork.rating} rating from real Upwork clients.`, href: upwork.url },
      { theme: "chrome", left: "Track record", right: `${upwork.totalJobs} jobs`, title: `${upwork.totalHours} hours on Upwork`, text: "Real client systems, shipped.", href: "/#reviews" },
    ],
  },

  beyond: {
    heading: "Tools scattered, one clean CRM.",
    top: "Tools scattered,",
    bottom: "one clean CRM.",
    copy: "Most businesses try a CRM and either get stuck or never fully use it. Multiple tools, missed follow-ups and unclear systems waste time. You don't need another expensive package. You need a clean CRM and the right amount of help.",
    stats: [
      { value: "$XX", label: "Setup" },
      { value: "X hrs", label: "Support included" },
      { value: "$XXX/mo", label: "Ongoing support" },
      { value: upwork.jobSuccess, label: "Job Success on Upwork" },
    ],
  },

  work: {
    label: "How it works",
    heading: "How it works in three steps",
    // art: a1 (purple) | a2 (teal) | a3 (orange)
    steps: [
      { art: "a1", left: "01   Discovery call", right: "$XX", title: "Book a call. Get set up.", text: "Get your CRM set up with X hours of support included.", href: "/contact" },
      { art: "a2", left: "02   Support", right: "$XXX/mo", title: "Use it, or get expert help.", text: "Use it yourself, or book ongoing support when you need guidance.", href: "/services#support" },
      { art: "a3", left: "03   Custom build", right: "Audit first", title: "Want us to build it?", text: "We audit first, then send a clear custom proposal. Work starts after you approve.", href: "/services#custom" },
    ],
    endTitle: "Start with a clean CRM.",
  },

  float: {
    title: "Proof, not promises.",
    sub: `${upwork.badge} on Upwork. ${upwork.jobSuccess} Job Success. ${upwork.rating} rating.`,
    // Labels shown on the floating tiles (in order)
    tiles: ["Workflows", `${upwork.badge} on Upwork`, "Pipelines", "Calendars", "Forms", `${upwork.jobSuccess} Job Success`],
  },

  proof: {
    kicker: "Proof / authority",
    title: "Built by a team that ships real CRMs.",
    creds: [
      { title: `${upwork.badge} on Upwork`, tag: "Verified", text: `${upwork.jobSuccess} Job Success and a ${upwork.rating} client rating.` },
      { title: `${upwork.totalJobs} jobs, ${upwork.totalHours} hours`, tag: "Track record", text: `${upwork.experience} helping businesses with GoHighLevel, n8n and Zapier automation.` },
      { title: "Practical, usable setups", tag: "Approach", text: "What gets used beats what looks impressive." },
    ],
    // Optional badge image placed in /public (e.g. "/badge.webp"). Empty = hidden.
    badge: { src: "", alt: "Certification badge", href: "#" },
    reviewsTitle: "What clients say on Upwork",
  },

  faqTitle: "Straight answers.",

  final: {
    title: "Ready to start",
    dim: "with a clean CRM?",
    note: "Setup is paid on the discovery call. Includes X hours of support.",
    secondary: { label: "See services", href: "/services" },
  },
};

export const faqs = [
  { q: "How much does the CRM setup cost?", a: "The setup is $XX and includes X hours of support. You pay on your discovery call and get access right away." },
  { q: "What does $XXX/month support include?", a: "You book calls when you need help. We explain the best and easiest way to set up or fix something in your CRM. It is guidance and support, not a full done-for-you build." },
  { q: "How does a custom build work?", a: "We start with an audit call, understand your needs, then send a proposal with estimated hours and price. Work starts only after you approve." },
  { q: "Who will I be working with?", a: `You work directly with ${upwork.name}, a ${upwork.badge} GoHighLevel and automation expert on Upwork with ${upwork.jobSuccess} Job Success.` },
];

/* ---------------- Services ---------------- */

export const services = {
  title: "Two simple ways",
  dim: "to work with us.",
  text: "Start with the $XX setup (includes X hours of support), then choose ongoing support or a custom build.",
  offers: [
    {
      id: "support",
      kicker: "Monthly support",
      title: "Support",
      price: "$XXX",
      period: "/month",
      text: "Best if you want to build or manage your own account but need expert help when you get stuck.",
      points: [
        "Book calls when needed",
        "Clear explanations of the cleanest way to do something",
        "Help with workflows, forms, calendars, pipelines or basic issues",
      ],
      cta: "Book Discovery Call",
      style: "purple",
    },
    {
      id: "custom",
      kicker: "Custom build",
      title: "Audit + Proposal",
      price: "Priced to fit",
      period: "",
      text: "Best if you want the system reviewed and built for you. No fixed packages. Pricing matches the actual work.",
      points: [
        "Audit of your current process and goals",
        "Scope, estimated hours and price in writing",
        "Work starts only after approval",
      ],
      cta: "Request a Custom Audit",
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

/* ---------------- Get started (entry offer) ---------------- */

export const getStarted = {
  title: "Get your CRM set up",
  dim: "for $XX.",
  text: "Includes X hours of support. Start with a clean CRM, then choose ongoing support or a custom build if you need more.",
  whatTitle: "What do you get for $XX?",
  what: [
    "Your own CRM account, set up for $XX.",
    "X hours of support included.",
    "Basic access so you can start using CRM, calendars, forms, and pipelines.",
    "Follow-up that explains when ongoing support or custom work makes sense.",
  ],
  howTitle: "How do you get it?",
  how: [
    "Book a discovery call.",
    "Share a few details about your business.",
    "Pay $XX on the call and receive access plus X hours of support.",
  ],
  faqTitle: "Questions?",
};

/* ---------------- About ---------------- */

export const about = {
  title: "CRM and automation experts",
  dim: "with real client experience.",
  text: "XX+ projects delivered helping businesses set up clean, usable systems.",
  prose: [
    "Flowopz helps businesses set up and improve their CRM and automation systems. We've seen what gets used and what gets abandoned.",
    "Most businesses don't need a massive package. They need a clean CRM and the right level of help.",
  ],
  focusTitle: "What we focus on",
  focus: [
    "Giving businesses a working CRM setup for $XX, with X hours of support included.",
    "Simple, affordable ongoing support at $XXX/month.",
    "Custom builds only after a proper audit.",
  ],
  credsTitle: "Credentials",
  creds: [
    { label: "Your certification", href: "#", style: "d" },
    { label: `Upwork, ${upwork.badge}`, href: upwork.url, style: "o" },
  ],
};

/* ---------------- Contact ---------------- */

export const contact = {
  title: "Book a",
  dim: "discovery call.",
  expect: [
    "A short call, 15–30 minutes.",
    "We understand your current setup and goals.",
    "You pay $XX on the call and get your setup, which includes X hours of support.",
    "A clear next step: self-serve, $XXX/month support, or a custom proposal.",
  ],
  formTitle: "Prefer to send details?",
  businessPlaceholder: "e.g. Real estate, coaching, agency",
};
