'use client'

import React, { useState } from 'react'
import SectionLabel from '~/components/ui/section-label'
import { StrokeLineBackground } from '~/components/common/bg'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({
  question,
  answer,
}: FAQItemProps): Readonly<React.ReactElement> {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  const toggle = () => {
    setOpen((state) => !state)
  }

  return (
    <div className="flex flex-col px-6 py-5 rounded-2xl gap-4 bg-background border-2 border-border">
      <div className="flex w-full gap-4 cursor-pointer" onClick={toggle}>
        <h4 className="text-[17px] font-medium flex-1 leading-tight">
          {question}
        </h4>
        <div className="flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0369 8.46289V15.6113"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6146 12.0371H8.45874"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.30005 12.0367C2.30005 4.73454 4.73479 2.2998 12.0369 2.2998C19.339 2.2998 21.7737 4.73454 21.7737 12.0367C21.7737 19.3388 19.339 21.7735 12.0369 21.7735C4.73479 21.7735 2.30005 19.3388 2.30005 12.0367Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="flex px-2">
          <p className="text-base font-medium leading-relaxed opacity-70">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

function FAQList(): Readonly<React.ReactElement> {
  return (
    <div className="flex flex-col gap-3 w-full">
      <FAQItem
        question="How long does a website take to build?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
      <FAQItem
        question="How long does a website cost?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
      <FAQItem
        question="I already have the designs, can you develop them?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
      <FAQItem
        question="What if I don’t like the designs?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
      <FAQItem
        question="Do you know how to use GSAP and other extensions on top of Webflow?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
      <FAQItem
        question="What if I want to work with someone else after the website is built?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
      <FAQItem
        question="Can we have a quick call to see if we're a good fit?"
        answer="A typical project will take 4-8 weeks, and where it falls in that range depends on: - Size of the website (i.e. how many pages) - Complexity of design - Speed of feedback & communication"
      />
    </div>
  )
}

export default function FAQs(): Readonly<React.ReactElement> {
  return (
    <section className="relative flex justify-center bg-[#F8FCFF]">
      <div className="absolute top-24">
        <StrokeLineBackground />
      </div>
      <div className="container mx-auto py-36 relative">
        <div className="flex flex-col items-center mx-auto">
          <div className="flex justify-center">
            <SectionLabel>FAQs</SectionLabel>
          </div>
          <h2 className="text-7xl !leading-tight font-medium font-heading desktop:w-9/12 mt-10 text-center">
            Commonly asked questions by people around
          </h2>

          <div className="flex gap-28 mt-14 justify-center">
            <p className="desktop:w-1/2 text-lg font-medium leading-relaxed text-center">
              Business around the world may have the same questions as you.
              Check the commonly asked question by the people, startups, agency,
              and company owner around the world.
            </p>
          </div>

          <div className="flex justify-center w-7/12 mx-auto mt-40">
            <FAQList />
          </div>
        </div>
      </div>
    </section>
  )
}
