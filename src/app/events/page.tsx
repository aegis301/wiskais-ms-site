import Link from "next/link";
import EventCard from "@/components/EventCard";
import { Event } from "@/types";

export const metadata = {
  title: "Veranstaltungen - MSREP",
  description: "Unsere kommenden Repetitoriumsveranstaltungen für Anästhesie und Intensivmedizin",
};

const events: Event[] = [
  {
    id: "anaesthesie-2025",
    title: "Repetitorium Anästhesiologie 2025",
    date: "10.02.2025 - 14.02.2025",
    location: "Münster & Online",
    description: "Unser Hauptrepetitorium für alle Ärztinnen und Ärzte in der Weiterbildung zum Facharzt/zur Fachärztin für Anästhesiologie. Präsenz- und Online-Teilnahme möglich.",
    image: "/images/pages/monitor.jpg",
    status: "completed",
    registrationOpen: false,
  },
  {
    id: "intensivmedizin-2025",
    title: "Repetitorium Intensivmedizin 2025",
    date: "15.03.2025 - 17.03.2025",
    location: "Münster",
    description: "Spezialisiertes Repetitorium für Intensivmedizin mit praktischen Workshops und Fallbesprechungen.",
    image: "/images/pages/spritzen.jpg",
    status: "ongoing",
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
              <EventCard key={event.id} event={event} />
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
