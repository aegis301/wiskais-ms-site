import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContentElements, { ContentHeading, ContentParagraph, ContentHighlight } from "@/components/ContentElements";

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

      <ContentElements
        imageSrc="/images/pages/rtw.jpg"
        imageAlt="Rettungswagen"
      >
        <ContentHeading level={2}>Über uns</ContentHeading>
        
        <ContentParagraph>
          Das primäre Ziel dieser Veranstaltung ist es, all den Ärztinnen und Ärzten, die sich am Ende ihrer 
          Weiterbildungszeit befinden, die Möglichkeit zu geben, sich durch Auffrischung ihres Wissensstandes 
          auf die Prüfung zum Facharzt/ zur Fachärztin für Anästhesiologie vorzubereiten. Sie ist darüber hinaus 
          geeignet für alle Fach-, Ober- und Chefärzt*innen, die ihren Wissensstand überprüfen und aktualisieren möchten.
        </ContentParagraph>

        <ContentParagraph>
          Wir planen das Repetitorium in Präsenz und hoffen sehr, damit an die Tradition des kollegialen Austauschs 
          der vergangenen Jahre wieder anknüpfen zu können. Um auf die gewandelten Anforderungen nach den Pandemiejahren 
          einzugehen, werden wir die Vorträge gleichzeitig per LiveStream übertragen und On-Demand vom 10.02.-30.05.2025 
          zur Verfügung stellen.
        </ContentParagraph>

        <ContentParagraph>
          Zur Fortbildung gehört ein Band mit schriftlichen Beiträgen, welcher im Rahmen der Veranstaltung ausgegeben 
          bzw. postalisch zugesandt wird. Wir blicken der Teilnahme in Präsenz mit Freude entgegen und freuen uns neben 
          der fachlichen Diskussion auf die kollegiale Zusammenarbeit im Rahmen der praktischen Workshops ebenso, wie 
          den Austausch beim Get-together am Montagabend.
        </ContentParagraph>

        <ContentHighlight variant="blue">
          Die Veranstaltung ist im Rahmen der &ldquo;Zertifizierung der ärztlichen Fortbildung&rdquo; der 
          Ärztekammer Westfalen-Lippe anerkannt.
        </ContentHighlight>

        <ContentParagraph>
          Wir laden Sie zur Teilnahme am Repetitorium Anästhesiologie herzlich ein und freuen uns, mit Ihnen als 
          Teilnehmenden vor Ort oder online zugeschaltet das Repetitorium durchführen zu dürfen.
        </ContentParagraph>
      </ContentElements>
    </div>
  );
}
