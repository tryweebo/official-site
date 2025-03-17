import * as React from 'react'
import * as motion from 'motion/react-client'

export function BenefitsSection(): React.ReactElement {
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
      id="benefit"
    >
      <span className="text-sm text-foreground/40 font-mono">Benefits.</span>

      <h2 className="text-3xl font-semibold text-center leading-tight group laptop:w-9/12 mt-8">
        Get your stunning website done,
        <br />
        <span className="text-foreground/30">without the headache</span>
      </h2>

      <div className="flex items-center gap-5 mt-48 w-full">
        <div className="grid grid-cols-1 tablet:grid-cols-2">
          <div className="flex flex-col col-span-1 border border-border bg-surface rounded-2xl p-1 overflow-hidden rotate-12 -translate-y-20 transition-all duration-300 hover:scale-95 cursor-pointer group">
            <div className="flex flex-col border border-border overflow-hidden rounded-xl">
              <div className="flex border-b border-border relative w-full p-3 justify-center">
                <h3 className="font-medium text-center">Others.</h3>
                <span className="h-2 w-2 rounded-full bg-border absolute right-2 top-2 group-hover:bg-blue-500" />
              </div>
              <ul className="flex flex-col px-3 py-5 gap-3 text-foreground/60">
                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Lock in one platform specific.
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Unresponsive freelancers and agencies
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Complicated process before starting your project
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Shocking hidden fees
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Low level of works
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Limited revisions & updates possibilities
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Long hiring process
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-rr-cross-small" />
                  Lock in one platform specific
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col col-span-1 border border-border bg-background rounded-2xl p-1 overflow-hidden -rotate-12 transition-all duration-300 hover:scale-105 hover:-translate-y-10 cursor-pointer group">
            <div className="flex flex-col border border-border overflow-hidden rounded-xl">
              <div className="flex border-b border-border relative w-full p-3 justify-center">
                <h3 className="font-medium text-center">Weebo.</h3>

                <span className="h-2 w-2 rounded-full bg-border absolute right-2 top-2 group-hover:bg-blue-500" />
              </div>
              <ul className="flex flex-col px-3 py-5 gap-3">
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Pick what platform you need
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Responsive teams and fast communication
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Simple and streamline process
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Transparent pricing & no hidden fees
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  World class sites works
                </li>

                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  Unlimited revisions and feedbacks
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  No hiring, no commitment
                </li>
                <li className="flex gap-2">
                  <i className="fi fi-sr-check-circle text-green-600" />
                  No vendor and partner lock in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
