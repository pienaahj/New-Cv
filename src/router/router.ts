import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import HomePage from '@/views/HomePage.vue'
import AboutMe from '@/views/AboutMe.vue'
import CoursePage from '@/views/CoursePage.vue'
import EmploymentPage from '@/views/EmploymentPage.vue'
import PersonalPage from '@/views/PersonalPage.vue'
import SiteInfo from '@/views/SiteInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/HomePage' },
    { path: '/homePage', component: HomePage, props: true },
    { path: '/CoursePage', component: CoursePage, props: true },
    { path: '/EmploymentPage', component: EmploymentPage, props: true },
    { path: '/aboutMe', component: AboutMe },
    { path: '/siteInfo', component: SiteInfo },
    { path: '/personalPage', component: PersonalPage },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
