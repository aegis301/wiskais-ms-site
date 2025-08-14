import HeroSection from "@/components/HeroSection";
import ContentContainer from "@/components/ContentContainer";
import { ContentHeading, ContentParagraph } from "@/components/ContentElements";

export const metadata = {
  title: "Datenschutz - MSREP",
  description: "Datenschutzerklärung für die MSREP-Website",
};

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Datenschutzerklärung"
        description="Informationen zur Erhebung und Verarbeitung personenbezogener Daten"
        backgroundClass="bg-gray-100"
      />

      <ContentContainer maxWidth="4xl" paddingY="xl">
        <ContentHeading level={2}>1. Verantwortlicher</ContentHeading>
        <ContentParagraph>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </ContentParagraph>
        <ContentParagraph>
          Universitätsklinikum Münster<br />
          Klinik für Anästhesiologie, operative Intensivmedizin und Schmerztherapie<br />
          Albert-Schweitzer-Campus 1, Gebäude A1<br />
          48149 Münster<br />
          Deutschland
        </ContentParagraph>
        <ContentParagraph>
          Telefon: +49 (0) 251 83-47255<br />
          E-Mail: repetitorium@ukmuenster.de
        </ContentParagraph>

        <ContentHeading level={2}>2. Datenschutzbeauftragter</ContentHeading>
        <ContentParagraph>
          Bei Fragen zum Datenschutz können Sie sich an unseren Datenschutzbeauftragten wenden:
        </ContentParagraph>
        <ContentParagraph>
          Universitätsklinikum Münster<br />
          Datenschutzbeauftragter<br />
          Albert-Schweitzer-Campus 1, Gebäude A1<br />
          48149 Münster<br />
          Deutschland<br />
          E-Mail: datenschutz@ukmuenster.de
        </ContentParagraph>

        <ContentHeading level={2}>3. Erhebung und Verarbeitung personenbezogener Daten</ContentHeading>
        
        <ContentHeading level={3}>3.1 Besuch unserer Website</ContentHeading>
        <ContentParagraph>
          Bei jedem Aufruf unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser 
          automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden 
          temporär in einem sog. Logfile gespeichert.
        </ContentParagraph>
        <ContentParagraph>
          Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
        </ContentParagraph>
        <div className="prose prose-lg max-w-none mb-6">
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
          </ul>
        </div>

        <ContentHeading level={3}>3.2 Anmeldung zu Veranstaltungen</ContentHeading>
        <ContentParagraph>
          Wenn Sie sich zu einer unserer Veranstaltungen anmelden, erheben wir folgende personenbezogene Daten:
        </ContentParagraph>
        <div className="prose prose-lg max-w-none mb-6">
          <ul>
            <li>Anrede, Titel, Vor- und Nachname</li>
            <li>Adresse (Straße, PLZ, Ort)</li>
            <li>E-Mail-Adresse</li>
            <li>Klinikadresse (optional)</li>
            <li>Berufsbezeichnung</li>
            <li>EFN-Nummer (optional)</li>
            <li>Teilnahmeart (Präsenz/Online)</li>
          </ul>
        </div>

        <ContentHeading level={3}>3.3 Kontaktformular</ContentHeading>
        <ContentParagraph>
          Bei der Nutzung unseres Kontaktformulars erheben wir folgende Daten:
        </ContentParagraph>
        <div className="prose prose-lg max-w-none mb-6">
          <ul>
            <li>Vor- und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Betreff und Nachricht</li>
          </ul>
        </div>

        <ContentHeading level={2}>4. Zweck der Datenverarbeitung</ContentHeading>
        
        <ContentHeading level={3}>4.1 Website-Besuch</ContentHeading>
        <ContentParagraph>
          Die Verarbeitung der unter 3.1 genannten Daten erfolgt zu folgenden Zwecken:
        </ContentParagraph>
        <div className="prose prose-lg max-w-none mb-6">
          <ul>
            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
            <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
            <li>Auswertung der Systemsicherheit und -stabilität</li>
            <li>Weitere administrative Zwecke</li>
          </ul>
        </div>

        <ContentHeading level={3}>4.2 Veranstaltungsanmeldung</ContentHeading>
        <ContentParagraph>
          Die Verarbeitung der Anmeldedaten erfolgt zur:
        </ContentParagraph>
        <div className="prose prose-lg max-w-none mb-6">
          <ul>
            <li>Durchführung und Organisation der Veranstaltung</li>
            <li>Kommunikation mit den Teilnehmern</li>
            <li>Ausstellung von Teilnahmebescheinigungen</li>
            <li>Erfüllung rechtlicher Verpflichtungen</li>
          </ul>
        </div>

        <ContentHeading level={2}>5. Rechtsgrundlage für die Datenverarbeitung</ContentHeading>
        <ContentParagraph>
          Art. 6 Abs. 1 lit. a DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine 
          Einwilligung für einen bestimmten Verarbeitungszweck einholen.
        </ContentParagraph>
        <ContentParagraph>
          Art. 6 Abs. 1 lit. b DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, die zur Erfüllung 
          eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich sind.
        </ContentParagraph>
        <ContentParagraph>
          Art. 6 Abs. 1 lit. f DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, die zur Wahrung 
          unserer berechtigten Interessen erforderlich sind.
        </ContentParagraph>

        <ContentHeading level={2}>6. Speicherdauer</ContentHeading>
        <ContentParagraph>
          Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr 
          erforderlich sind. Bei den personenbezogenen Daten aus dem Anmeldeformular ist dies der Fall, 
          wenn die jeweilige Veranstaltung beendet ist.
        </ContentParagraph>
        <ContentParagraph>
          Die Logfile-Daten werden spätestens nach 30 Tagen automatisch gelöscht.
        </ContentParagraph>

        <ContentHeading level={2}>7. Ihre Rechte</ContentHeading>
        <ContentParagraph>
          Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es 
          stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
        </ContentParagraph>
        
        <ContentHeading level={3}>7.1 Auskunftsrecht</ContentHeading>
        <ContentParagraph>
          Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, 
          die Sie betreffen, von uns verarbeitet werden.
        </ContentParagraph>

        <ContentHeading level={3}>7.2 Recht auf Berichtigung</ContentHeading>
        <ContentParagraph>
          Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, 
          sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.
        </ContentParagraph>

        <ContentHeading level={3}>7.3 Recht auf Löschung</ContentHeading>
        <ContentParagraph>
          Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten 
          unverzüglich gelöscht werden.
        </ContentParagraph>

        <ContentHeading level={3}>7.4 Recht auf Einschränkung der Verarbeitung</ContentHeading>
        <ContentParagraph>
          Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen.
        </ContentParagraph>

        <ContentHeading level={3}>7.5 Recht auf Datenübertragbarkeit</ContentHeading>
        <ContentParagraph>
          Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen 
          bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
        </ContentParagraph>

        <ContentHeading level={3}>7.6 Widerspruchsrecht</ContentHeading>
        <ContentParagraph>
          Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen 
          die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.
        </ContentParagraph>

        <ContentHeading level={3}>7.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</ContentHeading>
        <ContentParagraph>
          Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen.
        </ContentParagraph>

        <ContentHeading level={3}>7.8 Automatisierte Entscheidung im Einzelfall einschließlich Profiling</ContentHeading>
        <ContentParagraph>
          Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung beruhenden 
          Entscheidung unterworfen zu werden.
        </ContentParagraph>

        <ContentHeading level={3}>7.9 Recht auf Beschwerde bei einer Aufsichtsbehörde</ContentHeading>
        <ContentParagraph>
          Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen 
          das Recht auf Beschwerde bei einer Aufsichtsbehörde zu.
        </ContentParagraph>

        <ContentHeading level={2}>8. SSL-/TLS-Verschlüsselung</ContentHeading>
        <ContentParagraph>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
          SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
          Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </ContentParagraph>

        <ContentHeading level={2}>9. Änderungen dieser Datenschutzerklärung</ContentHeading>
        <ContentParagraph>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
          Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
        </ContentParagraph>
        
        <ContentParagraph className="text-sm text-gray-600 mt-8">
          Stand: Juli 2025
        </ContentParagraph>
      </ContentContainer>
    </div>
  );
}
