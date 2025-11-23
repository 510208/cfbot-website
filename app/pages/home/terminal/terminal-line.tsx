import { motion } from "motion/react";

type LineType =
  | "command"
  | "empty"
  | "output"
  | "status"
  | "success"
  | "ready"
  | "cursor";

interface TerminalLineProps {
  type: LineType;
  content?: string;
  color?: string;
  delay: number;
  index: number;
}

export function TerminalLine({
  type,
  content,
  color,
  delay,
  index,
}: TerminalLineProps) {
  if (type === "command") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.1 }}
        className="flex"
      >
        <span className="text-green-400">$</span>
        <span className="ml-2 text-gray-200">{content}</span>
      </motion.div>
    );
  }

  if (type === "empty") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.1 }}
        className="h-1"
      />
    );
  }

  if (type === "status") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.1 }}
        className="flex items-center gap-2"
      >
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        <span className="text-green-400 text-s">{content}</span>
      </motion.div>
    );
  }

  if (type === "success") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.2 }}
        className="text-blue-400 text-s"
      >
        {content}
      </motion.div>
    );
  }

  if (type === "ready") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.3 }}
        className="text-green-400 font-semibold text-sm"
      >
        {content}
      </motion.div>
    );
  }

  if (type === "cursor") {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.1 }}
        className="flex"
      >
        <span className="text-green-400">$</span>
        <span className="ml-2 inline-block w-1.5 h-3.5 bg-gray-400 animate-pulse" />
      </motion.div>
    );
  }

  // type === "output"
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.1 }}
      className={`${color} text-s`}
    >
      {content}
    </motion.div>
  );
}
