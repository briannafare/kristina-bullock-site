"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { siteData } from "@/lib/data";

interface CTABannerProps {
  headline: string;
  body: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function CTABanner({
  headline,
  body,
  primaryCta = "Schedule a Free Consultation",
  primaryHref = "/contact",
  secondaryCta,
  secondaryHref,
}: CTABannerProps) {
  return (
    <Section className="bg-[var(--color-primary)] py-20 md:py-24">
      <div className="mx-auto max-w-[800px] px-5 md:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.15]">
          {headline}
        </h2>
        <p className="text-white/80 text-lg mt-4 leading-relaxed max-w-[600px] mx-auto">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href={primaryHref}
            className="inline-flex items-center px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {primaryCta}
          </Link>
          {secondaryCta && (
            <a
              href={secondaryHref || siteData.business.phoneTel}
              className="inline-flex items-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
            >
              {secondaryCta}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
