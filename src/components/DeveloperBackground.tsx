import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

    // Matrix-style code rain
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    
    const codeChars = "01</>{}[]();=>const let var function async await import export return if else while for".split("");
    
    const draw = () => {
      // Get computed style for theme awareness
      const isDark = document.documentElement.classList.contains("dark");
      
      ctx.fillStyle = isDark ? "rgba(5, 10, 20, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isDark ? "rgba(0, 200, 150, 0.15)" : "rgba(0, 150, 136, 0.2)";
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = codeChars[Math.floor(Math.random() * codeChars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Floating laptop with flower
  const flowers = ["🌸", "🌺", "🌷", "💮", "🌼", "🌻"];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Matrix code rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Floating laptop */}
      <motion.div
        className="absolute bottom-20 left-10 md:left-20 text-6xl md:text-8xl"
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💻
      </motion.div>

      {/* Flowers flowing from laptop */}
      {flowers.map((flower, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl"
          initial={{
            x: 80,
            y: window.innerHeight - 120,
            opacity: 0,
          }}
          animate={{
            x: [80, 200 + i * 50, 400 + i * 80, window.innerWidth + 100],
            y: [window.innerHeight - 120, window.innerHeight - 200 - i * 30, window.innerHeight - 150, window.innerHeight - 180],
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360, 540],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        >
          {flower}
        </motion.div>
      ))}

      {/* Additional floating code elements */}
      {["⌨️", "🖥️", "📱", "🔧", "⚙️"].map((emoji, i) => (
        <motion.div
          key={`tech-${i}`}
          className="absolute text-3xl md:text-4xl opacity-20"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + (i * 15) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default DeveloperBackground;
