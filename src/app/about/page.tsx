import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/app/shared-metadata'
import Hero from './hero'
import Story from './story'
import Mission from './mission'
import Target from './target'
import Teams from './teams'

export const metadata: Metadata = {
  title: 'About Us | Weebo',
  description:
    'Get to know who we are and what we do. We are the best web design partner for startups, business and scale teams',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'About Us | Weebo',
    description:
      'Get to know who we are and what we do. We are the best web design partner for startups, business and scale teams',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'About Us | Weebo',
    description:
      'Get to know who we are and what we do. We are the best web design partner for startups, business and scale teams',
  },
}

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Story />
      <Mission />
      <Target />
      <Teams />
    </main>
  )
}
