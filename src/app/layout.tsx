import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wiskais.de'),
  title: "WISKAIS - Wissenschaftlicher Arbeitskreis Anästhesie und Intensivmedizin Münster",
  description: "Website des wissenschaftlichen Arbeitskreises Anästhesie und Intensivmedizin Münster (WISKAIS) mit Informationen zu Repetitoriumsveranstaltungen in Anästhesie und Intensivmedizin.",
  keywords: ["Anästhesie", "Intensivmedizin", "Repetitorium", "Münster", "Fortbildung", "WISKAIS"],
  authors: [{ name: "Christian Porschen" }],
  openGraph: {
    title: "WISKAIS - Wissenschaftlicher Arbeitskreis Anästhesie und Intensivmedizin Münster",
    description: "Website des wissenschaftlichen Arbeitskreises Anästhesie und Intensivmedizin Münster (WISKAIS) mit Informationen zu Repetitoriumsveranstaltungen in Anästhesie und Intensivmedizin.",
    url: "https://www.wiskais.de",
    siteName: "WISKAIS",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
