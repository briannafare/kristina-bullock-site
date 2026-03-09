"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceArea {
  name: string;
  tagline: string;
  cx: number;
  cy: number;
  state?: string;
}

const areas: ServiceArea[] = [
  { name: "Portland", tagline: "The city I call home", cx: 370, cy: 280 },
  { name: "Vancouver", tagline: "Close-knit community across the river", cx: 370, cy: 150, state: "WA" },
  { name: "Beaverton", tagline: "Family-friendly with great schools", cx: 225, cy: 300 },
  { name: "Hillsboro", tagline: "Tech hub, growing fast", cx: 110, cy: 290 },
  { name: "Tigard", tagline: "Suburban comfort, easy commutes", cx: 245, cy: 385 },
  { name: "Lake Oswego", tagline: "Lakeside living, premium feel", cx: 340, cy: 390 },
  { name: "Gresham", tagline: "Affordable entry to the metro", cx: 510, cy: 285 },
];

const portland = areas[0];

export function PortlandMetroMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-[740px]">
      <svg
        viewBox="0 0 640 480"
        className="w-full h-auto"
        role="img"
        aria-label="Map of Portland metro service areas including Portland, Vancouver WA, Beaverton, Hillsboro, Tigard, Lake Oswego, and Gresham"
      >
        <defs>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7BA7BC" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#7BA7BC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7BA7BC" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Washington state landmass (north of Columbia River) */}
        <path
          d="M40,30 L600,30 L600,185 C540,195 470,200 400,198 C330,196 260,192 190,188 C140,185 90,180 40,178 Z"
          fill="var(--color-primary)"
          fillOpacity="0.04"
          stroke="var(--color-primary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Oregon state landmass (south of Columbia River) */}
        <path
          d="M40,215 C90,218 140,222 190,225 C260,230 330,234 400,236 C470,238 540,234 600,228 L600,450 L40,450 Z"
          fill="var(--color-primary)"
          fillOpacity="0.06"
          stroke="var(--color-primary)"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        {/* Columbia River — wide curved band */}
        <path
          d="M20,195 C100,200 180,210 260,218 C340,226 430,228 520,222 C570,218 610,212 640,205 L640,195 C610,188 570,182 520,178 C430,170 340,168 260,175 C180,182 100,190 20,185 Z"
          fill="url(#waterGrad)"
        />
        <text
          x="560"
          y="198"
          className="fill-[#5A8FA3] font-medium select-none pointer-events-none"
          style={{ fontSize: 9, letterSpacing: "0.08em" }}
          opacity="0.7"
        >
          Columbia River
        </text>

        {/* Willamette River — subtle vertical line through Portland */}
        <path
          d="M355,236 C350,260 348,290 352,320 C356,350 350,380 345,420 C344,435 343,445 342,455"
          fill="none"
          stroke="#7BA7BC"
          strokeOpacity="0.35"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* State labels */}
        <text
          x="540"
          y="80"
          className="fill-[var(--color-primary)] font-semibold select-none pointer-events-none"
          style={{ fontSize: 12, letterSpacing: "0.15em" }}
          opacity="0.2"
        >
          WASHINGTON
        </text>
        <text
          x="72"
          y="440"
          className="fill-[var(--color-primary)] font-semibold select-none pointer-events-none"
          style={{ fontSize: 12, letterSpacing: "0.15em" }}
          opacity="0.2"
        >
          OREGON
        </text>

        {/* Dashed connector lines from Portland hub */}
        {areas.slice(1).map((area) => (
          <line
            key={`line-${area.name}`}
            x1={portland.cx}
            y1={portland.cy}
            x2={area.cx}
            y2={area.cy}
            stroke="var(--color-primary)"
            strokeOpacity={hovered === area.name ? 0.35 : 0.15}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            style={{ transition: "stroke-opacity 0.2s" }}
          />
        ))}

        {/* Service area markers and labels */}
        {areas.map((area) => {
          const isHovered = hovered === area.name;
          const isPortland = area.name === "Portland";

          const tooltipX = area.cx;
          let tooltipY = area.cy - 32;
          // Flip tooltip below for Vancouver (near top)
          if (area.name === "Vancouver") tooltipY = area.cy + 42;

          // Label positioning adjustments
          let labelX = area.cx;
          let labelY = area.cy + (isPortland ? 28 : 24);
          let labelAnchor: "middle" | "start" | "end" = "middle";
          // Nudge labels that overlap rivers
          if (area.name === "Lake Oswego") {
            labelX = area.cx + 22;
            labelAnchor = "start";
          }

          return (
            <g
              key={area.name}
              onMouseEnter={() => setHovered(area.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(area.name)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="button"
              aria-label={`${area.name}${area.state ? `, ${area.state}` : ""}: ${area.tagline}`}
              className="cursor-pointer outline-none"
            >
              {/* Invisible larger hit area */}
              <circle cx={area.cx} cy={area.cy} r={28} fill="transparent" />

              {/* Accent ring for Portland */}
              {isPortland && (
                <motion.circle
                  cx={area.cx}
                  cy={area.cy}
                  r={18}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeOpacity={0.3}
                  initial={false}
                  animate={{ scale: isHovered ? 1.3 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ originX: `${area.cx}px`, originY: `${area.cy}px` }}
                />
              )}

              {/* City dot */}
              <motion.circle
                cx={area.cx}
                cy={area.cy}
                r={isPortland ? 11 : 7}
                fill={isPortland ? "var(--color-accent)" : "var(--color-primary)"}
                fillOpacity={isPortland ? 1 : 0.5}
                stroke="white"
                strokeWidth={isPortland ? 3 : 2}
                initial={false}
                animate={{
                  scale: isHovered ? 1.4 : 1,
                  fillOpacity: isHovered ? 1 : isPortland ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                style={{ originX: `${area.cx}px`, originY: `${area.cy}px` }}
              />

              {/* City name label */}
              <text
                x={labelX}
                y={labelY}
                textAnchor={labelAnchor}
                className="fill-[var(--color-primary)] font-semibold pointer-events-none select-none"
                style={{ fontSize: isPortland ? 15 : 13 }}
              >
                {area.name}{area.state ? `, ${area.state}` : ""}
              </text>

              {/* Tooltip on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0, y: area.name === "Vancouver" ? -4 : 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: area.name === "Vancouver" ? -4 : 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <rect
                      x={tooltipX - 120}
                      y={tooltipY - 18}
                      width={240}
                      height={30}
                      rx={6}
                      fill="var(--color-primary)"
                      fillOpacity="0.92"
                    />
                    <text
                      x={tooltipX}
                      y={tooltipY + 2}
                      textAnchor="middle"
                      className="fill-white font-medium pointer-events-none select-none"
                      style={{ fontSize: 12 }}
                    >
                      {area.tagline}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}

        {/* Title label */}
        <text
          x="320"
          y="470"
          textAnchor="middle"
          className="fill-[var(--color-primary)] font-semibold tracking-wide select-none"
          style={{ fontSize: 13 }}
          opacity="0.4"
        >
          Portland Metro Area
        </text>
      </svg>
    </div>
  );
}
