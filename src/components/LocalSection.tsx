/**
 * LocalSection — AI Forge Advantage
 * Design: "LOCAL FIRST. ALWAYS." — Fort Worth city background with overlay text and 3 pillars.
 */

const pillars = [
  { title: "Practical Over Flashy", sub: "Built for real operations" },
  { title: "Small Systems That Pay Off", sub: "Start with one win" },
  { title: "Fort Worth Aware", sub: "Local-first approach" },
];

export default function LocalSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0e06 0%, #0f0a04 50%, #0a0a0b 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/60 via-transparent to-[#0a0a0b]/80" />

      <div className="container relative z-10">
        <div className="forge-label mb-3">Why Fort Worth</div>
        <h2 className="forge-heading text-[clamp(3rem,9vw,5.5rem)] text-white leading-none">
          LOCAL FIRST.
        </h2>
        <h2 className="forge-heading text-[clamp(3rem,9vw,5.5rem)] text-[#22d3ee] leading-none mb-8">
          ALWAYS.
        </h2>

        <p className="text-white/75 text-lg max-w-xl leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          We're not a faceless tech company selling generic software. We're based in Fort Worth, we know the local market, and we build AI systems around how real Texas small businesses actually operate.
        </p>
        <p className="text-white/55 text-base max-w-xl leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          When you call us, you get a real person who understands your industry and your city. We start with one win, prove the ROI, and grow from there — no pressure, no bloated contracts.
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-3 gap-0 border-t border-white/15">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`py-5 pr-4 ${i > 0 ? "pl-4 border-l border-white/15" : ""}`}
            >
              <div className="forge-heading text-sm text-white mb-1 tracking-wide">{p.title}</div>
              <div className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
