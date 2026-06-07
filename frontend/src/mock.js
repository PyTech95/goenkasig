// Mock data — sourced from gdgoenkasignature.com (original images & text)

export const LOGO_URL = '/logo-gdgss.png?v=2';
export const ORIG = 'https://www.gdgoenkasignature.com/images';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Know Us', href: '#about' },
  {
    label: 'Academics',
    href: '#academics',
    children: [
      { label: 'Montessori Early Years', href: '#montessori' },
      { label: 'Real World Curriculum\u2122', href: '#rwc' },
      { label: 'Examination', href: '#exam' },
    ],
  },
  {
    label: 'Beyond Academics',
    href: '#beyond',
    children: [
      { label: 'Sports', href: '#sports' },
      { label: 'Arts', href: '#arts' },
    ],
  },
  { label: 'Our Campus', href: '#campus' },
  { label: 'Boarding', href: '#boarding' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const heroSlides = [
  {
    id: 1,
    accent: 'A',
    headline: 'River of Knowledge',
    tagline: 'Day, Weekly & Full Boarding \u2014 Gurgaon',
    image: 'https://customer-assets.emergentagent.com/job_goenkasig-new/artifacts/awv4lcd0_455.jpg',
  },
  {
    id: 2,
    accent: 'Champions of',
    headline: 'Tomorrow',
    tagline: 'World-class sports, equestrian and a 60,000 sq.ft. indoor complex',
    image: 'https://customer-assets.emergentagent.com/job_goenkasig-new/artifacts/xx738jfn_915ea07d-cf68-44b2-96c4-a1624a767da6.png',
  },
  {
    id: 4,
    accent: 'A home that',
    headline: 'Grows Leaders',
    tagline: 'Residential life designed to nurture independent, principled young adults',
    image: 'https://customer-assets.emergentagent.com/job_goenkasig-new/artifacts/w1boi2kx_707f856d-9d40-4c45-b02b-81d9c0d56e76.png',
  },
  {
    id: 5,
    accent: 'Where',
    headline: 'Character is Built',
    tagline: 'Kindness, courage and curiosity \u2014 the values that stay for life',
    image: 'https://customer-assets.emergentagent.com/job_goenkasig-new/artifacts/bg5ngyqd_74a930fb-8345-4876-93a8-416b29a9389a.png',
  },
];

export const stats = [
  { value: '29+', label: 'Years of GD Goenka Group' },
  { value: '20', label: 'Acre Sprawling Campus' },
  { value: '60K', label: 'Sq.Ft. Indoor Sports Complex' },
  { value: '60', label: 'Minutes from New Delhi Airport' },
];

export const whyUs = [
  '20 Acre Sprawling Campus',
  '60,000 Sq.Ft. Largest Indoor Sports Complex',
  'Real World Curriculum\u2122 Academics',
  'Cultural Hub \u2014 Dedicated Building for Music, Dance & Arts',
  'Technology Lab with Robotics, 3D Printing & Carpentry',
  'Day, Weekly & Full Boarding Options',
];

export const differences = [
  {
    id: 'rwc',
    title: 'Real World',
    subtitle: 'Curriculum\u2122',
    body: 'While books may prove to be stepping stones, the relevant meaningful learning comes from the real world. Our signature Real World Curriculum\u2122 \u2014 implemented first in India \u2014 turns everyday phenomena into deep, transferable learning.',
  },
  {
    id: 'campus',
    title: 'Signature',
    subtitle: 'Campus',
    body: 'Spread across 20 acres of perfectly designed learning spaces on Sohna Road, Gurgaon. State\u2011of\u2011the\u2011art classrooms, libraries, sports complexes and a dedicated cultural hub \u2014 opened in fall 2016.',
  },
  {
    id: 'boarding',
    title: 'Day, Weekly',
    subtitle: '& Full Boarding',
    body: 'Nestled within the campus, our residential life is designed to give students an opportunity to be independent, principled and well\u2011rounded. Children are nurtured in a safe, hygienic and homely environment.',
  },
  {
    id: 'mentors',
    title: 'Mentors,',
    subtitle: 'not just teachers',
    body: 'Well\u2011trained mentors deliver excellent results year after year. Our faculty maintains a healthy environment so no student faces emotional, physical or social trauma during studies.',
  },
];

export const pillars = [
  {
    title: 'Montessori Early Years',
    italic: 'a gentle beginning',
    body: 'Personality development, overall growth and exposure to a range of values, attitudes and beliefs \u2014 in a carefully prepared environment where curiosity is the first teacher.',
    image: `${ORIG}/banner-montesari.jpg`,
  },
  {
    title: 'Sports',
    italic: 'life skills on the field',
    body: 'Sports is a great way for children to learn essential life skills. From cricket to swimming, equestrian to basketball \u2014 the 60,000 sq.ft. indoor complex makes every day an athletic possibility.',
    image: `${ORIG}/banner-sport.jpg`,
  },
  {
    title: 'Arts',
    italic: 'a dedicated cultural hub',
    body: 'An entire building devoted to music, dance, theatre and visual arts \u2014 because expression is as essential as equation.',
    image: `${ORIG}/beyond-acedemic-home-th.webp`,
  },
  {
    title: 'Boarding',
    italic: 'a home that grows leaders',
    body: 'Nestled within the sprawling state\u2011of\u2011the\u2011art campus, our residential life offers children an opportunity to grow into independent, principled, well\u2011rounded young adults.',
    image: `${ORIG}/boarding-home-th.webp`,
  },
];

export const infrastructureTabs = [
  {
    id: 'academic',
    label: 'Academic Facilities',
    image: `${ORIG}/abt-img01.jpg`,
    items: [
      'Smart\u2011enabled classrooms with collaborative seating',
      'Discovery & innovation labs with robotics and 3D printing',
      'Junior, Middle and Senior libraries',
      'Performing arts studio and music suites',
      'Carpentry & maker studio',
    ],
  },
  {
    id: 'sports',
    label: 'Sports',
    image: `${ORIG}/banner-sport1.jpg`,
    items: [
      '60,000 sq. ft. air\u2011conditioned indoor sports complex',
      'Olympic\u2011standard cricket field with practice nets',
      'Heated semi\u2011Olympic swimming pool',
      'Indoor tennis, badminton, squash and basketball',
      'Equestrian, archery, athletics and yoga',
    ],
  },
  {
    id: 'beyond',
    label: 'Beyond Books',
    image: `${ORIG}/banner-sport2.jpg`,
    items: [
      'Dedicated cultural hub for music, dance and theatre',
      'Visual arts and pottery studios',
      'Public speaking and Model United Nations',
      'Eco\u2011club, robotics club and entrepreneurship cell',
      'International exchange programmes',
    ],
  },
  {
    id: 'auxiliary',
    label: 'Auxiliary Facilities',
    image: `${ORIG}/abt-img04.jpg`,
    items: [
      'On\u2011campus medical centre with resident nurse',
      'GPS\u2011monitored air\u2011conditioned transport fleet',
      'Multi\u2011cuisine dining hall with nutritionist menus',
      'CCTV\u2011enabled secure perimeter and entry',
      'Solar\u2011powered, rain\u2011water harvesting campus',
    ],
  },
  {
    id: 'community',
    label: 'Community Outreach',
    image: `${ORIG}/abt-img05.jpg`,
    items: [
      'Sewa Bhav programme \u2014 service learning every term',
      'Tie\u2011ups with local NGOs and government schools',
      'Annual sustainability and tree\u2011plantation drives',
      'Student\u2011led councils and leadership initiatives',
      'Parent volunteer guild and alumni mentoring',
    ],
  },
];

export const events = [
  { id: 1, date: 'Nov 25 2023', title: 'Ramayana', body: 'GDGSS illuminated the stage with an awe-inspiring portrayal of the timeless epic.', image: `${ORIG}/events/1.png` },
  { id: 2, date: 'Nov 11 2023', title: 'Diwali', body: 'Radiant moments filled our school as we celebrated Diwali.', image: `${ORIG}/events/3.png` },
  { id: 3, date: 'Nov 02 2023', title: 'Trip to Sariska', body: 'GDGSS organized an exciting two-day trip to Sariska.', image: `${ORIG}/events/02.png` },
  { id: 4, date: 'Oct 31 2023', title: 'Halloween', body: 'Grade 1A and Grade 2B conducted a fantastic Halloween assembly.', image: `${ORIG}/events/4.png` },
  { id: 5, date: 'Oct 19 2023', title: 'Fire Drill', body: 'The successful completion of our scheduled fire drill.', image: `${ORIG}/events/5.png` },
  { id: 6, date: 'Oct 13 2023', title: 'Sewa Bhav', body: 'Bringing "Sewa Bhav" \u2014 the spirit of selfless service and compassion.', image: `${ORIG}/events/6.png` },
];

export const gallery = [
  `${ORIG}/activity-th5.jpg`,
  `${ORIG}/activity-th6.jpg`,
  `${ORIG}/activity-th7.jpg`,
  `${ORIG}/activity-th8.jpg`,
  `${ORIG}/activity-th9.jpg`,
  `${ORIG}/activity-th10.jpg`,
  `${ORIG}/activity-th11.jpg`,
  `${ORIG}/thumb/annual-day.jpg`,
];

export const admissionsInfo = {
  open: 'Admissions Open',
  grades: 'Pre\u2011Nursery to Grade 9 & 11',
  session: 'Session 2026 \u2014 2027',
  email: 'admissions@gdgss.in',
  phone: '+91 70820 09200',
};

export const contactInfo = {
  address: 'GD Goenka Signature School, Sohna Road, Gurugram, Haryana, India',
  email: 'admissions@gdgss.in',
  phone: '+91 98109 10000',
  altPhone: '+91 70820 09200',
  affiliation: 'CBSE Affiliation No. 531501',
};

export const aboutCopy = {
  eyebrow: 'Know Us',
  heading: 'Best CBSE Board School in',
  italic: 'Gurgaon (Delhi/NCR), India',
  paragraphs: [
    'GD Goenka Signature School is a premium CBSE\u2011affiliated, day weekly and full boarding school. It is located on a sprawling 20\u2011acre campus on Sohna Road, Gurgaon \u2014 just 60 minutes away from the New Delhi airport.',
    'Parents, visitors and the community claim it to be way ahead of most schools in India, including most international schools. This is largely due to its advanced Real World Curriculum\u2122, the premium infrastructure to support the curriculum and well\u2011trained mentors who are currently working with students to deliver excellent results.',
    'The school provides a safe and spacious learning environment where students are empowered to nurture their love of learning and thrive on challenges. We cultivate the values of mutual respect, personal responsibility, equality and compassion.',
  ],
  image: 'https://customer-assets.emergentagent.com/job_goenkasig-new/artifacts/s89pp00g_5142778f-491f-493d-8add-7423cd54c7f6.png',
};
