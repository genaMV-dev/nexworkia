interface jobsInterface {
  id: number
  position: string
  skills: string[]
  experience: number
  specializedEducation: boolean
  salary: number
  industry: string
  description: string
  jobType: string
}

export const jobs: jobsInterface[] = [
  // --- 3 IT ---
  {
    id: 1,
    position: 'Frontend Developer (Vue.js)',
    skills: ['JavaScript', 'Vue 3', 'Pinia', 'TypeScript', 'HTML/CSS'],
    experience: 2,
    specializedEducation: false,
    salary: 3000,
    industry: 'IT',
    description:
      'We are looking for a frontend developer to build modern web applications. You will work on new features, performance optimization, and REST API integration. Must be able to write clean code and work in a team.',
    jobType: 'Full-time (Berlin)',
  },
  {
    id: 2,
    position: 'Backend Developer (Node.js)',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'REST API'],
    experience: 3,
    specializedEducation: true,
    salary: 4000,
    industry: 'IT',
    description:
      'Development and maintenance of the server-side of a high-load service. Experience with databases, understanding of microservices architecture, and ability to write unit tests is required.',
    jobType: 'Remote',
  },
  {
    id: 3,
    position: 'QA Automation Engineer',
    skills: ['Playwright', 'JavaScript', 'CI/CD', 'Jira', 'TestRail'],
    experience: 1,
    specializedEducation: false,
    salary: 2200,
    industry: 'IT',
    description:
      'Automation of web application testing. Writing test cases, maintaining existing automated tests, and working with bug tracking systems. We are looking for a detail-oriented specialist.',
    jobType: 'Hybrid (Warsaw)',
  },

  // --- 3 Teachers for an online school ---
  {
    id: 4,
    position: 'English Language Teacher',
    skills: [
      'English (C1)',
      'Teaching Methodology',
      'Zoom',
      'Google Classroom',
    ],
    experience: 2,
    specializedEducation: true,
    salary: 1000,
    industry: 'Education',
    description:
      'Conducting online English lessons for adults and teenagers. Creating individual learning plans, checking homework, and maintaining student motivation.',
    jobType: 'Remote',
  },
  {
    id: 5,
    position: 'Mathematics Teacher',
    skills: [
      'Mathematics',
      'Algebra',
      'Geometry',
      'Interactive Whiteboards',
      'Methodology',
    ],
    experience: 1,
    specializedEducation: true,
    salary: 900,
    industry: 'Education',
    description:
      'Teaching mathematics online for students in grades 7-11. Preparation for exams. Requires the ability to explain complex concepts simply and use modern interactive tools.',
    jobType: 'Part-time',
  },
  {
    id: 6,
    position: 'Programming Teacher for Kids',
    skills: ['Scratch', 'Python'],
    experience: 0,
    specializedEducation: false,
    salary: 700,
    industry: 'Education',
    description:
      'Conducting engaging online lessons on the basics of programming for children aged 8-12. Helping create their first games and projects. The main requirement is a desire to work with children and the ability to keep them interested.',
    jobType: 'Part-time',
  },

  // --- 2 Waiters for a restaurant ---
  {
    id: 7,
    position: 'Waiter',
    skills: ['Customer Focus', 'Menu Knowledge', 'POS Systems (R-Keeper)'],
    experience: 1,
    specializedEducation: false,
    salary: 800,
    industry: 'HoReCa',
    description:
      'Serving restaurant guests, taking orders, serving food and drinks. Maintaining cleanliness in the dining area. Requires politeness, stress resistance, and teamwork skills.',
    jobType: 'Full-time (Paris)',
  },
  {
    id: 8,
    position: 'Senior Waiter',
    skills: [
      'Premium Segment Experience',
      'Wine List Knowledge',
      'Team Management',
      'Banquet Service',
    ],
    experience: 3,
    specializedEducation: false,
    salary: 1100,
    industry: 'HoReCa',
    description:
      'Work in an upscale restaurant. Serving VIP guests, training newcomers, quality control of service, and assisting in organizing banquets. Impeccable appearance is required.',
    jobType: 'Full-time (Rome)',
  },

  // --- 1 Hotel Administrator ---
  {
    id: 9,
    position: 'Hotel Administrator',
    skills: [
      'Business Correspondence',
      'Booking System (Opera)',
      'Conflict Resolution',
      'English (B2)',
    ],
    experience: 2,
    specializedEducation: true,
    salary: 900,
    industry: 'Hospitality',
    description:
      'Meeting and accommodating guests, processing bookings, resolving issues during their stay. Coordinating staff work (housekeeping, maintenance) and keeping records.',
    jobType: 'Full-time (Madrid)',
  },

  // --- 1 Lawyer for private business ---
  {
    id: 10,
    position: 'Corporate Lawyer',
    skills: [
      'Contract Law',
      'Litigation',
      'Tax Law',
      'Registry Work',
      'Consulting',
    ],
    experience: 4,
    specializedEducation: true,
    salary: 1500,
    industry: 'Legal',
    description:
      "Legal support for a private enterprise. Drafting and reviewing contracts, representing the company's interests in courts and government agencies. Consulting management on legal issues.",
    jobType: 'Hybrid (Amsterdam)',
  },
]
