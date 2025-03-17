import * as React from 'react'
import * as motion from 'motion/react-client'

const services = [
  'Web Design',
  'Web Development',
  'Branding',
  'Copywriting',
  'Integrations',
  'Audits',
  'Migrations',
  'Backups',
  'Optimization',
  'Webflow Development',
  'Framer Development',
  'Custom Development',
]

function ServiceItem({ service }: { service: string }): React.ReactElement {
  return (
    <div className="flex items-center gap-2 border border-border border-dashed rounded-full pl-2 pr-4 py-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 group text-sm font-medium">
      <i className="fi fi-sr-bullet text-border group-hover:text-orange-500 transition-all duration-300" />
      {service}
    </div>
  )
}

export function ServiceSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '1.2',
      }}
      viewport={{ once: true, margin: '0% 0% -30% 0%' }}
      className="flex flex-col items-center py-20"
      id="services"
    >
      <span className="text-sm text-foreground/40 font-mono">Services.</span>

      <h2 className="text-3xl font-semibold text-center leading-tight group laptop:w-9/12 mt-8">
        We done all of the website work
        <br />
        <span className="text-foreground/30">for your needs</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-16 w-full">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </motion.section>
  )
}
