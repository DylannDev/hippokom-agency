import { cn } from "../../lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  lineHeight?: "tightest" | "tight" | "normal" | "relaxed";
  as: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Typography({
  variant = "base",
  weight = "normal",
  lineHeight = "normal",
  as: Component,
  className,
  children,
  ...props
}: TypographyProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "base":
        return "text-base";
      case "lg":
        return "text-base sm:text-lg";
      case "xl":
        return "text-lg sm:text-xl";
      case "2xl":
        return "text-lg sm:text-2xl";
      case "3xl":
        return "text-[22px] sm:text-[28px]";
      case "4xl":
        return "text-[24px] sm:text-[34px]";
      case "5xl":
        return "text-[32px] sm:text-[50px]";
      case "6xl":
        return "text-[54px] sm:text-[66px]";
      default:
        return "text-base";
    }
  };

  const getWeightClass = () => {
    switch (weight) {
      case "light":
        return "font-light";
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      // case "extrabold":
      //   return "font-extrabold";
      default:
        return "font-medium";
    }
  };

  const getLineHeightClass = () => {
    switch (lineHeight) {
      case "tightest":
        return "leading-none";
      case "tight":
        return "leading-tight";
      case "normal":
        return "leading-normal";
      case "relaxed":
        return "leading-relaxed";
      default:
        return "leading-none";
    }
  };

  const getHeadingMargin = () => {
    switch (Component) {
      case "h1":
        return "mb-20";
      case "h2":
        return "mb-16";
      case "h3":
        return "mb-12";
      case "h4":
        return "mb-8";
      case "h5":
        return "mb-6";
      case "h6":
        return "mb-4";
      default:
        return "mb-4";
    }
  };

  return (
    <Component
      className={cn(
        getVariantClass(),
        getWeightClass(),
        getHeadingMargin(),
        lineHeight ? getLineHeightClass() : "leading-none",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
