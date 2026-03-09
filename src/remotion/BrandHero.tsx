import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
  Sequence,
} from "remotion";
import type { BrandHeroProps } from "./types";

export const BrandHero: React.FC<BrandHeroProps> = ({
  primaryColor,
  accentColor,
  secondaryColor,
  headingFont,
  bodyFont,
  businessName,
  headlineCopy,
  subheadlineCopy,
  ctaText,
  backgroundImagePath,
  headshotPath,
  stats,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isPortrait = height > width;
  const isSquare = Math.abs(width - height) < 100;

  // === Background zoom (Ken Burns) ===
  const bgScale = interpolate(frame, [0, 150], [1.0, 1.08], {
    extrapolateRight: "clamp",
  });

  // === Overlay fade ===
  const overlayOpacity = interpolate(frame, [0, 30], [0.8, 0.55], {
    extrapolateRight: "clamp",
  });

  // === Headline reveal (word-by-word) ===
  const words = headlineCopy.split(" ");

  // === Subheadline ===
  const subDelay = 35;
  const subOpacity = interpolate(frame, [subDelay, subDelay + 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [subDelay, subDelay + 20], [20, 0], {
    extrapolateRight: "clamp",
  });

  // === CTA button ===
  const ctaDelay = 60;
  const ctaProgress = spring({
    frame: frame - ctaDelay,
    fps,
    config: { damping: 14, stiffness: 120 },
  });
  const ctaOpacity = interpolate(ctaProgress, [0, 1], [0, 1]);
  const ctaScale = interpolate(ctaProgress, [0, 1], [0.85, 1]);

  // === Headshot reveal ===
  const headshotDelay = 15;
  const headshotProgress = spring({
    frame: frame - headshotDelay,
    fps,
    config: { damping: 18, stiffness: 80 },
  });
  const headshotOpacity = interpolate(headshotProgress, [0, 1], [0, 1]);
  const headshotScale = interpolate(headshotProgress, [0, 1], [0.9, 1]);
  const headshotX = interpolate(headshotProgress, [0, 1], [40, 0]);

  // === Stats counter animation ===
  const statsDelay = 80;

  // === Bottom brand name ===
  const brandOpacity = interpolate(frame, [90, 110], [0, 0.7], {
    extrapolateRight: "clamp",
  });

  // Responsive sizing
  const headlineSize = isPortrait
    ? Math.round(width * 0.07)
    : Math.round(width * 0.042);
  const subSize = isPortrait
    ? Math.round(width * 0.035)
    : Math.round(width * 0.019);
  const ctaSize = isPortrait
    ? Math.round(width * 0.03)
    : Math.round(width * 0.016);
  const statValueSize = isPortrait
    ? Math.round(width * 0.06)
    : Math.round(width * 0.028);
  const statLabelSize = isPortrait
    ? Math.round(width * 0.025)
    : Math.round(width * 0.011);

  return (
    <AbsoluteFill style={{ backgroundColor: primaryColor }}>
      {/* Background image with Ken Burns */}
      {backgroundImagePath && (
        <AbsoluteFill>
          <Img
            src={staticFile(backgroundImagePath)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${bgScale})`,
            }}
          />
        </AbsoluteFill>
      )}

      {/* Dark overlay */}
      <AbsoluteFill
        style={{ backgroundColor: primaryColor, opacity: overlayOpacity }}
      />

      {/* Main content */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: isPortrait ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          padding: isPortrait ? "8% 6%" : "5% 7%",
          gap: isPortrait ? 30 : 60,
        }}
      >
        {/* Left / Top - Copy */}
        <div
          style={{
            flex: isPortrait ? "none" : 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: isPortrait ? "100%" : "58%",
          }}
        >
          {/* Headline - word by word reveal */}
          <div
            style={{
              fontFamily: headingFont,
              fontSize: headlineSize,
              fontWeight: 600,
              color: secondaryColor,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {words.map((word, i) => {
              const wordDelay = 8 + i * 3;
              const wordOpacity = interpolate(
                frame,
                [wordDelay, wordDelay + 8],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );
              const wordY = interpolate(
                frame,
                [wordDelay, wordDelay + 8],
                [18, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );
              return (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    opacity: wordOpacity,
                    transform: `translateY(${wordY}px)`,
                    marginRight: headlineSize * 0.25,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontFamily: bodyFont,
              fontSize: subSize,
              color: secondaryColor,
              opacity: subOpacity,
              transform: `translateY(${subY}px)`,
              marginTop: 20,
              maxWidth: isPortrait ? "100%" : "90%",
              lineHeight: 1.5,
            }}
          >
            {subheadlineCopy}
          </div>

          {/* CTA Button */}
          <div
            style={{
              marginTop: 32,
              opacity: ctaOpacity,
              transform: `scale(${ctaScale})`,
              transformOrigin: "left center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: `${ctaSize * 0.9}px ${ctaSize * 2.8}px`,
                backgroundColor: accentColor,
                borderRadius: 8,
                fontFamily: bodyFont,
                fontSize: ctaSize,
                fontWeight: 600,
                color: secondaryColor,
                letterSpacing: "0.02em",
              }}
            >
              {ctaText}
            </div>
          </div>

          {/* Stats bar */}
          <Sequence from={statsDelay}>
            <div
              style={{
                display: "flex",
                gap: isPortrait ? 24 : 40,
                marginTop: 36,
                flexWrap: "wrap",
              }}
            >
              {stats.map((stat, i) => {
                const statProgress = spring({
                  frame: frame - statsDelay - i * 6,
                  fps,
                  config: { damping: 20, stiffness: 100 },
                });
                const statOpacity = interpolate(statProgress, [0, 1], [0, 1]);

                // Animate numeric value counting up
                const numericValue = parseInt(stat.value.replace(/\D/g, ""));
                const countedValue = Math.round(
                  interpolate(statProgress, [0, 1], [0, numericValue])
                );
                const displayValue = stat.value.replace(
                  /\d+/,
                  String(countedValue)
                );

                return (
                  <div
                    key={stat.label}
                    style={{
                      opacity: statOpacity,
                      textAlign: isPortrait ? "center" : "left",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: headingFont,
                        fontSize: statValueSize,
                        fontWeight: 700,
                        color: accentColor,
                        lineHeight: 1,
                      }}
                    >
                      {displayValue}
                    </div>
                    <div
                      style={{
                        fontFamily: bodyFont,
                        fontSize: statLabelSize,
                        color: secondaryColor,
                        opacity: 0.7,
                        marginTop: 4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </Sequence>
        </div>

        {/* Right / Bottom - Headshot */}
        {headshotPath && !isSquare && (
          <div
            style={{
              flex: isPortrait ? "none" : "0 0 auto",
              opacity: headshotOpacity,
              transform: `scale(${headshotScale}) translateX(${headshotX}px)`,
            }}
          >
            <div
              style={{
                width: isPortrait ? width * 0.4 : width * 0.22,
                aspectRatio: "3/4",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                border: `3px solid ${accentColor}`,
              }}
            >
              <Img
                src={staticFile(headshotPath)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>
        )}
      </AbsoluteFill>

      {/* Bottom brand name */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: bodyFont,
          fontSize: Math.round(width * 0.011),
          color: secondaryColor,
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
