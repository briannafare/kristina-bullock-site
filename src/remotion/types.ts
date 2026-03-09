export interface BrandHeroProps {
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
  businessName: string;
  headlineCopy: string;
  subheadlineCopy: string;
  ctaText: string;
  backgroundImagePath: string;
  headshotPath: string;
  stats: { value: string; label: string }[];
}

export interface TestimonialReelProps {
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
  testimonials: {
    quote: string;
    reviewer: string;
    context: string;
    source: string;
  }[];
}

export interface StatHighlightProps {
  primaryColor: string;
  accentColor: string;
  secondaryColor: string;
  headingFont: string;
  bodyFont: string;
  stats: { value: number; suffix: string; label: string }[];
  businessName: string;
}
