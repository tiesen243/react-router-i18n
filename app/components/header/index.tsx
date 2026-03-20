import { useIntlayer } from 'react-intlayer'

import { LocaleSwitcher } from '@/components/locale-switcher'
import { LocalizedLink } from '@/components/localized-link'

export const Header: React.FC = () => {
  const content = useIntlayer('header')

  return (
    <header className='sticky inset-0 z-50 flex h-14 items-center border-b bg-popover/70 backdrop-blur-xl backdrop-saturate-150'>
      <div className='container mx-auto flex items-center justify-between'>
        <h1>{content.myApplication}</h1>

        <nav className='flex items-center gap-4 [&_a]:hover:underline'>
          <LocalizedLink to='/'>{content.nav.home}</LocalizedLink>
          <LocalizedLink to='/about'>{content.nav.about}</LocalizedLink>
          <LocalizedLink to='/contact'>{content.nav.contact}</LocalizedLink>
        </nav>

        <LocaleSwitcher />
      </div>
    </header>
  )
}
