import type { Locale } from './config';

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface Pillar {
  title: string;
  body: string;
}

export interface ContactFormStrings {
  heading: string;
  name: string;
  email: string;
  message: string;
  send: string;
  opening: string;
  privacy: string;
  placeholders: { name: string; email: string; message: string };
  errors: { name: string; email: string; message: string };
}

export interface Ui {
  nav: { href: string; label: string }[];
  actions: {
    resume: string;
    viewWork: string;
    getInTouch: string;
    backToTop: string;
    visitSite: string;
    moreOnGithub: string;
    print: string;
    backToSite: string;
  };
  sections: Record<'about' | 'experience' | 'skills' | 'projects' | 'contact', SectionCopy>;
  pillars: Pillar[];
  contact: {
    labels: { email: string; phone: string; location: string; linkedin: string };
    form: ContactFormStrings;
  };
  footer: { navigate: string; education: string; builtWith: string };
  misc: { current: string; featured: string };
  hero: { eyebrow: string; intro: string };
  resume: {
    title: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    tech: string;
    present: string;
  };
}

const en: Ui = {
  nav: [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ],
  actions: {
    resume: 'Resume',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    backToTop: 'Back to top',
    visitSite: 'Visit site',
    moreOnGithub: 'More on GitHub',
    print: 'Print / Save as PDF',
    backToSite: 'Back to site',
  },
  sections: {
    about: {
      eyebrow: 'About',
      title: 'Bridging product vision and scalable execution.',
      description: '',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Five years shipping production software.',
      description:
        'From full-stack government tooling to leading frontend architecture on an enterprise banking platform.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'The toolkit behind the work.',
      description:
        'A senior-frontend stack centered on the modern React ecosystem, with tooling, observability, and docs to keep teams moving.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work.',
      description:
        'Enterprise-grade builds and shipping products end-to-end — from government tooling to a banking platform.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something solid.",
      description:
        'Open to senior and lead frontend roles. Reach out through the form or any of the channels below — I will get back to you as soon as possible.',
    },
  },
  pillars: [
    {
      title: 'Architecture & Modernization',
      body: 'Migrating teams onto modern React ecosystems — TypeScript, TanStack, and design-system thinking — to cut load times and stabilize server state at scale.',
    },
    {
      title: 'Developer Experience',
      body: 'A Docs as Code discipline: clear architectural guidelines, comprehensive documentation, and strict quality standards that drastically accelerate onboarding.',
    },
    {
      title: 'Quality Engineering',
      body: 'Comprehensive testing standards and ESLint guardrails baked into CI — raising deployment reliability and shipping with confidence.',
    },
  ],
  contact: {
    labels: { email: 'Email', phone: 'Phone', location: 'Location', linkedin: 'LinkedIn' },
    form: {
      heading: 'Compose a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      opening: 'Opening mail…',
      privacy: 'Opens your email client via mailto — your message stays private.',
      placeholders: {
        name: 'Jane Doe',
        email: 'jane@company.com',
        message: "Hi Braian, I'd love to talk about…",
      },
      errors: {
        name: 'Please enter your name (2+ characters).',
        email: 'A valid email helps me reply.',
        message: 'Tell me a bit more (10+ characters).',
      },
    },
  },
  footer: { navigate: 'Navigate', education: 'Education', builtWith: 'Built with Astro, React & Tailwind.' },
  misc: { current: 'Current', featured: 'Featured' },
  hero: {
    eyebrow: 'Frontend',
    intro:
      'Architecting and scaling high-performance React applications. Lead the technical modernization of an enterprise banking platform across the modern React ecosystem — TypeScript, TanStack, and a design-system mindset.',
  },
  resume: {
    title: 'Resume',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    tech: 'Tech',
    present: 'Present',
  },
};

const es: Ui = {
  nav: [
    { href: '#about', label: 'Acerca' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ],
  actions: {
    resume: 'CV',
    viewWork: 'Ver mi trabajo',
    getInTouch: 'Hablemos',
    backToTop: 'Volver arriba',
    visitSite: 'Visitar sitio',
    moreOnGithub: 'Más en GitHub',
    print: 'Imprimir / Guardar como PDF',
    backToSite: 'Volver al sitio',
  },
  sections: {
    about: {
      eyebrow: 'Acerca',
      title: 'Conectando la visión de producto con la ejecución escalable.',
      description: '',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Cinco años desarrollando software en producción.',
      description:
        'Desde tooling full-stack para gobierno hasta liderar la arquitectura frontend en una plataforma bancaria empresarial.',
    },
    skills: {
      eyebrow: 'Habilidades',
      title: 'El toolkit detrás del trabajo.',
      description:
        'Un stack senior-frontend centrado en el ecosistema moderno de React, con tooling, observabilidad y docs para mantener al equipo en movimiento.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Trabajos seleccionados.',
      description:
        'Builds de nivel empresarial y productos enviados end-to-end — desde tooling gubernamental hasta una plataforma bancaria.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Construyamos algo sólido.',
      description:
        'Disponible para roles senior y lead de frontend. Escríbeme por el formulario o por cualquiera de los canales — te responderé lo antes posible.',
    },
  },
  pillars: [
    {
      title: 'Arquitectura y Modernización',
      body: 'Migrando equipos a ecosistemas modernos de React — TypeScript, TanStack y mentalidad de design system — para reducir tiempos de carga y estabilizar el estado del servidor a escala.',
    },
    {
      title: 'Experiencia de Desarrollo',
      body: 'Una disciplina de Docs as Code: lineamientos arquitectónicos claros, documentación exhaustiva y estándares estrictos de calidad que aceleran drásticamente el onboarding.',
    },
    {
      title: 'Ingeniería de Calidad',
      body: 'Estándares de testing exhaustivos y guardrails de ESLint integrados en CI — elevando la confiabilidad de los despliegues y entregando con confianza.',
    },
  ],
  contact: {
    labels: { email: 'Correo', phone: 'Teléfono', location: 'Ubicación', linkedin: 'LinkedIn' },
    form: {
      heading: 'Escribe un mensaje',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      opening: 'Abriendo correo…',
      privacy: 'Abre tu cliente de correo vía mailto — tu mensaje queda privado.',
      placeholders: {
        name: 'Jane Doe',
        email: 'jane@company.com',
        message: 'Hola Braian, me encantaría hablar sobre…',
      },
      errors: {
        name: 'Por favor ingresa tu nombre (2+ caracteres).',
        email: 'Un correo válido me ayuda a responder.',
        message: 'Cuéntame un poco más (10+ caracteres).',
      },
    },
  },
  footer: { navigate: 'Navegación', education: 'Educación', builtWith: 'Hecho con Astro, React y Tailwind.' },
  misc: { current: 'Actual', featured: 'Destacado' },
  hero: {
    eyebrow: 'Frontend',
    intro:
      'Diseñando y escalando aplicaciones React de alto rendimiento. Lidero la modernización técnica de una plataforma bancaria empresarial a través del ecosistema moderno de React — TypeScript, TanStack y mentalidad de design system.',
  },
  resume: {
    title: 'CV',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    education: 'Educación',
    tech: 'Tecnologías',
    present: 'Presente',
  },
};

export const ui: Record<Locale, Ui> = { en, es };

export function getUi(locale: Locale): Ui {
  return ui[locale];
}
