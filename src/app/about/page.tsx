import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContentContainer from "@/components/ContentContainer";
import ContentElements, { ContentHeading, ContentParagraph, ContentHighlight, ContentList } from "@/components/ContentElements";

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

      <ContentContainer maxWidth="4xl" paddingY="xl">
        <ContentElements
          imageSrc="/images/pages/rtw.jpg"
          imageAlt="Rettungswagen"
          imagePosition="top"
        >
          <ContentHeading level={2}>Über uns</ContentHeading>

          <ContentParagraph>
            <strong>WISKAIS</strong> (Wissenschaftlicher Arbeitskreis Anästhesie, Intensiv- und Schmerzmedizin Münster) ist ein Zusammenschluss von medizinischen Fachkräften im regionalen Weiterbildungsverbund der Kliniken in Münster und Umgebung. Unser Arbeitskreis hat sich zum Ziel gesetzt, die Vielfalt und Dynamik der Anästhesiologie in all ihren Facetten in unseren Weiterbildungsprogrammen zu fördern und abzubilden.
          </ContentParagraph>

          <ContentHeading level={3}>Unsere Mission</ContentHeading>

          <ContentParagraph>
            Wir schaffen hochwertige Fortbildungsformate
            und Weiterbildungsformate
            für Anästhesist:innen jedes Berufsalters
            , die die spannende Bandbreite unseres Faches – von der perioperativen Anästhesie über die Intensivmedizin bis hin zur Notfall- und Schmerzmedizin – allen Kolleginnen und Kollegen nahebringen. Dabei werfen wir bewusst auch einen Blick über den Tellerrand und verbinden fachliche Exzellenz mit persönlichem Austausch.
          </ContentParagraph>

          <ContentHeading level={3}>Was uns auszeichnet</ContentHeading>

          <ContentList type="unordered">
            <li><strong>Praxisrelevante Fortbildungsformate</strong>: Unsere Veranstaltungen kombinieren theoretisches Wissen mit praktischen Workshops und interaktiven Elementen</li>
            <li><strong>Moderne Formate</strong>: Wir bieten sowohl Präsenzveranstaltungen als auch Livestreams und On-Demand-Angebote für maximale Flexibilität</li>
            <li><strong>Persönlicher Austausch</strong>: Get-Together-Veranstaltungen und gemeinsame Pausen fördern den kollegialen Dialog</li>
            <li><strong>Zentrale Lage</strong>: Unsere Veranstaltungen finden im Herzen von Münster statt, teilweise in besonderen Locations wie dem LWL-Museum</li>
          </ContentList>

          <ContentHighlight variant="blue">
            Die Veranstaltung ist im Rahmen der &ldquo;Zertifizierung der ärztlichen Fortbildung&rdquo; der
            Ärztekammer Westfalen-Lippe anerkannt.
          </ContentHighlight>

          <ContentHeading level={3}>Unser Angebot</ContentHeading>

          <ContentParagraph>
            Von quartalsweise stattfindenden `&quot;Art of Anesthesia&quot;` Meetings über spezialisierte Repetitorien, ETC- und Sono-Kursen
            bis hin zu unserem jährlichen Symposium – der WISKAIS bietet ein umfassendes Fortbildungsprogramm für Ärztinnen und Ärzte aller Erfahrungsstufen
          </ContentParagraph>
        </ContentElements>
      </ContentContainer>
    </div>
  );
}
