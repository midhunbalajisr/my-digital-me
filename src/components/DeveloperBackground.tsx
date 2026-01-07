import { useEffect, useRef } from "react";

const DeveloperBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Floating code symbols
    const symbols = ["</>", "{}", "[]", "()", "=>", "//", "/*", "*/", "++", "&&", "||", "!=", "==="];
    const particles: {
      x: number;
      y: number;
      symbol: string;
      speed: number;
      opacity: number;
      size: number;
    }[] = [];

    // Create particles
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        speed: 0.2 + Math.random() * 0.3,
        opacity: 0.03 + Math.random() * 0.05,
        size: 12 + Math.random() * 8,
      });
    }

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      
      // Clear with background
      ctx.fillStyle = isDark ? "rgba(10, 15, 25, 0.02)" : "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating symbols
      particles.forEach((p) => {
        ctx.font = `${p.size}px 'Fira Code', monospace`;
        ctx.fillStyle = isDark 
          ? `rgba(0, 200, 150, ${p.opacity})` 
          : `rgba(0, 150, 130, ${p.opacity * 1.5})`;
        ctx.fillText(p.symbol, p.x, p.y);

        // Move upward slowly
        p.y -= p.speed;
        p.x += Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.3;

        // Reset when off screen
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
      });
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.02] rounded-full blur-3xl" />
    </div>
  );
};

export default DeveloperBackground;
