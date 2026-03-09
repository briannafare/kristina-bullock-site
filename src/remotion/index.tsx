import { registerRoot, Composition } from "remotion";
import React from "react";
import { BrandHero } from "./BrandHero";
import { TestimonialReel } from "./TestimonialReel";
import { StatHighlight } from "./StatHighlight";
import type {
  BrandHeroProps,
  TestimonialReelProps,
  StatHighlightProps,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = React.FC<any>;

const brandColors = {
  primaryColor: "#2D4A3E",
  accentColor: "#C17B5D",
  secondaryColor: "#FAF7F2",
  headingFont: "Cormorant Garamond, serif",
  bodyFont: "DM Sans, sans-serif",
};

const heroProps: BrandHeroProps = {
  ...brandColors,
  businessName: "Kristina Bullock Real Estate",
  headlineCopy: "Your Portland Home Journey Starts Here",
  subheadlineCopy:
    "Expert guidance for buying, selling, and investing in Portland real estate",
  ctaText: "Schedule a Free Consultation",
  backgroundImagePath: "images/hero-bg.jpg",
  headshotPath: "headshot.jpg",
  stats: [
    { value: "17+", label: "Years Experience" },
    { value: "200+", label: "Families Helped" },
    { value: "5.0", label: "Google Rating" },
  ],
};

const testimonialProps: TestimonialReelProps = {
  ...brandColors,
  testimonials: [
    {
      quote:
        "Kristina was an absolute pleasure to work with from the lender side. She's proactive, responsive, and incredibly organized — always staying ahead of deadlines and advocating for the client every step of the way.",
      reviewer: "Tyler B.",
      context: "Lending Partner",
      source: "Google Review",
    },
    {
      quote:
        "Kristina hit a little different. Polite, yet strong, realistic and dependable. She negotiated her heart out. We secured our home, our first family home, 2 kids in tow. Kristina went from stranger to family friend.",
      reviewer: "K.",
      context: "First-Time Home Buyer",
      source: "Google Review",
    },
    {
      quote:
        "If you are looking for someone truthful and honest, friendly but strong, and pull out all the stops — she is the one. Kristina was willing to meet us within 24 hours of initial communication.",
      reviewer: "K.",
      context: "Home Buyer",
      source: "Google Review",
    },
  ],
};

const statProps: StatHighlightProps = {
  ...brandColors,
  businessName: "Kristina Bullock Real Estate",
  stats: [
    { value: 200, suffix: "+", label: "Families Helped" },
    { value: 17, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: ".0", label: "Google Rating" },
  ],
};

// 5 seconds at 30fps = 150 frames
const HERO_DURATION = 150;
// 8 seconds at 30fps = 240 frames
const TESTIMONIAL_DURATION = 240;
// 4 seconds at 30fps = 120 frames
const STAT_DURATION = 120;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Brand Hero — landscape 16:9 */}
      <Composition
        id="BrandHero"
        component={BrandHero as AnyComponent}
        durationInFrames={HERO_DURATION}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={heroProps}
      />
      {/* Brand Hero — portrait 9:16 (Stories/Reels) */}
      <Composition
        id="BrandHeroPortrait"
        component={BrandHero as AnyComponent}
        durationInFrames={HERO_DURATION}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={heroProps}
      />
      {/* Brand Hero — square 1:1 (Social) */}
      <Composition
        id="BrandHeroSquare"
        component={BrandHero as AnyComponent}
        durationInFrames={HERO_DURATION}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={heroProps}
      />
      {/* Testimonial Reel — landscape */}
      <Composition
        id="TestimonialReel"
        component={TestimonialReel as AnyComponent}
        durationInFrames={TESTIMONIAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={testimonialProps}
      />
      {/* Testimonial Reel — portrait */}
      <Composition
        id="TestimonialReelPortrait"
        component={TestimonialReel as AnyComponent}
        durationInFrames={TESTIMONIAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={testimonialProps}
      />
      {/* Stat Highlight — landscape */}
      <Composition
        id="StatHighlight"
        component={StatHighlight as AnyComponent}
        durationInFrames={STAT_DURATION}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={statProps}
      />
    </>
  );
};

registerRoot(RemotionRoot);
