import * as DialogPrimitive from "@radix-ui/react-dialog"
import { mergeClass } from "@shared/libs"
import * as React from "react"
import { ScrollArea } from "./scroll-area"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Overlay
  > | null>
}) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={mergeClass(
      "fixed inset-0 z-50 bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Content
  > | null>
}) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={mergeClass(
        "fixed left-[50%] top-[50%] z-50 grid w-[90%] tablet:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-1 rounded-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-[48%] data-[state=open]:slide-in-from-bottom-[48%] group",
        className,
      )}
      {...props}
    >
      <div className="h-full w-full flex flex-col p-6 rounded-xl transition-all duration-300">
        <DialogPrimitive.Title hidden />
        <ScrollArea className="max-h-[80vh] tablet:max-h-[60vh]">
          {children}
        </ScrollArea>
        <DialogPrimitive.Close className="flex items-center px-3 py-2 rounded-full gap-2 font-medium font-heading absolute right-4 top-4 bg-secondary text-secondary-foreground cursor-pointer text-sm transition-all duration-300 hover:scale-95">
          Close
          <i className="fi fi-br-cross-small text-sm" />
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
)
DialogContent.displayName = DialogPrimitive.Content.displayName

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
}
