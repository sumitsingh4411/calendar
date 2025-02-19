import { EventState } from '../types';

interface DayCellProps {
    date: Date;
    events: EventState[];
    isSelected: boolean;
    onSelect: (date: Date, event: React.MouseEvent) => void;
    onEditEvent: (event: EventState) => void;
}

const DayCell = (props: DayCellProps) => {
    const { date, events, isSelected, onSelect, onEditEvent } = props;
    const currentMonth = date.getMonth() === new Date().getMonth();
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    const sortedEvents = [...events].sort((eventA, eventB) => {
        return new Date(eventA.start).getTime() - new Date(eventB.start).getTime();
    });

    return (
        <div
            className={`
        min-h-[100px] bg-gray-900 p-2 cursor-pointer border border-gray-800
        ${!currentMonth && 'opacity-40'}
        ${isToday && 'border-l-2 border-blue-500 bg-blue-900/20'}
        ${isSelected && 'ring-2 ring-blue-500 bg-blue-900/30'}
        hover:bg-gray-800 transition-colors
      `}
            onClick={(e) => onSelect(date, e)}
        >
            <div className="text-right text-sm">
                <span className={isToday ? 'text-blue-400 font-bold' : 'text-gray-400'}>{date.getDate()}</span>
                {events.length > 0 && (
                    <span className="ml-1 text-xs bg-gray-800 px-1.5 rounded text-gray-300">{events.length}</span>
                )}
            </div>

            <div className="mt-1 space-y-1 overflow-y-auto max-h-[80px]">
                {sortedEvents.map((event) => (
                    <div
                        key={event.id}
                        className={`text-xs p-1.5 rounded cursor-pointer bg-blue-900/50 text-blue-100 hover:opacity-80 transition-opacity
            `}
                        onClick={() => {
                            onEditEvent(event);
                        }}
                    >
                        <div className="flex justify-between">
                            <span className="font-medium truncate">
                                {new Date(event.start).toLocaleTimeString([], {
                                    hour: 'numeric',
                                    minute: '2-digit'
                                })}
                            </span>
                            <span className="truncate ml-1">{event.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayCell;
