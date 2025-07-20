export const metadata = {
  title: "Datenschutz - MSREP",
  description: "Datenschutzerklärung für die MSREP-Website",
};

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Informationen zur Erhebung und Verarbeitung personenbezogener Daten
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Universitätsklinikum Münster<br />
              Klinik für Anästhesiologie, operative Intensivmedizin und Schmerztherapie<br />
              Albert-Schweitzer-Campus 1, Gebäude A1<br />
              48149 Münster<br />
              Deutschland
            </p>
            <p>
              Telefon: +49 (0) 251 83-47255<br />
              E-Mail: repetitorium@ukmuenster.de
            </p>

            <h2>2. Datenschutzbeauftragter</h2>
            <p>
              Bei Fragen zum Datenschutz können Sie sich an unseren Datenschutzbeauftragten wenden:
            </p>
            <p>
              Universitätsklinikum Münster<br />
              Datenschutzbeauftragter<br />
              Albert-Schweitzer-Campus 1, Gebäude A1<br />
              48149 Münster<br />
              E-Mail: datenschutz@ukmuenster.de
            </p>

            <h2>3. Erhebung und Verarbeitung personenbezogener Daten</h2>
            
            <h3>3.1 Besuch unserer Website</h3>
            <p>
              Bei jedem Aufruf unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser 
              automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden 
              temporär in einem sog. Logfile gespeichert.
            </p>
            <p>
              Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
            </ul>

            <h3>3.2 Anmeldung zu Veranstaltungen</h3>
            <p>
              Wenn Sie sich zu einer unserer Veranstaltungen anmelden, erheben wir folgende personenbezogene Daten:
            </p>
            <ul>
              <li>Anrede, Titel, Vor- und Nachname</li>
              <li>Adresse (Straße, PLZ, Ort)</li>
              <li>E-Mail-Adresse</li>
              <li>Klinikadresse (optional)</li>
              <li>Berufsbezeichnung</li>
              <li>EFN-Nummer (optional)</li>
              <li>Teilnahmeart (Präsenz/Online)</li>
            </ul>

            <h3>3.3 Kontaktformular</h3>
            <p>
              Bei der Nutzung unseres Kontaktformulars erheben wir folgende Daten:
            </p>
            <ul>
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Betreff und Nachricht</li>
            </ul>

            <h2>4. Zweck der Datenverarbeitung</h2>
            
            <h3>4.1 Website-Besuch</h3>
            <p>
              Die Verarbeitung der unter 3.1 genannten Daten erfolgt zu folgenden Zwecken:
            </p>
            <ul>
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
              <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>Weitere administrative Zwecke</li>
            </ul>

            <h3>4.2 Veranstaltungsanmeldung</h3>
            <p>
              Die Verarbeitung der Anmeldedaten erfolgt zur:
            </p>
            <ul>
              <li>Durchführung und Organisation der Veranstaltung</li>
              <li>Kommunikation mit den Teilnehmern</li>
              <li>Ausstellung von Teilnahmebescheinigungen</li>
              <li>Erfüllung rechtlicher Verpflichtungen</li>
            </ul>

            <h2>5. Rechtsgrundlage für die Datenverarbeitung</h2>
            <p>
              Art. 6 Abs. 1 lit. a DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine 
              Einwilligung für einen bestimmten Verarbeitungszweck einholen.
            </p>
            <p>
              Art. 6 Abs. 1 lit. b DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, die zur Erfüllung 
              eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich sind.
            </p>
            <p>
              Art. 6 Abs. 1 lit. f DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, die zur Wahrung 
              unserer berechtigten Interessen erforderlich sind.
            </p>

            <h2>6. Speicherdauer</h2>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr 
              erforderlich sind. Bei den personenbezogenen Daten aus dem Anmeldeformular ist dies der Fall, 
              wenn die jeweilige Veranstaltung beendet ist.
            </p>
            <p>
              Die Logfile-Daten werden spätestens nach 30 Tagen automatisch gelöscht.
            </p>

            <h2>7. Ihre Rechte</h2>
            <p>
              Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es 
              stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
            </p>
            
            <h3>7.1 Auskunftsrecht</h3>
            <p>
              Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, 
              die Sie betreffen, von uns verarbeitet werden.
            </p>

            <h3>7.2 Recht auf Berichtigung</h3>
            <p>
              Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, 
              sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.
            </p>

            <h3>7.3 Recht auf Löschung</h3>
            <p>
              Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten 
              unverzüglich gelöscht werden.
            </p>

            <h3>7.4 Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen.
            </p>

            <h3>7.5 Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen 
              bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            </p>

            <h3>7.6 Widerspruchsrecht</h3>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen 
              die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.
            </p>

            <h3>7.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung</h3>
            <p>
              Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen.
            </p>

            <h3>7.8 Automatisierte Entscheidung im Einzelfall einschließlich Profiling</h3>
            <p>
              Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung beruhenden 
              Entscheidung unterworfen zu werden.
            </p>

            <h3>7.9 Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen 
              das Recht auf Beschwerde bei einer Aufsichtsbehörde zu.
            </p>

            <h2>8. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
              SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
              Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <h2>9. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
            
            <p className="text-sm text-gray-600 mt-8">
              Stand: Juli 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
