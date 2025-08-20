/**
 * Blog Data
 * 
 * Blog posts, authors, and related content for the WISKAIS blog.
 * This includes news, event updates, announcements, and general information.
 */

import { BlogPost, BlogAuthor, BlogCategory } from '@/types/common';

// Blog Authors
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'wiskais-team',
    name: 'WISKAIS Team',
    role: 'Redaktion',
    avatar: '/images/global/author.jpeg',
    bio: 'Das WISKAIS-Team organisiert und koordiniert alle Veranstaltungen und Aktivitäten des wissenschaftlichen Arbeitskreises.'
  },
  {
    id: 'dr-mueller',
    name: 'Dr. med. Schmidt',
    role: 'Wissenschaftlicher Leiter',
    avatar: '/images/global/author.jpeg',
    bio: 'Facharzt für Anästhesiologie und Intensivmedizin, wissenschaftlicher Leiter des WISKAIS-Programms.'
  },
  {
    id: 'prof-weber',
    name: 'Prof. Dr. med. Weber',
    role: 'Direktor',
    avatar: '/images/global/author.jpeg',
    bio: 'Direktor der Klinik für Anästhesiologie und operative Intensivmedizin, Universitätsklinikum Münster.'
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 'aoa-symposium-2025-announcement',
    title: 'Art of Anesthesia Symposium 2025: Jetzt anmelden!',
    slug: 'aoa-symposium-2025-anmeldung-offen',
    excerpt: 'Das diesjährige Art of Anesthesia Symposium findet am 29. November 2025 statt. Freuen Sie sich auf spannende Vorträge und neueste Entwicklungen in der Anästhesiologie und Intensivmedizin.',
    content: `
Das Art of Anesthesia Symposium 2025 verspricht eine außergewöhnliche Veranstaltung zu werden. Am 29. November 2025 treffen sich Experten aus ganz Deutschland im Kongresszentrum Münster, um über die neuesten Entwicklungen in der Anästhesiologie und Intensivmedizin zu diskutieren.

## Programm-Highlights

**Neue Entwicklungen in der Anästhesiologie**
Prof. Dr. med. H. Herz wird über die revolutionären Fortschritte in der perioperativen Medizin sprechen und dabei besonders auf personalisierte Anästhesieverfahren eingehen.

**Fortschritte in der Intensivmedizin**
Dr. med. L. Lunge präsentiert die neuesten Erkenntnisse zur Beatmungstherapie und deren Auswirkungen auf die Patientenversorgung.

**Digitalisierung im OP**
Die Zukunft der digitalisierten Anästhesie wird von Prof. Dr. med. N. Niere vorgestellt, einschließlich KI-gestützter Überwachungssysteme.

## Anmeldung und Details

- **Datum:** 29. November 2025
- **Ort:** Kongresszentrum Münster
- **Teilnahmegebühr:** 180€ (Studenten: 90€)
- **CME-Punkte:** 6 Punkte
- **Anmeldeschluss:** 15. November 2025

Die Anmeldung ist ab sofort möglich. Nutzen Sie die Gelegenheit für wertvollen Austausch mit Kollegen und Experten aus der Region.
    `,
    category: 'events',
    status: 'published',
    publishedAt: '2025-08-10T10:00:00Z',
    author: blogAuthors[0],
    featuredImage: '/images/events/rtw.jpg',
    tags: ['AoA-Symposium', 'Anmeldung', 'Weiterbildung', 'CME'],
    readingTime: 3,
    relatedEvents: ['aoa-symposium-2025']
  },
  {
    id: 'quarterly-meeting-q3-recap',
    title: 'AoA-Meeting Q3 2025: Regionalanästhesie im Fokus',
    slug: 'aoa-meeting-q3-2025-regionalanaesthesie',
    excerpt: 'Rückblick auf das erfolgreiche AoA-Meeting Q3 2025 mit dem Schwerpunkt Regionalanästhesie. Über 100 Teilnehmer diskutierten moderne Techniken und Verfahren.',
    content: `
Das AoA-Meeting Q3 2025 war ein voller Erfolg! Am 19. September trafen sich über 100 medizinische Fachkräfte im LWL-Museum Münster, um sich über die neuesten Entwicklungen in der Regionalanästhesie zu informieren.

## Veranstaltungs-Highlights

**Moderne Ultraschall-gestützte Verfahren**
Dr. med. Regional führte durch die aktuellen Standards der sonographisch geleiteten Nervenblockaden und demonstrierte innovative Techniken am Phantom.

**Komplikationsmanagement**
Prof. Dr. med. Sicherheit behandelte systematische Ansätze zur Vermeidung und Behandlung von Komplikationen bei Regionalanästhesieverfahren.

**Interaktive Workshops**
In kleinen Gruppen konnten die Teilnehmer praktische Fertigkeiten vertiefen und sich direkt mit den Experten austauschen.

## Feedback und Ausblick

Die Teilnehmer bewerteten die Veranstaltung durchweg positiv. Besonders geschätzt wurden:
- Die praxisnahen Fallbeispiele
- Der intensive Austausch zwischen den Kollegen
- Die hohe Qualität der Vorträge

Das nächste AoA-Meeting findet im Dezember 2025 statt. Thema wird die "Perioperative Schmerztherapie" sein.

## CME-Punkte

Alle Teilnehmer erhalten 4 CME-Punkte der Ärztekammer Westfalen-Lippe. Die Zertifikate werden in den kommenden Tagen verschickt.
    `,
    category: 'events',
    status: 'published',
    publishedAt: '2025-08-12T14:30:00Z',
    author: blogAuthors[1],
    featuredImage: '/images/events/rtw.jpg',
    tags: ['AoA-Meeting', 'Regionalanästhesie', 'Rückblick', 'CME'],
    readingTime: 4,
    relatedEvents: ['aoa-meeting-q3-2025']
  },
  {
    id: 'new-repetitorium-format',
    title: 'Neues Format: Repetitorium Intensivmedizin ab 2026',
    slug: 'repetitorium-intensivmedizin-neues-format-2026',
    excerpt: 'Ab 2026 führen wir ein überarbeitetes Format für das Repetitorium Intensivmedizin ein. Mehr Praxis, modernere Inhalte und erweiterte Online-Komponenten.',
    content: `
Wir freuen uns, Ihnen mitteilen zu können, dass das Repetitorium Intensivmedizin ab 2026 in einem komplett überarbeiteten Format angeboten wird.

## Was ändert sich?

**Erweiterte Online-Komponenten**
Zusätzlich zur Präsenzveranstaltung bieten wir umfangreiche Online-Inhalte, die eine flexible Vor- und Nachbereitung ermöglichen.

**Mehr Praxisbezug**
Der Anteil an praktischen Übungen und Simulationen wird deutlich erhöht. Neue Simulatoren ermöglichen realitätsnahes Training.

**Modularer Aufbau**
Das Repetitorium wird in thematische Module unterteilt, die auch einzeln buchbar sind:
- Beatmungstherapie
- Hämodynamisches Monitoring
- Sepsis und Infektiologie
- Nierenersatzverfahren

## Zielgruppe

Das überarbeitete Format richtet sich an:
- Assistenzärzte in der Weiterbildung Anästhesiologie
- Fachärzte zur Auffrischung
- Pflegekräfte der Intensivstation
- Anästhesietechnische Assistenten

## Termine und Anmeldung

Das erste Repetitorium im neuen Format findet vom 14.-16. März 2026 statt. Die Anmeldung wird ab Januar 2026 möglich sein.

Frühanmelder-Rabatt: 10% bei Anmeldung bis 15. Februar 2026.

## Feedback erwünscht

Haben Sie Anregungen oder Wünsche für das neue Format? Wir freuen uns über Ihr Feedback unter [feedback@wiskais.de](mailto:feedback@wiskais.de).
    `,
    category: 'announcements',
    status: 'published',
    publishedAt: '2025-08-08T09:15:00Z',
    author: blogAuthors[2],
    featuredImage: '/images/events/rtw.jpg',
    tags: ['Repetitorium', 'Intensivmedizin', 'Innovation', 'Online-Learning'],
    readingTime: 3,
    relatedEvents: ['repetitorium-intensivmedizin']
  },
  {
    id: 'partnership-announcement',
    title: 'Neue Kooperationen stärken das WISKAIS-Netzwerk',
    slug: 'neue-kooperationen-wiskais-netzwerk',
    excerpt: 'WISKAIS baut sein Netzwerk aus: Neue Partnerschaften mit führenden Kliniken der Region ermöglichen erweiterte Weiterbildungsangebote und besseren Wissensaustausch.',
    content: `
Das WISKAIS-Netzwerk wächst kontinuierlich! Wir freuen uns, neue Kooperationen mit renommierten medizinischen Einrichtungen bekannt zu geben.

## Neue Partner

**Universitätsklinikum Osnabrück**
Durch die Partnerschaft mit dem Klinikum Osnabrück können wir unser Angebot im Bereich der Kinderanästhesie deutlich erweitern.

**St. Franziskus-Hospital Münster**
Das St. Franziskus-Hospital bringt besondere Expertise in der kardioanästhesiologischen Versorgung ein.

**Herz-Jesu-Krankenhaus Hiltrup**
Schwerpunkt der Kooperation liegt auf der Schmerztherapie und ambulanten Anästhesie.

## Vorteile für Teilnehmer

Die erweiterten Partnerschaften bringen konkrete Vorteile:

- **Mehr Expertise:** Zugang zu spezialisierten Referenten
- **Praxisvielfalt:** Einblicke in verschiedene Klinikstrukturen
- **Netzwerk:** Erweiterte Kontaktmöglichkeiten
- **Innovation:** Austausch über neue Behandlungskonzepte

## Gemeinsame Projekte

Geplant sind gemeinsame Projekte wie:
- Interdisziplinäre Fallkonferenzen
- Rotationsprogramme für Assistenzärzte
- Gemeinsame Forschungsinitiativen
- Überregionale Qualitätszirkel

## Ausblick

Diese Partnerschaften sind erst der Anfang. Wir arbeiten bereits an weiteren Kooperationen, um das WISKAIS-Netzwerk stetig zu erweitern und die Qualität unserer Weiterbildungsangebote zu verbessern.

Haben Sie Interesse an einer Partnerschaft mit WISKAIS? Kontaktieren Sie uns gerne unter [partnerschaften@wiskais.de](mailto:partnerschaften@wiskais.de).
    `,
    category: 'news',
    status: 'published',
    publishedAt: '2025-08-05T11:20:00Z',
    author: blogAuthors[0],
    featuredImage: '/images/events/rtw.jpg',
    tags: ['Partnerschaft', 'Netzwerk', 'Kooperationen', 'Expansion'],
    readingTime: 4
  },
  {
    id: 'cme-accreditation-renewed',
    title: 'CME-Akkreditierung für weitere 3 Jahre verlängert',
    slug: 'cme-akkreditierung-verlaengert-2025',
    excerpt: 'Die Ärztekammer Westfalen-Lippe hat die CME-Akkreditierung für WISKAIS-Veranstaltungen um weitere drei Jahre verlängert. Alle Veranstaltungen sind weiterhin zertifiziert.',
    content: `
Ausgezeichnete Nachrichten für alle Teilnehmer unserer Veranstaltungen: Die Ärztekammer Westfalen-Lippe hat die CME-Akkreditierung für WISKAIS um weitere drei Jahre verlängert!

## Was bedeutet das?

Die Verlängerung der Akkreditierung bestätigt die hohe Qualität unserer Weiterbildungsveranstaltungen und garantiert:

- **Anerkannte CME-Punkte** für alle Veranstaltungen
- **Qualitätsstandard** nach den Richtlinien der Bundesärztekammer
- **Nachweis** für das persönliche CME-Konto
- **Zertifizierung** aller Formate

## Punkteverteilung

Unsere Veranstaltungen bieten folgende CME-Punkte:
- **AoA-Meetings:** 4 Punkte pro Quartal
- **AoA-Symposium:** 6 Punkte jährlich
- **Repetitorium Anästhesiologie:** 15 Punkte
- **Repetitorium Intensivmedizin:** 12 Punkte

## Qualitätssicherung

Die erneute Akkreditierung erfolgte nach strenger Prüfung folgender Kriterien:
- Wissenschaftliche Qualität der Inhalte
- Qualifikation der Referenten
- Evaluation durch Teilnehmer
- Neutralität und Unabhängigkeit

## Teilnehmerfeedback

Bei der Akkreditierungsprüfung wurde besonders das positive Teilnehmerfeedback gewürdigt:
- 96% Zufriedenheitsrate
- Durchschnittsnote: 1,3
- 98% Weiterempfehlungsrate

## Dank an alle Beteiligten

Dieser Erfolg ist nur durch das Engagement aller Beteiligten möglich:
- Unsere Referenten für exzellente Vorträge
- Das Organisationsteam für professionelle Abwicklung
- Die Teilnehmer für konstruktives Feedback

Wir freuen uns auf weitere drei Jahre qualitativ hochwertiger Weiterbildung!
    `,
    category: 'announcements',
    status: 'published',
    publishedAt: '2025-08-01T08:00:00Z',
    author: blogAuthors[1],
    featuredImage: '/images/events/rtw.jpg',
    tags: ['CME', 'Akkreditierung', 'Qualität', 'Zertifizierung'],
    readingTime: 3
  }
];

// Helper functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.status === 'published');
};

export const getPublishedBlogPosts = (): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.tags.includes(tag) && post.status === 'published'
  );
};

export const getRecentBlogPosts = (limit: number = 3): BlogPost[] => {
  return getPublishedBlogPosts().slice(0, limit);
};

export const getAllBlogTags = (): string[] => {
  const tags = blogPosts.flatMap(post => post.tags);
  return [...new Set(tags)].sort();
};

export const getAllBlogCategories = (): BlogCategory[] => {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
};
