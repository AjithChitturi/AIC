// AIC Mahindra core team and mentors.
// `type: 'profile'` -> routes to an in-app profile page (/profile/:slug) with the
//                      same layout as the source faculty page.
// `type: 'external'` -> opens the person's external (LinkedIn) profile in a new tab.
// `img` -> portrait sourced from the public AIC Mahindra page (null = use initials avatar).

const U = 'https://www.mahindrauniversity.edu.in/wp-content/uploads/'

export const coreTeam = [
  { name: 'Ismail Akbani', role: 'Chief Executive Officer', type: 'profile', slug: 'ismail-akbani', img: U + '2026/03/Mr.-Mohammad-Ismail-Abdul-Majeed-Akbani-2-1.png' },
  { name: 'Sreeparna Chowdhury', role: 'Incubation Manager', type: 'external', url: 'https://www.linkedin.com/in/sreeparna-chowdhury/', img: U + '2026/03/Sreeparna-Chowdhury.png' },
]

export const mentors = [
  { name: 'Emmanuel Murray', role: 'Investment Director, Caspian', type: 'external', url: 'https://www.linkedin.com/in/emmanuel-murray/', img: U + '2026/03/Emmanuel-Murray.png' },
  { name: 'Joginder Tanikella', role: 'CEO, T-Works, Govt. of Telangana', type: 'external', url: 'https://www.linkedin.com/in/jogindertanikella/', img: U + '2026/03/Joginder-Tanikella.png' },
  { name: 'Yogesh Shinde', role: 'Founder & CEO – Bamboo India', type: 'external', url: 'https://www.linkedin.com/in/yogeshshinde11/', img: U + '2026/06/Yogesh-Shinde.webp' },
  { name: 'Chandran Krishnan', role: 'Managing Director & CEO, Campus Angels Network', type: 'external', url: 'https://www.linkedin.com/in/chandran-krishnan-1ab90013/', img: U + '2026/03/Chandran-Krishnan.png' },
  { name: 'Yogesh Brahmankar', role: "Innovation Director, MoE's Innovation Cell, Govt. of India", type: 'external', url: 'https://www.linkedin.com/in/yogeshbrahmankarsdg/', img: U + '2026/03/Yogesh-Brahmankar.png' },
  { name: 'Puru Modani', role: 'Idea Farming', type: 'external', url: 'https://www.linkedin.com/in/puru-modani-1034375/', img: U + '2026/06/Puru-Modani.webp' },
  { name: 'Keerthi Kadam', role: 'Associate Professor of Practice', type: 'profile', slug: 'keerthi-j-kadam', img: U + '2026/03/Keerthi-Kadam-1.png' },
  { name: 'Kunal Sarpal', role: 'Founding & Managing Partner of White Collar Legal LLP', type: 'external', url: 'https://www.linkedin.com/in/cs-adv-kunal-sarpal-3b404635/', img: U + '2026/06/Kunal-Sarpal.webp' },
  { name: 'Ramjee Pallela', role: 'Government & Public Sector Consulting Services (GPS)', type: 'external', url: 'https://www.linkedin.com/in/ramjee-pallela-26a31226/', img: U + '2026/06/Ramjee-Pallela.webp' },
  { name: 'Nisha Prakash', role: 'Creative Marketing & Strategic Growth', type: 'external', url: 'https://www.linkedin.com/in/nishaa-prakash', img: U + '2026/06/Nisha-Prakash.webp' },
  { name: 'Sandip Poddar', role: 'Co-Founder, Navikarna Ventures; Resident Mentor, CIE IIIT Hyderabad', type: 'external', url: 'https://www.linkedin.com/in/sandippoddar/', img: U + '2026/03/Sandip-Poddar.png' },
  { name: 'Praveen Dorna', role: 'Director and Visiting Professor; Serial Entrepreneur', type: 'external', url: 'https://www.linkedin.com/in/praveendorna/', img: U + '2026/03/Praveen-Dorna.png' },
  { name: 'Bhaskar Tamma', role: 'Professor', type: 'profile', slug: 'bhaskar-tamma', img: U + '2026/03/Prof.-Bhaskar-Tamma.png' },
  { name: 'Anjan Goswami', role: 'Associate Professor', type: 'profile', slug: 'anjan-goswami', img: U + '2026/04/Anjan-Goswami.png' },
  { name: 'Amit Rathor', role: 'Mentor', type: 'external', url: 'https://www.linkedin.com/in/amitrathor/', img: U + '2026/06/Amit-Rathor.webp' },
  { name: 'B. K. Chakravarthy', role: 'Professor & Dean', type: 'profile', slug: 'b-k-chakravarthy', img: U + '2025/09/Dr.-B.-K.-Chakravarty.png' },
  { name: 'Ketaki Laxmikant', role: 'HR Leader | HRBP | Employee Relations & HR Professional', type: 'external', url: 'https://www.linkedin.com/in/ketaki-laxmikant-157b19101/', img: U + '2026/06/Ketaki-Laxmikant.webp' },
  { name: 'Chef K. Thirugnanasambantham', role: 'Professor & Dean, School of Hospitality Management', type: 'profile', slug: 'chef-k-thirugnanasambantham', img: U + '2026/03/Chef-K-Thirus.png' },
  { name: 'Bharghava Rajaram', role: 'Visiting Faculty', type: 'profile', slug: 'bharghava-rajaram', img: U + '2026/03/Dr.-Bharghava-Rajaram.png' },
  { name: 'Bhushan Borotikar', role: 'Research Head, Symbiosis Centre for Medical Image Analysis, Pune, India', type: 'external', url: 'https://www.linkedin.com/in/bhushan-borotikar-0773514/', img: U + '2026/06/Bhushan-Borotikar.webp' },
  { name: 'Amit Agrahari', role: 'Data Scientist (AI/ML) & Innovation PM @ Philips', type: 'external', url: 'https://www.linkedin.com/in/amit-agrahari/', img: null },
  { name: 'Dhairya Jain', role: 'Company Secretary Startup Consultant', type: 'external', url: 'https://www.linkedin.com/in/jaindhairya/', img: null },
  { name: 'Sharda Gautam', role: 'Mentor', type: 'external', url: 'https://www.linkedin.com/in/shardagautam/', img: U + '2026/06/Sharda-Gautam.webp' },
]
