import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import type { StatHighlightProps } from "./types";

const StatCard: React.FC<{
  value: number;
  suffix: string;
  label: string;
  index: number;
  accentColor: string;
  primaryColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
  fps: number;
  width: number;
  totalStats: number;
}> = ({
  value,
  suffix,
  label,
  index,
  accentColor,
  primaryColor,
  secondaryColor,
  headingFont,
  bodyFont,
  fps,
  width,
  totalStats,
}) => {
  const frame = useCurrentFrame();
  const delay = 15 + index * 10;

  // Card entrance
  const cardProgress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  const cardOpacity = interpolate(cardProgress, [0, 1], [0, 1]);
  const cardY = interpolate(cardProgress, [0, 1], [40, 0]);
  const cardScale = interpolate(cardProgress, [0, 1], [0.92, 1]);

  // Number counting animation
  const countDuration = 30;
  const countStart = delay + 5;
  const countProgress = interpolate(
    frame,
    [countStart, countStart + countDuration],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  // Ease out cubic for natural counting
  const easedProgress = 1 - Math.pow(1 - countProgress, 3);
  const currentValue = Math.round(easedProgress * value);

  // Accent underline
  const lineProgress = interpolate(
    frame,
    [delay + 20, delay + 35],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const valueSize = Math.round(width * 0.055);
  const labelSize = Math.round(width * 0.014);
  const cardWidth = width / (totalStats + 0.5);

  return (
    <div
      style={{
        opacity: cardOpacity,
        transform: `translateY(${cardY}px) scale(${cardScale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: cardWidth,
      }}
    >
      {/* Value */}
      <div
        style={{
          fontFamily: headingFont,
          fontSize: valueSize,
          fontWeight: 700,
          color: accentColor,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {currentValue}
        {suffix}
      </div>

      {/* Accent underline */}
      <div
        style={{
          width: interpolate(lineProgress, [0, 1], [0, 60]),
          height: 3,
          backgroundColor: accentColor,
          borderRadius: 2,
          marginTop: 12,
          marginBottom: 12,
        }}
      />

      {/* Label */}
      <div
        style={{
          fontFamily: bodyFont,
          fontSize: labelSize,
          color: primaryColor,
          opacity: 0.8,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 500,
          maxWidth: cardWidth * 0.85,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const StatHighlight: React.FC<StatHighlightProps> = ({
  primaryColor,
  accentColor,
  secondaryColor,
  headingFont,
  bodyFont,
  stats,
  businessName,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Title entrance
  const titleProgress = spring({
    frame: frame - 5,
    fps,
    config: { damping: 22, stiffness: 100 },
  });
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleY = interpolate(titleProgress, [0, 1], [25, 0]);

  // Bottom brand
  const brandOpacity = interpolate(frame, [80, 100], [0, 0.5], {
    extrapolateRight: "clamp",
  });

  // Decorative elements
  const cornerSize = width * 0.08;
  const cornerOpacity = interpolate(frame, [0, 20], [0, 0.15], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: secondaryColor }}>
      {/* Decorative corner elements */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          width: cornerSize,
          height: cornerSize,
          borderTop: `3px solid ${accentColor}`,
          borderLeft: `3px solid ${accentColor}`,
          opacity: cornerOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          width: cornerSize,
          height: cornerSize,
          borderBottom: `3px solid ${accentColor}`,
          borderRight: `3px solid ${accentColor}`,
          opacity: cornerOpacity,
        }}
      />

      {/* Content */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8%",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontFamily: headingFont,
            fontSize: Math.round(width * 0.028),
            fontWeight: 600,
            color: primaryColor,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 50,
            letterSpacing: "-0.01em",
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
            gap: 40,
            width: "100%",
          }}
        >
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
              accentColor={accentColor}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              headingFont={headingFont}
              bodyFont={bodyFont}
              fps={fps}
              width={width}
              totalStats={stats.length}
            />
          ))}
        </div>
      </AbsoluteFill>

      {/* Bottom brand */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: bodyFont,
          fontSize: Math.round(width * 0.01),
          color: primaryColor,
          opacity: brandOpacity,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {businessName}
      </div>
    </AbsoluteFill>
  );
};
