import Image from "next/image";
import { BaseComponentProps } from "@/types/common";
import StatusBadge from "./StatusBadge";
import Button from "./Button";

// Legacy Event interface for backward compatibility
// TODO: Consider migrating to EventTypeCard for new implementations
interface LegacyEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  registrationOpen: boolean;
}

interface EventCardProps extends BaseComponentProps {
  event: LegacyEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <StatusBadge status={event.status} />
        </div>
      </div>
      
      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {event.title}
        </h3>
        
        {/* Date */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {event.date}
        </div>
        
        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location}
        </div>
        
        {/* Description */}
        <p className="text-gray-700 mb-6">
          {event.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            href={`/events/${event.id}`}
            variant="secondary"
            className="flex-1 text-center"
          >
            Details
          </Button>
          {event.registrationOpen ? (
            <Button
              href="/registration"
              variant="primary"
              className="flex-1 text-center"
            >
              Anmelden
            </Button>
          ) : (
            <Button
              variant="ghost"
              disabled
              className="flex-1 text-center"
            >
              {event.status === 'completed' ? 'Abgeschlossen' : 'Anmeldung folgt'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
