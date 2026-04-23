/**
 * TestimonialsSection — AI Forge Advantage
 * Design: "WHAT CLIENTS SAY" — stacked testimonial cards with stars.
 */
import { Star } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    quote: "I was losing leads every night after 6 PM. Now the chatbot handles inquiries, books estimates, and I wake up to confirmed appointments. Best investment I've made.",
    name: "Marcus T.",
    role: "HVAC Contractor, Fort Worth",
  },
  {
    stars: 5,
    quote: "The review automation alone was worth it. We went from 47 to 112 Google reviews in two months. Our competitors can't figure out how we're growing so fast.",
    name: "Sandra R.",
    role: "Salon Owner, Fort Worth",
  },
  {
    stars: 5,
    quote: "They set everything up in one week and trained my whole team. I was skeptical about AI but this is just practical — it does the boring follow-up work so I don't have to.",
    name: "Derek W.",
    role: "Plumbing Company, Fort Worth",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#0a0a0b]">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="forge-label mb-3">Results</div>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-white">
            WHAT CLIENTS{" "}
            <span className="text-[#22d3ee]">SAY</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="forge-card p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-[#b45309] fill-[#b45309]" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-white/70 text-base italic leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                "{t.quote}"
              </p>
              {/* Attribution */}
              <div>
                <div className="forge-heading text-sm text-white tracking-widest">{t.name}</div>
                <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
