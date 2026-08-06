import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // Use '/' for custom domain (yash1th.me).
  // Use './' only if deploying to a sub-path like github.io/repo/
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Stable asset filenames for caching
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: Number(process.env.PORT || 5000),
    strictPort: false,
    host: '0.0.0.0',
  },
  preview: {
    port: Number(process.env.PORT || 5000),
    host: '0.0.0.0',
  },
});
