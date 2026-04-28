import { HTMLAttributes, forwardRef } from "react"
import { cn } from "../../utils"

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden", className)} {...props} />
  )
)
Card.displayName = "Card"
