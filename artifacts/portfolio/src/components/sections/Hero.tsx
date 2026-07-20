import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 font-mono text-primary mb-6 text-sm md:text-base"
        >
          <Terminal size={18} />
          <span>System.out.println("Hello, World!"); // Initializing profile</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight"
        >
          Tammisetty <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300 glow-text">
            Yashwanth
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
            AI/ML Engineer & Data Science Student.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Building LLM pipelines, RAG systems, and production-grade AI tools. 
            I don't just use models—I orchestrate them to solve complex problems.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded hover:bg-emerald-400 transition-colors flex items-center gap-2 glow-box"
          >
            Deploy_Projects <ArrowDown size={18} />
          </button>
          <a 
            href="https://github.com/yash1th001" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-foreground font-mono font-medium rounded hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
