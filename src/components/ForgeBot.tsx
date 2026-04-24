/**
 * ForgeBot — AI Forge Advantage
 * Powered by Groq AI (llama3-8b-8192)
 */
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Zap } from "lucide-react";

const CALENDLY = "https://calendly.com/ai-advantage-freelance-consulting/30min";
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SYSTEM_PROMPT = `You are ForgeBot, the AI assistant for AI Forge Advantage — a Fort Worth, Texas based company that helps small businesses grow using AI automation tools.

Your job is to qualify leads and book free 30-minute strategy calls. You are friendly, confident, and concise (keep responses under 3 sentences).

Services you offer:
- AI Chatbot (24/7 lead capture, replies in under 5 seconds)
- SMS + Email follow-up automation
- Google/Facebook review automation
- Conversion-focused websites starting at $797
- Full Advantage System: $497 setup + $199/mo

Always end responses by either asking a qualifying question OR directing them to book a free call at: ${CALENDLY}

Never make up prices or services not listed above. If unsure, direct them to book a call.`;

type Message = { from: "bot" | "user"; text: string };

const INITIAL: Message = {
  from: "bot",
  text: "Hi! I'm ForgeBot — your AI Advantage assistant. What's your biggest challenge right now: missing leads after hours, slow follow-up, or getting more reviews?",
};

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

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    const userMsg: Message = { from: "user", text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setTyping(true);

    try {
      const groqMessages = updatedMessages.map((m) => ({
        role: m.from === "bot" ? "assistant" : "user",
        content: m.text,
      }));

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...groqMessages,
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "I'm having trouble connecting. Please book a call directly: " + CALENDLY;
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: "Something went wrong. Book your free call here: " + CALENDLY }]);
    }
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
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-[#0a0a0b]">
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
          className="fixed bottom-28 right-4 z-[9999] rounded-2xl overflow-hidden shadow-2xl"
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
              onClick={handleClose}
              className="text-white/40 hover:text-white transition-colors p-2"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="bg-[#0a0a0b] px-4 py-4 flex flex-col gap-4 overflow-y-auto overflow-x-hidden"
            style={{ height: "420px" }}
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "bot" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-base leading-relaxed break-words ${
                    m.from === "bot"
                      ? "bg-[#22d3ee] text-[#0a0a0b]"
                      : "bg-[#1e1e22] text-white/80"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif", wordBreak: "break-word" }}
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
              disabled={!input.trim() || typing}
              className="w-12 h-12 bg-[#22d3ee] rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 hover:bg-[#06b6d4] transition-colors"
            >
              <Send className="w-5 h-5 text-[#0a0a0b]" />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={open ? handleClose : handleOpen}
        className="fixed bottom-5 right-4 z-[9999] w-16 h-16 bg-[#22d3ee] rounded-full shadow-lg flex items-center justify-center hover:bg-[#06b6d4] transition-all hover:scale-105 active:scale-95"
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