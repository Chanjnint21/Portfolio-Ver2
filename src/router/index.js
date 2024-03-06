import Vue from 'vue'
import VueRouter from 'vue-router'
// import EnHomeView from '../views/EngVer/HomeView.vue'
// import KhHomeView from '../views/KhmerVer/HomeView.vue'
import ResumeView from '../views/EngVer/ResumeView.vue'
import EnglishVer from '@/Layout/EnglishVer.vue'
import KhmerVer from '@/Layout/KhmerVer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    // component: AuthLayout,
    redirect: "/EN/home",
  },
  {
    path: '/EN',
    name: 'English',
    component: EnglishVer,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import( '../views/EngVer/HomeView.vue'),
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import( '../views/EngVer/PortfolioView.vue'),
      },
      {
        path: 'resume',
        name: 'resume',
        component: ResumeView,
        props: true,
      }
    ]
  },
  {
    path: '/KH',
    name: 'Khmer',
    component: KhmerVer,
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import( '../views/KhVer/HomeView.vue'),
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import( '../views/KhVer/PortfolioView.vue'),
      },
      {
        path: 'resume',
        name: 'resume',
        component: ResumeView,
        props: true,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
