export const company = {
  name: 'New Flooring Process Ltd',
  shortName: 'New Flooring Process',
  number: '12846575',
  phone: '+44 7307 224302',
  phoneHref: 'tel:+447307224302',
  email: 'info@newflooringprocess.uk',
  domain: 'newflooringprocess.uk',
  location: 'London, UK',
  address: 'Churchill House, 137-139 Brent Street, London, NW4 4DJ',
  tagline: 'Professional Flooring, Carpentry & Refurbishment Solutions',
}

export type NavItem = { label: string; href: string }

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Commercial & Public Sector', href: '/commercial-public-sector' },
  { label: 'Health & Safety', href: '/health-safety' },
  { label: 'Contact', href: '/contact' },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    slug: 'flooring',
    title: 'Commercial Flooring Installation',
    short:
      'LVT, vinyl sheet, safety flooring, carpet tiles, laminate and engineered timber.',
    description:
      'Supply and installation of commercial and residential floor coverings across every sector. Our fitters work to manufacturer specifications and British Standards to deliver hard-wearing, compliant and visually consistent finishes.',
    points: [
      'Luxury vinyl tile (LVT) and plank',
      'Vinyl sheet and safety flooring',
      'Carpet, carpet tiles and entrance matting',
      'Laminate and engineered timber flooring',
    ],
  },
  {
    slug: 'subfloor-preparation',
    title: 'Subfloor Preparation & Screeding',
    short: 'Latex levelling, screeding, moisture control and floor repairs.',
    description:
      'A sound, level and dry subfloor is the foundation of every quality floor finish. We provide comprehensive subfloor preparation to eliminate defects before installation and protect the longevity of the finished floor.',
    points: [
      'Latex self-levelling compounds',
      'Sand and cement / flowing screeds',
      'Damp proof membranes and moisture control',
      'Grinding, patching and floor repairs',
    ],
  },
  {
    slug: 'carpentry-joinery',
    title: 'Carpentry & Joinery',
    short:
      'First and second fix carpentry, doors, ironmongery, skirtings and bespoke joinery.',
    description:
      'Skilled carpentry and joinery delivered by experienced tradespeople. From structural first fix through to precise second fix finishing and bespoke fabricated items, we deliver clean, accurate workmanship.',
    points: [
      'First and second fix carpentry',
      'Doors, frames and ironmongery',
      'Skirting boards and architraves',
      'Bespoke joinery and kitchen fitting',
    ],
  },
  {
    slug: 'refurbishment-fit-out',
    title: 'Refurbishment & Fit-Out',
    short:
      'Internal refurbishment and commercial and residential fit-out projects.',
    description:
      'End-to-end internal refurbishment and fit-out for commercial and residential spaces. We coordinate trades, programme and quality control to transform occupied and vacant spaces with minimal disruption.',
    points: [
      'Commercial office and retail fit-out',
      'Residential refurbishment',
      'Partitions, decoration and finishes',
      'Trade coordination and programme management',
    ],
  },
  {
    slug: 'planned-maintenance',
    title: 'Planned Maintenance',
    short:
      'Scheduled maintenance programmes for property managers and estates.',
    description:
      'Proactive, scheduled maintenance to keep floors, joinery and internal finishes in optimal condition. We work to agreed programmes and service levels for property managers, housing providers and estates teams.',
    points: [
      'Cyclical maintenance programmes',
      'Condition surveys and reporting',
      'Agreed KPIs and service levels',
      'Flexible scheduling around occupants',
    ],
  },
  {
    slug: 'responsive-repairs',
    title: 'Responsive Repairs',
    short: 'Reactive repairs delivered quickly and to a high standard.',
    description:
      'A responsive repairs service for flooring, carpentry and internal finishes. We attend promptly, diagnose accurately and complete durable repairs with clear communication throughout.',
    points: [
      'Reactive flooring and joinery repairs',
      'Prompt attendance and diagnosis',
      'Minor works and making good',
      'Clear reporting and sign-off',
    ],
  },
  {
    slug: 'void-works',
    title: 'Void Works',
    short:
      'Fast turnaround of void properties for re-let and re-occupation.',
    description:
      'Efficient void refurbishment to prepare empty properties for re-let or handover. We combine flooring, carpentry and refurbishment trades to deliver rapid, compliant turnarounds against tight programmes.',
    points: [
      'Rapid void turnaround',
      'Flooring renewal and making good',
      'Carpentry and repairs',
      'Clean, compliant handover',
    ],
  },
]

export type Sector = { title: string; description: string }

export const sectors: Sector[] = [
  {
    title: 'Commercial Offices',
    description:
      'Flooring and fit-out for workspaces, delivered around business operations.',
  },
  {
    title: 'Residential',
    description:
      'Refurbishment and flooring for private and rented homes.',
  },
  {
    title: 'Housing Associations',
    description:
      'Planned maintenance, responsive repairs and void works at scale.',
  },
  {
    title: 'Education',
    description:
      'Durable, compliant flooring and works for schools and colleges.',
  },
  {
    title: 'Healthcare',
    description:
      'Hygienic safety flooring and finishes for clinical environments.',
  },
  {
    title: 'Retail',
    description:
      'Robust, high-footfall flooring and shop-fit works.',
  },
  {
    title: 'Hospitality',
    description:
      'Premium finishes and flooring for hotels, bars and restaurants.',
  },
  {
    title: 'Property Management',
    description:
      'Reliable partner for managing agents across property portfolios.',
  },
]

export type Project = {
  title: string
  sector: string
  location: string
  scope: string
  value: string
  image: string
  summary: string
}

// Placeholder portfolio content — replace with real project photography and details.
export const projects: Project[] = [
  {
    title: 'Commercial Office Fit-Out',
    sector: 'Commercial Offices',
    location: 'London [placeholder]',
    scope: 'LVT flooring, carpet tiles and second fix carpentry',
    value: 'Project value on request [placeholder]',
    image: '/images/project-office.png',
    summary:
      'Full flooring and finishing package for a modern commercial workspace. Replace this placeholder with your project details.',
  },
  {
    title: 'Retail Unit Refurbishment',
    sector: 'Retail',
    location: 'London [placeholder]',
    scope: 'Safety flooring, subfloor preparation and shop-fit',
    value: 'Project value on request [placeholder]',
    image: '/images/project-retail.png',
    summary:
      'Hard-wearing flooring installation for a high-footfall retail environment. Replace this placeholder with your project details.',
  },
  {
    title: 'Healthcare Facility Flooring',
    sector: 'Healthcare',
    location: 'London [placeholder]',
    scope: 'Welded safety sheet vinyl and hygienic finishes',
    value: 'Project value on request [placeholder]',
    image: '/images/project-healthcare.png',
    summary:
      'Hygienic, slip-resistant flooring for a clinical setting. Replace this placeholder with your project details.',
  },
  {
    title: 'Residential Void Works',
    sector: 'Housing Associations',
    location: 'London [placeholder]',
    scope: 'Flooring renewal, carpentry and making good',
    value: 'Project value on request [placeholder]',
    image: '/images/project-residential.png',
    summary:
      'Rapid void turnaround to return a property to re-let standard. Replace this placeholder with your project details.',
  },
  {
    title: 'Education Corridor Flooring',
    sector: 'Education',
    location: 'London [placeholder]',
    scope: 'Vinyl and carpet tile flooring with entrance matting',
    value: 'Project value on request [placeholder]',
    image: '/images/project-education.png',
    summary:
      'Durable flooring for busy circulation spaces. Replace this placeholder with your project details.',
  },
  {
    title: 'Hospitality Interior Fit-Out',
    sector: 'Hospitality',
    location: 'London [placeholder]',
    scope: 'Engineered timber, LVT and bespoke joinery',
    value: 'Project value on request [placeholder]',
    image: '/images/project-hospitality.png',
    summary:
      'Premium flooring and joinery for a hospitality interior. Replace this placeholder with your project details.',
  },
]

export const whyChooseUs = [
  {
    title: 'Professional Project Management',
    description:
      'Clear programmes, single points of contact and structured delivery on every project.',
  },
  {
    title: 'Health & Safety First',
    description:
      'RAMS, COSHH and safe systems of work embedded across all our operations.',
  },
  {
    title: 'Quality Workmanship',
    description:
      'Experienced, directly managed trades delivering consistent, compliant finishes.',
  },
  {
    title: 'Reliable & Flexible Delivery',
    description:
      'Works planned around your operations, occupants and programme constraints.',
  },
]

export type Accreditation = {
  title: string
  issuer: string
  reference?: string
  detail: string
  meta?: { label: string; value: string }[]
}

export const accreditations: Accreditation[] = [
  {
    title: 'ISO 45001:2018',
    issuer: 'Citation ISO Certification Limited',
    reference: 'Certificate no. 530212026',
    detail:
      'Occupational Health & Safety Management System certified against the international standard. Scope covers surveying, measuring, preparation, installation, finishing and construction management of bespoke sub and raised access flooring to the commercial and residential sectors.',
    meta: [
      { label: 'Original approval', value: '17 Aug 2026' },
      { label: 'Certificate expiry', value: '16 Aug 2027' },
    ],
  },
  {
    title: 'Citation Health & Safety',
    issuer: 'Citation Ltd — Wilmslow, Cheshire',
    reference: 'Compliance ref. ATLCC-0000076045',
    detail:
      'Retained health & safety and employment-law compliance support from IOSH/IIRSM-accredited consultants, including tailored policies, an employee handbook, ongoing legislative updates and a 9–5 advice line.',
    meta: [
      { label: 'Valid from', value: '29 Jun 2026' },
      { label: 'Valid to', value: '28 Sep 2033' },
    ],
  },
  {
    title: 'Managed Safety Systems',
    issuer: 'RAMS · COSHH · Safe Systems of Work',
    detail:
      'Risk Assessments and Method Statements, COSHH assessments, site-specific inductions, toolbox talks, PPE control and near-miss reporting embedded across every project and reviewed under an annual internal audit programme.',
  },
]

export type SafetyStat = { value: string; label: string }

export const safetyStats: SafetyStat[] = [
  { value: '0', label: 'RIDDOR-reportable accidents' },
  { value: '0', label: 'Dangerous occurrences' },
  { value: '0', label: 'Lost-time injuries' },
  { value: '0', label: 'Enforcement notices' },
]

export const safetyMeasures: string[] = [
  'Health & Safety Policy',
  'Risk Assessments & Method Statements (RAMS)',
  'COSHH management',
  'Site-specific inductions',
  'Daily briefings & toolbox talks',
  'Competency checks for employees & subcontractors',
  'PPE requirements & inspection register',
  'Regular workplace inspections',
  'Near-miss reporting procedure',
  'Accident reporting procedure',
  'First aid arrangements',
  'Fire & emergency procedures',
]

export type Credential = { title: string; detail: string }

// Director qualifications held by Victor Capatina (Director / Contracts Manager).
export const credentials: Credential[] = [
  {
    title: 'Level 6 NVQ Diploma in Construction Site Management',
    detail: 'Accredited training provider',
  },
  {
    title: 'SMSTS — Site Management Safety Training Scheme',
    detail: 'CITB approved training centre',
  },
  {
    title: 'CSCS Gold Card — Construction Site Manager',
    detail: 'CSCS / CITB',
  },
  {
    title: 'Emergency First Aid at Work (Level 3)',
    detail: 'Accredited first aid provider',
  },
  {
    title: 'UKATA Asbestos Awareness',
    detail: 'UKATA approved provider',
  },
  {
    title: 'Fire Marshal / Fire Warden',
    detail: 'Accredited training provider',
  },
  {
    title: 'ISO 45001:2018 Internal Management System Training',
    detail: 'Citation Ltd',
  },
  {
    title: 'BSc Construction Management',
    detail: 'University of East London (UEL)',
  },
]

export const legalRegister: { legislation: string; aspect: string }[] = [
  { legislation: 'Health and Safety at Work etc. Act 1974', aspect: 'General H&S' },
  {
    legislation: 'Construction (Design and Management) Regulations 2015',
    aspect: 'Construction management',
  },
  {
    legislation: 'Management of Health and Safety at Work Regulations 1999',
    aspect: 'Risk assessment',
  },
  {
    legislation: 'Control of Substances Hazardous to Health Regulations 2002',
    aspect: 'Hazardous substances',
  },
  {
    legislation: 'Work at Height Regulations 2005',
    aspect: 'Working at height',
  },
  {
    legislation: 'Provision and Use of Work Equipment Regulations 1998',
    aspect: 'Work equipment',
  },
  {
    legislation: 'Manual Handling Operations Regulations 1992',
    aspect: 'Manual handling',
  },
  {
    legislation: 'Control of Asbestos Regulations 2012',
    aspect: 'Asbestos',
  },
  {
    legislation: 'Regulatory Reform (Fire Safety) Order 2005',
    aspect: 'Fire safety',
  },
  {
    legislation: 'RIDDOR 2013',
    aspect: 'Reporting incidents',
  },
]

export const serviceOptions = [
  'Commercial Flooring Installation',
  'Subfloor Preparation & Screeding',
  'Carpentry & Joinery',
  'Refurbishment & Fit-Out',
  'Planned Maintenance',
  'Responsive Repairs',
  'Void Works',
  'Other / Not sure',
]

export const budgetRanges = [
  'Under £5,000',
  '£5,000 – £25,000',
  '£25,000 – £100,000',
  '£100,000 – £500,000',
  'Over £500,000',
  'Not sure yet',
]
