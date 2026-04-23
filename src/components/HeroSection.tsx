/**
 * HeroSection — AI Forge Advantage
 * Design: Full-bleed dark hero, left-anchored massive type, warm forge background.
 * "FORGE YOUR ADVANTAGE." headline with cyan accent.
 */
import { Phone, ArrowRight, Star, CheckCircle2, MapPin } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE = "tel:+13253891081";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-24 hex-bg overflow-hidden"
      style={{
        background: "#0a0a0b",
      }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663579900089/W9GgkmNp8XWbzqZymd7ggQ/hero-bg-Pc3KDQRvRAQrGDbh7rTR6k.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.45,
        }}
      />
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.7) 50%, rgba(10,10,11,0.3) 100%)",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 40%, rgba(180,83,9,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 20%, rgba(34,211,238,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Hex grid overlay */}
      <div className="absolute inset-0 hex-bg opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#b45309]/40 bg-[#b45309]/10 mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#b45309]" />
          <span className="forge-label text-[#b45309] text-xs">Fort Worth-Focused AI Automation</span>
        </div>

        {/* Main headline */}
        <h1 className="forge-heading text-[clamp(3.5rem,12vw,7rem)] text-white mb-2 leading-none">
          FORGE YOUR
        </h1>
        <h1 className="forge-heading text-[clamp(3.5rem,12vw,7rem)] text-[#22d3ee] mb-6 leading-none">
          ADVANTAGE.
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-lg max-w-lg mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          We build practical AI systems for Fort Worth small businesses — chatbots that capture leads, follow-up that closes deals, and websites that work as hard as you do.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a href={PHONE} className="btn-cyan text-base px-6 py-4">
            <Phone className="w-4 h-4" />
            Call (325) 389-1081
          </a>
          <button
            onClick={() => scrollTo("#process")}
            className="btn-outline text-base px-6 py-4"
          >
            See How It Works
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#b45309] fill-[#b45309]" />
              ))}
            </div>
            <span className="text-white/50 text-sm">5-star rated</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#22d3ee]" />
            <span className="text-white/50 text-sm">Fort Worth based & operated</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#22d3ee]" />
            <span className="text-white/50 text-sm">Free discovery call</span>
          </div>
        </div>
      </div>
    </section>
  );
}
