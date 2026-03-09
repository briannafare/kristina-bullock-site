import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

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

function yPct(v: number) {
  return ((v - Y_MIN) / (Y_MAX - Y_MIN)) * 100;
}

export interface HomeValuesChartProps {
  title?: string;
}

export const HomeValuesChart: React.FC<HomeValuesChartProps> = ({
  title = "Portland Metro Home Values",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title fade in
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 15], [20, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#2D4A3E", fontFamily: "DM Sans, sans-serif" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "3.5%",
          fontWeight: 600,
          color: "white",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        {title}
      </div>

      {/* Chart area */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          bottom: "12%",
          left: "8%",
          right: "4%",
          display: "flex",
          alignItems: "flex-end",
          gap: "2%",
          paddingLeft: "4%",
        }}
      >
        {/* Y-axis labels */}
        {[400, 450, 500, 550].map((tick) => {
          const bottom = yPct(tick);
          return (
            <div
              key={tick}
              style={{
                position: "absolute",
                left: 0,
                bottom: `${bottom}%`,
                fontSize: "1.8%",
                color: "rgba(255,255,255,0.4)",
                transform: "translateY(50%)",
              }}
            >
              ${tick}K
            </div>
          );
        })}

        {/* Gridlines */}
        {[400, 450, 500, 550].map((tick) => {
          const bottom = yPct(tick);
          return (
            <div
              key={`g${tick}`}
              style={{
                position: "absolute",
                left: "4%",
                right: 0,
                bottom: `${bottom}%`,
                height: 1,
                background: "rgba(255,255,255,0.08)",
              }}
            />
          );
        })}

        {/* Bars */}
        {DATA.map((d, i) => {
          const barStartFrame = 10 + i * 12;
          const barProgress = interpolate(
            frame,
            [barStartFrame, barStartFrame + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          // ease out
          const eased = 1 - Math.pow(1 - barProgress, 3);
          const heightPct = yPct(d.value) * eased;

          const labelOpacity = interpolate(
            frame,
            [barStartFrame + 10, barStartFrame + 18],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={d.year}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
                position: "relative",
              }}
            >
              {/* Value label */}
              <div
                style={{
                  position: "absolute",
                  bottom: `${heightPct + 2}%`,
                  fontSize: "1.8%",
                  fontWeight: 600,
                  color: "white",
                  opacity: labelOpacity,
                }}
              >
                ${d.value}K
              </div>

              {/* Bar */}
              <div
                style={{
                  width: "55%",
                  height: `${heightPct}%`,
                  backgroundColor: d.color,
                  borderRadius: "4px 4px 0 0",
                  minHeight: 0,
                }}
              />

              {/* Year label */}
              <div
                style={{
                  marginTop: 8,
                  fontSize: "1.6%",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                }}
              >
                {d.year}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
