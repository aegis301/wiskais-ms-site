import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  paddingX?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  backgroundColor?: 'white' | 'gray-50' | 'gray-100' | 'blue-50';
}

export default function ContentContainer({
  children,
  maxWidth = '4xl',
  paddingY = 'xl',
  paddingX = 'lg',
  className = '',
  backgroundColor = 'white'
}: ContentContainerProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-none'
  };

  const paddingYClasses = {
    'none': 'py-0',
    'sm': 'py-4',
    'md': 'py-8',
    'lg': 'py-12',
    'xl': 'py-16',
    '2xl': 'py-24'
  };

  const paddingXClasses = {
    'none': 'px-0',
    'sm': 'px-2',
    'md': 'px-4',
    'lg': 'px-6',
    'xl': 'px-8'
  };

  const backgroundClasses = {
    'white': 'bg-white',
    'gray-50': 'bg-gray-50',
    'gray-100': 'bg-gray-100',
    'blue-50': 'bg-blue-50'
  };

  return (
    <section className={`${backgroundClasses[backgroundColor]} ${className}`}>
      <div className={`
        mx-auto 
        ${maxWidthClasses[maxWidth]} 
        ${paddingYClasses[paddingY]} 
        ${paddingXClasses[paddingX]} 
        sm:px-6 
        lg:px-8
      `}>
        {children}
      </div>
    </section>
  );
}
