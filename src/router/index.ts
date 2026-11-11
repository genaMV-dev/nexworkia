import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import JobsPage from '@/pages/JobsPage.vue'
import JobPage from '@/pages/JobPage.vue'
import ForEmployersPage from '@/pages/ForEmployersPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import ReviewsPage from '@/pages/ReviewsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import CompaniesPage from '@/pages/CompaniesPage.vue'

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
    path: '/for-employers',
    component: ForEmployersPage,
  },
  {
    path: '/companies',
    component: CompaniesPage,
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
})

export default router