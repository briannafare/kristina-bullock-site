import type { Metadata } from "next";
import { InnerHero } from "@/components/hero/InnerHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTABanner } from "@/components/cta/CTABanner";

export const metadata: Metadata = {
  title: "Buy a Home in Portland OR",
  description: "First-time buyer or moving up? Kristina Bullock helps Portland buyers find the right home, negotiate the best deal, and close with confidence.",
};

const buyingSteps = [
  { number: "01", title: "Free Consultation", body: "We meet — coffee shop, phone, or video — and talk about what you're looking for, your budget, and your timeline." },
  { number: "02", title: "Get Pre-Approved", body: "I'll connect you with trusted lenders to get your financing locked in before we start touring. This makes your offer stronger." },
  { number: "03", title: "Tour Homes", body: "I set up showings that match your criteria. I'll give you honest feedback on each property — including things you might not notice." },
  { number: "04", title: "Make an Offer", body: "When you find the one, I write a competitive offer and negotiate the best terms. Price, contingencies, closing timeline — all of it." },
  { number: "05", title: "Inspection & Negotiation", body: "I coordinate the inspection, review the findings with you, and negotiate repairs or credits with the seller." },
  { number: "06", title: "Close & Get Your Keys", body: "I manage the closing process, handle the paperwork, and make sure everything goes smoothly through signing day." },
];

const buyerFaqs = [
  { question: "How much do I need for a down payment to buy a home in Portland?", answer: "Many Portland buyers put down between 3% and 20% depending on the loan type. On a $520,000 home (near Portland's current median), that's $15,600 to $104,000. FHA loans allow as little as 3.5% down, and some programs offer down payment assistance for first-time Oregon buyers. I'll connect you with lenders who can walk through your specific options." },
  { question: "Is it a good time to buy a house in Portland in 2026?", answer: "Portland's market has moved into a more balanced phase. According to Zillow, the median home value is approximately $520,000 as of early 2026. Homes are forecast to appreciate 2–4% through the year, and inventory has increased — giving buyers more choices and negotiating power than in recent years." },
  { question: "What are the most affordable neighborhoods in the Portland metro area?", answer: "Gresham and East Portland generally offer the lowest price points. Wood Village, Milwaukie, and parts of Tigard also provide more affordable options. Beaverton and Hillsboro tend to be mid-range with strong school districts. Lake Oswego commands premium pricing." },
  { question: "How long does the home buying process take in Portland?", answer: "From first consultation to closing, most Portland home purchases take 2 to 4 months. The offer-to-close timeline is typically 30 to 45 days. Getting pre-approved before you start searching is the single best way to speed things up." },
  { question: "Do I need a buyer's agent in Portland, and what does it cost?", answer: "You don't technically need one, but going without representation means nobody is advocating for your interests in the negotiation. In most Portland transactions, buyer agent compensation is addressed during the offer process. I'll explain exactly how it works during our consultation." },
];

export default function BuyingPage() {
  return (
    <>
      <InnerHero
        overline="Home Buying"
        headline="Find Your Home in Portland — Without the Stress"
        subheadline="Buying a home is one of the biggest decisions you'll make. You deserve an agent who listens, knows the market, and fights for the best deal."
        primaryCta="Schedule a Buyer Consultation"
        backgroundImage="/images/buying-hero.jpg"
      />
      <ServiceDetail
        headline="What You Get When You Work With Me"
        body={"Kristina Bullock is a licensed real estate broker in Portland, Oregon, specializing in buyer representation across the Portland metro area — including Beaverton, Lake Oswego, Tigard, Gresham, and Hillsboro.\n\nI don't just open doors and hand you a flyer. I learn what you're actually looking for, match you with the right neighborhoods, help you understand what a home is really worth, and negotiate hard to protect your bottom line."}
        benefits={[
          { title: "Market Knowledge That Matters", body: "Over 17 years of buying and selling in Portland means I know which neighborhoods are trending, where the hidden value is, and what to watch out for." },
          { title: "Communication You Can Count On", body: "Calls returned. Texts answered. Updates sent before you have to ask. My clients don't wonder what's happening — they always know." },
          { title: "Negotiation That Gets Results", body: "From purchase price to inspection repairs to appraisal gaps — I've handled it all and I negotiate to win for my buyers." },
        ]}
        testimonial={{ quote: "Kristina hit a little different. Polite, yet strong, realistic and dependable. She negotiated her heart out. We secured our home, our first family home, 2 kids in tow.", reviewer: "K. — First-Time Home Buyer, Google Review" }}
      />
      <ProcessTimeline headline="The Home Buying Process" steps={buyingSteps} />
      <FAQAccordion headline="Buyer Questions — Portland, Oregon" items={buyerFaqs} background="white" />
      <CTABanner headline="Ready to Start Your Home Search?" body="Let's talk about what you're looking for. No pressure — just a straightforward conversation." primaryCta="Schedule a Buyer Consultation" secondaryCta="Call 503-382-7798" />
    </>
  );
}
