import { supabaseServer } from "./supabaseServer";
import type { Answer, PartnerResponse, Question } from "./types";

/* ---------------- Questions ---------------- */

export async function getAllQuestions(): Promise<Question[]> {
  const { data, error } = await supabaseServer
    .from("questions")
    .select("*")
    .order("order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToQuestion);
}

export async function getActiveQuestions(): Promise<Question[]> {
  const { data, error } = await supabaseServer
    .from("questions")
    .select("*")
    .eq("active", true)
    .order("order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToQuestion);
}

export async function createQuestion(
  input: Omit<Question, "id">
): Promise<Question> {
  const { data, error } = await supabaseServer
    .from("questions")
    .insert({
      label: input.label,
      type: input.type,
      placeholder: input.placeholder ?? null,
      options: input.options ?? null,
      max_select: input.maxSelect ?? null,
      show_if: input.showIf ?? null,
      required: input.required,
      active: input.active,
      order: input.order,
    })
    .select()
    .single();
  if (error) throw error;
  return rowToQuestion(data);
}

export async function updateQuestion(
  id: string,
  patch: Partial<Omit<Question, "id">>
): Promise<Question | null> {
  // Translate camelCase fields to the snake_case DB columns.
  const { maxSelect, showIf, ...rest } = patch;
  const dbPatch: Record<string, unknown> = { ...rest };
  if (maxSelect !== undefined) dbPatch.max_select = maxSelect ?? null;
  if (showIf !== undefined) dbPatch.show_if = showIf ?? null;

  const { data, error } = await supabaseServer
    .from("questions")
    .update(dbPatch)
    .eq("id", id)
    .select()
    .maybeSingle();
  if (error) throw error;
  return data ? rowToQuestion(data) : null;
}

export async function deleteQuestion(id: string): Promise<boolean> {
  const { data, error } = await supabaseServer
    .from("questions")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw error;
  return (data?.length ?? 0) > 0;
}

/* ---------------- Responses ---------------- */

export async function getResponses(): Promise<PartnerResponse[]> {
  const { data, error } = await supabaseServer
    .from("responses")
    .select("*")
    .order("submitted_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(rowToResponse);
}

export async function addResponse(answers: Answer[]): Promise<void> {
  // NOTE: no .select() here on purpose. The public site uses the anon key, and
  // RLS only allows anon to INSERT into "responses" (not read them back).
  // Chaining .select() asks Supabase to return the inserted row, which needs
  // a SELECT policy and fails with an RLS error ("Something went wrong").
  const { error } = await supabaseServer.from("responses").insert({ answers });
  if (error) throw error;
}

export async function deleteResponse(id: string): Promise<boolean> {
  const { data, error } = await supabaseServer
    .from("responses")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw error;
  return (data?.length ?? 0) > 0;
}

/* ---------------- Row mappers ---------------- */

function rowToQuestion(row: any): Question {
  return {
    id: row.id,
    label: row.label,
    type: row.type,
    placeholder: row.placeholder ?? undefined,
    options: row.options ?? undefined,
    maxSelect: row.max_select ?? undefined,
    showIf: row.show_if ?? undefined,
    required: row.required,
    active: row.active,
    order: row.order,
  };
}

function rowToResponse(row: any): PartnerResponse {
  return {
    id: row.id,
    submittedAt: row.submitted_at,
    answers: row.answers,
  };
}