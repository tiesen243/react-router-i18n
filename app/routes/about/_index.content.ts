import { type Dictionary, t } from 'intlayer'

const aboutPage1Content = {
  key: 'about-page',
  content: {
    aboutUs: t({
      en: 'About Us',
      vi: 'Về chúng tôi',
    }),

    thisIsTheAboutPage: t({
      en: 'This is the about page.',
      vi: 'Đây là trang giới thiệu.',
    }),
  },
} satisfies Dictionary

export default aboutPage1Content
