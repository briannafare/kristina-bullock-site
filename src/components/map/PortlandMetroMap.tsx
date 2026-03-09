"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceArea {
  name: string;
  tagline: string;
  cx: number;
  cy: number;
}

const areas: ServiceArea[] = [
  { name: "Portland", tagline: "Urban, eclectic, walkable", cx: 350, cy: 230 },
  { name: "Beaverton", tagline: "Family-friendly, diverse", cx: 230, cy: 250 },
  { name: "Lake Oswego", tagline: "Upscale, scenic, established", cx: 320, cy: 340 },
  { name: "Tigard", tagline: "Suburban comfort, commuter-friendly", cx: 240, cy: 330 },
  { name: "Gresham", tagline: "Affordable, growing", cx: 480, cy: 240 },
  { name: "Hillsboro", tagline: "Tech hub, modern, fast-growing", cx: 120, cy: 240 },
];

const portland = areas[0];

export function PortlandMetroMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-[700px]">
      <svg
        viewBox="0 0 600 460"
        className="w-full h-auto"
        role="img"
        aria-label="Map of Portland metro service areas"
      >
        {/* Metro area blob outline */}
        <path
          d="M80,200 C60,140 130,70 220,60 C300,50 350,55 420,70 C500,88 540,140 530,210 C535,270 520,320 480,360 C440,400 380,420 310,410 C240,405 180,380 140,340 C100,300 70,260 80,200 Z"
          fill="var(--color-primary)"
          fillOpacity="0.07"
          stroke="var(--color-primary)"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeDasharray="none"
        />

        {/* Dashed connector lines from Portland hub to each area */}
        {areas.slice(1).map((area) => (
          <line
            key={`line-${area.name}`}
            x1={portland.cx}
            y1={portland.cy}
            x2={area.cx}
            y2={area.cy}
            stroke="var(--color-primary)"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
        ))}

        {/* Title label */}
        <text
          x="300"
          y="435"
          textAnchor="middle"
          className="fill-[var(--color-primary)] text-sm font-semibold tracking-wide"
          style={{ fontSize: 14, opacity: 0.5 }}
        >
          Portland Metro Area
        </text>

        {/* Service area dots and labels */}
        {areas.map((area) => {
          const isHovered = hovered === area.name;
          const isPortland = area.name === "Portland";

          /* Tooltip positioning: flip when near edges */
          const tooltipX = area.cx;
          const tooltipY = area.cy - 28;
          const tooltipAnchor = "middle" as const;

          return (
            <g
              key={area.name}
              onMouseEnter={() => setHovered(area.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(area.name)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="button"
              aria-label={`${area.name}: ${area.tagline}`}
              className="cursor-pointer outline-none"
            >
              {/* Invisible larger hit area */}
              <circle
                cx={area.cx}
                cy={area.cy}
                r={24}
                fill="transparent"
              />

              {/* Animated dot */}
              <motion.circle
                cx={area.cx}
                cy={area.cy}
                r={isPortland ? 10 : 8}
                fill="var(--color-accent)"
                stroke="white"
                strokeWidth="2"
                initial={false}
                animate={{
                  scale: isHovered ? 1.45 : 1,
                  fill: isHovered
                    ? "var(--color-primary)"
                    : "var(--color-accent)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                style={{ originX: `${area.cx}px`, originY: `${area.cy}px` }}
              />

              {/* City name label */}
              <text
                x={area.cx}
                y={area.cy + (isPortland ? 24 : 22)}
                textAnchor="middle"
                className="fill-[var(--color-primary)] font-medium pointer-events-none select-none"
                style={{ fontSize: isPortland ? 13 : 11 }}
              >
                {area.name}
              </text>

              {/* Tooltip on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <rect
                      x={tooltipX - 105}
                      y={tooltipY - 34}
                      width={210}
                      height={32}
                      rx={8}
                      fill="var(--color-surface-alt)"
                      stroke="var(--color-primary)"
                      strokeOpacity="0.15"
                      strokeWidth="1"
                    />
                    <text
                      x={tooltipX}
                      y={tooltipY - 14}
                      textAnchor={tooltipAnchor}
                      className="fill-[var(--color-primary)] font-medium pointer-events-none select-none"
                      style={{ fontSize: 12 }}
                    >
                      {area.name} — {area.tagline}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
