"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Award, Building2, Clock } from "lucide-react";

const stats = [
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Clock, value: "17+", label: "Years Experience" },
  { icon: Award, value: "", label: "Five Star Agent Award Winner" },
  { icon: Building2, value: "", label: "eXp Realty, LLC" },
];

export function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-[var(--color-primary)] py-6">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="w-5 h-5 text-[var(--color-accent)] mb-2" />
              {stat.value && (
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              )}
              <span className="text-xs text-white/70 mt-0.5 leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
