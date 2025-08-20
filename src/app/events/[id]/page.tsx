import { notFound } from 'next/navigation';
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContentContainer from "@/components/ContentContainer";
import { ContentHeading, ContentParagraph, ContentList } from "@/components/ContentElements";
import StatusBadge from "@/components/StatusBadge";
import Button from "@/components/Button";
import { eventTypes, getEventTypeById, getScheduledEventsByType } from "@/data/events";

// Generate static params for all event types
export async function generateStaticParams() {
  return eventTypes.map((eventType) => ({
    id: eventType.id,
  }));
}

// Generate metadata for each event type
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const eventType = getEventTypeById(id);
  
  if (!eventType) {
    return {
      title: 'Event nicht gefunden - WISKAIS',
    };
  }

  return {
    title: `${eventType.title} - WISKAIS`,
    description: eventType.description.substring(0, 160) + '...',
  };
}

export default async function EventTypePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const eventType = getEventTypeById(id);
  
  if (!eventType) {
    notFound();
  }

  const scheduledEvents = getScheduledEventsByType(eventType.id);
  const upcomingEvents = scheduledEvents.filter(event => 
    event.status === 'upcoming' || event.status === 'ongoing'
  );

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title={eventType.title}
        description={`${eventType.cmePoints} CME-Punkte • ${eventType.category.charAt(0).toUpperCase() + eventType.category.slice(1)}`}
      />

      <ContentContainer maxWidth="4xl" paddingY="xl">
        {/* Event Image */}
        <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src={eventType.image}
            alt={eventType.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-white capitalize">
              {eventType.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <ContentHeading level={2}>Über diese Veranstaltung</ContentHeading>
        <ContentParagraph>{eventType.description}</ContentParagraph>

        {/* Topics */}
        <ContentHeading level={3}>Schwerpunkte und Themen</ContentHeading>
        <ContentList>
          {eventType.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ContentList>

        {/* Features */}
        <ContentHeading level={3}>Besonderheiten</ContentHeading>
        <ContentList>
          {eventType.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ContentList>

        {/* CME Information */}
        <div className="bg-tertiary rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-primary">Fortbildungspunkte</h3>
          </div>
          <p className="text-gray-700">
            Diese Veranstaltung ist bei der Ärztekammer Westfalen-Lippe (ÄKWL) zertifiziert und 
            es werden <strong>{eventType.cmePoints} CME-Punkte</strong> vergeben.
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <>
            <ContentHeading level={2}>Kommende Termine</ContentHeading>
            <div className="grid gap-6 mb-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}{event.endDate && ` - ${event.endDate}`}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={event.status} />
                  </div>

                  {event.locationDetails && (
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>Veranstaltungsort:</strong> {event.locationDetails}
                    </div>
                  )}

                  {event.price && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Teilnahmegebühren:</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        {event.price.presence && (
                          <div>Präsenzteilnahme: <span className="font-medium">{event.price.presence}€</span></div>
                        )}
                        {event.price.online && (
                          <div>Online-Teilnahme: <span className="font-medium">{event.price.online}€</span></div>
                        )}
                        {event.price.students && (
                          <div>Studierende: <span className="font-medium">{event.price.students}€</span></div>
                        )}
                      </div>
                    </div>
                  )}

                  {event.speakers && event.speakers.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Referent*innen:</h5>
                      <div className="text-sm text-gray-600">
                        {event.speakers.join(', ')}
                      </div>
                    </div>
                  )}

                  {event.maxParticipants && (
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Teilnehmerplätze:</h5>
                      <div className="text-sm text-gray-600">
                        {event.currentParticipants || 0} / {event.maxParticipants} Teilnehmer*innen
                        {event.currentParticipants && (
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {event.registrationDeadline && (
                    <div className="mb-4 text-sm text-gray-600">
                      <strong>Anmeldeschluss:</strong> {event.registrationDeadline}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {event.registrationOpen && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Anmeldung offen
                        </span>
                      )}
                    </div>
                    
                    {event.registrationOpen && (
                      <Button variant="primary" href="/registration">
                        Jetzt anmelden
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Past Events */}
        {scheduledEvents.filter(event => event.status === 'completed').length > 0 && (
          <>
            <ContentHeading level={3}>Vergangene Veranstaltungen</ContentHeading>
            <div className="space-y-3">
              {scheduledEvents
                .filter(event => event.status === 'completed')
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <div>
                      <div className="font-medium text-gray-900">{event.title}</div>
                      <div className="text-sm text-gray-600">
                        {event.date}{event.endDate && ` - ${event.endDate}`} • {event.location}
                      </div>
                    </div>
                    <StatusBadge status={event.status} />
                  </div>
                ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Interesse an {eventType.title}?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {upcomingEvents.some(event => event.registrationOpen) 
              ? 'Melden Sie sich jetzt für einen unserer kommenden Termine an.'
              : 'Kontaktieren Sie uns für Informationen über kommende Termine.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {upcomingEvents.some(event => event.registrationOpen) && (
              <Button variant="primary" href="/registration">
                Zur Anmeldung
              </Button>
            )}
            <Button variant="secondary" href="/contact">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}
