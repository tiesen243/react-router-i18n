import { useIntlayer } from 'react-intlayer'

export default function IndexPage() {
  const content = useIntlayer('index-page')

  return (
    <main className='container py-4'>
      <h1>{content.welcomeToOurWebsite}</h1>
      <p>{content.thisIsTheHomePage}</p>
    </main>
  )
}
