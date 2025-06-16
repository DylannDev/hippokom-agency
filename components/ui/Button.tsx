"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  target?: string;
  variant?: "blue" | "blue-sky" | "yellow";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
};

const Button = ({
  children,
  icon,
  iconPosition = "left",
  href,
  target,
  variant = "blue",
  fullWidth = true,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "group rounded-full px-7 py-5 sm:px-9 sm:py-6 font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    blue: "bg-blue text-white hover:bg-blue-dark",
    "blue-sky": "bg-blue-medium text-black hover:bg-blue-medium/80",
    yellow: "bg-yellow text-black hover:bg-yellow-hover",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    fullWidth ? "w-full sm:w-fit" : "w-fit"
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="text-xl sm:text-2xl">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="text-xl sm:text-2xl">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
