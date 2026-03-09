import type { Metadata } from "next";
import Image from "next/image";
import { InnerHero } from "@/components/hero/InnerHero";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTABanner } from "@/components/cta/CTABanner";
import { Section, Overline, SectionHeading } from "@/components/ui/Section";
import { ServiceAreaMap } from "@/components/map/ServiceAreaMap";
import { ComparisonTable } from "@/components/neighborhoods/ComparisonTable";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Portland OR Neighborhoods Guide",
  description: "Explore Portland, Beaverton, Lake Oswego, Tigard, Gresham, and Hillsboro real estate. Local insights from Kristina Bullock.",
};

const areas = [
  { name: "Portland", vibe: "Urban, eclectic, walkable", image: "/images/neighborhoods-cityscape.jpg", body: "Portland is a city of neighborhoods — from the walkable streets of NE Alberta to the leafy boulevards of Southwest Portland. With over 90 distinct neighborhoods, there's a fit for every lifestyle. The city offers food, culture, parks, and transit that suburban areas can't match. Portland's median home value sits around $520,000 as of early 2026 (Zillow), with significant variation by neighborhood." },
  { name: "Beaverton", vibe: "Family-friendly, diverse", image: "/images/neighborhood-beaverton.jpg", body: "Beaverton is one of Portland's most popular suburbs, known for excellent schools, diverse dining, and proximity to tech employers like Nike and Intel. Families love the access to parks and trails. Prices tend to be at or above Portland's median, but strong school districts make it a solid long-term investment." },
  { name: "Lake Oswego", vibe: "Upscale, scenic, established", image: "/images/neighborhood-lake-oswego.jpg", body: "Lake Oswego is Portland's premier lakeside community, known for tree-lined streets, top-rated schools, and an upscale feel. Homes here tend to be priced above the metro average, attracting buyers who want a quieter, more polished suburban experience." },
  { name: "Tigard", vibe: "Suburban comfort, commuter-friendly", image: "/images/neighborhood-tigard.jpg", body: "Tigard offers a balanced suburban lifestyle with easy highway access to downtown Portland. It's a favorite for commuters who want more space without a long drive. Home prices tend to be moderate, making Tigard a practical choice for families and first-time buyers." },
  { name: "Gresham", vibe: "Affordable, growing", image: "/images/neighborhood-gresham.jpg", body: "Gresham is the most affordable entry point into the Portland metro area. Located east of Portland, it offers larger lots, newer construction in some areas, and a growing downtown district. For investors, Gresham's lower price points and strong rental demand make it one of the most interesting markets in the metro." },
  { name: "Hillsboro", vibe: "Tech hub, modern, fast-growing", image: "/images/neighborhood-hillsboro.jpg", body: "Hillsboro is booming thanks to its position as Oregon's tech hub. Intel's major presence drives employment and attracts a skilled workforce. The city has invested in downtown revitalization, parks, and transit. Newer construction and modern amenities appeal to families and young professionals." },
];

const neighborhoodFaqs = [
  { question: "What are the best neighborhoods in Portland for families in 2026?", answer: "For families, Beaverton and Lake Oswego consistently rank at the top for school quality and safety. Within Portland, Sellwood-Moreland, Alameda, and Hillsdale offer a family-friendly urban feel. Tigard is great if you want suburban space with an easy commute." },
  { question: "Where are the most affordable areas to buy a home near Portland?", answer: "Gresham is generally the most affordable city in the Portland metro area. Parts of East Portland, Milwaukie, and Wood Village also offer lower price points. Hillsboro and Tigard are mid-range with good value relative to amenities." },
  { question: "Is Lake Oswego worth the premium over Portland?", answer: "Lake Oswego offers top-rated schools, lake access, a strong sense of community, and consistently high property values. If school quality and a quieter suburban feel are priorities, many families find the premium worthwhile." },
  { question: "What's happening in Hillsboro's real estate market?", answer: "Hillsboro continues to grow, driven by Intel and the broader tech sector. The city has invested heavily in downtown development and transit. New construction is more available here than in older Portland neighborhoods." },
  { question: "How do I decide which Portland neighborhood is right for me?", answer: "Start with your non-negotiables: commute time, school district, budget, and lifestyle preferences. From there, I'll match you with neighborhoods that fit and set up tours so you can feel the vibe in person." },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <InnerHero
        overline="Neighborhoods"
        headline="Portland Area Neighborhoods — A Local's Guide"
        subheadline="Every neighborhood has a personality. I'll help you find the one that fits yours."
        primaryCta="Schedule a Free Consultation"
        backgroundImage="/images/neighborhoods-cityscape.jpg"
      />

      <Section className="bg-[var(--color-surface-alt)] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 text-center">
          <Overline>Service Area</Overline>
          <SectionHeading className="mb-10">Where I Work</SectionHeading>
          <ServiceAreaMap />
        </div>
      </Section>

      <Section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Overline>Explore the Portland Metro</Overline>
          <SectionHeading className="mb-12">Know Your Neighborhoods</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div key={area.name} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 bg-[var(--color-surface-alt)]">
                  {area.image ? (
                    <>
                      <Image src={area.image} alt={`${area.name} neighborhood`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-[var(--color-primary)]/50" />
                    </>
                  ) : null}
                  <div className="relative z-10 flex items-center justify-center h-full text-center">
                    <div>
                      <MapPin className={`w-8 h-8 mx-auto mb-2 ${area.image ? "text-white" : "text-[var(--color-accent)]"}`} />
                      <span className={`font-[family-name:var(--font-heading)] text-2xl font-semibold ${area.image ? "text-white" : "text-[var(--color-foreground)]"}`}>{area.name}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm italic text-[var(--color-accent)] mb-3">{area.vibe}</p>
                  <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">{area.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--color-surface-alt)] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <ComparisonTable />
        </div>
      </Section>

      <FAQAccordion headline="Portland Neighborhood Questions" items={neighborhoodFaqs} />
      <CTABanner headline="Find Your Perfect Portland Neighborhood" body="Tell me what you're looking for and I'll match you with the areas that fit your lifestyle, budget, and goals." primaryCta="Schedule a Free Consultation" secondaryCta="Call 503-382-7798" />
    </>
  );
}
