import { registerRoot, Composition } from "remotion";
import React from "react";
import { BrandHero } from "./Composition";
import type { BrandHeroProps } from "./types";

const defaultProps: BrandHeroProps = {
  primaryColor: "#2D4A3E",
  accentColor: "#C17B5D",
  headingFont: "Cormorant Garamond, serif",
  bodyFont: "DM Sans, sans-serif",
  businessName: "Kristina Bullock Real Estate",
  headlineCopy: "Your Portland Home Journey Starts Here",
  subheadlineCopy:
    "Expert guidance for buying, selling, and investing in Portland real estate",
  ctaText: "Let's Connect",
  backgroundImagePath: "",
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BrandHero"
        component={BrandHero}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={defaultProps}
      />
      <Composition
        id="BrandHeroPortrait"
        component={BrandHero}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultProps}
      />
      <Composition
        id="BrandHeroSquare"
        component={BrandHero}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={defaultProps}
      />
    </>
  );
};

registerRoot(RemotionRoot);
