"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteData } from "@/lib/data";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--color-accent)] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] font-semibold text-sm py-3 rounded-lg"
        >
          <Calendar className="w-4 h-4" />
          Schedule a Call
        </Link>
        <a
          href={siteData.business.phoneTel}
          className="flex items-center justify-center w-12 h-12 rounded-lg border-2 border-white/40 text-white"
          aria-label="Call Kristina"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
