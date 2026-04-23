/**
 * ScopeSection — AI Forge Advantage
 * Design: "WHAT WE DO — AND WHAT WE DON'T" — two cards side by side.
 */
import { CheckCircle2, Minus } from "lucide-react";

const weBuild = [
  "AI chatbots for websites, Facebook & Instagram",
  "Automated SMS + email follow-up for leads",
  "Review reply automation (Google & Facebook)",
  "Simple, fast, conversion-focused websites",
  "Booking flows, intake forms, small dashboards",
  "AI setup and hands-on training for owners & staff",
];

const weDont = [
  "Fully custom mobile apps from scratch",
  "Enterprise-grade software platforms",
  "Mission-critical systems we can't personally support",
  "Multi-month custom engineering projects",
  "Anything we can't troubleshoot and fix ourselves",
];

export default function ScopeSection() {
  return (
    <section className="py-20 bg-[#0d0d0f]">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="forge-label mb-3">Honest Scope</div>
          <h2 className="forge-heading text-[clamp(2rem,6vw,3.5rem)] text-white">
            WHAT WE DO — AND WHAT WE{" "}
            <span className="text-[#22d3ee]">DON'T</span>
          </h2>
          <p className="text-white/50 mt-4 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Small-business automation is only worth it if it actually works. Here's what we'll take on confidently — and where we'll tell you straight that it's not our lane.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* We Build */}
          <div className="forge-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#22d3ee]" />
              </div>
              <h3 className="forge-heading text-xl text-white tracking-wide">WE BUILD</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {weBuild.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#22d3ee] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-white/65 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* We Won't Promise */}
          <div className="forge-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center">
                <Minus className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="forge-heading text-xl text-white tracking-wide">WE WON'T PROMISE</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {weDont.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/30 mt-0.5 flex-shrink-0">—</span>
                  <span className="text-white/45 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/30 text-xs italic mt-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              If you need something in that lane, we'll tell you straight and point you toward someone who does it well.
            </p>
          </div>
        </div>

        <p className="text-center text-white/35 text-sm mt-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Larger or unusual projects get scoped and quoted after a discovery call — never sold from a price list.
        </p>
      </div>
    </section>
  );
}
