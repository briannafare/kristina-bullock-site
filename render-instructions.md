# Remotion Video Render Instructions

## Prerequisites

1. **Node.js 18+** installed
2. **Chrome or Chromium** installed (Remotion uses Chrome Headless Shell)
3. Run `npm install` to ensure Remotion packages are installed

## Quick Start — Render All Videos

```bash
chmod +x renderRemotionVideos.sh
./renderRemotionVideos.sh
```

This renders all 6 compositions to `public/videos/`.

## Individual Render Commands

### Brand Hero (3 formats)

```bash
# Landscape 16:9 — website hero, YouTube
npx remotion render src/remotion/index.ts BrandHero \
  --output public/videos/brand-hero.mp4 --codec h264

# Portrait 9:16 — Instagram Stories, TikTok, Reels
npx remotion render src/remotion/index.ts BrandHeroPortrait \
  --output public/videos/brand-hero-portrait.mp4 --codec h264

# Square 1:1 — Instagram Feed, Facebook
npx remotion render src/remotion/index.ts BrandHeroSquare \
  --output public/videos/brand-hero-square.mp4 --codec h264
```

### Testimonial Reel (2 formats)

```bash
# Landscape 16:9
npx remotion render src/remotion/index.ts TestimonialReel \
  --output public/videos/testimonial-reel.mp4 --codec h264

# Portrait 9:16
npx remotion render src/remotion/index.ts TestimonialReelPortrait \
  --output public/videos/testimonial-reel-portrait.mp4 --codec h264
```

### Stat Highlight

```bash
npx remotion render src/remotion/index.ts StatHighlight \
  --output public/videos/stat-highlight.mp4 --codec h264
```

## Preview in Remotion Studio

```bash
npx remotion studio src/remotion/index.ts
```

Opens a browser preview where you can scrub through each composition.

## Output Files

| File | Dimensions | Duration | Use Case |
|------|-----------|----------|----------|
| `brand-hero.mp4` | 1920×1080 | 5s | Website hero background |
| `brand-hero-portrait.mp4` | 1080×1920 | 5s | Stories / Reels |
| `brand-hero-square.mp4` | 1080×1080 | 5s | Social feed posts |
| `testimonial-reel.mp4` | 1920×1080 | 8s | Website / YouTube |
| `testimonial-reel-portrait.mp4` | 1080×1920 | 8s | Stories / Reels |
| `stat-highlight.mp4` | 1920×1080 | 4s | Website / Social |

## Compositions Overview

### BrandHero
- Ken Burns zoom on `public/images/hero-bg.jpg`
- Word-by-word headline reveal
- Headshot with spring animation
- Animated stat counters (17+ Years, 200+ Families, 5.0 Rating)
- CTA button scale-in

### TestimonialReel
- 3 testimonials with cross-fade transitions
- Alternating brand color backgrounds
- Staggered star rating animation
- Quote icon decorative element

### StatHighlight
- Animated number counting (0 → target)
- Staggered card entrances
- Accent underline reveals
- Decorative corner frames
