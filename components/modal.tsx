import React from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const { title, description, technologies } = project;
  const techArray = technologies.split(",").map(t => t.trim());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 overflow-y-auto">
      <div className="bg-[#f5dcff] max-w-3xl w-full rounded-2xl shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>

        <p className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-800">Tecnologías:</span>
          {techArray.map((tech, idx) => (
            <span
              key={idx}
              className="bg-purple-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
