const home = () => import('@/views/Home.vue')
const routes = [
  {
    path: '/home',
    name: 'Home',
    alias: '/home_page',
    // component: () => import('@/components/Home.vue') //ES6懒加载 会生成一个单独的home.[hash].js按需加载
    component: home
  },
  {
    path: '/argu',
    component: () => import('@/views/argu.vue'),
    props: route => ({ name: route.query.name })
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tell: () => import('@/views/tell.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store')
  }
]

export default routes
