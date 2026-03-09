"use client";

import React, { useState, useEffect } from "react";
import { Player } from "@remotion/player";
import { StatHighlight } from "@/remotion/StatHighlight";
import type { StatHighlightProps } from "@/remotion/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatHighlightComponent = StatHighlight as React.FC<any>;

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

export function RemotionStatPlayer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Static fallback while Remotion loads
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-secondary)] flex items-center justify-center">
        <div className="flex gap-12 text-center">
          {statProps.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-accent)]">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] opacity-70 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <Player
        component={StatHighlightComponent}
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
  );
}
