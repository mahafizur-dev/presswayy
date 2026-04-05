import React from "react";
import { AlertCircle } from "lucide-react";

export interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
}

interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>, BaseFieldProps {}

export const FormInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, required, className, ...props }, ref) => {
    const id = props.name || props.id;
    return (
      <div className="flex flex-col">
        <label
          className="text-sm font-semibold text-gray-700 mb-2"
          htmlFor={id}
        >
          {label}{" "}
          {required && (
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full bg-gray-50 border text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 transition-all
            ${error ? "border-red-500 focus:ring-red-500/20" : "border-gray-300 focus:border-[#ff6d5a] focus:ring-[#ff6d5a]/20"}
            ${className || ""}
          `}
          {...props}
        />
        {error && (
          <p
            className="mt-1.5 text-sm text-red-600 font-medium flex items-center gap-1"
            id={`${id}-error`}
            role="alert"
          >
            <AlertCircle className="w-4 h-4" /> {error}
          </p>
        )}
      </div>
    );
  },
);
FormInput.displayName = "FormInput";
