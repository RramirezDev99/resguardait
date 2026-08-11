export const SITE = {
  name: 'ResguardaIt',
  domain: 'resguardait.lat',
  url: 'https://resguardait.lat',
  tagline: 'Tu presencia digital, protegida y sin dolores de cabeza',
  description:
    'Ciberseguridad, desarrollo web y administración de dominios y hosting para empresas. Nosotros nos encargamos de la parte técnica para que tú te dediques a tu negocio.',
  email: 'contacto@resguardait.lat',
  whatsapp: '+000000000000', // TODO: reemplazar por tu número real
  lang: 'es',
};

export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Precios', href: '/precios' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: 'shield' | 'code' | 'globe' | 'server' | 'transfer' | 'support';
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'ciberseguridad',
    title: 'Ciberseguridad',
    summary:
      'Auditamos y blindamos tu infraestructura para reducir el riesgo de intrusiones, filtraciones y caídas de servicio.',
    icon: 'shield',
    features: [
      'Auditoría de seguridad y análisis de vulnerabilidades',
      'Hardening de servidores y configuraciones',
      'WAF, protección DDoS y reglas en Cloudflare',
      'Certificados SSL/TLS y políticas HTTPS',
      'Copias de seguridad y plan de recuperación',
    ],
  },
  {
    slug: 'desarrollo-web',
    title: 'Desarrollo de páginas web',
    summary:
      'Sitios rápidos, accesibles y optimizados para buscadores, construidos con tecnología moderna y fáciles de mantener.',
    icon: 'code',
    features: [
      'Landing pages y sitios corporativos',
      'Diseño responsive y accesible',
      'SEO técnico y rendimiento (Core Web Vitals)',
      'Blog y gestión de contenidos',
      'Integración de formularios y analítica',
    ],
  },
  {
    slug: 'dominios',
    title: 'Registro y transferencia de dominios',
    summary:
      'Gestionamos el alta, la renovación y la transferencia de tus dominios sin que pierdas ni un minuto de servicio.',
    icon: 'transfer',
    features: [
      'Registro de dominios nuevos',
      'Transferencia entre registradores sin downtime',
      'Configuración de DNS, MX y registros SPF/DKIM/DMARC',
      'Renovaciones automáticas y control de vencimientos',
      'Protección de dominio y WHOIS privado',
    ],
  },
  {
    slug: 'hosting-administrado',
    title: 'Hosting administrado',
    summary:
      'Nos encargamos del servidor, las actualizaciones y los respaldos. Tú solo te preocupas por tu negocio.',
    icon: 'server',
    features: [
      'Despliegue y configuración del hosting',
      'Actualizaciones y parches de seguridad',
      'Respaldos automáticos y restauración',
      'CDN y caché para máxima velocidad',
      'Monitoreo de disponibilidad 24/7',
    ],
  },
  {
    slug: 'correo-corporativo',
    title: 'Correo corporativo',
    summary:
      'Correo profesional con tu propio dominio, configurado para llegar a la bandeja de entrada y no al spam.',
    icon: 'globe',
    features: [
      'Cuentas @tuempresa.com',
      'Configuración anti-spam y anti-suplantación',
      'Migración de correos existentes',
      'Alta de dispositivos y clientes de correo',
    ],
  },
  {
    slug: 'soporte',
    title: 'Soporte y mantenimiento',
    summary:
      'Un punto de contacto único para todo lo técnico, con tiempos de respuesta claros y sin lenguaje enredado.',
    icon: 'support',
    features: [
      'Soporte por WhatsApp y correo',
      'Cambios y mejoras en el sitio',
      'Reportes mensuales de estado',
      'Asesoría en decisiones tecnológicas',
    ],
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const PLANS: Plan[] = [
  {
    name: 'Esencial',
    price: '$—',
    period: '/mes',
    description: 'Para quien ya tiene su web y solo necesita que alguien la cuide.',
    cta: 'Empezar',
    features: [
      'Administración de 1 dominio',
      'Hosting administrado con CDN',
      'Certificado SSL y renovaciones',
      'Respaldos semanales',
      'Monitoreo de disponibilidad',
      'Soporte por correo (48 h)',
    ],
  },
  {
    name: 'Profesional',
    price: '$—',
    period: '/mes',
    description: 'El más elegido: web, dominio, correo y seguridad en un solo lugar.',
    featured: true,
    cta: 'Solicitar propuesta',
    features: [
      'Todo lo de Esencial',
      'Sitio web hasta 6 secciones incluido',
      'Hasta 5 cuentas de correo corporativo',
      'Respaldos diarios',
      'WAF y protección DDoS',
      'Cambios menores ilimitados',
      'Soporte por WhatsApp (24 h)',
    ],
  },
  {
    name: 'Empresarial',
    price: 'A medida',
    period: '',
    description: 'Para empresas con varios dominios, sistemas internos o requisitos de cumplimiento.',
    cta: 'Hablemos',
    features: [
      'Todo lo de Profesional',
      'Múltiples dominios y subdominios',
      'Auditoría de seguridad periódica',
      'Plan de recuperación ante desastres',
      'Reportes mensuales y reuniones de seguimiento',
      'Soporte prioritario (4 h)',
    ],
  },
];

export type CaseStudy = {
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const CASES: CaseStudy[] = [
  {
    client: 'Distribuidora regional',
    sector: 'Comercio mayorista',
    challenge:
      'El dominio estaba a nombre de un proveedor antiguo y el sitio caía varias veces al mes.',
    solution:
      'Transferimos el dominio a una cuenta propia de la empresa, migramos el sitio a hosting administrado con CDN y configuramos monitoreo.',
    results: ['Cero caídas en 12 meses', 'Carga 3× más rápida', 'Control total del dominio'],
  },
  {
    client: 'Clínica privada',
    sector: 'Salud',
    challenge:
      'Correos corporativos llegaban a spam y no existían respaldos de la información del sitio.',
    solution:
      'Configuramos SPF, DKIM y DMARC, migramos el correo y activamos respaldos diarios con restauración probada.',
    results: ['98 % de entregabilidad', 'Respaldos diarios verificados', 'Cumplimiento documentado'],
  },
  {
    client: 'Estudio contable',
    sector: 'Servicios profesionales',
    challenge: 'Página desactualizada, sin HTTPS y sin ninguna estrategia de captación.',
    solution:
      'Rediseñamos el sitio con enfoque en SEO local, activamos HTTPS y añadimos formularios de contacto medibles.',
    results: ['+140 % de visitas orgánicas', 'HTTPS y buenas prácticas', '12 consultas nuevas al mes'],
  },
];

export const FAQS = [
  {
    q: '¿Puedo transferir mi dominio sin que mi web se caiga?',
    a: 'Sí. Replicamos primero toda la configuración DNS en el nuevo proveedor y solo después ejecutamos la transferencia, así el servicio nunca se interrumpe.',
  },
  {
    q: '¿El dominio queda a mi nombre?',
    a: 'Siempre. El dominio y las cuentas se registran a nombre de tu empresa; nosotros solo los administramos. Si algún día quieres irte, te entregamos los accesos completos.',
  },
  {
    q: '¿Trabajan con empresas fuera de mi país?',
    a: 'Sí, trabajamos en remoto con clientes de toda Latinoamérica. La comunicación es por WhatsApp, correo y videollamada.',
  },
  {
    q: '¿Qué pasa si mi sitio sufre un ataque?',
    a: 'Contamos con respaldos y un plan de respuesta. Restauramos el servicio, identificamos el vector de entrada y aplicamos las medidas para que no vuelva a ocurrir.',
  },
  {
    q: '¿Necesito un contrato largo?',
    a: 'No. Los planes son mensuales y puedes cancelar cuando quieras. Preferimos que te quedes por el servicio, no por una cláusula.',
  },
];
