import { tools } from "./data";

export default function ToolsSection() {
  return (
    <section style={{ padding: "72px 24px 64px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gold)",
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            Tools & Resources
          </span>
          <h2 style={{
            fontFamily: "var(--font-head)", fontWeight: 800,
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", marginTop: 8, marginBottom: 8,
            color: "var(--white)",
          }}>
            Career tools that actually work
          </h2>
          <p style={{ color: "var(--grey1)", fontSize: 15, maxWidth: 520 }}>
            Templates, guides, and frameworks built from real experience. Dropping soon — one by one.
          </p>
        </div>

        {/* Tools grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {tools.map((tool) => (
            <div
              key={tool.id}
              style={{
                position: "relative",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Soon badge */}
              <span style={{
                position: "absolute", top: 14, right: 14,
                background: "rgba(123,104,238,0.1)",
                color: "var(--purple)",
                fontSize: 10, fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: 6,
                border: "1px solid rgba(123,104,238,0.2)",
              }}>
                Soon
              </span>

              <div style={{ fontSize: 30, marginBottom: 12 }}>{tool.icon}</div>

              <h3 style={{
                fontFamily: "var(--font-head)", fontWeight: 700,
                fontSize: 17, color: "var(--white)", marginBottom: 8,
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
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                {tool.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, color: "var(--grey1)",
                    background: "var(--bg3)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderRadius: 6, padding: "2px 8px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                textAlign: "center", padding: "10px 20px", borderRadius: 10,
                background: "var(--bg2)",
                border: "1px solid rgba(0,0,0,0.06)",
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
