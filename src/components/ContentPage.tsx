import Image from 'next/image';
import { ReactNode } from 'react';

interface ContentPageProps {
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '7xl';
  className?: string;
}

export default function ContentPage({
  children,
  imageSrc,
  imageAlt,
  imageWidth = 800,
  imageHeight = 400,
  maxWidth = '4xl',
  className = ''
}: ContentPageProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '7xl': 'max-w-7xl'
  };

  return (
    <div className={`py-16 ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="prose prose-lg mx-auto">
          {imageSrc && (
            <div className="mb-8">
              <Image 
                src={imageSrc}
                alt={imageAlt || ''}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
