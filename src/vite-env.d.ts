/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface EnvFile {
  readonly VITE_LAN: 'zh' | 'en'
  readonly VITE_API_MODE: 'development' | 'production'
}

interface ImportMetaEnv extends EnvFile {
  [key: string]: string
}

type Ref<T> = import('vue').Ref<T>

type LanFile = import('@/i18n').LanFile
