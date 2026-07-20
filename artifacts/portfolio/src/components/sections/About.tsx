import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold">01. Background</h2>
          <div className="h-[1px] flex-1 bg-border relative">
             <div className="absolute inset-y-0 left-0 w-24 neural-line" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground space-y-6"
          >
            <p>
              I am a final-year B.Tech student in Artificial Intelligence & Data Science at VVIT, 
              passionate about architecting systems that bridge theoretical machine learning and 
              practical, production-ready infrastructure.
            </p>
            <p>
              My expertise lies in building <span className="text-primary font-mono">LLM pipelines</span>, 
              NLP systems, and cloud-native ML infrastructure. As a Google Cloud Associate Cloud Engineer, 
              I ensure that the AI solutions I build are scalable, reliable, and efficiently deployed.
            </p>
            <p>
              Recently, I developed <strong>AICruit</strong> — an end-to-end AI resume evaluation platform 
              featuring semantic matching, bias auditing, and explainable scoring to fix broken ATS screening.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border border-border p-8 rounded-lg bg-card/50 backdrop-blur"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-[1px] -translate-y-[1px]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary translate-x-[1px] translate-y-[1px]" />
            
            <h3 className="font-mono text-xl text-foreground mb-6">{'// System_Specs'}</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary sm:w-24">Location:</span>
                <span className="text-muted-foreground mt-1 sm:mt-0">Andhra Pradesh, India</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary sm:w-24">Education:</span>
                <span className="text-muted-foreground mt-1 sm:mt-0">B.Tech AI & DS (8.55 CGPA)</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary sm:w-24">Focus:</span>
                <span className="text-muted-foreground mt-1 sm:mt-0">NLP, RAG, MLOps, LLMs</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-4">
                <span className="text-primary sm:w-24">Email:</span>
                <a href="mailto:yashwanth.99122@gmail.com" className="text-muted-foreground hover:text-primary transition-colors mt-1 sm:mt-0">
                  yashwanth.99122@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
