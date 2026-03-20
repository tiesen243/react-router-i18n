import type { LocalesValues } from 'intlayer'
import type { To } from 'react-router'

import { getLocalizedUrl } from 'intlayer'

const isExternalLink = (to: string) => /^(https?:)?\/\//.test(to)

export const locacalizeTo = (to: To, locale: LocalesValues): To => {
  if (typeof to === 'string') {
    if (isExternalLink(to)) return to
    return getLocalizedUrl(to, locale)
  }

  if (isExternalLink(to.pathname ?? '')) return to

  return {
    ...to,
    pathname: getLocalizedUrl(to.pathname ?? '', locale),
  }
}
