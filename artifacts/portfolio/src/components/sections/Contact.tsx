import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const socials = [
    { 
      icon: <Mail size={26} />, 
      label: "Email", 
      href: "mailto:yashwanth.99122@gmail.com", 
      borderStyle: "border-2 border-red-500/40 hover:border-red-400 text-red-400/90 hover:text-red-300 bg-red-950/20 hover:bg-red-950/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      lineColor: "from-transparent via-red-500 to-transparent"
    },
    { 
      icon: <Phone size={26} />, 
      label: "Phone", 
      href: "tel:+919441407735", 
      borderStyle: "border-2 border-emerald-500/40 hover:border-emerald-400 text-emerald-400/90 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      lineColor: "from-transparent via-emerald-500 to-transparent"
    },
    { 
      icon: <Linkedin size={26} />, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/yash1th011", 
      borderStyle: "border-2 border-blue-500/40 hover:border-blue-400 text-blue-400/90 hover:text-blue-300 bg-blue-950/20 hover:bg-blue-950/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] shadow-[0_0_15px_rgba(59,130,246,0.1)]",
      lineColor: "from-transparent via-blue-500 to-transparent"
    },
    { 
      icon: <Github size={26} />, 
      label: "GitHub", 
      href: "https://github.com/yash1th001", 
      borderStyle: "border-2 border-primary/40 hover:border-primary text-primary/90 hover:text-primary bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_25px_hsla(150,100%,50%,0.35)] shadow-[0_0_15px_hsla(150,100%,50%,0.1)]",
      lineColor: "from-transparent via-primary to-transparent"
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle Grid Lines specific to contact section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <p className="font-mono text-primary mb-4 sm:mb-6 tracking-widest uppercase text-xs sm:text-sm">05. What's Next?</p>
          
          <div className="relative inline-block mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter">Get In Touch</h2>
            <motion.div 
              className="absolute -bottom-2 sm:-bottom-4 left-0 h-1 bg-primary glow-box"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-16 leading-relaxed font-light px-2">
            Currently exploring opportunities in AI/ML Engineering and Data Science. 
            Whether you have a complex engineering challenge, a project idea, or just want to discuss the latest in LLM architectures, 
            my inbox is always open.
          </p>
          
          <motion.a 
            href="mailto:yashwanth.99122@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-card border-2 border-primary text-primary font-mono font-bold rounded-full transition-all duration-300 overflow-hidden text-xs sm:text-base max-w-full"
          >
            {/* Expanding ring on hover */}
            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            
            <Send size={18} className="relative z-10 group-hover:text-primary-foreground group-hover:animate-bounce transition-colors shrink-0" />
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors truncate">Initialize_Connection()</span>
          </motion.a>
          
          <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`relative group flex flex-col items-center justify-center gap-3 sm:gap-4 p-5 sm:p-7 rounded-xl transition-all duration-300 backdrop-blur-md overflow-hidden ${social.borderStyle}`}
              >
                {/* Glowing Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${social.lineColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                {/* Tech Corner Accents */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-current opacity-60" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-current opacity-60" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-current opacity-60" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-current opacity-60" />

                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider truncate w-full text-center">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
