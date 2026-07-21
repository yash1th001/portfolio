import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = ['About', 'Projects', 'Skills', 'Education', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', ...navItems.map(i => i.toLowerCase())];
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 shadow-[0_0_10px_hsla(150,100%,50%,0.8)]"
        style={{ scaleX }}
      />
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'nav-blur border-b border-border py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className="font-mono text-2xl font-bold cursor-pointer transition-colors flex items-center gap-1 group relative z-50"
            onClick={() => scrollTo('hero')}
          >
            <motion.span 
              className="text-primary opacity-50 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: -4 }}
            >
              {'<'}
            </motion.span>
            <span className="text-foreground group-hover:text-primary transition-colors duration-300 glow-text">TY</span>
            <motion.span 
              className="text-primary opacity-50 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 4 }}
            >
              {'/>'}
            </motion.span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative group transition-colors px-2 py-1 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <span className={`absolute -left-2 text-primary transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>_</span>
                  {item}
                  {isActive && (
                    <motion.div 
                      layoutId="active-nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary shadow-[0_0_8px_hsla(150,100%,50%,0.8)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-30 nav-blur border-b border-border flex items-center justify-center pointer-events-auto md:hidden"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <nav className="flex flex-col items-center gap-8 font-mono text-xl">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                initial={{ opacity: 0, x: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: mobileMenuOpen ? i * 0.1 : 0 }}
                className={`transition-colors flex items-center gap-2 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {isActive && <span className="text-primary glow-text">{'>>'}</span>}
                {item}
              </motion.button>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
}
