"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

type ColorOption = "blue" | "yellow";
type WidthOption = "large" | "normal";

type ResponsiveWidth = {
  default: WidthOption;
  sm?: WidthOption;
  md?: WidthOption;
  lg?: WidthOption;
};

type ButtonProps = {
  children?: string;
  icon?: ReactNode;
  href?: string;
  color?: ColorOption;
  responsiveWidth?: ResponsiveWidth;
  disabled?: boolean;
  link?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | undefined;
};

const Button = ({
  children,
  icon,
  href,
  color = "yellow",
  responsiveWidth = { default: "normal" },
  disabled = false,
  link = false,
  onClick,
  type,
}: ButtonProps) => {
  const baseClasses =
    "rounded-xl px-[36px] py-[18px] font-semibold text-center text-base transition-all duration-200 ease-in-out active:scale-95 flex justify-center items-center gap-1";

  // Gérer les classes de largeur responsive avec des valeurs fixes
  const responsiveClasses = `
    ${responsiveWidth.default === "large" ? "w-full" : "w-fit"}
    ${
      responsiveWidth.sm === "large"
        ? "sm:w-full"
        : responsiveWidth.sm === "normal"
        ? "sm:w-fit"
        : ""
    }
    ${
      responsiveWidth.md === "large"
        ? "md:w-full"
        : responsiveWidth.md === "normal"
        ? "md:w-fit"
        : ""
    }
    ${
      responsiveWidth.lg === "large"
        ? "lg:w-full"
        : responsiveWidth.lg === "normal"
        ? "lg:w-fit"
        : ""
    }
  `;

  const colorClasses = {
    blue: "bg-blue text-white hover:bg-blue-hover",
    yellow: "bg-yellow text-blue-dark hover:bg-yellow-hover",
  };

  const classes = `${baseClasses} ${responsiveClasses} ${colorClasses[color]} ${
    disabled ? "cursor-not-allowed opacity-75" : ""
  }`;

  const content = (
    <>
      {icon && <span className="text-xl">{icon}</span>}
      {children || (icon ? null : "")}
    </>
  );

  return link ? (
    <Link href={href || ""} className={classes}>
      {content}
    </Link>
  ) : (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
