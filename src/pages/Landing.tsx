import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [canEnter, setCanEnter] = useState(false);
  
  const text = "MIDHUN'S CREATIVE";
  
  const colors = [
    'hsl(170, 100%, 45%)',
    'hsl(280, 80%, 60%)',
    'hsl(200, 90%, 50%)',
    'hsl(320, 80%, 55%)',
    'hsl(45, 100%, 60%)',
    'hsl(140, 80%, 50%)',
    'hsl(0, 80%, 60%)',
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setCanEnter(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/portfolio');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
      onClick={canEnter ? handleEnter : undefined}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              background: colors[i % colors.length],
              opacity: 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const shapes = ['triangle', 'square', 'diamond'];
          const shape = shapes[i % 3];
          return (
            <div
              key={`shape-${i}`}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            >
              {shape === 'triangle' && (
                <div
                  className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px]"
                  style={{ 
                    borderBottomColor: colors[i % colors.length],
                    opacity: 0.4,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              )}
              {shape === 'square' && (
                <div
                  className="w-5 h-5 border-2"
                  style={{ 
                    borderColor: colors[i % colors.length],
                    opacity: 0.4,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              )}
              {shape === 'diamond' && (
                <div
                  className="w-5 h-5 border-2 rotate-45"
                  style={{ 
                    borderColor: colors[i % colors.length],
                    opacity: 0.4,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Main title with floating colorful letters */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 px-4">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="text-5xl md:text-7xl lg:text-9xl font-bold transition-all duration-500"
            style={{
              color: colors[index % colors.length],
              textShadow: `0 0 30px ${colors[index % colors.length]}, 0 0 60px ${colors[index % colors.length]}`,
              fontFamily: 'Orbitron, sans-serif',
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? `translateY(${Math.sin(index * 0.5) * 10}px)` 
                : 'translateY(50px)',
              transitionDelay: `${index * 50}ms`,
              animation: isVisible ? `float-letter 3s ease-in-out infinite` : 'none',
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p
        className="text-lg md:text-2xl text-muted-foreground mt-8 relative z-10 font-light tracking-widest"
        style={{
          opacity: canEnter ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        DEVELOPER • DESIGNER • INNOVATOR
      </p>

      {/* Enter button */}
      <button
        onClick={handleEnter}
        className="mt-12 px-8 py-4 relative z-10 group overflow-hidden rounded-full border-2 border-primary/50 transition-all duration-300 hover:border-primary"
        style={{
          opacity: canEnter ? 1 : 0,
          transform: canEnter ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease-in-out',
        }}
      >
        <span className="relative z-10 text-lg font-semibold tracking-wider text-foreground group-hover:text-primary-foreground transition-colors">
          ENTER PORTFOLIO
        </span>
        <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <style>{`
        @keyframes float-letter {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
