"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      {/* Contenedor general */}
      <div
        className="
          z-20 flex flex-col md:flex-row
          items-center justify-center
          min-h-[85vh] p-4 sm:p-6
          gap-6 md:gap-12
          max-w-[1200px] mx-auto
        "
      >

        {/* Imagen */}
        <div
          className="
            flex flex-col items-center justify-center
            w-full md:w-1/2
          "
        >
          <Image
            src="/profile-avatar.png"
            priority
            width={285}
            height={285}
            className="w-32 sm:w-44 md:w-[260px] lg:w-[285px] h-auto"
            alt="Profile pic"
          />
        </div>

        {/* Texto */}
        <div
          className="
            flex flex-col items-center md:items-start justify-center
            w-full md:w-1/2
            max-w-md text-center md:text-left
          "
        >
          <h1 className="mb-3 text-lg sm:text-2xl md:text-4xl leading-tight md:mb-6">
            Hola! Bienvenido a <br/>
            <TypeAnimation
              sequence={[
                " Mi portafolio web",
                2000,
                " My web portfolio",
                1000,
                " Meu portfólio web",
                1000,
                " Mein Webportfolio",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary text-base sm:text-xl md:text-2xl"
            />
          </h1>

          <p className="mb-3 text-xs sm:text-sm md:text-lg leading-relaxed px-2 sm:px-0">
            Como desarrollador me caracterizo por mi capacidad de adaptación,
            trabajo en equipo y un fuerte deseo de aprender y aplicar nuevas tecnologías.
            Busco oportunidades para ampliar mi experiencia y aportar en proyectos innovadores.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-6">
            <a
              href="/about-me"
              className="px-3 py-2 border-2 border-primary text-primary rounded-xl w-fit text-xs sm:text-sm md:text-md hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              Experiencia laboral
            </a>
            <a
              href="/projects"
              className="px-3 py-2 border-2 border-primary text-primary rounded-xl w-fit text-xs sm:text-sm md:text-md hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              Mis Proyectos
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Introduction;