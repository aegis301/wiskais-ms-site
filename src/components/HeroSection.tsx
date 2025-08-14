interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundClass?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  description, 
  backgroundClass = "bg-gray-100" 
}: HeroSectionProps) {
  return (
    <div className={`${backgroundClass} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <h2 className="mt-2 text-3xl font-light text-gray-800 md:text-4xl">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="mt-4 text-xl text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
