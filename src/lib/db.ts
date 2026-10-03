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
  const { data, error } = await supabaseServer
    .from("questions")
    .update(patch)
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

export async function addResponse(answers: Answer[]): Promise<PartnerResponse> {
  const { data, error } = await supabaseServer
    .from("responses")
    .insert({ answers })
    .select()
    .single();
  if (error) throw error;
  return rowToResponse(data);
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