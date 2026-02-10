import Button from "./Button";
import { calendlyLink } from "@/data";
import { CalendarCheck } from "lucide-react";

interface CalendlyButtonProps {
  variant?: "white" | "yellow" | "blue";
  size?: "sm" | "default";
  className?: string;
  label?: string;
}

export function CalendlyButton({
  variant = "yellow",
  size = "default",
  label = "Réserver un appel",
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
      {label}
    </Button>
  );
}

export default CalendlyButton;
