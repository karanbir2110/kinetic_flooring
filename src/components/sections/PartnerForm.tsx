"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Question } from "@/lib/types";
import { MULTI_SEP, answerList, isVisible } from "@/lib/visibility";

export default function PartnerForm() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions ?? []))
      .finally(() => setLoading(false));
  }, []);

  function setValue(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    // Tap-select controls have no native "required" check, so validate here.
    for (const q of questions) {
      if (!isVisible(q, questions, values)) continue;
      const isCustom = q.type === "radio" || q.type === "multiselect";
      if (isCustom && q.required && !values[q.id]) {
        setError(`Please answer "${q.label}".`);
        return;
      }
    }

    setSubmitting(true);

    const res = await fetch("/api/partner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        answers: Object.fromEntries(
          questions.filter((q) => isVisible(q, questions, values)).map((q) => [q.id, values[q.id] ?? ""])
        ),
      }),
    });

    setSubmitting(false);

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error || "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-hairline bg-paper/[0.05] px-8 py-10 text-center">
        <p className="font-display text-xl font-semibold">Thanks — we&apos;ve got it.</p>
        <p className="mt-2 text-sm text-paper-dim">
          Someone from the team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl text-left">
      {loading && <p className="text-center text-sm text-muted">Loading form…</p>}

      <div className="space-y-5">
        {questions.filter((q) => isVisible(q, questions, values)).map((q) => (
          <div key={q.id}>
            {q.type !== "checkbox" && (
              <label
                htmlFor={q.id}
                id={`${q.id}-label`}
                className="mb-2 block text-sm font-medium text-paper-dim"
              >
                {q.label}
                {q.required && <span className="text-electric-bright"> *</span>}
                {q.type === "multiselect" && q.maxSelect ? (
                  <span className="ml-2 text-xs font-normal text-muted">(pick up to {q.maxSelect})</span>
                ) : null}
              </label>
            )}

            {q.type === "radio" ? (
              <div role="radiogroup" aria-labelledby={`${q.id}-label`} className="flex flex-col gap-2">
                {(q.options ?? []).map((opt) => (
                  <Chip
                    key={opt}
                    role="radio"
                    label={opt}
                    selected={values[q.id] === opt}
                    onClick={() => setValue(q.id, values[q.id] === opt ? "" : opt)}
                  />
                ))}
              </div>
            ) : q.type === "multiselect" ? (
              <div role="group" aria-labelledby={`${q.id}-label`} className="flex flex-col gap-2">
                {(q.options ?? []).map((opt) => {
                  const chosen = answerList(q, values[q.id]);
                  const selected = chosen.includes(opt);
                  const atMax = !!q.maxSelect && chosen.length >= q.maxSelect;
                  return (
                    <Chip
                      key={opt}
                      role="checkbox"
                      label={opt}
                      selected={selected}
                      disabled={!selected && atMax}
                      onClick={() => {
                        const next = selected ? chosen.filter((c) => c !== opt) : [...chosen, opt];
                        setValue(q.id, next.join(MULTI_SEP));
                      }}
                    />
                  );
                })}
              </div>
            ) : q.type === "checkbox" ? (
              <label className="flex cursor-pointer items-center gap-3 text-sm text-paper-dim">
                <input
                  id={q.id}
                  type="checkbox"
                  checked={values[q.id] === "Yes"}
                  onChange={(e) => setValue(q.id, e.target.checked ? "Yes" : "")}
                  className="h-4 w-4 rounded accent-electric"
                />
                {q.label}
              </label>
            ) : q.type === "textarea" ? (
              <textarea
                id={q.id}
                required={q.required}
                placeholder={q.placeholder}
                value={values[q.id] ?? ""}
                onChange={(e) => setValue(q.id, e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-hairline bg-paper/[0.05] px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-electric/60"
              />
            ) : q.type === "select" ? (
              <select
                id={q.id}
                required={q.required}
                value={values[q.id] ?? ""}
                onChange={(e) => setValue(q.id, e.target.value)}
                className="w-full rounded-xl border border-hairline bg-paper/[0.05] px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-electric/60"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {(q.options ?? []).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={q.id}
                type={q.type === "email" ? "email" : q.type === "phone" ? "tel" : "text"}
                required={q.required}
                placeholder={q.placeholder}
                value={values[q.id] ?? ""}
                onChange={(e) => setValue(q.id, e.target.value)}
                className="w-full rounded-xl border border-hairline bg-paper/[0.05] px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-electric/60"
              />
            )}
          </div>
        ))}
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      {!loading && (
        <button
          type="submit"
          disabled={submitting}
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-onaccent shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send"}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </form>
  );
}


/** Tap-to-select pill. "Title: description" labels render as a bold title + dim description. */
function Chip({
  label,
  selected,
  disabled,
  role,
  onClick,
}: {
  label: string;
  selected: boolean;
  disabled?: boolean;
  role: "radio" | "checkbox";
  onClick: () => void;
}) {
  const i = label.indexOf(": ");
  const title = i > -1 ? label.slice(0, i) : label;
  const desc = i > -1 ? label.slice(i + 2) : "";
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      disabled={disabled}
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        selected
          ? "border-electric bg-electric/15 text-paper"
          : "border-hairline bg-paper/[0.05] text-paper-dim hover:border-electric/40"
      }`}
    >
      <span className="font-medium">{title}</span>
      {desc && <span className="mt-0.5 block text-xs text-muted">{desc}</span>}
    </button>
  );
}
