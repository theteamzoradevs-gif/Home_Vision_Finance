"use client";
import Link from "next/link";

const PHONE = "9911396575";
const WA = `https://wa.me/91${PHONE}?text=Hi%2C%20I%20need%20help%20with%20about%20details`;

export default function AboutPage() {
  return (
    <>
      {/* ═══ ABOUT HERO SECTION ═══ */}
      <section className="hero" style={{ marginTop: 74, padding: "100px 24px 60px", textRendering: "optimizeLegibility" }}>
        <div className="sec-in" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sec-l">Who We Are</div>
          <h1 style={{ fontFamily: "var(--hd)", fontSize: "42px", fontWeight: 800, color: "var(--navy)", marginBottom: "16px" }}>
            Making Your Home Loan Journey Stress-Free
          </h1>
          <p style={{ fontSize: "18px", color: "var(--g600)", lineHeight: "1.6", maxWidth: "750px" }}>
            Home Vision Finance is a certified premium financial consultancy group specializing in retail mortgages. As an authorized channel partner of leading institutions like the State Bank of India (SBI), we are dedicated to helping thousands of families lock down their dream homes with expert coordination and <strong>₹0 processing fee charges</strong>.
          </p>
        </div>
      </section>

      {/* ═══ WHY CHOOSE (DARK ACCENTED FROM ORIGINAL LANDING) ═══ */}
      <section className="sec why-sec" id="about-details" style={{ background: "var(--navy)", color: "white", padding: "80px 24px" }}>
        <div className="sec-in" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="sec-h" style={{ marginBottom: "48px" }}>
            <div className="sec-l" style={{ color: "var(--green-l)" }}>Our Process Strategy</div>
            <h2 className="sec-t" style={{ color: "white" }}>Why Families Trust Home Vision Finance</h2>
            <p className="sec-d" style={{ color: "rgba(255,255,255,0.6)" }}> With systematic industrial banking networks and a customer-first working approach, we expedite pipelines efficiently.</p>
          </div>

          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { t: "Fast File Login", d: "Your loan file gets logged in within 24–48 hours of document submission. No unnecessary delays." },
              { t: "Smooth Coordination", d: "End-to-end coordination between you, the bank, and the builder — zero confusion, zero runaround." },
              { t: "Regular Updates", d: "Track your loan status at every stage. No chasing banks, no guessing where your file stands." },
              { t: "Support Till Disbursement", d: "We don't stop at sanction. Full support from application to final disbursement into your account." },
              { t: "Builder & Broker Assistance", d: "Special support for real estate professionals — fast processing, attractive terms, dedicated handling." },
              { t: "Multi-Bank Access", d: "Compare rates across SBI, HDFC, ICICI, PNB & Bank of Baroda — pick the best deal for you." },
            ].map((w, i) => (
              <div key={i} className="why-card" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "28px", borderRadius: "16px" }}>
                <div className="why-num" style={{ fontSize: "36px", fontWeight: 800, color: "rgba(255,255,255,0.08)", marginBottom: "10px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 style={{ color: "white", marginBottom: "8px", fontSize: "18px" }}>{w.t}</h4>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: "1.55" }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS CORE INSIGHTS ═══ */}
      <section className="sec" style={{ padding: "80px 24px" }}>
        <div className="sec-in" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { n: "1000+", l: "Happy Customers" },
              { n: "₹500 Cr+", l: "Loans Facilitated" },
              { n: "4.8/5", l: "Customer Rating" },
              { n: "24–48 hrs", l: "Average Approval Time" },
            ].map((s, i) => (
              <div key={i} className="stat" style={{ textAlign: "center", padding: "24px", background: "white", border: "1px solid var(--g200)", borderRadius: "16px" }}>
                <div className="stat-n" style={{ fontSize: "34px", fontWeight: 800, color: "var(--blue)" }}>{s.n}</div>
                <div className="stat-l" style={{ color: "var(--g500)", fontSize: "14px", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CORE MISSION ACTION CALL ═══ */}
      <section className="sec" style={{ background: "var(--g50)", padding: "60px 24px", textAlign: "center" }}>
        <div className="sec-in" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: "var(--navy)", fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>Ready to talk to our Mortgage Expert?</h2>
          <p style={{ color: "var(--g600)", marginBottom: "24px" }}>Connect instantly with Abhishek Chauhan for premium application screening with absolute clarity.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${PHONE}`} className="btn btn-p">📞 Call +91 {PHONE}</a>
            <a href={WA} target="_blank" rel="noreferrer" className="btn btn-g">💬 Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}