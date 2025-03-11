"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex flex-col md:flex-row items-center justify-center h-full p-6 py-20">

                <div className="flex justify-center md:justify-end w-full md:w-auto mb-5 md:mb-0 md:mr-20">
                    <Image src="/profile-avatar.png" priority width="285" height="285" 
                        className="md:ml-10" alt="Profile pic"/>
                </div>

                <div className="flex flex-col justify-center max-w-md text-center md:text-left">

                    <h1 className="mb-5 text-2xl leading-tight md:text-4xl md:mb-10">
                        Hola! Bienvenido a <br/>
                        <TypeAnimation sequence={[
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
                        className="font-bold text-secondary"/>
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Como desarrollador me caracterizo por mi capacidad de adaptación,
                        trabajo en equipo y un fuerte deseo de aprender y aplicar nuevas tecnologías.
                        Busco oportunidades para ampliar mi experiencia y aportar en proyectos innovadores.
                    </p>

                    <div className="flex justify-center gap-3 md:justify-start md:gap-10 pb-16 md:pb-0">

                        <a href="/about-me" className="px-3 py-2 transition-all border-2 cursor-pointer
                        text-primary border-primary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-primary/50">
                            Experiencia laboral
                        </a>
                        <a href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer
                        text-primary border-primary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-primary/50">
                            Mis Proyectos
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Introduction;
