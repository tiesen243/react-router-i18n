import { useIntlayer } from 'react-intlayer'

export default function AboutPage() {
  const content = useIntlayer('about-page')

  return (
    <main className='container py-4'>
      <h1>{content.aboutUs}</h1>
      <p>{content.thisIsTheAboutPage}</p>
    </main>
  )
}
