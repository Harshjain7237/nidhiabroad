import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SeriesSection from "./SeriesSection";
import ToolsSection from "./ToolsSection";
import { series as staticSeries } from "./data";
import { fetchEpisodes } from "@/lib/sheets";
import type { Series } from "./data";

export const revalidate = 300;
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Guides & Series — nidhiabroad",
  description: "Career series, roadmaps, tools, and the Inner Circle newsletter.",
};

const newsletterIssues = [
  {
    label: "Issue #1",
    href: "https://substack.com/@nidhiabroad/p-188964793",
  },
  {
    label: "Issue #2",
    href: "https://substack.com/home/post/p-190558683",
  },
];

export default async function GuidesPage() {
  const sheetEpisodes = await fetchEpisodes();

  const mergedSeries: Series[] = staticSeries.map((s) => {
    const liveEpisodes = sheetEpisodes.filter((e) => e.series_id === s.id);
    if (liveEpisodes.length === 0) return s;
    return {
      ...s,
      episodes: liveEpisodes.map((e) => ({
        number: e.episode_number,
        title: e.title,
        subtitle: e.subtitle,
        instagramUrl: e.instagram_url,
        youtubeUrl: e.youtube_url || undefined,
        roadmapUrl: e.roadmap_url || undefined,
        tags: e.tags,
      })),
    };
  });

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />

      <main style={{ position: "relative", zIndex: 1, paddingTop: 100 }}>

        {/* ── PAGE HEADER ── */}
        <section style={{ textAlign: "center", padding: "60px 24px 56px" }}>
          <span className="pill" style={{ marginBottom: 24 }}>✦ Resources · Newsletter · Series</span>
          <h1 style={{
            fontFamily: "var(--font-head)", fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.15, marginBottom: 16,
            color: "var(--white)",
          }}>
            <span className="gradient-brand">Learn. Read.</span> Apply.
          </h1>
          <p style={{ color: "var(--grey1)", fontSize: 16, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            Tools and roadmaps, the Inner Circle newsletter, and two ongoing series on Instagram.
          </p>
        </section>

        {/* 1 ── TOOLS / RESOURCES ── */}
        <ToolsSection />

        {/* 2 ── NEWSLETTER ── */}
        <section style={{
          background: "var(--bg2)",
          borderTop: "1px solid rgba(0,0,0,0.05)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          padding: "72px 24px",
        }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="newsletter-grid">

              {/* Left — intro */}
              <div>
                <span className="pill" style={{ marginBottom: 20 }}>📬 Inner Circle</span>
                <h2 style={{
                  fontFamily: "var(--font-head)", fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  marginBottom: 12, color: "var(--white)",
                }}>
                  Be part of the Inner Circle.
                </h2>
                <p style={{ color: "var(--grey1)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                  Nidhi sends a bi-weekly newsletter covering corporate confidence, HR tech, AI trends, and real career moves. The stuff that doesn&apos;t make it to Instagram.
                </p>
                <a
                  href="https://substack.com/@nidhiabroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary no-underline"
                  style={{ padding: "12px 28px", fontSize: 14 }}
                >
                  Subscribe — it&apos;s free →
                </a>
              </div>

              {/* Right — past issues */}
              <div>
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--grey1)",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
                }}>
                  Recent issues
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {newsletterIssues.map((issue) => (
                    <a
                      key={issue.label}
                      href={issue.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "14px 18px", borderRadius: 12,
                        background: "#fff", border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        textDecoration: "none",
                        transition: "var(--transition)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,104,238,0.3)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)"}
                    >
                      <span style={{ fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 14, color: "var(--white)" }}>
                        {issue.label}
                      </span>
                      <span style={{ color: "var(--purple)", fontSize: 13 }}>Read →</span>
                    </a>
                  ))}
                  <Link
                    href="https://substack.com/@nidhiabroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textAlign: "center", padding: "10px",
                      color: "var(--grey1)", fontSize: 13,
                      textDecoration: "none", fontFamily: "var(--font-head)",
                    }}
                    className="hover:text-[#7B68EE]"
                  >
                    View all issues →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3 ── SERIES ── */}
        <SeriesSection series={mergedSeries} />

      </main>

      <style>{`
        @media (max-width: 640px) {
          .newsletter-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}
