"use client";

import { useState, useEffect } from "react";

const DEFAULT_TEXT = "Building careers that belong anywhere.";
const SPEED_MS     = 55; // ms per character

export default function TypedHeading({ text, fontSize }: { text?: string; fontSize?: string }) {
  const FULL_TEXT = text ?? DEFAULT_TEXT;
  const [displayed, setDisplayed] = useState("");
  const [done, setDone]           = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
  }, [FULL_TEXT]);

  useEffect(() => {
    if (displayed.length >= FULL_TEXT.length) { setDone(true); return; }
    const t = setTimeout(
      () => setDisplayed(FULL_TEXT.slice(0, displayed.length + 1)),
      SPEED_MS,
    );
    return () => clearTimeout(t);
  }, [displayed, FULL_TEXT]);

  return (
    <h1 style={{
      fontFamily: "var(--font-head)",
      fontWeight: 800,
      fontSize: fontSize ?? "clamp(2.2rem, 6vw, 4.2rem)",
      lineHeight: 1.12,
      maxWidth: 760,
      marginBottom: 24,
      color: "var(--white)",
      minHeight: "1.2em", // prevents layout shift before text appears
    }}>
      <span className="gradient-brand">{displayed}</span>
      {!done && (
        <span className="cursor-blink" style={{ color: "var(--purple)", fontWeight: 300 }}>|</span>
      )}
    </h1>
  );
}
