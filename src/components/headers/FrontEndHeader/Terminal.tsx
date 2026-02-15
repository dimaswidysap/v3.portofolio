"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Style from "./terminal.module.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Widhy Terminal. Type 'help' to see all commands available.",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleCommand = (cmd: string) => {
    const newHistory = [...history, `> ${cmd}`];
    let output = "";

    const commandAvailable = [
      "Commands available:",
      "home - go to home page",
      "ill - go to illustrator page",
      "about - go to front-end page",
      "contact - go to contact page",
      "pratic - practice files create a basic front-end",
      "location - show location",
      "clear - clear terminal",
    ];

    switch (cmd.toLowerCase()) {
      case "help":
        output = commandAvailable.join("\n");
        break;
      case "home":
        router.push("/");
        output = "Navigating to home page.";
        break;
      case "ill":
        router.push("/iLLustrator");
        output = "Navigating to illustrator page.";
        break;
      case "about":
        router.push("/about");
        output = "Navigating to about page.";
        break;
      case "contact":
        router.push("/contact");
        output = "Navigating to contact page.";
        break;
      case "pratic":
        router.push("/pratic");
        output = "Navigating to pratic page.";
        break;
      case "location":
        output = "madiun, east java";
        break;
      case "clear":
        setHistory(["Terminal cleared. Type 'help' for commands."]);
        setInput("");
        return;
      default:
        if (cmd.startsWith("echo ")) {
          output = cmd.slice(5);
        } else {
          output = `Command not found: ${cmd}`;
        }
    }

    if (output) {
      newHistory.push(output);
    }
    setHistory(newHistory);
    setInput("");
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (historyIndex !== -1) {
      setHistoryIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <section
      className={`${Style.terminal} w-full max-w-2xl h-[300px] rounded-xl overflow-hidden shadow-2xl border border-white/10`}
    >
      {/* Kontainer Utama dengan Scroll Independen */}
      <section className="h-full w-full bg-[#1e1e1e] flex flex-col">
        {/* Header Terminal */}
        <header className="w-full py-2 px-4 bg-[#333] flex gap-2 items-center">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span className="ml-2 text-xs text-gray-400 font-mono">
            bash — portofolio
          </span>
        </header>

        {/* Area Content yang bisa di-scroll */}
        <section className="flex-1 overflow-y-auto p-4 font-mono text-sm overscroll-contain bg-footer/50">
          <div className="text-slate-50 whitespace-pre-wrap">
            {history.map((line, index) => (
              <div key={index} className="mb-1">
                {line.split("\n").map((subLine, subIndex) => (
                  <div key={subIndex}>{subLine}</div>
                ))}
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
              id="input-terminal"
              type="text"
              autoFocus
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              className="bg-transparent outline-none flex-1 text-slate-50 border-none focus:ring-0 p-0 m-0"
            />
          </form>
        </section>
      </section>
    </section>
  );
};

export default Terminal;
