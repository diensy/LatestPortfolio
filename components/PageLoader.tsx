"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Pulsing logo */}
        <div
          className="w-16 h-16 rounded-2xl bg-[#E63946] flex items-center justify-center text-2xl font-black text-white"
          style={{
            animation: "pulse-glow 1.2s ease-in-out infinite",
          }}
        >
          DK
        </div>
        {/* Loading bar */}
        <div className="w-32 h-0.5 bg-[#222] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E63946] rounded-full"
            style={{
              width: "100%",
              animation: "shimmer 1.5s linear infinite",
              background:
                "linear-gradient(90deg, transparent 0%, #E63946 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
