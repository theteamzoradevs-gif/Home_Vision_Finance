export const landingCss = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --navy: #050506;
  --navy-l: #0a0a0c;
  --blue: #5E6AD2;
  --blue-l: #6872D9;
  --blue-pale: rgba(94, 106, 210, 0.12);
  --sbi: #5E6AD2;
  --green: #22c55e;
  --green-l: #4ade80;
  --green-pale: rgba(34, 197, 94, 0.12);
  --orange: #fbbf24;
  --red-badge: #ef4444;
  --white: #EDEDEF;
  --on-accent: #ffffff;
  --g50: #0a0a0c;
  --g100: rgba(255, 255, 255, 0.04);
  --g200: rgba(255, 255, 255, 0.06);
  --g300: rgba(255, 255, 255, 0.1);
  --g400: #8A8F98;
  --g500: #8A8F98;
  --g600: rgba(237, 237, 239, 0.75);
  --g700: #EDEDEF;
  --g800: #EDEDEF;
  --r: 12px;
  --rl: 16px;
  --rxl: 20px;
  --sh: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 2px 20px rgba(0, 0, 0, 0.4);
  --shl: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 40px rgba(0, 0, 0, 0.5), 0 0 80px rgba(94, 106, 210, 0.1);
  --shxl: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 12px 48px rgba(0, 0, 0, 0.55), 0 0 60px rgba(94, 106, 210, 0.08);
  --hd: 'Plus Jakarta Sans', sans-serif;
  --bd: 'DM Sans', sans-serif;
  --mw: 1200px;
  --tr: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
*{margin:0;padding:0;box-sizing:border-box}
body,html{font-family:var(--bd);color:var(--g800);background:radial-gradient(ellipse at top,#0a0a0f 0%,#050506 50%,#020203 100%);background-attachment:fixed;scroll-behavior:smooth;-webkit-font-smoothing:antialiased}

/* ── NAV ── */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(5,5,6,0.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--g200);transition:var(--tr)}
.nav.scrolled{box-shadow:var(--sh)}
.nav-in{max-width:var(--mw);margin:0 auto;padding:0 24px;height:72px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;font-family:var(--hd);font-weight:700;font-size:18px;color:var(--white)}
.nav-logo span{color:var(--blue)}
.nav-links{display:flex;align-items:center;gap:28px;list-style:none}
.nav-links a{text-decoration:none;color:var(--g500);font-weight:500;font-size:14px;transition:var(--tr);position:relative;padding:4px 0}
.nav-links a:hover,.nav-links a.active{color:var(--blue-l)}
.nav-cta{display:flex;align-items:center;gap:10px}
.nav-ph{display:flex;align-items:center;gap:6px;color:var(--blue-l);font-weight:600;font-size:13px;text-decoration:none;background:var(--blue-pale);padding:8px 14px;border-radius:100px;border:1px solid rgba(94,106,210,0.25);transition:var(--tr)}
.nav-ph:hover{background:var(--blue);color:var(--on-accent)}
.mmb{display:none;background:none;border:none;cursor:pointer;color:var(--white);padding:4px}

/* ── BUTTONS ── */
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:var(--r);font-family:var(--bd);font-weight:600;font-size:15px;cursor:pointer;border:none;transition:var(--tr);text-decoration:none;white-space:nowrap}
.btn-p{background:var(--blue);color:var(--on-accent);box-shadow:0 0 0 1px rgba(94,106,210,0.5),0 4px 12px rgba(94,106,210,0.3),inset 0 1px 0 rgba(255,255,255,0.2)}
.btn-p:hover{background:var(--blue-l);box-shadow:0 0 0 1px rgba(94,106,210,0.6),0 6px 20px rgba(94,106,210,0.35),inset 0 1px 0 rgba(255,255,255,0.2);transform:translateY(-2px)}
.btn-g{background:var(--green);color:var(--on-accent);box-shadow:0 4px 14px rgba(34,197,94,0.3)}
.btn-g:hover{background:var(--green-l);transform:translateY(-2px)}
.btn-o{background:transparent;color:var(--blue-l);border:2px solid rgba(94,106,210,0.45)}
.btn-o:hover{background:var(--blue);color:var(--on-accent);border-color:var(--blue)}
.btn-w{background:rgba(255,255,255,0.08);color:var(--white);border:1px solid var(--g200);box-shadow:var(--sh)}
.btn-w:hover{transform:translateY(-2px);box-shadow:var(--shl);background:rgba(255,255,255,0.12)}
.btn-sm{padding:10px 20px;font-size:14px}
.btn-lg{padding:16px 36px;font-size:16px}

/* ── USP RIBBON ── */
.usp-ribbon{background:linear-gradient(135deg,#020203 0%,#0a0a0c 100%);color:var(--white);padding:14px 24px;position:fixed;top:0;left:0;right:0;z-index:1001;border-bottom:1px solid var(--g200)}
.usp-ribbon-in{max-width:var(--mw);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.usp-ribbon-copy{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:700;letter-spacing:0.2px}
.usp-ribbon-copy strong{color:#86efac;font-weight:800;font-size:20px}
.usp-ribbon-copy svg{color:#86efac;flex-shrink:0}
.usp-ribbon-ctas{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.usp-ribbon-ctas .btn{padding:10px 16px;font-size:13px}
.usp-ribbon-ctas .btn-o{border-color:rgba(255,255,255,0.35);color:white}
.usp-ribbon-ctas .btn-o:hover{background:rgba(255,255,255,0.12);color:white;border-color:white}

/* ── HERO ── */
.hero{padding:140px 24px 80px;background:linear-gradient(135deg,#050506 0%,rgba(94,106,210,0.08) 45%,#020203 100%);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(94,106,210,0.18) 0%,transparent 70%);border-radius:50%}
.hero-in{max-width:var(--mw);margin:0 auto;display:grid;grid-template-columns:1fr 440px;gap:60px;align-items:center;position:relative;z-index:1}
.hero-sbi{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,rgba(94,106,210,0.16),rgba(94,106,210,0.06));border:1.5px solid rgba(94,106,210,0.35);padding:8px 18px;border-radius:100px;font-size:13px;font-weight:700;color:var(--blue-l);margin-bottom:20px}
.hero-sbi .sbi-dot{width:8px;height:8px;border-radius:50%;background:var(--green);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.3)}}
.hero h1{font-family:var(--hd);font-weight:800;font-size:46px;line-height:1.2;color:var(--white);margin-bottom:16px}

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
  background: rgba(94, 106, 210, 0.2);
  border-radius: 3px;
}

.hero-sub{font-size:17px;color:var(--g600);line-height:1.65;margin-bottom:20px;max-width:480px}
.hero-type-tags{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}
.hero-type-tag{padding:6px 14px;background:rgba(255,255,255,0.05);border:1px solid var(--g200);border-radius:100px;font-size:13px;font-weight:600;color:var(--g600);transition:var(--tr)}
.hero-type-tag:hover{border-color:rgba(94,106,210,0.45);color:var(--blue-l);background:var(--blue-pale)}

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
.hero-rate-box{display:inline-flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03));border:1px solid var(--g200);color:var(--white);padding:14px 24px;border-radius:var(--r);font-size:14px}
.hero-rate-box strong{font-size:22px;color:var(--green-l);font-family:var(--hd)}

/* ── LEAD FORM ── */
.lf{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));border-radius:var(--rxl);padding:32px;box-shadow:var(--shxl);border:1px solid var(--g200);position:relative;overflow:hidden;backdrop-filter:blur(12px)}
.lf::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--blue),var(--blue-l))}
.lf h3{font-family:var(--hd);font-size:22px;font-weight:700;color:var(--white);margin-bottom:4px}
.lf>p{font-size:14px;color:var(--g500);margin-bottom:20px}
.fg{margin-bottom:14px}
.fg label{display:block;font-size:12px;font-weight:600;color:var(--g600);margin-bottom:5px;text-transform:uppercase;letter-spacing:0.5px}
.fg input,.fg select{width:100%;padding:12px 14px;border:1.5px solid rgba(255,255,255,0.1);border-radius:var(--r);font-size:15px;font-family:var(--bd);color:var(--g800);background:#0F0F12;transition:var(--tr);outline:none}
.fg input:focus,.fg select:focus{border-color:var(--blue);background:#0F0F12;box-shadow:0 0 0 3px rgba(94,106,210,0.25)}
.fg input::placeholder{color:var(--g400)}
.f-sub{width:100%;padding:14px;background:linear-gradient(135deg,var(--green),#15803d);color:white;border:none;border-radius:var(--r);font-size:16px;font-weight:700;font-family:var(--bd);cursor:pointer;transition:var(--tr);box-shadow:0 4px 14px rgba(22,163,74,0.35)}
.f-sub:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(22,163,74,0.45)}
.f-trust{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--g400);margin-top:10px;justify-content:center}
.f-trust svg{width:14px;height:14px;color:var(--green)}
.f-or{text-align:center;padding:10px 0;font-size:12px;color:var(--g400);font-weight:500}
.f-wa{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px;background:#25D366;color:white;border:none;border-radius:var(--r);font-size:14px;font-weight:600;font-family:var(--bd);cursor:pointer;transition:var(--tr);text-decoration:none}
.f-wa:hover{background:#20bd5a;transform:translateY(-1px)}

/* ── SBI PRIORITY BANNER ── */
.sbi-banner{padding:48px 24px;background:linear-gradient(135deg,rgba(94,106,210,0.06),rgba(94,106,210,0.12));border-bottom:1px solid var(--g200)}
.sbi-banner-in{max-width:var(--mw);margin:0 auto;display:flex;align-items:center;gap:48px;flex-wrap:wrap}
.sbi-main{flex:1;min-width:300px}
.sbi-badge-lg{display:inline-flex;align-items:center;gap:10px;background:var(--sbi);color:white;padding:10px 20px;border-radius:var(--r);font-weight:700;font-size:14px;margin-bottom:16px}
.sbi-badge-lg svg{width:18px;height:18px}
.sbi-main h3{font-family:var(--hd);font-size:26px;font-weight:700;color:var(--white);margin-bottom:8px}
.sbi-main p{font-size:15px;color:var(--g500);line-height:1.6;max-width:500px}
.sbi-other{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.sbi-other-label{font-size:12px;font-weight:600;color:var(--g400);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
.banks-chips{display:flex;gap:10px;flex-wrap:wrap}
.bchip{display:flex;align-items:center;gap:8px;padding:10px 18px;background:rgba(255,255,255,0.05);border:1.5px solid var(--g200);border-radius:var(--r);font-weight:600;font-size:14px;color:var(--g600);transition:var(--tr);cursor:pointer}
.bchip:hover{border-color:rgba(94,106,210,0.45);box-shadow:0 4px 12px rgba(94,106,210,0.15);transform:translateY(-2px)}
.bchip .bdot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.bchip.sbi-chip{border-color:rgba(94,106,210,0.45);background:linear-gradient(135deg,rgba(94,106,210,0.12),rgba(255,255,255,0.04));position:relative}
.bchip.sbi-chip::after{content:'★ Authorised Partner';position:absolute;top:-10px;right:-8px;background:var(--green);color:white;font-size:9px;font-weight:700;padding:2px 8px;border-radius:100px;letter-spacing:0.3px}

/* ── SECTION ── */
.sec{padding:80px 24px}
.sec-in{max-width:var(--mw);margin:0 auto}
.sec-l{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--blue);margin-bottom:8px}
.sec-t{font-family:var(--hd);font-size:36px;font-weight:700;color:var(--white);margin-bottom:12px;line-height:1.2}
.sec-d{font-size:16px;color:var(--g500);max-width:560px;line-height:1.6}
.sec-h{margin-bottom:48px}
.sec-h.c{text-align:center}
.sec-h.c .sec-d{margin:0 auto}

/* ── USP CARDS ── */
.usp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.usp-card{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));border:1.5px solid var(--g200);border-radius:var(--rl);padding:28px;transition:var(--tr);cursor:default;position:relative;overflow:hidden}
.usp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--blue);transform:scaleX(0);transition:var(--tr);transform-origin:left}
.usp-card:hover{border-color:rgba(94,106,210,0.35);box-shadow:var(--shl);transform:translateY(-4px)}
.usp-card:hover::before{transform:scaleX(1)}
.usp-card.highlight{border-color:rgba(34,197,94,0.35);background:linear-gradient(135deg,rgba(34,197,94,0.12),rgba(255,255,255,0.03))}
.usp-card.highlight::before{background:var(--green);transform:scaleX(1)}
.usp-card.highlight .usp-icon{background:var(--green);color:var(--on-accent)}
.usp-icon{width:48px;height:48px;border-radius:12px;background:var(--blue-pale);color:var(--blue-l);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:var(--tr)}
.usp-card:hover .usp-icon{transform:scale(1.1) rotate(-3deg)}
.usp-card h4{font-family:var(--hd);font-size:18px;font-weight:600;color:var(--white);margin-bottom:8px}
.usp-card p{font-size:14px;color:var(--g500);line-height:1.55}
.usp-card .free-tag{display:inline-block;margin-top:10px;padding:4px 10px;background:var(--green);color:white;border-radius:100px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px}

/* ── LOAN TYPES ── */
.lt-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
.lt-card{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));border:1.5px solid var(--g200);border-radius:var(--rl);padding:28px;transition:var(--tr);cursor:pointer;position:relative;overflow:hidden}
.lt-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--blue-l));transform:scaleX(0);transition:var(--tr);transform-origin:left}
.lt-card:hover{border-color:rgba(94,106,210,0.35);box-shadow:var(--shl);transform:translateY(-4px)}
.lt-card:hover::after{transform:scaleX(1)}
.lt-icon{width:48px;height:48px;border-radius:12px;background:var(--blue-pale);color:var(--blue-l);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:var(--tr)}
.lt-card:hover .lt-icon{background:var(--blue);color:var(--on-accent);transform:scale(1.1)}
.lt-card h4{font-family:var(--hd);font-size:17px;font-weight:600;color:var(--white);margin-bottom:6px}
.lt-card p{font-size:14px;color:var(--g500);line-height:1.5;margin-bottom:14px}
.lt-link{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--blue);text-decoration:none;transition:var(--tr)}
.lt-link:hover{gap:10px}

/* ── PROCESS ── */
.pr-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative}
.pr-grid::before{content:'';position:absolute;top:36px;left:12.5%;right:12.5%;height:2px;background:linear-gradient(90deg,var(--blue),var(--green));z-index:0;opacity:0.3}
.pr-step{text-align:center;position:relative;z-index:1}
.pr-num{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--navy-l));color:var(--on-accent);display:flex;align-items:center;justify-content:center;font-family:var(--hd);font-weight:700;font-size:20px;margin:0 auto 16px;border:4px solid #050506;box-shadow:var(--sh);transition:var(--tr)}
.pr-step:hover .pr-num{transform:scale(1.1);box-shadow:var(--shl)}
.pr-step h4{font-family:var(--hd);font-size:15px;font-weight:600;color:var(--white);margin-bottom:6px}
.pr-step p{font-size:13px;color:var(--g500);line-height:1.4}

/* ── WHY CHOOSE (DARK) ── */
.why-sec{background:linear-gradient(180deg,#020203 0%,#050506 100%);color:var(--white)}
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
.emi-form{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));padding:32px;border-radius:var(--rxl);box-shadow:var(--sh);border:1px solid var(--g200)}
.emi-sg{margin-bottom:28px}
.emi-sl{display:flex;justify-content:space-between;margin-bottom:10px}
.emi-sl span{font-size:14px;font-weight:500;color:var(--g600)}
.emi-sl strong{font-size:16px;font-weight:700;color:var(--white)}
.emi-range{-webkit-appearance:none;width:100%;height:6px;background:var(--g200);border-radius:3px;outline:none;transition:var(--tr)}
.emi-range::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;background:var(--blue);border-radius:50%;cursor:pointer;box-shadow:0 2px 10px rgba(94,106,210,0.35);transition:var(--tr)}
.emi-range::-webkit-slider-thumb:hover{transform:scale(1.15);box-shadow:0 4px 14px rgba(94,106,210,0.45)}
.emi-rng{display:flex;justify-content:space-between;font-size:11px;color:var(--g400);margin-top:4px}
.emi-res{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));padding:32px;border-radius:var(--rxl);box-shadow:var(--sh);border:1px solid var(--g200)}
.emi-res h3{font-family:var(--hd);font-size:18px;font-weight:600;color:var(--white);margin-bottom:24px}
.emi-amt{font-family:var(--hd);font-size:44px;font-weight:800;color:var(--blue);margin-bottom:6px}
.emi-amt-l{font-size:14px;color:var(--g500);margin-bottom:24px}
.emi-donut-w{display:flex;align-items:center;gap:24px;margin:20px 0;padding:20px;background:var(--g50);border-radius:var(--r)}
.emi-donut{position:relative;width:120px;height:120px;flex-shrink:0}
.emi-donut svg{transform:rotate(-90deg)}
.emi-donut-c{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}
.emi-donut-c small{font-size:10px;color:var(--g400);display:block}
.emi-donut-c strong{font-size:12px;font-weight:700;color:var(--white)}
.emi-leg{display:flex;flex-direction:column;gap:14px}
.emi-leg-i{display:flex;align-items:center;gap:10px;font-size:13px}
.emi-leg-d{width:12px;height:12px;border-radius:3px;flex-shrink:0}
.emi-bd{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;padding-top:20px;border-top:1px solid var(--g200)}
.emi-bd-i span{display:block;font-size:11px;color:var(--g500);margin-bottom:3px;text-transform:uppercase;letter-spacing:0.3px}
.emi-bd-i strong{font-size:15px;font-weight:700;color:var(--white)}

/* ── BROKER ── */
.broker{background:linear-gradient(135deg,var(--blue) 0%,#020203 100%);color:var(--white)}
.broker-in{display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap}
.broker-in h2{font-family:var(--hd);font-size:30px;font-weight:700;margin-bottom:10px}
.broker-in p{font-size:15px;opacity:0.8;max-width:480px;line-height:1.6}

/* ── TESTIMONIALS ── */
.rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.rev-card{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));border:1.5px solid var(--g200);border-radius:var(--rl);padding:28px;transition:var(--tr)}
.rev-card:hover{box-shadow:var(--shl);transform:translateY(-3px)}
.rev-stars{display:flex;gap:2px;color:var(--orange);margin-bottom:14px}
.rev-card .rev-txt{font-size:15px;color:var(--g600);line-height:1.6;margin-bottom:20px;font-style:italic}
.rev-author{display:flex;align-items:center;gap:12px}
.rev-av{width:40px;height:40px;border-radius:50%;background:var(--blue-pale);color:var(--blue-l);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}
.rev-name{font-weight:600;font-size:14px;color:var(--white)}
.rev-city{font-size:12px;color:var(--g400)}

/* ── STATS ── */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:48px 0}
.stat{text-align:center;padding:24px;background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));border-radius:var(--rl);border:1px solid var(--g200);transition:var(--tr)}
.stat:hover{box-shadow:var(--sh);transform:translateY(-3px)}
.stat-n{font-family:var(--hd);font-size:34px;font-weight:800;color:var(--blue-l);margin-bottom:4px}
.stat-l{font-size:13px;color:var(--g500);font-weight:500}

/* ── DOCS ── */
.docs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px}
.doc-item{display:flex;align-items:center;gap:14px;padding:16px 20px;background:rgba(255,255,255,0.05);border:1.5px solid var(--g200);border-radius:var(--r);transition:var(--tr);cursor:default}
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
.foot{background:#020203;color:rgba(237,237,239,0.65);padding:60px 24px 30px;border-top:1px solid var(--g200)}
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
.waf-tt{position:absolute;right:68px;top:50%;transform:translateY(-50%);background:#0a0a0c;color:var(--g800);padding:8px 14px;border-radius:8px;font-size:13px;font-weight:600;white-space:nowrap;box-shadow:var(--sh);border:1px solid var(--g200);opacity:0;transition:var(--tr);pointer-events:none}
.waf:hover .waf-tt{opacity:1}

/* ── CALL STICKY MOBILE ── */
.call-stk{display:none;position:fixed;bottom:0;left:0;right:0;z-index:998;background:var(--navy);padding:10px 16px;gap:10px;align-items:center;justify-content:center}
.call-stk a{display:flex;align-items:center;justify-content:center;gap:6px;color:white;text-decoration:none;font-weight:600;font-size:14px;flex:1;padding:10px;border-radius:8px;transition:var(--tr)}
.call-stk a:first-child{background:var(--blue)}
.call-stk a:last-child{background:#25D366}

/* ── MOBILE OVERLAY ── */
.mob-ov{display:none;position:fixed;inset:0;z-index:1001;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px)}
.mob-ov.open{display:block}
.mob-dr{position:absolute;top:0;right:0;width:300px;height:100%;background:rgba(5,5,6,0.98);backdrop-filter:blur(20px);padding:24px;box-shadow:var(--shxl);border-left:1px solid var(--g200)}
.mob-dr-cl{display:flex;justify-content:flex-end;margin-bottom:20px}
.mob-dr-cl button{background:none;border:none;cursor:pointer;color:var(--g500)}
.mob-dr a{display:block;padding:14px 0;font-size:16px;font-weight:500;color:var(--g600);text-decoration:none;border-bottom:1px solid var(--g100)}
.mob-dr a:hover{color:var(--blue-l)}

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
