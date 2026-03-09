"use client";

import dynamic from "next/dynamic";

const RemotionStatPlayer = dynamic(
  () => import("./RemotionStatPlayer").then((m) => ({ default: m.RemotionStatPlayer })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full rounded-xl bg-[#FAF7F2] p-16 text-center">
        <div className="flex justify-center gap-12">
          {[
            { v: "200+", l: "Families Helped" },
            { v: "17+", l: "Years Experience" },
            { v: "5.0", l: "Google Rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-4xl font-bold" style={{ color: "#C17B5D", fontFamily: "Cormorant Garamond, serif" }}>
                {s.v}
              </p>
              <p className="text-xs uppercase tracking-wider mt-2" style={{ color: "#2D4A3E", opacity: 0.7 }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  }
);

export function RemotionStatSection() {
  return (
    <section className="bg-[var(--color-primary)] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <RemotionStatPlayer />
      </div>
    </section>
  );
}
