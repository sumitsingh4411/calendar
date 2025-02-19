export interface EventState {
    id: string;
    title: string;
    description: string;
    start: string;
    end: string;
  }
  
  export interface CalendarState {
    currentDate: string;
    selectedDate: string | null;
  }