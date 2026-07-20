import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI/ML & Deep Learning',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'NLP', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-learn']
  },
  {
    title: 'Generative AI',
    skills: ['LangChain', 'ChromaDB', 'Prompt Engineering', 'Gemini API', 'sentence-transformers', 'RAG Systems']
  },
  {
    title: 'Languages & Core CS',
    skills: ['Python', 'SQL', 'Data Structures', 'Algorithms', 'OOP', 'DBMS']
  },
  {
    title: 'Data & Tools',
    skills: ['NumPy', 'Pandas', 'NLTK', 'Git', 'Google Cloud Platform', 'FastAPI', 'Jupyter', 'VS Code']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">03. Neural_Weights</h2>
          <div className="h-[1px] flex-1 bg-border relative">
             <div className="absolute inset-y-0 left-0 w-24 neural-line" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 border border-border bg-card/30 rounded-lg hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-mono text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary text-sm font-bold">[{i}]</span> 
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 border border-border bg-background rounded text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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
