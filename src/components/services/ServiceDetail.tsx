"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Star, Quote } from "lucide-react";

interface Benefit {
  title: string;
  body: string;
}

interface Testimonial {
  quote: string;
  reviewer: string;
}

interface ServiceDetailProps {
  headline: string;
  body: string;
  benefits: Benefit[];
  testimonial?: Testimonial;
  bg?: "white" | "cream";
}

export function ServiceDetail({ headline, body, benefits, testimonial, bg = "white" }: ServiceDetailProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const bgClass = bg === "white" ? "bg-white" : "bg-[var(--color-surface-alt)]";

  return (
    <Section className={`${bgClass} py-20 md:py-28`}>
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-[720px] mx-auto mb-14">
          <SectionHeading className="mb-6">{headline}</SectionHeading>
          <div className="text-[var(--color-muted)] text-[15px] leading-relaxed space-y-4">
            {body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="border border-[var(--color-border)] rounded-xl p-6 bg-white"
            >
              <h3 className="font-semibold text-[var(--color-foreground)] mb-2">{b.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>

        {testimonial && (
          <div className="max-w-[700px] mx-auto border-l-4 border-[var(--color-accent)] pl-6 py-2">
            <Quote className="w-6 h-6 text-[var(--color-accent)] opacity-30 mb-2" />
            <blockquote className="font-[family-name:var(--font-heading)] text-lg italic text-[var(--color-foreground)] leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <span className="text-sm text-[var(--color-muted)]">{testimonial.reviewer}</span>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
