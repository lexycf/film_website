import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routerHistory = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: 'home'
    }
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: 'home'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/categoryPage/index.vue'),
    meta: {
      title: 'category'
    }
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('@/views/moreList/index.vue'),
    meta: {
      title: 'moreList'
    }
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: () => import('@/views/searchResult/index.vue'),
    meta: {
      title: 'searchResult'
    }
  },
  {
    path: '/playerPage',
    name: 'playerPage',
    component: () => import('@/views/playerPage/index.vue'),
    meta: {
      title: 'playerPage'
    }
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/admin/404',
  }
]

const router = createRouter({
  history: routerHistory,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0
      }
    }
  }
})

router.beforeEach((to, _from, next) => {
  if (typeof (to.meta?.title) === 'string') {
    document.title = to.meta?.title;
  }
  next()
})

export default router