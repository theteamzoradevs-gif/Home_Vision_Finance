export const BANKS = [
  { 
    name: "SBI", 
    full: "State Bank of India", 
    color: "#1a4f9e", 
    priority: true, 
    imageUrl: "https://imgs.search.brave.com/oVAMs0BnPVMu49_02ZkxNK1Jlyr5cfmz7uxL4g-Yl14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3N0YXRl/LWJhbmstb2YtaW5k/aWE0OTg4LmxvZ293/aWsuY29tLndlYnA" 
  },
  { 
    name: "HDFC Bank", 
    full: "HDFC Bank Ltd.", 
    color: "#004c8f", 
    priority: false, 
    imageUrl: "https://imgs.search.brave.com/3c9UOissBcJ5OtR1ag3di_wa6WeqppVSvpfRHnaxqXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FlL2M3/LzM2L2FlYzczNjdl/ZWQ1N2JhOGNmOGU3/OGRkYTQ1N2NlNGUz/LmpwZw" 
  },
  { 
    name: "Central Bank Of India", 
    full: "Central Bank Of India", 
    color: "#f37021", 
    priority: false, 
    imageUrl: "https://imgs.search.brave.com/LG3X5TD8P6j1sL5Vq8sm5NiIfQ2-wJtaPSEvCPDHLuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI0LzEvY2VudHJh/bC1iYW5rLW9mLWlu/ZGlhLTE5MTEtbG9n/by1wbmdfc2Vla2xv/Z28tMjQ4NTI1LnBu/Zw" 
  },
  { 
    name: "PNB", 
    full: "Punjab National Bank", 
    color: "#b71c1c", 
    priority: false, 
    imageUrl: "https://imgs.search.brave.com/-FNQFzuUunF3_ag-1UPlySsHsQToZD9xTNcMDtvJNTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIwLzE5/MC83MTIvbm9uXzJ4/L3B1bmphYi1uYXRp/b25hbC1iYW5rLXBu/Yi1iYW5rLWxvZ28t/ZnJlZS1mcmVlLXZl/Y3Rvci5qcGc" 
  },
  { 
    name: "Bank of Baroda", 
    full: "Bank of Baroda", 
    color: "#f26522", 
    priority: false, 
    imageUrl: "https://imgs.search.brave.com/2xNzHpk5CkwWItVmg45c-EOL8bHSv9Ajw9PLyVlPMEM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE3Lzg3/LzVjLzE3ODc1YzBk/NTZkNjk4M2IxMzY4/MmJlZjE3NDY0ZDIy/LmpwZw" 
  },
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

export const WHY_CHOOSE_ITEMS = [
  {
    value: "01",
    label: "Fast File Login",
    description: "Your loan file gets logged in within 24–48 hours of document submission.",
  },
  {
    value: "02",
    label: "Smooth Coordination",
    description: "End-to-end coordination between you, the bank, and the builder.",
  },
  {
    value: "03",
    label: "Regular Updates",
    description: "Track your loan status at every stage with proactive communication.",
  },
  {
    value: "04",
    label: "Support Till Disbursement",
    description: "Full support from application to final disbursement into your account.",
  },
  {
    value: "05",
    label: "Builder & Broker Assistance",
    description: "Special support for real estate professionals with fast processing.",
  },
  {
    value: "06",
    label: "Multi-Bank Access",
    description: "Compare rates across SBI, HDFC, ICICI, PNB & Bank of Baroda.",
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
