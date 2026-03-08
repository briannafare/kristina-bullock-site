import type { Metadata } from "next";
import { InnerHero } from "@/components/hero/InnerHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTABanner } from "@/components/cta/CTABanner";

export const metadata: Metadata = {
  title: "Sell Your Home in Portland OR",
  description: "Sell your Portland home for top dollar. Strategic pricing, professional marketing, and expert negotiation from Kristina Bullock.",
};

const sellingSteps = [
  { number: "01", title: "Free Home Valuation", body: "I review recent comparable sales and market conditions to give you an accurate picture of what your home is worth today." },
  { number: "02", title: "Prep & Strategy", body: "Together we decide on pricing strategy, any improvements worth making, and staging recommendations to maximize buyer interest." },
  { number: "03", title: "List & Market", body: "Your home goes live with professional photography, strategic online exposure, and targeted marketing to reach the right buyers." },
  { number: "04", title: "Review Offers & Negotiate", body: "I present every offer with context, advise on terms, and negotiate hard to get you the best possible deal." },
  { number: "05", title: "Close & Celebrate", body: "I manage all the moving parts through closing day \u2014 inspections, appraisals, paperwork \u2014 so you can focus on your next chapter." },
];

const sellerFaqs = [
  { question: "What is my Portland home worth right now?", answer: "Home values depend on neighborhood, condition, size, and current market conditions. As of early 2026, Portland\u2019s median home value is approximately $520,000 according to Zillow. I provide a detailed comparative market analysis for your specific neighborhood. Schedule a free valuation to get started." },
  { question: "How long does it take to sell a house in Portland?", answer: "Portland homes are currently averaging about 54 days on market according to Redfin data. Well-priced homes in desirable neighborhoods can sell faster. Pricing correctly from day one is the single biggest factor in selling speed." },
  { question: "What should I do to prepare my Portland home for sale?", answer: "Focus on curb appeal, decluttering, and addressing obvious maintenance issues. Deep cleaning, fresh paint, and basic landscaping go a long way. During our consultation, I\u2019ll give you specific, prioritized recommendations for your home." },
  { question: "How much does it cost to sell a home in Portland, Oregon?", answer: "Typical seller costs include agent commissions, title insurance, closing fees, and any negotiated buyer credits. Total costs usually run 6\u20138% of the sale price. I\u2019ll provide a detailed net proceeds estimate during our consultation." },
  { question: "Should I sell my Portland home now or wait?", answer: "Portland\u2019s market has stabilized with prices forecast to appreciate 2\u20134% through 2026. Whether to sell now depends on your personal situation, not just market timing. Let\u2019s look at the numbers together." },
];

export default function SellingPage() {
  return (
    <>
      <InnerHero
        overline="Home Selling"
        headline="Sell Your Portland Home for What It's Worth"
        subheadline="The difference between a good sale and a great one comes down to pricing strategy, marketing, and negotiation. I bring all three."
        primaryCta="Get Your Free Home Valuation"
        secondaryCta="Schedule a Listing Consultation"
        secondaryHref="/contact"
      />
      <ServiceDetail
        headline="A Strategic Approach to Selling"
        body={"Kristina Bullock is a licensed real estate broker in Portland, Oregon, helping homeowners sell across Portland, Beaverton, Lake Oswego, Tigard, Gresham, and Hillsboro.\n\nI don\u2019t just stick a sign in the yard and hope for the best. Every listing gets a custom pricing strategy based on real market data, a marketing plan that puts your home in front of the right buyers, and a negotiation approach built to protect your bottom line.\n\nMy background in construction and rehabs means I can also advise on which improvements will increase your sale price \u2014 and which ones aren\u2019t worth the investment."}
        benefits={[
          { title: "Data-Driven Pricing", body: "I analyze comparable sales, market trends, and neighborhood dynamics to price your home for maximum interest and top-dollar offers." },
          { title: "Professional Marketing", body: "Professional photography, compelling listing descriptions, and strategic digital marketing put your home in front of qualified buyers." },
          { title: "Expert Negotiation", body: "From offer review to inspection responses to closing terms \u2014 I negotiate every detail to protect your equity and your timeline." },
        ]}
        testimonial={{ quote: "She\u2019s proactive, responsive, and incredibly organized \u2014 always staying ahead of deadlines, communicating clearly, and advocating for the client every step of the way.", reviewer: "Tyler B. \u2014 Lending Partner, Google Review" }}
      />
      <ProcessTimeline headline="The Selling Process" steps={sellingSteps} />
      <FAQAccordion headline="Seller Questions \u2014 Portland, Oregon" items={sellerFaqs} background="white" />
      <CTABanner headline="Curious What Your Home Could Sell For?" body="Get a free, no-obligation home valuation. I\u2019ll show you what similar homes in your neighborhood are selling for." primaryCta="Get Your Free Home Valuation" secondaryCta="Call 503-382-7798" />
    </>
  );
}
