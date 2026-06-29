// Page content for the AIC Mahindra recreation.
// Factual information sourced from the public AIC Mahindra page; longer program
// descriptions are concise paraphrases.

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#pathways' },
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
  body: [
    'The centre works closely with entrepreneurs from the earliest stages of their journey, helping them validate ideas, develop prototypes, refine business models, build products, access markets, prepare for fundraising, and scale their ventures. Through a strong network of mentors, industry experts, investors, research facilities, and ecosystem partners, AIC Mahindra provides the guidance and resources required to transform innovative ideas into successful businesses.',
    "Over the years, AIC Mahindra has built a strong track record of supporting startups through incubation programmes, accelerator cohorts, capacity-building initiatives, investor connect sessions, international collaborations, and strategic partnerships. With a focus on innovation, technology, and entrepreneurship, the foundation continues to nurture founders and contribute to India's growing startup ecosystem.",
  ],
  stats: [
    { value: '100+', label: 'Startups through different programs' },
    { value: '6Cr+', label: 'Funding Raised' },
    { value: '8Cr+', label: 'Revenue' },
    { value: '100+', label: 'Ecosystem Partners & Supporters' },
  ],
}

export const pathways = {
  heading: 'Startup Programs and Founder Support',
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
  // Three phases, each spanning the stages it supports; a GO/No-Go gate sits between phases.
  phases: [
    {
      name: 'Pre-Incubation',
      color: '#c1121f',
      stages: ['Idea', 'Prototype / PoC', 'Customer Discovery'],
      loop: 'Pivot',
    },
    {
      name: 'Incubation',
      color: '#c19a4b',
      stages: ['MVP', 'Market Entry / Early Revenue / 1st Funding'],
      loop: 'Iterate',
    },
    {
      name: 'Scaling up',
      color: '#2f8f6b',
      stages: ['Scaling up'],
    },
  ],
}

export const infrastructure = {
  heading: 'AIC infrastructure and campus ecosystem',
  body: [
    'AIC Mahindra e-Hub Foundation is the Atal Incubation Centre established by Mahindra University, Hyderabad, with support from the Atal Innovation Mission (AIM), NITI Aayog, Government of India. Registered as a Section 8 not-for-profit company, the foundation serves as the entrepreneurship and innovation hub of the university, supporting startups, entrepreneurs, and innovators in developing technology-led ventures.',
    'The incubation centre supports founders from idea validation to business growth through incubation, mentoring, product development, business model validation, market access, funding preparedness, and investor connect. Startups also have access to mentors, industry experts, research infrastructure, prototyping facilities, and ecosystem partners to support the development and growth of their ventures.',
  ],
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
    { name: 'Campus Fund', img: '/collab/campus-fund.png' },
    { name: 'StartupWala', img: '/collab/startupwala.png' },
    { name: 'ValleyNxt Ventures', img: '/collab/valleynxt-ventures.png' },
    { name: 'TGIC', img: '/collab/tgic.png' },
    { name: 'Notion', img: '/collab/notion.png' },
    { name: 'Campus Angels Network', img: '/collab/campus-angels.jpeg' },
    { name: 'MathWorks', img: '/collab/mathworks.jpeg' },
    { name: 'AMTZ', img: '/collab/amtz.jpeg' },
    { name: 'Babson College', img: '/collab/babson.png' },
    { name: 'École Centrale Paris', img: '/collab/ecole-centrale.svg' },
  ],
}

export const startups = {
  heading: 'Some of Our startups.',
  intro: 'Ventures growing inside the AIC Mahindra e-Hub — from first prototype to market.',
  items: [
    { name: 'Arthachain', img: '/startups/arthachain.jpg' },
    { name: 'Avika', img: '/startups/avika.png' },
    { name: 'Avisa', img: '/startups/avisa.jpg' },
    { name: 'Earthen Tunes', img: '/startups/earthen-tunes.jpg' },
    { name: 'Extrive Innovations', img: '/startups/extrive.jpeg' },
    { name: 'Harvested Robotics', img: '/startups/harvested-robotics.png' },
    { name: 'Klar Cleantech', img: '/startups/klar-cleantech.jpg' },
    { name: 'Mantis', img: '/startups/mantis.png' },
    { name: 'Serefy Innovations', img: '/startups/serefy.jpg' },
    { name: 'Anveza.Ai', img: null },
    { name: 'The Funkey App', img: '/startups/funkey.jpg' },
    { name: 'Vasstr', img: '/startups/vasstr.jpg' },
    { name: 'Sustaina', img: '/startups/sustaina.jpg' },
    { name: 'AIC Startup', img: '/startups/startup-x.avif' },
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
    'C/O Mahindra University, Survey No: 62/1A, Bahadurpally, Jeedimetla, Hyderabad, Telangana – 500043',
  phone: '040 6817 3288',
  email: 'aic@mahindrauniversity.edu.in',
  copyright: 'Copyright @ AIC Mahindra',
}
