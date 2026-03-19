import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TypedHeading from "@/components/TypedHeading";

const offerings = [
  {
    icon: "🎯",
    tag: "1:1 Coaching",
    title: "Talk to someone already there",
    desc: "A focused call with Nidhi. Career pivots, corporate confidence, HR tech — specific answers for your exact situation.",
    href: "/consult",
    cta: "Book a session",
    accent: "var(--purple)",
  },
  {
    icon: "📖",
    tag: "Guides & Series",
    title: "Resources that move you forward",
    desc: "Career series, roadmaps, and tools. Built from real experience inside corporate and HR tech.",
    href: "/guides",
    cta: "Browse guides",
    accent: "var(--gold)",
  },
  {
    icon: "📬",
    tag: "Inner Circle",
    title: "The newsletter worth reading",
    desc: "Corporate confidence, HR tech, AI trends, bi-weekly. The stuff that doesn't make it to Instagram.",
    href: "https://substack.com/@nidhiabroad",
    cta: "Subscribe free",
    accent: "var(--teal)",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "120px 24px 80px",
        }}>
          <span className="pill" style={{ marginBottom: 32 }}>
            ✦ HR Tech · Corporate Confidence · Global Careers
          </span>

          <TypedHeading />

          <p style={{
            color: "var(--grey1)",
            fontSize: "clamp(15px, 2vw, 18px)",
            maxWidth: 540, marginBottom: 16, lineHeight: 1.75,
            fontStyle: "italic",
          }}>
            Not a recruiter. Not a visa guide. Just clarity.
          </p>
          <p style={{
            color: "var(--grey1)",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            maxWidth: 520, marginBottom: 44, lineHeight: 1.75,
          }}>
            I&apos;m a sounding board for ambitious professionals figuring out their next move — in tech, in corporate, and in their own heads.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/consult" className="btn-primary px-8 py-3 text-sm no-underline">
              Book a call →
            </Link>
            <Link href="/guides" style={{
              padding: "12px 32px", borderRadius: "var(--radius)",
              border: "1px solid rgba(123,104,238,0.3)",
              color: "var(--white)", fontSize: 14, textDecoration: "none",
              transition: "var(--transition)", background: "transparent",
            }}
            className="hover:bg-[#F1EDE6]"
            >
              Browse guides
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, marginTop: 72, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { value: "10K+", label: "Followers in 2 months" },
              { value: "🇩🇪", label: "HR Tech PM, Germany" },
              { value: "3", label: "Content series running" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div className="gradient-brand" style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 30 }}>
                  {s.value}
                </div>
                <div style={{ color: "var(--grey1)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT NIDHI (first, before offerings) ── */}
        <section style={{
          background: "var(--bg2)",
          borderTop: "1px solid rgba(0,0,0,0.05)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          padding: "80px 24px",
        }}>
          <div style={{
            maxWidth: 960, margin: "0 auto",
            display: "grid", gridTemplateColumns: "280px 1fr",
            gap: 56, alignItems: "center",
          }}
          className="home-about-grid"
          >
            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: -3,
                background: "linear-gradient(135deg, #7B68EE30, #F0A50020)",
                borderRadius: 22, filter: "blur(16px)",
              }} />
              <div style={{
                position: "relative",
                width: "100%", aspectRatio: "4/5",
                borderRadius: 20, overflow: "hidden",
                border: "1px solid rgba(123,104,238,0.15)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
              }}>
                <Image
                  src="/nidhi.jpeg"
                  alt="Nidhi Duhan — nidhiabroad"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="pill" style={{ marginBottom: 20 }}>✦ About Nidhi</span>
              <h2 style={{
                fontFamily: "var(--font-head)", fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                lineHeight: 1.2, marginBottom: 16, color: "var(--white)",
              }}>
                HR Tech PM in Germany.{" "}
                <span className="gradient-brand">Writing about what actually matters.</span>
              </h2>
              <p style={{ color: "var(--grey1)", fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
                I work in HR Tech at Mobile.de in Germany. Before that — CEO office, corporate strategy, and a lot of figuring things out the hard way.
              </p>
              <p style={{ color: "var(--grey1)", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                I write about corporate confidence, HR tech, AI trends, and building a career that doesn&apos;t depend on staying in one place.
              </p>
              <Link href="/about" style={{
                color: "var(--purple)", fontSize: 14,
                fontFamily: "var(--font-head)", fontWeight: 600,
                textDecoration: "none",
              }}
              className="hover:underline"
              >
                Read the full story →
              </Link>
            </div>
          </div>
        </section>

        {/* ── OFFERINGS ── */}
        <section style={{ padding: "80px 24px", maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{
              fontFamily: "var(--font-head)", fontWeight: 800,
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", marginBottom: 12,
              color: "var(--white)",
            }}>
              How I can help
            </h2>
            <p style={{ color: "var(--grey1)", fontSize: 15 }}>
              Pick what matches where you are right now.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {offerings.map((o) => (
              <div key={o.tag} className="glass-card" style={{ padding: "32px 28px" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{o.icon}</div>
                <span style={{
                  fontSize: 11, fontFamily: "var(--font-mono)",
                  color: o.accent, letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {o.tag}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 19,
                  margin: "10px 0 8px", color: "var(--white)",
                }}>
                  {o.title}
                </h3>
                <p style={{ color: "var(--grey1)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  {o.desc}
                </p>
                {o.external ? (
                  <a href={o.href} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-block", padding: "9px 22px", borderRadius: "var(--radius)",
                    border: `1px solid ${o.accent}50`, color: o.accent, fontSize: 13,
                    fontFamily: "var(--font-head)", fontWeight: 600, textDecoration: "none",
                  }}>
                    {o.cta} →
                  </a>
                ) : (
                  <Link href={o.href} style={{
                    display: "inline-block", padding: "9px 22px", borderRadius: "var(--radius)",
                    border: `1px solid ${o.accent}50`, color: o.accent, fontSize: 13,
                    fontFamily: "var(--font-head)", fontWeight: 600, textDecoration: "none",
                  }}>
                    {o.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section style={{ padding: "40px 24px 100px" }}>
          <div style={{
            maxWidth: 640, margin: "0 auto", padding: "52px 40px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(123,104,238,0.07) 0%, rgba(240,165,0,0.05) 100%)",
            borderRadius: 24, border: "1px solid rgba(123,104,238,0.12)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.04)",
          }}>
            <span style={{ fontSize: 36 }}>📬</span>
            <h2 style={{
              fontFamily: "var(--font-head)", fontWeight: 800,
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)", margin: "14px 0 10px",
              color: "var(--white)",
            }}>
              Inner Circle — bi-weekly
            </h2>
            <p style={{ color: "var(--grey1)", fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
              The stuff that doesn&apos;t make it to Instagram. Career insights, HR tech, AI trends — no fluff, ever.
            </p>
            <a href="https://substack.com/@nidhiabroad" target="_blank" rel="noopener noreferrer"
              className="btn-gold no-underline" style={{ padding: "12px 32px", fontSize: 14 }}>
              Join the Inner Circle →
            </a>
          </div>
        </section>

      </main>

      <style>{`
        @media (max-width: 640px) {
          .home-about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
