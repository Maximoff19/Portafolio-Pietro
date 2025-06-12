import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  es: {
    header: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      skills: "Habilidades"
    },
    hero: {
      greeting: "¡Hola! Soy Pietro",
      subtitle: "Desarrollador de Software apasionado por crear soluciones innovadoras",
      cta: "Ver Proyectos"
    },
    skills: {
      title: "Mis Habilidades",
      items: [
        { name: "Swift", description: "Desarrollo de aplicaciones iOS nativas." },
        { name: "HTML", description: "Estructuración de contenido web." },
        { name: "React", description: "Construcción de interfaces de usuario interactivas." },
        { name: "JavaScript", description: "Programación frontend y backend." },
        { name: "MySQL", description: "Gestión de bases de datos relacionales." },
        { name: "MongoDB", description: "Bases de datos NoSQL y escalabilidad." },
        { name: "PostgreSQL", description: "Base de datos relacional avanzada." },
        { name: "CSS", description: "Estilización y diseño responsivo." },
        { name: "Angular", description: "Framework para aplicaciones de una sola página." },
        { name: "TypeScript", description: "JavaScript con tipado estático." },
        { name: "Firebase", description: "Backend-as-a-Service de Google." },
        { name: "C++", description: "Lenguaje de programación de alto rendimiento." }
      ]
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      technologies: "Tecnologías",
      cashy: {
        title: "Cashy – Control de Finanzas Personales",
        description: "Cashy es una aplicación móvil centrada en la gestión de finanzas personales. Permite a los usuarios registrar ingresos, egresos y establecer presupuestos mensuales. Con una interfaz intuitiva y visualizaciones claras, la app ayuda a mantener un control efectivo del dinero, identificar hábitos de gasto y fomentar el ahorro.",
        techs: ["Swift (iOS)", "Firebase", "Firestore", "Google Auth."],
        images: ["/cashylogo.jpg", "/cashy.png"]
      },
      batsignal: {
        title: "BatSignal – Plataforma de Alertas de Emergencia",
        description: "BatSignal es una aplicación de seguridad que permite a los usuarios enviar alertas en tiempo real a contactos de confianza o autoridades cercanas en situaciones de emergencia. Utiliza geolocalización para indicar la ubicación exacta del usuario y ofrece un historial de alertas. Diseñada para actuar con rapidez y discreción.",
        techs: ["Swift (iOS)", "Firebase", "MapKit", "Notificaciones Push."],
        images: ["/batimg.jpg", "/bat.png"]
      }
    },
    contact: {
      title: "Contacto",
      email: "Correo Electrónico",
      copySuccess: "¡Correo copiado!",
      copyError: "Error al copiar"
    },
    footer: {
      copyright: "© 2024 Pietro. Todos los derechos reservados."
    }
  },
  en: {
    header: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      skills: "Skills"
    },
    hero: {
      greeting: "Hello! I'm Pietro",
      subtitle: "Software Developer passionate about creating innovative solutions",
      cta: "View Projects"
    },
    skills: {
      title: "My Skills",
      items: [
        { name: "Swift", description: "Development of native iOS applications." },
        { name: "HTML", description: "Structuring web content." },
        { name: "React", description: "Building interactive user interfaces." },
        { name: "JavaScript", description: "Frontend and backend programming." },
        { name: "MySQL", description: "Management of relational databases." },
        { name: "MongoDB", description: "NoSQL databases and scalability." },
        { name: "PostgreSQL", description: "Advanced relational database." },
        { name: "CSS", description: "Styling and responsive design." },
        { name: "Angular", description: "Framework for single-page applications." },
        { name: "TypeScript", description: "JavaScript with static typing." },
        { name: "Firebase", description: "Google's Backend-as-a-Service." },
        { name: "C++", description: "High-performance programming language." }
      ]
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      technologies: "Technologies",
      cashy: {
        title: "Cashy – Personal Finance Control",
        description: "Cashy is a mobile application focused on personal finance management. It allows users to record income, expenses, and set monthly budgets. With an intuitive interface and clear visualizations, the app helps maintain effective money control, identify spending habits, and encourage saving.",
        techs: ["Swift (iOS)", "Firebase", "Firestore", "Google Auth."],
        images: ["/cashylogo.jpg", "/cashy.png", "/iphone_mockups/[Mockup] iPhone 13.png", "/iphone_mockups/[Mockup] iPhone 14.png"]
      },
      batsignal: {
        title: "BatSignal – Emergency Alert Platform",
        description: "BatSignal is a security application that allows users to send real-time alerts to trusted contacts or nearby authorities in emergency situations. It uses geolocation to indicate the user's exact location and offers an alert history. Designed to act quickly and discreetly.",
        techs: ["Swift (iOS)", "Firebase", "MapKit", "Push Notifications."],
        images: ["/batimg.jpg", "/bat.png"]
      }
    },
    contact: {
      title: "Contact",
      email: "Email",
      copySuccess: "Email copied!",
      copyError: "Error copying"
    },
    footer: {
      copyright: "© 2024 Pietro. All rights reserved."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 