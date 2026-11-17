type WorkFormat = 'remote' | 'hybrid' | 'on-site'

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
  createdAt: string
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
  createdAt: '2026-11-16T12:00:00Z',
}
