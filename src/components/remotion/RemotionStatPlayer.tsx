"use client";

import { useState, useEffect, useRef } from "react";

const STATS = [
  { value: 200, suffix: "+", label: "Families Helped" },
  { value: 17, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: ".0", label: "Google Rating" },
];

const DURATION = 1200;
const INTERVAL = 30;
const STEPS = Math.ceil(DURATION / INTERVAL);

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function StatCard({ stat, started }: { stat: typeof STATS[number]; started: boolean }) {
  const [count, setCount] = useState(stat.value);

  useEffect(() => {
    if (!started) {
      setCount(0);
      return;
    }
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / STEPS, 1);
      setCount(Math.round(easeOut(progress) * stat.value));
      if (step >= STEPS) {
        clearInterval(timer);
        setCount(stat.value);
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [started, stat.value]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          color: "#C17B5D",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}{stat.suffix}
      </div>
      <div
        style={{
          width: started ? 60 : 0,
          height: 3,
          backgroundColor: "#C17B5D",
          borderRadius: 2,
          marginTop: 12,
          marginBottom: 12,
          transition: "width 0.6s ease 0.3s",
        }}
      />
      <div
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "clamp(10px, 1.2vw, 14px)",
          color: "#2D4A3E",
          opacity: 0.8,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export function RemotionStatPlayer() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    // Fallback
    const t = setTimeout(() => setStarted(true), 600);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#FAF7F2",
        padding: "clamp(32px, 5vw, 64px) clamp(16px, 4vw, 48px)",
        borderRadius: 12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative corners */}
      <div style={{ position: "absolute", top: 16, left: 16, width: 40, height: 40, borderTop: "3px solid #C17B5D", borderLeft: "3px solid #C17B5D", opacity: 0.15 }} />
      <div style={{ position: "absolute", bottom: 16, right: 16, width: 40, height: 40, borderBottom: "3px solid #C17B5D", borderRight: "3px solid #C17B5D", opacity: 0.15 }} />

      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(18px, 2.5vw, 28px)",
          fontWeight: 600,
          color: "#2D4A3E",
          textAlign: "center",
          marginBottom: "clamp(24px, 3vw, 40px)",
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(15px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Trusted Results, Year After Year
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "clamp(16px, 3vw, 40px)", width: "100%" }}>
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} started={started} />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "clamp(24px, 3vw, 36px)",
          fontFamily: "DM Sans, sans-serif",
          fontSize: 10,
          color: "#2D4A3E",
          opacity: started ? 0.4 : 0,
          transition: "opacity 0.6s ease 1s",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Kristina Bullock Real Estate
      </div>
    </div>
  );
}
