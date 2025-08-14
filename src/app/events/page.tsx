import EventTypeCard from "@/components/EventTypeCard";
import HeroSection from "@/components/HeroSection";
import CallToAction from "@/components/CallToAction";
import ContentContainer from "@/components/ContentContainer";
import { eventTypes, getScheduledEventsByType, getAllActiveEvents } from "@/data/events";

export const metadata = {
  title: "Veranstaltungen - WISKAIS",
  description: "Unsere Veranstaltungsformate für Anästhesie, Intensivmedizin und interdisziplinäre Fortbildung",
};

export default function Events() {
  const activeEvents = getAllActiveEvents();

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Unsere Veranstaltungen"
        description="Entdecken Sie unsere verschiedenen Veranstaltungsformate für Anästhesie, Intensivmedizin und interdisziplinäre Fortbildung."
      />

      <ContentContainer maxWidth="6xl" paddingY="xl">
        {/* Overview Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unsere Veranstaltungsformate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Von quartalsweisen Meetings über umfassende Repetitorien bis hin zu unserem jährlichen Symposium – 
            wir bieten verschiedene Formate für jeden Weiterbildungsbedarf.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {eventTypes.map((eventType) => {
            const upcomingEvents = getScheduledEventsByType(eventType.id)
              .filter(event => event.status === 'upcoming' || event.status === 'ongoing');
            
            return (
              <EventTypeCard 
                key={eventType.id} 
                eventType={eventType}
                upcomingEvents={upcomingEvents}
              />
            );
          })}
        </div>

        {/* Active Events Section */}
        {activeEvents.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Aktuelle Veranstaltungen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status === 'upcoming' ? 'Bevorstehend' : 'Laufend'}
                    </span>
                    {event.registrationOpen && (
                      <span className="text-xs text-green-600 font-medium">
                        Anmeldung offen
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  
                  <div className="text-sm text-gray-600 mb-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}{event.endDate && ` - ${event.endDate}`}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  {event.price && (
                    <div className="text-sm text-gray-600 mb-4">
                      Teilnahmegebühr: 
                      {event.price.presence && ` ${event.price.presence}€ (Präsenz)`}
                      {event.price.online && ` ${event.price.online}€ (Online)`}
                    </div>
                  )}

                  {event.registrationOpen && (
                    <div className="mt-4">
                      <a 
                        href="/registration" 
                        className="text-sm text-primary hover:text-secondary font-medium"
                      >
                        Jetzt anmelden →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </ContentContainer>

      <CallToAction 
        title="Interesse an unseren Veranstaltungen?"
        description="Melden Sie sich noch heute für eine unserer kommenden Veranstaltungen an oder kontaktieren Sie uns für weitere Informationen."
        buttonText="Zur Anmeldung"
        buttonHref="/registration"
      />
    </div>
  );
}
