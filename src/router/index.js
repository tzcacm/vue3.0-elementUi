import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const loginLoadpage = () => import('@/pages/Login.vue');
const homeLoadPage = () => import('@/pages/Home.vue');
import Index from '@/components/views/Index';
import Table from '@/components/views/Table';

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: homeLoadPage,
    children: [{
        path: '',
        meta: {
          requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Index
      },
      {
        path: 'table',
        component: Table
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
    },
    component: loginLoadpage
  }]
});

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('personInfo')) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next();
  }
})


export default router
