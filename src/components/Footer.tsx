/**
 * Footer — AI Forge Advantage
 * Design: Dark footer with logo, nav links, contact, copyright.
 */
import { Zap, Mail, Phone } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080809] border-t border-white/5 pt-12 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#22d3ee] rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#0a0a0b]" strokeWidth={2.5} />
              </div>
              <span className="forge-heading text-lg leading-none">
                <span className="text-white">AI FORGE</span>{" "}
                <span className="text-[#22d3ee]">ADVANTAGE</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Practical AI systems for Fort Worth small businesses. We build tools that actually work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="forge-label mb-4">Navigation</div>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#process" },
                { label: "Pricing", href: "#pricing" },
                { label: "Results", href: "#testimonials" },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/45 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="forge-label mb-4">Contact</div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+13253891081"
                className="flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4 text-[#22d3ee]" />
                (325) 389-1081
              </a>
              <a
                href="mailto:Ai.advantage.freelance.consulting@gmail.com"
                className="flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors break-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4 text-[#22d3ee] flex-shrink-0" />
                Ai.advantage.freelance.consulting@gmail.com
              </a>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan mt-2 text-sm"
              >
                Book Free Discovery Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} AI Forge Advantage. Fort Worth, TX. All rights reserved.
          </p>
          <a
            href="https://aiforgeadvantage.com"
            className="text-white/20 hover:text-white/40 text-xs transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            aiforgeadvantage.com
          </a>
        </div>
      </div>
    </footer>
  );
}
