"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  DollarSign,
  TrendingUp,
  MapPin,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";
import { TrustStrip } from "@/components/social-proof/TrustStrip";
import { TestimonialSection } from "@/components/testimonials/TestimonialSection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTABanner } from "@/components/cta/CTABanner";
import { siteData } from "@/lib/data";

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="bg-[var(--color-surface-alt)] min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Hero background — static image + optional video overlay */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-bg.jpg"
      >
        <source src="/videos/brand-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[var(--color-primary)]/55" />
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 w-full py-16 md:py-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-4">
              Portland, Oregon Real Estate
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(40px,6vw,80px)] font-semibold text-white leading-[1.08] tracking-tight">
              Buy, Sell, or Invest in Portland
              <span className="text-[var(--color-accent)]"> —</span>
              <br className="hidden md:block" />
              <span className="italic"> With Someone Who Shows Up</span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mt-6 max-w-[540px]">
              Licensed since 2008. From first-time buyers to seasoned investors, I bring
              proactive communication, sharp negotiation, and genuine care to every
              transaction. No fluff, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href={siteData.business.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-[1.5px] border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call {siteData.business.phone}
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-white/70">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
                <span className="ml-1">5.0</span>
              </div>
              <span>&middot;</span>
              <span>17+ Years Experience</span>
              <span>&middot;</span>
              <span>eXp Realty</span>
            </div>
          </motion.div>

          {/* Right — Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] md:w-[340px] lg:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/headshot.jpg"
                alt="Kristina Bullock — Portland Oregon Real Estate Broker"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 280px, 380px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES GRID ─── */
const services = [
  {
    icon: Home,
    title: "Buying a Home",
    body: "First-time buyer or seasoned mover — I\u2019ll help you find the right home in the right neighborhood at the right price. No pressure, just guidance.",
    href: "/buying",
  },
  {
    icon: DollarSign,
    title: "Selling Your Home",
    body: "Strategic pricing, smart marketing, and relentless negotiation. I don\u2019t just list your home — I get it sold for what it\u2019s worth.",
    href: "/selling",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Investing",
    body: "Fix & flips, rental properties, 1031 exchanges — I work with investors who want to build real wealth through Portland real estate.",
    href: "/investing",
  },
];

function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Overline>How I Help</Overline>
        <SectionHeading className="mb-12 max-w-[600px]">
          Whether You&apos;re Buying, Selling, or Investing
        </SectionHeading>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Link href={s.href} className="group block h-full">
                <div className="h-full border border-[var(--color-border)] rounded-xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 bg-white">
                  <s.icon className="w-10 h-10 text-[var(--color-accent)] stroke-[1.5px] mb-5" />
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-foreground)] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mb-5">
                    {s.body}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── ABOUT SNIPPET ─── */
function AboutSnippet() {
  return (
    <Section className="bg-[var(--color-surface-alt)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 items-center">
          <div>
            <Overline>Meet Kristina</Overline>
            <SectionHeading className="mb-6">
              Real Estate, Done <span className="italic">Differently</span>
            </SectionHeading>
            <div className="space-y-4 text-[var(--color-muted)] text-[15px] leading-relaxed">
              <p>
                I&apos;ve been helping people buy, sell, and invest in Portland real
                estate since 2008. My background isn&apos;t just transactions — it&apos;s
                grounded in years of hands-on work with residential homes, rehabs, and new
                construction alongside builders and developers.
              </p>
              <p>
                That means I can help my clients see a home not only for what it is today,
                but for what it can become — whether that means preparing it for sale,
                repositioning it for investors, or finding the right next step for your
                family&apos;s future.
              </p>
              <p>
                I also specialize in helping seniors and their families navigate major life
                transitions. Selling a longtime family home is emotional and deeply
                personal. I take a compassionate, step-by-step approach to make sure
                everyone feels supported and confident throughout the process.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[var(--color-accent)] hover:gap-3 transition-all"
            >
              More About Kristina <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] md:w-[320px] aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <Image
                src="/headshot.jpg"
                alt="Kristina Bullock"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── NEIGHBORHOODS ─── */
function NeighborhoodsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section className="bg-[var(--color-surface-alt)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <Overline>Areas I Serve</Overline>
        <SectionHeading className="mb-10">
          Portland and Beyond
        </SectionHeading>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {siteData.serviceAreas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link href="/neighborhoods" className="group block">
                <div className="bg-white border border-[var(--color-border)] rounded-xl p-5 md:p-6 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                    <h3 className="font-semibold text-[var(--color-foreground)]">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-muted)]">{area.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/neighborhoods"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:gap-3 transition-all"
          >
            Explore All Neighborhoods <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

/* ─── PROCESS ─── */
const steps = [
  {
    num: "01",
    title: "Schedule a Call",
    body: "Tell me what you\u2019re looking for — buying, selling, or investing. No commitment, no pressure. Just a conversation.",
  },
  {
    num: "02",
    title: "Build Your Plan",
    body: "I\u2019ll put together a personalized strategy based on your goals, timeline, and budget. You\u2019ll know exactly what to expect.",
  },
  {
    num: "03",
    title: "Make Your Move",
    body: "From first showing to closing day, I handle the details, fight for your best deal, and keep you informed the whole way.",
  },
];

function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="text-center mb-12">
          <Overline>How It Works</Overline>
          <SectionHeading>Three Steps to Getting Started</SectionHeading>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center mx-auto mb-5 text-lg font-bold shadow-md">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-[var(--color-border)]" />
              )}
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-foreground)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-muted)] text-[15px] leading-relaxed max-w-[280px] mx-auto">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── FAQ DATA ─── */
const homeFaqs = [
  {
    question: "What does it cost to work with a real estate agent in Portland?",
    answer:
      "Buyers typically pay nothing out of pocket \u2014 the seller\u2019s side covers agent commissions in most Portland transactions. For sellers, commission rates are negotiated upfront. I\u2019ll walk you through exactly what to expect during our initial consultation so there are no surprises.",
  },
  {
    question: "How long does it take to buy a home in Portland, Oregon?",
    answer:
      "The typical home purchase in Portland takes 45 to 75 days from accepted offer to closing. The full process \u2014 including pre-approval, searching, and making an offer \u2014 usually takes 2 to 4 months total. I help you get pre-approved first so you\u2019re ready to move fast when the right home appears.",
  },
  {
    question: "Is Portland a good market for real estate investment in 2026?",
    answer:
      "Portland remains a strong investment market. According to Zillow, the median home value is approximately $520,000 as of early 2026, with forecasts projecting 2\u20134% appreciation through the year. Rental demand stays strong, especially in East Portland and the suburbs. I work with investors on fix & flips, rentals, and 1031 exchanges.",
  },
  {
    question:
      "What neighborhoods in Portland are best for first-time buyers?",
    answer:
      "Gresham and East Portland tend to offer the most affordable entry points in the metro area. Beaverton and Tigard are great for families who want suburban living with easy access to the city. The best neighborhood depends on your budget, commute, and lifestyle \u2014 which is exactly what we\u2019ll figure out together.",
  },
  {
    question: "How do I get started with Kristina?",
    answer:
      "Schedule a free consultation call. We\u2019ll talk about your goals, timeline, and any questions you have. No commitment required \u2014 just a straightforward conversation to see if we\u2019re a good fit. You can call or text me directly at 503-382-7798, or use the scheduling form on this site.",
  },
];

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <AboutSnippet />
      <TestimonialSection />
      <NeighborhoodsGrid />
      <ProcessSection />
      <FAQAccordion
        overline="Common Questions"
        headline="Questions About Portland Real Estate?"
        items={homeFaqs}
      />
      <CTABanner
        headline="Ready to Make a Move?"
        body="Whether you\u2019re buying your first home, selling for top dollar, or building an investment portfolio \u2014 let\u2019s talk."
        primaryCta="Schedule a Free Consultation"
        secondaryCta={`Call ${siteData.business.phone}`}
      />
    </>
  );
}
