import { motion } from 'framer-motion';
import { Github, Database, BrainCircuit, Activity, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AICruit',
    subtitle: 'AI Resume Evaluation Platform',
    description: 'Dual-mode resume evaluation (rule-based + LLM-augmented) to fix broken ATS screening. Semantic JD–resume matching via all-MiniLM-L6-v2 and Gemini 2.5 Flash Lite.',
    features: [
      'Explainable scoring across ATS readability, JD match',
      'FAIRE-based bias detection + MongoDB audit logging',
      'LRU caching with SHA-256 keys (~60% latency reduction)'
    ],
    tech: ['Python', 'FastAPI', 'Gemini', 'MongoDB', 'sentence-transformers'],
    github: 'https://github.com/yash1th001/AIRCUIT_GEMINI',
    live: 'https://aicruit-2mzv.onrender.com/',
    icon: <BrainCircuit className="w-10 h-10 text-primary" />
  },
  {
    title: 'SymptomChecker',
    subtitle: 'Conversational Health Bot',
    description: 'Conversational AI health assistant with LangChain + ChromaDB vector storage. Modular chain architecture: retrieval → reasoning → response.',
    features: [
      'Contextual multi-turn dialogue',
      'Persistent symptom tracking via RAG',
      'Vector similarity search for medical literature'
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'LLMs'],
    github: 'https://github.com/yash1th001/Symptom-Checker---Conversational-Health-Assistant',
    icon: <Activity className="w-10 h-10 text-primary" />
  },
  {
    title: 'Sentiment Analyzer',
    subtitle: 'Social Media Sentiment Analysis',
    description: 'End-to-end sentiment pipeline over 5K+ posts with TF-IDF features. Trend visualization with Seaborn and Plotly.',
    features: [
      '72% accuracy on custom validation set',
      'Data preprocessing & tokenization pipeline',
      'Interactive dashboard visualizations'
    ],
    tech: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'Seaborn'],
    github: 'https://github.com/yash1th001/Sentimental_analysis_social_media',
    icon: <Database className="w-10 h-10 text-primary" />
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative bg-card/20 border-y border-border">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16 lg:mb-20 flex items-center gap-4 sm:gap-6 flex-row-reverse"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight">02. Models_Deployed</h2>
          <div className="h-[1px] flex-1 bg-border relative hidden sm:block">
             <div className="absolute inset-y-0 right-0 w-32 neural-line rotate-180" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-xl flex flex-col min-h-[460px] h-full overflow-hidden hover:shadow-[0_10px_40px_hsla(150,100%,50%,0.1)] transition-all duration-500 hover:-translate-y-2 justify-between"
            >
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-300 to-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Giant Background Number */}
              <div className="absolute -right-4 -bottom-4 text-[120px] sm:text-[180px] font-bold font-mono text-foreground/5 leading-none pointer-events-none group-hover:text-primary/[0.03] transition-colors duration-500">
                0{i + 1}
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1.5 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-primary/80 mb-4 sm:mb-6">
                  {project.subtitle}
                </p>
                
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground">
                  {project.features.map((feature, j) => (
                    <li key={j} className="flex gap-2.5 sm:gap-3 items-start">
                      <span className="text-primary mt-1 text-[10px] glow-text shrink-0">■</span>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-4 sm:pt-6 border-t border-border/50">
                  {project.tech.map((t) => (
                    <span key={t} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-1 sm:py-1.5 bg-background border border-border text-foreground rounded-md group-hover:border-primary/30 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Always visible on touch, slide-up overlay on desktop */}
              <div className="relative md:absolute left-0 right-0 bottom-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 flex">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3.5 sm:py-4 bg-primary text-primary-foreground font-mono text-sm sm:text-base font-bold hover:bg-emerald-400 transition-colors ${project.live ? 'w-1/2' : 'w-full'}`}
                >
                  <Github size={18} />
                  View_Source <ArrowRight size={18} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-1/2 py-3.5 sm:py-4 bg-background border-t border-primary/40 text-primary font-mono text-sm sm:text-base font-bold hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live_Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
