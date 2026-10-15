import { NextResponse } from "next/server";
import { addResponse, getActiveQuestions } from "@/lib/db";
import { answerList, isVisible } from "@/lib/visibility";
import type { Answer } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body.answers !== "object" || body.answers === null) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
    }

    const submitted: Record<string, string> = body.answers;
    const questions = await getActiveQuestions();

    const answers: Answer[] = [];
    for (const question of questions) {
      // Hidden by a condition (e.g. budget when "Just curious") -> ignore entirely.
      if (!isVisible(question, questions, submitted)) continue;

      const value = (submitted[question.id] ?? "").toString().trim();
      if (question.required && !value) {
        return NextResponse.json(
          { error: `"${question.label}" is required.` },
          { status: 400 }
        );
      }
      if (!value) continue;

      // Choice questions: only accept the configured options.
      if (["select", "radio", "multiselect"].includes(question.type)) {
        const chosen = answerList(question, value);
        const allowed = question.options ?? [];
        if (chosen.some((c) => !allowed.includes(c))) {
          return NextResponse.json({ error: `Invalid choice for "${question.label}".` }, { status: 400 });
        }
        if (question.type === "multiselect" && question.maxSelect && chosen.length > question.maxSelect) {
          return NextResponse.json(
            { error: `Pick up to ${question.maxSelect} for "${question.label}".` },
            { status: 400 }
          );
        }
      }

      answers.push({ questionId: question.id, label: question.label, value });
    }

    await addResponse(answers);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Full detail goes to the terminal running `npm run dev`.
    console.error("[/api/partner] failed to save response:", {
      message: err?.message,
      code: err?.code,
      details: err?.details,
      hint: err?.hint,
    });
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `Could not save: ${err?.message ?? "unknown error"}${err?.code ? ` (code ${err.code})` : ""}`
            : "We couldn't save your response. Please try again.",
      },
      { status: 500 }
    );
  }
}
