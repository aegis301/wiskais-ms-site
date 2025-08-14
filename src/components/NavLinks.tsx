import Link from 'next/link';
import EventsDropdown from './EventsDropdown';

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

export default function NavLinks({ className = '', onLinkClick }: NavLinksProps) {
  const linkBaseClasses = "px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white focus:outline-none focus:shadow-outline";

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <>
      <Link 
        href="/about" 
        className={linkBaseClasses}
        onClick={handleLinkClick}
      >
        Über uns
      </Link>
      
      <EventsDropdown onLinkClick={handleLinkClick} />
      
      <Link 
        href="/registration" 
        className={linkBaseClasses}
        onClick={handleLinkClick}
      >
        Anmeldung
      </Link>
      
      <Link 
        href="/contact" 
        className={linkBaseClasses}
        onClick={handleLinkClick}
      >
        Kontakt
      </Link>
    </>
  );
}
