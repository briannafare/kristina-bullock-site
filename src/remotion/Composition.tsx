import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";
import type { BrandHeroProps } from "./types";

export const BrandHero: React.FC<BrandHeroProps> = ({
  primaryColor,
  accentColor,
  headingFont,
  bodyFont,
  businessName,
  headlineCopy,
  subheadlineCopy,
  ctaText,
  backgroundImagePath,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headlineY = spring({ frame: frame - 10, fps, config: { damping: 20 } });

  const subOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const ctaOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateRight: "clamp",
  });
  const ctaScale = spring({ frame: frame - 70, fps, config: { damping: 15 } });

  const overlayOpacity = interpolate(frame, [0, 20], [0.7, 0.5], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {backgroundImagePath && (
        <Img
          src={staticFile(backgroundImagePath)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <AbsoluteFill
        style={{ backgroundColor: primaryColor, opacity: overlayOpacity }}
      />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <div
          style={{
            fontFamily: headingFont,
            fontSize: Math.round(width * 0.045),
            color: "#FAF7F2",
            textAlign: "center",
            opacity: headlineOpacity,
            transform: `translateY(${interpolate(headlineY, [0, 1], [40, 0])}px)`,
            maxWidth: "80%",
            lineHeight: 1.2,
          }}
        >
          {headlineCopy}
        </div>
        <div
          style={{
            fontFamily: bodyFont,
            fontSize: Math.round(width * 0.02),
            color: "#FAF7F2",
            textAlign: "center",
            opacity: subOpacity,
            marginTop: 24,
            maxWidth: "60%",
          }}
        >
          {subheadlineCopy}
        </div>
        <div
          style={{
            marginTop: 40,
            padding: "16px 48px",
            backgroundColor: accentColor,
            borderRadius: 8,
            fontFamily: bodyFont,
            fontSize: Math.round(width * 0.018),
            color: "#FAF7F2",
            opacity: ctaOpacity,
            transform: `scale(${interpolate(ctaScale, [0, 1], [0.8, 1])})`,
          }}
        >
          {ctaText}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontFamily: bodyFont,
            fontSize: Math.round(width * 0.012),
            color: "#FAF7F2",
            opacity: 0.6,
          }}
        >
          {businessName}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
