import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  name,
  type = "text",
  error,
  required = false,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label
        htmlFor={name}
        className="block text-base sm:text-lg font-semibold text-black"
      >
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      {children}
      {error && (
        <Typography as="p" variant="sm" className="text-red-500 font-medium">
          {error}
        </Typography>
      )}
    </div>
  );
}
