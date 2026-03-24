"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) { setHidden(true); return; }

    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDot({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, label, select"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Big ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] rounded-full border border-rose-500/50 pointer-events-none"
        style={{
          width: hovered ? 50 : 36,
          height: hovered ? 50 : 36,
          background: hovered ? "rgba(244, 63, 94, 0.15)" : "transparent",
        }}
        animate={{
          x: pos.x - (hovered ? 25 : 18),
          y: pos.y - (hovered ? 25 : 18),
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      />
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full bg-rose-500 pointer-events-none"
        style={{ width: 6, height: 6 }}
        animate={{ x: dot.x - 3, y: dot.y - 3 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </>
  );
}
