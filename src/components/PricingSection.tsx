/**
 * PricingSection — AI Forge Advantage
 * Design: "BUILT FOR SMALL BUSINESS" — 3 pricing tiers with cyan borders on featured.
 */
import { CheckCircle2 } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";

const plans = [
  {
    label: "AI Quick Start",
    price: "$149",
    period: "one-time",
    desc: "One focused session to get your first AI win. Great for testing the waters.",
    features: [
      "1 AI tool setup session (your pick)",
      "Review reply automation OR starter chatbot",
      "30-day email support",
      "Simple setup guide & quick training",
    ],
    cta: "Get Started",
    href: CALENDLY,
    featured: false,
  },
  {
    label: "The Advantage System",
    price: "$497",
    period: "setup + $199/mo",
    desc: "Our most popular package. Full lead capture and follow-up system, built and maintained.",
    features: [
      "AI chatbot on your website",
      "Automated SMS & email follow-up",
      "Appointment booking integration",
      "Review reply automation",
      "Monthly check-in + tweaks",
      "Direct text/email support",
    ],
    cta: "Book a Call",
    href: CALENDLY,
    featured: true,
  },
  {
    label: "Website + Automation",
    price: "$797+",
    period: "website build",
    desc: "Simple, fast-loading website built to convert. Add The Advantage System to make it work 24/7.",
    features: [
      "Custom small-business website",
      "Lead capture forms",
      "Mobile-first design",
      "SEO foundation",
      "Custom projects quoted after discovery",
    ],
    cta: "Request a Quote",
    href: CALENDLY,
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#0d0d0f] hex-bg">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="forge-label mb-3">Pricing</div>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-white">
            BUILT FOR
          </h2>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-[#22d3ee]">
            SMALL BUSINESS
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No bloated enterprise contracts. Straightforward pricing that makes sense for a local business.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-lg ${
                p.featured
                  ? "border-2 border-[#22d3ee] bg-[#0f1a1c]"
                  : "forge-card"
              }`}
            >
              {/* Most Popular badge */}
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#22d3ee] text-[#0a0a0b] forge-heading text-xs px-4 py-1.5 rounded">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan label */}
              <div className="forge-label mb-2" style={{ color: p.featured ? "#22d3ee" : "#b45309" }}>
                {p.label}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="forge-heading text-[2.5rem] text-white">{p.price}</span>
                <span className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.period}</span>
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {p.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-6">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22d3ee] flex-shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={p.featured ? "btn-cyan w-full justify-center" : "btn-dark w-full justify-center"}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          All plans include a free discovery call. No long-term contracts required.
        </p>
      </div>
    </section>
  );
}
