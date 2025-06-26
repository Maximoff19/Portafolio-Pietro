const translations = {
  es: {
    header: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      skills: "Habilidades"
    },
    hero: {
      title: "¡Hola! Soy Pietro",
      greeting: "¡Hola! Soy Pietro",
      subtitle: "Desarrollador de Software apasionado por crear soluciones innovadoras",
      cta: "Ver Proyectos",
      contact: "Contacto"
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Desarrollador Mobile apasionado por la innovación",
      paragraph1: "Soy un desarrollador de software apasionado por la tecnología y la innovación. Me especializo en el desarrollo mobile para iOS, creando aplicaciones modernas y escalables que resuelven problemas reales.",
      paragraph2: "Tengo experiencia en tecnologías como React, Node.js, Python y bases de datos, disfruto trabajando en proyectos desafiantes que me permiten aprender y crecer constantemente como desarrollador.",
      paragraph3: "Mi objetivo es crear software de calidad que no solo funcione correctamente, sino que también proporcione una excelente experiencia de usuario y contribuya positivamente al mundo digital.",
      years: "Años de Experiencia",
      projects: "Proyectos Completados",
      technologies: "Tecnologías Dominadas"
    },
    skills: {
      title: "Mis Habilidades",
      items: [
        { name: "Swift", description: "Desarrollo de aplicaciones iOS nativas.", icon: "devicon-swift-plain" },
        { name: "HTML", description: "Estructuración de contenido web.", icon: "devicon-html5-plain" },
        { name: "React", description: "Construcción de interfaces de usuario interactivas.", icon: "devicon-react-original" },
        { name: "JavaScript", description: "Programación frontend y backend.", icon: "devicon-javascript-plain" },
        { name: "MySQL", description: "Gestión de bases de datos relacionales.", icon: "devicon-mysql-plain" },
        { name: "MongoDB", description: "Bases de datos NoSQL y escalabilidad.", icon: "devicon-mongodb-plain" },
        { name: "PostgreSQL", description: "Base de datos relacional avanzada.", icon: "devicon-postgresql-plain" },
        { name: "CSS", description: "Estilización y diseño responsivo.", icon: "devicon-css3-plain" },
        { name: "Angular", description: "Framework para aplicaciones de una sola página.", icon: "devicon-angularjs-plain" },
        { name: "TypeScript", description: "JavaScript con tipado estático.", icon: "devicon-typescript-plain" },
        { name: "Firebase", description: "Backend-as-a-Service de Google.", icon: "fa-solid fa-fire" },
        { name: "C++", description: "Lenguaje de programación de alto rendimiento.", icon: "devicon-cplusplus-plain" }
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
        cardImage: "cashylogo.jpg",
        modalImages: ["cashy.png"]
      },
      batsignal: {
        title: "BatSignal – Plataforma de Alertas de Emergencia",
        description: "BatSignal es una aplicación de seguridad que permite a los usuarios enviar alertas en tiempo real a contactos de confianza o autoridades cercanas en situaciones de emergencia. Utiliza geolocalización para indicar la ubicación exacta del usuario y ofrece un historial de alertas. Diseñada para actuar con rapidez y discreción.",
        techs: ["Swift (iOS)", "Firebase", "MapKit", "Notificaciones Push."],
        cardImage: "batimg.jpg",
        modalImages: ["bat.png"]
      },
      psycare: {
        title: "PsyCare – Asistente virtual de salud mental",
        description: "Asistente virtual de salud mental con diagnóstico temprano de ansiedad y depresión usando Google Gemini, además de un increíble gestor de citas psicológicas y herramientas de ayuda para la salud mental.",
        techs: ["Node.js", "Google Gemini", "Express", "HTML", "CSS", "JS"],
        cardImage: "logoPsyCare.png",
        modalImages: ["mockup.png"]
      }
    },
    contact: {
      title: "Contacto",
      email: "Copiar Correo",
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
      title: "Hello! I'm Pietro",
      greeting: "Hello! I'm Pietro",
      subtitle: "Software Developer passionate about creating innovative solutions",
      cta: "View Projects",
      contact: "Contact"
    },
    about: {
      title: "About Me",
      subtitle: "Mobile iOS Developer passionate about innovation",
      paragraph1: "I am a software developer passionate about technology and innovation. I specialize in mobile development for iOS, creating modern and scalable applications that solve real-world problems.",
      paragraph2: "With experience in technologies like React, Node.js, Python and databases, I enjoy working on challenging projects that allow me to learn and grow constantly as a developer.",
      paragraph3: "My goal is to create quality software that not only works correctly, but also provides an excellent user experience and contributes positively to the digital world.",
      years: "Years of Experience",
      projects: "Completed Projects",
      technologies: "Mastered Technologies"
    },
    skills: {
      title: "My Skills",
      items: [
        { name: "Swift", description: "Development of native iOS applications.", icon: "devicon-swift-plain" },
        { name: "HTML", description: "Structuring web content.", icon: "devicon-html5-plain" },
        { name: "React", description: "Building interactive user interfaces.", icon: "devicon-react-original" },
        { name: "JavaScript", description: "Frontend and backend programming.", icon: "devicon-javascript-plain" },
        { name: "MySQL", description: "Management of relational databases.", icon: "devicon-mysql-plain" },
        { name: "MongoDB", description: "NoSQL databases and scalability.", icon: "devicon-mongodb-plain" },
        { name: "PostgreSQL", description: "Advanced relational database.", icon: "devicon-postgresql-plain" },
        { name: "CSS", description: "Styling and responsive design.", icon: "devicon-css3-plain" },
        { name: "Angular", description: "Framework for single-page applications.", icon: "devicon-angularjs-plain" },
        { name: "TypeScript", description: "JavaScript with static typing.", icon: "devicon-typescript-plain" },
        { name: "Firebase", description: "Backend-as-a-Service de Google.", icon: "fa-solid fa-fire" },
        { name: "C++", description: "High-performance programming language.", icon: "devicon-cplusplus-plain" }
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
        cardImage: "cashylogo.jpg",
        modalImages: ["cashy.png"]
      },
      batsignal: {
        title: "BatSignal – Emergency Alert Platform",
        description: "BatSignal is a security application that allows users to send real-time alerts to trusted contacts or nearby authorities in emergency situations. It uses geolocation to indicate the user's exact location and offers an alert history. Designed to act quickly and discreetly.",
        techs: ["Swift (iOS)", "Firebase", "MapKit", "Push Notifications."],
        cardImage: "batimg.jpg",
        modalImages: ["bat.png"]
      },
      psycare: {
        title: "PsyCare – Virtual Mental Health Assistant",
        description: "Virtual mental health assistant with early diagnosis of anxiety and depression using Google Gemini, plus an amazing psychological appointment manager and mental health support tools.",
        techs: ["Node.js", "Google Gemini", "Express", "HTML", "CSS", "JS"],
        cardImage: "logoPsyCare.png",
        modalImages: ["mockup.png"]
      }
    },
    contact: {
      title: "Contact",
      email: "Copy Email",
      copySuccess: "Email copied!",
      copyError: "Error copying"
    },
    footer: {
      copyright: "© 2024 Pietro. All rights reserved."
    }
  }
}; 