import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSREP - Repetitoriumsveranstaltungen Münster",
  description: "Website der münsteraner Anästhesie- und Intensivmedizin Repetitorien.",
  keywords: ["Anästhesie", "Intensivmedizin", "Repetitorium", "Münster", "Fortbildung"],
  authors: [{ name: "Christian Porschen" }],
  openGraph: {
    title: "MSREP - Repetitoriumsveranstaltungen Münster",
    description: "Website der münsteraner Anästhesie- und Intensivmedizin Repetitorien.",
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
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
