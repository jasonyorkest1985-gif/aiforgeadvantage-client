/**
 * CTASection — AI Forge Advantage
 * Design: Final call-to-action section before footer.
 */
import { Phone, ArrowRight } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";
const PHONE = "tel:+13253891081";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#0a0a0b]">
      <div className="container">
        <div
          className="rounded-xl p-8 md:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, #0f1a1c 0%, #0a1214 100%)",
            border: "1px solid rgba(34,211,238,0.2)",
          }}
        >
          <div className="forge-label mb-4">Ready to Start?</div>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-white mb-2">
            STOP LOSING LEADS
          </h2>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-[#22d3ee] mb-6">
            AFTER HOURS.
          </h2>
          <p className="text-white/55 text-base max-w-md mx-auto mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Book a free 30-minute AI Strategy Audit. No pitch, no pressure — just a real conversation about what would actually move the needle for your Fort Worth business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-cyan text-base px-8 py-4">
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={PHONE} className="btn-outline text-base px-8 py-4">
              <Phone className="w-4 h-4" />
              Call (325) 389-1081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
