"use client";

import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        technologies: string;
    };
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
    if (!isOpen) return null;

    // Dividir las tecnologías en un array
    const technologiesList = project.technologies.split(",").map((tech) => tech.trim());

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-[#eebfff] rounded-lg p-4 z-10 max-w-[90%] md:max-w-[500px] h-[400px] overflow-hidden mt-10">
                <button onClick={onClose} className="absolute top-2 right-2">✖</button>
                <div className="text-gray-700 overflow-y-auto h-[calc(100%-60px)] mt-4">
                    <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                    <p className="mb-4">{project.description}</p>
                    <h3 className="font-semibold">Tecnologías:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {technologiesList.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-1 bg-purple-300 text-gray-800 rounded-full text-sm"
                                >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
