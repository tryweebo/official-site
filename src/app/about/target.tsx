import Image from 'next/image'
import SectionLabel from '~/components/ui/section-label'

export default function Target() {
  return (
    <section className="relative">
      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col gap-20 laptop:flex-row laptop:gap-0">
          <div className="flex flex-col laptop:w-1/2">
            <div className="flex">
              <SectionLabel>Who we help</SectionLabel>
            </div>
            <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading mt-10">
              We help businesses create unique user experiences
            </h2>

            <div className="flex flex-col gap-10 mt-14">
              <p className="text-lg font-medium leading-relaxed">
                We help you grow by offering unlimited web design & development
                for flexible fee - from building the site from scratch to fixing
                and tweaking even the tiniest detail on your page.
              </p>
              <p className="text-lg font-medium leading-relaxed">
                Creating unique customer experiences will allow you to stand out
                from the crowd and generate quality leads. Having “Weebo” at
                your side will help you get your business off the ground or grow
                faster than ever before.
              </p>
            </div>
          </div>
          <div className="flex w-full laptop:w-1/2 items-center justify-end">
            <picture className="relative h-[300px] laptop:h-[629px] w-full laptop:w-9/12 rounded-3xl overflow-hidden group">
              <Image
                src={'/images/about-target.png'}
                layout="fill"
                alt="Our Story"
                objectFit="cover"
                className="transition-all duration-700 group-hover:scale-105"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
