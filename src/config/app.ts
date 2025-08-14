/**
 * Application Configuration
 * 
 * Centralized configuration values for forms, options, and app settings.
 */

import { SelectOption } from '@/types/common';

// ==========================================
// FORM OPTIONS
// ==========================================

export const ANREDE_OPTIONS: SelectOption[] = [
  { value: '', label: 'Bitte auswählen' },
  { value: 'herr', label: 'Herr' },
  { value: 'frau', label: 'Frau' },
  { value: 'divers', label: 'Divers' },
];

export const TITLE_OPTIONS: SelectOption[] = [
  { value: '', label: 'Kein Titel' },
  { value: 'dr', label: 'Dr.' },
  { value: 'prof', label: 'Prof.' },
  { value: 'prof-dr', label: 'Prof. Dr.' },
  { value: 'pd-dr', label: 'PD Dr.' },
];

export const PROFESSION_OPTIONS: SelectOption[] = [
  { value: '', label: 'Bitte auswählen' },
  { value: 'arzt-weiterbildung', label: 'Arzt/Ärztin in Weiterbildung' },
  { value: 'facharzt', label: 'Facharzt/Fachärztin' },
  { value: 'oberarzt', label: 'Oberarzt/Oberärztin' },
  { value: 'chefarzt', label: 'Chefarzt/Chefärztin' },
  { value: 'student', label: 'Student/Studentin' },
  { value: 'andere', label: 'Andere' },
];

export const PARTICIPATION_OPTIONS: SelectOption[] = [
  { value: '', label: 'Bitte auswählen' },
  { value: 'presence', label: 'Präsenzteilnahme' },
  { value: 'online', label: 'Online-Teilnahme' },
];

export const HEARD_ABOUT_OPTIONS: SelectOption[] = [
  { value: '', label: 'Bitte auswählen' },
  { value: 'website', label: 'Website' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'kollegen', label: 'Kollegen/Kolleginnen' },
  { value: 'newsletter', label: 'Newsletter' },
  { value: 'veranstaltung', label: 'Andere Veranstaltung' },
  { value: 'andere', label: 'Andere' },
];

// ==========================================
// EVENT CONFIGURATION
// ==========================================

export const EVENT_STATUS_LABELS = {
  upcoming: 'Kommend',
  ongoing: 'Laufend',
  completed: 'Abgeschlossen',
  cancelled: 'Abgesagt',
} as const;

export const EVENT_CATEGORY_LABELS = {
  meeting: 'Meeting',
  symposium: 'Symposium',
  repetitorium: 'Repetitorium',
  workshop: 'Workshop',
} as const;

export const EVENT_TYPE_LABELS = {
  presentation: 'Vortrag',
  workshop: 'Workshop',
  break: 'Pause',
  discussion: 'Diskussion',
  networking: 'Networking',
} as const;

// ==========================================
// CONTACT CONFIGURATION
// ==========================================

export const CONTACT_SUBJECTS: SelectOption[] = [
  { value: '', label: 'Thema auswählen' },
  { value: 'anmeldung', label: 'Anmeldung zu Veranstaltungen' },
  { value: 'allgemeine-fragen', label: 'Allgemeine Fragen' },
  { value: 'technische-probleme', label: 'Technische Probleme' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'kooperation', label: 'Kooperationsanfragen' },
  { value: 'andere', label: 'Andere' },
];

// ==========================================
// VALIDATION RULES
// ==========================================

export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  ZIP_CODE: /^\d{5}$/,
  EFN_NUMBER: /^\d{11}$/,
} as const;

export const VALIDATION_MESSAGES = {
  REQUIRED: 'Dieses Feld ist erforderlich',
  EMAIL_INVALID: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  PHONE_INVALID: 'Bitte geben Sie eine gültige Telefonnummer ein',
  ZIP_INVALID: 'Bitte geben Sie eine gültige Postleitzahl ein (5 Ziffern)',
  EFN_INVALID: 'Bitte geben Sie eine gültige EFN-Nummer ein (11 Ziffern)',
  PASSWORD_TOO_SHORT: 'Das Passwort muss mindestens 8 Zeichen lang sein',
  PASSWORDS_DONT_MATCH: 'Die Passwörter stimmen nicht überein',
} as const;

// ==========================================
// APP CONFIGURATION
// ==========================================

export const APP_CONFIG = {
  NAME: 'WISKAIS',
  FULL_NAME: 'Wissenschaftliches Institut für Simulation, Klinische Anästhesie und Intensivmedizin in der Sektion',
  CONTACT_EMAIL: 'info@wiskais.de',
  PHONE: '+49 (0) 251 83-47270',
  ADDRESS: {
    STREET: 'Albert-Schweitzer-Campus 1',
    BUILDING: 'Gebäude A1',
    ZIP: '48149',
    CITY: 'Münster',
    COUNTRY: 'Deutschland',
  },
  SOCIAL_MEDIA: {
    TWITTER: '',
    LINKEDIN: '',
    INSTAGRAM: '',
    FACEBOOK: '',
  },
} as const;

// ==========================================
// PAGINATION & LIMITS
// ==========================================

export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
  PAGE_SIZE_OPTIONS: [10, 25, 50] as const,
} as const;

// ==========================================
// FILE UPLOAD CONFIGURATION
// ==========================================

export const FILE_UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'] as const,
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'] as const,
} as const;

// ==========================================
// DATE & TIME CONFIGURATION
// ==========================================

export const DATE_CONFIG = {
  DEFAULT_LOCALE: 'de-DE',
  DATE_FORMAT: 'dd.MM.yyyy',
  DATETIME_FORMAT: 'dd.MM.yyyy HH:mm',
  TIME_FORMAT: 'HH:mm',
} as const;

// ==========================================
// NAVIGATION LINKS
// ==========================================

export const NAVIGATION_LINKS = [
  { href: '/about', label: 'Über uns' },
  { href: '/events', label: 'Veranstaltungen' },
  { href: '/registration', label: 'Anmeldung' },
  { href: '/contact', label: 'Kontakt' },
] as const;

export const FOOTER_LINKS = {
  MAIN: [
    { href: '/about', label: 'Über uns' },
    { href: '/events', label: 'Veranstaltungen' },
    { href: '/contact', label: 'Kontakt' },
  ],
  LEGAL: [
    { href: '/data-protection', label: 'Datenschutz' },
    { href: '/imprint', label: 'Impressum' },
  ],
} as const;
