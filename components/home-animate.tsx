import { motion } from "motion/react";

function AnimatedTitle({
  delay,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function HighlightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative whitespace-nowrap text-amber-500 font-bold underline decoration-amber-300/40 hover:decoration-amber-300/70 transition-decoration duration-300">
      {children}
    </span>
  );
}

export { AnimatedTitle, HighlightedText };
