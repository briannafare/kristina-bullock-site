import type { Metadata } from "next";
import Image from "next/image";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";
import { TrustStrip } from "@/components/social-proof/TrustStrip";
import { TestimonialSection } from "@/components/testimonials/TestimonialSection";
import { CTABanner } from "@/components/cta/CTABanner";
import { AnimatedStats } from "@/components/stats/AnimatedStats";

export const metadata: Metadata = {
  title: "About Kristina Bullock | Portland OR Real Estate Broker",
  description: "Kristina Bullock is a Portland, Oregon real estate broker with eXp Realty. Licensed since 2008. Five Star Agent Award winner. Oregon License #200812019.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — split with headshot */}
      <section className="bg-[var(--color-surface-alt)] py-20 md:py-28 relative overflow-hidden">
        <Image
          src="/images/about-consultation.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/65" />
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-first">
              <div className="relative w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/20">
                <Image
                  src="/headshot.jpg"
                  alt="Kristina Bullock — Portland Oregon Real Estate Broker"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="350px"
                />
              </div>
            </div>
            <div>
              <Overline>About</Overline>
              <h1 className="font-[family-name:var(--font-heading)] text-[clamp(36px,5vw,64px)] font-semibold text-white leading-[1.1] tracking-tight">
                Your Portland Real Estate Partner
              </h1>
              <p className="text-white/70 text-sm mt-4">
                Kristina Bullock &middot; Real Estate Broker &middot; eXp Realty, LLC &middot; Oregon License #200812019
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[720px] px-5 md:px-8">
          <SectionHeading className="mb-8">
            Real Estate Is <span className="italic">Personal</span>. I Treat It That Way.
          </SectionHeading>
          <div className="space-y-5 text-[var(--color-muted)] text-[15px] leading-[1.8]">
            <p>
              I&apos;ve been licensed in real estate since 2008 and have spent nearly two decades serving individuals, families, and investors throughout the Greater Portland Metro and Southwest Washington areas. My experience goes far beyond traditional buying and selling — it&apos;s grounded in years of hands-on work with residential homes, rehabs, and new construction alongside builders and developers.
            </p>
            <p>
              That background means I can help my clients see a home not only for what it is today, but for what it can become — whether that means preparing it for sale, repositioning it for investors, or determining the best next step for a family&apos;s future.
            </p>
            <p>
              A meaningful focus of my work is helping seniors and their families navigate major life transitions. I understand that selling a longtime family home can be emotional, overwhelming, and deeply personal. I take a compassionate, step-by-step approach — helping simplify decisions, coordinate timelines, and connect families with trusted resources — so everyone feels supported, informed, and confident throughout the process.
            </p>
            <p>
              I&apos;m known for my calm presence, strong negotiation skills, and service-first mindset. I work with first-time buyers, seasoned investors, and families facing sensitive transitions, always prioritizing clear communication, thoughtful guidance, and exceptional care. My greatest goal is to make sure my clients feel protected, understood, and truly taken care of from start to finish.
            </p>
            <p>
              When I&apos;m not working with clients, I enjoy traveling and experiencing new cultures, and at home I love embracing the beauty, lifestyle, and sense of community that make the Pacific Northwest such a special place to live.
            </p>
          </div>

          {/* Credentials box */}
          <div className="mt-12 border border-[var(--color-border)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-alt)]">
            <h3 className="font-semibold text-[var(--color-foreground)] mb-4">Credentials & Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--color-muted)]">
              <div><span className="font-medium text-[var(--color-foreground)]">License:</span> Oregon #200812019</div>
              <div><span className="font-medium text-[var(--color-foreground)]">Brokerage:</span> eXp Realty, LLC</div>
              <div><span className="font-medium text-[var(--color-foreground)]">Experience:</span> Licensed since 2008</div>
              <div><span className="font-medium text-[var(--color-foreground)]">Awards:</span> Five Star Agent (Multi-Year Winner)</div>
              <div className="sm:col-span-2"><span className="font-medium text-[var(--color-foreground)]">Specialties:</span> Residential sales, investment properties, fix & flip, 1031 exchanges, new construction, senior transitions</div>
            </div>
          </div>
        </div>
      </Section>

      <AnimatedStats />
      <TrustStrip />
      <TestimonialSection />
      <CTABanner
        headline="Ready to Work Together?"
        body="Let&apos;s have a conversation. No sales pitch — just a chance to see if we&apos;re a good fit for your real estate goals."
        primaryCta="Schedule a Free Consultation"
        secondaryCta="Call 503-382-7798"
      />
    </>
  );
}
