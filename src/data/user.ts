type WorkFormat = 'remote' | 'hybrid' | 'on-site'
type Role = 'employee' | 'employer'
type Industry =
  | 'it'
  | 'healthcare'
  | 'legal'
  | 'education'
  | 'transportation'
  | 'finance'
  | 'marketing'
  | 'engineering'
  | 'sales'
  | 'hospitality'
  | 'construction'

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  skills: string[]
  experience: number
  education: string
  languages: string[]
  resume: string | null
  location: string
  expectedSalary: number
  position: string
  workFormat: WorkFormat
  role: Role
  createdAt: string
  industry: Industry
}

export const user: User = {
  id: 1,
  firstName: 'Hennadiy',
  lastName: 'Myshynskyi',
  email: 'genamush@gmail.com',
  skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Node.js'],
  experience: 3,
  education: 'Bachelor of Computer Science',
  languages: ['English (B1)', 'Ukrainian (C2)'],
  resume: 'FrontendResume.pdf',
  location: 'Vinnytsia, Ukraine',
  expectedSalary: 3500,
  position: 'Frontend Developer',
  workFormat: 'remote',
  role: 'employer',
  createdAt: '2026-11-16T12:00:00Z',
  industry: 'it'
}


export const users: User[] = [
  {
    id: 1,
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Node.js'],
    experience: 3,
    education: 'Bachelor of Computer Science',
    languages: ['English(C1)', 'Ukrainian(C2)'],
    resume: 'alex-johnson.pdf',
    location: 'Kyiv, Ukraine',
    expectedSalary: 3500,
    position: 'Frontend Developer',
    industry: 'it',
    workFormat: 'remote',
    role: 'employee',
    createdAt: '2026-11-01T10:30:00Z',
  },
  {
    id: 2,
    firstName: 'Emma',
    lastName: 'Wilson',
    email: 'emma.wilson@example.com',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
    experience: 5,
    education: 'Master of Software Engineering',
    languages: ['English(C2)', 'German(B2)'],
    resume: 'emma-wilson.pdf',
    location: 'Berlin, Germany',
    expectedSalary: 5200,
    position: 'Backend Developer',
    industry: 'it',
    workFormat: 'hybrid',
    role: 'employee',
    createdAt: '2026-10-25T14:15:00Z',
  },
  {
    id: 3,
    firstName: 'Daniel',
    lastName: 'Brown',
    email: 'daniel.brown@example.com',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    experience: 4,
    education: 'Bachelor of Information Technology',
    languages: ['English(C2)', 'French(B1)'],
    resume: 'daniel-brown.pdf',
    location: 'Paris, France',
    expectedSalary: 4500,
    position: 'Fullstack Developer',
    industry: 'it',
    workFormat: 'remote',
    role: 'employee',
    createdAt: '2026-11-05T09:00:00Z',
  },
  {
    id: 4,
    firstName: 'Sophia',
    lastName: 'Martinez',
    email: 'sophia.martinez@example.com',
    skills: [
      'Patient Diagnosis',
      'Internal Medicine',
      'Clinical Examination',
      'Patient Care',
      'Medical Documentation',
    ],
    experience: 8,
    education: 'Doctor of Medicine (MD)',
    languages: ['Spanish(C2)', 'English(C1)', 'German(B1)'],
    resume: 'sophia-martinez.pdf',
    location: 'Madrid, Spain',
    expectedSalary: 6500,
    position: 'General Practitioner',
    industry: 'healthcare',
    workFormat: 'on-site',
    role: 'employee',
    createdAt: '2026-10-18T12:45:00Z',
  },
  {
    id: 5,
    firstName: 'Michael',
    lastName: 'Anderson',
    email: 'michael.anderson@example.com',
    skills: [
      'Surgery',
      'Emergency Medicine',
      'Patient Assessment',
      'Medical Procedures',
      'Clinical Decision Making',
    ],
    experience: 12,
    education: 'Doctor of Medicine (MD), General Surgery Residency',
    languages: ['English(C2)', 'Polish(B2)'],
    resume: 'michael-anderson.pdf',
    location: 'Warsaw, Poland',
    expectedSalary: 8500,
    position: 'General Surgeon',
    industry: 'healthcare',
    workFormat: 'on-site',
    role: 'employee',
    createdAt: '2026-11-08T16:20:00Z',
  },
  {
    id: 6,
    firstName: 'Olivia',
    lastName: 'Taylor',
    email: 'olivia.taylor@example.com',
    skills: [
      'Corporate Law',
      'Contract Drafting',
      'Legal Research',
      'Negotiation',
      'Regulatory Compliance',
    ],
    experience: 6,
    education: 'Master of Laws (LL.M.)',
    languages: ['English(C2)', 'Italian(C1)', 'French(B1)'],
    resume: 'olivia-taylor.pdf',
    location: 'Rome, Italy',
    expectedSalary: 4800,
    position: 'Corporate Lawyer',
    industry: 'legal',
    workFormat: 'hybrid',
    role: 'employee',
    createdAt: '2026-11-10T11:10:00Z',
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Miller',
    email: 'james.miller@example.com',
    skills: [
      'Criminal Law',
      'Court Representation',
      'Legal Analysis',
      'Case Preparation',
      'Client Consultation',
    ],
    experience: 9,
    education: 'Master of Laws (LL.M.), Criminal Law',
    languages: ['English(C2)', 'Dutch(C1)', 'German(B2)'],
    resume: 'james-miller.pdf',
    location: 'Amsterdam, Netherlands',
    expectedSalary: 6200,
    position: 'Criminal Defense Lawyer',
    industry: 'legal',
    workFormat: 'on-site',
    role: 'employee',
    createdAt: '2026-10-12T08:30:00Z',
  },
  {
    id: 8,
    firstName: 'Isabella',
    lastName: 'Clark',
    email: 'isabella.clark@example.com',
    skills: [
      'Family Law',
      'Legal Documentation',
      'Mediation',
      'Client Representation',
      'Legal Research',
    ],
    experience: 4,
    education: 'Bachelor of Laws (LL.B.)',
    languages: ['English(C2)', 'Spanish(C1)', 'French(B2)'],
    resume: 'isabella-clark.pdf',
    location: 'Barcelona, Spain',
    expectedSalary: 3900,
    position: 'Family Lawyer',
    industry: 'legal',
    workFormat: 'hybrid',
    role: 'employee',
    createdAt: '2026-11-03T13:40:00Z',
  },
  {
    id: 9,
    firstName: 'William',
    lastName: 'Davis',
    email: 'william.davis@example.com',
    skills: [
      'Truck Driving',
      'International Transportation',
      'Route Planning',
      'Vehicle Maintenance',
      'Cargo Safety',
    ],
    experience: 10,
    education: 'Secondary Education, CE Driving License',
    languages: ['English(B2)', 'German(B1)', 'Polish(A2)'],
    resume: 'william-davis.pdf',
    location: 'Munich, Germany',
    expectedSalary: 3200,
    position: 'International Truck Driver',
    industry: 'transportation',
    workFormat: 'on-site',
    role: 'employee',
    createdAt: '2026-11-12T15:25:00Z',
  },
  {
    id: 10,
    firstName: 'Charlotte',
    lastName: 'Moore',
    email: 'charlotte.moore@example.com',
    skills: [
      'Polish Language Teaching',
      'Lesson Planning',
      'Grammar Instruction',
      'Student Assessment',
      'Online Teaching',
    ],
    experience: 7,
    education: 'Master of Polish Philology',
    languages: ['Polish(C2)', 'English(C1)', 'Ukrainian(B2)'],
    resume: 'charlotte-moore.pdf',
    location: 'Krakow, Poland',
    expectedSalary: 2400,
    position: 'Polish Language Teacher',
    industry: 'education',
    workFormat: 'remote',
    role: 'employee',
    createdAt: '2026-11-15T10:00:00Z',
  },
]

