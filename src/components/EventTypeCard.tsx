import Image from "next/image";
import Link from "next/link";
import { EventType, ScheduledEvent } from "@/types/common";
import StatusBadge from "./StatusBadge";
import Button from "./Button";

interface EventTypeCardProps {
  eventType: EventType;
  upcomingEvents: ScheduledEvent[];
}

export default function EventTypeCard({ eventType, upcomingEvents }: EventTypeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      {/* Event Image */}
      <div className="relative h-48 flex-shrink-0">
        <Image
          src={eventType.image}
          alt={eventType.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white capitalize">
            {eventType.category}
          </span>
        </div>
      </div>
      
      {/* Event Content - Flex grow to fill available space */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {eventType.title}
        </h3>
        
        {/* CME Points */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {eventType.cmePoints} CME-Punkte
        </div>
        
        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {eventType.description}
        </p>

        {/* Variable Content Area - This will grow to fill space */}
        <div className="flex-grow">
          {/* Key Topics */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Schwerpunkte:</h4>
            <div className="flex flex-wrap gap-1">
              {eventType.topics.slice(0, 3).map((topic: string, index: number) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded text-xs bg-tertiary text-primary"
                >
                  {topic}
                </span>
              ))}
              {eventType.topics.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                  +{eventType.topics.length - 3} weitere
                </span>
              )}
            </div>
          </div>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Nächste Termine:
              </h4>
              <div className="space-y-2">
                {upcomingEvents.slice(0, 2).map((event) => (
                  <div key={event.id} className="flex items-center justify-between text-sm">
                    <div>
                      <div className="text-gray-900 font-medium">
                        {event.date}
                        {event.endDate && ` - ${event.endDate}`}
                      </div>
                      <div className="text-gray-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StatusBadge status={event.status} />
                      {event.registrationOpen && (
                        <span className="text-xs text-green-600 font-medium">
                          Anmeldung offen
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {upcomingEvents.length > 2 && (
                <div className="mt-2 text-xs text-gray-500">
                  +{upcomingEvents.length - 2} weitere Termine
                </div>
              )}
            </div>
          )}

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Besonderheiten:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {eventType.features.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <svg className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons - Always at bottom */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <Link href={`/events/${eventType.id}`}>
            <Button variant="primary" size="sm">
              Mehr erfahren
            </Button>
          </Link>
          
          {upcomingEvents.some(event => event.registrationOpen) && (
            <Link href="/registration">
              <Button variant="secondary" size="sm">
                Jetzt anmelden
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
