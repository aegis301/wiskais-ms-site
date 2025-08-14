/**
 * Common Types & Interfaces
 * 
 * Centralized type definitions to be used across components.
 * This file consolidates commonly used interfaces and prevents duplication.
 */

import { ReactNode } from 'react';

// ==========================================
// COMMON COMPONENT PROPS
// ==========================================

/**
 * Base props for components that accept className
 */
export interface BaseComponentProps {
  className?: string;
}

/**
 * Base props for components with children
 */
export interface BaseChildrenProps {
  children: ReactNode;
  className?: string;
}

/**
 * Props for clickable components
 */
export interface ClickableProps extends BaseComponentProps {
  onClick?: () => void;
}

/**
 * Props for components with optional callback handlers
 */
export interface CallbackProps {
  onLinkClick?: () => void;
}

// ==========================================
// EVENT-RELATED TYPES
// ==========================================

/**
 * Event status enumeration
 */
export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

/**
 * Event category enumeration  
 */
export type EventCategory = 'meeting' | 'symposium' | 'repetitorium' | 'workshop';

/**
 * Event type definition (from events.ts)
 */
export interface EventType {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
  features: string[];
  cmePoints: number;
  image: string;
  category: EventCategory;
}

/**
 * Scheduled event definition (from events.ts)
 */
export interface ScheduledEvent {
  id: string;
  eventTypeId: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  locationDetails?: string;
  status: EventStatus;
  registrationOpen: boolean;
  registrationDeadline?: string;
  price?: EventPrice;
  speakers?: string[];
  schedule?: EventScheduleItem[];
  maxParticipants?: number;
  currentParticipants?: number;
}

/**
 * Event schedule item definition
 */
export interface EventScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  type: 'presentation' | 'workshop' | 'break' | 'discussion' | 'networking';
}

/**
 * Event pricing definition
 */
export interface EventPrice {
  presence?: number;
  online?: number;
  students?: number;
}

// ==========================================
// FORM-RELATED TYPES
// ==========================================

/**
 * Select option for form dropdowns
 */
export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Registration form data
 */
export interface RegistrationFormData {
  anrede: string;
  title: string;
  firstname: string;
  lastname: string;
  street: string;
  zip: string;
  city: string;
  clinic: string;
  email: string;
  profession: string;
  participation: string;
  efnNumber: string;
  heardAbout: string;
  workshops: string[];
  newsletter: boolean;
  dataProtection: boolean;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ==========================================
// BUTTON & UI TYPES
// ==========================================

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Content container size types
 */
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

/**
 * Content container padding types
 */
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// ==========================================
// LAYOUT & STYLING TYPES
// ==========================================

/**
 * Text sizes for typography components
 */
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

/**
 * Heading levels
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Image position types
 */
export type ImagePosition = 'left' | 'right' | 'top' | 'bottom';

/**
 * Color variant types for highlights and badges
 */
export type ColorVariant = 'blue' | 'green' | 'yellow' | 'red' | 'gray' | 'primary' | 'secondary';

// ==========================================
// UTILITY TYPES
// ==========================================

/**
 * Makes all properties of T optional except for K
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * Extracts the props type from a React component
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Partner logo definition
 */
export interface PartnerLogo {
  name: string;
  logo: string;
  website?: string;
  alt?: string;
}
