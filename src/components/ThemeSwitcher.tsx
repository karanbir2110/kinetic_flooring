"use client";

import { useCallback, useEffect, useState } from "react";

export type ThemeId = "1" | "2" | "3";

const STORAGE_KEY = "spandan-theme";
const DEFAULT_THEME: ThemeId = "1";

/** Swatches shown inside each button (purely visual). */
const THEMES: { id: ThemeId; name: string; colors: [string, string, string] }[] = [
  { id: "1", name: "Merino · Rock Blue · Venice Blue", colors: ["#F5EEDD", "#84B3CE", "#16587B"] },
  { id: "2", name: "Old Rose · Sea Shell · Sky Blue", colors: ["#E19AA6", "#FAF0EA", "#82B0CE"] },
  { id: "3", name: "Cream on Burgundy", colors: ["#FFECD1", "#3E000C", "#BC998C"] },
];

const META_COLORS: Record<ThemeId, string> = {
  "1": "#F5EEDD",
  "2": "#FAF0EA",
  "3": "#3E000C",
};

function isTheme(v: unknown): v is ThemeId {
  return v === "1" || v === "2" || v === "3";
}

function applyTheme(id: ThemeId) {
  document.documentElement.setAttribute("data-theme", id);
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", META_COLORS[id]);
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);

  const choose = useCallback((id: ThemeId) => {
    setTheme(id);
    applyTheme(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, []);

  // Sync with whatever the pre-paint script already applied.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (isTheme(current)) {
      setTheme(current);
      applyTheme(current);
    }
  }, []);

  // Keyboard shortcut: press 1, 2 or 3 (ignored while typing in a field).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
      if (isTheme(e.key)) choose(e.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [choose]);

  return (
    // Completely invisible: the three swatches are always at opacity 0 (no hover/focus reveal, no tooltip, default cursor).
    // They still sit in the bottom-right corner and can be clicked there, and the 1 / 2 / 3 keys still switch schemes.
    <div
      role="group"
      aria-label="Color scheme"
      className="fixed bottom-4 right-4 z-[70] flex items-center gap-1.5 p-1.5 opacity-0 sm:bottom-6 sm:right-6"
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => choose(t.id)}
          aria-pressed={theme === t.id}
          aria-label={`Color scheme ${t.id}: ${t.name}`}
          tabIndex={-1}
          className="h-9 w-9 cursor-default rounded-full outline-none"
        />
      ))}
    </div>
  );
}