import { createRouter, createWebHistory } from 'vue-router'
import BeforeAuth from '../views/BeforeAuth.vue'
import AfterAuth from '../views/AfterAuth.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BeforeAuth
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/home',
      name: 'homeAuth',
      component: AfterAuth
    },
  ]
})

export default router
