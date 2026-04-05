import React from "react";
import { AlertCircle } from "lucide-react";
import { BaseFieldProps } from "./FormInput";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>, BaseFieldProps {
  options: string[];
}

export const FormSelect = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, required, options, className, ...props }, ref) => {
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
        <select
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full bg-gray-50 border text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:16px_16px] pr-10 cursor-pointer
            ${error ? "border-red-500 focus:ring-red-500/20" : "border-gray-300 focus:border-[#ff6d5a] focus:ring-[#ff6d5a]/20"}
            ${className || ""}
          `}
          {...props}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
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
FormSelect.displayName = "FormSelect";
