import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { EventState } from '../types';
import { eventActions } from '../redux/eventSlice';
import { AppDispatch } from '@/redux/store';
import { toast } from 'react-hot-toast';
import { getTime } from '@/utils';
import DeleteConfirmationModal from './DeleteConfirmationModal';

interface EventFormProps {
    selectedDate: string | null;
    event?: EventState | null;
    onClose: () => void;
}

const EventForm = ({ selectedDate, event, onClose }: EventFormProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [eventFormData, setEventFormData] = useState({
        title: event?.title || '',
        description: event?.description || '',
        start: event?.start ? getTime(event.start) : '09:00',
        end: event?.end ? getTime(event.end) : '10:00'
    });

    const handleSubmit = () => {
        if (!selectedDate) return;
        const start = new Date(selectedDate);
        const end = new Date(selectedDate);
        const { title, description, start: startTime, end: endTime } = eventFormData;
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = endTime.split(':').map(Number);

        start.setHours(startHours, startMinutes);
        end.setHours(endHours, endMinutes);

        if (end <= start) {
            toast.error('End time must be after start time');
            return;
        }

        const eventData: EventState = {
            id: event?.id || uuidv4(),
            title,
            description,
            start: start.toISOString(),
            end: end.toISOString()
        };

        if (event) {
            dispatch(eventActions.updateEvent(eventData));
            toast.success('Event updated');
        } else {
            dispatch(eventActions.addEvent(eventData));
            toast.success('Event added');
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <form
                className="bg-gray-900 rounded-xl p-6 w-full max-w-md space-y-4 shadow-2xl border border-gray-800"
                onSubmit={handleSubmit}
            >
                <h3 className="text-xl font-bold text-white">{event ? 'Edit Event' : 'New Event'}</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Start Time</label>
                        <input
                            type="time"
                            value={eventFormData.start}
                            onChange={(e) => setEventFormData({ ...eventFormData, start: e.target.value })}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">End Time</label>
                        <input
                            type="time"
                            value={eventFormData.end}
                            onChange={(e) => setEventFormData({ ...eventFormData, end: e.target.value })}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-300"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Title</label>
                    <input
                        required
                        value={eventFormData.title}
                        onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-300"
                        placeholder="Event title"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">Description</label>
                    <textarea
                        value={eventFormData.description}
                        onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-300 h-24"
                        placeholder="Event description"
                    />
                </div>

                <div className="flex justify-end gap-3">
                    {event && (
                        <button
                            type="button"
                            onClick={() => setShowDeleteConfirm(true)}
                            className="px-4 py-2 text-red-400 hover:bg-red-900/50 rounded transition-colors"
                        >
                            Delete
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        {event ? 'Save Changes' : 'Create Event'}
                    </button>
                </div>

                {showDeleteConfirm && event && (
                    <DeleteConfirmationModal
                        onClose={() => setShowDeleteConfirm(false)}
                        setShowDeleteConfirm={setShowDeleteConfirm}
                        event={event}
                    />
                )}
            </form>
        </div>
    );
};

export default EventForm;
