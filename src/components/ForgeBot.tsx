/**
 * ForgeBot — AI Forge Advantage
 * Design: Floating chat bubble bottom-right. Simulated "Calm Architect" bot that
 * qualifies leads and provides the Calendly booking link.
 * Note: This is a scripted demo bot (no API key needed for static deployment).
 */
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Zap } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";

type Message = { from: "bot" | "user"; text: string };

const INITIAL: Message = {
  from: "bot",
  text: "Hi! I'm ForgeBot — your AI Advantage assistant. What's your biggest challenge right now: missing leads after hours, slow follow-up, or getting more reviews?",
};

function getBotReply(input: string): string {
  const msg = input.toLowerCase();

  if (msg.includes("lead") || msg.includes("miss") || msg.includes("after hours") || msg.includes("inquiry")) {
    return "That's exactly what we solve. Our AI chatbot replies in under 5 seconds, 24/7 — even at 11 PM on a Sunday. It qualifies the lead and books the appointment automatically. Want to see how it would work for your business? 👉 " + CALENDLY;
  }
  if (msg.includes("follow") || msg.includes("sms") || msg.includes("email") || msg.includes("slow")) {
    return "Slow follow-up is the #1 reason leads go cold. We build automated SMS + email sequences that follow up until the lead converts — without you lifting a finger. Book a free 30-minute strategy call to see it in action: " + CALENDLY;
  }
  if (msg.includes("review") || msg.includes("google") || msg.includes("facebook") || msg.includes("reputation")) {
    return "Review automation is one of our most popular services. We had one client go from 47 to 112 Google reviews in 2 months. Ready to see what that could do for your business? Book here: " + CALENDLY;
  }
  if (msg.includes("website") || msg.includes("site") || msg.includes("web")) {
    return "We build fast, conversion-focused websites for Fort Worth businesses — not just pretty pages, but sites that capture leads and drive calls. Starting at $797. Want to talk about what you need? " + CALENDLY;
  }
  if (msg.includes("price") || msg.includes("cost") || msg.includes("how much") || msg.includes("pricing")) {
    return "Our packages start at $149 for a quick-start session, $497 setup + $199/mo for the full Advantage System, and $797+ for a website build. All include a free discovery call — no pressure, no contracts. Book yours: " + CALENDLY;
  }
  if (msg.includes("book") || msg.includes("call") || msg.includes("schedule") || msg.includes("talk") || msg.includes("meet")) {
    return "Let's do it! Book your free 30-minute AI Strategy Audit here — I'll make sure the right person is ready to talk through your specific situation: " + CALENDLY;
  }
  if (msg.includes("fort worth") || msg.includes("local") || msg.includes("texas") || msg.includes("tx")) {
    return "We're Fort Worth based and operated — not a faceless tech company. We know the local market and build systems around how Texas small businesses actually run. Book a call and let's talk: " + CALENDLY;
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("help")) {
    return "Hey! I'm here to help. Tell me about your business — what industry are you in, and what's the biggest thing slowing your growth right now?";
  }

  return "Great question. The best way I can help is to connect you with our team for a free 30-minute AI Strategy Audit — no pitch, just a real conversation about what would actually move the needle for your business. Book here: " + CALENDLY;
}

export default function ForgeBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing]);

  const handleOpen = () => {
    setOpen(true);
    setUnread(0);
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const userMsg: Message = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(text);
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 900 + Math.random() * 600);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderText = (text: string) => {
    if (text.includes(CALENDLY)) {
      const parts = text.split(CALENDLY);
      return (
        <>
          {parts[0]}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-[#0a0a0b]"
          >
            Book Free Call →
          </a>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-28 right-4 z-50 rounded-2xl overflow-hidden shadow-2xl animate-chat-pop"
          style={{
            border: "1px solid rgba(34,211,238,0.2)",
            width: "min(420px, calc(100vw - 2rem))",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#0f1a1c]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#22d3ee] rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#0a0a0b]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="forge-heading text-base text-white leading-none">FORGEBOT</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse-dot" />
                  <span className="text-[#22d3ee] text-sm">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="bg-[#0a0a0b] px-4 py-4 flex flex-col gap-4 overflow-y-auto"
            style={{ height: "500px" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "bot" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] px-4 py-3 rounded-2xl text-base leading-relaxed ${
                    m.from === "bot"
                      ? "bg-[#22d3ee] text-[#0a0a0b]"
                      : "bg-[#1e1e22] text-white/80"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.from === "bot" ? renderText(m.text) : m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-end">
                <div className="bg-[#22d3ee]/20 px-5 py-4 rounded-2xl flex gap-2 items-center">
                  {[0, 1, 2].map((d) => (
                    <div
                      key={d}
                      className="w-2 h-2 rounded-full bg-[#22d3ee]"
                      style={{ animation: `pulseDot 1s ease-in-out infinite`, animationDelay: `${d * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-[#0f0f11] border-t border-white/5 px-4 py-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              className="flex-1 bg-[#1a1a1e] text-white text-base px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-[#22d3ee]/40 placeholder-white/25"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-12 h-12 bg-[#22d3ee] rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 hover:bg-[#06b6d4] transition-colors"
            >
              <Send className="w-5 h-5 text-[#0a0a0b]" />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-5 right-4 z-50 w-16 h-16 bg-[#22d3ee] rounded-full shadow-lg flex items-center justify-center hover:bg-[#06b6d4] transition-all hover:scale-105 active:scale-95"
        aria-label="Open ForgeBot chat"
      >
        {open ? (
          <X className="w-7 h-7 text-[#0a0a0b]" />
        ) : (
          <MessageSquare className="w-7 h-7 text-[#0a0a0b]" />
        )}
        {!open && unread > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#b45309] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">{unread}</span>
          </div>
        )}
      </button>
    </>
  );
}