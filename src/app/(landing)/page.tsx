import * as React from 'react'
import Hero from './hero'
import Benefit from './benefit'
import Service from './service'

export default function HomePage(): Readonly<React.ReactElement> {
  return (
    <main className="">
      <Hero />
      <Benefit />
      <Service />
    </main>
  )
}
