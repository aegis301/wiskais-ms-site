import Link from 'next/link';
import { ButtonVariant, ButtonSize, BaseChildrenProps } from '@/types/common';
import { BUTTON_VARIANTS, BUTTON_SIZES, TRANSITIONS } from '@/constants/design';

interface ButtonProps extends BaseChildrenProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${TRANSITIONS.COLORS}`;
  
  // Map variant to uppercase key
  const variantKey = variant.toUpperCase() as keyof typeof BUTTON_VARIANTS;
  const variantClasses = disabled 
    ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
    : BUTTON_VARIANTS[variantKey];
  
  // Map size to uppercase key
  const sizeKey = size.toUpperCase() as keyof typeof BUTTON_SIZES;
  const sizeClasses = BUTTON_SIZES[sizeKey];
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;
  
  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
