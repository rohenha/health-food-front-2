import { defineConfig } from 'vite'
import { dirname } from 'path'

// Plugins
import brotli from 'rollup-plugin-brotli'
import { visualizer } from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
// import generouted from '@generouted/react-router/plugin'

// Global
// eslint-disable-next-line no-undef
const srcFolder = dirname(__filename) + '/src'

export default defineConfig({
  resolve: {
    alias: {
      '@components/': `${srcFolder}/components/`,
      '@': `${srcFolder}`,
      '@contexts/': `${srcFolder}/contexts/`,
      '@hooks/': `${srcFolder}/hooks/`,
      '@libs/': `${srcFolder}/libs/`,
      '@pages/': `${srcFolder}/pages/`,
      '@stores/': `${srcFolder}/stores/`,
      '@styles/': `${srcFolder}/styles/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // path to your scss variables
        additionalData: `@import "@styles/config.scss";`,
      },
    },
  },
  json: {
    stringify: true,
  },
  build: {
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // vendor: ['react', 'react-dom'],
          // ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [
    react(),
    // generouted(),
    brotli(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      open: false,
      template: 'treemap',
    }),
  ],
  test: {
    include: ['sources/tests/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
