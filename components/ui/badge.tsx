import { Typography } from "./typography";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "center" | "left";
  color?: "blue" | "white";
}

export function Badge({
  children,
  className,
  variant = "center",
  color = "blue",
}: BadgeProps) {
  return (
    <div
      className={cn(
        color === "blue" && "text-blue",
        color === "white" && "text-white"
      )}
    >
      <Typography
        as="span"
        className={cn(
          `text-sm sm:text-lg font-bold uppercase tracking-[.06em] w-full flex items-center ${
            variant === "center"
              ? "justify-center"
              : "justify-center lg:justify-start"
          }`,
          className
        )}
      >
        {" "}
        {variant === "left" && (
          <div
            className={cn(
              "hidden lg:flex w-full h-[2.5px] min-w-5 max-w-20 mr-4",
              color === "white" ? "bg-white" : "bg-blue-dark"
            )}
          />
        )}
        {children}
      </Typography>
    </div>
  );
}
