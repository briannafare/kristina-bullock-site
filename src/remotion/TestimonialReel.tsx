import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";
import type { TestimonialReelProps } from "./types";

const TESTIMONIAL_DURATION = 80; // frames per testimonial (~2.67s at 30fps)
const TRANSITION_FRAMES = 15;

const QuoteIcon: React.FC<{ size: number; color: string; opacity: number }> = ({
  size,
  color,
  opacity,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ opacity }}
  >
    <path
      d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
      fill={color}
    />
    <path
      d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
      fill={color}
    />
  </svg>
);

const StarRow: React.FC<{ count: number; size: number; color: string }> = ({
  count,
  size,
  color,
}) => (
  <div style={{ display: "flex", gap: size * 0.2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const SingleTestimonial: React.FC<{
  quote: string;
  reviewer: string;
  context: string;
  source: string;
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
  width: number;
  height: number;
  fps: number;
  index: number;
}> = ({
  quote,
  reviewer,
  context,
  source,
  primaryColor,
  accentColor,
  secondaryColor,
  headingFont,
  bodyFont,
  width,
  height,
  fps,
  index,
}) => {
  const frame = useCurrentFrame();

  // Entrance animation
  const enterProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  const enterOpacity = interpolate(enterProgress, [0, 1], [0, 1]);
  const enterY = interpolate(enterProgress, [0, 1], [30, 0]);

  // Exit animation
  const exitStart = TESTIMONIAL_DURATION - TRANSITION_FRAMES;
  const exitOpacity = interpolate(frame, [exitStart, TESTIMONIAL_DURATION], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = Math.min(enterOpacity, exitOpacity);

  // Quote text reveal
  const quoteOpacity = interpolate(frame, [5, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stars stagger
  const starsDelay = 20;

  // Attribution
  const attrOpacity = interpolate(frame, [30, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Accent line width
  const lineWidth = interpolate(frame, [0, 25], [0, 80], {
    extrapolateRight: "clamp",
  });

  const quoteSize = Math.round(width * 0.022);
  const nameSize = Math.round(width * 0.016);
  const contextSize = Math.round(width * 0.012);

  // Truncate quote for video display
  const maxChars = 200;
  const displayQuote =
    quote.length > maxChars ? quote.slice(0, maxChars).trim() + "..." : quote;

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `translateY(${enterY}px)`,
      }}
    >
      {/* Background */}
      <AbsoluteFill
        style={{
          backgroundColor: index % 2 === 0 ? primaryColor : secondaryColor,
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -height * 0.15,
          right: -width * 0.08,
          width: width * 0.35,
          height: width * 0.35,
          borderRadius: "50%",
          border: `2px solid ${accentColor}`,
          opacity: 0.1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -height * 0.1,
          left: -width * 0.05,
          width: width * 0.25,
          height: width * 0.25,
          borderRadius: "50%",
          border: `2px solid ${accentColor}`,
          opacity: 0.08,
        }}
      />

      {/* Content */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8% 12%",
        }}
      >
        <QuoteIcon
          size={Math.round(width * 0.04)}
          color={accentColor}
          opacity={0.25}
        />

        {/* Quote text */}
        <div
          style={{
            fontFamily: headingFont,
            fontSize: quoteSize,
            fontStyle: "italic",
            color: index % 2 === 0 ? secondaryColor : primaryColor,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "85%",
            marginTop: 24,
            opacity: quoteOpacity,
          }}
        >
          &ldquo;{displayQuote}&rdquo;
        </div>

        {/* Accent line */}
        <div
          style={{
            width: lineWidth,
            height: 3,
            backgroundColor: accentColor,
            marginTop: 28,
            borderRadius: 2,
          }}
        />

        {/* Stars */}
        <div style={{ marginTop: 20 }}>
          {Array.from({ length: 5 }).map((_, i) => {
            const starOpacity = interpolate(
              frame,
              [starsDelay + i * 2, starsDelay + i * 2 + 5],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            return (
              <svg
                key={i}
                width={Math.round(width * 0.018)}
                height={Math.round(width * 0.018)}
                viewBox="0 0 24 24"
                fill={accentColor}
                style={{
                  display: "inline-block",
                  marginRight: 4,
                  opacity: starOpacity,
                }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            );
          })}
        </div>

        {/* Attribution */}
        <div style={{ marginTop: 16, textAlign: "center", opacity: attrOpacity }}>
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: nameSize,
              fontWeight: 600,
              color: index % 2 === 0 ? secondaryColor : primaryColor,
            }}
          >
            {reviewer}
          </div>
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: contextSize,
              color: index % 2 === 0 ? secondaryColor : primaryColor,
              opacity: 0.6,
              marginTop: 4,
            }}
          >
            {context} &middot; {source}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const TestimonialReel: React.FC<TestimonialReelProps> = ({
  primaryColor,
  accentColor,
  secondaryColor,
  headingFont,
  bodyFont,
  testimonials,
}) => {
  const { width, height, fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      {testimonials.map((t, i) => (
        <Sequence
          key={i}
          from={i * (TESTIMONIAL_DURATION - TRANSITION_FRAMES)}
          durationInFrames={TESTIMONIAL_DURATION}
        >
          <SingleTestimonial
            {...t}
            primaryColor={primaryColor}
            accentColor={accentColor}
            secondaryColor={secondaryColor}
            headingFont={headingFont}
            bodyFont={bodyFont}
            width={width}
            height={height}
            fps={fps}
            index={i}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
