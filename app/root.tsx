import '@/app.css'

import { getLocaleFromPath, getIntlayer } from 'intlayer'
import { IntlayerProvider, useIntlayer } from 'react-intlayer'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  data,
  isRouteErrorResponse,
  useLoaderData,
} from 'react-router'

import { Header } from '@/components/header'
import { useI18nHTMLAttributes } from '@/hooks/use-i18n-html-attributes'

import type { Route } from './+types/root'

export function loader({ request }: Route.LoaderArgs) {
  const content = getIntlayer('app')

  const locale = getLocaleFromPath(request.url)
  if (!locale) throw data(content.languageNotSupported, { status: 404 })
  return { locale }
}

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { locale } = useLoaderData<typeof loader>()

  return (
    <html lang={locale} className='dark' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  useI18nHTMLAttributes()

  return (
    <IntlayerProvider>
      <Header />

      <Outlet />
    </IntlayerProvider>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const content = useIntlayer('app')

  let message = 'Oops!'
  let details: string = content.anUnexpectedErrorOccurred.value
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? content.theRequestedPageCouldNot.value
        : (error.statusText ?? details)
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='container mx-auto p-4 pt-16'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full overflow-x-auto p-4'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
