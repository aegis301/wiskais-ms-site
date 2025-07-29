import Image from 'next/image';

interface ContentSectionProps {
  title: string;
  content: string | string[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  className?: string;
}

export default function ContentSection({
  title,
  content,
  imageSrc,
  imageAlt,
  imageOnLeft = true,
  className = ''
}: ContentSectionProps) {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div className={`relative my-16 ${className}`}>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        {/* Image Section */}
        <div className={`relative sm:py-8 lg:py-0 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Image 
                src={imageSrc}
                alt={imageAlt}
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6 text-gray-600 space-y-6">
              {contentArray.map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
