import type { Metadata } from "next";
import { InnerHero } from "@/components/hero/InnerHero";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTABanner } from "@/components/cta/CTABanner";

export const metadata: Metadata = {
  title: "Portland Real Estate FAQ",
  description: "Answers to common questions about buying, selling, and investing in Portland, Oregon real estate from Kristina Bullock.",
};

const buyingFaqs = [
  { question: "How much house can I afford in Portland?", answer: "A common guideline is that your monthly housing payment shouldn't exceed 28–30% of your gross monthly income. With Portland's median home price around $520,000, most buyers need a household income of $100,000+ to comfortably afford a home. I'll connect you with lenders who can give you exact pre-approval numbers." },
  { question: "What credit score do I need to buy a home in Oregon?", answer: "Most conventional loans require a minimum credit score of 620. FHA loans may accept scores as low as 580 with 3.5% down. A higher score gets you better interest rates. If your credit needs work, I can recommend resources." },
  { question: "Should I buy a condo or a house in Portland?", answer: "It depends on your budget, lifestyle, and maintenance preferences. Condos typically start around $300,000–$350,000 with lower maintenance but HOA fees. Single-family homes offer more space and no HOA but start higher. Condos can also be good starter investment properties." },
  { question: "What are closing costs for buyers in Portland, Oregon?", answer: "Buyer closing costs typically range from 2–4% of the purchase price. On a $520,000 home, that's roughly $10,000–$21,000. This includes lender fees, title insurance, escrow fees, and prepaid items. Some can be negotiated." },
  { question: "Can I buy a home in Portland with no down payment?", answer: "VA loans (for qualifying veterans) offer zero-down financing. USDA loans may work in some outer suburban areas. Some Oregon first-time buyer programs offer down payment assistance. For most buyers, plan for at least 3–5% down." },
];

const sellingFaqs = [
  { question: "When is the best time to sell a house in Portland?", answer: "Spring (March–May) is traditionally the strongest selling season. However, well-priced homes sell year-round. In fall/winter, there's less competition from other sellers — which can work in your favor." },
  { question: "Do I need to make repairs before selling?", answer: "Not always, but strategic repairs can increase your sale price. Focus on inspection-ready items: roof, plumbing, electrical, structural concerns. Cosmetic updates like fresh paint and landscaping offer strong ROI. I'll give you specific, prioritized recommendations." },
  { question: "How do I price my Portland home correctly?", answer: "Pricing starts with a comparative market analysis (CMA) looking at recently sold homes similar to yours. I also factor in current market conditions and buyer demand in your neighborhood. Overpricing is the most common mistake sellers make." },
  { question: "What happens if my Portland home doesn't sell?", answer: "If your home isn't getting offers, it's usually a pricing issue. We'll review market feedback and comparable data to determine if an adjustment is needed. I stay proactive and adjust strategy quickly." },
  { question: "Can I sell my Portland home as-is?", answer: "Yes. As-is sales attract investors and cash buyers. The trade-off is a lower sale price compared to move-in ready listings. I can help you weigh whether as-is or light renovation will net you more money." },
];

const investingFaqs = [
  { question: "How much money do I need to start investing in Portland real estate?", answer: "For a conventional investment property loan, expect 20–25% down. On a $400,000 rental, that's $80,000–$100,000 plus closing costs and reserves. Some investors start with house-hacking — living in one unit of a duplex and renting the other." },
  { question: "What is the 1% rule and does it apply in Portland?", answer: "The 1% rule suggests monthly rent should equal at least 1% of purchase price. In Portland, most properties land in the 0.6–0.8% range. The trade-off is strong long-term appreciation. I help investors evaluate the full picture: cash flow, appreciation, tax benefits, and equity." },
  { question: "Should I invest in Portland or the suburbs?", answer: "Portland proper offers stronger appreciation and rental demand but higher prices. Suburban markets like Gresham and Hillsboro offer better cash flow entry points. For flips, you want neighborhoods where renovated value exceeds purchase-plus-rehab cost significantly." },
  { question: "How do property taxes work for investment properties in Oregon?", answer: "Oregon taxes are based on assessed value, often lower than market value due to Measure 50 limitations. In Multnomah County, expect around 1.0–1.2% of assessed value annually. Property taxes are deductible on investment returns." },
  { question: "What should I know about being a landlord in Portland?", answer: "Portland has tenant-friendly regulations including rent increase notice requirements, relocation assistance rules, and specific eviction grounds. Oregon's statewide rent control caps annual increases at 7% plus CPI. Understand these rules before buying." },
];

export default function FAQPage() {
  return (
    <>
      <InnerHero
        overline="FAQ"
        headline="Portland Real Estate — Frequently Asked Questions"
        subheadline="Straight answers to the questions I hear most. If yours isn't here, just reach out."
        primaryCta="Schedule a Free Consultation"
      />
      <FAQAccordion headline="Buying a Home in Portland" items={buyingFaqs} background="white" />
      <FAQAccordion headline="Selling Your Portland Home" items={sellingFaqs} />
      <FAQAccordion headline="Real Estate Investing in Portland" items={investingFaqs} background="white" />
      <CTABanner
        headline="Still Have Questions?"
        body="I'm always happy to talk through your specific situation. Reach out anytime."
        primaryCta="Schedule a Free Consultation"
        secondaryCta="Call 503-382-7798"
      />
    </>
  );
}
