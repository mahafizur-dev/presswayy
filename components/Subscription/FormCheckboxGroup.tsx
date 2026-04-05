import React from "react";
import { AlertCircle } from "lucide-react";
import { BaseFieldProps } from "./FormInput";

interface CheckboxGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement>, BaseFieldProps {
  options: string[];
  modifyLabel?: (name: string) => string;
}

export const FormCheckboxGroup = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupProps
>(
  (
    { label, error, required, options, modifyLabel, className, ...props },
    ref,
  ) => {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2">
          {label}{" "}
          {required && (
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <div
          className={`bg-gray-50 border rounded-lg p-4 transition-all ${error ? "border-red-500" : "border-gray-300"} ${className || ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {options.map((opt) => (
              <label
                key={opt}
                className="flex items-center text-sm text-gray-800 cursor-pointer select-none hover:bg-gray-100 p-1 -ml-1 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  value={opt}
                  ref={ref}
                  className={`mr-3 w-4 h-4 cursor-pointer ${error ? "accent-red-500" : "accent-[#ff6d5a]"}`}
                  {...props}
                />
                {modifyLabel ? modifyLabel(opt) : opt}
              </label>
            ))}
          </div>
        </div>
        {error && (
          <p
            className="mt-1.5 text-sm text-red-600 font-medium flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="w-4 h-4" /> {error}
          </p>
        )}
      </div>
    );
  },
);
FormCheckboxGroup.displayName = "FormCheckboxGroup";
