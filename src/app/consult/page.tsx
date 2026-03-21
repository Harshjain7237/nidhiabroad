"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";
import TypedHeading from "@/components/TypedHeading";

const sessions = [
  {
    id: "email",
    icon: "✉️",
    label: "Priority Email",
    duration: "Async",
    price: "€5",
    accent: "var(--teal)",
    description: "Send your question to nxhub.ai@gmail.com, get a focused written response within 48h. Ideal for quick decisions or a gut-check.",
    features: ["Written response within 48h", "One focused question", "Links or resources if relevant"],
    email: "nxhub.ai@gmail.com",
    calLink: null,
  },
  {
    id: "15min",
    icon: "⚡",
    label: "Clarity Call",
    duration: "15 min",
    price: "€12",
    accent: "var(--purple)",
    description: "Quick gut-check, one question, one direction. You leave knowing what to do next.",
    features: ["One focused question", "Honest, direct answer", "No fluff"],
    calLink: "nidhiabroad/15min",
    elementId: "cal-15min",
  },
  {
    id: "45min",
    icon: "🧭",
    label: "Deep Dive",
    duration: "45 min",
    price: "€30",
    accent: "var(--purple)",
    description: "Career crossroads, research together, tool options, thinking out loud. For when you need more than a quick answer.",
    features: ["Career crossroads exploration", "Research together", "Tool & option mapping", "Clear direction to leave with"],
    calLink: "nidhiabroad/30min",
    elementId: "cal-45min",
  },
  {
    id: "audit",
    icon: "📄",
    label: "CV / LinkedIn Audit",
    duration: "Async",
    price: "€10",
    accent: "var(--gold)",
    description: "You submit your CV and/or LinkedIn. I review it and record a Loom video walking through my feedback.",
    features: ["Full CV review", "LinkedIn profile audit", "Loom video feedback", "Delivered within 72h"],
    email: "nxhub.ai@gmail.com",
    calLink: null,
  },
  {
    id: "sprint",
    icon: "🔭",
    label: "Research Sprint + Follow-up",
    duration: "60 min",
    price: "€50",
    accent: "var(--rose)",
    description: "You're exploring a pivot, a tool, a market — we go deep together. The most thorough session, plus a free follow-up.",
    features: ["Market or role deep-dive", "Tool & resource mapping", "Pivot planning", "Written summary after", "Free follow-up included"],
    calLink: "nidhiabroad/30min",
    elementId: "cal-sprint",
  },
];

export default function ConsultPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeSession = sessions.find((s) => s.id === selected);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />

      <main style={{ position: "relative", zIndex: 1, paddingTop: 100 }}>

        {/* ── HEADER ── */}
        <section style={{ textAlign: "center", padding: "60px 24px 20px" }}>
          <span className="pill" style={{ marginBottom: 24 }}>✦ 1:1 Sessions with Nidhi</span>
          <TypedHeading text="Real talk. Actual direction." fontSize="clamp(2rem, 5vw, 3.2rem)" />
          <p style={{ color: "var(--grey1)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            Not a coaching programme. Not a course. A focused conversation with someone who has worked with professionals across India, Europe and the US and thinks about corporate confidence every day.
          </p>
        </section>

        {/* ── DISCLAIMER ── */}
        <section style={{ maxWidth: 680, margin: "0 auto", padding: "32px 24px 0" }}>
          <div style={{
            background: "rgba(240,165,0,0.07)",
            border: "1px solid rgba(240,165,0,0.2)",
            borderRadius: 14, padding: "20px 24px",
            color: "var(--grey1)", fontSize: 14, lineHeight: 1.75,
            fontStyle: "italic",
          }}>
            I don&apos;t help with visa applications. I&apos;m not a recruiter. I won&apos;t place you in a job.
            What I <em style={{ color: "var(--white)", fontStyle: "normal", fontWeight: 600 }}>can</em> do
            is help you think clearly, ask the right questions, and leave the call with a direction.
          </div>
        </section>

        {/* ── WHO THIS IS FOR / WHAT YOU LEAVE WITH ── */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="two-col-grid">

            <div className="glass-card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 17, marginBottom: 16, color: "var(--white)" }}>
                Who this is for
              </h3>
              {[
                "Ambitious professionals mid-pivot",
                "Curious students exploring the next phase in life",
                "People who need a thinking partner, not a coach",
                "Anyone stuck between options and needing honest input",
                "People exploring HR tech, corporate careers, or moving abroad",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--purple)", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✦</span>
                  <span style={{ color: "var(--grey1)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 17, marginBottom: 16, color: "var(--white)" }}>
                What you leave with
              </h3>
              {[
                "Clarity on your next move",
                "A short, actionable plan",
                "A list of tools and resources to explore",
                "Honest, unfiltered feedback",
                "A sounding board",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--gold)", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ color: "var(--grey1)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SESSION PICKER ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
          <h2 style={{
            fontFamily: "var(--font-head)", fontWeight: 700,
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            marginBottom: 8, color: "var(--white)",
          }}>
            Pick your session
          </h2>
          <p style={{ color: "var(--grey1)", fontSize: 14, marginBottom: 32 }}>
            Click to see details and book.
          </p>

          {!selected ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
              {sessions.map((s) => (
                <button key={s.id} onClick={() => setSelected(s.id)} style={{
                  all: "unset", cursor: "pointer", display: "block",
                  background: "#fff", border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 16, padding: "24px 20px", textAlign: "left",
                  transition: "var(--transition)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(123,104,238,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,104,238,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ fontSize: 28 }}>{s.icon}</span>
                    <span style={{
                      background: `${s.accent}18`, color: s.accent,
                      fontSize: 13, fontFamily: "var(--font-head)", fontWeight: 700,
                      padding: "3px 10px", borderRadius: 8,
                    }}>
                      {s.price}
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 16, color: "var(--white)", marginBottom: 4 }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--grey1)", marginBottom: 10 }}>
                    {s.duration}
                  </div>
                  <p style={{ color: "var(--grey1)", fontSize: 13, lineHeight: 1.65 }}>{s.description}</p>
                </button>
              ))}
            </div>
          ) : (
            <>
              <button onClick={() => setSelected(null)} style={{
                all: "unset", cursor: "pointer",
                color: "var(--grey1)", fontSize: 14, marginBottom: 28,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                ← Back to sessions
              </button>

              <div style={{
                background: "#fff", borderRadius: 20, padding: "32px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <span style={{ fontSize: 32 }}>{activeSession!.icon}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 20, color: "var(--white)" }}>
                      {activeSession!.label}
                    </div>
                    <div style={{ color: "var(--grey1)", fontSize: 13 }}>
                      {activeSession!.duration} · {activeSession!.price}
                    </div>
                  </div>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                  {activeSession!.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--purple)", flexShrink: 0 }}>✦</span>
                      <span style={{ color: "var(--grey1)", fontSize: 14 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {activeSession!.calLink ? (
                  <CalEmbed calLink={activeSession!.calLink} elementId={activeSession!.elementId!} />
                ) : (
                  <div style={{
                    textAlign: "center", padding: "40px 24px",
                    background: "var(--bg2)", borderRadius: 14,
                    border: "1px dashed var(--grey2)",
                  }}>
                    <p style={{ color: "var(--grey1)", fontSize: 15, marginBottom: 8 }}>
                      This session runs over email. Send your request to:
                    </p>
                    <p style={{
                      fontFamily: "var(--font-mono)", fontSize: 15,
                      color: "var(--purple)", fontWeight: 600, marginBottom: 24,
                    }}>
                      nxhub.ai@gmail.com
                    </p>
                    <a href="mailto:nxhub.ai@gmail.com" className="btn-primary no-underline" style={{ padding: "12px 28px", fontSize: 14 }}>
                      Email Nidhi →
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </section>

      </main>

      <style>{`
        @media (max-width: 600px) {
          .two-col-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}
