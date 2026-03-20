import { useIntlayer } from 'react-intlayer'

export default function ContactPage() {
  const content = useIntlayer('contact-page')

  return (
    <main className='container py-4'>
      <h1>{content.contactUs}</h1>
      <p>{content.thisIsTheContactPage}</p>
    </main>
  )
}
