"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AtmosphericBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Generate particles only on the client
    const p = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 20
    }));
    setParticles(p);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springX = useSpring(mousePos.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePos.y, { stiffness: 50, damping: 20 });

  if (!isMounted) return <div className="fixed inset-0 -z-50 bg-[#050816]" />;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816] pointer-events-none">
      {/* 1. Base Mesh Gradients (Atmospheric Depth) */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        />
      </div>

      {/* 2. Vertical Light Streaks */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.03, 0], y: ["-100%", "100%"] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: i * 3 }}
            className="absolute w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            style={{ left: `${20 * i + 10}%` }}
          />
        ))}
      </div>

      {/* 3. Interactive Mouse Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          left: springX,
          top: springY,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 4. Animated Grid Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-bg" />

      {/* 5. Particle Dust Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: p.left, top: p.top }}
          />
        ))}
      </div>

      {/* 6. Section Transition Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050816] via-transparent to-[#050816] opacity-50" />
    </div>
  );
}
