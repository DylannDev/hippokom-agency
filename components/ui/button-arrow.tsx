"use client";

import { RiArrowRightLine } from "react-icons/ri";
import Button from "./Button";
import { cn } from "@/lib/utils";

interface ButtonArrowProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  variant?: "blue" | "blue-sky" | "yellow";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
  iconClassName?: string;
}

export function ButtonArrow({
  children,
  href,
  target,
  variant = "yellow",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
  className,
  iconClassName,
}: ButtonArrowProps) {
  return (
    <Button
      href={href}
      target={target}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
      icon={
        <RiArrowRightLine
          className={cn(
            "group-hover:translate-x-2 transition-all duration-300",
            iconClassName
          )}
        />
      }
      iconPosition="right"
    >
      {children}
    </Button>
  );
}
