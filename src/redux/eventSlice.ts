'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventState } from '../types';
import { checkEventData, saveEventData } from '@/utils';

const initialState: EventState[] = [];

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<EventState>) => {
            state.push(action.payload);
            saveEventData(state);
        },
        updateEvent: (state, action: PayloadAction<EventState>) => {
            const index = state.findIndex((event) => event.id === action.payload.id);
            if (index !== -1) state[index] = action.payload;
            saveEventData(state);
        },
        deleteEvent: (state, action: PayloadAction<string>) => {
            const currentState = state.filter((event) => event.id !== action.payload);
            saveEventData(currentState);
            return currentState;
        },
        loadEvents: (state) => {
            const events = checkEventData();
            if (events) return events;
            return state;
        }
    }
});

export const { actions: eventActions, reducer: eventReducer } = eventSlice;
