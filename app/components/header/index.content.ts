import type { Dictionary } from 'intlayer'

import { t } from 'intlayer'

const headerContent = {
  key: 'header',
  content: {
    myApplication: t({
      en: 'My Application',
      vi: 'Ứng Dụng Của Tôi',
    }),

    nav: {
      home: t({
        en: 'Home',
        vi: 'Trang Chủ',
      }),
      about: t({
        en: 'About',
        vi: 'Giới Thiệu',
      }),
      contact: t({
        en: 'Contact',
        vi: 'Liên Hệ',
      }),
    },

    trangChu: t({
      en: 'Trang Chủ',
    }),

    gioiThieu: t({
      en: 'Giới Thiệu',
    }),

    lienHe: t({
      en: 'Liên Hệ',
    }),
  },
} satisfies Dictionary

export default headerContent
