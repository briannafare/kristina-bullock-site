"use client";

import { useState, useEffect, useRef } from "react";

const DATA = [
  { year: 2020, value: 420, color: "#C4704F" },
  { year: 2021, value: 490, color: "#2E7D52" },
  { year: 2022, value: 540, color: "#1A4A6B" },
  { year: 2023, value: 510, color: "#8B5E3C" },
  { year: 2024, value: 505, color: "#6B3D7A" },
  { year: 2025, value: 480, color: "#C4704F" },
  { year: 2026, value: 520, color: "#2E7D52" },
];

const Y_MIN = 380;
const Y_MAX = 570;
const PADDING = { top: 52, right: 24, bottom: 48, left: 56 };
const W = 620;
const H = 380;
const plotW = W - PADDING.left - PADDING.right;
const plotH = H - PADDING.top - PADDING.bottom;

function yScale(v: number) {
  return plotH - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * plotH;
}

export function AnimatedBarChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    const fallback = setTimeout(() => setAnimated(true), 800);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  const barW = plotW / DATA.length;
  const innerW = barW * 0.55;

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Bar chart: Portland Metro Home Values 2020-2026"
      >
        <defs>
          <style>{`
            .ab-bar { transition: height 0.5s cubic-bezier(0.22, 1, 0.36, 1), y 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
            .ab-label { transition: opacity 0.3s ease; }
          `}</style>
        </defs>

        {/* Background */}
        <rect x={0} y={0} width={W} height={H} fill="#2D4A3E" rx={12} />

        {/* Title */}
        <text
          x={W / 2}
          y={32}
          textAnchor="middle"
          fill="white"
          fontSize={16}
          fontWeight={600}
          fontFamily="Cormorant Garamond, serif"
        >
          Portland Metro Home Values
        </text>

        <g transform={`translate(${PADDING.left}, ${PADDING.top})`}>
          {/* Y-axis label */}
          <text x={-PADDING.left + 4} y={-16} fontSize={9} fill="white" fillOpacity={0.4} fontWeight={500}>
            Value ($K)
          </text>

          {/* Gridlines & Y labels */}
          {[400, 450, 500, 550].map((tick) => {
            const y = yScale(tick);
            return (
              <g key={tick}>
                <line x1={0} x2={plotW} y1={y} y2={y} stroke="white" strokeOpacity={0.1} strokeDasharray="4 3" />
                <text x={-10} y={y} textAnchor="end" dominantBaseline="middle" fontSize={10} fill="white" fillOpacity={0.5} fontWeight={500}>
                  ${tick}K
                </text>
              </g>
            );
          })}

          {/* X-axis line */}
          <line x1={0} x2={plotW} y1={plotH} y2={plotH} stroke="white" strokeOpacity={0.15} />

          {/* X-axis label */}
          <text x={plotW / 2} y={plotH + 40} textAnchor="middle" fontSize={9} fill="white" fillOpacity={0.4} fontWeight={500}>
            Year
          </text>

          {/* Bars */}
          {DATA.map((d, i) => {
            const x = i * barW + (barW - innerW) / 2;
            const barH = plotH - yScale(d.value);
            const targetY = yScale(d.value);

            return (
              <g key={d.year}>
                <rect
                  className="ab-bar"
                  x={x}
                  y={animated ? targetY : plotH}
                  width={innerW}
                  height={animated ? barH : 0}
                  rx={4}
                  fill={d.color}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
                <text
                  className="ab-label"
                  x={x + innerW / 2}
                  y={animated ? targetY - 8 : plotH - 4}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={600}
                  fill="white"
                  opacity={animated ? 1 : 0}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  ${d.value}K
                </text>
                <text
                  x={x + innerW / 2}
                  y={plotH + 20}
                  textAnchor="middle"
                  fontSize={11}
                  fill="white"
                  fillOpacity={0.7}
                  fontWeight={500}
                >
                  {d.year}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
