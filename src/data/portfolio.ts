// Centralized, fully-typed portfolio data.
// Edit values here to update the site content.

export const profile = {
  name: 'Braian Bernatto',
  firstName: 'Braian',
  role: 'React.js Lead Frontend Developer',
  tagline: 'Architecting high-performance React applications.',
  location: 'Asunción, Paraguay',
  timezone: 'GMT-3',
  phone: '+595 983 709 234',
  phoneHref: '+595983709234',
  email: 'braian5353@gmail.com',
  github: 'https://github.com/braian-bernatto',
  linkedin: 'https://www.linkedin.com/in/braian-bernatto/',
  availability: 'Open to senior / lead frontend roles',
  summary:
    'Lead Frontend Developer with over 5 years of software development experience, currently specializing in architecting and scaling high-performance web applications. Focused on the modern React ecosystem (TypeScript, TanStack Suite) and driving technical modernization for enterprise platforms. Proven track record of improving Developer Experience (DX) by establishing clear architectural guidelines, comprehensive documentation, and strict code quality standards that drastically accelerate team onboarding. Passionate about bridging the gap between product requirements and scalable technical execution.',
};

export const stats: { value: string; label: string }[] = [
  { value: '5+', label: 'Years in software' },
  { value: '4', label: 'Production roles' },
  { value: '90%', label: 'Bugs cut via QA standards' },
  { value: '80%', label: 'Faster audit tooling' },
];

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

export const experience: ExperienceEntry[] = [
  {
    company: 'Tu Financiera',
    role: 'Lead Frontend Developer',
    start: 'May 2024',
    end: 'Present',
    current: true,
    summary:
      'Architecting and scaling an enterprise banking platform on a modern React ecosystem.',
    highlights: [
      {
        title: 'Architecture & Modernization',
        body: 'Architected and led the technical migration to a modern frontend ecosystem, significantly reducing load times and optimizing server state management for an enterprise banking platform.',
      },
      {
        title: 'Quality Assurance',
        body: 'Established comprehensive testing standards and enforced strict code-quality guardrails via ESLint and automated formatting, increasing deployment reliability to production.',
      },
      {
        title: 'Technical Leadership',
        body: 'Defined and enforced engineering standards through a "Docs as Code" approach, streamlining the development lifecycle and drastically reducing the onboarding time for new developers.',
      },
    ],
    stack: ['React.js', 'TypeScript', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Zod + RHF', 'Storybook', 'Vitest'],
  },
  {
    company: 'Innovatica',
    role: 'Frontend Developer',
    start: 'Jan 2023',
    end: 'May 2024',
    highlights: [
      {
        title: 'Web & Mobile Delivery',
        body: 'Developed and maintained complex web and mobile applications using React.js and React Native, strictly adhering to modern coding standards.',
      },
      {
        title: 'Cross-functional Collaboration',
        body: 'Collaborated with cross-functional teams during requirements gathering, providing technical insights to define project scope and feasibility.',
      },
      {
        title: 'API Integration & Performance',
        body: 'Integrated frontend UI components with backend APIs, optimizing rendering cycles and overall application performance.',
      },
      {
        title: 'Debugging & UI Testing',
        body: 'Executed thorough debugging protocols and UI testing, reducing bug incidence and ensuring high-quality product delivery.',
      },
    ],
    stack: ['React.js', 'React Native', 'TypeScript', 'MaterialUI', 'Jotai'],
  },
  {
    company: 'Tribunal Superior de Justicia Electoral',
    role: 'Full-Stack Developer',
    start: 'Mar 2020',
    end: 'Dec 2022',
    highlights: [
      {
        title: 'Tender Contract Monitoring',
        body: 'Developed a web application to monitor government tender contract balances, delivering real-time visual reports and reducing execution errors by 90%.',
      },
      {
        title: 'Date & Holiday Calculator',
        body: 'Built a dynamic date and holiday calculator tailored for Paraguay’s calendar, accelerating the audit process by 80% across multiple government departments.',
      },
    ],
    stack: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Strapi', 'Chart.js', 'JWT'],
  },
  {
    company: 'Tribunal Superior de Justicia Electoral',
    role: 'Full-Stack Developer',
    start: 'Jan 2019',
    end: 'Feb 2020',
    highlights: [
      {
        title: 'String Generator App',
        body: 'Engineered a robust string generator web application equipped with CRUD operations and authentication features, reducing typos by 90% in the preparation of critical documents.',
      },
    ],
    stack: ['EJS', 'CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
  },
];

export interface SkillGroup {
  title: string;
  icon: string; // iconify name
  skills: { name: string; icon?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core & Languages',
    icon: 'lucide:code',
    skills: [
      { name: 'JavaScript (ES6+)', icon: 'simple-icons:javascript' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'SQL', icon: 'lucide:database' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    icon: 'lucide:layout-dashboard',
    skills: [
      { name: 'React.js', icon: 'simple-icons:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'React Native', icon: 'lucide:smartphone' },
      { name: 'TanStack Start', icon: 'lucide:rocket' },
    ],
  },
  {
    title: 'Architecture & State',
    icon: 'lucide:boxes',
    skills: [
      { name: 'TanStack Suite', icon: 'simple-icons:tanstack' },
      { name: 'Zustand', icon: 'lucide:box' },
      { name: 'Jotai', icon: 'lucide:atom' },
    ],
  },
  {
    title: 'UI, Forms & Validation',
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
    title: 'Testing & Tooling',
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
    title: 'Observability & Data',
    icon: 'lucide:activity',
    skills: [
      { name: 'OpenTelemetry', icon: 'simple-icons:opentelemetry' },
      { name: 'Prisma ORM', icon: 'simple-icons:prisma' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
    ],
  },
  {
    title: 'Workflow & Docs',
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
    title: 'Languages',
    icon: 'lucide:languages',
    skills: [
      { name: 'English — C2 Proficient (EF SET)', icon: 'lucide:languages' },
      { name: 'Spanish — Native', icon: 'lucide:languages' },
      { name: 'Guarani — Native', icon: 'lucide:languages' },
    ],
  },
];

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

export const projects: ProjectEntry[] = [
  {
    name: 'Enterprise Banking Platform',
    company: 'Tu Financiera',
    role: 'Lead Frontend Developer',
    date: 'May 2024 — Present',
    summary:
      'The enterprise banking platform I lead at my current job — a high-stakes product built on a modern React ecosystem, where I drove the technical migration, set the engineering standards, and shipped the design system that accelerated the whole team.',
    highlights: [
      'Architecture & Modernization — Architected and led the technical migration to a modern frontend ecosystem, significantly reducing load times and optimizing server state management for an enterprise banking platform.',
      'Quality Assurance — Established comprehensive testing standards and enforced strict code-quality guardrails via ESLint and automated formatting, increasing deployment reliability to production.',
      'Technical Leadership — Defined and enforced engineering standards through a "Docs as Code" approach, streamlining the development lifecycle and drastically reducing the onboarding time for new developers.',
    ],
    stack: ['React.js', 'TypeScript', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Zod + RHF', 'Storybook', 'Vitest'],
    featured: true,
    placeholder: 'banking',
  },
  {
    name: 'Eagle Eye Website',
    role: 'Full-Stack Developer',
    date: 'Aug 2022 — Sep 2022',
    url: 'https://eagleeye.com.py',
    summary:
      'A dynamic, multilingual website tailored for a soccer-centric business, with an intuitive contact form and seamless cross-language interactions via next-translate.',
    highlights: [
      'Shipped a multilingual experience with next-translate across multiple languages.',
      'Integrated Google Maps API for location and a custom HTML5 theme.',
    ],
    stack: ['Next.js', 'Google Maps API', 'Custom HTML5 Theme', 'next-translate'],
  },
  {
    name: 'Public Tenders Contracts',
    role: 'Full-Stack Developer',
    date: '2020 — 2022',
    summary:
      'A web app to monitor government tender contract balances with real-time visual reports, reducing execution errors by 90%.',
    highlights: [
      'Delivered real-time visual reports on tender contract balances.',
      'Reduced execution errors by 90% across audited processes.',
    ],
    stack: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Strapi', 'Chart.js', 'JWT'],
  },
  {
    name: 'Paraguay Days & Holiday Calculator',
    role: 'Full-Stack Developer',
    date: '2020 — 2022',
    summary:
      'A dynamic date and holiday calculator tailored for Paraguay’s calendar, accelerating the government audit process by 80%.',
    highlights: [
      'Accelerated audit workflows by 80% across multiple government departments.',
      'Included an admin panel for holiday & calendar data manipulation.',
    ],
    stack: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'Strapi', 'Chart.js', 'JWT'],
  },
];

export const education = {
  institution: 'UTIC — Asunción',
  degree: 'Computer Science & Programming',
  date: 'Apr 2018',
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: 'simple-icons:github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'simple-icons:linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'lucide:mail' },
  { label: 'Phone', href: `tel:${profile.phoneHref}`, icon: 'lucide:phone' },
];
