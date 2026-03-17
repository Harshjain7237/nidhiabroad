import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by Google Apps Script when the sheet is edited
// POST /api/revalidate?secret=YOUR_SECRET
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/guides");

  return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() });
}

// Also support GET so Apps Script can use a simple UrlFetchApp.fetch()
export async function GET(req: NextRequest) {
  return POST(req);
}
