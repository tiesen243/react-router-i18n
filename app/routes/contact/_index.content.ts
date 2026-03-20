import type { Dictionary } from 'intlayer'

import { t } from 'intlayer'

const contactPage1Content = {
  key: 'contact-page',
  content: {
    contactUs: t({
      en: 'Contact Us',
      vi: 'Liên hệ với chúng tôi',
    }),

    thisIsTheContactPage: t({
      en: 'This is the contact page.',
      vi: 'Đây là trang liên hệ.',
    }),

    lienHeVoiChungToi: t({
      en: 'Liên hệ với chúng tôi',
    }),
  },
} satisfies Dictionary

export default contactPage1Content
