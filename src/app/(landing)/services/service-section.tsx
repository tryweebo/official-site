import * as React from 'react'
import * as motion from 'motion/react-client'
import { StackDialog } from './stack-dialog'

const services = [
  'Design',
  'Development',
  'Branding',
  'Copywriting',
  'Integrations',
  'Audits',
  'Migrations',
  'Backups',
  'Support',
  'Optimization',
  'Webflow Development',
  'Framer Development',
  'Shopify Development',
  'Custom Development',
]

function ServiceItem({ service }: { service: string }): React.ReactElement {
  return (
    <div className="flex items-center gap-2 bg-secondary/60 rounded-full px-5 py-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 group text-sm font-medium">
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
      <span className="text-sm text-foreground/40 font-heading font-medium">
        Services
      </span>

      <h2 className="text-4xl font-semibold font-heading text-center leading-tight group laptop:w-9/12 mt-8">
        All of the website work
        <br />
        done for you
      </h2>

      <div className="flex justify-center mt-5">
        <StackDialog />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-16 w-full tablet:w-10/12">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </motion.section>
  )
}
