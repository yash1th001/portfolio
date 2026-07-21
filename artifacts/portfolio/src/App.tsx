import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Global Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-scanlines opacity-[0.15]" />
        <div className="absolute inset-0 bg-noise opacity-[0.06]" />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
    </QueryClientProvider>
  );
}

export default App;
