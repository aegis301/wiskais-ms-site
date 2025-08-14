/**
 * Calendar Utilities
 * 
 * Helper functions for converting event data to calendar format
 * and managing calendar-related operations.
 */

import moment from 'moment';
import { 
  ScheduledEvent, 
  EventType, 
  CalendarEvent, 
  CalendarEventStyle 
} from '@/types/common';

/**
 * Event type color mapping for calendar display
 */
export const EVENT_TYPE_COLORS: Record<string, CalendarEventStyle> = {
  'aoa-meeting': {
    backgroundColor: '#003866',
    borderColor: '#002b52',
    color: '#ffffff'
  },
  'aoa-symposium': {
    backgroundColor: '#4338ca',
    borderColor: '#3730a3',
    color: '#ffffff'
  },
  'repetitorium-anaesthesie': {
    backgroundColor: '#059669',
    borderColor: '#047857',
    color: '#ffffff'
  },
  'repetitorium-intensivmedizin': {
    backgroundColor: '#7c3aed',
    borderColor: '#6d28d9',
    color: '#ffffff'
  },
  default: {
    backgroundColor: '#6b7280',
    borderColor: '#4b5563',
    color: '#ffffff'
  }
};

/**
 * Convert a scheduled event to a calendar event
 */
export const convertToCalendarEvent = (
  scheduledEvent: ScheduledEvent, 
  eventType: EventType
): CalendarEvent => {
  const startDate = moment(scheduledEvent.date).toDate();
  const endDate = scheduledEvent.endDate 
    ? moment(scheduledEvent.endDate).toDate()
    : moment(scheduledEvent.date).add(1, 'day').toDate();

  return {
    id: scheduledEvent.id,
    title: scheduledEvent.title,
    start: startDate,
    end: endDate,
    allDay: true, // Most events are all-day unless specified otherwise
    eventTypeId: scheduledEvent.eventTypeId,
    status: scheduledEvent.status,
    registrationOpen: scheduledEvent.registrationOpen,
    location: scheduledEvent.location,
    resource: {
      scheduledEvent,
      eventType
    }
  };
};

/**
 * Convert array of scheduled events to calendar events
 */
export const convertScheduledEventsToCalendarEvents = (
  scheduledEvents: ScheduledEvent[],
  eventTypes: EventType[]
): CalendarEvent[] => {
  return scheduledEvents.map(scheduledEvent => {
    const eventType = eventTypes.find(et => et.id === scheduledEvent.eventTypeId);
    if (!eventType) {
      throw new Error(`Event type not found for: ${scheduledEvent.eventTypeId}`);
    }
    return convertToCalendarEvent(scheduledEvent, eventType);
  });
};

/**
 * Get event style based on event type and status
 */
export const getEventStyle = (event: CalendarEvent): CalendarEventStyle => {
  const baseStyle = EVENT_TYPE_COLORS[event.eventTypeId] || EVENT_TYPE_COLORS.default;
  
  // Modify style based on status
  switch (event.status) {
    case 'completed':
      return {
        ...baseStyle,
        backgroundColor: `${baseStyle.backgroundColor}80`, // Add transparency
        borderColor: baseStyle.borderColor,
        color: '#6b7280'
      };
    case 'ongoing':
      return {
        ...baseStyle,
        backgroundColor: baseStyle.backgroundColor,
        borderColor: '#f59e0b', // Warning color border
        color: baseStyle.color
      };
    case 'upcoming':
      return baseStyle;
    default:
      return baseStyle;
  }
};

/**
 * Filter events by date range
 */
export const filterEventsByDateRange = (
  events: CalendarEvent[],
  startDate: Date,
  endDate: Date
): CalendarEvent[] => {
  return events.filter(event => {
    const eventStart = moment(event.start);
    const eventEnd = moment(event.end);
    const rangeStart = moment(startDate);
    const rangeEnd = moment(endDate);
    
    return (
      eventStart.isBetween(rangeStart, rangeEnd, null, '[]') ||
      eventEnd.isBetween(rangeStart, rangeEnd, null, '[]') ||
      (eventStart.isBefore(rangeStart) && eventEnd.isAfter(rangeEnd))
    );
  });
};

/**
 * Get events for a specific month
 */
export const getEventsForMonth = (
  events: CalendarEvent[],
  year: number,
  month: number
): CalendarEvent[] => {
  const startOfMonth = moment({ year, month }).startOf('month').toDate();
  const endOfMonth = moment({ year, month }).endOf('month').toDate();
  
  return filterEventsByDateRange(events, startOfMonth, endOfMonth);
};

/**
 * Generate iCal format string for event export
 */
export const generateICalEvent = (event: CalendarEvent): string => {
  const startDate = moment(event.start).utc().format('YYYYMMDDTHHmmss[Z]');
  const endDate = moment(event.end).utc().format('YYYYMMDDTHHmmss[Z]');
  const now = moment().utc().format('YYYYMMDDTHHmmss[Z]');
  
  return `BEGIN:VEVENT
UID:${event.id}@wiskais.de
DTSTAMP:${now}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:${event.resource?.eventType.description || ''}
STATUS:${event.status.toUpperCase()}
END:VEVENT`;
};

/**
 * Generate full iCal file content
 */
export const generateICalFile = (events: CalendarEvent[]): string => {
  const header = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//WISKAIS//Calendar//DE
CALSCALE:GREGORIAN
METHOD:PUBLISH`;

  const footer = 'END:VCALENDAR';
  
  const eventStrings = events.map(generateICalEvent).join('\n');
  
  return `${header}\n${eventStrings}\n${footer}`;
};
