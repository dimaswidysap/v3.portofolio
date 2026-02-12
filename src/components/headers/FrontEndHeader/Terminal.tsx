// components/Terminal.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; //

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    `Welcome to my terminal type 'help' to see all command available`,
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleCommand = (cmd: string) => {
    const newHistory = [...history, `> ${cmd}`];
    let output = "";

    const commandAvailable = [
      "command available:",
      "home - go to home page",
      "ill - go to illustrator page",
      "about - go to front-end page",
      "contact - go to contact page",
      "pratic - practice files create a basic front-end",
      "clear - clear terminal",
    ];

    switch (cmd.toLowerCase()) {
      case "help":
        output = commandAvailable.join("\n");
        break;
      case "home":
        router.push("/");
        output = "Navigasi ke halaman Home.";
        break;
      case "ill":
        router.push("/iLLustrator");
        output = "Navigasi ke halaman iLLustrator.";
        break;
      case "about":
        router.push("/about");
        output = "Navigasi ke halaman about.";
        break;
      case "contact":
        router.push("/contact");
        output = "Navigasi ke halaman contact.";
        break;
      case "pratic":
        router.push("/pratic");
        output = "Navigasi ke halaman pratic.";
        break;
      case "clear":
        setHistory([`Terminal cleared. type 'help'  for commands.`]);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (historyIndex !== -1) {
      setHistoryIndex(-1);
    }
  };

  // useEffect untuk auto focus dihapus
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  return (
    <div className="main-font p-4  h-full overflow-y-auto">
      <div>
        {history.map((line, index) => (
          <div key={index}>
            {line.split("\n").map((subLine, subIndex) => (
              <div className="text-[0.8em]" key={subIndex}>
                {subLine}
              </div>
            ))}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="font-accen-first">
          <span className="font-accen-first font-black">$</span>
          {" >"}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none flex-1 font-accen-first pl-2 text-[0.8em]"
        />
      </form>
    </div>
  );
};

export default Terminal;
