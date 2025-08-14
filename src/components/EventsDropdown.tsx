'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { eventTypes } from '@/data/events';

interface EventsDropdownProps {
  className?: string;
}

export default function EventsDropdown({ className = '' }: EventsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-white focus:text-white focus:outline-none focus:shadow-outline transition-colors duration-200 flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Veranstaltungen
        <svg 
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 md:left-0">
          <div className="py-2">
            {/* All Events Link */}
            <Link
              href="/events"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <div>
                  <div className="font-medium">Alle Veranstaltungen</div>
                  <div className="text-xs text-gray-500">Übersicht aller Events</div>
                </div>
              </div>
            </Link>
            
            <hr className="my-2" />
            
            {/* Individual Event Types */}
            {eventTypes.map((eventType) => (
              <Link
                key={eventType.id}
                href={`/events/${eventType.id}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    eventType.category === 'meeting' ? 'bg-blue-400' :
                    eventType.category === 'symposium' ? 'bg-purple-400' :
                    eventType.category === 'repetitorium' ? 'bg-green-400' :
                    'bg-orange-400'
                  }`} />
                  <div>
                    <div className="font-medium">{eventType.shortTitle}</div>
                    <div className="text-xs text-gray-500 capitalize">{eventType.category}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
