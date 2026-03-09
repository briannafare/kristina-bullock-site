import type { Metadata } from "next";
import { InnerHero } from "@/components/hero/InnerHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTABanner } from "@/components/cta/CTABanner";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";
import { Hammer, Building2, ArrowRightLeft } from "lucide-react";
import { RemotionStatSection } from "@/components/remotion/RemotionStatSection";
import { RemotionChartSection } from "@/components/remotion/RemotionChartSection";

export const metadata: Metadata = {
  title: "Portland Real Estate Investing | Fix & Flip, 1031, Rentals",
  description: "Build wealth through Portland real estate. Kristina Bullock helps investors find fix & flips, rental properties, and navigate 1031 exchanges.",
};

const investmentCards = [
  { icon: Hammer, title: "Fix & Flip", body: "I help investors identify undervalued properties with strong flip potential in the Portland metro. From acquisition to resale, I've been through the full cycle — ARV analysis, rehab scope, contractor networks, and exit strategy." },
  { icon: Building2, title: "Rental Properties", body: "Portland's rental market remains strong with steady demand. I help investors evaluate cash flow, cap rates, and neighborhood rental trends to find properties that perform from day one." },
  { icon: ArrowRightLeft, title: "1031 Exchanges", body: "Need to defer capital gains and reinvest? I understand the timelines, identification rules, and replacement property requirements of 1031 exchanges — and I'll make sure you don't miss a deadline." },
];

const investorFaqs = [
  { question: "What is a 1031 exchange and how does it work in Oregon?", answer: "A 1031 exchange allows you to defer capital gains taxes by reinvesting the proceeds from a sold property into a like-kind replacement property. You have 45 days to identify replacement properties and 180 days to close. The exchange must go through a qualified intermediary. I've guided multiple investors through this process." },
  { question: "Is Portland a good market for fix and flip investing in 2026?", answer: "Portland still offers solid flip opportunities, especially in neighborhoods where older homes can be renovated for strong after-repair value. The stabilizing market means less competition from retail buyers, and properties are sitting longer — giving investors more room to negotiate." },
  { question: "How do I evaluate a rental property in Portland?", answer: "Start with the numbers: purchase price, estimated rental income, property taxes, insurance, maintenance reserves, and vacancy rate. A solid Portland rental should aim for positive cash flow after all expenses. I help investors run these calculations on specific properties." },
  { question: "What areas in Portland are best for real estate investment?", answer: "Gresham and East Portland tend to offer the best price-to-rent ratios for buy-and-hold investors. Beaverton and Hillsboro attract quality tenants due to proximity to tech employers. The right area depends on your strategy." },
  { question: "Do you work with out-of-state investors looking at Portland?", answer: "Yes. I work with investors who aren't local to Portland and handle property evaluation, showings, contractor coordination, and closing logistics on their behalf. I can be your boots on the ground." },
];

export default function InvestingPage() {
  return (
    <>
      <InnerHero
        overline="Real Estate Investing"
        headline="Build Wealth Through Portland Real Estate"
        subheadline="Fix & flips, rental properties, 1031 exchanges — I work with investors who want a real strategy, not just another agent. Licensed since 2008 with deep investment experience."
        primaryCta="Schedule an Investment Strategy Call"
        backgroundImage="/images/investing-hero.jpg"
      />

      <Section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Overline>Investment Services</Overline>
          <SectionHeading className="mb-12">Three Ways I Help Investors</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentCards.map((card) => (
              <div key={card.title} className="border border-[var(--color-border)] rounded-xl p-8 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:border-l-4 hover:border-l-[#2E7D52]">
                <card.icon className="w-10 h-10 text-[var(--color-accent)] stroke-[1.5px] mb-5" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-foreground)] mb-3">{card.title}</h3>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ServiceDetail
        headline="Why Portland for Investment Real Estate?"
        body={"Portland's real estate market offers a compelling combination of stability and opportunity for investors. According to Zillow, the median home value sits around $520,000 as of early 2026, with forecasts projecting 2–4% appreciation through the year.\n\nThe market has moved from the pandemic-era frenzy into a more balanced environment — which actually creates better opportunities for investors who know where to look. Oregon's GDP surpassed $320 billion in 2025, supported by growth in technology, semiconductor manufacturing, and healthcare. Rental demand remains strong, particularly in East Portland, Gresham, and emerging suburban markets."}
        benefits={[
          { title: "~$520K Median Value", body: "With 2–4% annual appreciation forecast — stable growth, not speculation. (Source: Zillow / JVM Lending, 2026)" },
          { title: "Strong Rental Demand", body: "Especially in affordable suburbs like Gresham and East Portland where price-to-rent ratios are favorable." },
          { title: "Growing Economy", body: "Tech, manufacturing, and healthcare drive population and job growth — supporting long-term property values." },
        ]}
        bg="cream"
      />

      {/* Animated stat highlight */}
      <RemotionStatSection />

      {/* Animated bar chart — Remotion Player */}
      <RemotionChartSection />

      <FAQAccordion headline="Investor Questions — Portland, Oregon" items={investorFaqs} background="white" />
      <CTABanner headline="Let's Build Your Portfolio" body="Whether it's your first investment property or your fifteenth — I'll help you find the right opportunity." primaryCta="Schedule an Investment Strategy Call" secondaryCta="Call 503-382-7798" />
    </>
  );
}
