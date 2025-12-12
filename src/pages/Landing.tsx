import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypingAnimation from '@/components/TypingAnimation';

const Landing = () => {
  const navigate = useNavigate();
  const [canEnter, setCanEnter] = useState(false);
  
  const text = "MIDHUN CREATORS";

  // Code snippets for background animation
  const codeSnippets = [
    'const developer = "Midhun";',
    'function createMagic() { }',
    'import { creativity } from "mind";',
    '<Component props={amazing} />',
    'async function buildDreams() { }',
    'export default Innovation;',
    'interface Skills { coding: true }',
    'npm run build-future',
    'git commit -m "success"',
    'const passion = Infinity;',
    'while(true) { learn(); }',
    'return <Success />;',
  ];

  useEffect(() => {
    const timer = setTimeout(() => setCanEnter(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    navigate('/portfolio');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background cursor-pointer"
      onClick={canEnter ? handleEnter : undefined}
    >
      {/* Animated code rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/60 font-mono text-sm whitespace-nowrap"
            initial={{ 
              x: `${(i * 8.5) % 100}%`,
              y: -100,
              opacity: 0 
            }}
            animate={{ 
              y: ['0%', '120%'],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
            }}
            style={{ left: `${(i * 8.5) % 100}%` }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Floating brackets and code symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {['{ }', '< />', '( )', '[ ]', '=> ', '&&', '||', '++', '::'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-primary/30 font-mono text-2xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{ 
              left: `${10 + (i * 10)}%`,
              top: `${20 + (i * 8) % 60}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Terminal-like decorative elements */}
      <motion.div
        className="absolute top-10 left-10 hidden md:flex items-center gap-2 text-muted-foreground font-mono text-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-primary">$</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          _
        </motion.span>
      </motion.div>

      {/* Main title with staggered animation */}
      <div className="relative z-10 flex flex-wrap justify-center gap-1 md:gap-2 px-4">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            className="text-4xl md:text-6xl lg:text-8xl font-bold font-heading"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              type: 'spring',
              stiffness: 100,
            }}
            style={{
              color: 'hsl(var(--primary))',
              textShadow: '0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.3)',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      {/* Typing animation subtitle */}
      <motion.div
        className="mt-8 relative z-10 text-lg md:text-2xl font-light tracking-widest text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <TypingAnimation />
      </motion.div>

      {/* Enter button with code theme */}
      <motion.button
        onClick={handleEnter}
        className="mt-12 px-8 py-4 relative z-10 group overflow-hidden rounded-lg border border-primary/50 bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: canEnter ? 1 : 0, y: canEnter ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 font-mono text-lg font-semibold text-primary">
          {'>'} Enter_Portfolio
        </span>
      </motion.button>

      {/* Code-themed hint */}
      <motion.p
        className="mt-6 text-sm text-muted-foreground font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: canEnter ? 0.6 : 0 }}
        transition={{ delay: 2 }}
      >
        // Click anywhere to continue
      </motion.p>

      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Corner decorations */}
      <div className="absolute bottom-10 right-10 text-primary/30 font-mono text-xs hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          v1.0.0
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
