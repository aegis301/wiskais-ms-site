import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface FormCheckboxProps {
  id: string;
  name: string;
  label: ReactNode;
  checked: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

interface SuccessMessageProps {
  title: string;
  message: string;
  buttonText: string;
  onReset: () => void;
}

// Form section with consistent styling for grouped form fields
export function FormSection({ title, children, className = '' }: FormSectionProps) {
  return (
    <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

// Checkbox component with consistent styling
export function FormCheckbox({ 
  id, 
  name, 
  label, 
  checked, 
  required = false, 
  onChange, 
  className = '' 
}: FormCheckboxProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          name={name}
          type="checkbox"
          required={required}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>
      <div className="ml-3">
        <label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
}

// Success message component
export function SuccessMessage({ title, message, buttonText, onReset }: SuccessMessageProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onReset}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
