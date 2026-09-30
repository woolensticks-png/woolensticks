"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Yarn Ball SVG
function YarnBall({ color, size = 80 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" fill={color} opacity="0.9" />
      <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      {/* Yarn lines */}
      <path d="M15 55 Q40 20 65 55" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M12 42 Q40 8 68 42" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M18 65 Q40 32 62 65" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 22 Q35 55 60 38" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Highlight */}
      <circle cx="28" cy="26" r="8" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

// Crochet Hook SVG animating
function CrochetHook({ progress }: { progress: number }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Hook body */}
      <motion.line
        x1="60" y1="10" x2="60" y2="85"
        stroke="#2C3E5C"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.4 }}
      />
      {/* Hook curve */}
      <motion.path
        d="M60 85 Q60 105 45 105 Q35 105 35 95"
        stroke="#C49A5A"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      {/* Grip detail */}
      <motion.rect
        x="53" y="55" width="14" height="22" rx="4"
        fill="#8FAF88"
        opacity="0.8"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: progress }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}

// Yarn thread tracing across screen (SVG path animation)
function YarnTrace({ visible }: { visible: boolean }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0 150 Q50 80 100 150 Q150 220 200 150 Q250 80 300 150 Q350 220 400 150"
        stroke="#C49A5A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="600"
        initial={{ strokeDashoffset: 600, opacity: 0 }}
        animate={visible ? { strokeDashoffset: 0, opacity: 0.6 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 100 Q100 50 200 100 Q300 150 400 100"
        stroke="#E8857A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="500"
        initial={{ strokeDashoffset: 500, opacity: 0 }}
        animate={visible ? { strokeDashoffset: 0, opacity: 0.4 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M0 200 Q100 250 200 200 Q300 150 400 200"
        stroke="#8FAF88"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="500"
        initial={{ strokeDashoffset: 500, opacity: 0 }}
        animate={visible ? { strokeDashoffset: 0, opacity: 0.4 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

const yarnColors = ["#E8857A", "#F0B429", "#8FAF88", "#A08DB5", "#C49A5A", "#2C3E5C"];

interface LoaderProps {
  onComplete: () => void;
}

export default function YarnLoader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<"hook" | "yarn" | "reveal">("hook");
  const [hookProgress, setHookProgress] = useState(0);
  const [stitchCount, setStitchCount] = useState(0);
  const totalStitches = 6;

  // Phase 1: animate hook drawing (0 → 1 over 1s)
  useEffect(() => {
    const start = performance.now();
    const duration = 1000;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setHookProgress(p);
      if (p < 1) requestAnimationFrame(tick);
      else {
        setTimeout(() => setPhase("yarn"), 300);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  // Phase 2: grow stitches one by one
  useEffect(() => {
    if (phase !== "yarn") return;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setStitchCount(count);
      if (count >= totalStitches) {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("reveal");
          setTimeout(onComplete, 800);
        }, 500);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "reveal" && (
        <motion.div
          key="loader"
          className="loader-overlay"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background yarn traces */}
          <div className="absolute inset-0 overflow-hidden">
            <YarnTrace visible={phase === "yarn"} />
          </div>

          {/* Floating yarn balls */}
          {phase === "yarn" &&
            yarnColors.map((color, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${15 + (i % 3) * 25}%`,
                }}
                initial={{ scale: 0, opacity: 0, rotate: -30 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: 1,
                  rotate: [0, 10, -5, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <YarnBall color={color} size={50 + (i % 3) * 15} />
              </motion.div>
            ))}

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Hook animation */}
            <motion.div
              animate={phase === "yarn" ? { scale: 0.7, y: -20 } : {}}
              transition={{ duration: 0.4 }}
            >
              <CrochetHook progress={hookProgress} />
            </motion.div>

            {/* Brand name */}
            <motion.h1
              className="text-4xl font-bold text-[#2C3E5C] mt-4 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: hookProgress > 0.5 ? 1 : 0, y: hookProgress > 0.5 ? 0 : 10 }}
              transition={{ duration: 0.4 }}
            >
              woolen sticks
            </motion.h1>

            <motion.p
              className="text-[#C49A5A] text-lg mb-6"
              style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.2rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hookProgress > 0.7 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              Handcrafted with ❤️
            </motion.p>

            {/* Stitch progress bar */}
            {phase === "yarn" && (
              <div className="flex gap-2 mt-2">
                {Array.from({ length: totalStitches }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-4 rounded-full"
                    style={{ backgroundColor: yarnColors[i] }}
                    initial={{ scale: 0 }}
                    animate={{ scale: i < stitchCount ? 1 : 0 }}
                    transition={{ duration: 0.2, type: "spring" }}
                  />
                ))}
              </div>
            )}

            <motion.p
              className="text-sm text-[#C49A5A] mt-3"
              style={{ fontFamily: "var(--font-handwritten)", fontSize: "1rem" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {phase === "hook" ? "Setting up the hook..." : "Crocheting your experience..."}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
