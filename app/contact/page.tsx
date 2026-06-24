import type { Metadata } from 'next'
import RequestContent from '../components/RequestContent'

export const metadata: Metadata = {
  title: 'Kaish | Contact',
  description: 'Get in touch with Kaish.',
}

export default function Contact() {
  return <RequestContent />
}
