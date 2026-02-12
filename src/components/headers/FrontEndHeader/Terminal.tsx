// components/Terminal.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; //

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    `Welcome to my terminal type 'help' to see all command available`,
  ]);
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
        output = "Navigasi ke halaman about.";
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="main-font p-4  h-full overflow-y-auto">
      <div>
        {history.map((line, index) => (
          <div key={index}>
            {line.split("\n").map((subLine, subIndex) => (
              <div key={subIndex}>{subLine}</div>
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
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none flex-1 font-accen-first pl-2"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;
