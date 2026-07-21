import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy, Cloud } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-32 relative bg-card/20 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex items-center gap-6 flex-row-reverse"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">04. Training_Data</h2>
          <div className="h-[1px] flex-1 bg-border relative">
             <div className="absolute inset-y-0 right-0 w-32 neural-line rotate-180" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Education Timeline */}
          <div>
            <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
              <div className="p-3 bg-primary/10 text-primary rounded-lg border border-primary/20">
                <GraduationCap size={24} />
              </div>
              Academic Path
            </h3>
            
            <div className="space-y-16 relative">
              {/* Gradient vertical line */}
              <div className="absolute left-[15px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-12"
              >
                <div className="absolute left-[11px] top-1.5 w-2.5 h-2.5 bg-background border-2 border-primary rounded-full shadow-[0_0_10px_hsla(150,100%,50%,0.8)] z-10" />
                
                <h4 className="text-2xl font-bold text-foreground">B.Tech in Artificial Intelligence & Data Science</h4>
                <p className="font-mono text-primary text-sm mt-2 mb-4">Oct 2022 – Jun 2026</p>
                <p className="text-muted-foreground text-lg mb-4">VVIT, Nambur, AP</p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  CGPA: 8.55/10
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-12"
              >
                <div className="absolute left-[11px] top-1.5 w-2.5 h-2.5 bg-background border-2 border-muted-foreground rounded-full z-10" />
                
                <h4 className="text-2xl font-bold text-foreground">Pre-University (PCM)</h4>
                <p className="font-mono text-muted-foreground text-sm mt-2 mb-4">2020 – 2022</p>
                <p className="text-muted-foreground text-lg mb-4">Sri Chaitanya Junior College, Guntur</p>
                <div className="inline-block px-4 py-1.5 bg-card text-foreground border border-border rounded-md text-sm font-mono">
                  Score: 93%
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certs & Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
              <div className="p-3 bg-primary/10 text-primary rounded-lg border border-primary/20">
                <Award size={24} />
              </div>
              Certifications & Honors
            </h3>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 border-2 border-blue-500/20 bg-card rounded-xl relative overflow-hidden group hover:border-blue-500/50 transition-colors shadow-[0_0_30px_rgba(59,130,246,0.02)] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              >
                <div className="absolute right-0 top-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[50px] group-hover:bg-blue-500/10 transition-colors" />
                <Cloud className="absolute -right-4 -top-4 w-24 h-24 text-blue-500/10 group-hover:scale-110 transition-transform duration-500" />
                
                <h4 className="text-xl font-bold text-foreground relative z-10 mb-2">Google Cloud Certified</h4>
                <p className="text-blue-400 font-mono text-sm mb-4 relative z-10 bg-blue-500/10 w-fit px-3 py-1 rounded">Associate Cloud Engineer</p>
                <p className="text-muted-foreground relative z-10 leading-relaxed">Validated expertise in deploying, scaling, and managing enterprise-grade cloud infrastructure on GCP.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className="p-8 border-2 border-amber-500/20 bg-card rounded-xl relative overflow-hidden group hover:border-amber-500/50 transition-colors shadow-[0_0_30px_rgba(245,158,11,0.02)] hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
              >
                <div className="absolute right-0 top-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[50px] group-hover:bg-amber-500/10 transition-colors" />
                <Trophy className="absolute -right-4 -bottom-4 w-24 h-24 text-amber-500/10 group-hover:rotate-12 transition-transform duration-500" />
                
                <h4 className="text-xl font-bold text-foreground relative z-10 mb-4 flex items-center gap-3">
                  Ideathon Achievement
                </h4>
                <p className="text-amber-400 font-mono text-sm mb-4 relative z-10 bg-amber-500/10 w-fit px-3 py-1 rounded">Top 5 Finalist</p>
                <p className="text-muted-foreground relative z-10 leading-relaxed">
                  Developed an AI-based speech analysis tool featuring real-time feedback and performance scoring at Guntur's first centralized 24-hour Ideathon.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
                className="p-8 border border-border bg-card rounded-xl hover:border-primary/30 transition-colors"
              >
                <h4 className="text-lg font-bold text-foreground mb-6">Continuous Learning</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <span className="text-primary mt-1.5 text-xs shadow-[0_0_5px_hsla(150,100%,50%,0.8)]">■</span>
                    <span><strong className="text-foreground">Joy of Computing in Python</strong> – NPTEL</span>
                  </li>
                  <li className="flex items-start gap-4 text-muted-foreground">
                    <span className="text-primary mt-1.5 text-xs shadow-[0_0_5px_hsla(150,100%,50%,0.8)]">■</span>
                    <span><strong className="text-foreground">Career Essentials in GenAI</strong> – Microsoft</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
