// import { TerminalHeader } from "./terminal-header";
import { TerminalLine } from "./terminal-line";
import { terminalLines } from "./terminal-config";
import { useEffect, useState } from "react";

function TerminalHeader() {
  return (
    <div className="bg-[#3a3a3a] rounded-t-lg px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-gray-300 text-sm font-medium">
          samhacker@localhost
        </span>
      </div>
      <button className="text-gray-400 hover:text-gray-200 text-s px-3 py-1 border border-gray-600 rounded hover:border-gray-500 transition-colors">
        Close
      </button>
    </div>
  );
}

export default function LaunchingAnimate({ ...props }) {
  const [isInterrupted, setIsInterrupted] = useState(false);
  const [displayLines, setDisplayLines] = useState(terminalLines);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 檢測 Ctrl+C
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        setIsInterrupted(true);

        // 添加中斷訊息
        setDisplayLines([
          ...terminalLines.slice(0, -1), // 移除最後的游標
          {
            type: "output" as const,
            content: "^C",
            color: "text-red-400",
            delay: 0,
          },
          {
            type: "output" as const,
            content: "KeyboardInterrupt",
            color: "text-red-400",
            delay: 0.1,
          },
          {
            type: "empty" as const,
            delay: 0.2,
          },
          {
            type: "cursor" as const,
            delay: 0.3,
          },
        ]);

        // 3秒後重置
        setTimeout(() => {
          setIsInterrupted(false);
          setDisplayLines(terminalLines);
        }, 3000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full flex items-center justify-center mt-20" {...props}>
      <div className="w-full max-w-4xl">
        <TerminalHeader />

        <div className="bg-[#1e1e1e] rounded-b-lg p-5 font-mono text-sm text-gray-300 overflow-hidden shadow-2xl min-h-[400px]">
          <div className="space-y-1.5 text-left">
            {displayLines.map((line, index) => (
              <TerminalLine
                key={`${index}-${isInterrupted}`}
                index={index}
                type={line.type}
                content={line.content}
                color={line.color}
                delay={isInterrupted ? line.delay : line.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
