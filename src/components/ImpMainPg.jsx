"use client";
import { useState, useEffect, useRef } from "react";

/* ============================================================
   HOME VISION FINANCE — HIGH-CONVERTING HOME LOAN LANDING PAGE
   ============================================================
   Next.js Migration Notes:
   - Split sections into /components (Hero, LeadForm, LoanTypes, EMI, etc.)
   - Pages: /, /about, /contact, /blogs, /emi-calculator
   - Replace <a href="#"> with <Link href="/">
   - Form submissions → /api/leads (backend by devs)
   - Blog → dynamic /blogs/[slug] with CMS
   - Add next/image, metadata API for SEO
   ============================================================ */

const PHONE = "9911396575";
const WA = `https://wa.me/91${PHONE}?text=Hi%2C%20I%20need%20help%20with%20a%20home%20loan`;
const BRAND = "Home Vision Finance";

// ─── CUSTOM SVG LOGO ───
const Logo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#logoGrad)" />
    <path d="M24 10L10 22h4v14h8v-8h4v8h8V22h4L24 10z" fill="white" fillOpacity="0.95"/>
    <path d="M20 28h8v8h-8z" fill="url(#logoGrad2)" fillOpacity="0.4"/>
    <circle cx="24" cy="20" r="3" fill="white" fillOpacity="0.6"/>
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
        <stop stopColor="#1a4f9e"/>
        <stop offset="1" stopColor="#0f2f5e"/>
      </linearGradient>
      <linearGradient id="logoGrad2" x1="20" y1="28" x2="28" y2="36">
        <stop stopColor="#22c55e"/>
        <stop offset="1" stopColor="#16a34a"/>
      </linearGradient>
    </defs>
  </svg>
);

const LogoSmall = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="url(#ls)"/>
    <path d="M24 10L10 22h4v14h8v-8h4v8h8V22h4L24 10z" fill="white" fillOpacity="0.95"/>
    <defs><linearGradient id="ls" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#1a4f9e"/><stop offset="1" stopColor="#0f2f5e"/></linearGradient></defs>
  </svg>
);

// ─── ICONS ───
const I = {
  phone: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
  wa: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  check: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>,
  arrow: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>,
  home: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>,
  shield: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
  clock: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  users: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>,
  doc: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>,
  star: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  building: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3 4.5h.008v.008H18v-.008zm0 3h.008v.008H18v-.008zm0 3h.008v.008H18v-.008z"/></svg>,
  transfer: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>,
  menu: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>,
  close: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>,
  percent: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="16" r="2.5"/><path d="M19 5L5 19"/></svg>,
  rupee: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 8H9m6 4H9m3 4l-3 4m0-16h6a2 2 0 010 4H9"/></svg>,
  zap: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
  handshake: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"/></svg>,
  fileText: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>,
  target: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
};

// ─── DATA ───
const BANKS = [
  { name: "SBI", full: "State Bank of India", color: "#1a4f9e", priority: true },
  { name: "HDFC Bank", full: "HDFC Bank Ltd.", color: "#004c8f" },
  { name: "ICICI Bank", full: "ICICI Bank Ltd.", color: "#f37021" },
  { name: "PNB", full: "Punjab National Bank", color: "#b71c1c" },
  { name: "Bank of Baroda", full: "Bank of Baroda", color: "#f26522" },
];

const USPS = [
  { icon: I.rupee, title: "₹0 Processing Fees", desc: "No hidden charges. Save thousands on your loan processing — we handle it completely free.", highlight: true },
  { icon: I.zap, title: "24–48 Hour Approval", desc: "Fast-track your loan file. Get eligibility confirmed and approval within 1–2 working days." },
  { icon: I.shield, title: "SBI Authorised Partner", desc: "Direct channel partner of State Bank of India. Priority processing and best-in-class rates." },
  { icon: I.clock, title: "Support Till Disbursement", desc: "We don't disappear after sanction. Full support from first call to final disbursement." },
  { icon: I.users, title: "Builder & Broker Support", desc: "Special coordination for real estate professionals. Fast file movement and dedicated assistance." },
  { icon: I.target, title: "Regular Status Updates", desc: "No chasing required. Get proactive updates at every stage of your loan journey." },
];

const LOAN_TYPES = [
  { title: "Home Purchase Loan", desc: "Buy your dream home — flat, villa, or independent house with the best rates from SBI and other top banks.", icon: I.home },
  { title: "Resale Property Loan", desc: "Planning to buy a resale property? We handle complete documentation and smooth bank coordination.", icon: I.building },
  { title: "Balance Transfer", desc: "Transfer your existing home loan to a lower interest rate. Save lakhs over the remaining tenure.", icon: I.transfer },
  { title: "Loan Against Property", desc: "Unlock the value of your property. Get funds for business, education, or any personal need.", icon: I.rupee },
  { title: "Plot Loan", desc: "Buy a residential plot with easy financing and flexible repayment options up to 15 years.", icon: I.doc },
  { title: "Construction Loan", desc: "Building your own home? Get stage-wise disbursement linked to construction milestones.", icon: I.building },
  { title: "Top-Up Loan", desc: "Need extra funds on your existing home loan? Get a top-up at competitive rates instantly.", icon: I.zap },
];

const DOCS = ["PAN Card", "Aadhaar Card", "Income Proof (Salary Slips / ITR)", "Bank Statements (Last 6 Months)", "Property Papers / Agreement", "Passport Size Photos"];

const REVIEWS = [
  { name: "Rajesh Sharma", city: "Delhi", text: "Got my SBI home loan approved in just 3 days. Zero processing fees was a huge plus. Abhishek and team handled everything smoothly.", rating: 5 },
  { name: "Priya Gupta", city: "Noida", text: "Transferred my loan from a private bank and saved ₹45,000 per year on EMI. The entire process was completely hassle-free.", rating: 5 },
  { name: "Amit Verma", city: "Gurgaon", text: "As a builder, I've referred over 20 clients to Home Vision Finance. Fast coordination, zero delays, and great professional support.", rating: 5 },
];

// ─── STYLES ───
const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --navy: #0B1D35;
  --navy-l: #122744;
  --blue: #1a4f9e;
  --blue-l: #2563eb;
  --blue-pale: #eaf1fc;
  --sbi: #1a4f9e;
  --green: #16a34a;
  --green-l: #22c55e;
  --green-pale: #f0fdf4;
  --orange: #f59e0b;
  --red-badge: #dc2626;
  --white: #ffffff;
  --g50: #f8fafc; --g100: #f1f5f9; --g200: #e2e8f0; --g300: #cbd5e1;
  --g400: #94a3b8; --g500: #64748b; --g600: #475569; --g700: #334155; --g800: #1e293b;
  --r: 12px; --rl: 16px; --rxl: 20px;
  --sh: 0 4px 16px rgba(11,29,53,0.08);
  --shl: 0 12px 40px rgba(11,29,53,0.12);
  --shxl: 0 20px 60px rgba(11,29,53,0.16);
  --hd: 'Plus Jakarta Sans', sans-serif;
  --bd: 'DM Sans', sans-serif;
  --mw: 1200px;
  --tr: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
*{margin:0;padding:0;box-sizing:border-box}
body,html{font-family:var(--bd);color:var(--g800);background:var(--white);scroll-behavior:smooth;-webkit-font-smoothing:antialiased}

/* ── NAV ── */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,0.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--g200);transition:var(--tr)}
.nav.scrolled{box-shadow:var(--sh)}
.nav-in{max-width:var(--mw);margin:0 auto;padding:0 24px;height:72px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;font-family:var(--hd);font-weight:700;font-size:18px;color:var(--navy)}
.nav-logo span{color:var(--blue)}
.nav-links{display:flex;align-items:center;gap:28px;list-style:none}
.nav-links a{text-decoration:none;color:var(--g600);font-weight:500;font-size:14px;transition:var(--tr);position:relative;padding:4px 0}
.nav-links a:hover,.nav-links a.active{color:var(--blue)}
.nav-cta{display:flex;align-items:center;gap:10px}
.nav-ph{display:flex;align-items:center;gap:6px;color:var(--blue);font-weight:600;font-size:13px;text-decoration:none;background:var(--blue-pale);padding:8px 14px;border-radius:100px;transition:var(--tr)}
.nav-ph:hover{background:var(--blue);color:white}
.mmb{display:none;background:none;border:none;cursor:pointer;color:var(--navy);padding:4px}

/* ── BUTTONS ── */
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:var(--r);font-family:var(--bd);font-weight:600;font-size:15px;cursor:pointer;border:none;transition:var(--tr);text-decoration:none;white-space:nowrap}
.btn-p{background:var(--blue);color:white;box-shadow:0 4px 14px rgba(26,79,158,0.3)}
.btn-p:hover{background:var(--blue-l);box-shadow:0 6px 20px rgba(26,79,158,0.4);transform:translateY(-2px)}
.btn-g{background:var(--green);color:white;box-shadow:0 4px 14px rgba(22,163,74,0.3)}
.btn-g:hover{background:var(--green-l);transform:translateY(-2px)}
.btn-o{background:transparent;color:var(--blue);border:2px solid var(--blue)}
.btn-o:hover{background:var(--blue);color:white}
.btn-w{background:white;color:var(--navy);box-shadow:var(--sh)}
.btn-w:hover{transform:translateY(-2px);box-shadow:var(--shl)}
.btn-sm{padding:10px 20px;font-size:14px}
.btn-lg{padding:16px 36px;font-size:16px}

/* ── USP RIBBON ── */
.usp-ribbon{background:linear-gradient(135deg,#081629 0%,#0f2542 100%);color:white;padding:14px 24px;position:fixed;top:0;left:0;right:0;z-index:1001;border-bottom:1px solid rgba(255,255,255,0.08)}
.usp-ribbon-in{max-width:var(--mw);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.usp-ribbon-copy{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:700;letter-spacing:0.2px}
.usp-ribbon-copy strong{color:#86efac;font-weight:800;font-size:20px}
.usp-ribbon-copy svg{color:#86efac;flex-shrink:0}
.usp-ribbon-ctas{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.usp-ribbon-ctas .btn{padding:10px 16px;font-size:13px}
.usp-ribbon-ctas .btn-o{border-color:rgba(255,255,255,0.35);color:white}
.usp-ribbon-ctas .btn-o:hover{background:rgba(255,255,255,0.12);color:white;border-color:white}

/* ── HERO ── */
.hero{padding:140px 24px 80px;background:linear-gradient(135deg,var(--g50) 0%,var(--blue-pale) 40%,var(--g50) 100%);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(26,79,158,0.07) 0%,transparent 70%);border-radius:50%}
.hero-in{max-width:var(--mw);margin:0 auto;display:grid;grid-template-columns:1fr 440px;gap:60px;align-items:center;position:relative;z-index:1}
.hero-sbi{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#1a4f9e15,#1a4f9e08);border:1.5px solid var(--sbi);padding:8px 18px;border-radius:100px;font-size:13px;font-weight:700;color:var(--sbi);margin-bottom:20px}
.hero-sbi .sbi-dot{width:8px;height:8px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.3)}}
.hero h1{font-family:var(--hd);font-weight:800;font-size:46px;line-height:1.2;color:var(--navy);margin-bottom:16px}

/* ── TEXT CAROUSEL ANIMATION CLASSES ── */
.headline-carousel-wrapper {
  display: inline-block;
  position: relative;
  vertical-align: bottom;
  overflow: hidden;
  height: 1.3em;
  margin-top: 4px;
}
.headline-carousel-text {
  display: block;
  font-style: normal;
  color: var(--blue);
  white-space: nowrap;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.headline-carousel-text.active {
  opacity: 1;
  transform: translateY(0);
  position: relative;
}
.headline-carousel-text.exit {
  opacity: 0;
  transform: translateY(-30px);
}
.headline-carousel-text::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 6px;
  background: rgba(26, 79, 158, 0.15);
  border-radius: 3px;
}

.hero-sub{font-size:17px;color:var(--g600);line-height:1.65;margin-bottom:20px;max-width:480px}
.hero-type-tags{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}
.hero-type-tag{padding:6px 14px;background:white;border:1px solid var(--g200);border-radius:100px;font-size:13px;font-weight:600;color:var(--g700);transition:var(--tr)}
.hero-type-tag:hover{border-color:var(--blue);color:var(--blue);background:var(--blue-pale)}

/* ── USP PILLS in HERO ── */
.hero-usps{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.hero-usp{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500;color:var(--g700);transition:var(--tr);padding:6px 0;cursor:default}
.hero-usp:hover{color:var(--blue);transform:translateX(4px)}
.hero-usp .usp-tick{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:var(--tr)}
.hero-usp .usp-tick.green{background:var(--green-pale);color:var(--green)}
.hero-usp .usp-tick.blue{background:var(--blue-pale);color:var(--blue)}
.hero-usp:hover .usp-tick{transform:scale(1.15) rotate(5deg);box-shadow:0 4px 12px rgba(0,0,0,0.1)}
.hero-usp strong{color:var(--green);font-weight:700}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px}
.hero-rate-box{display:inline-flex;align-items:center;gap:12px;background:var(--navy);color:white;padding:14px 24px;border-radius:var(--r);font-size:14px}
.hero-rate-box strong{font-size:22px;color:var(--green-l);font-family:var(--hd)}

/* ── LEAD FORM ── */
.lf{background:white;border-radius:var(--rxl);padding:32px;box-shadow:var(--shxl);border:1px solid var(--g200);position:relative;overflow:hidden}
.lf::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--blue),var(--green))}
.lf h3{font-family:var(--hd);font-size:22px;font-weight:700;color:var(--navy);margin-bottom:4px}
.lf>p{font-size:14px;color:var(--g500);margin-bottom:20px}
.fg{margin-bottom:14px}
.fg label{display:block;font-size:12px;font-weight:600;color:var(--g700);margin-bottom:5px;text-transform:uppercase;letter-spacing:0.5px}
.fg input,.fg select{width:100%;padding:12px 14px;border:1.5px solid var(--g200);border-radius:var(--r);font-size:15px;font-family:var(--bd);color:var(--g800);background:var(--g50);transition:var(--tr);outline:none}
.fg input:focus,.fg select:focus{border-color:var(--blue);background:white;box-shadow:0 0 0 3px rgba(26,79,158,0.1)}
.fg input::placeholder{color:var(--g400)}
.f-sub{width:100%;padding:14px;background:linear-gradient(135deg,var(--green),#15803d);color:white;border:none;border-radius:var(--r);font-size:16px;font-weight:700;font-family:var(--bd);cursor:pointer;transition:var(--tr);box-shadow:0 4px 14px rgba(22,163,74,0.35)}
.f-sub:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(22,163,74,0.45)}
.f-trust{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--g400);margin-top:10px;justify-content:center}
.f-trust svg{width:14px;height:14px;color:var(--green)}
.f-or{text-align:center;padding:10px 0;font-size:12px;color:var(--g400);font-weight:500}
.f-wa{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px;background:#25D366;color:white;border:none;border-radius:var(--r);font-size:14px;font-weight:600;font-family:var(--bd);cursor:pointer;transition:var(--tr);text-decoration:none}
.f-wa:hover{background:#20bd5a;transform:translateY(-1px)}

/* ── SBI PRIORITY BANNER ── */
.sbi-banner{padding:48px 24px;background:linear-gradient(135deg,#1a4f9e08,#1a4f9e15);border-bottom:1px solid var(--g200)}
.sbi-banner-in{max-width:var(--mw);margin:0 auto;display:flex;align-items:center;gap:48px;flex-wrap:wrap}
.sbi-main{flex:1;min-width:300px}
.sbi-badge-lg{display:inline-flex;align-items:center;gap:10px;background:var(--sbi);color:white;padding:10px 20px;border-radius:var(--r);font-weight:700;font-size:14px;margin-bottom:16px}
.sbi-badge-lg svg{width:18px;height:18px}
.sbi-main h3{font-family:var(--hd);font-size:26px;font-weight:700;color:var(--navy);margin-bottom:8px}
.sbi-main p{font-size:15px;color:var(--g500);line-height:1.6;max-width:500px}
.sbi-other{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.sbi-other-label{font-size:12px;font-weight:600;color:var(--g400);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
.banks-chips{display:flex;gap:10px;flex-wrap:wrap}
.bchip{display:flex;align-items:center;gap:8px;padding:10px 18px;background:white;border:1.5px solid var(--g200);border-radius:var(--r);font-weight:600;font-size:14px;color:var(--g700);transition:var(--tr);cursor:pointer}
.bchip:hover{border-color:var(--blue);box-shadow:0 4px 12px rgba(26,79,158,0.1);transform:translateY(-2px)}
.bchip .bdot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.bchip.sbi-chip{border-color:var(--sbi);background:linear-gradient(135deg,#1a4f9e08,white);position:relative}
.bchip.sbi-chip::after{content:'★ Authorised Partner';position:absolute;top:-10px;right:-8px;background:var(--green);color:white;font-size:9px;font-weight:700;padding:2px 8px;border-radius:100px;letter-spacing:0.3px}

/* ── SECTION ── */
.sec{padding:80px 24px}
.sec-in{max-width:var(--mw);margin:0 auto}
.sec-l{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--blue);margin-bottom:8px}
.sec-t{font-family:var(--hd);font-size:36px;font-weight:700;color:var(--navy);margin-bottom:12px;line-height:1.2}
.sec-d{font-size:16px;color:var(--g500);max-width:560px;line-height:1.6}
.sec-h{margin-bottom:48px}
.sec-h.c Holiday{text-align:center}
.sec-h.c .sec-d{margin:0 auto}

/* ── USP CARDS ── */
.usp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.usp-card{background:white;border:1.5px solid var(--g200);border-radius:var(--rl);padding:28px;transition:var(--tr);cursor:default;position:relative;overflow:hidden}
.usp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--blue);transform:scaleX(0);transition:var(--tr);transform-origin:left}
.usp-card:hover{border-color:var(--blue);box-shadow:var(--shl);transform:translateY(-4px)}
.usp-card:hover::before{transform:scaleX(1)}
.usp-card.highlight{border-color:var(--green);background:linear-gradient(135deg,var(--green-pale),white)}
.usp-card.highlight::before{background:var(--green);transform:scaleX(1)}
.usp-card.highlight .usp-icon{background:var(--green);color:white}
.usp-icon{width:48px;height:48px;border-radius:12px;background:var(--blue-pale);color:var(--blue);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:var(--tr)}
.usp-card:hover .usp-icon{transform:scale(1.1) rotate(-3deg)}
.usp-card h4{font-family:var(--hd);font-size:18px;font-weight:600;color:var(--navy);margin-bottom:8px}
.usp-card p{font-size:14px;color:var(--g500);line-height:1.55}
.usp-card .free-tag{display:inline-block;margin-top:10px;padding:4px 10px;background:var(--green);color:white;border-radius:100px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px}

/* ── LOAN TYPES ── */
.lt-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
.lt-card{background:white;border:1.5px solid var(--g200);border-radius:var(--rl);padding:28px;transition:var(--tr);cursor:pointer;position:relative;overflow:hidden}
.lt-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--green));transform:scaleX(0);transition:var(--tr);transform-origin:left}
.lt-card:hover{border-color:var(--blue);box-shadow:var(--shl);transform:translateY(-4px)}
.lt-card:hover::after{transform:scaleX(1)}
.lt-icon{width:48px;height:48px;border-radius:12px;background:var(--blue-pale);color:var(--blue);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:var(--tr)}
.lt-card:hover .lt-icon{background:var(--blue);color:white;transform:scale(1.1)}
.lt-card h4{font-family:var(--hd);font-size:17px;font-weight:600;color:var(--navy);margin-bottom:6px}
.lt-card p{font-size:14px;color:var(--g500);line-height:1.5;margin-bottom:14px}
.lt-link{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--blue);text-decoration:none;transition:var(--tr)}
.lt-link:hover{gap:10px}

/* ── PROCESS ── */
.pr-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative}
.pr-grid::before{content:'';position:absolute;top:36px;left:12.5%;right:12.5%;height:2px;background:linear-gradient(90deg,var(--blue),var(--green));z-index:0;opacity:0.3}
.pr-step{text-align:center;position:relative;z-index:1}
.pr-num{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--navy));color:white;display:flex;align-items:center;justify-content:center;font-family:var(--hd);font-weight:700;font-size:20px;margin:0 auto 16px;border:4px solid white;box-shadow:var(--sh);transition:var(--tr)}
.pr-step:hover .pr-num{transform:scale(1.1);box-shadow:var(--shl)}
.pr-step h4{font-family:var(--hd);font-size:15px;font-weight:600;color:var(--navy);margin-bottom:6px}
.pr-step p{font-size:13px;color:var(--g500);line-height:1.4}

/* ── WHY CHOOSE (DARK) ── */
.why-sec{background:var(--navy);color:white}
.why-sec .sec-l{color:var(--green-l)}
.why-sec .sec-t{color:white}
.why-sec .sec-d{color:rgba(255,255,255,0.6)}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.why-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:var(--rl);padding:28px;transition:var(--tr)}
.why-card:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.2);transform:translateY(-4px)}
.why-num{font-family:var(--hd);font-size:36px;font-weight:800;color:rgba(255,255,255,0.08);margin-bottom:10px}
.why-card h4{font-family:var(--hd);font-size:17px;font-weight:600;color:white;margin-bottom:8px}
.why-card p{font-size:14px;color:rgba(255,255,255,0.55);line-height:1.55}

/* ── EMI CALC ── */
.emi-sec{background:var(--g50)}
.emi-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.emi-form{background:white;padding:32px;border-radius:var(--rxl);box-shadow:var(--sh);border:1px solid var(--g200)}
.emi-sg{margin-bottom:28px}
.emi-sl{display:flex;justify-content:space-between;margin-bottom:10px}
.emi-sl span{font-size:14px;font-weight:500;color:var(--g600)}
.emi-sl strong{font-size:16px;font-weight:700;color:var(--navy)}
.emi-range{-webkit-appearance:none;width:100%;height:6px;background:var(--g200);border-radius:3px;outline:none;transition:var(--tr)}
.emi-range::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;background:var(--blue);border-radius:50%;cursor:pointer;box-shadow:0 2px 10px rgba(26,79,158,0.35);transition:var(--tr)}
.emi-range::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 4px 14px rgba(26,79,158,0.45)}
.emi-rng{display:flex;justify-content:space-between;font-size:11px;color:var(--g400);margin-top:4px}
.emi-res{background:white;padding:32px;border-radius:var(--rxl);box-shadow:var(--sh);border:1px solid var(--g200)}
.emi-res h3{font-family:var(--hd);font-size:18px;font-weight:600;color:var(--navy);margin-bottom:24px}
.emi-amt{font-family:var(--hd);font-size:44px;font-weight:800;color:var(--blue);margin-bottom:6px}
.emi-amt-l{font-size:14px;color:var(--g500);margin-bottom:24px}
.emi-donut-w{display:flex;align-items:center;gap:24px;margin:20px 0;padding:20px;background:var(--g50);border-radius:var(--r)}
.emi-donut{position:relative;width:120px;height:120px;flex-shrink:0}
.emi-donut svg{transform:rotate(-90deg)}
.emi-donut-c{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}
.emi-donut-c small{font-size:10px;color:var(--g400);display:block}
.emi-donut-c strong{font-size:12px;font-weight:700;color:var(--navy)}
.emi-leg{display:flex;flex-direction:column;gap:14px}
.emi-leg-i{display:flex;align-items:center;gap:10px;font-size:13px}
.emi-leg-d{width:12px;height:12px;border-radius:3px;flex-shrink:0}
.emi-bd{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;padding-top:20px;border-top:1px solid var(--g200)}
.emi-bd-i span{display:block;font-size:11px;color:var(--g500);margin-bottom:3px;text-transform:uppercase;letter-spacing:0.3px}
.emi-bd-i strong{font-size:15px;font-weight:700;color:var(--navy)}

/* ── BROKER ── */
.broker{background:linear-gradient(135deg,var(--blue) 0%,var(--navy) 100%);color:white}
.broker-in{display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap}
.broker-in h2{font-family:var(--hd);font-size:30px;font-weight:700;margin-bottom:10px}
.broker-in p{font-size:15px;opacity:0.8;max-width:480px;line-height:1.6}

/* ── TESTIMONIALS ── */
.rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.rev-card{background:white;border:1.5px solid var(--g200);border-radius:var(--rl);padding:28px;transition:var(--tr)}
.rev-card:hover{box-shadow:var(--shl);transform:translateY(-3px)}
.rev-stars{display:flex;gap:2px;color:var(--orange);margin-bottom:14px}
.rev-card .rev-txt{font-size:15px;color:var(--g600);line-height:1.6;margin-bottom:20px;font-style:italic}
.rev-author{display:flex;align-items:center;gap:12px}
.rev-av{width:40px;height:40px;border-radius:50%;background:var(--blue-pale);color:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}
.rev-name{font-weight:600;font-size:14px;color:var(--navy)}
.rev-city{font-size:12px;color:var(--g400)}

/* ── STATS ── */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:48px 0}
.stat{text-align:center;padding:24px;background:white;border-radius:var(--rl);border:1px solid var(--g200);transition:var(--tr)}
.stat:hover{box-shadow:var(--sh);transform:translateY(-3px)}
.stat-n{font-family:var(--hd);font-size:34px;font-weight:800;color:var(--blue);margin-bottom:4px}
.stat-l{font-size:13px;color:var(--g500);font-weight:500}

/* ── DOCS ── */
.docs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px}
.doc-item{display:flex;align-items:center;gap:14px;padding:16px 20px;background:white;border:1.5px solid var(--g200);border-radius:var(--r);transition:var(--tr);cursor:default}
.doc-item:hover{border-color:var(--green);box-shadow:0 4px 12px rgba(22,163,74,0.08);transform:translateX(4px)}
.doc-ck{width:32px;height:32px;border-radius:10px;background:var(--green-pale);color:var(--green);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:var(--tr)}
.doc-item:hover .doc-ck{background:var(--green);color:white;transform:scale(1.1) rotate(5deg)}
.doc-item span{font-size:15px;font-weight:500;color:var(--g700)}

/* ── CTA BANNER ── */
.cta-b{background:linear-gradient(135deg,var(--green) 0%,#15803d 100%);padding:64px 24px;text-align:center;color:white}
.cta-b h2{font-family:var(--hd);font-size:36px;font-weight:700;margin-bottom:10px}
.cta-b p{font-size:16px;opacity:0.9;margin-bottom:28px}
.cta-b-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

/* ── FOOTER ── */
.foot{background:var(--navy);color:rgba(255,255,255,0.7);padding:60px 24px 30px}
.foot-in{max-width:var(--mw);margin:0 auto;display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px}
.foot h4{font-family:var(--hd);font-size:15px;font-weight:600;color:white;margin-bottom:16px}
.foot p{font-size:14px;line-height:1.6}
.foot-links{list-style:none}
.foot-links li{margin-bottom:10px}
.foot-links a{color:rgba(255,255,255,0.5);text-decoration:none;font-size:14px;transition:var(--tr)}
.foot-links a:hover{color:white;padding-left:4px}
.foot-bot{max-width:var(--mw);margin:40px auto 0;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;font-size:12px;flex-wrap:wrap;gap:12px}

/* ── WHATSAPP FLOAT ── */
.waf{position:fixed;bottom:24px;right:24px;z-index:999;width:60px;height:60px;border-radius:50%;background:#25D366;color:white;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,0.4);cursor:pointer;transition:var(--tr);text-decoration:none;animation:wap 2s infinite}
.waf:hover{transform:scale(1.1)}
@keyframes wap{0%,100%{box-shadow:0 4px 20px rgba(37,211,102,0.4)}50%{box-shadow:0 4px 30px rgba(37,211,102,0.7)}}
.waf-tt{position:absolute;right:68px;top:50%;transform:translateY(-50%);background:white;color:var(--g800);padding:8px 14px;border-radius:8px;font-size:13px;font-weight:600;white-space:nowrap;box-shadow:var(--sh);opacity:0;transition:var(--tr);pointer-events:none}
.waf:hover .waf-tt{opacity:1}

/* ── CALL STICKY MOBILE ── */
.call-stk{display:none;position:fixed;bottom:0;left:0;right:0;z-index:998;background:var(--navy);padding:10px 16px;gap:10px;align-items:center;justify-content:center}
.call-stk a{display:flex;align-items:center;justify-content:center;gap:6px;color:white;text-decoration:none;font-weight:600;font-size:14px;flex:1;padding:10px;border-radius:8px;transition:var(--tr)}
.call-stk a:first-child{background:var(--blue)}
.call-stk a:last-child{background:#25D366}

/* ── MOBILE OVERLAY ── */
.mob-ov{display:none;position:fixed;inset:0;z-index:1001;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px)}
.mob-ov.open{display:block}
.mob-dr{position:absolute;top:0;right:0;width:300px;height:100%;background:white;padding:24px;box-shadow:var(--shxl)}
.mob-dr-cl{display:flex;justify-content:flex-end;margin-bottom:20px}
.mob-dr-cl button{background:none;border:none;cursor:pointer;color:var(--g600)}
.mob-dr a{display:block;padding:14px 0;font-size:16px;font-weight:500;color:var(--g700);text-decoration:none;border-bottom:1px solid var(--g100)}
.mob-dr a:hover{color:var(--blue)}

/* ── RESPONSIVE ── */
@media(max-width:968px){
  .hero-in{grid-template-columns:1fr}
  .hero h1{font-size:34px}
  .headline-carousel-wrapper { display: block; height: auto; margin-top: 0; }
  .headline-carousel-text { position: relative; white-space: normal; transform: none; opacity: 1; display: none; }
  .headline-carousel-text.active { display: block; transform: none; }
  .headline-carousel-text.exit { display: none; }
  .lf{max-width:500px}
  .usp-grid,.why-grid,.rev-grid,.lt-grid{grid-template-columns:repeat(2,1fr)}
  .emi-grid{grid-template-columns:1fr}
  .foot-in{grid-template-columns:repeat(2,1fr)}
  .stats{grid-template-columns:repeat(2,1fr)}
  .pr-grid{grid-template-columns:repeat(2,1fr)}
  .pr-grid::before{display:none}
  .broker-in{flex-direction:column;text-align:center}
  .sbi-banner-in{flex-direction:column;text-align:center}
  .sbi-main p{margin:0 auto}
  .sbi-other{align-items:center}
  .nav-links{display:none}
  .mmb{display:block}
  .call-stk{display:flex}
  .waf{bottom:76px}
  .usp-ribbon{padding:12px 16px}
  .usp-ribbon-in{justify-content:center}
  .usp-ribbon-copy{font-size:14px;justify-content:center;text-align:center}
  .usp-ribbon-copy strong{font-size:18px}
  .usp-ribbon-ctas{justify-content:center}
}
@media(max-width:600px){
  .hero{padding:120px 16px 48px}
  .hero h1{font-size:26px}
  .sec{padding:56px 16px}
  .sec-t{font-size:26px}
  .usp-grid,.why-grid,.rev-grid,.lt-grid{grid-template-columns:1fr}
  .emi-bd{grid-template-columns:1fr}
  .banks-chips{justify-content:center}
  .cta-b h2{font-size:24px}
  .emi-amt{font-size:32px}
  .foot-in{grid-template-columns:1fr}
  .stats{grid-template-columns:1fr}
  .usp-ribbon-copy{font-size:13px;line-height:1.35}
  .usp-ribbon-copy strong{font-size:16px}
  .usp-ribbon-ctas{width:100%}
  .usp-ribbon-ctas .btn{flex:1;justify-content:center}
}
`;

// ─── LEAD FORM ───
function LeadForm() {
  const [f, setF] = useState({ name: "", phone: "", amount: "", city: "" });
  const [ok, setOk] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    console.log("Lead:", f);
    setOk(true);
    setTimeout(() => setOk(false), 4000);
    setF({ name: "", phone: "", amount: "", city: "" });
  };
  if (ok) return (
    <div className="lf" style={{ textAlign: "center", padding: "48px 32px" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--green-pale)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 32 }}>✓</div>
      <h3>Thank You!</h3>
      <p style={{ color: "var(--g500)" }}>Our loan expert Abhishek will call you within 30 minutes.</p>
    </div>
  );
  return (
    <div className="lf">
      <h3>Get Free Consultation</h3>
      <p>Quick details — expert callback in minutes</p>
      <form onSubmit={submit}>
        <div className="fg"><label>Full Name</label><input placeholder="Enter your name" value={f.name} onChange={e => setF({...f, name: e.target.value})} required/></div>
        <div className="fg"><label>Mobile Number</label><input type="tel" placeholder="10-digit mobile number" maxLength={10} pattern="[0-9]{10}" value={f.phone} onChange={e => setF({...f, phone: e.target.value.replace(/\D/g,"")})} required/></div>
        <div className="fg"><label>Loan Amount</label>
          <select value={f.amount} onChange={e => setF({...f, amount: e.target.value})} required>
            <option value="">Select amount range</option>
            <option value="upto-20L">Up to ₹20 Lakhs</option>
            <option value="20-50L">₹20 - 50 Lakhs</option>
            <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
            <option value="1Cr-3Cr">₹1 - 3 Crore</option>
            <option value="3Cr+">Above ₹3 Crore</option>
          </select>
        </div>
        <div className="fg"><label>City</label><input placeholder="e.g. Delhi, Noida, Gurgaon" value={f.city} onChange={e => setF({...f, city: e.target.value})} required/></div>
        <button type="submit" className="f-sub">Check Eligibility — It's Free →</button>
        <div className="f-or">or</div>
        <a href={WA} target="_blank" className="f-wa">{I.wa} WhatsApp for Instant Response</a>
        <div className="f-trust">{I.shield} Your information is 100% safe & secure</div>
      </form>
    </div>
  );
}

// ─── EMI CALCULATOR ───
function EMI() {
  const [a, setA] = useState(5000000);
  const [r, setR] = useState(8.5);
  const [t, setT] = useState(20);
  const mr = r/12/100, m = t*12;
  const emi = mr > 0 ? (a*mr*Math.pow(1+mr,m))/(Math.pow(1+mr,m)-1) : a/m;
  const tp = emi*m, ti = tp-a;
  const pp = ((a/tp)*100).toFixed(1), ip = ((ti/tp)*100).toFixed(1);
  const fmt = n => "₹ " + Math.round(n).toLocaleString("en-IN");
  const rad = 45, circ = 2*Math.PI*rad, pa = (a/tp)*circ;

  return (
    <div className="emi-grid">
      <div className="emi-form">
        <h3 style={{ fontFamily: "var(--hd)", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 32 }}>Calculate Your EMI</h3>
        <div className="emi-sg">
          <div className="emi-sl"><span>Loan Amount</span><strong>{fmt(a)}</strong></div>
          <input type="range" className="emi-range" min={100000} max={50000000} step={100000} value={a} onChange={e=>setA(+e.target.value)}/>
          <div className="emi-rng"><span>₹1 Lakh</span><span>₹5 Crore</span></div>
        </div>
        <div className="emi-sg">
          <div className="emi-sl"><span>Interest Rate (% p.a.)</span><strong>{r}%</strong></div>
          <input type="range" className="emi-range" min={5} max={15} step={0.1} value={r} onChange={e=>setR(+e.target.value)}/>
          <div className="emi-rng"><span>5%</span><span>15%</span></div>
        </div>
        <div className="emi-sg">
          <div className="emi-sl"><span>Loan Tenure</span><strong>{t} Years</strong></div>
          <input type="range" className="emi-range" min={1} max={30} step={1} value={t} onChange={e=>setT(+e.target.value)}/>
          <div className="emi-rng"><span>1 Year</span><span>30 Years</span></div>
        </div>
        <button className="btn btn-p btn-lg" style={{ width: "100%", justifyContent: "center" }} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Get Best Rate — Apply Now →
        </button>
      </div>
      <div className="emi-res">
        <h3>Your EMI Breakdown</h3>
        <div className="emi-amt">{fmt(emi)}</div>
        <div className="emi-amt-l">Monthly EMI</div>
        <div className="emi-donut-w">
          <div className="emi-donut">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={rad} fill="none" stroke="var(--g200)" strokeWidth="10"/>
              <circle cx="60" cy="60" r={rad} fill="none" stroke="var(--blue)" strokeWidth="10" strokeDasharray={`${pa} ${circ-pa}`} strokeLinecap="round"/>
            </svg>
            <div className="emi-donut-c"><small>Total</small><strong>{fmt(tp)}</strong></div>
          </div>
          <div className="emi-leg">
            <div className="emi-leg-i"><div className="emi-leg-d" style={{background:"var(--blue)"}}></div><div><div style={{fontWeight:600,color:"var(--navy)"}}>Principal</div><div style={{color:"var(--g500)",fontSize:12}}>{fmt(a)} ({pp}%)</div></div></div>
            <div className="emi-leg-i"><div className="emi-leg-d" style={{background:"var(--g300)"}}></div><div><div style={{fontWeight:600,color:"var(--navy)"}}>Interest</div><div style={{color:"var(--g500)",fontSize:12}}>{fmt(ti)} ({ip}%)</div></div></div>
          </div>
        </div>
        <div className="emi-bd">
          <div className="emi-bd-i"><span>Total Interest</span><strong>{fmt(ti)}</strong></div>
          <div className="emi-bd-i"><span>Total Payment</span><strong>{fmt(tp)}</strong></div>
          <div className="emi-bd-i"><span>Principal</span><strong>{fmt(a)}</strong></div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  
  // ─── TYPING/WORD CAROUSEL LOGIC ───
  const words = ["Trusted Banking Partners", "SBI Authorised Partners", "₹0 Processing Fees"];
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[index];
      if (!isDeleting) {
        // Typing character by character
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        setTypingSpeed(100); // Speed while typing

        if (currentWord === fullWord) {
          // Pause at full text before deleting
          setTypingSpeed(2000); 
          setIsDeleting(true);
        }
      } else {
        // Deleting character by character
        setCurrentWord(fullWord.substring(0, currentWord.length - 1));
        setTypingSpeed(50); // Speed while erasing

        if (currentWord === "") {
          setIsDeleting(false);
          // Move to next word loop
          setIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300); // Small pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, index, typingSpeed]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = id => { setMob(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <>
      <style>{css}</style>

      {/* ═══ TOP USP RIBBON ═══ */}
      <div className="usp-ribbon">
        <div className="usp-ribbon-in">
          <div className="usp-ribbon-copy">
            {I.percent}
            <span><strong>₹0 Processing Fees</strong> on all home loans</span>
          </div>
          <div className="usp-ribbon-ctas">
            <button className="btn btn-g btn-sm" onClick={()=>go("contact")}>
              {I.arrow} Apply Now
            </button>
            <a href={`tel:${PHONE}`} className="btn btn-o btn-sm">
              {I.phone} Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ═══ NAVBAR ═══ */}
      <nav className={`nav ${scrolled?"scrolled":""}`} style={{ top: 74 }}>
        <div className="nav-in">
          <a href="#" className="nav-logo" onClick={e=>{e.preventDefault();go("hero")}}>
            <LogoSmall />
            Home Vision <span>Finance</span>
          </a>
          <ul className="nav-links">
            <li><a href="#" onClick={e=>{e.preventDefault();go("hero")}}>Home</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();go("services")}}>Services</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();go("loans")}}>Loan Types</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();go("emi")}}>EMI Calculator</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();go("about")}}>About</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();go("blogs")}}>Blogs</a></li>
            <li><a href="#" onClick={e=>{e.preventDefault();go("contact")}}>Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a href={`tel:${PHONE}`} className="nav-ph">{I.phone} {PHONE}</a>
            <button className="btn btn-p btn-sm" onClick={()=>go("contact")}>Apply Now</button>
          </div>
          <button className="mmb" onClick={()=>setMob(true)}>{I.menu}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mob-ov ${mob?"open":""}`} onClick={()=>setMob(false)}>
        <div className="mob-dr" onClick={e=>e.stopPropagation()}>
          <div className="mob-dr-cl"><button onClick={()=>setMob(false)}>{I.close}</button></div>
          {["hero:Home","services:Our Strengths","loans:Loan Types","emi:EMI Calculator","about:About","blogs:Blogs","contact:Contact"].map(s=>{
            const [id,label]=s.split(":");
            return <a key={id} href="#" onClick={e=>{e.preventDefault();go(id)}}>{label}</a>;
          })}
          <div style={{marginTop:20,display:"flex",flexDirection:"column",gap:10}}>
            <a href={`tel:${PHONE}`} className="btn btn-p" style={{textAlign:"center",textDecoration:"none",justifyContent:"center"}}>📞 Call Abhishek</a>
            <a href={WA} target="_blank" className="btn btn-g" style={{textAlign:"center",textDecoration:"none",justifyContent:"center"}}>💬 WhatsApp</a>
          </div>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="hero" id="hero" style={{ marginTop: 74 }}>
        <div className="hero-in">
          <div>
            <div className="hero-sbi">
              <span className="sbi-dot"></span>
              SBI Authorised Channel Partner — Verified
            </div>
            {/* Typewriter Effect Headline */}
            <h1>
  <span style={{
    background: "linear-gradient(90deg, var(--navy) 0%, var(--blue) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block"
  }}>
    Fast Home Loan Approval with
  </span>
  <br/>
  <span style={{ 
    background: "linear-gradient(90deg, var(--blue) 0%, #2563eb 100%)", // Typewriter text ke liye gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    borderRight: "3px solid var(--blue)", // Cursor ka color solid rakha hai taaki blink sahi se ho
    paddingRight: "4px", 
    animation: "blink 0.75s step-end infinite", 
    fontStyle: "italic",
    display: "inline-block"
  }}>
    {currentWord}
  </span>
</h1>
            <style>{`
              @keyframes blink {
                from, to { border-color: transparent }
                50% { border-color: var(--blue); }
              }
            `}</style>
            
            <p className="hero-sub">SBI is our authorised partner for strong trust and priority support, and we also compare offers across other leading banks to get you the best fit.</p>

            <div className="hero-type-tags">
              {["Fresh Purchase", "Resale", "Balance Transfer", "Plot Loan", "Construction"].map(t =>
                <span key={t} className="hero-type-tag">{t}</span>
              )}
            </div>

            <div className="hero-usps">
              {[
                { text: "₹0 Processing Fees — Save Thousands", tick: "green", bold: true },
                { text: "Processing Support & Quick Eligibility", tick: "green" },
                { text: "Builder & Broker Coordination", tick: "green" },
                { text: "Rates starting from 8.50%* p.a.", tick: "green" },
              ].map((u, i) => (
                <div key={i} className="hero-usp">
                  <span className={`usp-tick ${u.tick}`}>{I.check}</span>
                  {u.bold ? <strong>{u.text}</strong> : <span>{u.text}</span>}
                </div>
              ))}
            </div>

            <div className="hero-btns">
              <button className="btn btn-g btn-lg" onClick={()=>go("contact")}>Get Free Consultation →</button>
              <a href={`tel:${PHONE}`} className="btn btn-o btn-lg">{I.phone}</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* ═══ SBI PRIORITY + OTHER BANKS ═══ */}
      <section className="sbi-banner">
        <div className="sbi-banner-in">
          <div className="sbi-main">
            <div className="sbi-badge-lg">{I.shield} SBI Authorised Channel Partner</div>
            <h3>Priority Processing with State Bank of India</h3>
            <p>As an authorised channel partner of SBI, we offer priority loan processing, best-in-class interest rates, and dedicated support. We also work with other leading banks to ensure you get the best deal available.</p>
          </div>
          <div className="sbi-other">
            <div className="sbi-other-label">We Also Partner With</div>
            <div className="banks-chips">
              {BANKS.map((b,i) => (
                <div key={i} className={`bchip ${b.priority?"sbi-chip":""}`} onClick={()=>go("contact")}>
                  <span className="bdot" style={{background:b.color}}></span>
                  {b.name}
                </div>
              ))}
            </div>
            <button className="btn btn-o btn-sm" style={{marginTop:8}} onClick={()=>go("contact")}>Compare Rates Across Banks →</button>
          </div>
        </div>
      </section>

      {/* ═══ USP SECTION ═══ */}
      <section className="sec" id="services">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">Why Home Vision Finance</div>
            <h2 className="sec-t">Our Biggest Strengths — Your Advantage</h2>
            <p className="sec-d">We don't just process loans. We provide a complete support system from your first call to final disbursement.</p>
          </div>
          <div className="usp-grid">
            {USPS.map((u,i) => (
              <div key={i} className={`usp-card ${u.highlight?"highlight":""}`}>
                <div className="usp-icon">{u.icon}</div>
                <h4>{u.title}</h4>
                <p>{u.desc}</p>
                {u.highlight && <span className="free-tag">Biggest USP</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOAN TYPES ═══ */}
      <section className="sec" style={{background:"var(--g50)"}} id="loans">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">Our Services</div>
            <h2 className="sec-t">Home Loan Solutions for Every Need</h2>
            <p className="sec-d">Whether buying your first home, transferring an existing loan, or building from scratch — we have the right solution.</p>
          </div>
          <div className="lt-grid">
            {LOAN_TYPES.map((l,i) => (
              <div key={i} className="lt-card" onClick={()=>go("contact")}>
                <div className="lt-icon">{l.icon}</div>
                <h4>{l.title}</h4>
                <p>{l.desc}</p>
                <span className="lt-link">Apply Now {I.arrow}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">How It Works</div>
            <h2 className="sec-t">4 Simple Steps to Your Home Loan</h2>
          </div>
          <div className="pr-grid">
            {[
              { n: "1", t: "Share Your Details", d: "Fill the quick form or call/WhatsApp Abhishek." },
              { n: "2", t: "Eligibility Check", d: "We assess your profile and match with the best bank offer." },
              { n: "3", t: "Submit Documents", d: "Upload basic documents. We handle all bank coordination." },
              { n: "4", t: "Loan Disbursement", d: "Approved and disbursed. Move into your dream home." },
            ].map((s,i) => (
              <div key={i} className="pr-step">
                <div className="pr-num">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:36}}>
            <button className="btn btn-g btn-lg" onClick={()=>go("contact")}>Start Your Application — It's Free →</button>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE (DARK) ═══ */}
      {/* <section className="sec why-sec" id="about">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">About Us</div>
            <h2 className="sec-t">Why Families Trust Home Vision Finance</h2>
            <p className="sec-d">With years of banking relationships and a client-first approach, we make your home loan journey stress-free.</p>
          </div>
          <div className="why-grid">
            {[
              { t: "Fast File Login", d: "Your loan file gets logged in within 24–48 hours of document submission. No unnecessary delays." },
              { t: "Smooth Coordination", d: "End-to-end coordination between you, the bank, and the builder — zero confusion, zero runaround." },
              { t: "Regular Updates", d: "Track your loan status at every stage. No chasing banks, no guessing where your file stands." },
              { t: "Support Till Disbursement", d: "We don't stop at sanction. Full support from application to final disbursement into your account." },
              { t: "Builder & Broker Assistance", d: "Special support for real estate professionals — fast processing, attractive terms, dedicated handling." },
              { t: "Multi-Bank Access", d: "Compare rates across SBI, HDFC, ICICI, PNB & Bank of Baroda — pick the best deal for you." },
            ].map((w,i) => (
              <div key={i} className="why-card">
                <div className="why-num">{String(i+1).padStart(2,"0")}</div>
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══ EMI CALCULATOR ═══ */}
      <section className="sec emi-sec" id="emi">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">Plan Your Loan</div>
            <h2 className="sec-t">EMI Calculator</h2>
            <p className="sec-d">Estimate your monthly EMI instantly. Adjust values to plan your finances better.</p>
          </div>
          <EMI />
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="sec" style={{paddingTop:0}}>
        <div className="sec-in">
          <div className="stats">
            {[
              { n: "1000+", l: "Happy Customers" },
              { n: "₹500 Cr+", l: "Loans Facilitated" },
              { n: "4.8/5", l: "Customer Rating" },
              { n: "24–48 hrs", l: "Average Approval" },
            ].map((s,i) => (
              <div key={i} className="stat">
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BROKER / BUILDER ═══ */}
      <section className="sec broker">
        <div className="sec-in">
          <div className="broker-in">
            <div>
              <h2>Builders, Brokers & CAs — Let's Work Together</h2>
              <p>Attractive payout and fast coordination support available. We prioritize your clients' files for quick processing and smooth disbursement.</p>
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href={`tel:${PHONE}`} className="btn btn-w">📞 Call Abhishek</a>
              <a href={WA} target="_blank" className="btn btn-g">💬 WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="sec" style={{background:"var(--g50)"}}>
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">Client Testimonials</div>
            <h2 className="sec-t">Trusted by Families Across India</h2>
          </div>
          <div className="rev-grid">
            {REVIEWS.map((r,i) => (
              <div key={i} className="rev-card">
                <div className="rev-stars">{Array.from({length:r.rating}).map((_,j)=><span key={j}>{I.star}</span>)}</div>
                <p className="rev-txt">"{r.text}"</p>
                <div className="rev-author">
                  <div className="rev-av">{r.name[0]}</div>
                  <div><div className="rev-name">{r.name}</div><div className="rev-city">{r.city}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DOCUMENTS ═══ */}
      <section className="sec">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">Be Prepared</div>
            <h2 className="sec-t">Documents You'll Need</h2>
            <p className="sec-d">Keep these basic documents ready for quick and smooth processing.</p>
          </div>
          <div className="docs-grid">
            {DOCS.map((d,i) => (
              <div key={i} className="doc-item">
                <div className="doc-ck">{I.check}</div>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOGS PLACEHOLDER ═══ */}
      <section className="sec" style={{background:"var(--g50)"}} id="blogs">
        <div className="sec-in">
          <div className="sec-h c">
            <div className="sec-l">Resources</div>
            <h2 className="sec-t">Latest from Our Blog</h2>
            <p className="sec-d">Tips, guides, and insights for smarter home loan decisions.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
            {[
              { title: "SBI Home Loan Interest Rates 2026 — Complete Guide", tag: "Interest Rates", date: "Jun 2026" },
              { title: "Home Loan Balance Transfer: When & Why You Should Do It", tag: "Balance Transfer", date: "May 2026" },
              { title: "Documents Checklist for Home Loan Application in India", tag: "Guide", date: "May 2026" },
            ].map((b,i) => (
              <div key={i} style={{background:"white",borderRadius:"var(--rl)",padding:24,border:"1.5px solid var(--g200)",cursor:"pointer",transition:"var(--tr)"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="var(--shl)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                <div style={{display:"inline-block",padding:"4px 12px",background:"var(--blue-pale)",color:"var(--blue)",fontSize:11,fontWeight:600,borderRadius:100,marginBottom:12,textTransform:"uppercase",letterSpacing:"0.5px"}}>{b.tag}</div>
                <h4 style={{fontFamily:"var(--hd)",fontSize:17,fontWeight:600,color:"var(--navy)",marginBottom:8,lineHeight:1.35}}>{b.title}</h4>
                <span style={{fontSize:12,color:"var(--g400)"}}>{b.date} · 5 min read</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT SECTION ═══ */}
      <section className="sec" id="contact">
        <div className="sec-in">
          <div style={{display:"grid",gridTemplateColumns:"1fr 440px",gap:60,alignItems:"center"}}>
            <div>
              <div className="sec-l">Get In Touch</div>
              <h2 className="sec-t">Need Home Loan Assistance?</h2>
              <p className="sec-d" style={{marginBottom:32}}>Fill the form or reach out directly. Abhishek Chauhan will guide you through the entire process — from eligibility to disbursement.</p>

              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <a href={`tel:${PHONE}`} style={{display:"flex",alignItems:"center",gap:16,textDecoration:"none",padding:"18px 22px",background:"var(--blue-pale)",borderRadius:"var(--r)",transition:"var(--tr)",border:"1.5px solid transparent"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="var(--blue)"} onMouseLeave={e=>e.currentTarget.style.borderColor="transparent"}>
                  <div style={{width:48,height:48,borderRadius:12,background:"var(--blue)",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>{I.phone}</div>
                  <div><div style={{fontSize:12,color:"var(--g500)",marginBottom:2,textTransform:"uppercase",letterSpacing:"0.5px"}}>Call Directly</div><div style={{fontSize:20,fontWeight:700,color:"var(--navy)",fontFamily:"var(--hd)"}}>{PHONE}</div></div>
                </a>
                <a href={WA} target="_blank" style={{display:"flex",alignItems:"center",gap:16,textDecoration:"none",padding:"18px 22px",background:"var(--green-pale)",borderRadius:"var(--r)",transition:"var(--tr)",border:"1.5px solid transparent"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="var(--green)"} onMouseLeave={e=>e.currentTarget.style.borderColor="transparent"}>
                  <div style={{width:48,height:48,borderRadius:12,background:"#25D366",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>{I.wa}</div>
                  <div><div style={{fontSize:12,color:"var(--g500)",marginBottom:2,textTransform:"uppercase",letterSpacing:"0.5px"}}>WhatsApp for Quick Response</div><div style={{fontSize:20,fontWeight:700,color:"var(--navy)",fontFamily:"var(--hd)"}}>Chat with Abhishek</div></div>
                </a>
              </div>

              <div style={{marginTop:24,padding:"20px",background:"var(--g50)",borderRadius:"var(--r)",border:"1px solid var(--g200)"}}>
                <div style={{fontSize:13,fontWeight:600,color:"var(--navy)",marginBottom:6}}>Abhishek Chauhan</div>
                <div style={{fontSize:13,color:"var(--g500)"}}>Home Loan Consultant · SBI Authorised Channel Partner</div>
                <div style={{fontSize:13,color:"var(--g500)",marginTop:4}}>Mon–Sat: 10 AM – 7 PM | Sunday: By Appointment</div>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="cta-b">
        <h2>Your Dream Home is One Step Away</h2>
        <p>₹0 processing fees · Compare 5+ banks · Expert guidance at zero cost</p>
        <div className="cta-b-btns">
          <a href={`tel:${PHONE}`} className="btn btn-w btn-lg">📞 Call Now — {PHONE}</a>
          <a href={WA} target="_blank" className="btn btn-lg" style={{background:"rgba(255,255,255,0.15)",color:"white",border:"2px solid rgba(255,255,255,0.3)"}}>💬 WhatsApp Abhishek</a>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="foot">
        <div className="foot-in">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
              <LogoSmall />
              <span style={{fontFamily:"var(--hd)",fontWeight:700,fontSize:17,color:"white"}}>Home Vision Finance</span>
            </div>
            <p>Your trusted home loan partner. SBI Authorised Channel Partner helping families across India get the best home loan deals with ₹0 processing fees.</p>
            <div style={{marginTop:16}}>
              <p style={{color:"white",fontWeight:600}}>Abhishek Chauhan</p>
              <p>📞 {PHONE}</p>
            </div>
          </div>
          <div>
            <h4>Loan Types</h4>
            <ul className="foot-links">
              {["Home Purchase","Resale Property","Balance Transfer","Loan Against Property","Plot Loan","Construction Loan","Top-Up Loan"].map(l =>
                <li key={l}><a href="#" onClick={e=>{e.preventDefault();go("loans")}}>{l}</a></li>
              )}
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="foot-links">
              {[["hero","Home"],["services","Why Us"],["emi","EMI Calculator"],["about","About"],["blogs","Blog"],["contact","Contact"]].map(([id,l]) =>
                <li key={id}><a href="#" onClick={e=>{e.preventDefault();go(id)}}>{l}</a></li>
              )}
            </ul>
          </div>
          <div>
            <h4>Partner Banks</h4>
            <ul className="foot-links">
              {BANKS.map(b =>
                <li key={b.name}><a href="#" onClick={e=>e.preventDefault()}>{b.name} {b.priority?"★ Partner":""}</a></li>
              )}
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Home Vision Finance. All rights reserved. | SBI Authorised Channel Partner</span>
          <span><a href="#" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none"}}>Privacy Policy</a> · <a href="#" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none"}}>Terms</a></span>
        </div>
      </footer>

      {/* ═══ WHATSAPP FLOAT ═══ */}
      <a href={WA} target="_blank" className="waf">
        {I.wa}
        <span className="waf-tt">💬 Chat on WhatsApp</span>
      </a>

      {/* ═══ MOBILE STICKY ═══ */}
      <div className="call-stk">
        <a href={`tel:${PHONE}`}>📞 Call Now</a>
        <a href={WA} target="_blank">💬 WhatsApp</a>
      </div>
    </>
  );
}