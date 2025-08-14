"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { EventType } from '@/types/common';

interface EventTypesSectionProps {
  eventTypes: EventType[];
  className?: string;
}

interface EventTypeCardProps {
  eventType: EventType;
}

// Threshold for switching to carousel mode
const CAROUSEL_THRESHOLD = 3;

const EventTypeCard = ({ eventType }: EventTypeCardProps) => {
  // Add some visual variety with different gradient colors for each event type
  const getGradientColor = (eventId: string) => {
    switch (eventId) {
      case 'aoa-meeting':
        return 'from-blue-600/60 via-blue-400/20 to-transparent';
      case 'aoa-symposium':
        return 'from-indigo-600/60 via-indigo-400/20 to-transparent';
      case 'repetitorium-anaesthesie':
        return 'from-green-600/60 via-green-400/20 to-transparent';
      case 'repetitorium-intensivmedizin':
        return 'from-purple-600/60 via-purple-400/20 to-transparent';
      default:
        return 'from-gray-600/60 via-gray-400/20 to-transparent';
    }
  };

  return (
    <Link 
      href={`/events/${eventType.id}`}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={eventType.image}
          alt={eventType.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Dynamic colored overlay for variety */}
        <div className={`absolute inset-0 bg-gradient-to-t ${getGradientColor(eventType.id)}`} />
        
        {/* CME Points Badge */}
        {eventType.cmePoints && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {eventType.cmePoints} CME
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {eventType.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 overflow-hidden leading-relaxed">
          <span className="block overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {eventType.description}
          </span>
        </p>

        {/* Key Topics */}
        <div className="flex flex-wrap gap-1 mb-4">
          {eventType.topics.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {topic}
            </span>
          ))}
          {eventType.topics.length > 3 && (
            <span className="inline-block bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs">
              +{eventType.topics.length - 3} weitere
            </span>
          )}
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
            Mehr erfahren
          </span>
          <svg 
            className="w-5 h-5 text-blue-600 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const EventTypesSection = ({ eventTypes, className = '' }: EventTypesSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldUseCarousel = eventTypes.length >= CAROUSEL_THRESHOLD;
  const itemsPerSlide = 4;
  const totalSlides = shouldUseCarousel ? Math.ceil(eventTypes.length / itemsPerSlide) : 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideItems = () => {
    if (!shouldUseCarousel) return eventTypes;
    const start = currentSlide * itemsPerSlide;
    return eventTypes.slice(start, start + itemsPerSlide);
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Unsere Veranstaltungsformate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere vielfältigen Weiterbildungsangebote in Anästhesiologie, 
            Intensiv- und Schmerzmedizin. Wählen Sie das Format, das zu Ihren Lernzielen passt.
          </p>
          {shouldUseCarousel && (
            <p className="text-sm text-gray-500 mt-2">
              {eventTypes.length} Veranstaltungsformate verfügbar
            </p>
          )}
        </div>

        {/* Carousel Controls (only shown when using carousel) */}
        {shouldUseCarousel && totalSlides > 1 && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Event Types Grid/Carousel */}
        <div className={`relative ${shouldUseCarousel ? 'overflow-hidden' : ''}`}>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
            shouldUseCarousel ? 'transition-transform duration-300 ease-in-out' : ''
          }`} style={shouldUseCarousel ? { transform: `translateX(-${currentSlide * 100}%)` } : {}}>
            {getCurrentSlideItems().map((eventType, index) => (
              <div 
                key={eventType.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <EventTypeCard eventType={eventType} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Alle Veranstaltungen ansehen
            <svg 
              className="ml-2 -mr-1 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventTypesSection;
