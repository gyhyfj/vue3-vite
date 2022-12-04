/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import { ViteEjsPlugin } from 'vite-plugin-ejs'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vitest'],
      dts: false,
    }),
    eslintPlugin({
      exclude: ['./node_modules/**'],
      cache: false,
    }),
    stylelintPlugin({
      fix: true,
      quiet: true,
    }),
    ViteEjsPlugin(config => ({
      CONFIG: config,
    })),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  envDir: path.resolve(__dirname, './env'),
  envPrefix: ['VITE_'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: { includeSource: ['src/**/*.{js,ts}'] },
})
