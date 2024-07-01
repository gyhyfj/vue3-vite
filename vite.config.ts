import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ce-'),
        },
      },
    }),
    vueJsx(),
    VueDevTools(),
    // https://icones.js.org/
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('src/assets/svg'),
      },
    }),
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router', 'pinia'],
    }),
    Components({
      dts: './src/types/auto-components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          customCollections: ['custom'],
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
