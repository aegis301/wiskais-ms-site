import { Metadata } from 'next';
import EventCalendar from '@/components/EventCalendar';
import { scheduledEvents, eventTypes } from '@/data/events';

export const metadata: Metadata = {
  title: 'Kalender | WISKAIS',
  description: 'Alle WISKAIS Veranstaltungen in der Kalenderansicht. Entdecken Sie AoA-Meetings, Symposien und Repetitorien in Anästhesiologie und Intensivmedizin.',
  keywords: ['WISKAIS', 'Kalender', 'Veranstaltungen', 'Anästhesiologie', 'Intensivmedizin', 'Münster', 'Weiterbildung', 'Termine'],
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Veranstaltungskalender
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Alle WISKAIS Veranstaltungen in der Übersicht. Klicken Sie auf eine Veranstaltung 
              für Details oder exportieren Sie Termine direkt in Ihren Kalender.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EventCalendar 
          scheduledEvents={scheduledEvents}
          eventTypes={eventTypes}
        />
      </div>

      {/* Legend Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Legende
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventTypes.map(eventType => (
              <div key={eventType.id} className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded"
                  style={{ 
                    backgroundColor: eventType.id === 'aoa-meeting' ? '#003866' :
                                    eventType.id === 'aoa-symposium' ? '#4338ca' :
                                    eventType.id === 'repetitorium-anaesthesie' ? '#059669' :
                                    eventType.id === 'repetitorium-intensivmedizin' ? '#7c3aed' :
                                    '#6b7280'
                  }}
                />
                <span className="text-sm text-gray-700">{eventType.title}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Status-Anzeigen</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-600"></div>
                <span className="text-sm text-gray-600">Bevorstehend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500"></div>
                <span className="text-sm text-gray-600">Laufend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-400"></div>
                <span className="text-sm text-gray-600">Abgeschlossen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Anmeldung offen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Kalender-Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Verschiedene Ansichten</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Monats-, Wochen- und Tagesansicht für optimale Übersicht
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Kalender-Export</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Exportieren Sie Termine direkt in Ihren persönlichen Kalender
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Smart Filter</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Filtern Sie nach Veranstaltungstypen für bessere Übersicht
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
