import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Über uns - MSREP",
  description: "Über uns - Repetitoriumsveranstaltungen Münster",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Über uns"
        description="Erfahren Sie mehr über unsere Repetitoriumsveranstaltungen"
        backgroundClass="bg-gray-200"
      />

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <div className="mb-8">
              <Image 
                src="/images/pages/rtw.jpg" 
                alt="Rettungswagen" 
                width={800} 
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Über uns</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Das primäre Ziel dieser Veranstaltung ist es, all den Ärztinnen und Ärzten, die sich am Ende ihrer 
              Weiterbildungszeit befinden, die Möglichkeit zu geben, sich durch Auffrischung ihres Wissensstandes 
              auf die Prüfung zum Facharzt/ zur Fachärztin für Anästhesiologie vorzubereiten. Sie ist darüber hinaus 
              geeignet für alle Fach-, Ober- und Chefärzt*innen, die ihren Wissensstand überprüfen und aktualisieren möchten.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Wir planen das Repetitorium in Präsenz und hoffen sehr, damit an die Tradition des kollegialen Austauschs 
              der vergangenen Jahre wieder anknüpfen zu können. Um auf die gewandelten Anforderungen nach den Pandemiejahren 
              einzugehen, werden wir die Vorträge gleichzeitig per LiveStream übertragen und On-Demand vom 10.02.-30.05.2025 
              zur Verfügung stellen.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Zur Fortbildung gehört ein Band mit schriftlichen Beiträgen, welcher im Rahmen der Veranstaltung ausgegeben 
              bzw. postalisch zugesandt wird. Wir blicken der Teilnahme in Präsenz mit Freude entgegen und freuen uns neben 
              der fachlichen Diskussion auf die kollegiale Zusammenarbeit im Rahmen der praktischen Workshops ebenso, wie 
              den Austausch beim Get-together am Montagabend.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-lg text-blue-800 font-medium">
                Die Veranstaltung ist im Rahmen der &ldquo;Zertifizierung der ärztlichen Fortbildung&rdquo; der 
                Ärztekammer Westfalen-Lippe anerkannt.
              </p>
            </div>

            <p className="text-lg text-gray-700">
              Wir laden Sie zur Teilnahme am Repetitorium Anästhesiologie herzlich ein und freuen uns, mit Ihnen als 
              Teilnehmenden vor Ort oder online zugeschaltet das Repetitorium durchführen zu dürfen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
