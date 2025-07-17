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
        title: "Analista QA",
        subtitle: "FEXTECH",
        description: "Colaboré en un proyecto de adecuaciones de software para la Caja Ica, enfocado en la migración de funcionalidades desde un sistema existente en Visual Basic a una nueva plataforma desarrollada en C# y .NET.",
        date: "Febrero 2024",
    },
    {
        id: 3,
        title: "Desarrollador web junior",
        subtitle: "Neon House Led",
        description: "Participé en un proyecto de migración del frontend desde HTML estático hacia una arquitectura moderna basada en Next.js y React.",
        date: "Noviembre 2024",
    },
]

export const dataProjects = [
    {
        id: 1,
        title: "Web de gestión para La Cantera (Nebula)",
        image: "/project-1.png",
        description: "Desarrollé una plataforma web de tipo e-commerce para la pollería 'La Cantera', orientada a optimizar su presencia digital y automatizar la gestión de pedidos. La solución incluye funcionalidades clave como visualización dinámica del menú, sistema de pedidos en línea, formulario de contacto con integración a base de datos y panel administrativo. Además, implementé una API RESTful para la gestión de clientes y el envío masivo de mensajes, facilitando campañas de marketing y atención al cliente. Todo el sistema fue desarrollado bajo una arquitectura robusta utilizando Java, Spring Boot y MySQL en el backend, con tecnologías web modernas en el frontend.",
        technologies: "Java, Spring Boot, HTML, CSS, JavaScript, MySQL"
    },
    {
        id: 2,
        title: "Bot automatizado de Telegram (NebulaBot)",
        image: "/project-2.png",
        description: "Implementé un bot en Telegram diseñado como canal de atención automatizada y soporte para la pollería 'La Cantera'. Este bot consume la API de Telegram y permite responder consultas frecuentes, enviar imágenes promocionales, videos, e interactuar con los usuarios en tiempo real. Además, actúa como herramienta de monitoreo notificando automáticamente a los administradores ante fallos en el sitio web o en la API. Incluye funcionalidades de envío masivo de mensajes personalizados y almacenamiento de contactos para campañas de marketing directo. La solución fue desarrollada con JavaScript, Node-RED y Java, integrando automatización, comunicación y monitoreo en un solo flujo eficiente.",
        technologies: "Java, JavaScript, Node.js, Node-RED"
    },
    {
        id: 3,
        title: "Sistema de Gestión Escolar - Angelitos del Carmelo",
        image: "/project-3.png",
        description: "Este sistema fue desarrollado para optimizar y modernizar la gestión integral del colegio inicial Angelitos del Carmelo. La plataforma sirve como base informativa orientada a padres y apoderados, además de incluir módulos para el registro y control del personal, gestión de usuarios con control de roles, inventario de recursos educativos, matrículas escolares, y un sistema de contacto directo con la institución. Cuenta con un método de autenticación segura mediante JSON Web Tokens (JWT), control de acceso según roles de usuario, encriptación segura de contraseñas, protección de rutas API y funcionalidad para carga de archivos. El diseño es intuitivo, escalable y centrado en la seguridad de los datos.",
        technologies: "TypeScript, Next.js, React, Tailwind CSS, Express.js, Node.js, MySQL, JWT"
    },
    {
        id: 4,
        title: "Aplicación para seguimiento de gastos (ExpenseTracker)",
        image: "/project-4.png",
        description: "Desarrollé una aplicación de gestión financiera personal orientada a optimizar el control de gastos diarios. La solución permite registrar transacciones con detalles como fecha, categoría, descripción y monto. Incorpora un panel de control (Dashboard) intuitivo que visualiza los gastos mediante gráficos y filtros por rango de fechas, facilitando el análisis del comportamiento financiero del usuario. El sistema fue construido con C#, .NET y SQL Server, ofreciendo una interfaz ágil y una arquitectura robusta, ideal para aplicaciones financieras escalables.",
        technologies: "C#, .NET, SQL Server"
    },
];