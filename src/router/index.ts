import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
// import { usePermissStore } from '../store/permiss'
import Layout from "../layout/index.vue";

const routes:RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     redirect: '/dashboard'
    // },
     {
        path: "/",
        name: "Layout",
        component: Layout,
        children: []
    }
    // , {
    //     path: "/login",
    //     name: "Login",
    //     meta: {
    //         title: '登录'
    //     },
    //     component: () => import ( /* webpackChunkName: "login" */ "../views/login.vue")
    // }, {
    //     path: '/403',
    //     name: '403',
    //     meta: {
    //         title: '没有权限'
    //     },
    //     component: () => import (/* webpackChunkName: "403" */ '../views/403.vue')
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | vue-manage-system`;
//     const role = localStorage.getItem('ms_username');
//     const permiss = usePermissStore();
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
//         // 如果没有权限，则进入403
//         next('/403');
//     } else {
//         next();
//     }
// });

export default router;