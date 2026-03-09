"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";

const RemotionStatPlayer = dynamic(
  () => import("./RemotionStatPlayer").then((m) => ({ default: m.RemotionStatPlayer })),
  { ssr: false }
);

export function RemotionStatSection() {
  return (
    <Section className="bg-[var(--color-primary)] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <RemotionStatPlayer />
      </div>
    </Section>
  );
}
