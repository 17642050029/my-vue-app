import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { usePermissStore } from '../store/permiss'
import Layout from "../layout/index.vue";
// import ConfigUtil from '../utils/config'


import { useMenusStore } from '../store/modulles/menus'


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页',
                    permiss: '1'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue")
            },
            {
                path: "/m1",
                name: "m1",
                meta: {
                    title: 'm1',
                    permiss: '1'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/mirco/index.vue")
            },
            {
                path: "/m2",
                name: "m2",
                meta: {
                    title: 'm2',
                    permiss: '1'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/mirco/index.vue")
            },
            {
                path: "/t",
                name: "t",
                meta: {
                    title: '业务组件',
                    permiss: '1'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/t/index.vue")
            },
        ]
    }
    , {
        path: "/404",
        name: "404",
        meta: {
            title: '404'
        },
        component: () => import( /* webpackChunkName: "login" */ "@/views/404.vue")
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "@/views/login/index.vue")
    },
    //  {
    //     path: '/403',
    //     name: '403',
    //     meta: {
    //         title: '没有权限'
    //     },
    //     component: () => import (/* webpackChunkName: "403" */ '../views/403.vue')
    // },
    // {
    //     path: '/:pathMatch(.*)',
    //     redirect: '/404'
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from) => {
    // document.title = `${to.meta.title} | vue-manage-system`;
    // const role = localStorage.getItem('ms_username');
    // // const permiss = usePermissStore();
    // if (!role && to.path !== '/login') {
    //     next('/login');
    // } 
    // // else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    // //     // 如果没有权限，则进入403
    // //     next('/403');
    // // } 
    // else {
    //     next();
    // }
    const token: string = localStorage.getItem('accessToken') || '';
    if (!token) {
        const redirectUrl = window.location.href;
        const loginUrl = '/toy-proxy/toy-login/?redirect=' + redirectUrl;
        window.location.href = loginUrl;
        return false
    } else {
        const menu = useMenusStore()
        if (!menu.menus.length) {
            const routes = await menu.getUserMenus()
            console.log(routes);
            router.addRoute(routes)
            console.log(router);

        }
        
    }
});
router.afterEach((to, from, nex) => {

})

export default router;