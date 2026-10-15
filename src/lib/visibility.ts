import type { Question } from "./types";

export const MULTI_SEP = " | ";

/** Turn a stored answer string into a list of chosen values. */
export function answerList(q: Question | undefined, value: string | undefined): string[] {
  if (!value) return [];
  return q?.type === "multiselect" ? value.split(MULTI_SEP).filter(Boolean) : [value];
}

/**
 * A question is visible if it has no condition, or if the question it depends
 * on is itself visible AND has one of the required answers. Checking the
 * parent's visibility means a chain (Q6 -> Q7 -> Q8) collapses correctly when
 * the first answer changes.
 */
export function isVisible(
  q: Question,
  all: Question[],
  values: Record<string, string>,
  seen: Set<string> = new Set()
): boolean {
  if (!q.showIf) return true;
  if (seen.has(q.id)) return false; // guard against circular rules
  seen.add(q.id);

  const parent = all.find((p) => p.id === q.showIf!.questionId);
  if (!parent || !parent.active) return false;
  if (!isVisible(parent, all, values, seen)) return false;

  const chosen = answerList(parent, values[parent.id]);
  return chosen.some((c) => q.showIf!.equals.includes(c));
}
