// Event-related types
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: "upcoming" | "ongoing" | "completed";
  registrationOpen: boolean;
}

export interface DetailedEvent extends Event {
  longDescription: string;
  speakers: string[];
  topics: string[];
  schedule: EventScheduleItem[];
  price: EventPrice;
}

export interface EventScheduleItem {
  time: string;
  topic: string;
  speaker: string;
}

export interface EventPrice {
  presence: number;
  online: number;
}

// Form-related types
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

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  dataProtection: boolean;
}
