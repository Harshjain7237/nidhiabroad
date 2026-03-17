import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const stats = [
  { value: "10K+", label: "Followers in 2 months" },
  { value: "🇩🇪", label: "HR Tech PM, Germany" },
  { value: "3", label: "Content series running" },
];

const offerings = [
  {
    icon: "📖",
    tag: "Digital Guides",
    title: "Resources that actually help",
    desc: "Career frameworks, job search tools, and HR tech breakdowns — built from real experience inside the industry.",
    href: "/guides",
    cta: "Browse Guides",
    accent: "var(--purple)",
  },
  {
    icon: "🎯",
    tag: "1:1 Coaching",
    title: "Talk to someone already there",
    desc: "Book a focused session with Nidhi. Career strategy, confidence, HR tech — specific answers for your situation.",
    href: "/consult",
    cta: "Book a Session",
    accent: "var(--gold)",
  },
  {
    icon: "📬",
    tag: "Inner Circle",
    title: "The newsletter worth reading",
    desc: "Corporate confidence, HR tech, AI trends, and what it really takes to build a global career. Bi-weekly, no fluff.",
    href: "/community",
    cta: "Subscribe Free",
    accent: "var(--teal)",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 24px 80px",
          }}
        >
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
              marginBottom: 28,
              fontFamily: "var(--font-mono)",
            }}
          >
            ✦ HR Tech · Corporate Confidence · Global Careers
          </span>

          <h1
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 7vw, 5rem)",
              lineHeight: 1.1,
              maxWidth: 800,
              marginBottom: 24,
            }}
          >
            <span className="gradient-brand">Build a career</span>
            <br />
            that belongs
            <br />
            anywhere.
          </h1>

          <p
            style={{
              color: "var(--grey1)",
              fontSize: "clamp(15px, 2vw, 18px)",
              maxWidth: 540,
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            Nidhi Duhan is an HR Tech PM in Germany writing about corporate confidence, HR tech, AI trends, and what it really takes to build a career without borders.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/guides" className="btn-primary px-8 py-3 text-sm no-underline">
              Explore Guides →
            </Link>
            <Link
              href="/consult"
              style={{
                padding: "12px 32px",
                borderRadius: "var(--radius)",
                border: "1px solid rgba(155, 109, 255, 0.3)",
                color: "var(--white)",
                fontSize: 14,
                transition: "var(--transition)",
              }}
              className="hover:border-[#9B6DFF] hover:bg-[#1A1A24] no-underline"
            >
              Book a Consult
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 72,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  className="gradient-brand"
                  style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 32 }}
                >
                  {s.value}
                </div>
                <div style={{ color: "var(--grey1)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── OFFERINGS ── */}
        <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            How I can help you
          </h2>
          <p style={{ color: "var(--grey1)", textAlign: "center", marginBottom: 56, fontSize: 15 }}>
            Pick what matches where you are in your journey right now.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {offerings.map((o) => (
              <div
                key={o.tag}
                className="glass-card"
                style={{ padding: "36px 32px", transition: "var(--transition)" }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{o.icon}</div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    color: o.accent,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {o.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-head)",
                    fontWeight: 700,
                    fontSize: 20,
                    margin: "12px 0 10px",
                    color: "var(--white)",
                  }}
                >
                  {o.title}
                </h3>
                <p style={{ color: "var(--grey1)", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
                  {o.desc}
                </p>
                <Link
                  href={o.href}
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    borderRadius: "var(--radius)",
                    border: `1px solid ${o.accent}40`,
                    color: o.accent,
                    fontSize: 13,
                    fontFamily: "var(--font-head)",
                    fontWeight: 600,
                    transition: "var(--transition)",
                  }}
                  className="no-underline hover:bg-[#1A1A24]"
                >
                  {o.cta} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section style={{ padding: "80px 24px" }}>
          <div
            className="glass-card"
            style={{
              maxWidth: 680,
              margin: "0 auto",
              padding: "56px 40px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(155,109,255,0.08) 0%, rgba(245,200,66,0.06) 100%)",
            }}
          >
            <span style={{ fontSize: 40 }}>✉️</span>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                margin: "16px 0 12px",
              }}
            >
              Inner Circle — bi-weekly
            </h2>
            <p style={{ color: "var(--grey1)", fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
              Deeper career insights, behind-the-scenes, and resources not shared publicly on social. No fluff, ever.
            </p>
            <Link href="/newsletter" className="btn-gold px-8 py-3 text-sm no-underline">
              Subscribe Free →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
