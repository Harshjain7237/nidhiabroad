"use client";

import { useState } from "react";
import { series } from "./data";

type Platform = "instagram" | "youtube";

export default function SeriesSection() {
  const [activeSeries, setActiveSeries] = useState<string | null>(null);
  const [platform, setPlatform] = useState<Platform>("instagram");

  const expandedSeries = series.find((s) => s.id === activeSeries);

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>

      {/* Section header */}
      <div style={{ marginBottom: 48 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--purple)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Content Series
        </span>
        <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", marginTop: 8, marginBottom: 8 }}>
          Watch & Learn
        </h2>
        <p style={{ color: "var(--grey1)", fontSize: 15 }}>
          Two running series on Instagram. Click a series to browse episodes.
        </p>
      </div>

      {/* Series cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 40 }}>
        {series.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSeries(activeSeries === s.id ? null : s.id)}
            style={{
              all: "unset",
              cursor: "pointer",
              display: "block",
              background: activeSeries === s.id
                ? `linear-gradient(135deg, ${s.accent}18, ${s.accent}08)`
                : "rgba(26, 26, 36, 0.6)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${activeSeries === s.id ? s.accent + "60" : s.accent + "25"}`,
              borderRadius: 16,
              padding: "28px 24px",
              textAlign: "left",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <span style={{
                fontSize: 11, fontFamily: "var(--font-mono)", color: s.accent,
                letterSpacing: "0.1em", textTransform: "uppercase",
                background: s.accent + "18", padding: "3px 10px", borderRadius: 6,
              }}>
                {s.tag}
              </span>
              <span style={{ color: "var(--grey1)", fontSize: 12 }}>
                {s.episodes.length} ep{s.episodes.length > 1 ? "s" : ""}
              </span>
            </div>

            <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 20, color: "var(--white)", marginBottom: 10 }}>
              {s.title}
            </h3>
            <p style={{ color: "var(--grey1)", fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>
              {s.tagline}
            </p>
            <span style={{ color: s.accent, fontSize: 13, fontFamily: "var(--font-head)", fontWeight: 600 }}>
              {activeSeries === s.id ? "Collapse ↑" : "Browse episodes →"}
            </span>
          </button>
        ))}
      </div>

      {/* Episode list — shown when series is expanded */}
      {expandedSeries && (
        <div
          style={{
            background: "rgba(18, 18, 24, 0.8)",
            border: `1px solid ${expandedSeries.accent}25`,
            borderRadius: 20,
            padding: "32px 28px",
            marginBottom: 12,
          }}
        >
          {/* Platform toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 17, color: "var(--white)" }}>
              {expandedSeries.title} — All Episodes
            </span>
            <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: 4, gap: 4 }}>
              {(["instagram", "youtube"] as Platform[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    padding: "6px 16px",
                    borderRadius: 7,
                    fontSize: 12,
                    fontFamily: "var(--font-head)",
                    fontWeight: 600,
                    background: platform === p ? expandedSeries.accent : "transparent",
                    color: platform === p ? "#0A0A0F" : "var(--grey1)",
                    transition: "all 0.2s",
                  }}
                >
                  {p === "instagram" ? "📷 Instagram" : "▶ YouTube"}
                </button>
              ))}
            </div>
          </div>

          {/* Episodes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {expandedSeries.episodes.map((ep) => {
              const watchUrl = platform === "youtube"
                ? (ep.youtubeUrl ?? null)
                : ep.instagramUrl;

              return (
                <div
                  key={ep.number}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "20px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.05)",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Episode number badge */}
                  <div style={{
                    flexShrink: 0,
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: expandedSeries.accent + "20",
                    border: `1px solid ${expandedSeries.accent}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: expandedSeries.accent, fontWeight: 500,
                  }}>
                    E{ep.number.toString().padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h4 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 16, color: "var(--white)", marginBottom: 6 }}>
                      {ep.title}
                    </h4>
                    <p style={{ color: "var(--grey1)", fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>
                      {ep.subtitle}
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {ep.tags.map((t) => (
                        <span key={t} style={{
                          fontSize: 11, color: "var(--grey1)",
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: 6, padding: "2px 8px",
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", justifyContent: "center", flexShrink: 0 }}>
                    {watchUrl ? (
                      <a
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          padding: "8px 18px", borderRadius: 9,
                          background: expandedSeries.accent + "22",
                          color: expandedSeries.accent,
                          fontSize: 12, fontFamily: "var(--font-head)", fontWeight: 600,
                          textDecoration: "none", whiteSpace: "nowrap",
                        }}
                      >
                        {platform === "instagram" ? "📷" : "▶"} Watch
                      </a>
                    ) : (
                      <span style={{
                        padding: "8px 18px", borderRadius: 9, fontSize: 12,
                        color: "var(--grey1)", background: "rgba(255,255,255,0.04)",
                        fontFamily: "var(--font-head)", whiteSpace: "nowrap",
                      }}>
                        YouTube soon
                      </span>
                    )}

                    {ep.roadmapUrl && (
                      <a
                        href={ep.roadmapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          padding: "8px 18px", borderRadius: 9,
                          border: `1px solid ${expandedSeries.accent}40`,
                          color: expandedSeries.accent,
                          fontSize: 12, fontFamily: "var(--font-head)", fontWeight: 600,
                          textDecoration: "none", whiteSpace: "nowrap",
                        }}
                      >
                        📖 Full Roadmap
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
