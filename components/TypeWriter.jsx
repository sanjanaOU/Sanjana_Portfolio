import React, { useEffect, useState } from "react";

const lines = [
  "I am a CS Student",
  "I am a Data Analyst",
  "I am a Full Stack Developer",
  "I am a Software Engineer",
  "I am a Technophile",
];

export default function TypeWriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = lines[i];
    const step = () => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) return setTimeout(() => setDeleting(true), 1100);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (!next) { setDeleting(false); setI((i + 1) % lines.length); }
      }
    };
    const t = setTimeout(step, deleting ? 35 : 70);
    return () => clearTimeout(t);
  }, [i, text, deleting]);

  return (
    <div style={{ marginTop: 22 }}>
      {/* no bullet — just the text with a soft cursor */}
      <div className="lead">
        {text}
        <span style={{ opacity: .8, marginLeft: 2 }}>|</span>
      </div>
    </div>
  );
}
