'use client'
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cssClass";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        icon: "p-2 text-lg",
        sm: "py-1.5 px-4 text-sm",
        normal: "py-2 px-4 text-sm",
        lg: "py-2.5 px-6 text-base",
        xl: "py-3 px-8 text-lg",
      },
      variant: {
        primary: "bg-primary text-primary-fg hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-fg",
        "primary-outline":
          "border border-primary hover:bg-primary text-primary hover:text-primary-fg",
        "secondary-outline":
          "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-fg",
        "primary-link": "p-0 text-primary hover:text-primary/90",
        "secondary-link": "p-0 text-secondary hover:text-secondary/90",
        icon: "rounded-full hover:bg-surface/60 aspect-square",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
