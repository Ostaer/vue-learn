const home = () => import('@/components/Home.vue')
const routes = [
  {
    path: '/home',
    name: 'Home',
    // component: () => import('@/components/Home.vue') //ES6懒加载 会生成一个单独的home.[hash].js按需加载
    component: home
  },
  {
    path: '/argu/:name',
    component: () => import('@/components/argu.vue')
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
  }
]

export default routes
