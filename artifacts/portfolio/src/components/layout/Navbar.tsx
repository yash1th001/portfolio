import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          // Determine active section based on scroll position
          const sections = ['hero', ...navItems.map(i => i.toLowerCase())];
          const scrollPosition = window.scrollY + 200; // Offset for header

          for (const section of [...sections].reverse()) {
            const element = document.getElementById(section);
            if (element && scrollPosition >= element.offsetTop) {
              setActiveSection((prev) => (prev !== section ? section : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          <div 
            className="font-mono text-xl sm:text-2xl font-bold cursor-pointer transition-colors flex items-center gap-1 group relative z-50 py-1"
            onClick={() => scrollTo('hero')}
          >
            <motion.span 
              className="text-primary opacity-50 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: -4 }}
            >
              {'<'}
            </motion.span>
            <span className="text-foreground group-hover:text-primary transition-colors duration-300 glow-text">YT</span>
            <motion.span 
              className="text-primary opacity-50 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 4 }}
            >
              {'/>'}
            </motion.span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-sm">
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
            
            <a 
              href="/Tammisetty_Yashwanth_Resume.pdf" 
              download="Tammisetty_Yashwanth_Resume.pdf"
              className="ml-2 px-3 py-1.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs rounded transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_10px_hsla(150,100%,50%,0.15)] hover:shadow-[0_0_15px_hsla(150,100%,50%,0.4)]"
            >
              <Download size={14} />
              Resume
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            aria-label="Toggle navigation menu"
            className="md:hidden relative z-50 p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-30 nav-blur border-b border-border flex flex-col items-center justify-center pointer-events-auto md:hidden px-6"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <nav className="flex flex-col items-center gap-5 sm:gap-6 font-mono text-lg sm:text-xl w-full max-w-xs">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                initial={{ opacity: 0, x: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: mobileMenuOpen ? i * 0.08 : 0 }}
                className={`w-full py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-3 ${isActive ? 'text-primary bg-primary/10 border border-primary/20' : 'text-muted-foreground hover:text-foreground hover:bg-card/50'}`}
              >
                {isActive && <span className="text-primary glow-text">{'>>'}</span>}
                {item}
              </motion.button>
            );
          })}
          
          <a
            href="/Tammisetty_Yashwanth_Resume.pdf"
            download="Tammisetty_Yashwanth_Resume.pdf"
            className="w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-mono text-center font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_hsla(150,100%,50%,0.3)] mt-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </nav>
      </motion.div>
    </>
  );
}
