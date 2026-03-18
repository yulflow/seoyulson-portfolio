"use client";

import { useEffect, useRef } from "react";

class NameParticle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size = 2;
  density: number;
  color: string;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    targetX: number,
    targetY: number,
    dpr: number
  ) {
    this.x = Math.random() * (canvasWidth / dpr);
    this.y = Math.random() * (canvasHeight / dpr);
    this.targetX = targetX;
    this.targetY = targetY;
    this.density = Math.random() * 30 + 1;
    this.color = Math.random() > 0.5 ? "#FFFFFF" : "#1754cf";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const force = (mouse.radius - distance) / mouse.radius;
      this.x -= (dx / distance) * force * this.density;
      this.y -= (dy / distance) * force * this.density;
    } else {
      this.x -= (this.x - this.targetX) / 10;
      this.y -= (this.y - this.targetY) / 10;
    }
  }
}

export function InteractiveName() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let particles: NameParticle[] = [];
    const mouse = { x: 0, y: 0, radius: 100 };
    let animationId: number;

    function initCanvas() {
      const dpr = window.devicePixelRatio;
      canvas!.width = container!.clientWidth * dpr;
      canvas!.height = container!.clientHeight * dpr;
      ctx!.scale(dpr, dpr);
      setupParticles();
    }

    function setupParticles() {
      particles = [];
      const dpr = window.devicePixelRatio;
      const drawWidth = canvas!.width / dpr;
      const drawHeight = canvas!.height / dpr;

      ctx!.fillStyle = "white";
      const fontSize = Math.min(drawWidth / 6, 150);
      ctx!.font = `900 ${fontSize}px "Geist", "Inter", "Arial", sans-serif`;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("SEOYUL SON", drawWidth / 2, drawHeight / 2);

      const textCoordinates = ctx!.getImageData(
        0,
        0,
        canvas!.width,
        canvas!.height
      );
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let y = 0; y < textCoordinates.height; y += 4) {
        for (let x = 0; x < textCoordinates.width; x += 4) {
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            const posX = x / dpr;
            const posY = y / dpr;
            particles.push(
              new NameParticle(canvas!.width, canvas!.height, posX, posY, dpr)
            );
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.update(mouse);
        p.draw(ctx!);
      }
      animationId = requestAnimationFrame(animate);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", initCanvas);

    // 폰트 로드 후 Canvas 초기화 (폰트 없으면 텍스트 픽셀이 0이라 파티클 생성 안 됨)
    document.fonts.ready.then(() => {
      initCanvas();
      animate();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center overflow-visible"
    >
      <canvas ref={canvasRef} className="w-full h-full cursor-none" />
    </div>
  );
}
