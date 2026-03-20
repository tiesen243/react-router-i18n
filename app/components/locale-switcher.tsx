import { getLocaleName, getLocalizedUrl, getPathWithoutLocale } from 'intlayer'
import { useLocale } from 'react-intlayer'
import { Link, useLocation } from 'react-router'

import { buttonVariants } from '@/components/ui/button'

export const LocaleSwitcher: React.FC = () => {
  const { pathname } = useLocation()
  const { availableLocales, locale, setLocale } = useLocale()
  const pathWithoutLocale = getPathWithoutLocale(pathname)

  return (
    <ol className='flex gap-2 p-4'>
      {availableLocales.map((localeItem) => (
        <li key={localeItem}>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            aria-current={localeItem === locale ? 'page' : undefined}
            aria-label={`$${getLocaleName(localeItem)}`}
            to={getLocalizedUrl(pathWithoutLocale, localeItem)}
            onClick={() => setLocale(localeItem)}
          >
            {localeItem}
          </Link>
        </li>
      ))}
    </ol>
  )
}
