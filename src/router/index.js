import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/thongbao',
    name: 'attention',
    component: () => import('../views/Attention.vue')
  },
  {
    path: '/giangvien',
    name: 'lecture',
    component: () => import('../views/Lecture.vue')
  },
  {
    path: '/donvi',
    name: 'unit',
    component: () => import('../views/Unit.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/create-user',
    name: 'CreateUser',
    component: () => import('../views/NewUser.vue')
  },
  {
    path: '/update-user',
    name: 'UpdateUser',
    component: () => import('../views/UpUser.vue')
  },
  {
    path: '/delete-user',
    name: 'DeleteUser',
    component: () => import('../views/DelUser.vue')
  },
  {
    path: '/create-khoa',
    name: 'CreateKhoa',
    component: () => import('../views/NewKhoa.vue')
  },
  {
    path: '/update-khoa',
    name: 'UpdateKhoa',
    component: () => import('../views/UpKhoa.vue')
  },
  {
    path: '/delete-khoa',
    name: 'DeleteKhoa',
    component: () => import('../views/DelKhoa.vue')
  },
  {
    path: '/create-nghanh',
    name: 'CreateNghanh',
    component: () => import('../views/NewNghanh.vue')
  },
  {
    path: '/update-nghanh',
    name: 'UpdateNghanh',
    component: () => import('../views/UpNgh.vue')
  },
  {
    path: '/delete-nghanh',
    name: 'DeleteNghanh',
    component: () => import('../views/DelNghanh.vue')
  },
  {
    path: '/create-attention',
    name: 'CreateAtten',
    component: () => import('../views/NewAttention.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
