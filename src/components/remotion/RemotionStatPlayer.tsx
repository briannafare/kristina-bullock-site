"use client";

import React, { useState, useEffect, useRef } from "react";

interface StatProps {
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
  businessName: string;
  stats: { value: number; suffix: string; label: string }[];
}

const statProps: StatProps = {
  primaryColor: "#2D4A3E",
  accentColor: "#C17B5D",
  secondaryColor: "#FAF7F2",
  headingFont: "Cormorant Garamond, serif",
  bodyFont: "DM Sans, sans-serif",
  businessName: "Kristina Bullock Real Estate",
  stats: [
    { value: 200, suffix: "+", label: "Families Helped" },
    { value: 17, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: ".0", label: "Google Rating" },
  ],
};

function useCountUp(target: number, duration: number, started: boolean) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    startTimeRef.current = performance.now();

    function tick(now: number) {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, started]);

  return current;
}

function AnimatedStatCard({
  stat,
  index,
  started,
}: {
  stat: StatProps["stats"][number];
  index: number;
  started: boolean;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => setVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [started, index]);

  const count = useCountUp(stat.value, 1500, visible);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: statProps.headingFont,
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700,
          color: statProps.accentColor,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        style={{
          width: visible ? 60 : 0,
          height: 3,
          backgroundColor: statProps.accentColor,
          borderRadius: 2,
          marginTop: 12,
          marginBottom: 12,
          transition: "width 0.6s ease 0.3s",
        }}
      />
      <div
        style={{
          fontFamily: statProps.bodyFont,
          fontSize: "clamp(10px, 1.2vw, 14px)",
          color: statProps.primaryColor,
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl overflow-hidden"
      style={{
        backgroundColor: statProps.secondaryColor,
        padding: "clamp(32px, 5vw, 64px) clamp(16px, 4vw, 48px)",
        position: "relative",
      }}
    >
      {/* Decorative corners */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          width: 40,
          height: 40,
          borderTop: `3px solid ${statProps.accentColor}`,
          borderLeft: `3px solid ${statProps.accentColor}`,
          opacity: 0.15,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 40,
          height: 40,
          borderBottom: `3px solid ${statProps.accentColor}`,
          borderRight: `3px solid ${statProps.accentColor}`,
          opacity: 0.15,
        }}
      />

      {/* Title */}
      <div
        style={{
          fontFamily: statProps.headingFont,
          fontSize: "clamp(18px, 2.5vw, 28px)",
          fontWeight: 600,
          color: statProps.primaryColor,
          textAlign: "center",
          marginBottom: "clamp(24px, 3vw, 40px)",
          opacity: started ? 1 : 0,
          transform: started ? "translateY(0)" : "translateY(15px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Trusted Results, Year After Year
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "clamp(16px, 3vw, 40px)",
          width: "100%",
        }}
      >
        {statProps.stats.map((stat, i) => (
          <AnimatedStatCard key={stat.label} stat={stat} index={i} started={started} />
        ))}
      </div>

      {/* Brand */}
      <div
        style={{
          textAlign: "center",
          marginTop: "clamp(24px, 3vw, 36px)",
          fontFamily: statProps.bodyFont,
          fontSize: 10,
          color: statProps.primaryColor,
          opacity: started ? 0.4 : 0,
          transition: "opacity 0.6s ease 1s",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {statProps.businessName}
      </div>
    </div>
  );
}
