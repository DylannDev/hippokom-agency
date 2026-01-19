import Button from "./Button";
import { calendlyLink } from "@/data";
import { cn } from "@/lib/utils";
import { CalendarCheck } from "lucide-react";

interface CalendlyButtonProps {
  variant?: "white" | "yellow" | "blue";
  size?: "sm" | "default" | "md" | "lg";
  className?: string;
}

export function CalendlyButton({
  variant = "yellow",
  size = "md",
  className,
}: CalendlyButtonProps) {
  return (
    <Button
      href={calendlyLink}
      target="_blank"
      size={size}
      variant={variant}
      icon={<CalendarCheck size={20} />}
      className={className}
    >
      Réserver un appel
    </Button>
  );
}

export default CalendlyButton;
