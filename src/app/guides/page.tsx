import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SeriesSection from "./SeriesSection";
import ToolsSection from "./ToolsSection";
import { series as staticSeries } from "./data";
import { fetchEpisodes } from "@/lib/sheets";
import type { Series } from "./data";

export const revalidate = 300; // revalidate every 5 min
export const fetchCache = "force-no-store"; // don't let fetch hang at build time

export const metadata = {
  title: "Guides & Series — nidhiabroad",
  description: "Career series, roadmaps, and tools for building a global career.",
};

export default async function GuidesPage() {
  // Fetch live episodes from Google Sheet (falls back to [] if not configured)
  const sheetEpisodes = await fetchEpisodes();

  // Merge: if sheet has data for a series, replace its episodes; else keep static
  const mergedSeries: Series[] = staticSeries.map((s) => {
    const liveEpisodes = sheetEpisodes.filter((e) => e.series_id === s.id);
    if (liveEpisodes.length === 0) return s; // no sheet data yet → use static

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
            ✦ Content · Roadmaps · Tools
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
            <span className="gradient-brand">Learn. Watch.</span> Apply.
          </h1>
          <p style={{ color: "var(--grey1)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Two ongoing series on Instagram, plus tools and resources built to move your career forward.
          </p>
        </section>

        <SeriesSection series={mergedSeries} />
        <ToolsSection />

      </main>

      <Footer />
    </div>
  );
}
