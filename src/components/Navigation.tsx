'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 z-50 w-full text-gray-200 bg-dark border-2 border-dark md:sticky border-b-stone-200/10">
      <div className="flex flex-col max-w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link href="/" className="flex text-gray-100 transition duration-1000 ease-in-out group">
            <Image 
              src="/images/global/Logo_WISKAIS.png" 
              alt="WISKAIS Logo" 
              width={36} 
              height={36}
              className="transition-opacity h-9 w-9 group-hover:opacity-50 group-focus:opacity-70" 
            />
            <div className="mt-1 ml-3 text-xl font-black tracking-tight text-gray-100 uppercase transition-colors group-hover:text-gray-400/60">
              WISKAIS
            </div>
          </Link>
          <button 
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            aria-controls="menuItems"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!isOpen ? (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`} id="menuItems">
          <Link href="/about" className="px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary focus:outline-none focus:shadow-outline">
            Über uns
          </Link>
          <Link href="/events" className="px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary focus:outline-none focus:shadow-outline">
            Veranstaltungen
          </Link>
          <Link href="/registration" className="px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary focus:outline-none focus:shadow-outline">
            Anmeldung
          </Link>
          <Link href="/contact" className="px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:shadow-outline">
            Kontakt
          </Link>
        </nav>
      </div>
    </nav>
  );
}
