// features/eventSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventState } from '../types';

const initialState: EventState[] = [];

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<EventState>) => {
      state.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<EventState>) => {
      const index = state.findIndex(e => e.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      return state.filter(e => e.id !== action.payload);
    },
  },
});

export const { actions: eventActions, reducer: eventReducer } = eventSlice;