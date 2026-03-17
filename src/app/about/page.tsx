import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ─── EDITABLE STORY CONTENT ─────────────────────────────────────────────────
// Harsh: edit the paragraphs below and send back the final version.
// Each paragraph renders as its own block on the page.

const storyParagraphs = [
  `I grew up in India knowing I wanted more than what was in front of me — not in a restless way, but in a "there's a bigger world out there and I want to actually live in it" kind of way. I just didn't know how to get there, or what it would take.`,

  `After years of working in the corporate world — including stints close to the CEO office where I saw how decisions really get made — I made the leap. I moved to Germany and landed a role in HR Tech at Mobile.de. And that's when everything clicked: the career skills I'd built were portable. Geography was never the constraint I thought it was.`,

  `But getting here wasn't a straight line. There were visa rejections, bad advice, endless Google rabbit holes that led nowhere, and a lot of "figure it out yourself" moments that nobody prepares you for. I started @nidhiabroad because I didn't want anyone else to go through that alone.`,

  `Today I write about corporate confidence, HR tech, AI trends, and what it actually takes to build a career that belongs anywhere. Not the glossy version. The real one — with the wrong turns included.`,
];

// ─── CREDIBILITY MARKERS ─────────────────────────────────────────────────────
const credentials = [
  { icon: "🏢", label: "HR Tech PM", sub: "Mobile.de · Germany" },
  { icon: "📋", label: "Ex-CEO Office", sub: "Corporate strategy" },
  { icon: "📱", label: "10K+ followers", sub: "In 2 months" },
  { icon: "📬", label: "Inner Circle", sub: "Bi-weekly newsletter" },
];

// ─── TOPICS SHE COVERS ───────────────────────────────────────────────────────
const topics = [
  "Corporate Confidence",
  "HR Tech",
  "AI & Future of Work",
  "Career Pivots",
  "International Careers",
  "Personal Branding",
  "Non-linear Career Paths",
  "Salary & Negotiation",
];

export const metadata = {
  title: "About Nidhi — nidhiabroad",
  description: "HR Tech PM in Germany. Writing about corporate confidence, HR tech, and building careers that belong anywhere.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />

      <main style={{ position: "relative", zIndex: 1, paddingTop: 100 }}>

        {/* ── HERO ── */}
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="about-grid"
          >

            {/* Photo */}
            <div style={{ position: "relative" }}>
              {/* Glow behind photo */}
              <div style={{
                position: "absolute", inset: -2,
                background: "linear-gradient(135deg, #9B6DFF40, #F5C84220)",
                borderRadius: 24, filter: "blur(20px)",
              }} />
              <div style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 20,
                overflow: "hidden",
                background: "var(--bg3)",
                border: "1px solid rgba(155,109,255,0.2)",
              }}>
                {/* Swap src to "/nidhi.jpg" once you add the photo to /public */}
                <div style={{
                  width: "100%", height: "100%",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: 12,
                }}>
                  <span style={{ fontSize: 64 }}>🙋‍♀️</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "var(--grey1)", letterSpacing: "0.08em",
                  }}>
                    Add photo to /public/nidhi.jpg
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: 20, left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(10,10,15,0.9)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(155,109,255,0.25)",
                borderRadius: 12, padding: "10px 20px",
                whiteSpace: "nowrap", textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 14, color: "var(--white)" }}>
                  Nidhi Duhan
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--purple-hi)", marginTop: 2 }}>
                  HR Tech PM · Mobile.de · 🇩🇪
                </div>
              </div>
            </div>

            {/* Intro text */}
            <div>
              <span style={{
                display: "inline-block",
                background: "rgba(155, 109, 255, 0.12)",
                border: "1px solid rgba(155, 109, 255, 0.3)",
                borderRadius: 100, padding: "6px 18px",
                fontSize: 12, color: "var(--purple-hi)",
                letterSpacing: "0.08em", marginBottom: 24,
                fontFamily: "var(--font-mono)",
              }}>
                ✦ India → Germany
              </span>

              <h1 style={{
                fontFamily: "var(--font-head)", fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15, marginBottom: 20,
              }}>
                Hi, I&apos;m Nidhi.{" "}
                <span className="gradient-brand">I figured it out</span>
                {" "}so you don&apos;t have to start from zero.
              </h1>

              <p style={{ color: "var(--grey1)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                HR Tech PM in Germany. Writing about corporate confidence, the future of HR tech, AI trends, and what it really takes to build a career without borders.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/consult" className="btn-primary px-6 py-3 text-sm no-underline">
                  Book a call →
                </Link>
                <a
                  href="https://substack.com/@nidhiabroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "12px 24px", borderRadius: "var(--radius)",
                    border: "1px solid rgba(155,109,255,0.3)",
                    color: "var(--white)", fontSize: 14,
                    textDecoration: "none", transition: "var(--transition)",
                  }}
                  className="hover:bg-[#1A1A24]"
                >
                  Read the newsletter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CREDENTIAL STRIP ── */}
        <section style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "32px 24px",
        }}>
          <div style={{
            maxWidth: 900, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 24, textAlign: "center",
          }}>
            {credentials.map((c) => (
              <div key={c.label}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 15, color: "var(--white)" }}>
                  {c.label}
                </div>
                <div style={{ color: "var(--grey1)", fontSize: 12, marginTop: 3 }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── STORY ── */}
        <section style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px" }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--purple)", letterSpacing: "0.12em",
            textTransform: "uppercase", display: "block", marginBottom: 16,
          }}>
            The story
          </span>
          <h2 style={{
            fontFamily: "var(--font-head)", fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            marginBottom: 40, lineHeight: 1.2,
          }}>
            The real version — wrong turns included.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {storyParagraphs.map((para, i) => (
              <p key={i} style={{
                color: i === 0 ? "var(--white)" : "var(--grey1)",
                fontSize: i === 0 ? 17 : 15,
                lineHeight: 1.85,
                fontWeight: i === 0 ? 500 : 400,
              }}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ── TOPICS ── */}
        <section style={{
          background: "rgba(26,26,36,0.4)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "64px 24px",
        }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--gold)", letterSpacing: "0.12em",
              textTransform: "uppercase", display: "block", marginBottom: 16,
            }}>
              What I write about
            </span>
            <h2 style={{
              fontFamily: "var(--font-head)", fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)", marginBottom: 36,
            }}>
              Careers · Confidence · The future of work
            </h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {topics.map((t) => (
                <span key={t} style={{
                  padding: "8px 18px", borderRadius: 100,
                  background: "rgba(155,109,255,0.08)",
                  border: "1px solid rgba(155,109,255,0.2)",
                  color: "var(--purple-hi)", fontSize: 13,
                  fontFamily: "var(--font-head)", fontWeight: 500,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "80px 24px 100px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-head)", fontWeight: 800,
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 12,
          }}>
            Ready to move faster?
          </h2>
          <p style={{ color: "var(--grey1)", fontSize: 15, marginBottom: 36, maxWidth: 400, margin: "0 auto 36px" }}>
            Book a focused call or subscribe to the Inner Circle newsletter. Both are the fastest way in.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/consult" className="btn-primary px-8 py-3 text-sm no-underline">
              Book a call →
            </Link>
            <Link href="/guides" style={{
              padding: "12px 32px", borderRadius: "var(--radius)",
              border: "1px solid rgba(155,109,255,0.3)",
              color: "var(--white)", fontSize: 14, textDecoration: "none",
            }}
            className="hover:bg-[#1A1A24]"
            >
              Browse the guides
            </Link>
          </div>
        </section>

      </main>

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}
