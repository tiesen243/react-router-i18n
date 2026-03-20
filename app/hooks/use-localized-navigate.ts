import type { NavigateOptions, To } from 'react-router'

import { useLocale } from 'react-intlayer'
import { useNavigate } from 'react-router'

import { locacalizeTo } from '@/lib/locacalize-to'

export const useLocalizedNavigate = () => {
  const navigate = useNavigate()
  const { locale } = useLocale()

  const localizedNavigate = (to: To, options?: NavigateOptions) => {
    const localedTo = locacalizeTo(to, locale)

    navigate(localedTo, options)
  }

  return localizedNavigate
}
