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
      const sparkleCount = Math.floor(rect.width * 0.05);
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

      // 1. Draw Sweeping 3D Fiber Ribbon Strand Bundle (Centered in Background)
      const totalStrands = 26;
      // Center wave vertically through middle background of section
      const centerY = rect.height * 0.45;

      for (let s = 0; s < totalStrands; s++) {
        const strandRatio = s / totalStrands;
        const offset = (s - totalStrands / 2) * 2.6;

        ctx.beginPath();
        ctx.lineWidth = s % 4 === 0 ? 2.2 : 1.2;

        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.95)");   // Electric Cyan
        gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.95)"); // Deep Violet
        gradient.addColorStop(0.65, "rgba(236, 72, 153, 0.9)"); // Magenta
        gradient.addColorStop(1, "rgba(37, 99, 235, 0.9)");    // Royal Blue

        ctx.strokeStyle = gradient;
        ctx.globalAlpha = Math.max(0.2, 0.95 - Math.abs(strandRatio - 0.5) * 1.2);

        if (s % 5 === 0) {
          ctx.shadowBlur = 14;
          ctx.shadowColor = "#38bdf8";
        } else {
          ctx.shadowBlur = 0;
        }

        for (let x = 0; x <= rect.width; x += 5) {
          const wave1 = Math.sin(x * 0.004 + frameCount * 0.014 + offset * 0.015) * 45;
          const wave2 = Math.cos(x * 0.007 + frameCount * 0.02) * 18;
          const y = centerY + wave1 + wave2 + offset;

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
    <div className="w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-95">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
