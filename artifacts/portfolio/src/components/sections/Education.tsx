import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4 flex-row-reverse"
        >
          <h2 className="text-3xl md:text-5xl font-bold">04. Training_Data</h2>
          <div className="h-[1px] flex-1 bg-border relative">
             <div className="absolute inset-y-0 right-0 w-24 neural-line rotate-180" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Academic Path
            </h3>
            <div className="space-y-12 border-l border-border pl-6 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-background border-2 border-primary rounded-full glow-box" />
                <h4 className="text-xl font-bold text-foreground">B.Tech in Artificial Intelligence & Data Science</h4>
                <p className="font-mono text-primary text-sm mt-1 mb-3">Oct 2022 – Jun 2026</p>
                <p className="text-muted-foreground">VVIT, Nambur, AP</p>
                <div className="mt-3 inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-sm font-mono">
                  CGPA: 8.55/10
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-background border-2 border-muted-foreground rounded-full" />
                <h4 className="text-xl font-bold text-foreground">Pre-University (PCM)</h4>
                <p className="font-mono text-muted-foreground text-sm mt-1 mb-3">2020 – 2022</p>
                <p className="text-muted-foreground">Sri Chaitanya Junior College, Guntur</p>
                <div className="mt-3 inline-block px-3 py-1 bg-muted text-foreground border border-border rounded text-sm font-mono">
                  Score: 93%
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certs & Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" />
              Certifications & Honors
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 border border-primary/30 bg-card rounded-lg relative overflow-hidden group hover:border-primary/60 transition-colors"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors" />
                <h4 className="text-lg font-bold text-foreground relative z-10">Google Cloud Certified</h4>
                <p className="text-primary font-mono text-sm mt-1 mb-2 relative z-10">Associate Cloud Engineer</p>
                <p className="text-muted-foreground text-sm relative z-10">Validated expertise in deploying, scaling, and managing cloud infrastructure.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.1 }}
                className="p-6 border border-border bg-card rounded-lg hover:border-border/80 transition-colors"
              >
                <h4 className="text-lg font-bold text-foreground">Other Certifications</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1 text-[10px]">■</span>
                    <span><strong>Joy of Computing in Python</strong> – NPTEL</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1 text-[10px]">■</span>
                    <span><strong>Microsoft Career Essentials</strong> – Generative AI</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.2 }}
                className="p-6 border border-border bg-card rounded-lg hover:border-primary/30 transition-colors"
              >
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Trophy size={18} className="text-primary" />
                  Ideathon Achievement
                </h4>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Top 5 at Guntur's first centralized 24-hour Ideathon for developing an AI-based speech analysis tool featuring real-time feedback and performance scoring.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
