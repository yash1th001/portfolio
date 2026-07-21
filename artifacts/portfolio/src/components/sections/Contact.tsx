import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const socials = [
    { icon: <Mail size={24} />, label: "Email", href: "mailto:yashwanth.99122@gmail.com", color: "hover:text-red-400 hover:border-red-400/50 hover:bg-red-400/10" },
    { icon: <Phone size={24} />, label: "Phone", href: "tel:+919441407735", color: "hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://linkedin.com/in/yash1th011", color: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10" },
    { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/yash1th001", color: "hover:text-white hover:border-white/50 hover:bg-white/10" },
  ];

  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Subtle Grid Lines specific to contact section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <p className="font-mono text-primary mb-6 tracking-widest uppercase text-sm">05. What's Next?</p>
          
          <div className="relative inline-block mb-12">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Get In Touch</h2>
            <motion.div 
              className="absolute -bottom-4 left-0 h-1 bg-primary glow-box"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </div>
          
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed font-light">
            Currently exploring opportunities in AI/ML Engineering and Data Science. 
            Whether you have a complex engineering challenge, a project idea, or just want to discuss the latest in LLM architectures, 
            my inbox is always open.
          </p>
          
          <motion.a 
            href="mailto:yashwanth.99122@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-card border-2 border-primary text-primary font-mono font-bold rounded-full transition-all duration-300 overflow-hidden"
          >
            {/* Expanding ring on hover */}
            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            
            <Send size={20} className="relative z-10 group-hover:text-primary-foreground group-hover:animate-bounce transition-colors" />
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors">Initialize_Connection()</span>
          </motion.a>
          
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                className={`flex flex-col items-center justify-center gap-4 p-6 border border-border/50 bg-card/30 rounded-xl transition-all duration-300 text-muted-foreground ${social.color}`}
              >
                {social.icon}
                <span className="font-mono text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center text-xs font-mono text-muted-foreground/40 space-y-2">
        <p>Built with precision by Tammisetty Yashwanth © {new Date().getFullYear()}</p>
        <p>Running on React + Tailwind CSS</p>
      </div>
    </section>
  );
}
