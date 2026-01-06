"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        blue: "bg-blue text-white hover:bg-blue-dark ring-2 ring-transparent hover:ring-white",
        "blue-sky": "bg-blue-medium text-black hover:bg-blue-medium/80",
        yellow: "bg-yellow text-black hover:bg-yellow-hover",
      },
      size: {
        sm: "px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base",
        default: "px-6 py-4 sm:px-7 sm:py-5 text-base sm:text-lg",
        md: "px-7 py-5 sm:px-8 sm:py-6 text-base sm:text-lg",
        lg: "px-8 py-6 sm:px-10 sm:py-7 text-lg sm:text-xl",
        xl: "px-10 py-7 sm:px-12 sm:py-8 text-xl sm:text-2xl",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      target,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref
  ) => {
    const iconSizes: Record<NonNullable<typeof size>, string> = {
      sm: "text-base sm:text-lg",
      default: "text-xl sm:text-2xl",
      md: "text-xl sm:text-2xl",
      lg: "text-2xl sm:text-3xl",
      xl: "text-3xl sm:text-4xl",
    };

    const iconSize = iconSizes[size ?? "default"];

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className={iconSize}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className={iconSize}>{icon}</span>
        )}
      </>
    );

    const classes = cn(buttonVariants({ variant, size, className }));

    if (href) {
      return (
        <Link href={href} target={target} className={classes}>
          {content}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={classes} ref={ref} {...props}>
        {asChild ? children : content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
export { buttonVariants };
