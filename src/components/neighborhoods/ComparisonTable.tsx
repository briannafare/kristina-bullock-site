const areas = [
  { area: "Portland", medianPrice: "$520K", bestFor: "Urban lifestyle", vibe: "Eclectic, walkable" },
  { area: "Beaverton", medianPrice: "$510K", bestFor: "Families", vibe: "Diverse, suburban" },
  { area: "Lake Oswego", medianPrice: "$650K+", bestFor: "Upscale living", vibe: "Premium, scenic" },
  { area: "Tigard", medianPrice: "$490K", bestFor: "Commuters", vibe: "Practical, quiet" },
  { area: "Gresham", medianPrice: "$380K", bestFor: "First-time buyers", vibe: "Affordable, growing" },
  { area: "Hillsboro", medianPrice: "$500K", bestFor: "Tech workers", vibe: "Modern, fast-growing" },
];

export function ComparisonTable() {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-6">
        Compare Portland Metro Areas at a Glance
      </h3>

      {/* Desktop table */}
      <div className="hidden md:block rounded-xl overflow-hidden border border-[var(--color-border)]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--color-primary)] text-white">
              <th className="px-6 py-4 text-left font-[family-name:var(--font-heading)] font-semibold">Area</th>
              <th className="px-6 py-4 text-left font-[family-name:var(--font-heading)] font-semibold">Median Price</th>
              <th className="px-6 py-4 text-left font-[family-name:var(--font-heading)] font-semibold">Best For</th>
              <th className="px-6 py-4 text-left font-[family-name:var(--font-heading)] font-semibold">Vibe</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((row, i) => (
              <tr
                key={row.area}
                className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-alt)]"}
              >
                <td className="px-6 py-4 font-[family-name:var(--font-heading)] font-semibold text-[var(--color-foreground)]">
                  {row.area}
                </td>
                <td className="px-6 py-4 text-[var(--color-accent)] font-semibold">
                  {row.medianPrice}
                </td>
                <td className="px-6 py-4 text-[var(--color-foreground)]">
                  {row.bestFor}
                </td>
                <td className="px-6 py-4 text-[var(--color-muted)]">
                  {row.vibe}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-4">
        {areas.map((row, i) => (
          <div
            key={row.area}
            className={`rounded-xl border border-[var(--color-border)] p-5 ${
              i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-alt)]"
            }`}
          >
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--color-foreground)] mb-3">
              {row.area}
            </h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-[var(--color-muted)]">Median Price</span>
              <span className="text-[var(--color-accent)] font-semibold">{row.medianPrice}</span>
              <span className="text-[var(--color-muted)]">Best For</span>
              <span className="text-[var(--color-foreground)]">{row.bestFor}</span>
              <span className="text-[var(--color-muted)]">Vibe</span>
              <span className="text-[var(--color-foreground)]">{row.vibe}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
