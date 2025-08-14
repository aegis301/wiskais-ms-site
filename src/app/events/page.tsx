import Link from "next/link";
import EventCard from "@/components/EventCard";
import HeroSection from "@/components/HeroSection";
import CallToAction from "@/components/CallToAction";
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
      <HeroSection
        title="Unsere Veranstaltungen"
        description="Entdecken Sie unsere aktuellen und kommenden Repetitoriumsveranstaltungen für Anästhesie, Intensivmedizin und Notfallmedizin."
      />

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

      <CallToAction
        title="Haben Sie Fragen zu unseren Veranstaltungen?"
        description="Kontaktieren Sie uns gerne für weitere Informationen oder individuelle Beratung."
        buttonText="Kontakt aufnehmen"
        buttonHref="/contact"
      />
    </div>
  );
}
