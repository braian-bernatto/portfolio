// Centralized, fully-typed, locale-aware portfolio data.
// Translatable strings use L(en, es); plain strings are identical in both locales.
// Edit values here to update the site content for both languages.

import type { Locale } from '../i18n/config';

export type Loc<T> = { readonly en: T; readonly es: T };
const L = <T>(en: T, es: T): Loc<T> => ({ en, es });
const r = (v: string | Loc<string>, l: Locale): string => (typeof v === 'string' ? v : v[l]);

// ---- Static identity (identical across locales) ----
const identity = {
  name: 'Braian Bernatto',
  firstName: 'Braian',
  location: 'Asunción, Paraguay',
  city: 'Asunción',
  timezone: 'GMT-3',
  phone: '+595 983 709 234',
  phoneHref: '+595983709234',
  email: 'braian5353@gmail.com',
  github: 'https://github.com/braian-bernatto',
  linkedin: 'https://www.linkedin.com/in/braian-bernatto/',
};

// ---- Resolved shapes ----
export interface Profile {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  location: string;
  city: string;
  timezone: string;
  phone: string;
  phoneHref: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
  summary: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  summary?: string;
  highlights: { title: string; body: string }[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: { name: string; icon?: string }[];
}

export interface ProjectEntry {
  name: string;
  company?: string;
  role: string;
  date: string;
  url?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image?: string;
  featured?: boolean;
  placeholder?: 'banking';
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
}

export interface Social {
  label: string;
  href: string;
  icon: string;
}

// ---- Raw, locale-tagged data ----
const role = 'React.js Lead Frontend Developer';
const tagline = L(
  'Architecting high-performance React applications.',
  'Arquitectura de aplicaciones React de alto rendimiento.'
);
const availability = L(
  'Open to senior / lead frontend roles',
  'Disponible para roles senior / lead de frontend'
);
const summary = L(
  'Lead Frontend Developer with over 5 years of software development experience, currently specializing in architecting and scaling high-performance web applications. Focused on the modern React ecosystem (TypeScript, TanStack Suite) and driving technical modernization for enterprise platforms. Proven track record of improving Developer Experience (DX) by establishing clear architectural guidelines, comprehensive documentation, and strict code quality standards that drastically accelerate team onboarding. Passionate about bridging the gap between product requirements and scalable technical execution.',
  'Líder de Desarrollo Frontend con más de 5 años de experiencia en desarrollo de software, actualmente especializado en diseñar y escalar aplicaciones web de alto rendimiento. Enfocado en el ecosistema moderno de React (TypeScript, TanStack Suite) y en impulsar la modernización técnica para plataformas empresariales. Trayectoria comprobada mejorando la Experiencia de Desarrollo (DX) estableciendo lineamientos arquitectónicos claros, documentación exhaustiva y estándares estrictos de calidad de código que aceleran drásticamente el onboarding del equipo. Apasionado por tender el puente entre los requerimientos de producto y la ejecución técnica escalable.'
);

const stats: { value: string; label: Loc<string> }[] = [
  { value: '5+', label: L('Years in software', 'Años en software') },
  { value: '4', label: L('Production roles', 'Roles en producción') },
  { value: '90%', label: L('Bugs cut via QA standards', 'Bugs reducidos con estándares de QA') },
  { value: '80%', label: L('Faster audit tooling', 'Auditoría más rápida') },
];

const rawExperience: {
  company: string;
  role: string;
  start: Loc<string>;
  end: Loc<string>;
  current?: boolean;
  summary?: Loc<string>;
  highlights: { title: Loc<string>; body: Loc<string> }[];
  stack: string[];
}[] = [
  {
    company: 'Tu Financiera',
    role: 'Lead Frontend Developer',
    start: L('May 2024', 'may 2024'),
    end: L('Present', 'Presente'),
    current: true,
    summary: L(
      'Architecting and scaling an enterprise banking platform on a modern React ecosystem.',
      'Diseñando y escalando una plataforma bancaria empresarial sobre un ecosistema moderno de React.'
    ),
    highlights: [
      {
        title: L('Architecture & Modernization', 'Arquitectura y Modernización'),
        body: L(
          'Architected and led the technical migration to a modern frontend ecosystem, significantly reducing load times and optimizing server state management for an enterprise banking platform.',
          'Lideré la migración técnica a un ecosistema frontend moderno, reduciendo significativamente los tiempos de carga y optimizando la gestión del estado del servidor para una plataforma bancaria empresarial.'
        ),
      },
      {
        title: L('Quality Assurance', 'Aseguramiento de Calidad'),
        body: L(
          'Established comprehensive testing standards and enforced strict code-quality guardrails via ESLint and automated formatting, increasing deployment reliability to production.',
          'Establecí estándares exhaustivos de testing e impuse guardrails estrictos de calidad de código vía ESLint y formateo automatizado, aumentando la confiabilidad de los despliegues a producción.'
        ),
      },
      {
        title: L('Technical Leadership', 'Liderazgo Técnico'),
        body: L(
          'Kept the codebase self-documenting through living in-repo documentation — a curated README paired with auto-generated TSDoc component reference — streamlining the development lifecycle and drastically reducing the onboarding time for new developers.',
          'Mantuve el codebase autodocumentado mediante documentación viva en el repo — un README curado junto con una referencia de componentes auto-generada con TSDoc — agilizando el ciclo de desarrollo y reduciendo drásticamente el tiempo de onboarding para nuevos desarrolladores.'
        ),
      },
    ],
    stack: ['React.js', 'TypeScript', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Zod + RHF', 'Storybook', 'Vitest'],
  },
  {
    company: 'Innovatica',
    role: 'Frontend Developer',
    start: L('Jan 2023', 'ene 2023'),
    end: L('May 2024', 'may 2024'),
    highlights: [
      {
        title: L('Web & Mobile Delivery', 'Web y Mobile'),
        body: L(
          'Developed and maintained complex web and mobile applications using React.js and React Native, strictly adhering to modern coding standards.',
          'Desarrollé y mantuve aplicaciones web y mobile complejas usando React.js y React Native, adhiriendo estrictamente a estándares modernos de código.'
        ),
      },
      {
        title: L('Cross-functional Collaboration', 'Colaboración Interfuncional'),
        body: L(
          'Collaborated with cross-functional teams during requirements gathering, providing technical insights to define project scope and feasibility.',
          'Colaboré con equipos interfuncionales durante la recolección de requerimientos, aportando insights técnicos para definir el alcance y factibilidad del proyecto.'
        ),
      },
      {
        title: L('API Integration & Performance', 'Integración de API y Rendimiento'),
        body: L(
          'Integrated frontend UI components with backend APIs, optimizing rendering cycles and overall application performance.',
          'Integré componentes de UI frontend con APIs backend, optimizando los ciclos de render y el rendimiento general de la aplicación.'
        ),
      },
      {
        title: L('Debugging & UI Testing', 'Debugging y Testing de UI'),
        body: L(
          'Executed thorough debugging protocols and UI testing, reducing bug incidence and ensuring high-quality product delivery.',
          'Ejecuté protocolos exhaustivos de debugging y testing de UI, reduciendo la incidencia de bugs y asegurando la entrega de productos de alta calidad.'
        ),
      },
    ],
    stack: ['React.js', 'React Native', 'TypeScript', 'MaterialUI', 'Jotai'],
  },
  {
    company: 'Tribunal Superior de Justicia Electoral',
    role: 'Full-Stack Developer',
    start: L('Mar 2020', 'mar 2020'),
    end: L('Dec 2022', 'dic 2022'),
    highlights: [
      {
        title: L('Tender Contract Monitoring', 'Monitoreo de Contratos de Licitación'),
        body: L(
          'Developed a web application to monitor government tender contract balances, delivering real-time visual reports and reducing execution errors by 90%.',
          'Desarrollé una aplicación web para monitorear los saldos de contratos de licitación gubernamentales, entregando reportes visuales en tiempo real y reduciendo los errores de ejecución en un 90%.'
        ),
      },
      {
        title: L('Date & Holiday Calculator', 'Calculadora de Días y Feriados'),
        body: L(
          "Built a dynamic date and holiday calculator tailored for Paraguay's calendar, accelerating the audit process by 80% across multiple government departments.",
          'Construí una calculadora dinámica de días y feriados adaptada al calendario de Paraguay, acelerando el proceso de auditoría en un 80% en múltiples departamentos gubernamentales.'
        ),
      },
    ],
    stack: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Strapi', 'Chart.js', 'JWT'],
  },
  {
    company: 'Tribunal Superior de Justicia Electoral',
    role: 'Full-Stack Developer',
    start: L('Jan 2019', 'ene 2019'),
    end: L('Feb 2020', 'feb 2020'),
    highlights: [
      {
        title: L('String Generator App', 'App Generadora de Strings'),
        body: L(
          'Engineered a robust string generator web application equipped with CRUD operations and authentication features, reducing typos by 90% in the preparation of critical documents.',
          'Ingenié una aplicación web generadora de strings robusta, equipada con operaciones CRUD y autenticación, reduciendo los typos en un 90% en la preparación de documentos críticos.'
        ),
      },
    ],
    stack: ['EJS', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
  },
];

const rawSkillGroups: { title: Loc<string>; icon: string; skills: { name: string | Loc<string>; icon?: string }[] }[] = [
  {
    title: L('Core & Languages', 'Core y Lenguajes'),
    icon: 'lucide:code',
    skills: [
      { name: 'JavaScript (ES6+)', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'SQL', icon: 'lucide:database' },
    ],
  },
  {
    title: L('Frontend Frameworks', 'Frameworks Frontend'),
    icon: 'lucide:layout-dashboard',
    skills: [
      { name: 'React.js', icon: 'simple-icons:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'React Native', icon: 'lucide:smartphone' },
      { name: 'TanStack Start', icon: 'lucide:rocket' },
    ],
  },
  {
    title: L('Architecture & State', 'Arquitectura y Estado'),
    icon: 'lucide:boxes',
    skills: [
      { name: 'TanStack Suite', icon: 'simple-icons:tanstack' },
      { name: 'Zustand', icon: 'lucide:box' },
      { name: 'Jotai', icon: 'lucide:atom' },
    ],
  },
  {
    title: L('UI, Forms & Validation', 'UI, Formularios y Validación'),
    icon: 'lucide:palette',
    skills: [
      { name: 'TailwindCSS', icon: 'simple-icons:tailwindcss' },
      { name: 'shadcn/ui', icon: 'simple-icons:shadcnui' },
      { name: 'MaterialUI', icon: 'simple-icons:mui' },
      { name: 'React Hook Form', icon: 'simple-icons:reacthookform' },
      { name: 'Zod', icon: 'simple-icons:zod' },
    ],
  },
  {
    title: L('Testing & Tooling', 'Testing y Tooling'),
    icon: 'lucide:flask-conical',
    skills: [
      { name: 'Vitest', icon: 'simple-icons:vitest' },
      { name: 'MSW', icon: 'lucide:flask-conical' },
      { name: 'Storybook', icon: 'simple-icons:storybook' },
      { name: 'Vite', icon: 'simple-icons:vite' },
      { name: 'Bruno', icon: 'simple-icons:bruno' },
    ],
  },
  {
    title: L('Observability & Data', 'Observabilidad y Datos'),
    icon: 'lucide:activity',
    skills: [
      { name: 'OpenTelemetry', icon: 'simple-icons:opentelemetry' },
      { name: 'Prisma ORM', icon: 'simple-icons:prisma' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
    ],
  },
  {
    title: L('Workflow & Docs', 'Workflow y Docs'),
    icon: 'lucide:git-branch',
    skills: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Markdown', icon: 'simple-icons:markdown' },
      { name: 'Mermaid.js', icon: 'lucide:git-merge' },
      { name: 'Confluence', icon: 'simple-icons:confluence' },
    ],
  },
  {
    title: L('Languages', 'Idiomas'),
    icon: 'lucide:languages',
    skills: [
      { name: L('English — C2 Proficient (EF SET)', 'Inglés — C2 Competente (EF SET)'), icon: 'lucide:languages' },
      { name: L('Spanish — Native', 'Español — Nativo'), icon: 'lucide:languages' },
      { name: L('Guarani — Native', 'Guaraní — Nativo'), icon: 'lucide:languages' },
    ],
  },
];

const rawProjects: {
  name: Loc<string>;
  company?: string;
  role: string;
  date: string | Loc<string>;
  url?: string;
  summary: Loc<string>;
  highlights: (string | Loc<string>)[];
  stack: string[];
  image?: string;
  featured?: boolean;
  placeholder?: 'banking';
}[] = [
  {
    name: L('Enterprise Banking Platform', 'Plataforma Bancaria Empresarial'),
    company: 'Tu Financiera',
    role: 'Lead Frontend Developer',
    date: L('May 2024 — Present', 'may 2024 — Presente'),
    summary: L(
      'The enterprise banking platform I lead at my current job — a high-stakes product built on a modern React ecosystem, where I drove the technical migration, set the engineering standards, and shipped the design system that accelerated the whole team.',
      'La plataforma bancaria empresarial que lidero en mi trabajo actual — un producto de alto riesgo construido sobre un ecosistema moderno de React, donde impulsé la migración técnica, definí los estándares de ingeniería y envié el design system que aceleró a todo el equipo.'
    ),
    highlights: [
      L('Architecture & Modernization — Architected and led the technical migration to a modern frontend ecosystem, significantly reducing load times and optimizing server state management for an enterprise banking platform.', 'Arquitectura y Modernización — Lideré la migración técnica a un ecosistema frontend moderno, reduciendo significativamente los tiempos de carga y optimizando la gestión del estado del servidor para una plataforma bancaria empresarial.'),
      L('Quality Assurance — Established comprehensive testing standards and enforced strict code-quality guardrails via ESLint and automated formatting, increasing deployment reliability to production.', 'Aseguramiento de Calidad — Establecí estándares exhaustivos de testing e impuse guardrails estrictos de calidad de código vía ESLint y formateo automatizado, aumentando la confiabilidad de los despliegues a producción.'),
      L('Technical Leadership — Defined and enforced engineering standards through a Docs as Code approach, streamlining the development lifecycle and drastically reducing the onboarding time for new developers.', 'Liderazgo Técnico — Definí e impuse estándares de ingeniería mediante un enfoque Docs as Code, agilizando el ciclo de desarrollo y reduciendo drásticamente el tiempo de onboarding para nuevos desarrolladores.'),
    ],
    stack: ['React.js', 'TypeScript', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Zod + RHF', 'Storybook', 'Vitest'],
    featured: true,
    placeholder: 'banking',
  },
  {
    name: L('Eagle Eye Website', 'Sitio Web Eagle Eye'),
    role: 'Full-Stack Developer',
    date: L('Aug 2022 — Sep 2022', 'ago 2022 — sep 2022'),
    url: 'https://eagleeye.com.py',
    summary: L(
      'A dynamic, multilingual website tailored for a soccer-centric business, with an intuitive contact form and seamless cross-language interactions via next-translate.',
      'Un sitio web dinámico y multilingüe adaptado para un negocio centrado en fútbol, con un formulario de contacto intuitivo e interacciones fluidas entre idiomas vía next-translate.'
    ),
    highlights: [
      L('Shipped a multilingual experience with next-translate across multiple languages.', 'Envié una experiencia multilingüe con next-translate en varios idiomas.'),
      L('Integrated Google Maps API for location and a custom HTML5 theme.', 'Integré la API de Google Maps para ubicación y un theme HTML5 personalizado.'),
    ],
    stack: ['Next.js', 'Google Maps API', 'Custom HTML5 Theme', 'next-translate'],
  },
  {
    name: L('Public Tenders Contracts', 'Contratos de Licitación Pública'),
    role: 'Full-Stack Developer',
    date: '2020 — 2022',
    summary: L(
      'A web app to monitor government tender contract balances with real-time visual reports, reducing execution errors by 90%.',
      'Una aplicación web para monitorear los saldos de contratos de licitación gubernamentales con reportes visuales en tiempo real, reduciendo los errores de ejecución en un 90%.'
    ),
    highlights: [
      L('Delivered real-time visual reports on tender contract balances.', 'Entregué reportes visuales en tiempo real sobre los saldos de contratos de licitación.'),
      L('Reduced execution errors by 90% across audited processes.', 'Reducí los errores de ejecución en un 90% en los procesos auditados.'),
    ],
    stack: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Strapi', 'Chart.js', 'JWT'],
  },
  {
    name: L('Paraguay Days & Holiday Calculator', 'Calculadora de Días y Feriados de Paraguay'),
    role: 'Full-Stack Developer',
    date: '2020 — 2022',
    summary: L(
      "A dynamic date and holiday calculator tailored for Paraguay's calendar, accelerating the government audit process by 80%.",
      'Una calculadora dinámica de días y feriados adaptada al calendario de Paraguay, acelerando el proceso de auditoría gubernamental en un 80%.'
    ),
    highlights: [
      L('Accelerated audit workflows by 80% across multiple government departments.', 'Aceleré los flujos de auditoría en un 80% en múltiples departamentos gubernamentales.'),
      L('Included an admin panel for holiday & calendar data manipulation.', 'Incluí un panel admin para manipulación de datos de feriados y calendario.'),
    ],
    stack: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Strapi', 'Chart.js', 'JWT'],
  },
];

const rawEducation = {
  institution: 'UTIC — Asunción',
  degree: L('Computer Science & Programming', 'Ciencias de la Computación y Programación'),
  date: L('Apr 2018', 'abr 2018'),
};

const rawSocials: { label: Loc<string>; href: string; icon: string }[] = [
  { label: L('GitHub', 'GitHub'), href: identity.github, icon: 'simple-icons:github' },
  { label: L('LinkedIn', 'LinkedIn'), href: identity.linkedin, icon: 'simple-icons:linkedin' },
  { label: L('Email', 'Correo'), href: `mailto:${identity.email}`, icon: 'lucide:mail' },
  { label: L('Phone', 'Teléfono'), href: `tel:${identity.phoneHref}`, icon: 'lucide:phone' },
];

// ---- Resolver ----
export function getPortfolio(locale: Locale) {
  return {
    profile: {
      ...identity,
      role: r(role, locale),
      tagline: r(tagline, locale),
      availability: r(availability, locale),
      summary: r(summary, locale),
    } satisfies Profile,
    stats: stats.map<Stat>((s) => ({ value: s.value, label: r(s.label, locale) })),
    experience: rawExperience.map<ExperienceEntry>((j) => ({
      company: j.company,
      role: r(j.role, locale),
      start: r(j.start, locale),
      end: r(j.end, locale),
      current: j.current,
      summary: j.summary ? r(j.summary, locale) : undefined,
      highlights: j.highlights.map((h) => ({ title: r(h.title, locale), body: r(h.body, locale) })),
      stack: j.stack,
    })),
    skillGroups: rawSkillGroups.map<SkillGroup>((g) => ({
      title: r(g.title, locale),
      icon: g.icon,
      skills: g.skills.map((s) => ({ name: r(s.name, locale), icon: s.icon })),
    })),
    projects: rawProjects.map<ProjectEntry>((p) => ({
      name: r(p.name, locale),
      company: p.company,
      role: r(p.role, locale),
      date: r(p.date, locale),
      url: p.url,
      summary: r(p.summary, locale),
      highlights: p.highlights.map((h) => r(h, locale)),
      stack: p.stack,
      image: p.image,
      featured: p.featured,
      placeholder: p.placeholder,
    })),
    education: {
      institution: rawEducation.institution,
      degree: r(rawEducation.degree, locale),
      date: r(rawEducation.date, locale),
    } satisfies Education,
    socials: rawSocials.map<Social>((s) => ({ label: r(s.label, locale), href: s.href, icon: s.icon })),
  };
}

export type Portfolio = ReturnType<typeof getPortfolio>;
