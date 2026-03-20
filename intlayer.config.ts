import type { IntlayerConfig } from 'intlayer'

import { Locales } from 'intlayer'

const config = {
  internationalization: {
    defaultLocale: Locales.ENGLISH,
    locales: [Locales.ENGLISH, Locales.VIETNAMESE],
  },

  compiler: {
    enabled: true,
    output: ({ fileName, extension }) => `./${fileName}${extension}`,
    saveComponents: false,
    dictionaryKeyPrefix: '',
  },

  build: {
    traversePattern: [
      '**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/app/routes/api/**',
    ],
  },
} satisfies IntlayerConfig

export default config
