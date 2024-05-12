import { Metadata } from 'next'
import Link from 'next/link'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/app/shared-metadata'
import { StrokeLineBackground } from '~/components/common/bg'

export const metadata: Metadata = {
  title: 'Contact Us | Weebo',
  description:
    'Get in touch with us @Weebo teams. Connect and ask something in your head and start collaborate',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Contact Us | Weebo',
    description:
      'Get in touch with us @Weebo teams. Connect and ask something in your head and start collaborate',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Contact Us | Weebo',
    description:
      'Get in touch with us @Weebo teams. Connect and ask something in your head and start collaborate',
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative">
        <div className="absolute">
          <StrokeLineBackground />
        </div>
        <div className="px-5 laptop:px-0 container mx-auto py-28 laptop:py-48 relative">
          <div className="flex flex-col">
            <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading desktop:w-9/12">
              Have something to say?
              <br />
              Get in touch now
            </h2>
            <p className="text-lg font-medium leading-relaxed desktop:w-5/12 mt-14">
              We build sites that make a difference and help you stand out from
              your competition. Learn about our approach, team, and capabilities
              that make us one of the leading partner.
            </p>

            <div className="grid grid-cols-1 laptop:grid-cols-4 desktop:grid-cols-5 gap-5 mt-24">
              <Link
                href={
                  'https://cal.com/nyomansunima/discovery-call-with-nyoman-sunima-weebo'
                }
                target="_blank"
                className="flex justify-center items-center h-36 bg-secondary border-border border-2 rounded-3xl transition-all duration-500 hover:scale-95 text-lg font-medium"
              >
                Book A call
              </Link>
              <Link
                href={'/#faq'}
                className="flex justify-center items-center h-36 bg-secondary border-border border-2 rounded-3xl transition-all duration-500 hover:scale-95 text-lg font-medium"
              >
                FAQs
              </Link>
              <Link
                href={'https://twitter.com/tryweebo'}
                target="_blank"
                className="flex justify-center items-center h-36 bg-secondary border-border border-2 rounded-3xl transition-all duration-500 hover:scale-95 text-lg font-medium"
              >
                Send Messages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
