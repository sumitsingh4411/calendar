import Modal from '@/common/Modal';
import { eventActions } from '@/redux/eventSlice';
import { AppDispatch } from '@/redux/store';
import { EventState } from '@/types';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface IModalProps {
    onClose: () => void;
    setShowDeleteConfirm: (show: boolean) => void;
    event: EventState | null;
}
function DeleteConfirmationModal(modalProps: IModalProps) {
    const { onClose, setShowDeleteConfirm, event } = modalProps;
    const dispatch = useDispatch<AppDispatch>();

    const onDeleteEvent = () => {
        if (!event) return;
        dispatch(eventActions.deleteEvent(event.id));
        onClose();
        toast.success('Event deleted');
    };
    return (
        <Modal>
            <p className="text-lg font-medium text-white">Delete this event?</p>
            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-4 py-2 text-gray-300 hover:bg-gray-800 rounded transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={onDeleteEvent}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                    Delete
                </button>
            </div>
        </Modal>
    );
}

export default DeleteConfirmationModal;
