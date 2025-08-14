import { ReactNode } from 'react';

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  className?: string;
}

export default function ContactInfoItem({ 
  icon, 
  title, 
  content, 
  className = '' 
}: ContactInfoItemProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex-shrink-0">
        <div className="w-6 h-6 text-blue-600">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
}
