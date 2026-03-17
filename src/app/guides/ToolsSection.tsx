import { tools } from "./data";

export default function ToolsSection() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(155, 109, 255, 0.1)",
        padding: "80px 24px 100px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Tools & Resources
          </span>
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", marginTop: 8, marginBottom: 8 }}>
            Career tools that actually work
          </h2>
          <p style={{ color: "var(--grey1)", fontSize: 15, maxWidth: 520 }}>
            Templates, guides, and frameworks built from real experience. More dropping soon.
          </p>
        </div>

        {/* Tools grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {tools.map((tool) => (
            <div
              key={tool.id}
              style={{
                position: "relative",
                background: "rgba(26, 26, 36, 0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {/* Soon badge */}
              <span style={{
                position: "absolute", top: 16, right: 16,
                background: "rgba(255,255,255,0.04)",
                color: "var(--grey1)",
                fontSize: 10, fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: 6,
              }}>
                Soon
              </span>

              <div style={{ fontSize: 32, marginBottom: 14 }}>{tool.icon}</div>

              <h3 style={{
                fontFamily: "var(--font-head)", fontWeight: 700,
                fontSize: 18, color: "var(--white)", marginBottom: 8,
              }}>
                {tool.title}
              </h3>

              <p style={{
                color: "var(--grey1)", fontSize: 13, lineHeight: 1.7,
                marginBottom: 16, flex: 1,
              }}>
                {tool.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                {tool.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, color: "var(--grey1)",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 6, padding: "2px 8px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                textAlign: "center", padding: "10px 20px", borderRadius: 10,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "var(--grey1)", fontSize: 13,
                fontFamily: "var(--font-head)",
              }}>
                Notify me when live
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
