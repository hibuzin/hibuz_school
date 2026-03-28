import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { key: "faculty",  label: "Faculty",  max: 500  },
  { key: "staff",    label: "Staff",    max: 500  },
  { key: "students", label: "Students", max: 2000 },
  { key: "buses",    label: "Buses",    max: 100  },
  { key: "patrons",  label: "Patrons",  max: 300  },
];

const ACCENTS = ["#1d9e75", "#378add", "#ba7517", "#533ab7", "#d4537e"];
const NUM_COLORS = ["#0f6e56", "#185fa5", "#854f0b", "#3c3489", "#993556"];

function useAnimatedCount(target) {
  const [display, setDisplay] = useState(0);
  const fromRef = useRef(0);
  const rafRef  = useRef(null);

  useEffect(() => {
    if (target == null) return;
    const from = fromRef.current;
    const diff = target - from;
    if (diff === 0) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const dur   = Math.min(1800, Math.max(500, Math.abs(diff) * 1.5));
    const start = performance.now();
    const ease  = (t) => 1 - Math.pow(2, -10 * t);

    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const v = Math.round(from + diff * ease(p));
      setDisplay(v);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = target;
        setDisplay(target);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target]);

  return display;
}

function StatCard({ stat, index, value }) {
  const count  = useAnimatedCount(value);
  const accent = ACCENTS[index];
  const numClr = NUM_COLORS[index];
  const pct    = Math.min((count / stat.max) * 100, 100);

  return (
    <div style={styles.card}>
      <div style={{ ...styles.stripe, background: accent }} />
      <p style={styles.label}>{stat.label}</p>
      <p style={{ ...styles.number, color: numClr }}>{count.toLocaleString()}</p>
      <div style={styles.barTrack}>
        <div style={{ ...styles.barFill, width: `${pct}%`, background: accent }} />
      </div>
    </div>
  );
}

export default function StatsGlassCounter() {
  const [values, setValues] = useState(
    Object.fromEntries(STATS.map((s) => [s.key, 0]))
  );
  const [inputs, setInputs] = useState(
    Object.fromEntries(STATS.map((s) => [s.key, ""]))
  );
  const [hint, setHint] = useState("");

  const handleChange = (key, val) =>
    setInputs((prev) => ({ ...prev, [key]: val }));

  const applyUpdate = () => {
    const next = { ...values };
    let changed = false;
    STATS.forEach(({ key }) => {
      const n = parseInt(inputs[key], 10);
      if (!isNaN(n) && n >= 0) { next[key] = n; changed = true; }
    });
    if (changed) {
      setValues(next);
      setHint("Updated " + new Date().toLocaleTimeString());
      setTimeout(() => setHint(""), 3000);
    } else {
      setHint("No valid values entered");
      setTimeout(() => setHint(""), 2500);
    }
  };

  return (
    <section style={styles.wrap}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Institution Overview</h1>
        <p style={styles.subtitle}>
          Live headcount — counters animate from current value on each update
        </p>
      </div>

      {/* Stat cards */}
      <div style={styles.grid}>
        {STATS.map((stat, i) => (
          <StatCard key={stat.key} stat={stat} index={i} value={values[stat.key]} />
        ))}
      </div>

      {/* Edit panel */}
      <div style={styles.panel}>
        <p style={styles.panelLabel}>Update numbers</p>
        <div style={styles.fields}>
          {STATS.map(({ key, label }) => (
            <div key={key} style={styles.field}>
              <label style={styles.fieldLabel}>{label}</label>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={inputs[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyUpdate()}
                style={styles.input}
              />
            </div>
          ))}
        </div>
        <div style={styles.actions}>
          <button onClick={applyUpdate} style={styles.btn}>
            Apply update
          </button>
          {hint && <span style={styles.hint}>{hint}</span>}
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrap: {
    fontFamily: "'Outfit', sans-serif",
    padding: "2rem 1.5rem",
    maxWidth: 1100,
    margin: "0 auto",
  },
  header: {
    paddingBottom: "1.25rem",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: ".01em",
    margin: "0 0 4px",
    color: "#111",
  },
  subtitle: {
    fontSize: 13,
    color: "#6b7280",
    margin: 0,
    fontWeight: 400,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: 10,
    marginBottom: "1.5rem",
  },
  card: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.07)",
    borderRadius: 12,
    padding: "1.25rem 1rem 1rem",
    position: "relative",
    overflow: "hidden",
  },
  stripe: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: 2,
    borderRadius: "12px 12px 0 0",
  },
  label: {
    fontSize: 11,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: "#9ca3af",
    fontWeight: 500,
    margin: "0 0 10px",
  },
  number: {
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 1,
    margin: "0 0 8px",
    fontFamily: "'Syne', sans-serif",
  },
  barTrack: {
    height: 2,
    background: "rgba(0,0,0,0.06)",
    borderRadius: 99,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 99,
    transition: "width 1.8s cubic-bezier(.22,1,.36,1)",
  },
  panel: {
    background: "#f9fafb",
    borderRadius: 12,
    padding: "1.25rem",
  },
  panelLabel: {
    fontSize: 11,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: "#9ca3af",
    fontWeight: 500,
    margin: "0 0 14px",
  },
  fields: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: 10,
    marginBottom: 14,
  },
  field: { display: "flex", flexDirection: "column" },
  fieldLabel: {
    fontSize: 11,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "#9ca3af",
    marginBottom: 5,
    fontWeight: 500,
  },
  input: {
    width: "100%",
    padding: "9px 10px",
    fontFamily: "'Outfit', sans-serif",
    fontSize: 14,
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.1)",
    background: "#fff",
    color: "#111",
    outline: "none",
    boxSizing: "border-box",
  },
  actions: { display: "flex", alignItems: "center", gap: 12 },
  btn: {
    padding: "9px 22px",
    fontFamily: "'Outfit', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.12)",
    background: "#fff",
    color: "#111",
    cursor: "pointer",
    letterSpacing: ".02em",
  },
  hint: { fontSize: 12, color: "#9ca3af" },
};