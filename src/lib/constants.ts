export const BRAND = "Home Vision Finance";
export const PHONE = "9911396575";
export const PHONE_DISPLAY = `+91 ${PHONE}`;
export const EMAIL = "contact@homevisionfinance.com";
export const CONSULTANT_ROLE = "Home Loan Consultant";
export const ADDRESS = "Delhi NCR, India";
export const HOURS = "Mon–Sat: 10 AM – 7 PM | Sunday: By Appointment";

export const WHATSAPP_HOME = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I need help with a home loan")}`;
export const WHATSAPP_ABOUT = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I need help with about details")}`;
export const WHATSAPP_CONTACT = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I would like to inquire about a home loan")}`;

export const SOCIAL_INSTAGRAM = "#";
export const SOCIAL_LINKEDIN = "#";
export const SOCIAL_YOUTUBE = "#";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/emi-calculator", label: "EMI Calculator" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICES = [
  "Home Loan",
  "Balance Transfer",
  "Loan Against Property",
  "Construction Loan",
  "Plot Loan",
  "Business Loan",
] as const;

export const STATS = [
  { value: "1000+", label: "Happy Customers" },
  { value: "₹500 Cr+", label: "Loans Facilitated" },
  { value: "4.8/5", label: "Customer Rating" },
  { value: "24–48 hrs", label: "Average Approval Time" },
] as const;
