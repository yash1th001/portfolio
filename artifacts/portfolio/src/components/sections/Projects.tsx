import { motion } from 'framer-motion';
import { Github, Database, BrainCircuit, Activity } from 'lucide-react';

const projects = [
  {
    title: 'AICruit',
    subtitle: 'AI Resume Evaluation Platform',
    description: 'Dual-mode resume evaluation (rule-based + LLM-augmented) to fix broken ATS screening. Semantic JD–resume matching via all-MiniLM-L6-v2 and Gemini 2.5 Flash Lite.',
    features: [
      'Explainable scoring across ATS readability, JD match, and structure',
      'FAIRE-based bias detection + MongoDB audit logging',
      'LRU caching with SHA-256 keys, PII stripping middleware (~60% latency reduction)'
    ],
    tech: ['Python', 'FastAPI', 'Gemini', 'MongoDB', 'sentence-transformers'],
    github: 'https://github.com/yash1th001',
    icon: <BrainCircuit className="w-8 h-8 text-primary" />
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
    github: 'https://github.com/yash1th001',
    icon: <Activity className="w-8 h-8 text-primary" />
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
    github: 'https://github.com/yash1th001',
    icon: <Database className="w-8 h-8 text-primary" />
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4 flex-row-reverse"
        >
          <h2 className="text-3xl md:text-5xl font-bold">02. Models_Deployed</h2>
          <div className="h-[1px] flex-1 bg-border relative">
             <div className="absolute inset-y-0 right-0 w-24 neural-line rotate-180" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {project.icon}
              </div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-primary/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6 flex-grow relative z-10">
                {project.description}
              </p>
              
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground relative z-10">
                {project.features.map((feature, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className="text-primary mt-1 text-[10px]">■</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border relative z-10">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 bg-background border border-border text-foreground rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
