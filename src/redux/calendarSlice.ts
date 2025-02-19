'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
    currentDate: string;
    selectedDate: string | null;
}

const initialState: CalendarState = {
    currentDate: new Date().toISOString(),
    selectedDate: null
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCurrentDate: (state, action: PayloadAction<string>) => {
            state.currentDate = action.payload;
        },
        setSelectedDate: (state, action: PayloadAction<string | null>) => {
            state.selectedDate = action.payload;
        },
        clearSelectedDate: (state) => {
            state.selectedDate = null;
        },
        navigateMonth: (state, action: PayloadAction<number>) => {
            const date = new Date(state.currentDate);
            date.setMonth(date.getMonth() + action.payload);
            state.currentDate = date.toISOString();
        }
    }
});

export const { actions: calendarActions, reducer: calendarReducer } = calendarSlice;
