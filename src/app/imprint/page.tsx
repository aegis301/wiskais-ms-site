import HeroSection from "@/components/HeroSection";
import ContentContainer from "@/components/ContentContainer";
import { ContentHeading, ContentParagraph } from "@/components/ContentElements";

export const metadata = {
  title: "Impressum - MSREP",
  description: "Impressum der MSREP-Website",
};

export default function Imprint() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Impressum"
        description="Angaben gemäß § 5 TMG"
        backgroundClass="bg-gray-100"
      />

      <ContentContainer maxWidth="4xl" paddingY="xl">
        <ContentHeading level={2}>Anbieter der Website</ContentHeading>
        <ContentParagraph>
          Universitätsklinikum Münster<br />
          Klinik für Anästhesiologie, operative Intensivmedizin und Schmerztherapie<br />
          Albert-Schweitzer-Campus 1, Gebäude A1<br />
          48149 Münster<br />
          Deutschland
        </ContentParagraph>

        <ContentHeading level={2}>Kontakt</ContentHeading>
        <ContentParagraph>
          Telefon: +49 (0) 251 83-47255<br />
          E-Mail: repetitorium@ukmuenster.de<br />
          Website: www.msrep.de
        </ContentParagraph>

        <ContentHeading level={2}>Vertretungsberechtigter</ContentHeading>
        <ContentParagraph>
          Das Universitätsklinikum Münster ist eine Anstalt des öffentlichen Rechts.<br />
          Vertretungsberechtigt ist der Ärztliche Direktor und Vorstandsvorsitzende.
        </ContentParagraph>

        <ContentHeading level={2}>Aufsichtsbehörde</ContentHeading>
        <ContentParagraph>
          Ministerium für Arbeit, Gesundheit und Soziales<br />
          des Landes Nordrhein-Westfalen<br />
          Fürstenwall 25<br />
          40219 Düsseldorf
        </ContentParagraph>

        <ContentHeading level={2}>Umsatzsteuer-Identifikationsnummer</ContentHeading>
        <ContentParagraph>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 126 118 235
        </ContentParagraph>

        <ContentHeading level={2}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</ContentHeading>
        <ContentParagraph>
          Dr. med. Christian Porschen<br />
          Universitätsklinikum Münster<br />
          Klinik für Anästhesiologie, operative Intensivmedizin und Schmerztherapie<br />
          Albert-Schweitzer-Campus 1, Gebäude A1<br />
          48149 Münster
        </ContentParagraph>

        <ContentHeading level={2}>Haftungsausschluss</ContentHeading>
        
        <ContentHeading level={3}>Haftung für Inhalte</ContentHeading>
        <ContentParagraph>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
          unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </ContentParagraph>
        <ContentParagraph>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </ContentParagraph>

        <ContentHeading level={3}>Haftung für Links</ContentHeading>
        <ContentParagraph>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </ContentParagraph>
        <ContentParagraph>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
          Links umgehend entfernen.
        </ContentParagraph>

        <ContentHeading level={3}>Urheberrecht</ContentHeading>
        <ContentParagraph>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
          außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
          bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
          Gebrauch gestattet.
        </ContentParagraph>
        <ContentParagraph>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
          Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
          auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
          Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </ContentParagraph>

        <ContentHeading level={2}>Bildnachweise</ContentHeading>
        <ContentParagraph>
          Die verwendeten Bilder stammen aus eigenen Aufnahmen des Universitätsklinikums Münster oder sind 
          entsprechend lizenziert. Einzelne Bildquellen werden bei Bedarf gesondert ausgewiesen.
        </ContentParagraph>

        <ContentHeading level={2}>Online-Streitbeilegung (OS)</ContentHeading>
        <ContentParagraph>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
        </ContentParagraph>
        <ContentParagraph>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </ContentParagraph>
        
        <ContentParagraph className="text-sm text-gray-600 mt-8">
          Stand: Juli 2025
        </ContentParagraph>
      </ContentContainer>
    </div>
  );
}
