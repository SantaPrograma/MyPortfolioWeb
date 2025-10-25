"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 flex flex-col md:flex-row items-center justify-center min-h-screen p-6">

        {/* Imagen */}
        <div className="flex justify-center md:justify-end w-full md:w-auto mb-5 md:mb-0 md:mr-20">
          <Image
            src="/profile-avatar.png"
            priority
            width={285}
            height={285}
            className="md:ml-10"
            alt="Profile pic"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center max-w-md text-center md:text-left">

          <h1 className="mb-5 text-xl sm:text-2xl md:text-4xl leading-tight md:mb-10">
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
              className="font-bold text-secondary text-lg sm:text-xl md:text-2xl"
            />
          </h1>

          <p className="mb-2 text-sm sm:text-base md:text-xl">
            Como desarrollador me caracterizo por mi capacidad de adaptación,
            trabajo en equipo y un fuerte deseo de aprender y aplicar nuevas tecnologías.
            Busco oportunidades para ampliar mi experiencia y aportar en proyectos innovadores.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/about-me"
              className="px-3 py-2 border-2 border-primary text-primary rounded-xl w-fit text-sm sm:text-md hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              Experiencia laboral
            </a>
            <a
              href="/projects"
              className="px-3 py-2 border-2 border-primary text-primary rounded-xl w-fit text-sm sm:text-md hover:shadow-xl hover:shadow-primary/50 transition-all"
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