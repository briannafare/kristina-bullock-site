"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/lib/data";

export function NavHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex-shrink-0">
            <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-semibold text-[var(--color-foreground)] tracking-tight">
              Kristina Bullock
            </span>
            <span className="hidden sm:inline font-[family-name:var(--font-body)] text-xs text-[var(--color-muted)] ml-2 tracking-wide">
              Real Estate
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {siteData.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                  pathname === item.href
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteData.business.phoneTel}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteData.business.phone}
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] shadow-sm hover:shadow-md transition-all duration-300"
            >
              Schedule a Call
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[var(--color-foreground)]"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl flex flex-col animate-[slideIn_0.3s_ease]">
            <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
              <a
                href={siteData.business.phoneTel}
                className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
              >
                <Phone className="w-4 h-4" />
                {siteData.business.phone}
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1">
              {[...siteData.nav, { label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-[var(--color-surface-alt)] text-[var(--color-accent)]"
                        : "text-[var(--color-foreground)] hover:bg-[var(--color-surface-alt)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-auto p-5 border-t border-[var(--color-border)]">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
