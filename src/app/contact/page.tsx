"use client";

import { Phone, Mail, Clock, MapPin, Star, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { siteData } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-surface-alt)] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-4">
            Get In Touch
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(36px,5vw,64px)] font-semibold text-[var(--color-foreground)] leading-[1.1] tracking-tight max-w-[600px]">
            Let&apos;s Talk Real Estate
          </h1>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mt-5 max-w-[500px]">
            Whether you have a quick question or you&apos;re ready to dive in — I&apos;d love to hear from you. No sales pitch, no pressure.
          </p>
        </div>
      </section>

      <Section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
            {/* Form */}
            <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-foreground)] mb-6">
                Send Me a Message
              </h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">First Name *</label>
                    <input type="text" id="first_name" name="first_name" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">Last Name *</label>
                    <input type="text" id="last_name" name="last_name" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">Phone *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white" placeholder="(503) 000-0000" />
                </div>
                <div>
                  <label htmlFor="service_type" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">How Can I Help?</label>
                  <select id="service_type" name="service_type" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white text-[var(--color-muted)]">
                    <option value="">Select an option...</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investing">Real Estate Investing</option>
                    <option value="senior-transition">Senior Transition / Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white resize-none" placeholder="Tell me about your real estate goals..." />
                </div>
                <input type="hidden" name="source" value="website-contact" />
                <button
                  type="button"
                  className="w-full py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                >
                  Schedule My Consultation
                </button>
                <p className="text-xs text-[var(--color-muted)] text-center">
                  Your information is private and never shared with third parties.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[var(--color-foreground)] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href={siteData.business.phoneTel} className="flex items-center gap-3 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-alt)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="font-medium">{siteData.business.phone}</p>
                      <p className="text-sm text-[var(--color-muted)]">Call or text anytime</p>
                    </div>
                  </a>
                  <a href={`mailto:${siteData.business.email}`} className="flex items-center gap-3 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-alt)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="font-medium">{siteData.business.email}</p>
                      <p className="text-sm text-[var(--color-muted)]">Email anytime</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-alt)] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-foreground)]">Business Hours</p>
                      <p className="text-sm text-[var(--color-muted)]">{siteData.business.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-alt)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-foreground)]">Portland, Oregon</p>
                      <p className="text-sm text-[var(--color-muted)]">Serving the Greater Portland Metro</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Reviews */}
              <a
                href={siteData.business.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[var(--color-border)] rounded-xl p-5 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[var(--color-foreground)]">Google Reviews</span>
                  <ExternalLink className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                  <span className="text-sm font-semibold ml-1">{siteData.business.googleRating}</span>
                  <span className="text-sm text-[var(--color-muted)]">({siteData.business.googleReviewCount} reviews)</span>
                </div>
              </a>

              {/* Brokerage info */}
              <div className="text-sm text-[var(--color-muted)] border-t border-[var(--color-border)] pt-6">
                <p>{siteData.business.brokerage}</p>
                <p>{siteData.business.license}</p>
                <p className="mt-1">Equal Housing Opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
