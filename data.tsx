import { HomeIcon, UserRound, Linkedin, FileText, FolderCode, Instagram, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/im_not_marce/",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/joaquin-torres-074282293/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/SantaPrograma",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Me",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Project",
        icon: <FolderCode size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 4,
        title: "CV",
        icon: <FileText size={25} color="#fff" strokeWidth={1} />,
        link: "/CV-Joaquin-Torres.pdf",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Barista",
        subtitle: "Starbucks El Quinde",
        description: "Preparé alimentos y bebidas cumpliendo con los estándares de calidad de Starbucks, gestioné transacciones con precisión y mantuve un entorno de trabajo limpio y armonioso.",
        date: "Marzo 2022",
    },
    {
        id: 2,
        title: "Analista de aseguramiento de calidad",
        subtitle: "FEXTECH",
        description: "Colaboré en un proyecto de adecuaciones de software para la Caja Ica, orientado a la migración de funcionalidades de un sistema existente a una nueva plataforma interna.",
        date: "Febrero 2024",
    },
    {
        id: 3,
        title: "Desarrollador web junior",
        subtitle: "Neon House Led",
        description: "Contribuí en la migración de una aplicación de PHP a Next.js y desarrollé nuevas funcionalidades alineadas con las necesidades del negocio.",
        date: "Noviembre 2024",
    },
]

export const dataProjects = [
    {
        id: 1,
        title: "Web de Gestión para \nLa Cantera",
        image: "/project-1.png",
        description: "Este proyecto consistió en la creación de un sitio web moderno y funcional para la pollería 'La Cantera'. La aplicación fue diseñada para mejorar la presencia en línea del negocio, permitiendo a los usuarios consultar el menú, realizar pedidos en línea, contactar con la empresa, etc. Además se creó una API que permita almacenar contactos y enviar mensajes de forma masiva.",
        technologies: "Java, Spring Boot, MySQL, HTML, CSS, JavaScript",
        pdfDemo: "/NebulaLaCanteraWebDemo.pdf"
    },
    {
        id: 2,
        title: "Bot Automatizado de \nTelegram",
        image: "/project-2.png",
        description: "Este proyecto consistió en el consumo de un API de Telegram para desarrollar y publicar un Bot capaz de responder de forma automática a diferentes comandos y notificar a contactos específicos cuando hay problemas en la Web o el API de La Cantera, además de almacenar los contactos con los que se haya comunicado y enviar mensajes personalizados de forma masiva.",
        technologies: "JavaScript, NodeRed, Java",
        pdfDemo: "/NebulaAssistantBotDemo.pdf"
    },
    {
        id: 3,
        title: "Aplicación para Seguimiento de Gastos",
        image: "/project-3.png",
        description: "Este proyecto consistió en la creación de un aplicativo capaz de ayudar a los usuarios a registrar y gestionar sus gastos de manera fácil y rápida. Permite ingresar información sobre cada gasto, como la fecha, el tipo, una breve descripción y el monto. Los usuarios pueden ver un listado de sus gastos y filtrar por fechas para tener un mejor control de sus finanzas personales, además de poder observar los gastos en un Dashboard.",
        technologies: "C#, .Net, SQLServer",
        pdfDemo: "/ExpenseTrackerDemo.pdf"
    },
    {
        id: 4,
        title: "Sistema de almacenamiento",
        image: "/project-4.png",
        description: "Este proyecto consistió en la creación de una plataforma de almacenamiento de archivos, dividida en dos componentes principales: frontend y backend. El sistema permite a los usuarios registrarse, iniciar sesión, cargar, ver, descargar y eliminar archivos de manera sencilla. Se utilizó Multer para gestionar la carga de archivos de forma eficiente y segura, JSON Web Tokens y encriptación de contraseñas para garantizar la seguridad y privacidad de los datos y que los usuarios solo puedan acceder a sus propios archivos, evitando que vea los archivos de otro.",
        technologies: "Node.js, JavaScript, Express.js, TypeScript, Next.js, React, SQLServer",
        pdfDemo: "/SistemaAlmacenamientoDemo.pdf"
    }
];