import { type Dictionary, t } from 'intlayer'

const appContent = {
  key: 'app',
  content: {
    languageNotSupported: t({
      en: 'Language not supported',
      vi: 'Ngôn ngữ không được hỗ trợ',
    }),

    anUnexpectedErrorOccurred: t({
      en: 'An unexpected error occurred.',
      vi: 'Đã xảy ra lỗi không mong muốn.',
    }),

    theRequestedPageCouldNot: t({
      en: 'The requested page could not be found.',
      vi: 'Không thể tìm thấy trang yêu cầu.',
    }),
  },
} satisfies Dictionary

export default appContent
