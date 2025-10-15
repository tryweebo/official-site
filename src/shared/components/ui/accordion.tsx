import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { mergeClass } from "@shared/libs"
import * as React from "react"

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Item
  > | null>
}) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={mergeClass("bg-surface rounded-2xl p-4", className)}
    {...props}
  />
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Trigger
  > | null>
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={mergeClass(
        "flex flex-1 items-center text-sm font-medium text-left justify-between transition-all duration-300 [&[data-state=open]>i]:rotate-180 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
      <i className="fi fi-sr-plus-small text-lg transition-all duration-500" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Content
  > | null>
}) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={mergeClass(
      "overflow-hidden text-sm text-foreground/60 leading-relaxed transition-all duration-700 py-4",
      className,
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
