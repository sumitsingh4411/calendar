'use client';
import Calendar from '@/components/Calendar';
import { store } from '@/redux/store';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

export default function Home() {
    return (
        <Provider store={store}>
            <Toaster position="top-center" />
            <Calendar />
        </Provider>
    );
}
