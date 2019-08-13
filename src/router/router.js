const home = () => import('@/components/Home.vue')
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
    component: () => import('@/components/argu.vue'),
    props: route => ({ name: route.query.name })
  },
  {
    path: '/parent',
    component: () => import('@/components/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/components/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/components/child.vue'),
      email: () => import('@/components/email.vue'),
      tell: () => import('@/components/tell.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  }
]

export default routes
