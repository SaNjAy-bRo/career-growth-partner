"use client";

import { useEffect, useRef } from "react";

export default function GeminiWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let frameCount = 0;

    interface Sparkle {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
    }

    const sparkles: Sparkle[] = [];

    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Generate Ambient Wave Dust Particles
      sparkles.length = 0;
      const sparkleCount = Math.floor(rect.width * 0.06);
      for (let i = 0; i < sparkleCount; i++) {
        sparkles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * 2 + 0.8,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.3 + 0.1,
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // 1. Draw Sweeping 3D Fiber Ribbon Strand Bundle (Matching Exact Image)
      const totalStrands = 26;
      for (let s = 0; s < totalStrands; s++) {
        const strandRatio = s / totalStrands;
        const offset = (s - totalStrands / 2) * 2.8;

        ctx.beginPath();
        ctx.lineWidth = s % 4 === 0 ? 2.0 : 1.1;

        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.9)");   // Electric Cyan
        gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.95)"); // Deep Violet
        gradient.addColorStop(0.65, "rgba(236, 72, 153, 0.9)"); // Magenta
        gradient.addColorStop(1, "rgba(37, 99, 235, 0.85)");   // Royal Blue

        ctx.strokeStyle = gradient;
        ctx.globalAlpha = Math.max(0.15, 0.9 - Math.abs(strandRatio - 0.5) * 1.3);

        if (s % 6 === 0) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = "#38bdf8";
        } else {
          ctx.shadowBlur = 0;
        }

        for (let x = 0; x <= rect.width; x += 6) {
          const wave1 =
            Math.sin(x * 0.0035 + frameCount * 0.012 + offset * 0.015) * (rect.height * 0.3);
          const wave2 =
            Math.cos(x * 0.007 + frameCount * 0.018) * (rect.height * 0.09);
          const y = rect.height * 0.55 + wave1 + wave2 + offset;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // 2. Draw Floating Wave Particle Dust Sparkles
      sparkles.forEach((p) => {
        p.x += p.speed;
        if (p.x > rect.width) p.x = 0;

        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#38bdf8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      frameCount++;
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden z-0 h-44 sm:h-60 flex items-end opacity-95">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
