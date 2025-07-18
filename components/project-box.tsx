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
        <div className="mb-4">
            <div className="w-72 h-[370px] border border-white rounded-xl p-4 bg-transparent flex flex-col justify-between shadow-lg">

                <h3 className="text-lg font-semibold text-center mb-3">{title}</h3>

                <div className="relative w-full h-[160px] rounded-md overflow-hidden mb-4">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>

                <button
                    onClick={handleProjectSelect}
                    className="px-4 py-2 bg-primary text-gray-800 text-sm rounded-md hover:bg-primary/80 transition"
                >
                    Ver más información
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    project={{ title, description, technologies }}
                />
            </div>
        </div>
    );
};

export default ProjectBox;