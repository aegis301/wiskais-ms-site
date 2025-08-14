"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { Calendar, momentLocalizer, Views, View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Link from 'next/link';

import { 
  CalendarEvent, 
  CalendarView, 
  ScheduledEvent, 
  EventType 
} from '@/types/common';
import { 
  convertScheduledEventsToCalendarEvents, 
  getEventStyle,
  generateICalFile 
} from '@/utils/calendar';
import Button from '@/components/Button';
import StatusBadge from '@/components/StatusBadge';

// Setup moment localizer
const localizer = momentLocalizer(moment);

interface EventCalendarProps {
  scheduledEvents: ScheduledEvent[];
  eventTypes: EventType[];
  className?: string;
}

interface EventTooltipProps {
  event: CalendarEvent;
  onClose: () => void;
  position: { x: number; y: number };
}

const EventTooltip = ({ event, onClose, position }: EventTooltipProps) => {
  const handleExport = () => {
    const icalContent = generateICalFile([event]);
    const blob = new Blob([icalContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="absolute z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
      style={{ 
        left: Math.min(position.x, window.innerWidth - 320), 
        top: position.y + 10 
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900 pr-2">{event.title}</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-600">
            {moment(event.start).format('DD.MM.YYYY')}
            {event.resource?.scheduledEvent.endDate && 
              ` - ${moment(event.end).format('DD.MM.YYYY')}`
            }
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm text-gray-600">{event.location}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <StatusBadge status={event.status} />
          {event.registrationOpen && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Anmeldung offen
            </span>
          )}
        </div>
      </div>
      
      <div className="flex gap-2">
        <Link href={`/events/${event.eventTypeId}`} className="flex-1">
          <Button variant="primary" size="sm" className="w-full">
            Details ansehen
          </Button>
        </Link>
        <button
          onClick={handleExport}
          className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          title="In Kalender exportieren"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const EventCalendar = ({ scheduledEvents, eventTypes, className = '' }: EventCalendarProps) => {
  const [view, setView] = useState<View>(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [eventTypeFilter, setEventTypeFilter] = useState<string[]>([]);

  // Convert scheduled events to calendar events
  const calendarEvents = useMemo(() => {
    const events = convertScheduledEventsToCalendarEvents(scheduledEvents, eventTypes);
    
    // Apply event type filter if any
    if (eventTypeFilter.length > 0) {
      return events.filter(event => eventTypeFilter.includes(event.eventTypeId));
    }
    
    return events;
  }, [scheduledEvents, eventTypes, eventTypeFilter]);

  // Event style function
  const eventStyleGetter = useCallback((event: CalendarEvent) => {
    const style = getEventStyle(event);
    return {
      style: {
        backgroundColor: style.backgroundColor,
        borderColor: style.borderColor,
        color: style.color,
        border: `2px solid ${style.borderColor}`,
        borderRadius: '6px',
        fontSize: '12px',
        padding: '2px 6px'
      }
    };
  }, []);

  // Handle event click
  const handleEventClick = useCallback((event: CalendarEvent, e: React.SyntheticEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY
    });
    setSelectedEvent(event);
  }, []);

  // Export all events
  const handleExportAll = () => {
    const icalContent = generateICalFile(calendarEvents);
    const blob = new Blob([icalContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wiskais_events.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Toggle event type filter
  const toggleEventTypeFilter = (eventTypeId: string) => {
    setEventTypeFilter(prev => 
      prev.includes(eventTypeId)
        ? prev.filter(id => id !== eventTypeId)
        : [...prev, eventTypeId]
    );
  };

  return (
    <div className={`${className}`}>
      {/* Calendar Controls */}
      <div className="mb-6 space-y-4">
        {/* View Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Ansicht:</span>
            <div className="flex rounded-md border border-gray-300 overflow-hidden">
              {[
                { key: Views.MONTH, label: 'Monat' },
                { key: Views.WEEK, label: 'Woche' },
                { key: Views.DAY, label: 'Tag' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setView(key)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    view === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleExportAll}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Alle exportieren
          </button>
        </div>

        {/* Event Type Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Filter:</span>
          {eventTypes.map(eventType => {
            const isActive = eventTypeFilter.length === 0 || eventTypeFilter.includes(eventType.id);
            return (
              <button
                key={eventType.id}
                onClick={() => toggleEventTypeFilter(eventType.id)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-gray-100 text-gray-600 border-gray-200'
                } border`}
              >
                <div 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ 
                    backgroundColor: getEventStyle({ 
                      eventTypeId: eventType.id 
                    } as CalendarEvent).backgroundColor 
                  }}
                />
                {eventType.shortTitle}
              </button>
            );
          })}
          {eventTypeFilter.length > 0 && (
            <button
              onClick={() => setEventTypeFilter([])}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Alle anzeigen
            </button>
          )}
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4" style={{ height: '600px' }}>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleEventClick}
          popup
          popupOffset={30}
          messages={{
            next: 'Weiter',
            previous: 'Zurück',
            today: 'Heute',
            month: 'Monat',
            week: 'Woche',
            day: 'Tag',
            agenda: 'Agenda',
            date: 'Datum',
            time: 'Zeit',
            event: 'Veranstaltung',
            noEventsInRange: 'Keine Veranstaltungen in diesem Zeitraum',
            showMore: (total: number) => `+ ${total} weitere`
          }}
          formats={{
            monthHeaderFormat: 'MMMM YYYY',
            dayHeaderFormat: 'dddd, DD.MM.YYYY',
            dayRangeHeaderFormat: ({ start, end }) => 
              `${moment(start).format('DD.MM')} - ${moment(end).format('DD.MM.YYYY')}`,
            timeGutterFormat: 'HH:mm',
            eventTimeRangeFormat: ({ start, end }) => 
              `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`
          }}
          className="calendar-custom"
        />
      </div>

      {/* Event Tooltip */}
      {selectedEvent && (
        <EventTooltip
          event={selectedEvent}
          position={tooltipPosition}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* Click outside to close tooltip */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventCalendar;
