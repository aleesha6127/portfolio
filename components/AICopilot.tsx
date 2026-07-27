"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Send, Terminal, CornerDownLeft, User, Code, Briefcase, GraduationCap, Phone } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
}

const defaultPrompts = [
  "⚡ What is Aleesha's core tech stack?",
  "💼 Summarize her internship experience",
  "🚀 Which live REST projects are deployed?",
  "🎓 Tell me about her MCA & degree credentials",
  "📬 How can I contact or hire Aleesha?",
];

const cannedAnswers: Record<string, string> = {
  "⚡ What is Aleesha's core tech stack?":
    "Aleesha specializes in Python (Flask), React.js, Next.js 15, Node.js/Express, REST APIs, and database engineering across PostgreSQL, MySQL, MongoDB, and Firebase. She is also skilled in Tailwind CSS, Git/GitHub, Postman, and SDLC methodologies.",
  "💼 Summarize her internship experience":
    "Aleesha has completed 3 internships:\n1. Frontend Developer at Dodo Interactive (React, Next.js, REST APIs).\n2. Backend Developer at Fawstech Innovations (Python, Flask, Firebase Datastore).\n3. Full Stack Developer at ByteMinders Edutech (Node, Express, MongoDB).",
  "🚀 Which live REST projects are deployed?":
    "Top 5 Deployed Live Applications:\n• Smart Attendance System (Python, OpenCV, Flask)\n• Hospital Management System (Flask, PostgreSQL)\n• Electricity Billing & IoT System (Firebase)\n• Tourism Management System (MERN)\n• TrustShield Women Safety App (MongoDB REST APIs)",
  "🎓 Tell me about her MCA & degree credentials":
    "• Master of Computer Applications (MCA) — Kristu Jyothi College of Management & Technology (2024 - 2026)\n• B.Sc. Mathematics — Assumption College, Changanacherry (2021 - 2024)\n• Awards: Best Paper Presentation Award at ICMCTT-IV 2024 & Published Research Paper in IRJAEM (Dec 2024).",
  "📬 How can I contact or hire Aleesha?":
    "Aleesha is actively open for Full Stack / Python / React Software Developer roles!\n• Email: aleeshaanas2@gmail.com\n• Phone/WhatsApp: +91 9846691678\n• Location: Kottayam, Kerala, India\n• LinkedIn: linkedin.com/in/aleesha-anas-a7553533b",
};

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Aleesha's AI Portfolio Assistant 🤖. How can I help you explore her skills, projects, or background today?",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMsg: Message = { sender: "user", text: userText, time: currentTime };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = cannedAnswers[userText];
      if (!botResponse) {
        if (userText.toLowerCase().includes("python") || userText.toLowerCase().includes("flask")) {
          botResponse = cannedAnswers["⚡ What is Aleesha's core tech stack?"];
        } else if (userText.toLowerCase().includes("project") || userText.toLowerCase().includes("demo")) {
          botResponse = cannedAnswers["🚀 Which live REST projects are deployed?"];
        } else if (userText.toLowerCase().includes("experience") || userText.toLowerCase().includes("intern")) {
          botResponse = cannedAnswers["💼 Summarize her internship experience"];
        } else if (userText.toLowerCase().includes("hire") || userText.toLowerCase().includes("contact") || userText.toLowerCase().includes("email")) {
          botResponse = cannedAnswers["📬 How can I contact or hire Aleesha?"];
        } else {
          botResponse =
            "Aleesha Anas is an MCA graduate and Software Developer skilled in Python, Flask, React.js, Next.js, and Node.js. Feel free to email her at aleeshaanas2@gmail.com or call +91 9846691678!";
        }
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[8500] px-4 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent-cyan text-white shadow-2xl flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-transform group border border-white/20"
        aria-label="Open AI Developer Assistant"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <span className="text-xs font-bold font-mono tracking-wide">ALEESHA AI COPILOT</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
      </button>

      {/* AI Drawer Modal HUD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-[9500] w-[calc(100vw-3rem)] sm:w-[420px] max-h-[580px] glass-panel rounded-3xl border border-primary/40 shadow-2xl flex flex-col overflow-hidden bg-[#090D16]/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-gray-950/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-md">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Aleesha AI Copilot <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-mono">v2026.1</span>
                  </h4>
                  <p className="text-[11px] text-gray-400 font-mono">24/7 Developer Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 flex-grow overflow-y-auto space-y-3 max-h-[340px] text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                      m.sender === "user"
                        ? "bg-primary text-white font-medium rounded-tr-none"
                        : "bg-white/[0.06] border border-white/10 text-gray-200 rounded-tl-none font-sans"
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 mt-1 px-1">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/[0.06] border border-white/10 text-gray-400 w-20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Default Quick Prompts */}
            <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-none">
              {defaultPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-primary text-[11px] text-gray-300 hover:text-white shrink-0 font-medium transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-gray-950/90 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask anything about Aleesha..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-xs font-mono"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
