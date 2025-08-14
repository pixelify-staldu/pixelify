import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-pixelify-orange to-pixelify-orange-light hover:from-pixelify-orange-dark hover:to-pixelify-orange text-white shadow-modern-lg hover:shadow-modern-xl border-none",
        outline: "bg-white border-2 border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white shadow-modern hover:shadow-modern-lg",
        destructive: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-modern-lg hover:shadow-modern-xl border-none",
        secondary: "bg-gradient-to-r from-pixelify-gray-100 to-pixelify-gray-200 text-pixelify-charcoal hover:from-pixelify-gray-200 hover:to-pixelify-gray-300 shadow-modern hover:shadow-modern-lg border-none",
        blue: "bg-gradient-to-r from-pixelify-blue-light to-pixelify-blue-dark hover:from-pixelify-blue-dark hover:to-pixelify-blue-light text-white shadow-modern-lg hover:shadow-modern-xl border-none",
        purple: "bg-gradient-to-r from-pixelify-purple-light to-pixelify-purple-dark hover:from-pixelify-purple-dark hover:to-pixelify-purple-light text-white shadow-modern-lg hover:shadow-modern-xl border-none",
        ghost: "bg-transparent border-transparent hover:bg-pixelify-orange/10 hover:text-pixelify-orange shadow-none",
        link: "text-pixelify-orange underline-offset-4 hover:underline border-none shadow-none",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
