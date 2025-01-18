// src/components/UpdateCustomerModal.tsx
import React from 'react';

interface UpdateCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const UpdateCustomerModal: React.FC<UpdateCustomerModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Customer updated");
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded shadow-lg">
                <h2 className="text-xl mb-4">Update Customer</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="border p-2 mb-2 w-full" required />
                    <input type="email" placeholder="Email" className="border p-2 mb-2 w-full" required />
                    <input type="tel" placeholder="Phone" className="border p-2 mb-2 w-full" required />
                    <div className="flex justify-end">
                        <button type="button" className="mr-2" onClick={onClose}>Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCustomerModal;