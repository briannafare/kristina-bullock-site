import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Star } from "lucide-react";
import { siteData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-4">
              Kristina Bullock
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Portland real estate broker helping buyers, sellers, and investors since 2008. Licensed in Oregon.
            </p>
            <p className="text-white/50 text-xs">
              {siteData.business.brokerage}
              <br />
              {siteData.business.license}
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              ))}
              <span className="text-sm ml-1 text-white/80">
                {siteData.business.googleRating} on Google
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                ...siteData.nav,
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Areas Served
            </h4>
            <div className="flex flex-col gap-2.5">
              {siteData.serviceAreas.map((area) => (
                <span key={area.name} className="text-sm text-white/75 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                  {area.name}, OR
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={siteData.business.phoneTel}
                className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                {siteData.business.phone}
              </a>
              <a
                href={`mailto:${siteData.business.email}`}
                className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                {siteData.business.email}
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/75">
                <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                {siteData.business.hours}
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center mt-6 px-6 py-3 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>&copy; {new Date().getFullYear()} Kristina Bullock Real Estate. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <span>{siteData.business.brokerage}</span>
            <span>&middot;</span>
            <span>Equal Housing Opportunity</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
