"use client";

import React, { Component, useState, useEffect, useRef } from "react";
import { Player } from "@remotion/player";
import { StatHighlight } from "@/remotion/StatHighlight";
import type { StatHighlightProps } from "@/remotion/types";

const statProps: StatHighlightProps = {
  primaryColor: "#2D4A3E",
  accentColor: "#C17B5D",
  secondaryColor: "#FAF7F2",
  headingFont: "Cormorant Garamond, serif",
  bodyFont: "DM Sans, sans-serif",
  businessName: "Kristina Bullock Real Estate",
  stats: [
    { value: 200, suffix: "+", label: "Families Helped" },
    { value: 17, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: ".0", label: "Google Rating" },
  ],
};

/* ── Error boundary catches Remotion rendering failures ── */
class PlayerErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/* ── Static fallback shown if Player fails ── */
function StaticFallback() {
  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        borderRadius: 12,
        padding: "48px 32px",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 24, fontWeight: 600, color: "#2D4A3E", marginBottom: 32 }}>
        Trusted Results, Year After Year
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 48 }}>
        {statProps.stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 48, fontWeight: 700, color: "#C17B5D", lineHeight: 1 }}>
              {s.value}{s.suffix}
            </div>
            <div style={{ width: 60, height: 3, backgroundColor: "#C17B5D", borderRadius: 2, margin: "12px auto" }} />
            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#2D4A3E", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, fontFamily: "DM Sans, sans-serif", fontSize: 10, color: "#2D4A3E", opacity: 0.4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Kristina Bullock Real Estate
      </div>
    </div>
  );
}

/* ── Main export: Remotion Player with real composition ── */
export function RemotionStatPlayer() {
  const [ready, setReady] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);

  useEffect(() => {
    setReady(true);
  }, []);

  // Force-start playback after mount
  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try {
        playerRef.current?.play();
      } catch {
        // autoPlay should handle it
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [ready]);

  if (!ready) return <StaticFallback />;

  return (
    <PlayerErrorBoundary fallback={<StaticFallback />}>
      <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/9" }}>
        <Player
          ref={playerRef}
          component={StatHighlight as unknown as React.FC<Record<string, unknown>>}
          inputProps={statProps}
          durationInFrames={120}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      </div>
    </PlayerErrorBoundary>
  );
}
