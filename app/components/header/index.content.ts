import { type Dictionary, t } from 'intlayer'

const headerContent = {
  key: 'header',
  content: {
    myApplication: t({
      en: 'My Application',
      vi: 'Ứng Dụng Của Tôi',
    }),
  },
} satisfies Dictionary

export default headerContent
