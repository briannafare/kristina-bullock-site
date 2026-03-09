"use client";

import { useState, useEffect, useRef } from "react";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 200, suffix: "+", label: "Families Helped" },
  { value: 17, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: ".0", label: "Google Rating" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const ANIMATION_DURATION = 1200; // ms
const TICK_INTERVAL = 30; // ms
const TOTAL_STEPS = Math.ceil(ANIMATION_DURATION / TICK_INTERVAL);

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function StatCard({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(stat.value); // start at final value (SSR/no-JS fallback)
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset to 0 on mount so we can animate up
    setCount(0);

    let started = false;

    function startAnimation() {
      if (started) return;
      started = true;
      setHasAnimated(true);

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = Math.min(step / TOTAL_STEPS, 1);
        const eased = easeOutCubic(progress);
        setCount(Math.round(eased * stat.value));

        if (step >= TOTAL_STEPS) {
          clearInterval(timer);
          setCount(stat.value); // ensure exact final value
        }
      }, TICK_INTERVAL);
    }

    // Use IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    // Fallback: if already in viewport or observer never fires, start after 500ms
    const fallbackTimer = setTimeout(() => {
      if (!started) startAnimation();
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [stat.value]);

  return (
    <div
      ref={ref}
      className="group rounded-xl border border-[var(--color-primary)]/10 bg-white px-6 py-8 text-center transition-shadow duration-300 hover:shadow-lg"
    >
      <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-[var(--color-accent)]">
        <span>{count}</span>
        <span>{stat.suffix}</span>
      </p>
      <p className="mt-2 font-[family-name:var(--font-body)] text-sm md:text-base text-[var(--color-muted)]">
        {stat.label}
      </p>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <Section className="bg-[var(--color-surface-alt)] py-20 md:py-28 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <Overline>By the Numbers</Overline>
        <SectionHeading className="mb-12">
          Results That Speak for Themselves
        </SectionHeading>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}
