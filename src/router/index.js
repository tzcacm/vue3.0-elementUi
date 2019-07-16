import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const loginLoadPage = () => import('@/pages/Login.vue');
const homeLoadPage = () => import('@/pages/Home.vue');
import Index from '@/components/views/index/Index';
import List from '@/components/views/list/List';
import Finance from '@/components/views/finance/Finance';
import Rich from '@/components/views/rich/Rich';
import Password from '@/components/views/passwrod/Password';
import Observable from '@/components/views/observable/Observable';

const router = new Router({
  routes: [{
    path: '*',
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
        path: 'index',
        meta: {
          requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: Index
      }, {
        path: 'list',
        component: List
      }, {
        path: 'finance',
        component: Finance
      }, {
        path: 'rich',
        component: Rich
      }, , {
        path: 'observable',
        component: Observable
      }, {
        path: 'password',
        component: Password
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
    },
    component: loginLoadPage
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
