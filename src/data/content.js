// Page content for the AIC Mahindra recreation.
// Factual information sourced from the public AIC Mahindra page; longer program
// descriptions are concise paraphrases.

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Pathways', href: '#pathways' },
  { label: 'What We Offer', href: '#offer' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Team', href: '#team' },
]

export const hero = {
  breadcrumb: ['Home', 'Atal Incubation Centre (AIC) Mahindra e-Hub Foundation'],
  title: 'AIC Mahindra e-Hub Foundation',
  tagline:
    'Atal Incubation Centre — established by Mahindra University, supported by Atal Innovation Mission, NITI Aayog, Government of India.',
}

export const about = {
  heading: 'About AIC Mahindra',
  body:
    'AIC Mahindra e-Hub Foundation is a Section 8 not-for-profit company and an Atal Incubation Centre supported by the Atal Innovation Mission, NITI Aayog, Government of India. It has been established by Mahindra University to support early-stage startups, entrepreneurs and innovators in building products, validating business models and creating ventures that can reach the market. The incubator works with startups at the early and critical stages of their journey — problem validation, prototyping, product development, user testing, market access, funding preparedness and business growth. Startups have access to mentors, prototyping infrastructure, lab facilities, business guidance, industry experts, investor connects and relevant ecosystem partners.',
  stats: [
    { value: '38+', label: 'Startups in Programmes' },
    { value: 'NITI', label: 'Aayog Supported' },
    { value: '18', label: 'Month Incubation Programme' },
    { value: '4', label: 'Structured Programmes' },
  ],
}

export const pathways = {
  heading: 'Startup Pathways and Founder Support',
  intro:
    'AIC Mahindra supports founders at different stages of their startup journey, from early ideas to validated products and incubation-ready ventures. The pathways are designed to help founders get the right kind of support at the right time.',
  tabs: [
    {
      label: 'Eureka Evenings',
      body:
        'Eureka Evenings is a monthly idea pitch platform for Mahindra University students, including undergraduate, postgraduate and PhD students. It gives students with early ideas an informal space to pitch to the AIC Mahindra team, receive feedback and explore the next steps. The focus is not on judging or eliminating ideas, but on encouraging students, helping them think more clearly and guiding serious teams towards pre-incubation or other relevant AIC Mahindra programs.',
    },
    {
      label: 'IdeaSprint',
      body:
        'IdeaSprint is a three-day, in-person idea validation bootcamp for early-stage founders and student teams. It focuses on problem validation through hands-on activities, customer discovery, assumption testing and peer feedback, helping participants sharpen their problem statements and validate their ideas.',
    },
    {
      label: 'Startup Clinic',
      body:
        'Startup Clinic is a focused mentoring initiative for early-stage founders facing specific challenges. Founders can book a dedicated 30-minute mentoring session with AIC Mahindra mentors, online or in person, focused on one or two key challenges such as problem validation, customer discovery, product direction, business model, go-to-market, pitch preparation, funding readiness or early operational issues.',
    },
    {
      label: 'Pre-Incubation',
      body:
        'The Pre-Incubation Program is a hybrid engagement for early-stage teams working towards problem-solution fit and venture readiness. It includes an intensive on-campus bootcamp followed by virtual mentoring over four months, covering customer discovery, idea validation, prototype planning, business model development, mentor reviews and pitch preparation, and concludes with a final pitch day.',
    },
    {
      label: 'Lab-to-Market Program',
      body:
        'The Lab-to-Market Program supports faculty members, researchers and PhD scholars working on research-led innovations with commercial or societal potential. It helps research teams explore use cases, customer segments, market relevance, prototype development and possible startup pathways, moving promising technologies beyond the lab towards pilots, products, partnerships or venture creation.',
    },
    {
      label: 'Incubation',
      body:
        'AIC Mahindra offers incubation support to selected startups through periodic rolling calls for applications. Applicants go through a selection process of application review, evaluation and a final pitch to the incubation panel. Selected startups receive incubation support for up to 18 months, including mentoring, workspace access, prototyping and lab access, business guidance, market connects, funding readiness, investor linkages and ecosystem support.',
    },
  ],
}

export const offerings = {
  heading: 'What We Offer',
  subheading: 'AIC offerings',
  intro:
    'AIC Mahindra e-Hub provides a comprehensive set of offerings to support early-stage ventures through ideation, validation, and venture development.',
  items: [
    { title: 'Business mentoring', body: 'Continuous strategic guidance and performance reviews as you grow.' },
    { title: 'Corporate connect', body: 'Connection with industry, corporates, and real market for pilot and business opportunities.' },
    { title: 'Technology & prototyping', body: 'Hands-on help turning concepts into working prototypes.' },
    { title: 'Networking & Ecosystem Connect', body: 'A live network of founders, investors, mentors, and operators.' },
    { title: 'Investor connect & Funding Readiness', body: 'Introductions to investors and funding networks and support for fund raising.' },
    { title: 'Office & lab access', body: 'Access office space, prototyping facilities and lab infrastructure, in a creative environment.' },
    { title: 'Legal & IPR Guidance', body: 'Expert legal guidance and intellectual property protection.' },
    { title: 'Digital tools', body: 'Credits and tooling from our partner stack to keep early costs low.' },
  ],
}

export const journey = {
  heading: 'Startup Journey with AIC Mahindra',
  intro:
    'AIC Mahindra e-Hub follows a stage-wise incubation model designed to support founders at different points in their entrepreneurial journey. The approach emphasises clarity of problem definition, feasibility assessment, and disciplined execution.',
  stages: [
    { label: 'Idea', icon: '💡' },
    { label: 'POC', icon: '📄' },
    { label: 'Customer Discovery', icon: '🔍' },
    { label: 'MVP', icon: '🛠️' },
    { label: 'Market Entry / Early Revenue', icon: '🪙' },
    { label: 'Scaling up', icon: '📈' },
  ],
}

export const infrastructure = {
  heading: 'AIC infrastructure and campus ecosystem',
  body:
    'Mahindra e-Hub is spread over 12,000 sq. feet of area, which can accommodate 15 entrepreneurs. The incubation centre facilitates the starting, shaping and scaling up of innovative ventures resulting from student-faculty research. Founders operate within the Mahindra University campus and have access to shared and specialised facilities.',
  facilities: [
    'Shared Co-Working Space',
    'Dedicated Private Cabins',
    'Innovation & Prototyping Lab',
    'Meeting Rooms with AV',
    'Creative Brainstorming Zone',
    'Advanced AR/VR Lab',
    'High-Speed Internet & Printing',
    'Robotics Lab',
    'EV Lab',
    'Supercomputer Lab',
    'Life Science Labs',
    'Makers Lab',
  ],
}

// Logos are hosted on the public Mahindra University CDN (sourced from the AIC page).
const CDN = 'https://www.mahindrauniversity.edu.in/wp-content/uploads/'

export const collaborations = {
  heading: 'Collaborations',
  intro: 'Partners, funds and ecosystem enablers working alongside AIC Mahindra.',
  partners: [
    { name: 'Campus Fund', img: CDN + '2026/06/Campus-Fund.webp' },
    { name: 'TGIC', img: CDN + '2026/06/TGIC.webp' },
    { name: 'Notion', img: CDN + '2026/06/notion.webp' },
    { name: 'Startupwala', img: CDN + '2026/06/startupwala-2.webp' },
    { name: 'ValleyNXT Ventures', img: CDN + '2026/06/valleynxt-ventures-1.webp' },
    { name: 'Campus Angels Network', img: CDN + '2026/05/thecampusangels_logo.jpeg' },
    { name: 'ISBA', img: CDN + '2026/05/cropped-isba-192x192-1.jpg' },
    { name: 'Startup Legal', img: CDN + '2026/05/cropped-cropped-cropped-startup-legal-1-01-1-1-1.png' },
    { name: 'Amazon Web Services', img: CDN + '2026/05/Amazon_Web_Services_Logo.svg.png' },
    { name: 'Tech Mahindra', img: CDN + '2026/05/Tech_Mahindra_New_Logo.svg-1024x290.png' },
  ],
}

export const startups = {
  heading: 'Meet the AIC Startups',
  intro: 'Ventures growing inside the AIC Mahindra e-Hub — from first prototype to market.',
  items: [
    { name: 'My Job Factory', img: CDN + '2026/04/my-job-factory-400x120-1.webp' },
    { name: 'Skia', img: CDN + '2026/04/skia.webp' },
    { name: 'DruFarm', img: CDN + '2026/04/drufarm.webp' },
    { name: 'Co2L', img: CDN + '2026/04/Co2L.webp' },
    { name: 'Stylin', img: CDN + '2026/04/stylin-400x120-1.webp' },
    { name: 'Sparts', img: CDN + '2026/04/sparts-400x120-1.webp' },
    { name: 'NeoPerk', img: CDN + '2026/04/neoperk-400x120-1.webp' },
    { name: 'AgrowSure', img: CDN + '2026/04/agrowsure-400x120-1.webp' },
    { name: 'Sabhyasha', img: CDN + '2026/04/sabhyasha.webp' },
    { name: 'Harvested Robotics', img: CDN + '2026/04/harvested-robotics-400x120-1.webp' },
    { name: 'Mantis', img: CDN + '2026/04/mantis-400x120-1.webp' },
    { name: 'Extrive', img: CDN + '2026/04/extrive-400x120-1.webp' },
    { name: 'Rural Rise Agrinery', img: CDN + '2026/04/Rural-Rise-Agrinery.webp' },
    { name: 'Orobot', img: CDN + '2026/04/Orobot-400x120-1.webp' },
    { name: 'Avika', img: CDN + '2026/06/Avika.webp' },
  ],
}

export const cta = {
  heading: 'Start your journey with us',
  links: [
    { label: 'Careers', href: 'https://www.mahindrauniversity.edu.in/careers/' },
    { label: 'Schedule campus visit', href: '#' },
    { label: 'About us', href: '#about' },
    { label: 'Meet faculty', href: '#team' },
  ],
}

export const footer = {
  address:
    'Mahindra University, Survey No: 62/1A, Bahadurpally Jeedimetla, Hyderabad – 500043 – Telangana, INDIA',
  phone: '040 – 67135100',
  email: 'info@mahindrauniversity.edu.in',
  columns: [
    {
      title: 'Menu',
      links: ['About Us', 'Schools', 'Programmes', 'Centres', 'Life at MU', 'MU Gallery', 'Events'],
    },
    {
      title: 'Quick Links',
      links: ['Admission 2026 – 2027', 'Pay Fees', 'Academic Calendar', 'Internships', 'Careers', 'Placements', 'Blog', 'Contact Us'],
    },
    {
      title: 'Other Key Links',
      links: ['Mandatory Disclosures', 'Download Brochure', 'Public Self Disclosure', 'Code of Conduct', 'Social Initiatives', 'Committees', 'Covid SOP', 'Policies'],
    },
  ],
  copyright: '© 2026 Mahindra University. All Rights Reserved.',
}
