interface Jobs {
  id: number
  position: string
  skills: string[]
  requirements: string[]
  experience: number
  specializedEducation: boolean
  salary: number
  industry: string
  description: string
  jobType: string
  company: string
  companyDescription: string
}

export const jobs: Jobs[] = [
  // --- 3 IT ---
  {
    id: 1,
    position: 'Frontend Developer (Vue.js)',
    company: 'TechNova Solutions',
    companyDescription:
      'A Berlin-based tech agency specializing in modern web applications.',
    skills: ['JavaScript', 'Vue 3', 'Pinia', 'TypeScript', 'HTML/CSS'],
    requirements: [
      '2+ years of commercial experience with JavaScript and Vue.js',
      'Strong knowledge of Vue 3, Composition API, and Pinia',
      'Experience with TypeScript and Vite',
      'Familiarity with REST APIs and Git',
    ],
    experience: 2,
    specializedEducation: false,
    salary: 3000,
    industry: 'IT',
    description:
      'We are looking for a talented Frontend Developer to join our growing team in Berlin. You will be responsible for building modern, responsive, and high-performance web applications from scratch. Your daily tasks will include developing new user-facing features, optimizing application performance, and integrating frontend components with REST APIs. We expect you to write clean, maintainable, and well-documented code using Vue 3 and TypeScript. You will collaborate closely with our backend developers and UI/UX designers to deliver the best user experience. Our team values open communication, code reviews, and continuous learning. We offer a supportive environment where you can grow professionally and contribute to exciting international projects.',
    jobType: 'Full-time (Berlin)',
  },
  {
    id: 2,
    position: 'Backend Developer (Node.js)',
    company: 'CloudStream Systems',
    companyDescription:
      'A cloud infrastructure company building high-load streaming services.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'REST API'],
    requirements: [
      '3+ years of experience with Node.js and Express',
      'Deep understanding of relational databases (PostgreSQL)',
      'Experience with Docker and microservices architecture',
      'Knowledge of writing unit and integration tests',
    ],
    experience: 3,
    specializedEducation: true,
    salary: 4000,
    industry: 'IT',
    description:
      'CloudStream Systems is seeking an experienced Backend Developer to maintain and develop the server-side of our high-load service. You will be working on complex microservices architecture, ensuring data consistency, and optimizing database queries. Your responsibilities will include designing and implementing new API endpoints, as well as improving the performance and security of existing systems. We require a deep understanding of Node.js, Express, and PostgreSQL. You should be comfortable working with Docker and writing high-quality automated tests. The ideal candidate is a problem-solver who can work independently and as part of a remote team. We offer flexible working hours, a competitive salary, and the opportunity to work with cutting-edge cloud technologies in a fully remote setup.',
    jobType: 'Remote',
  },
  {
    id: 3,
    position: 'QA Automation Engineer',
    company: 'PixelCraft Software',
    companyDescription:
      'A software development firm focused on creating pixel-perfect digital products.',
    skills: ['Playwright', 'JavaScript', 'CI/CD', 'Jira', 'TestRail'],
    requirements: [
      '1+ year of experience in test automation',
      'Practical experience with Playwright',
      'Understanding of CI/CD pipelines',
      'Experience with bug tracking systems (Jira)',
    ],
    experience: 1,
    specializedEducation: false,
    salary: 2200,
    industry: 'IT',
    description:
      'We are looking for a detail-oriented QA Automation Engineer to help us ensure the highest quality of our web applications. In this role, you will be responsible for designing and writing automated test scripts using Playwright. You will work closely with developers to identify bugs early and create comprehensive test plans. Your duties will also include maintaining existing automated test suites and integrating them into our CI/CD pipelines. We expect you to have a good grasp of JavaScript, as well as experience with tools like Jira and TestRail. This is a hybrid position based in Warsaw, offering a mix of remote work and office collaboration. If you are passionate about software quality and want to grow in an agile environment, we would love to hear from you.',
    jobType: 'Hybrid (Warsaw)',
  },

  // --- 3 Teachers for an online school ---
  {
    id: 4,
    position: 'English Language Teacher',
    company: 'LinguaSphere Online',
    companyDescription:
      'An online language school connecting students with native-level educators.',
    skills: [
      'English (C1)',
      'Teaching Methodology',
      'Zoom',
      'Google Classroom',
    ],
    requirements: [
      'English proficiency level C1 or higher',
      'Experience in teaching adults and teenagers',
      'Knowledge of modern teaching methodologies',
      'Comfortable using Zoom and interactive tools',
    ],
    experience: 2,
    specializedEducation: true,
    salary: 1000,
    industry: 'Education',
    description:
      "LinguaSphere Online is looking for enthusiastic English Language Teachers to join our remote team. You will conduct engaging online lessons for adult professionals and teenagers from all over Europe. Your main goal is to create a supportive and motivating learning environment. You will be responsible for assessing students' levels, designing personalized learning plans, and tracking their progress. We expect you to use a variety of interactive tools to make lessons fun and effective. This role requires a high level of English proficiency, a formal teaching qualification, and at least two years of experience. We provide all necessary teaching materials and offer flexible schedules to help you maintain a healthy work-life balance.",
    jobType: 'Remote',
  },
  {
    id: 5,
    position: 'Mathematics Teacher',
    company: 'BrainyKids Academy',
    companyDescription:
      'A specialized online academy for teaching STEM subjects to children.',
    skills: [
      'Mathematics',
      'Algebra',
      'Geometry',
      'Interactive Whiteboards',
      'Methodology',
    ],
    requirements: [
      'Degree in Mathematics or Education',
      'Experience in preparing students for exams',
      'Ability to explain complex concepts simply',
      'Proficiency with interactive whiteboards',
    ],
    experience: 1,
    specializedEducation: true,
    salary: 900,
    industry: 'Education',
    description:
      "BrainyKids Academy is seeking a passionate Mathematics Teacher to provide online education for students in grades 7 to 11. You will be responsible for delivering lessons in algebra and geometry, as well as preparing students for their final exams. We are looking for someone who can break down complex mathematical concepts into simple, understandable ideas. Your lessons should be interactive and engaging to keep students motivated and focused. A formal degree in mathematics or education is required, along with prior experience in teaching or tutoring. This is a part-time position, perfect for someone looking for flexible working hours. You will have the freedom to choose your schedule while making a real difference in students' lives.",
    jobType: 'Part-time',
  },
  {
    id: 6,
    position: 'Programming Teacher for Kids',
    company: 'CodeWizards School',
    companyDescription:
      'An innovative platform that introduces children to coding through play.',
    skills: ['Scratch', 'Python'],
    requirements: [
      'Knowledge of Scratch and basic Python',
      'Experience working with children',
      'Excellent communication and presentation skills',
      'Patience and creativity in teaching',
    ],
    experience: 0,
    specializedEducation: false,
    salary: 700,
    industry: 'Education',
    description:
      'CodeWizards School is looking for a creative and energetic teacher to introduce children aged 8 to 12 to the world of programming. You will conduct online lessons using Scratch and Python, helping kids create their first games and simple projects. The most important requirement for this role is a genuine love for working with children and the ability to keep them interested and motivated. No prior formal teaching experience is required, but you must be patient, reliable, and have excellent communication skills. You will receive comprehensive training and ready-to-use lesson plans. This part-time role is a wonderful opportunity to inspire the next generation of developers while working from the comfort of your home.',
    jobType: 'Part-time',
  },

  // --- 2 Waiters for a restaurant ---
  {
    id: 7,
    position: 'Waiter',
    company: 'Le Petit Gourmet',
    companyDescription:
      'A charming, traditional French bistro located in the heart of Paris.',
    skills: ['Customer Focus', 'Menu Knowledge', 'POS Systems (R-Keeper)'],
    requirements: [
      'Previous experience as a waiter is preferred',
      'Excellent communication and customer service skills',
      'Ability to work in a fast-paced environment',
      'Basic knowledge of POS systems',
    ],
    experience: 1,
    specializedEducation: false,
    salary: 800,
    industry: 'HoReCa',
    description:
      'Le Petit Gourmet, a cozy French restaurant in the heart of Paris, is looking for a friendly and professional Waiter. Your primary responsibility will be to provide an exceptional dining experience for our guests. You will greet customers, take accurate orders, and serve food and beverages efficiently. It is crucial that you have a thorough knowledge of our menu and can make recommendations to help guests choose their meals. You will also be responsible for keeping the dining area clean, handling payments, and working closely with the kitchen staff. We expect you to be polite, energetic, and able to handle stressful situations with a smile. This is a full-time position that offers a competitive salary and a vibrant working atmosphere.',
    jobType: 'Full-time (Paris)',
  },
  {
    id: 8,
    position: 'Senior Waiter',
    company: 'La Dolce Vita',
    companyDescription:
      'An upscale Italian fine-dining restaurant known for its VIP service.',
    skills: [
      'Premium Segment Experience',
      'Wine List Knowledge',
      'Team Management',
      'Banquet Service',
    ],
    requirements: [
      '3+ years of experience in premium dining',
      'Deep knowledge of wines and pairings',
      'Experience in training and managing staff',
      'Impeccable grooming and presentation',
    ],
    experience: 3,
    specializedEducation: false,
    salary: 1100,
    industry: 'HoReCa',
    description:
      'La Dolce Vita, an upscale restaurant in Rome, is searching for a Senior Waiter to join our elite team. This is a leadership role that requires a professional who is deeply passionate about fine dining and hospitality. You will be responsible for serving VIP guests, ensuring the highest level of service, and managing the waitstaff. Your duties will include training new employees, handling complex customer complaints, and assisting with the organization of large banquets and events. We require someone with an extensive knowledge of wine and food pairing, as well as previous experience in a management role. You must have an impeccable appearance and a natural ability to lead by example. If you thrive in a fast-paced luxury environment, we invite you to apply.',
    jobType: 'Full-time (Rome)',
  },

  // --- 1 Hotel Administrator ---
  {
    id: 9,
    position: 'Hotel Administrator',
    company: 'Grand Horizon Hotel',
    companyDescription:
      'A luxury five-star hotel offering breathtaking views of the Madrid skyline.',
    skills: [
      'Business Correspondence',
      'Booking System (Opera)',
      'Conflict Resolution',
      'English (B2)',
    ],
    requirements: [
      'Previous experience in hotel administration',
      'Fluency in English (B2 or higher)',
      'Proficiency with Opera booking system',
      'Excellent problem-solving and communication skills',
    ],
    experience: 2,
    specializedEducation: true,
    salary: 900,
    industry: 'Hospitality',
    description:
      'Grand Horizon Hotel in Madrid is looking for a proactive and organized Hotel Administrator to ensure the smooth operation of our front desk. You will be the first point of contact for our guests, so a welcoming and professional demeanor is essential. Your daily tasks will include checking guests in and out, managing reservations using the Opera system, and addressing any inquiries or complaints. You will also be responsible for coordinating with housekeeping and maintenance staff to ensure all rooms are ready on time. We require someone with prior experience in a similar role, excellent problem-solving skills, and fluency in English. This is a fantastic opportunity to be part of a dynamic team dedicated to providing a five-star experience for our guests.',
    jobType: 'Full-time (Madrid)',
  },

  // --- 1 Lawyer for private business ---
  {
    id: 10,
    position: 'Corporate Lawyer',
    company: 'Van Der Berg & Partners',
    companyDescription:
      'A prestigious Dutch law firm specializing in corporate and tax law.',
    skills: [
      'Contract Law',
      'Litigation',
      'Tax Law',
      'Registry Work',
      'Consulting',
    ],
    requirements: [
      'Law degree from a recognized university',
      '4+ years of legal experience in corporate law',
      'Strong background in contract law and litigation',
      'Experience in tax law and legal consulting',
    ],
    experience: 4,
    specializedEducation: true,
    salary: 1500,
    industry: 'Legal',
    description:
      "Van Der Berg & Partners is seeking a highly qualified Corporate Lawyer to provide comprehensive legal support to our private business clients in Amsterdam. You will be responsible for drafting, reviewing, and negotiating a wide range of commercial contracts, including partnership agreements and supply contracts. Additionally, you will represent our clients' interests in commercial disputes and administrative proceedings. You will work closely with management and other departments to ensure legal compliance across the organization. We expect you to stay updated with the latest legal trends and regulations, particularly in corporate, tax, and commercial law. This role requires a deep understanding of business processes and excellent analytical skills. We offer a dynamic work environment, a competitive salary, and the option to work in a hybrid format.",
    jobType: 'Hybrid (Amsterdam)',
  },
]
