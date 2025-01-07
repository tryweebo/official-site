import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ArticleContent, Button } from '@shared/components'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Audit Offer',
  description:
    'New offer: free audit and analyze the old website and get better result',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Free Audit Offer',
    description:
      'New offer: free audit and analyze the old website and get better result',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Free Audit Offer',
    description:
      'New offer: free audit and analyze the old website and get better result',
  },
}

export default function FreeAuditOfferPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ArticleContent>
        <h1>Audit your website for free</h1>
        <p>
          Optimise your online presence with a performance analysis, user
          experience review and design feedback.
        </p>

        <p>
          We offering your a free audit for your website. The main goals is to
          help your know your website or check it again to provide better fix or
          upgrade in every aspect including performance, SEO, and even trends.
        </p>

        <p>
          From the audit you will get the result as report also a actions to
          take. if something that you need, we always here to help.
        </p>

        <h2>What’s Included in the Audit</h2>
        <p>
          In every audit we always care about your business and try to make a
          good actions to ensure and powering your curent website to enable and
          maximize the power for supporting your business.
        </p>
        <p>The audit including:</p>
        <ul>
          <li>
            Performance: Analyze your website’s speed and overall user
            experience.
          </li>
          <li>
            SEO Health: Uncover technical SEO issues and rank higher in search
            results.
          </li>
          <li>
            Design and Usability: Evaluate your design’s effectiveness and
            user-friendliness.
          </li>
          <li>
            Mobile Optimization: Check how well your website performs on mobile
            devices.
          </li>
          <li>Security: Ensure your website is secure for users.</li>
        </ul>

        <h2>Benefits</h2>
        <p></p>
        <ul>
          <li>Improve website performance.</li>
          <li>Attract more visitors.</li>
          <li>Boost engagement and sales.</li>
          <li>Fix critical issues before they escalate.</li>
        </ul>

        <h2>How it works</h2>
        <ol>
          <li>
            Book a meeting and signup for the audit. Don't worry everthing is
            free, you just need to alocate the time for the meet and knowing
            what you want.
          </li>
          <li>
            Next is the time for us to start the audit. With our teams, we will
            do everything to make sure you get the best result.
          </li>
          <li>
            After the audit, we will send you the report and the actions to
            take.
          </li>
          <li>
            If you need help, we always ready. We can help you redesign, fix,
            update and upgrade your site.
          </li>
        </ol>

        <h2>Get started</h2>
        <p>
          If interested, you can start your step forward by booking the calendar
          and start meeting with us.
        </p>

        <div className="nor-prose inline-flex">
          <Button asChild>
            <Link
              href={'https://cal.com/nyomansunima/tryweebo-start-website'}
              target="_blank"
            >
              Book a meeting
            </Link>
          </Button>
        </div>
      </ArticleContent>
    </div>
  )
}
