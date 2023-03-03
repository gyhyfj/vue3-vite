import { createI18n } from 'vue-i18n'

const lanArr = ['zh', 'en'] as const

type Lan = (typeof lanArr)[number]
type LanItem = { [key in Lan]: string }
type LanFile = Record<string, LanItem>
type LanModule = Record<string, LanFile>

const modules: LanModule = import.meta.glob('@/i18n/dict/**/*.ts', {
  eager: true,
  import: 'default',
})

const messages = <{ [k in Lan]: Record<string, string> }>{}

for (const path in modules) {
  const prefix: string = [...path.split('/').slice(4, -1), ''].join('.')
  for (const key in modules[path]) {
    for (const lan in modules[path][key]) {
      ;(messages[lan] ??= {})[prefix + key] = modules[path][key][lan]
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages,
})

export { i18n, type LanFile }
