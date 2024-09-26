"use client";

import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-[#eebfff] rounded-lg p-4 z-10 max-w-[90%] md:max-w-[500px] h-[400px] overflow-hidden mt-10"> 
                <button onClick={onClose} className="absolute top-2 right-2">✖</button>
                <div className="text-gray-700 overflow-y-auto h-[calc(100%-60px)] mt-4"> 
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
