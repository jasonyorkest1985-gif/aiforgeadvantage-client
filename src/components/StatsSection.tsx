/**
 * StatsSection — AI Forge Advantage
 * Design: 2x2 grid of large cyan stats on dark background.
 */
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "5S", label: "Average Reply Time", sub: "vs 2+ hours industry avg" },
  { value: "24/7", label: "Always On", sub: "No missed leads after hours" },
  { value: "30%+", label: "More Leads Closed", sub: "With automated follow-up" },
  { value: "500+", label: "Small Businesses", sub: "Trust Forge Advantage" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-[#0a0a0b] border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="forge-heading text-[clamp(2.5rem,6vw,3.5rem)] text-[#22d3ee] mb-1"
              >
                {s.value}
              </div>
              <div className="forge-label text-white/80 text-xs mb-1">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
