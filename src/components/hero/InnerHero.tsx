"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteData } from "@/lib/data";

interface InnerHeroProps {
  overline: string;
  headline: string;
  subheadline: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function InnerHero({
  overline,
  headline,
  subheadline,
  primaryCta = "Schedule a Consultation",
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref,
}: InnerHeroProps) {
  return (
    <section className="bg-[var(--color-surface-alt)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px]"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-4">
            {overline}
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(36px,5vw,64px)] font-semibold text-[var(--color-foreground)] leading-[1.1] tracking-tight">
            {headline}
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mt-5 max-w-[560px]">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {primaryCta}
            </Link>
            {secondaryCta && (
              <a
                href={secondaryHref || siteData.business.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-[1.5px] border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {secondaryCta}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
