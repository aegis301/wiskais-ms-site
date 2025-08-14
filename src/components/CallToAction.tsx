import Button from './Button';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonHref,
  backgroundColor = 'bg-blue-600',
  textColor = 'text-white',
  className = ''
}: CallToActionProps) {
  return (
    <div className={`${backgroundColor} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-extrabold ${textColor} sm:text-4xl`}>
          {title}
        </h2>
        <p className={`mt-4 text-lg ${textColor === 'text-white' ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="mt-8">
          <Button
            href={buttonHref}
            variant="secondary"
            size="lg"
            className="text-blue-600 bg-white hover:bg-gray-50"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
