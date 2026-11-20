import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import JobsPage from '@/pages/JobsPage.vue'
import JobPage from '@/pages/JobPage.vue'
import PostJobPage from '@/pages/PostJobPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import ReviewsPage from '@/pages/ReviewsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import FindEmployees from '@/pages/FindEmployees.vue'
import EmployeePage from '@/pages/EmployeePage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/jobs',
    name: 'products',
    component: JobsPage,
  },
  {
    path: '/jobs/:id',
    component: JobPage,
  },
  {
    path: '/post-job',
    component: PostJobPage,
  },
  {
    path: '/find-employees',
    component: FindEmployees,
  },
  {
    path: '/find-employees/:id',
    component: EmployeePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
    children: [
      {
        path: 'reviews',
        component: ReviewsPage,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

export default router