import Image from 'next/image';

interface PartnerLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface PartnerLogosProps {
  logos: PartnerLogo[];
  title?: string;
  className?: string;
}

export default function PartnerLogos({ 
  logos, 
  title = "Unsere Partner",
  className = '' 
}: PartnerLogosProps) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo, index) => (
          <div key={index} className="col-span-1 flex justify-center">
            <Image 
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 120}
              height={logo.height || 80}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
