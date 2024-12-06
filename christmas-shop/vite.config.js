/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    minify: false,
    sourcemap: true,
    target: 'esnext',
    compact: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gifts: resolve(__dirname, 'gifts/index.html'),
      },
    },
  },
});
