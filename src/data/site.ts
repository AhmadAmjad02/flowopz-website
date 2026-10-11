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

// Footer "Proof" column (Upwork, directory listings, reviews, etc.)
export const proofLinks = [
  { label: "Upwork", href: "#" },
  { label: "Reviews", href: "#" },
];

/* ---------------- Home ---------------- */

export const home = {
  hero: {
    title: "Get your CRM set up and running for $XX.",
    dim: "Includes X hours of support.",
    text: "Flowopz builds clean CRM systems and automations for growing businesses. Start with a working setup, add monthly support when you're stuck, or get a custom build after a proper audit.",
    secondary: { label: "See how support works", href: "/services#support" },
    pill: "Certified CRM experts · XX+ projects delivered",
    card: {
      chip: "Flowopz",
      status: "READY",
      field: "Claim your CRM setup",
      title: "Access granted",
      sub: "X hours of support included",
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
      { theme: "blue", left: "Certified", right: "Credential", title: "Your certification here", text: "Short proof line goes here.", href: "#" },
      { theme: "chrome", left: "Track record", right: "XX+", title: "XX+ projects delivered", text: "Real client systems, shipped.", href: "#" },
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
      { value: "XX+", label: "Projects delivered" },
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
    sub: "Certified CRM experts. XX+ projects delivered.",
    // Labels shown on the floating tiles (in order)
    tiles: ["Workflows", "Certified experts", "Pipelines", "Calendars", "Forms", "XX+ projects"],
  },

  proof: {
    kicker: "Proof / authority",
    title: "Built by a team that ships real CRMs.",
    creds: [
      { title: "Your certification", tag: "Verified", text: "Where it is listed or verified." },
      { title: "XX+ projects delivered", tag: "Track record", text: "Helping businesses with systems and automation." },
      { title: "Practical, usable setups", tag: "Approach", text: "What gets used beats what looks impressive." },
    ],
    // Optional badge image placed in /public (e.g. "/badge.webp"). Empty = hidden.
    badge: { src: "", alt: "Certification badge", href: "#" },
    videos: [
      { title: "Client video", text: "Testimonial coming soon" },
      { title: "Client video", text: "Testimonial coming soon" },
      { title: "Client video", text: "Testimonial coming soon" },
    ],
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
  { q: "Who will I be working with?", a: "You work directly with the Flowopz team." },
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
    { label: "Upwork, XX+ projects", href: "#", style: "o" },
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
