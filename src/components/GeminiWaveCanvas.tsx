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
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const basePalette = [
      "#38bdf8", // Electric Cyan
      "#8b5cf6", // Vibrant Purple
      "#ec4899", // Gemini Pink/Magenta
      "#2563eb", // Royal Blue
      "#6366f1", // Indigo
      "#06b6d4", // Cyan
    ];

    const palette = Array(4).fill(basePalette).flat();

    function clampColorStop(value: number) {
      return Math.max(0, Math.min(1, value));
    }

    class WaveElement {
      waveIndex: number;
      amplitude: number;
      period: number;
      spacing: number;
      phaseOffset: number;
      colors: string[];
      offsetColorStop: number;
      offsetColorStopAccel: number;
      xStep: number;
      alpha: number;

      constructor(waveIndex: number, totalWaves: number, height: number, width: number) {
        this.waveIndex = waveIndex;
        this.amplitude = height * 0.05;
        this.period = width * 0.35;
        this.spacing = height / Math.max(totalWaves, 8);
        this.phaseOffset = Math.random() * Math.PI * 2;
        this.colors = [...palette];
        this.offsetColorStop = 0;
        this.offsetColorStopAccel = 0.0008;
        this.xStep = width * 0.008;
        this.alpha = Math.max(0.2, 0.85 - waveIndex * 0.04);
      }

      draw(width: number, height: number) {
        if (!ctx) return;
        this.amplitude = height * (0.03 + (mouseY / Math.max(height, 1)) * 0.03);

        ctx.beginPath();
        ctx.moveTo(0, height);
        this.offsetColorStop = (this.offsetColorStop - this.offsetColorStopAccel) % 1;

        for (let x = 0; x <= width; x += this.xStep) {
          const waveAmplitude = this.amplitude * (0.6 + this.waveIndex * 0.2);
          const wavePeriod = this.period * (1 + this.waveIndex * 0.25);
          const speed = -(1.2 + this.waveIndex * 0.15);

          const heightVariation =
            Math.sin(x * width * 0.00002 + frameCount * 0.01) * (height * 0.012) +
            Math.sin(x * width * 0.00004 + frameCount * 0.015) * (height * 0.008);

          const y =
            this.spacing * (this.waveIndex + 1) +
            waveAmplitude *
              Math.sin((x + frameCount * speed) * 2 * Math.PI / wavePeriod + this.phaseOffset) +
            heightVariation -
            this.spacing;

          ctx.lineTo(x, y);

          const gradient = ctx.createLinearGradient(x, y - waveAmplitude, x, y + height);

          this.colors.forEach((color, i) => {
            const baseStop = i / this.colors.length;
            const yOffset = y * 0.0006;
            const stop = clampColorStop(baseStop + this.offsetColorStop + yOffset);
            const hexAlpha = Math.floor(this.alpha * 255)
              .toString(16)
              .padStart(2, "0");
            gradient.addColorStop(stop, color + hexAlpha);
          });

          ctx.fillStyle = gradient;
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      }
    }

    let elements: WaveElement[] = [];

    const init = (rectWidth: number, rectHeight: number) => {
      elements = [];
      const numWaves = Math.min(12, Math.max(6, Math.floor(rectHeight * 0.045)));
      for (let i = 0; i < numWaves; i++) {
        elements.push(new WaveElement(i, numWaves, rectHeight, rectWidth));
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init(rect.width, rect.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      elements.forEach((element) => element.draw(rect.width, rect.height));

      frameCount++;
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden z-0 h-64 sm:h-80 flex items-end opacity-90">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
