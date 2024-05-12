import Image from 'next/image'
import SectionLabel from '~/components/ui/section-label'

export default function Mission() {
  return (
    <section className="relative bg-[#FAFBFF]">
      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col laptop:flex-row gap-20 laptop:gap-0">
          <div className="flex w-full laptop:w-1/2 items-center">
            <picture className="relative h-[300px] laptop:h-[629px] w-full laptop:w-9/12 rounded-3xl overflow-hidden group">
              <Image
                src={'/images/about-mission.png'}
                layout="fill"
                alt="Our Story"
                objectFit="cover"
                className="transition-all duration-700 group-hover:scale-105"
              />
            </picture>
          </div>

          <div className="flex flex-col laptop:w-1/2">
            <div className="flex">
              <SectionLabel>Mission</SectionLabel>
            </div>
            <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading mt-10">
              We believe that better experience drive more
            </h2>

            <div className="flex flex-col gap-10 mt-14">
              <p className="text-lg font-medium leading-relaxed">
                Never in history was it so easy to launch a digital business.
                But neither has the competition to build and scale such a
                business ever been so fierce. Getting ahead of the competition
                seems almost impossible today, so having a reliable partner can
                take a huge burden off your shoulder.
              </p>
              <p className="text-lg font-medium leading-relaxed">
                With a mission to stand by your side on every step of creating
                and tweaking your website, we have created a set of core values
                that we turn into action with every single partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
