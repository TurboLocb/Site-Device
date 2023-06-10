import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
        catalog: './src/catalog.html',
      },
        
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css"))
            return 'style.css';
          return assetInfo.name;
        },
      }
    },
  },
  server: {
    open: '/index.html',
  },
})
