import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Veranstaltungen - MSREP",
  description: "Unsere kommenden Repetitoriumsveranstaltungen für Anästhesie und Intensivmedizin",
};

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: "upcoming" | "ongoing" | "completed";
  registrationOpen: boolean;
}

const events: Event[] = [
  {
    id: "anaesthesie-2025",
    title: "Repetitorium Anästhesiologie 2025",
    date: "10.02.2025 - 14.02.2025",
    location: "Münster & Online",
    description: "Unser Hauptrepetitorium für alle Ärztinnen und Ärzte in der Weiterbildung zum Facharzt/zur Fachärztin für Anästhesiologie. Präsenz- und Online-Teilnahme möglich.",
    image: "/images/pages/monitor.jpg",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "intensivmedizin-2025",
    title: "Repetitorium Intensivmedizin 2025",
    date: "15.03.2025 - 17.03.2025",
    location: "Münster",
    description: "Spezialisiertes Repetitorium für Intensivmedizin mit praktischen Workshops und Fallbesprechungen.",
    image: "/images/pages/spritzen.jpg",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "notfallmedizin-2025",
    title: "Workshop Notfallmedizin 2025",
    date: "05.04.2025 - 06.04.2025",
    location: "Münster",
    description: "Praxisnaher Workshop zu aktuellen Themen der Notfallmedizin mit Simulationstraining.",
    image: "/images/pages/rtw.jpg",
    status: "upcoming",
    registrationOpen: false,
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Unsere Veranstaltungen
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere aktuellen und kommenden Repetitoriumsveranstaltungen für 
              Anästhesie, Intensivmedizin und Notfallmedizin.
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                      event.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status === 'upcoming' && 'Bevorstehend'}
                      {event.status === 'ongoing' && 'Laufend'}
                      {event.status === 'completed' && 'Abgeschlossen'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/events/${event.id}`}
                      className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-center font-medium hover:bg-gray-200 transition-colors"
                    >
                      Details
                    </Link>
                    {event.registrationOpen ? (
                      <Link
                        href="/registration"
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
                      >
                        Anmelden
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="flex-1 bg-gray-300 text-gray-500 px-4 py-2 rounded-md text-center font-medium cursor-not-allowed"
                      >
                        Anmeldung folgt
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Haben Sie Fragen zu unseren Veranstaltungen?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Kontaktieren Sie uns gerne für weitere Informationen oder individuelle Beratung.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
