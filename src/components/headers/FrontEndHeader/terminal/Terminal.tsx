"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Style from "./terminal.module.css";

interface TerminalProps {
  className?: string;
  onClose?: () => void; // Callback opsional untuk memberi tahu parent jika terminal ditutup
}

const Terminal = ({ className, onClose }: TerminalProps) => {
  const [visible, setVisible] = useState(true);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Widy Terminal. Type 'help' to see all commands available.",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Fungsi untuk menutup terminal secara bersih
  const handleClose = useCallback(() => {
    setVisible(false);
    if (onClose) onClose();
  }, [onClose]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  /* ================= HANDLE COMMAND ================= */
  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `$ > ${cmd}`];
    let output = "";

    const commandAvailable = [
      "pratic   - practice files create a basic front-end",
      "location - show location",
      "clear    - clear terminal",
      "echo     - print text",
      "exit     - close the terminal",
    ];

    switch (cleanCmd) {
      case "help":
        output = commandAvailable.join("\n");
        break;

      case "pratic":
        router.push("/pratic");
        output = "Navigating to pratic page...";
        break;

      case "location":
        output = "Madiun, East Java";
        break;

      case "exit":
        handleClose();
        return;

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

    setHistory([...newHistory, output]);
    setCommandHistory((prev) => [...prev, cmd]);
    setInput("");
    setHistoryIndex(null);
  };

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

  if (!visible) return null;

  return (
    <section
      onClick={() => inputRef.current?.focus()}
      className={`${Style.terminal} ${className} fixed top-0 left-1/2 -translate-x-1/2 mt-20 w-full max-w-2xl h-80 rounded-xl overflow-hidden shadow-2xl border border-white/10 z-50`}
    >
      <div className="h-full w-full bg-[#1e1e1e] flex flex-col">
        {/* Header / Title Bar */}
        <header className="w-full py-2 px-4 bg-[#333] flex gap-2 items-center cursor-default">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="h-3 w-3 rounded-full bg-[#ff5f56] hover:brightness-75 transition-all"
            title="Close"
          />
          <button
            type="button"
            className="h-3 w-3 rounded-full bg-[#ffbd2e]"
            title="Minimize"
          />
          <button
            type="button"
            className="h-3 w-3 rounded-full bg-[#27c93f]"
            title="Maximize"
          />
          <span className="ml-2 text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-widest">
            bash — portfolio
          </span>
        </header>

        {/* Terminal Body */}
        <section
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-[#1e1e1e]/90"
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
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-slate-50 p-0 m-0 focus:ring-0"
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
