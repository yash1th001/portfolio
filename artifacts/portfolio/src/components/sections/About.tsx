import { motion } from 'framer-motion';

const stats = [
  { label: 'CGPA', value: '8.51' },
  { label: 'Certification', value: 'GCP ACE' },
  { label: 'Projects', value: '3+' },
  { label: 'Ideathon', value: 'Top 5' }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16 lg:mb-20 flex items-center gap-4 sm:gap-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight">01. Background</h2>
          <div className="h-[1px] flex-1 bg-border relative hidden sm:block">
             <div className="absolute inset-y-0 left-0 w-32 neural-line" />
          </div>
        </motion.div>

        {/* Stat highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-3.5 sm:p-5 border border-border bg-card/30 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="text-2xl sm:text-3xl font-mono font-bold text-foreground group-hover:text-primary transition-colors mb-1 relative z-10">{stat.value}</span>
              <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest relative z-10">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative pl-4 sm:pl-8 border-l-2 border-primary/20 glow-border-left"
          >
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I am a B.Tech graduate in Artificial Intelligence & Data Science from VVIT, 
                driven by a passion for architecting systems that bridge theoretical machine learning 
                and practical, production-ready infrastructure.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                My expertise spans <span className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded">LLM pipelines</span>, 
                NLP systems, and cloud-native ML infrastructure. As a Google Cloud Certified Associate Cloud Engineer, 
                I build AI solutions that are scalable, reliable, and production-deployable from day one.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Most recently I built <strong className="text-foreground">AICruit</strong> — an end-to-end AI resume evaluation platform 
                combining semantic matching, bias auditing, and explainable scoring to replace broken ATS screening with something that actually works.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full rounded-xl overflow-hidden border border-border shadow-[0_0_30px_hsla(150,100%,50%,0.05)] bg-[#0d0d12]"
          >
            {/* Terminal Header */}
            <div className="bg-[#1a1a24] px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
              </div>
              <div className="mx-auto text-[11px] sm:text-xs font-mono text-muted-foreground/60 tracking-wider truncate max-w-[180px] sm:max-w-none">
                tyashwanth@node-01:~/specs
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm shadow-[inset_0_0_20px_hsla(150,100%,50%,0.03)] h-full overflow-x-auto">
              <div className="text-primary/70 mb-4 sm:mb-6">
                $ cat system_specs.json
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row">
                  <span className="text-emerald-400 sm:w-32 shrink-0">"location":</span>
                  <span className="text-foreground">"Andhra Pradesh, India",</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-emerald-400 sm:w-32 shrink-0">"education":</span>
                  <span className="text-foreground">"B.Tech AI & DS",</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-emerald-400 sm:w-32 shrink-0">"focus":</span>
                  <span className="text-foreground">["NLP", "RAG", "MLOps"],</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-emerald-400 sm:w-32 shrink-0">"email":</span>
                  <a href="mailto:yashwanth.99122@gmail.com" className="text-primary hover:underline transition-all hover:text-emerald-300 break-all sm:break-normal">
                    "yashwanth.99122@gmail.com"
                  </a>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <span className="text-primary mr-2">$</span>
                <span className="w-2.5 h-4 bg-foreground animate-cursor inline-block" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
