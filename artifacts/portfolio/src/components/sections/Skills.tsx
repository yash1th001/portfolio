import { motion } from 'framer-motion';
import { Cpu, Sparkles, Code2, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML & Deep Learning',
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'NLP', level: 88 },
      { name: 'Scikit-learn', level: 92 },
    ]
  },
  {
    title: 'Generative AI',
    icon: <Sparkles className="w-6 h-6" />,
    skills: [
      { name: 'LangChain', level: 95 },
      { name: 'RAG Systems', level: 90 },
      { name: 'Gemini API', level: 85 },
      { name: 'Prompt Engineering', level: 92 },
    ]
  },
  {
    title: 'Languages & Core CS',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 88 },
      { name: 'Data Structures', level: 85 },
      { name: 'OOP', level: 90 },
    ]
  },
  {
    title: 'Data & Cloud Tools',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'GCP', level: 85 },
      { name: 'FastAPI', level: 90 },
      { name: 'ChromaDB', level: 88 },
      { name: 'Pandas/NumPy', level: 92 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* CSS Matrix Rain Effect Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-around">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="w-px bg-gradient-to-b from-transparent via-primary to-transparent h-full animate-matrix"
            style={{ animationDelay: `${Math.random() * 2}s`, animationDuration: `${2 + Math.random() * 3}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16 lg:mb-20 flex items-center gap-4 sm:gap-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight">03. Neural_Weights</h2>
          <div className="h-[1px] flex-1 bg-border relative hidden sm:block">
             <div className="absolute inset-y-0 left-0 w-32 neural-line" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-5 sm:p-8 border border-border bg-card/40 backdrop-blur-sm rounded-xl group hover:border-primary/40 transition-colors"
            >
              {/* Inner ambient glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <h3 className="text-lg sm:text-2xl font-mono text-foreground mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4 relative z-10">
                <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-lg group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_hsla(150,100%,50%,0.2)] shrink-0">
                  {category.icon}
                </div>
                <span>{category.title}</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6 relative z-10">
                {category.skills.map((skill, j) => (
                  <div key={skill.name} className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm font-mono">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary/70">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border/50">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (j * 0.1), ease: "easeOut" }}
                        className="h-full bg-primary relative"
                      >
                        {/* Glow on the leading edge of the progress bar */}
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-sm" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
