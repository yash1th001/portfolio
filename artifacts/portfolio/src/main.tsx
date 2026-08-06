import { Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("Uncaught runtime error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0b10] text-[#00FF87] p-8 font-mono flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-4">[SYSTEM NOTICE] Application Error Detected</h1>
          <p className="text-muted-foreground max-w-lg mb-6">{this.state.error?.message || 'An unexpected error occurred during rendering.'}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 border border-[#00FF87] rounded hover:bg-[#00FF87] hover:text-black transition-colors"
          >
            Reload System
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
