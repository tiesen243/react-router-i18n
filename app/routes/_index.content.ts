import type { Dictionary } from 'intlayer'

import { t } from 'intlayer'

const indexPage1Content = {
  key: 'index-page',
  content: {
    welcomeToOurWebsite: t({
      en: 'Welcome to Our Website',
      vi: 'Chào mừng đến với trang web của chúng tôi',
    }),

    thisIsTheHomePage: t({
      en: 'This is the home page. Use the navigation to explore our site.',
      vi: 'Đây là trang chủ. Sử dụng điều hướng để khám phá trang web của chúng tôi.',
    }),
  },
} satisfies Dictionary

export default indexPage1Content
