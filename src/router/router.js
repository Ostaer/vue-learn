import Home from '@/components/Home'

const routes = [
  {
    path: '/home',
    name: 'Home',
    // component: () => import('@/components/Home.vue') //ES6懒加载 会生成一个单独的home.[hash].js按需加载
    component: Home
  }
]

export default routes
