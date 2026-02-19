"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Roboto_Mono } from "next/font/google";
import Style from "./terminal.module.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const COMMANDS = [
  "pratic   - practice files create a basic front-end",
  "location - show location",
  "clear    - clear terminal",
  "echo     - print text",
];

const Terminal = () => {
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Widy Terminal. Type 'help' to see all commands available.",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  /* ================= HANDLE COMMAND ================= */
  const handleCommand = useCallback(
    (cmd: string) => {
      const cleanCmd = cmd.trim().toLowerCase();
      const newHistory = [...history, `$ > ${cmd}`];
      let output = "";

      switch (cleanCmd) {
        case "help":
          output = COMMANDS.join("\n");
          break;

        case "pratic":
          router.push("/pratic");
          output = "Navigating to pratic page...";
          break;

        case "location":
          output = "Madiun, East Java";
          break;

        case "clear":
          setHistory([
            "Welcome to Widy Terminal. Type 'help' to see all commands available.",
          ]);
          setInput("");
          setHistoryIndex(null);
          return;

        default:
          if (cleanCmd.startsWith("echo ")) {
            output = cmd.slice(5);
          } else {
            output = `Command not found: ${cmd}`;
          }
      }

      setHistory((prev) => [...newHistory, output]);
      setCommandHistory((prev) => [...prev, cmd]);
      setInput("");
      setHistoryIndex(null);
    },
    [history, router],
  );

  /* ================= EVENT HANDLERS ================= */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(null);
        setInput("");
      }
    }
  };

  if (!mounted)
    return (
      <div className="h-80 w-[20rem] bg-[#1e1e1e] rounded-xl animate-pulse" />
    );

  return (
    <section
      className={`${Style.terminal} ${robotoMono.className} relative mt-4 w-[50%] h-80 rounded-xl overflow-hidden shadow-2xl border z-20 border-white/10 `}
    >
      <div className="h-full w-full bg-[#1e1e1e] flex flex-col">
        {/* Header / Title Bar */}
        <header className="w-full py-2 px-4 bg-[#333] flex gap-2 items-center cursor-default">
          <span className="h-3 w-3 bg-[#ff5f56] rounded-full"></span>
          <span className="h-3 w-3 bg-[#ffbd2e] rounded-full"></span>
          <span className="h-3 w-3 bg-[#27c93f] rounded-full"></span>
          <span className="ml-2 text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-widest">
            bash — portfolio
          </span>
        </header>

        {/* Terminal Body */}
        <section
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 text-sm bg-[#1e1e1e]/90 scrollbar-thin scrollbar-thumb-white/10"
        >
          <div className="text-slate-50 whitespace-pre-wrap">
            {history.map((line, index) => (
              <div key={index} className="mb-1 leading-relaxed text-blue-50/90">
                {line}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 mt-1"
          >
            <span className="text-green-400 font-bold">$</span>
            <span className="text-blue-300 font-bold">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              aria-label="Terminal Input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-slate-50 p-0 m-0 focus:ring-0 font-mono"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </section>
      </div>
    </section>
  );
};

export default Terminal;
