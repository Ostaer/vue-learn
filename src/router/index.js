import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  // NProgress.start()
  let token = 'information'
  if (to.path === '/login') {
    if (token) {
      next({ path: '/' })
    } else {
      //
    }
  }

  if (!token && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
