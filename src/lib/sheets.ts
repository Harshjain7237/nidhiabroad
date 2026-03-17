// Google Sheets CSV parser — no external deps needed
// The sheet is published as CSV via File → Share → Publish to web

export interface SheetEpisode {
  series_id: string;
  episode_number: number;
  title: string;
  subtitle: string;
  instagram_url: string;
  youtube_url: string;
  roadmap_url: string;
  tags: string[]; // pipe-separated in sheet e.g. "Career Pivots|Leadership"
  published: boolean;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function parseCSV(text: string): Record<string, string>[] {
  const lines = text.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase().replace(/\s+/g, "_"));

  return lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
  });
}

export async function fetchEpisodes(): Promise<SheetEpisode[]> {
  const csvUrl = process.env.GOOGLE_SHEET_CSV_URL;

  if (!csvUrl) {
    console.warn("GOOGLE_SHEET_CSV_URL not set — using empty episodes list");
    return [];
  }

  try {
    const res = await fetch(csvUrl, {
      next: { revalidate: 300 }, // revalidate every 5 minutes as fallback
    });

    if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

    const text = await res.text();
    const rows = parseCSV(text);

    return rows
      .filter((r) => r.published?.toUpperCase() === "TRUE")
      .map((r) => ({
        series_id: r.series_id ?? "",
        episode_number: parseInt(r.episode_number ?? "0", 10),
        title: r.title ?? "",
        subtitle: r.subtitle ?? "",
        instagram_url: r.instagram_url ?? "",
        youtube_url: r.youtube_url ?? "",
        roadmap_url: r.roadmap_url ?? "",
        tags: r.tags ? r.tags.split("|").map((t) => t.trim()).filter(Boolean) : [],
        published: true,
      }))
      .sort((a, b) => a.episode_number - b.episode_number);
  } catch (err) {
    console.error("Failed to fetch episodes from Google Sheets:", err);
    return [];
  }
}
