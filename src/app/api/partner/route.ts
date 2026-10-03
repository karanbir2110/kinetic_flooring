import { NextResponse } from "next/server";
import { addResponse, getActiveQuestions } from "@/lib/db";
import type { Answer } from "@/lib/types";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.answers !== "object" || body.answers === null) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const submitted: Record<string, string> = body.answers;
  const questions = await getActiveQuestions();

  const answers: Answer[] = [];
  for (const question of questions) {
    const value = (submitted[question.id] ?? "").toString().trim();
    if (question.required && !value) {
      return NextResponse.json(
        { error: `"${question.label}" is required.` },
        { status: 400 }
      );
    }
    if (value) {
      answers.push({ questionId: question.id, label: question.label, value });
    }
  }

  const response = await addResponse(answers);
  return NextResponse.json({ ok: true, id: response.id });
}
