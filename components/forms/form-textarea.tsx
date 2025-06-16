import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full px-5 sm:px-6 py-4 sm:py-5 rounded-3xl border focus:border-blue-dark hover:border-blue-dark transition-all duration-300 ease-in-out outline-none text-lg font-medium placeholder:text-gray-light placeholder:font-medium placeholder:text-[15px] placeholder:sm:text-base",
          error ? "border-red-500" : "border-transparent",
          className
        )}
        {...props}
      />
    );
  }
);

FormTextarea.displayName = "FormTextarea";
