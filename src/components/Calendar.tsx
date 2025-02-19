'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DayCell from './DayCell';
import EventForm from './EventForm';
import { AppDispatch, RootState } from '@/redux/store';
import { calendarActions } from '@/redux/calendarSlice';
import { EventState } from '@/types';
import { daysOfWeek } from '@/common';
import Header from './Header';
import { getDaysInMonth } from '@/utils';
import { eventActions } from '@/redux/eventSlice';

const Calendar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentDate, selectedDate } = useSelector((state: RootState) => state.calendar);
    const events = useSelector((state: RootState) => state.events);
    const [editingEvent, setEditingEvent] = useState<EventState | null>(null);

    const handleEditEvent = (event: EventState) => {
        const dateString = new Date(event.start).toISOString();
        dispatch(calendarActions.setSelectedDate(dateString));
        setEditingEvent(event);
    };

    const handleDateSelection = (date: Date) => {
        const dateString = date.toISOString();
        dispatch(calendarActions.setSelectedDate(dateString));
    };

    const currentDateObj = new Date(currentDate);
    const daysInMonth = getDaysInMonth(currentDateObj);

    useEffect(() => {
        dispatch(eventActions.loadEvents());
    }, []);
    
    return (
        <div className="max-w-6xl mx-auto p-4">
            <Header />
            <div className="grid grid-cols-7 gap-1 bg-gray-800 rounded-lg overflow-hidden p-1">
                {daysOfWeek.map((day) => (
                    <div
                        key={`weekday-${day}`}
                        className="bg-gray-900 p-3 text-center text-sm font-medium text-gray-400"
                    >
                        {day[0]}
                    </div>
                ))}
                {daysInMonth.map((date) => (
                    <DayCell
                        key={date.toISOString()}
                        date={date}
                        events={events.filter((e) => {
                            const eventStart = new Date(e.start);
                            const eventEnd = new Date(e.end);
                            return (
                                date >= new Date(eventStart.setHours(0, 0, 0, 0)) &&
                                date <= new Date(eventEnd.setHours(23, 59, 59, 999))
                            );
                        })}
                        isSelected={date.toISOString() === selectedDate}
                        onSelect={handleDateSelection}
                        onEditEvent={handleEditEvent}
                    />
                ))}
            </div>

            {(selectedDate || editingEvent) && (
                <EventForm
                    selectedDate={selectedDate}
                    event={editingEvent}
                    onClose={() => {
                        dispatch(calendarActions.clearSelectedDate());
                        setEditingEvent(null);
                    }}
                />
            )}
        </div>
    );
};

export default Calendar;
