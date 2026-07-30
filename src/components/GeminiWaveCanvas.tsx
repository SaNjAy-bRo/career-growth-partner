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

    const baseColors = ["#38bdf8", "#8b5cf6", "#ec4899", "#2563eb", "#6366f1"];

    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
    }

    const particles: Particle[] = [];

    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Generate Constellation Particle Dots
      particles.length = 0;
      const particleCount = Math.floor(rect.width * 0.08);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: rect.height * (0.2 + Math.random() * 0.7),
          size: Math.random() * 2 + 1,
          color: baseColors[i % baseColors.length],
          speed: 0.2 + Math.random() * 0.5,
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // 1. Draw Multi-Layered Glowing Sine Waves (Matching Mockup)
      const numWaves = 4;
      for (let w = 0; w < numWaves; w++) {
        ctx.beginPath();
        const amplitude = rect.height * (0.15 + w * 0.04);
        const period = rect.width * (0.22 + w * 0.05);
        const speed = 0.02 + w * 0.008;
        const phase = w * 1.5;

        const strokeGradient = ctx.createLinearGradient(0, 0, rect.width, 0);
        strokeGradient.addColorStop(0, "#38bdf8");
        strokeGradient.addColorStop(0.35, "#8b5cf6");
        strokeGradient.addColorStop(0.7, "#ec4899");
        strokeGradient.addColorStop(1, "#2563eb");

        ctx.strokeStyle = strokeGradient;
        ctx.lineWidth = 3.5 - w * 0.5;
        ctx.shadowBlur = 16 - w * 3;
        ctx.shadowColor = w % 2 === 0 ? "#38bdf8" : "#8b5cf6";

        for (let x = 0; x <= rect.width; x += 8) {
          const y =
            rect.height * 0.5 +
            amplitude * Math.sin(x / period + frameCount * speed + phase) +
            Math.sin(x * 0.01 + frameCount * 0.02) * 8;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Reset Shadow Blur for Particles
      ctx.shadowBlur = 0;

      // 2. Draw Glowing Constellation Particles & Connecting Threads
      particles.forEach((p, idx) => {
        p.x += p.speed;
        if (p.x > rect.width) p.x = 0;

        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle glowing thread lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 75) {
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 75) * 0.35;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      });

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
    <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden z-0 h-48 sm:h-64 flex items-end opacity-95">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
