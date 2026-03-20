import type { LinkProps } from 'react-router'

import { useLocale } from 'react-intlayer'
import { Link } from 'react-router'

import { locacalizeTo } from '@/lib/locacalize-to'

export const LocalizedLink: React.FC<LinkProps> = (props) => {
  const { locale } = useLocale()

  // oxlint-disable-next-line jsx_a11y/anchor-has-content
  return <Link {...props} to={locacalizeTo(props.to, locale)} />
}
