import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['About', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'nav-blur border-b border-border py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="font-mono text-xl font-bold cursor-pointer hover:text-primary transition-colors flex items-center gap-2"
          onClick={() => scrollTo('hero')}
        >
          <span className="text-primary">{'<'}</span>
          TY
          <span className="text-primary">{'/>'}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity absolute -left-4">_</span>
              {item}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
