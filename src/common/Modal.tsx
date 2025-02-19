import React from 'react';
function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl p-6 space-y-4 border border-gray-800">{children}</div>
        </div>
    );
}

export default Modal;
