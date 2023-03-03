/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssNesting from 'tailwindcss/nesting'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import svgLoader from 'vite-svg-loader'

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
    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  envDir: path.resolve(__dirname, './env'),
  envPrefix: ['VITE_'],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer, cssNesting as any],
    },
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    host: true,
  },
  define: {
    'import.meta.vitest': 'undefined',
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  test: { includeSource: ['src/**/*.{js,ts}'] },
})
