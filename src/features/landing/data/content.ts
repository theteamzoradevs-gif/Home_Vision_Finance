export const BANKS = [
  { name: "SBI", full: "State Bank of India", color: "#1a4f9e", priority: true },
  { name: "HDFC Bank", full: "HDFC Bank Ltd.", color: "#004c8f", priority: false },
  { name: "ICICI Bank", full: "ICICI Bank Ltd.", color: "#f37021", priority: false },
  { name: "PNB", full: "Punjab National Bank", color: "#b71c1c", priority: false },
  { name: "Bank of Baroda", full: "Bank of Baroda", color: "#f26522", priority: false },
] as const;

export const USPS = [
  {
    title: "₹0 Processing Fees",
    description:
      "No hidden charges. Save thousands on loan processing — we handle it completely free.",
    highlight: true,
  },
  {
    title: "24–48 Hour Approval",
    description:
      "Fast-track your loan file. Get eligibility confirmed within 1–2 working days.",
    highlight: false,
  },
  {
    title: "SBI Authorised Partner",
    description:
      "Direct channel partner of State Bank of India with priority processing and best rates.",
    highlight: false,
  },
  {
    title: "Support Till Disbursement",
    description:
      "Full support from first call to final disbursement — we stay with you throughout.",
    highlight: false,
  },
  {
    title: "Builder & Broker Support",
    description:
      "Special coordination for real estate professionals with dedicated file handling.",
    highlight: false,
  },
  {
    title: "Regular Status Updates",
    description:
      "Proactive updates at every stage — no chasing banks or guessing file status.",
    highlight: false,
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Fast File Login",
    description:
      "Your loan file gets logged in within 24–48 hours of document submission.",
  },
  {
    title: "Smooth Coordination",
    description:
      "End-to-end coordination between you, the bank, and the builder.",
  },
  {
    title: "Regular Updates",
    description:
      "Track your loan status at every stage with proactive communication.",
  },
  {
    title: "Support Till Disbursement",
    description:
      "Full support from application to final disbursement into your account.",
  },
  {
    title: "Builder & Broker Assistance",
    description:
      "Special support for real estate professionals with fast processing.",
  },
  {
    title: "Multi-Bank Access",
    description:
      "Compare rates across SBI, HDFC, ICICI, PNB & Bank of Baroda.",
  },
] as const;

export const PROCESS_STEPS = [
  { step: "1", title: "Share Your Details", description: "Fill the quick form or call/WhatsApp our expert." },
  { step: "2", title: "Eligibility Check", description: "We assess your profile and match the best bank offer." },
  { step: "3", title: "Submit Documents", description: "Upload basic documents — we handle bank coordination." },
  { step: "4", title: "Loan Disbursement", description: "Approved and disbursed — move into your dream home." },
] as const;

export const REVIEWS = [
  {
    name: "Rajesh Sharma",
    city: "Delhi",
    text: "Got my SBI home loan approved in just 3 days. Zero processing fees was a huge plus.",
    rating: 5,
  },
  {
    name: "Priya Gupta",
    city: "Noida",
    text: "Transferred my loan and saved ₹45,000 per year on EMI. Completely hassle-free.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    city: "Gurgaon",
    text: "As a builder, I've referred 20+ clients. Fast coordination and great support.",
    rating: 5,
  },
] as const;

export const DOCUMENTS = [
  "PAN Card",
  "Aadhaar Card",
  "Income Proof (Salary Slips / ITR)",
  "Bank Statements (Last 6 Months)",
  "Property Papers / Agreement",
  "Passport Size Photos",
] as const;

export const BLOG_POSTS = [
  {
    slug: "sbi-home-loan-rates-2026",
    title: "SBI Home Loan Interest Rates 2026 — Complete Guide",
    tag: "Interest Rates",
    date: "Jun 2026",
    readTime: "5 min read",
    featured: true,
    excerpt:
      "Everything you need to know about SBI home loan rates, eligibility, and how to get the best deal.",
  },
  {
    slug: "balance-transfer-guide",
    title: "Home Loan Balance Transfer: When & Why You Should Do It",
    tag: "Balance Transfer",
    date: "May 2026",
    readTime: "6 min read",
    featured: false,
    excerpt:
      "Learn when balance transfer makes financial sense and how much you can save on EMI.",
  },
  {
    slug: "documents-checklist",
    title: "Documents Checklist for Home Loan Application in India",
    tag: "Guide",
    date: "May 2026",
    readTime: "4 min read",
    featured: false,
    excerpt:
      "A complete checklist to prepare your documents for faster loan approval.",
  },
  {
    slug: "emi-planning-tips",
    title: "5 EMI Planning Tips Before You Buy Your Home",
    tag: "EMI",
    date: "Apr 2026",
    readTime: "5 min read",
    featured: false,
    excerpt:
      "Smart strategies to plan your EMI and avoid financial stress after purchase.",
  },
] as const;

export const BLOG_CATEGORIES = ["All", "Interest Rates", "Balance Transfer", "Guide", "EMI"] as const;
