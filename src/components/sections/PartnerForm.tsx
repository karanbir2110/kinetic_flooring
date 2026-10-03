"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Question } from "@/lib/types";

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
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/partner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: values }),
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
      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-hairline bg-white/[0.03] px-8 py-10 text-center">
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
        {questions.map((q) => (
          <div key={q.id}>
            <label htmlFor={q.id} className="mb-2 block text-sm font-medium text-paper-dim">
              {q.label}
              {q.required && <span className="text-electric-bright"> *</span>}
            </label>
            
            {q.type === "textarea" ? (
              <textarea
                id={q.id}
                required={q.required}
                placeholder={q.placeholder}
                value={values[q.id] ?? ""}
                onChange={(e) => setValue(q.id, e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-electric/60"
              />
            ) : q.type === "select" ? (
              <select
                id={q.id}
                required={q.required}
                value={values[q.id] ?? ""}
                onChange={(e) => setValue(q.id, e.target.value)}
                className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-electric/60"
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
                className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-electric/60"
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
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send"}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </form>
  );
}
