import type { Metadata } from "next";
import "./globals.css";
import { NavHeader } from "@/components/layout/NavHeader";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

export const metadata: Metadata = {
  title: {
    default: "Portland Oregon Real Estate Agent | Kristina Bullock",
    template: "%s | Kristina Bullock Real Estate",
  },
  description:
    "Kristina Bullock is a Portland, OR real estate broker helping buyers, sellers, and investors. Licensed since 2008. Schedule a free consultation today.",
  keywords: [
    "Portland Oregon real estate agent",
    "Portland real estate broker",
    "buy a home Portland OR",
    "sell my house Portland Oregon",
    "real estate investor Portland",
    "fix and flip Portland Oregon",
    "1031 exchange Portland",
  ],
  openGraph: {
    title: "Portland Oregon Real Estate Agent | Kristina Bullock",
    description:
      "Buy, sell, or invest in Portland real estate with Kristina Bullock. Licensed since 2008. eXp Realty, LLC.",
    type: "website",
    locale: "en_US",
    siteName: "Kristina Bullock Real Estate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Kristina Bullock Real Estate",
              description:
                "Portland Oregon real estate broker specializing in buying, selling, and investment properties. Licensed since 2008.",
              telephone: "+1-503-382-7798",
              email: "kristina@prosperinrealestate.com",
              url: "https://prosperinrealestate.com",
              areaServed: [
                "Portland, OR",
                "Beaverton, OR",
                "Lake Oswego, OR",
                "Tigard, OR",
                "Gresham, OR",
                "Hillsboro, OR",
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "2",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        <NavHeader />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        {/* GHL_CHAT_WIDGET */}
      </body>
    </html>
  );
}
