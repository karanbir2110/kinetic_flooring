import { NextResponse } from "next/server";
import { addResponse, getActiveQuestions } from "@/lib/db";
import { isVisible } from "@/lib/visibility";
import type { Answer } from "@/lib/types";

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

export async function POST(req: Request) {
  let body: { answers?: Record<string, unknown> } | null = null;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw = body?.answers;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const questions = await getActiveQuestions();

    // Normalise incoming values to trimmed strings (cap length for safety).
    const values: Record<string, string> = {};
    for (const q of questions) {
      const v = raw[q.id];
      values[q.id] = typeof v === "string" ? v.trim().slice(0, 5000) : "";
    }

    const answers: Answer[] = [];
    for (const q of questions) {
      if (!isVisible(q, questions, values)) continue;
      const value = values[q.id];
      if (q.required && !value) {
        return NextResponse.json(
          { error: `Please answer "${q.label}".` },
          { status: 400 }
        );
      }
      answers.push({ questionId: q.id, label: q.label, value });
    }

    await addResponse(answers);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/partner failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}