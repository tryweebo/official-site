import Image from 'next/image'
import SectionLabel from '~/components/ui/section-label'

export default function Story() {
  return (
    <section className="relative bg-[#FFF8FD]">
      <div className="px-5 laptop:px-0 container mx-auto py-36 relative">
        <div className="flex flex-col laptop:flex-row gap-20 laptop:gap-0">
          <div className="flex flex-col laptop:w-1/2">
            <div className="flex">
              <SectionLabel>Our story</SectionLabel>
            </div>
            <h2 className="text-5xl laptop:text-7xl !leading-tight font-medium font-heading mt-10">
              See where it all began, long journey happens
            </h2>

            <div className="flex flex-col gap-10 mt-14">
              <p className="text-lg font-medium leading-relaxed">
                Before Weebo was born in April 2024, we were just a friendly
                bunch of freelancers. Each of us with a startup story, a passion
                for bootstrapping businesses, and a love for web design. Our
                passion for launching new businesses led us to seek how we can
                help brands stand out on the internet. With a mission to help
                brands create unique and superior user experiences, we created
                Weebo, a business focused on web design.
              </p>
              <p className="text-lg font-medium leading-relaxed">
                Today, we spread the wings and focus on helping business and
                enterprise to handle, their website to scale and grow. As web
                design enterprise partners, we have dozens of established
                relationships with our partners.
              </p>
            </div>
          </div>
          <div className="flex laptop:w-1/2 w-full items-center justify-end">
            <picture className="relative h-[300px] laptop:h-[629px] w-full laptop:w-9/12 rounded-3xl overflow-hidden group">
              <Image
                src={'/images/about-story.png'}
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
