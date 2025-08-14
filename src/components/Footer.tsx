import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <div className="text-xl font-black tracking-tight text-gray-100 uppercase">
                MSREP
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Wissenschaftlicher Kreis Münster - Website des Wissenschaftlichen Arbeitskreises der Klinik für Anästhesiologie, operative Intensivmedizin und Schmerzmedizin der Uniklinik Münster.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Veranstaltungen
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-white transition-colors">
                  Anmeldung
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Rechtliches</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/data-protection" className="text-gray-300 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-gray-300 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} MSREP. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
