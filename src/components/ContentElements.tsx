import Image from "next/image";
import { ReactNode } from "react";

interface ContentElementsProps {
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'top';
  maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  children: ReactNode;
}

interface ContentHeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

interface ContentParagraphProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

interface ContentHighlightProps {
  children: ReactNode;
  variant?: 'blue' | 'green' | 'yellow' | 'red';
  className?: string;
}

// Main content container component with layout
export default function ContentElements({ 
  imageSrc, 
  imageAlt, 
  imagePosition = 'right',
  maxWidth = 'lg',
  className = '',
  children 
}: ContentElementsProps) {
  const maxWidthClasses = {
    'md': 'max-w-4xl',
    'lg': 'max-w-5xl',
    'xl': 'max-w-6xl',
    '2xl': 'max-w-7xl',
    'full': 'max-w-none'
  };

  const containerClass = `mx-auto px-4 sm:px-6 lg:px-8 py-12 ${maxWidthClasses[maxWidth]} ${className}`;

  if (!imageSrc) {
    return (
      <div className={containerClass}>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    );
  }

  if (imagePosition === 'top') {
    return (
      <div className={containerClass}>
        <div className="mb-8">
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
        imagePosition === 'left' ? 'lg:grid-cols-2' : ''
      }`}>
        {imagePosition === 'left' && (
          <div className="order-first lg:order-first">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
        
        {imagePosition === 'right' && (
          <div className="order-first lg:order-last">
            <Image
              src={imageSrc}
              alt={imageAlt || ''}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Semantic heading component with consistent styling
export function ContentHeading({ level = 2, children, className = '' }: ContentHeadingProps) {
  const baseClasses = "font-bold text-gray-900 mb-6";
  const levelClasses = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl"
  };

  const combinedClassName = `${baseClasses} ${levelClasses[level]} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={combinedClassName}>{children}</h1>;
    case 2:
      return <h2 className={combinedClassName}>{children}</h2>;
    case 3:
      return <h3 className={combinedClassName}>{children}</h3>;
    case 4:
      return <h4 className={combinedClassName}>{children}</h4>;
    default:
      return <h2 className={combinedClassName}>{children}</h2>;
  }
}

// Semantic paragraph component with consistent styling
export function ContentParagraph({ children, className = '', size = 'lg' }: ContentParagraphProps) {
  const sizeClasses = {
    'sm': 'text-base',
    'base': 'text-lg',
    'lg': 'text-lg'
  };

  return (
    <p className={`${sizeClasses[size]} text-gray-700 mb-6 ${className}`}>
      {children}
    </p>
  );
}

// Highlighted content box component with different variants
export function ContentHighlight({ children, variant = 'blue', className = '' }: ContentHighlightProps) {
  const variantClasses = {
    'blue': 'bg-blue-50 text-blue-800',
    'green': 'bg-green-50 text-green-800',
    'yellow': 'bg-yellow-50 text-yellow-800',
    'red': 'bg-red-50 text-red-800'
  };

  return (
    <div className={`${variantClasses[variant]} p-6 rounded-lg mb-8 ${className}`}>
      <p className="text-lg font-medium">
        {children}
      </p>
    </div>
  );
}
