"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./modal";

interface ProjectBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        description: string;
        technologies: string;
    };
}

const ProjectBox = ({ data }: ProjectBoxProps) => {
    const { title, image, description, technologies } = data;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectSelect = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 border border-teal-50 rounded-xl w-64 h-auto flex flex-col justify-between">
            <h3 className="mb-4 text-xl text-center whitespace-pre-line">{title}</h3>
            <div className="relative w-full h-[150px] mb-4">
                <Image 
                    src={image} 
                    alt={title}
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-2xl" 
                />
            </div>

            <div className="flex gap-5">
                <button
                    onClick={handleProjectSelect}
                    className="p-2 transition duration-150 rounded-lg text-gray-800 bg-primary hover:bg-primary/80 flex-1 text-center">
                    Más info
                </button>
                <a 
                    href="/" 
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg text-gray-800 bg-primary hover:bg-primary/80 flex-1 text-center">
                    Demo
                </a>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} project={{ title, description, technologies }}>
            </Modal>
        </div>
    );
};

export default ProjectBox;
