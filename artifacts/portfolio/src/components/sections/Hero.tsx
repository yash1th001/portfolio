import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';

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

  // Generate deterministic but random-looking nodes for the neural network
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: 10 + (Math.sin(i * 4.3) * 40 + 40), // 10-90%
      y: 10 + (Math.cos(i * 7.1) * 40 + 40),
    }));
  }, []);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.sin(i * j) > 0.6) {
          l.push({ id: `${i}-${j}`, source: nodes[i], target: nodes[j] });
        }
      }
    }
    return l;
  }, [nodes]);

  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative pt-20 overflow-hidden">
      
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
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
                duration: 4 + Math.random() * 4,
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
                r: [2, 4, 2],
                opacity: [0.3, 1, 0.3],
                cx: [`${node.x}%`, `${node.x + (Math.random()*4 - 2)}%`, `${node.x}%`],
                cy: [`${node.y}%`, `${node.y + (Math.random()*4 - 2)}%`, `${node.y}%`]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-primary mb-8 text-sm md:text-base bg-primary/10 w-fit px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_hsla(150,100%,50%,0.1)]"
        >
          <Terminal size={18} className="animate-pulse" />
          <span>System.out.println("Hello, World!"); // Initializing</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-4 leading-[1.1]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-foreground"
          >
            Tammisetty
          </motion.div>
          <div className="flex">
            {nameText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.05), type: 'spring' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary glow-text"
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-10 mb-6 flex items-center font-mono text-xl md:text-3xl text-muted-foreground"
        >
          <span>{'>'} </span>
          <span className="ml-3 text-foreground font-medium">{currentRole}</span>
          <span className="ml-1 inline-block w-3 h-8 bg-primary animate-cursor" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-10 leading-relaxed font-light">
            Building production-grade LLM pipelines, RAG systems, and AI-native infrastructure. 
            I don't just prompt models—I orchestrate them to solve complex engineering challenges.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap gap-6 items-center"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-scanline relative px-8 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-sm hover:bg-emerald-400 transition-colors flex items-center gap-3 glow-box group overflow-hidden"
          >
            Explore Work
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
          
          <a 
            href="https://github.com/yash1th001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-border text-foreground font-mono font-medium rounded-sm hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsla(150,100%,50%,0.2)] hover:bg-primary/5"
          >
            [ View_GitHub ]
          </a>
        </motion.div>
      </div>

      {/* Floating Skill Chips */}
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          className="absolute hidden md:block px-4 py-2 border border-primary/20 bg-background/50 backdrop-blur-md rounded-full font-mono text-sm text-primary/80 z-0 shadow-[0_0_15px_hsla(150,100%,50%,0.05)] pointer-events-none"
          initial={{ 
            opacity: 0, 
            x: 200 + Math.random() * 400, 
            y: 100 + Math.random() * 500 
          }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [100 + Math.random() * 500, Math.random() * 200],
            x: [200 + Math.random() * 400, 100 + Math.random() * 300]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        >
          {skill}
        </motion.div>
      ))}

    </section>
  );
}
