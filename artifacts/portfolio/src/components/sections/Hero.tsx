import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Download } from 'lucide-react';

// Typewriter hook
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, delay = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, delay]);

  return text;
}

export function Hero() {
  const roles = ["AI/ML Engineer", "LLM Pipeline Builder", "GCP Certified", "RAG Architect"];
  const currentRole = useTypewriter(roles);

  const nameText = "Yashwanth";
  
  // Floating skill chips
  const skills = ["Python", "LangChain", "Gemini", "PyTorch", "FastAPI", "MongoDB"];

  // Generate deterministic nodes with memoized animation metadata
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: 10 + (Math.sin(i * 4.3) * 40 + 40),
      y: 10 + (Math.cos(i * 7.1) * 40 + 40),
      duration: 3 + (i % 4) * 0.75,
      deltaX: (i % 2 === 0 ? 1 : -1) * 2,
      deltaY: (i % 3 === 0 ? 1 : -1) * 2,
    }));
  }, []);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.sin(i * j) > 0.6) {
          l.push({ 
            id: `${i}-${j}`, 
            source: nodes[i], 
            target: nodes[j],
            duration: 4 + ((i + j) % 5) * 0.8
          });
        }
      }
    }
    return l;
  }, [nodes]);

  // Memoized floating skill chip positions for zero-re-render animation smoothness
  const chipPositions = useMemo(() => {
    return skills.map((skill, i) => ({
      name: skill,
      startX: 200 + (i * 70) % 400,
      endX: 150 + (i * 90) % 300,
      startY: 120 + (i * 60) % 400,
      endY: 40 + (i * 50) % 200,
      duration: 16 + (i % 3) * 4,
      delay: i * 2,
    }));
  }, [skills]);

  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative pt-20 overflow-hidden">
      
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none will-change-transform">
        <svg className="w-full h-full">
          {lines.map((line) => (
            <motion.line
              key={line.id}
              x1={`${line.source.x}%`}
              y1={`${line.source.y}%`}
              x2={`${line.target.x}%`}
              y2={`${line.target.y}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: line.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="hsl(var(--primary))"
              animate={{
                r: [2, 3.5, 2],
                opacity: [0.3, 0.9, 0.3],
                cx: [`${node.x}%`, `${node.x + node.deltaX}%`, `${node.x}%`],
                cy: [`${node.y}%`, `${node.y + node.deltaY}%`, `${node.y}%`]
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 z-10 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3 font-mono text-primary mb-6 sm:mb-8 text-xs sm:text-sm md:text-base bg-primary/10 w-fit max-w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_hsla(150,100%,50%,0.1)] overflow-hidden"
        >
          <Terminal size={16} className="animate-pulse shrink-0" />
          <span className="truncate sm:whitespace-normal">System.out.println("Hello, World!"); // Initializing</span>
        </motion.div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-4 leading-[1.1] break-words">
          <div className="flex flex-wrap">
            {nameText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.05), type: 'spring' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary glow-text"
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-foreground"
          >
            Tammisetty
          </motion.div>
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="min-h-[2.5rem] mb-4 sm:mb-6 flex items-center font-mono text-lg sm:text-xl md:text-3xl text-muted-foreground flex-wrap"
        >
          <span>{'>'} </span>
          <span className="ml-2 sm:ml-3 text-foreground font-medium">{currentRole}</span>
          <span className="ml-1 inline-block w-2.5 h-6 sm:w-3 sm:h-8 bg-primary animate-cursor" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="max-w-2xl"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 mb-8 sm:mb-10 leading-relaxed font-light">
            Building production-grade LLM pipelines, RAG systems, and AI-native infrastructure. 
            I don't just prompt models—I orchestrate them to solve complex engineering challenges.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center w-full sm:w-auto"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-scanline relative px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-mono font-bold rounded-sm hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3 glow-box group overflow-hidden text-sm sm:text-base"
          >
            Explore Work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
          
          <a 
            href="/Tammisetty_Yashwanth_Resume.pdf" 
            download="Tammisetty_Yashwanth_Resume.pdf"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary/10 border-2 border-primary text-primary font-mono font-bold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_15px_hsla(150,100%,50%,0.15)] hover:shadow-[0_0_25px_hsla(150,100%,50%,0.4)] text-sm sm:text-base group"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform shrink-0" />
            [ Download_CV ]
          </a>
          
          <a 
            href="https://github.com/yash1th001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-border text-foreground font-mono font-medium rounded-sm hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsla(150,100%,50%,0.2)] hover:bg-primary/5 text-sm sm:text-base"
          >
            [ View_GitHub ]
          </a>
        </motion.div>
      </div>

      {/* Floating Skill Chips with GPU acceleration */}
      {chipPositions.map((chip) => (
        <motion.div
          key={chip.name}
          className="absolute hidden md:block px-4 py-2 border border-primary/20 bg-background/50 backdrop-blur-md rounded-full font-mono text-sm text-primary/80 z-0 shadow-[0_0_15px_hsla(150,100%,50%,0.05)] pointer-events-none will-change-transform"
          initial={{ 
            opacity: 0, 
            x: chip.startX, 
            y: chip.startY 
          }}
          animate={{ 
            opacity: [0, 0.8, 0],
            y: [chip.startY, chip.endY],
            x: [chip.startX, chip.endX]
          }}
          transition={{
            duration: chip.duration,
            repeat: Infinity,
            delay: chip.delay,
            ease: "easeInOut"
          }}
        >
          {chip.name}
        </motion.div>
      ))}

    </section>
  );
}
