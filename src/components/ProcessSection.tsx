/**
 * ProcessSection — AI Forge Advantage
 * Design: "HOW WE FORGE IT" — numbered steps with large orange step numbers.
 */

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We spend 20 minutes learning your business, your biggest bottlenecks, and where leads are slipping through the cracks.",
  },
  {
    num: "02",
    title: "Custom Blueprint",
    desc: "We map out exactly which AI tools will give you the biggest return — no generic packages, no upselling what you don't need.",
  },
  {
    num: "03",
    title: "We Build It",
    desc: "Our team sets everything up, tests it, and makes sure it integrates with your existing tools and workflows.",
  },
  {
    num: "04",
    title: "You Win More Jobs",
    desc: "Your system runs 24/7. You get more leads, faster follow-up, and more booked appointments — without extra work.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-[#0a0a0b] hex-bg">
      <div className="container">
        <div className="mb-12">
          <div className="forge-label mb-3">The Process</div>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-white">
            HOW WE
          </h2>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-[#22d3ee]">
            FORGE IT
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 items-start">
              {/* Step number */}
              <div
                className="forge-heading text-[clamp(3rem,8vw,5rem)] leading-none flex-shrink-0 w-24 text-right"
                style={{ color: "#b45309", opacity: 0.85 }}
              >
                {s.num}
              </div>
              {/* Content */}
              <div className="pt-3 flex-1">
                <h3 className="forge-heading text-xl text-white mb-2 tracking-wide">{s.title}</h3>
                <p className="text-white/55 text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
