/**
 * ChatbotDemo — AI Forge Advantage
 * Design: "WATCH IT CLOSE A LEAD" section with animated chat conversation demo.
 * Shows a realistic chatbot conversation that books an appointment.
 */
import { useEffect, useRef, useState } from "react";
import { Clock, TrendingUp, Calendar, ArrowRight } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";

const messages = [
  { from: "user", text: "Hi, do you offer custom cabinet refinishing?" },
  { from: "bot", text: "Yes! We specialize in custom refinishing for kitchens and baths. Our average job is $2,200. Want to schedule a quick measure for an exact quote?" },
  { from: "user", text: "Yes please" },
  { from: "bot", text: "Great! I have slots open Tuesday at 10 AM or Wednesday at 2 PM. Which works best for you?" },
  { from: "user", text: "Wednesday at 2 works." },
  { from: "bot", text: "Perfect! You're booked for Wednesday at 2 PM. You'll receive a confirmation text and email with details shortly. Talk to you then!" },
];

const features = [
  { icon: Clock, text: "Replies in under 5 seconds, 24/7" },
  { icon: TrendingUp, text: "Qualifies leads before they reach you" },
  { icon: Calendar, text: "Books appointments directly to your calendar" },
];

export default function ChatbotDemo() {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (shown >= messages.length) return;
    const delay = shown === 0 ? 400 : messages[shown - 1].from === "user" ? 800 : 1400;
    const timer = setTimeout(() => setShown((s) => s + 1), delay);
    return () => clearTimeout(timer);
  }, [started, shown]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [shown]);

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ background: "#0d0d0f" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663579900089/W9GgkmNp8XWbzqZymd7ggQ/chatbot-demo-bg-jy6vmNDbhMcpP9gF6quMU5.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />
      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="forge-label mb-3">Live Demo</div>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-white">
            WATCH IT
          </h2>
          <h2 className="forge-heading text-[clamp(2.5rem,7vw,4rem)] text-[#22d3ee]">
            CLOSE A LEAD
          </h2>
          <p className="text-white/55 mt-4 max-w-lg text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            This is a real conversation your AI chatbot would have with a potential customer — at 11 PM on a Sunday, while you're asleep. It qualifies the lead, answers questions, and books the appointment automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Feature list */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#22d3ee]" />
                  </div>
                  <span className="text-white/75 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {f.text}
                  </span>
                </div>
              );
            })}
            <div className="mt-4">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-cyan">
                See It In Action
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Chat window */}
          <div className="forge-card rounded-xl overflow-hidden shadow-2xl">
            {/* Chat header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-[#161618]">
              <span className="text-white/80 text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Forge Advantage
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse-dot" />
                <span className="text-[#22d3ee] text-xs">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="p-4 flex flex-col gap-3 overflow-y-auto overflow-x-hidden"
              style={{ minHeight: "320px", maxHeight: "420px" }}
            >
              {messages.slice(0, shown).map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "bot" ? "justify-end" : "justify-start"} animate-chat-pop`}
                >
                  <div
                    className={`max-w-[72%] px-4 py-3 rounded-2xl text-sm leading-relaxed break-words ${
                      m.from === "bot"
                        ? "bg-[#22d3ee] text-[#0a0a0b] font-medium"
                        : "bg-[#1e1e22] text-white/80"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif", wordBreak: "break-word" }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {/* Typing indicator */}
              {started && shown < messages.length && messages[shown].from === "bot" && (
                <div className="flex justify-end">
                  <div className="bg-[#22d3ee]/20 px-4 py-3 rounded-2xl flex gap-1.5 items-center">
                    {[0, 1, 2].map((d) => (
                      <div
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]"
                        style={{ animation: `pulseDot 1s ease-in-out infinite`, animationDelay: `${d * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/5 text-center">
              <span className="text-white/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                AI Powered • Instant Reply • Appointment Booked
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}