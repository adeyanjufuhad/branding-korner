"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/** Cycles through words with a blur + slide transition (word-rotate pattern from 21st.dev). */
export function TextRotate({
  words,
  interval = 2400,
  className,
  wordClassName,
}: {
  words: string[];
  interval?: number;
  className?: string;
  /** Applied to the visible word only (e.g. gradient text, which would otherwise paint the spacer). */
  wordClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  return (
    <span className={cn("relative inline-grid align-bottom", className)}>
      {/* Invisible longest word reserves width so the line doesn't jump */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <span className="sr-only">{words[0]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden
          className={cn("col-start-1 row-start-1", wordClassName)}
          initial={{ y: "40%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-40%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
