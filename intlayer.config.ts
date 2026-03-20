import { Locales, type IntlayerConfig } from 'intlayer'

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
} satisfies IntlayerConfig

export default config
