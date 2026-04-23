/**
 * Navbar — AI Forge Advantage
 * Design: Industrial Dark Tech. Sticky top nav with logo, nav links, CTA.
 * Mobile: hamburger menu with slide-down drawer.
 */
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-sm border-b border-white/5">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-[#22d3ee] rounded-md flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-[#0a0a0b]" strokeWidth={2.5} />
          </div>
          <span className="forge-heading text-xl leading-none">
            <span className="text-white">AI FORGE</span>{" "}
            <span className="text-[#22d3ee]">ADVANTAGE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-cyan text-sm">
            Book Free Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0f0f11] border-t border-white/5 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left py-2 text-base font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan mt-2 justify-center"
            onClick={() => setOpen(false)}
          >
            Book Free Call
          </a>
        </div>
      )}
    </header>
  );
}
