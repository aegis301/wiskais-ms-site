/**
 * Events Data
 * 
 * Centralized data file for all WISKAIS events including event types,
 * upcoming events, and scheduled dates.
 */

import { 
  EventType, 
  ScheduledEvent, 
  EventScheduleItem 
} from '@/types/common';

// Event Types - Core event formats
export const eventTypes: EventType[] = [
  {
    id: 'aoa-meeting',
    title: 'AoA-Meeting',
    shortTitle: 'AoA-Meeting',
    description: 'Im regionalen Weiterbildungsverbund der Kliniken in Münster und Umgebung führen wir seit dem Frühjahr 2025 einmal pro Quartal ein neues Weiterbildungsformat für Ärztinnen und Ärzte in Weiterbildung, Fach- und Oberärzt*innen unter dem Titel „The Art of Anesthesia" durch. Hierbei wollen wir die spannende Bandbreite unseres wundervollen Fachs allen Kolleginnen und Kollegen nahebringen und an geeigneter Stelle auch einen Blick über den Tellerrand werfen.',
    topics: [
      'Perioperative Anästhesie',
      'Aktuelle Entwicklungen',
      'Interdisziplinärer Austausch',
      'Praxisrelevante Fallbesprechungen',
      'Innovative Anästhesieverfahren'
    ],
    features: [
      'Quartalsweise Veranstaltungen',
      'Interdisziplinärer Ansatz',
      'Präsenzveranstaltung im LWL-Museum Münster',
      'Networking mit regionalen Kolleg*innen',
      'ÄKWL-zertifiziert'
    ],
    cmePoints: 4,
    image: '/images/events/rtw.jpg',
    category: 'meeting'
  },
  {
    id: 'aoa-symposium',
    title: 'AoA-Symposium',
    shortTitle: 'AoA-Symposium',
    description: 'Das Fach Anästhesiologie ist vielfältig und umfasst unterschiedlichste Aspekte aus den Bereichen perioperative Anästhesie, Intensivmedizin, Notfall- und Schmerzmedizin. Wir wollen die Vielfältigkeit und die Dynamik unseres Faches feiern und laden Sie ganz herzlich zum Art of Anesthesia Symposium am 1. Adventswochenende nach Münster ein. Es erwarten Sie spannende Einblicke in neue Entwicklungen und praxisrelevanten Fortschritte in der Anästhesiologie und Intensivmedizin, vorgetragen durch namhafte Expert*innen auf dem Gebiet.',
    topics: [
      'Neue Entwicklungen in der Anästhesiologie',
      'Fortschritte in der Intensivmedizin',
      'Notfallmedizin',
      'Schmerzmedizin',
      'Perioperative Medizin',
      'Digitalisierung in der Anästhesie'
    ],
    features: [
      'Jährliches Hauptsymposium',
      'Namhafte Expert*innen als Referent*innen',
      'Gemeinsames Mittagessen inklusive',
      'Besonderer Vortrag',
      'Optionaler Besuch des Weihnachtsmarkts',
      'ÄKWL-zertifiziert'
    ],
    cmePoints: 8,
    image: '/images/events/rtw.jpg',
    category: 'symposium'
  },
  {
    id: 'repetitorium-anaesthesie',
    title: 'Repetitorium Anästhesiologie',
    shortTitle: 'Rep. Anästhesiologie',
    description: 'Das Repetitorium Anästhesiologie richtet sich an Ärzt*innen in der Weiterbildung. Es bietet eine umfassende Wiederholung von AINS-Grundlagen sowie vertiefende Vorträge. Es bietet eine exzellente Gelegenheit für die Vorbereitung auf die Facharztprüfung Anästhesiologie und Intensivmedizin oder auch um generell sein AINS-Wissen aufzufrischen.',
    topics: [
      'AINS-Grundlagen',
      'Pharmakologie in der Anästhesie',
      'Regionalanästhesie',
      'Atemwegsmanagement',
      'Perioperatives Management',
      'Komplikationsmanagement',
      'Monitoring und Überwachung',
      'Spezielle Anästhesieverfahren'
    ],
    features: [
      'Präsenz- und Online-Teilnahme möglich',
      'Livestream verfügbar',
      '3 Monate On-Demand verfügbar',
      'Schriftliche Beiträge (Buchband)',
      'Praxisorientierte Workshops',
      'Get-Together für Networking',
      'ÄKWL-zertifiziert'
    ],
    cmePoints: 20,
    image: '/images/events/rtw.jpg',
    category: 'repetitorium'
  },
  {
    id: 'repetitorium-intensivmedizin',
    title: 'Repetitorium Intensivmedizin',
    shortTitle: 'Rep. Intensivmedizin',
    description: 'Das Repetitorium Intensivmedizin bietet allen Ärzt*innen am Ende ihrer Weiterbildungszeit die Möglichkeit sich durch Auffrischung ihres Wissensstandes für den Einsatz auf der Intensivstation und die Prüfung der Zusatzweiterbildung Spezielle Intensivmedizin vorzubereiten. Darüber hinaus können auch alle Fach-, Ober- und Chefärzt*innen sich hier auf den letzten Stand bringen.',
    topics: [
      'Respiratormedizin',
      'Hämodynamik und Kreislauf',
      'Sepsis und Infektiologie',
      'Nierenersatzverfahren',
      'Neurointensivmedizin',
      'Ernährung auf der Intensivstation',
      'Ethik in der Intensivmedizin',
      'Qualitätsmanagement'
    ],
    features: [
      'Präsenz- und Online-Teilnahme möglich',
      'Livestream verfügbar',
      '3 Monate On-Demand verfügbar',
      'Schriftliche Beiträge (Buchband)',
      'Praktische Workshops',
      'Get-Together für persönlichen Austausch',
      'ÄKWL-zertifiziert'
    ],
    cmePoints: 15,
    image: '/images/events/rtw.jpg',
    category: 'repetitorium'
  }
];

// Scheduled Events - Specific dates and instances
export const scheduledEvents: ScheduledEvent[] = [
  // AoA-Meetings (Quarterly)
  {
    id: 'aoa-meeting-q1-2025',
    eventTypeId: 'aoa-meeting',
    title: 'AoA-Meeting Q1 2025: Perioperative Optimierung',
    date: '2025-03-15',
    location: 'LWL-Museum Münster',
    locationDetails: 'Auditorium, Domplatz 10, 48143 Münster',
    status: 'completed',
    registrationOpen: false,
    speakers: ['Prof. Dr. med. M. Mustermann', 'Dr. med. A. Beispiel'],
    schedule: [
      { time: '09:00', title: 'Begrüßung und Einführung', type: 'presentation' },
      { time: '09:15', title: 'Perioperative Optimierung: Neue Ansätze', speaker: 'Prof. Dr. med. M. Mustermann', type: 'presentation' },
      { time: '10:00', title: 'Kaffeepause', type: 'break' },
      { time: '10:30', title: 'Enhanced Recovery Protokolle', speaker: 'Dr. med. A. Beispiel', type: 'presentation' },
      { time: '11:15', title: 'Diskussion und Networking', type: 'discussion' }
    ]
  },
  {
    id: 'aoa-meeting-q2-2025',
    eventTypeId: 'aoa-meeting',
    title: 'AoA-Meeting Q2 2025: Digitalisierung in der Anästhesie',
    date: '2025-06-20',
    location: 'LWL-Museum Münster',
    locationDetails: 'Auditorium, Domplatz 10, 48143 Münster',
    status: 'completed',
    registrationOpen: true,
    registrationDeadline: '2025-06-13',
    speakers: ['Dr. med. T. Digital', 'Prof. Dr. med. K. Innovation'],
    maxParticipants: 120
  },
  {
    id: 'aoa-meeting-q3-2025',
    eventTypeId: 'aoa-meeting',
    title: 'AoA-Meeting Q3 2025: Regionalanästhesie Update',
    date: '2025-09-19',
    location: 'LWL-Museum Münster',
    locationDetails: 'Auditorium, Domplatz 10, 48143 Münster',
    status: 'upcoming',
    registrationOpen: false
  },

  // AoA-Symposium (Annual)
  {
    id: 'aoa-symposium-2025',
    eventTypeId: 'aoa-symposium',
    title: 'Art of Anesthesia Symposium 2025',
    date: '2025-11-29',
    location: 'Münster Zentrum',
    locationDetails: 'Kongresszentrum Münster, Albersloher Weg 32, 48155 Münster',
    status: 'upcoming',
    registrationOpen: true,
    registrationDeadline: '2025-11-15',
    price: {
      presence: 180,
      students: 90
    },
    speakers: [
      'Prof. Dr. med. H. Herz',
      'Dr. med. L. Lunge', 
      'Prof. Dr. med. N. Niere',
      'Dr. med. S. Schmerz'
    ],
    maxParticipants: 250,
    currentParticipants: 156
  },

  // Repetitorium Anästhesiologie
  {
    id: 'rep-anaesthesie-2025',
    eventTypeId: 'repetitorium-anaesthesie',
    title: 'Repetitorium Anästhesiologie 2025',
    date: '2025-02-10',
    endDate: '2025-02-14',
    location: 'Münster & Online',
    locationDetails: 'Kongresszentrum Münster + Livestream',
    status: 'completed',
    registrationOpen: false,
    price: {
      presence: 450,
      online: 350,
      students: 200
    }
  },
  {
    id: 'rep-anaesthesie-2026',
    eventTypeId: 'repetitorium-anaesthesie',
    title: 'Repetitorium Anästhesiologie 2026',
    date: '2026-02-09',
    endDate: '2026-02-13',
    location: 'Münster & Online',
    locationDetails: 'Kongresszentrum Münster + Livestream',
    status: 'upcoming',
    registrationOpen: true,
    registrationDeadline: '2026-01-15',
    price: {
      presence: 480,
      online: 380,
      students: 220
    },
    maxParticipants: 300,
    currentParticipants: 89
  },

  // Repetitorium Intensivmedizin
  {
    id: 'rep-intensiv-2025',
    eventTypeId: 'repetitorium-intensivmedizin',
    title: 'Repetitorium Intensivmedizin 2025',
    date: '2025-03-15',
    endDate: '2025-03-17',
    location: 'Münster & Online',
    locationDetails: 'Zentrum für Medizinische Fortbildung Münster + Livestream',
    status: 'ongoing',
    registrationOpen: true,
    registrationDeadline: '2025-03-01',
    price: {
      presence: 380,
      online: 280,
      students: 180
    },
    maxParticipants: 180,
    currentParticipants: 156
  },
  {
    id: 'rep-intensiv-2026',
    eventTypeId: 'repetitorium-intensivmedizin',
    title: 'Repetitorium Intensivmedizin 2026',
    date: '2026-03-14',
    endDate: '2026-03-16',
    location: 'Münster & Online',
    locationDetails: 'Zentrum für Medizinische Fortbildung Münster + Livestream',
    status: 'upcoming',
    registrationOpen: false,
    price: {
      presence: 400,
      online: 300,
      students: 200
    }
  }
];

// Helper functions
export const getEventTypeById = (id: string): EventType | undefined => {
  return eventTypes.find(eventType => eventType.id === id);
};

export const getScheduledEventsByType = (eventTypeId: string): ScheduledEvent[] => {
  return scheduledEvents.filter(event => event.eventTypeId === eventTypeId);
};

export const getUpcomingEvents = (): ScheduledEvent[] => {
  return scheduledEvents.filter(event => event.status === 'upcoming');
};

export const getOngoingEvents = (): ScheduledEvent[] => {
  return scheduledEvents.filter(event => event.status === 'ongoing');
};

export const getAllActiveEvents = (): ScheduledEvent[] => {
  return scheduledEvents.filter(event => event.status === 'upcoming' || event.status === 'ongoing');
};

export const getEventsByCategory = (category: EventType['category']): EventType[] => {
  return eventTypes.filter(eventType => eventType.category === category);
};
