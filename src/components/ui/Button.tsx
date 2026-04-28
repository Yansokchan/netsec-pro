import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../../utils"

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border-2 border-slate-200 hover:border-slate-300 text-slate-700 bg-white shadow-sm",
      ghost: "hover:bg-slate-100 text-slate-700"
    }
    return (
      <button 
        ref={ref} 
        className={cn(
            "px-4 py-2 flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            variants[variant],
            className
        )}
        {...props} 
      />
    )
  }
)
Button.displayName = "Button"
