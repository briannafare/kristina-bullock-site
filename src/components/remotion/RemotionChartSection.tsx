"use client";

import dynamic from "next/dynamic";

const RemotionChartPlayer = dynamic(
  () =>
    import("./RemotionChartPlayer").then((m) => ({
      default: m.RemotionChartPlayer,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: 12,
          backgroundColor: "#2D4A3E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Cormorant Garamond, serif",
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Portland Metro Home Values
      </div>
    ),
  }
);

export function RemotionChartSection() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <RemotionChartPlayer />
        <p className="mt-4 text-xs text-[var(--color-primary)] opacity-40 leading-relaxed">
          Source: Zillow Home Value Index. Data represents median home values for
          Portland, OR metro area.
        </p>
      </div>
    </section>
  );
}
