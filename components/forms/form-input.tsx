import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full px-5 sm:px-6 py-3 sm:py-5 rounded-full border focus:border-blue-dark hover:border-blue-dark transition-all duration-300 ease-in-out outline-none text-lg font-medium placeholder:text-gray-light placeholder:font-medium placeholder:text-[15px] placeholder:sm:text-base",
          error ? "border-red-500" : "border-transparent",
          className
        )}
        {...props}
      />
    );
  }
);

FormInput.displayName = "FormInput";
