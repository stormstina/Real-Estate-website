// vite.config.js
import { resolve } from 'path'
import { defineConfig } from "vite";
export default defineConfig({
  // config options
  base: "/Real-Estate-website/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        properties: resolve(__dirname, 'properties/index.html'),
        sell: resolve(__dirname, 'sell/index.html'),
        testimonials: resolve(__dirname, 'testimonials/index.html'),
      },
    },
  },
});
