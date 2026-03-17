"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";

const sessions = [
  {
    id: "15min",
    label: "Quick Clarity",
    duration: "15 min",
    price: "Free",
    calLink: "nidhiabroad/15min",
    elementId: "cal-15min",
    accent: "var(--teal)",
    description: "One focused question. Fast, honest direction.",
    best: "Best for: a specific question you're stuck on",
    features: ["Career path sanity check", "Quick resume or LinkedIn feedback", "Is this role / company right for me?"],
  },
  {
    id: "30min",
    label: "Deep Dive",
    duration: "30 min",
    price: "Paid",
    calLink: "nidhiabroad/30min",
    elementId: "cal-30min",
    accent: "var(--gold)",
    description: "Full strategy session. Walk away with a clear plan.",
    best: "Best for: career pivots, job search strategy, international moves",
    features: ["Full career strategy", "Resume + LinkedIn audit", "HR tech industry insights", "Action plan with next steps"],
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
        <section style={{ textAlign: "center", padding: "60px 24px 48px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(155, 109, 255, 0.12)",
              border: "1px solid rgba(155, 109, 255, 0.3)",
              borderRadius: 100,
              padding: "6px 18px",
              fontSize: 12,
              color: "var(--purple-hi)",
              letterSpacing: "0.08em",
              marginBottom: 24,
              fontFamily: "var(--font-mono)",
            }}
          >
            ✦ 1:1 Coaching with Nidhi
          </span>

          <h1
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            <span className="gradient-brand">Real talk.</span> Actual answers.
          </h1>

          <p style={{ color: "var(--grey1)", fontSize: 17, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Not a generic coaching call. A focused conversation with someone
            who works in HR tech in Europe and has navigated it herself.
          </p>
        </section>

        {/* ── SESSION PICKER ── */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 60px" }}>

          {!selected ? (
            <>
              <p style={{ textAlign: "center", color: "var(--grey1)", fontSize: 14, marginBottom: 32 }}>
                Choose the session that fits your need ↓
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                {sessions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelected(s.id)}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      display: "block",
                      background: "rgba(26, 26, 36, 0.6)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid ${s.accent}40`,
                      borderRadius: 20,
                      padding: "36px 32px",
                      textAlign: "left",
                      transition: "var(--transition)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.border = `1px solid ${s.accent}90`;
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${s.accent}20`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.border = `1px solid ${s.accent}40`;
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: s.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                          {s.duration}
                        </div>
                        <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 22, color: "var(--white)" }}>
                          {s.label}
                        </div>
                      </div>
                      <span
                        style={{
                          background: s.accent + "22",
                          color: s.accent,
                          borderRadius: 8,
                          padding: "4px 12px",
                          fontSize: 12,
                          fontFamily: "var(--font-head)",
                          fontWeight: 600,
                        }}
                      >
                        {s.price}
                      </span>
                    </div>

                    <p style={{ color: "var(--grey1)", fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                      {s.description}
                    </p>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                      {s.features.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--grey1)", fontSize: 13 }}>
                          <span style={{ color: s.accent, flexShrink: 0 }}>✦</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div style={{ fontSize: 11, color: "var(--grey1)", fontFamily: "var(--font-mono)", marginBottom: 20 }}>
                      {s.best}
                    </div>

                    <div
                      style={{
                        display: "inline-block",
                        padding: "10px 24px",
                        borderRadius: 10,
                        background: s.accent + "22",
                        color: s.accent,
                        fontSize: 13,
                        fontFamily: "var(--font-head)",
                        fontWeight: 600,
                      }}
                    >
                      Book this session →
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Back button + calendar */}
              <button
                onClick={() => setSelected(null)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--grey1)",
                  fontSize: 14,
                  marginBottom: 32,
                  fontFamily: "var(--font-body)",
                }}
              >
                ← Back to sessions
              </button>

              <div
                style={{
                  background: "rgba(26, 26, 36, 0.6)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${activeSession!.accent}40`,
                  borderRadius: 20,
                  padding: "32px",
                  marginBottom: 24,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: activeSession!.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {activeSession!.duration} · {activeSession!.price}
                    </div>
                    <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 20, color: "var(--white)", marginTop: 4 }}>
                      {activeSession!.label} with Nidhi
                    </div>
                  </div>
                </div>

                <CalEmbed calLink={activeSession!.calLink} elementId={activeSession!.elementId} />
              </div>
            </>
          )}
        </section>

        {/* ── WHAT TO EXPECT ── */}
        {!selected && (
          <section
            style={{
              maxWidth: 680,
              margin: "0 auto",
              padding: "0 24px 100px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                marginBottom: 12,
              }}
            >
              What people bring to these calls
            </h2>
            <p style={{ color: "var(--grey1)", fontSize: 14, lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>
              Career pivots · Breaking into HR tech · Moving abroad for work · Building a personal brand ·
              Resume + LinkedIn strategy · Navigating corporate culture · What to do next
            </p>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
