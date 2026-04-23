/**
 * ServicesSection — AI Forge Advantage
 * Design: Vertical stacked cards with cyan border, icon, tags.
 * Sections: "WHAT WE BUILD — TOOLS THAT ACTUALLY WORK"
 */
import { MessageSquare, Zap, Globe, Star, Smartphone, Shield } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Lead Capture",
    desc: "Never miss an inquiry again. Our chatbots reply in under 5 seconds, 24/7, qualify leads, and book appointments — all while you're on the job.",
    tags: ["24/7 Response", "Lead Qualification", "Auto-Booking"],
  },
  {
    icon: Zap,
    title: "Smart Follow-Up Systems",
    desc: "Turn missed calls and form submissions into booked jobs. Automated SMS and email sequences follow up until the lead converts.",
    tags: ["SMS Automation", "CRM Integration", "Email Sequences"],
  },
  {
    icon: Globe,
    title: "Websites That Sell",
    desc: "Custom, fast-loading websites built to attract Fort Worth customers and convert them into leads — not just pretty pages.",
    tags: ["Custom Design", "Lead Forms", "Mobile-First"],
  },
  {
    icon: Star,
    title: "Review Reply Automation",
    desc: "Respond to Google and Facebook reviews professionally and on-brand. Flag unhappy customers before problems grow.",
    tags: ["Google Reviews", "Facebook Reviews", "Brand Protection"],
  },
  {
    icon: Smartphone,
    title: "Simple Internal Tools",
    desc: "Lightweight dashboards, booking flows, and intake forms built with modern no-code and AI tools. Scoped tight and quoted honestly — no enterprise promises.",
    tags: ["Lead Dashboards", "Booking Flows", "Intake Forms"],
  },
  {
    icon: Shield,
    title: "AI Business Setup",
    desc: "Full AI tool stack setup and training. We configure everything, show you how it works, and make sure it fits your real workflow.",
    tags: ["Full Setup", "Training", "Ongoing Support"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#0a0a0b] hex-bg">
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div className="forge-label mb-3">What We Build</div>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4.5rem)] text-white">
            TOOLS THAT
          </h2>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4.5rem)] text-[#22d3ee]">
            ACTUALLY WORK
          </h2>
          <p className="text-white/50 mt-4 max-w-md text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Clear, useful automations for businesses that want less wasted time and better follow-through.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="forge-card-cyan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#22d3ee]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="forge-heading text-lg text-white mb-2 tracking-wide">{s.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {s.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded border border-[#22d3ee]/25 text-[#22d3ee]/80"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
