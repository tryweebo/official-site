import * as React from 'react'
import * as motion from 'motion/react-client'

export function PlansSection(): React.ReactElement {
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
      id="plans"
    >
      <span className="text-sm text-foreground/40 font-mono">Plans.</span>

      <h2 className="text-3xl font-semibold text-center leading-tight group laptop:w-9/12 mt-8">
        Clear & simple pricing
        <br />
        <span className="text-foreground/30">no hidden fees</span>
      </h2>

      <div className="flex items-center gap-5 mt-16 w-full">
        <div className="grid grid-cols-4 gap-x-3 gap-y-6">
          <div className="flex flex-col col-span-4 border-2 border-border rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:rotate-6 cursor-pointer bg-background rotate-2">
            <div className="flex items-center">
              <h3 className="flex items-center gap-1 text-sm font-medium text-green-500 bg-green-100 rounded-full px-3 py-1 pl-2">
                <i className="fi fi-sr-bullet" />
                Project based
              </h3>
            </div>

            <div className="text-xl font-medium mt-4">Custom</div>

            <p className="text-foreground/60 leading-relaxed mt-5 text-balance">
              One time purchase for specific website and custom project
              requirements. Best for one time projects.
            </p>
          </div>
          <div className="flex flex-col col-span-4 tablet:col-span-2 border-2 border-border rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:-rotate-6 cursor-pointer bg-background -rotate-3">
            <div className="flex items-center">
              <h3 className="flex items-center gap-1 text-sm font-medium text-purple-500 bg-purple-100 rounded-full px-3 py-1 pl-2">
                <i className="fi fi-sr-bullet" />
                Maintenance
              </h3>
            </div>

            <div className="text-xl font-medium mt-4">
              $475 / <span className="text-foreground/50">month</span>
            </div>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              Required to maintain your website and ensure it is always
              up-to-date.
            </p>
          </div>
          <div className="flex flex-col col-span-4 tablet:col-span-2 border-2 border-border rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-95 hover:rotate-6 cursor-pointer bg-background rotate-12">
            <div className="flex items-center">
              <h3 className="flex items-center gap-1 text-sm font-medium text-blue-500 bg-blue-100 rounded-full px-3 py-1 pl-2">
                <i className="fi fi-sr-bullet" />
                Monthly flat rate
              </h3>
            </div>

            <div className="text-xl font-medium mt-4">
              $5,250 / <span className="text-foreground/50">month</span>
            </div>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              For unlimited websites within a short period of time.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
