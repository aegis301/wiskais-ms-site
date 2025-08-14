import { ChangeEvent } from 'react';
import { BaseComponentProps } from '@/types/common';
import { FORM_INPUT_CLASSES } from '@/constants/design';

interface FormInputProps extends BaseComponentProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helpText?: string;
  error?: boolean;
}

export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
  className = '',
  helpText,
  error = false
}: FormInputProps) {
  const inputClasses = error 
    ? `${FORM_INPUT_CLASSES.BASE} ${FORM_INPUT_CLASSES.ERROR}`
    : FORM_INPUT_CLASSES.BASE;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
      />
      {helpText && (
        <p className="text-sm text-gray-500 mt-1">
          {helpText}
        </p>
      )}
    </div>
  );
}
