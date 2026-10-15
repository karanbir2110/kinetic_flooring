import { NextResponse } from "next/server";
import { getActiveQuestions } from "@/lib/db";

// Never cache this route: always read the latest questions from Supabase.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET() {
  const questions = await getActiveQuestions();
  return NextResponse.json(
    { questions },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}