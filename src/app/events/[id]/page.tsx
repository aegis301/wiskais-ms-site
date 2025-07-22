import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailedEvent} from "@/types";

const events: { [key: string]: DetailedEvent } = {
  "anaesthesie-2025": {
    id: "anaesthesie-2025",
    title: "Repetitorium Anästhesiologie 2025",
    date: "10.02.2025 - 14.02.2025",
    location: "Münster & Online",
    description: "Unser Hauptrepetitorium für alle Ärztinnen und Ärzte in der Weiterbildung zum Facharzt/zur Fachärztin für Anästhesiologie.",
    longDescription: "Das primäre Ziel dieser Veranstaltung ist es, all den Ärztinnen und Ärzten, die sich am Ende ihrer Weiterbildungszeit befinden, die Möglichkeit zu geben, sich durch Auffrischung ihres Wissensstandes auf die Prüfung zum Facharzt/zur Fachärztin für Anästhesiologie vorzubereiten. Sie ist darüber hinaus geeignet für alle Fach-, Ober- und Chefärzt*innen, die ihren Wissensstand überprüfen und aktualisieren möchten.",
    image: "/images/pages/monitor.jpg",
    status: "upcoming",
    registrationOpen: true,
    speakers: ["Prof. Dr. Müller", "Dr. Schmidt", "PD Dr. Weber", "Prof. Dr. Fischer"],
    topics: [
      "Pharmakologie der Anästhetika", 
      "Atemwegsmanagement", 
      "Regionalanästhesie", 
      "Intensivmedizin", 
      "Schmerztherapie",
      "Notfallmedizin"
    ],
    schedule: [
      { time: "09:00-10:30", topic: "Pharmakologie der Anästhetika", speaker: "Prof. Dr. Müller" },
      { time: "11:00-12:30", topic: "Atemwegsmanagement", speaker: "Dr. Schmidt" },
      { time: "14:00-15:30", topic: "Regionalanästhesie", speaker: "PD Dr. Weber" },
      { time: "16:00-17:30", topic: "Praktische Workshops", speaker: "Verschiedene Referenten" },
    ],
    price: { presence: 450, online: 350 }
  },
  "intensivmedizin-2025": {
    id: "intensivmedizin-2025",
    title: "Repetitorium Intensivmedizin 2025",
    date: "15.03.2025 - 17.03.2025",
    location: "Münster",
    description: "Spezialisiertes Repetitorium für Intensivmedizin mit praktischen Workshops und Fallbesprechungen.",
    longDescription: "Dieses spezialisierte Repetitorium richtet sich an Ärztinnen und Ärzte, die ihre Kenntnisse in der Intensivmedizin vertiefen möchten. Neben theoretischen Grundlagen stehen praktische Workshops und interaktive Fallbesprechungen im Mittelpunkt.",
    image: "/images/pages/spritzen.jpg",
    status: "upcoming",
    registrationOpen: true,
    speakers: ["Prof. Dr. Koch", "Dr. Bauer", "PD Dr. Lehmann"],
    topics: [
      "Beatmungsmedizin", 
      "Hämodynamisches Monitoring", 
      "Sepsis und ARDS", 
      "Nierenersatzverfahren", 
      "Neurointensivmedizin"
    ],
    schedule: [
      { time: "09:00-10:30", topic: "Beatmungsmedizin", speaker: "Prof. Dr. Koch" },
      { time: "11:00-12:30", topic: "Hämodynamisches Monitoring", speaker: "Dr. Bauer" },
      { time: "14:00-15:30", topic: "Sepsis und ARDS", speaker: "PD Dr. Lehmann" },
    ],
    price: { presence: 350, online: 0 }
  },
  "notfallmedizin-2025": {
    id: "notfallmedizin-2025",
    title: "Workshop Notfallmedizin 2025",
    date: "05.04.2025 - 06.04.2025",
    location: "Münster",
    description: "Praxisnaher Workshop zu aktuellen Themen der Notfallmedizin mit Simulationstraining.",
    longDescription: "In diesem praxisorientierten Workshop werden aktuelle Themen der Notfallmedizin behandelt. Der Fokus liegt auf Simulationstraining und praktischen Übungen, um die Handlungssicherheit in Notfallsituationen zu stärken.",
    image: "/images/pages/rtw.jpg",
    status: "upcoming",
    registrationOpen: false,
    speakers: ["Dr. Wagner", "Prof. Dr. Klein", "Dr. Hoffmann"],
    topics: [
      "Traumamanagement", 
      "Kardiopulmonale Reanimation", 
      "Schockraummanagement", 
      "Präklinische Notfallmedizin"
    ],
    schedule: [
      { time: "09:00-10:30", topic: "Traumamanagement", speaker: "Dr. Wagner" },
      { time: "11:00-12:30", topic: "Kardiopulmonale Reanimation", speaker: "Prof. Dr. Klein" },
      { time: "14:00-15:30", topic: "Simulationstraining", speaker: "Dr. Hoffmann" },
    ],
    price: { presence: 250, online: 0 }
  }
};

export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events[id];
  
  if (!event) {
    return {
      title: "Event nicht gefunden - MSREP",
    };
  }

  return {
    title: `${event.title} - MSREP`,
    description: event.description,
  };
}

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events[id];

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-4">
              {event.title}
            </h1>
            <p className="text-xl sm:text-2xl font-light">
              {event.date} • {event.location}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Über die Veranstaltung
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {event.longDescription}
                </p>
              </div>

              {/* Topics */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Themen
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.topics.map((topic, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Programm (Beispiel Tag 1)
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0">
                      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="font-semibold text-blue-600">
                          {item.time}
                        </div>
                        <div className="font-medium text-gray-900">
                          {item.topic}
                        </div>
                        <div className="text-gray-600">
                          {item.speaker}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Referenten
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {speaker}
                      </h3>
                      <p className="text-gray-600">
                        Experte für Anästhesiologie und Intensivmedizin
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Event Info Card */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Veranstaltungsdetails
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Datum</p>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Ort</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Kosten</p>
                        <p className="text-gray-600">
                          Präsenz: €{event.price.presence}
                          {event.price.online > 0 && (
                            <><br />Online: €{event.price.online}</>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">Status</p>
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
                  </div>
                </div>

                {/* Registration CTA */}
                <div className="bg-blue-600 p-6 rounded-lg text-white text-center">
                  <h3 className="text-xl font-bold mb-4">
                    Jetzt anmelden
                  </h3>
                  <p className="mb-6">
                    Sichern Sie sich Ihren Platz für diese Veranstaltung.
                  </p>
                  {event.registrationOpen ? (
                    <Link
                      href="/registration"
                      className="block w-full bg-white text-blue-600 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors"
                    >
                      Zur Anmeldung
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="block w-full bg-gray-400 text-gray-200 py-3 px-6 rounded-md font-medium cursor-not-allowed"
                    >
                      Anmeldung folgt
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
