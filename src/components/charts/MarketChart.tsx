"use client";

import { useRef, useState, useEffect } from "react";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";

const DATA = [
  { year: 2020, value: 420 },
  { year: 2021, value: 490 },
  { year: 2022, value: 540 },
  { year: 2023, value: 510 },
  { year: 2024, value: 505 },
  { year: 2025, value: 515 },
  { year: 2026, value: 520 },
];

function barColor(year: number): string {
  if (year <= 2022) return "#D4A88C";
  if (year === 2023) return "#A89E94";
  if (year === 2024) return "#CDA078";
  if (year === 2025) return "#C58B66";
  return "#C17B5D";
}

function labelColor(year: number): string {
  if (year <= 2022) return "#C49A7E";
  if (year === 2023) return "#9A9189";
  return "#C17B5D";
}

const Y_TICKS = [400, 450, 500, 550];
const Y_MIN = 380;
const Y_MAX = 570;

const CHART_PADDING = { top: 48, right: 24, bottom: 48, left: 56 };
const VIEWBOX_W = 620;
const VIEWBOX_H = 380;

const plotW = VIEWBOX_W - CHART_PADDING.left - CHART_PADDING.right;
const plotH = VIEWBOX_H - CHART_PADDING.top - CHART_PADDING.bottom;

function yScale(v: number) {
  return plotH - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * plotH;
}

export function MarketChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = chartRef.current;
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
    return () => observer.disconnect();
  }, []);

  const barWidth = plotW / DATA.length;
  const barInnerWidth = barWidth * 0.55;

  return (
    <Section className="bg-[var(--color-surface-alt)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <Overline>Market Data</Overline>
        <SectionHeading className="mb-3">
          Portland Home Value Trends
        </SectionHeading>
        <p className="text-sm text-[var(--color-muted)] mb-8 max-w-xl">
          Portland Metro Median Home Value 2020–2026
        </p>

        <div ref={chartRef} className="w-full">
          <svg
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
            className="w-full h-auto"
            role="img"
            aria-label="Bar chart showing Portland median home values from 2020 to 2026, rising from $420K to $520K"
          >
            <defs>
              <style>{`
                .chart-bar {
                  transition: height 0.6s cubic-bezier(0.22, 1, 0.36, 1), y 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .chart-label {
                  transition: opacity 0.4s ease 0.3s;
                }
              `}</style>
            </defs>

            {/* Background */}
            <rect
              x={0}
              y={0}
              width={VIEWBOX_W}
              height={VIEWBOX_H}
              fill="white"
              rx={8}
            />

            <g
              transform={`translate(${CHART_PADDING.left}, ${CHART_PADDING.top})`}
            >
              {/* Y-axis label */}
              <text
                x={-CHART_PADDING.left + 4}
                y={-20}
                fontSize={10}
                fill="#2D4A3E"
                fillOpacity={0.4}
                fontWeight={500}
              >
                Value (thousands)
              </text>

              {/* Gridlines & Y-axis labels */}
              {Y_TICKS.map((tick) => {
                const y = yScale(tick);
                return (
                  <g key={tick}>
                    <line
                      x1={0}
                      x2={plotW}
                      y1={y}
                      y2={y}
                      stroke="#2D4A3E"
                      strokeOpacity={0.08}
                      strokeDasharray="4 3"
                    />
                    <text
                      x={-10}
                      y={y}
                      textAnchor="end"
                      dominantBaseline="middle"
                      fontSize={11}
                      fill="#2D4A3E"
                      fillOpacity={0.5}
                      fontWeight={500}
                    >
                      ${tick}K
                    </text>
                  </g>
                );
              })}

              {/* X-axis line */}
              <line
                x1={0}
                x2={plotW}
                y1={plotH}
                y2={plotH}
                stroke="#2D4A3E"
                strokeOpacity={0.1}
              />

              {/* X-axis label */}
              <text
                x={plotW / 2}
                y={plotH + 42}
                textAnchor="middle"
                fontSize={10}
                fill="#2D4A3E"
                fillOpacity={0.4}
                fontWeight={500}
              >
                Year
              </text>

              {/* Bars — CSS transition driven by state */}
              {DATA.map((d, i) => {
                const x = i * barWidth + (barWidth - barInnerWidth) / 2;
                const barH = plotH - yScale(d.value);
                const targetY = yScale(d.value);
                const color = barColor(d.year);
                const lColor = labelColor(d.year);

                return (
                  <g key={d.year}>
                    {/* Bar */}
                    <rect
                      className="chart-bar"
                      x={x}
                      y={animated ? targetY : plotH}
                      width={barInnerWidth}
                      height={animated ? barH : 0}
                      rx={4}
                      fill={color}
                      style={{
                        transitionDelay: `${i * 80}ms`,
                      }}
                    />

                    {/* Value label on top */}
                    <text
                      className="chart-label"
                      x={x + barInnerWidth / 2}
                      y={animated ? targetY - 8 : plotH - 4}
                      textAnchor="middle"
                      fontSize={11}
                      fontWeight={600}
                      fill={lColor}
                      opacity={animated ? 1 : 0}
                      style={{
                        transitionDelay: `${i * 80 + 150}ms`,
                      }}
                    >
                      ${d.value}K
                    </text>

                    {/* X-axis year label */}
                    <text
                      x={x + barInnerWidth / 2}
                      y={plotH + 22}
                      textAnchor="middle"
                      fontSize={12}
                      fill="#2D4A3E"
                      fillOpacity={0.65}
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

        <p className="mt-4 text-xs text-[var(--color-primary)] opacity-40 leading-relaxed">
          Source: Zillow Home Value Index. Data represents median home values for
          Portland, OR metro area.
        </p>
      </div>
    </Section>
  );
}
