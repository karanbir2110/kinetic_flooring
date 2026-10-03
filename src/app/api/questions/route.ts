import { NextResponse } from "next/server";
import { getActiveQuestions } from "@/lib/db";

// Without this, Next.js treats this GET route as static (no dynamic APIs
// used) and caches its response — so edits/deletes in the admin panel
// wouldn't show up on the live site until a rebuild. Force it fresh.
export const dynamic = "force-dynamic";

export async function GET() {
  const questions = await getActiveQuestions();
  return NextResponse.json({ questions });
}