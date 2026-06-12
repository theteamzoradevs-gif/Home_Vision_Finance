export const BRAND = "Vision Home Finance";
export const PHONE = "9911396575";
export const PHONE_DISPLAY = `+91 ${PHONE}`;
export const EMAIL = "contact@homevisionfinance.com";
export const CONSULTANT_ROLE = "Home Loan Consultant";
export const ADDRESS = "Delhi NCR, India";
export const HOURS = "Mon–Sat: 10 AM – 7 PM | Sunday: By Appointment";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=28.606924,77.431885";
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.7617314084555!2d77.42931007549983!3d28.60692397567875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzI0LjkiTiA3N8KwMjUnNTQuOCJF!5e0!3m2!1sen!2sin!4v1781093525324!5m2!1sen!2sin";

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
