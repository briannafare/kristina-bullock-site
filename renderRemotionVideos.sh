#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────────────
# Render all Remotion video compositions for
# Kristina Bullock Real Estate
#
# Prerequisites:
#   npm install (Remotion packages must be installed)
#   Chrome or Chrome Headless Shell must be available
#
# Usage:
#   chmod +x renderRemotionVideos.sh
#   ./renderRemotionVideos.sh
# ─────────────────────────────────────────────────────

OUTPUT_DIR="public/videos"
ENTRY="src/remotion/index.ts"

mkdir -p "$OUTPUT_DIR"

echo "═══════════════════════════════════════════════════"
echo "  Kristina Bullock — Remotion Video Render"
echo "═══════════════════════════════════════════════════"
echo ""

# ── Brand Hero (3 formats) ──
echo "[1/6] Rendering BrandHero (16:9)..."
npx remotion render "$ENTRY" BrandHero \
  --output "$OUTPUT_DIR/brand-hero.mp4" \
  --codec h264

echo "[2/6] Rendering BrandHeroPortrait (9:16)..."
npx remotion render "$ENTRY" BrandHeroPortrait \
  --output "$OUTPUT_DIR/brand-hero-portrait.mp4" \
  --codec h264

echo "[3/6] Rendering BrandHeroSquare (1:1)..."
npx remotion render "$ENTRY" BrandHeroSquare \
  --output "$OUTPUT_DIR/brand-hero-square.mp4" \
  --codec h264

# ── Testimonial Reel (2 formats) ──
echo "[4/6] Rendering TestimonialReel (16:9)..."
npx remotion render "$ENTRY" TestimonialReel \
  --output "$OUTPUT_DIR/testimonial-reel.mp4" \
  --codec h264

echo "[5/6] Rendering TestimonialReelPortrait (9:16)..."
npx remotion render "$ENTRY" TestimonialReelPortrait \
  --output "$OUTPUT_DIR/testimonial-reel-portrait.mp4" \
  --codec h264

# ── Stat Highlight ──
echo "[6/6] Rendering StatHighlight (16:9)..."
npx remotion render "$ENTRY" StatHighlight \
  --output "$OUTPUT_DIR/stat-highlight.mp4" \
  --codec h264

echo ""
echo "═══════════════════════════════════════════════════"
echo "  All renders complete!"
echo "  Output: $OUTPUT_DIR/"
echo "═══════════════════════════════════════════════════"
ls -lh "$OUTPUT_DIR"/*.mp4
