import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Get In Touch</h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Currently exploring opportunities in AI/ML Engineering and Data Science. 
            Whether you have a question, a project idea, or just want to discuss the latest in LLMs, 
            my inbox is open.
          </p>
          
          <a 
            href="mailto:yashwanth.99122@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-mono font-bold rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsla(150,100%,50%,0.3)] active:scale-95"
          >
            <Mail size={20} />
            Initialize_Connection()
          </a>
          
          <div className="mt-20 flex justify-center gap-8">
            <a href="mailto:yashwanth.99122@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="tel:+919441407735" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Phone">
              <Phone size={24} />
            </a>
            <a href="https://linkedin.com/in/yash1th011" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yash1th001" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center text-xs font-mono text-muted-foreground/50">
        <p>Designed & Built by Tammisetty Yashwanth © {new Date().getFullYear()}</p>
        <p className="mt-1">Running on React + Tailwind</p>
      </div>
    </section>
  );
}
