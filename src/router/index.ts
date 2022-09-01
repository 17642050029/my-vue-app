import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import { usePermissStore } from '../store/permiss'
import Layout from "../layout/index.vue";
import ConfigUtil from '../utils/config'

import { getSystemMenus } from '../api/system'

const { data: { data } } = await getSystemMenus({
    appCode: "DESIGNER"
})


const deepMap = (list: any) => {
    return list.map((item: any) => {
        const menu: any = {
            path: '/' + item.url,
            name: item.funCode,
            meta: {
                title: item.funZh,
                icon:'Odometer'
            },
        }
        if (item.url) {
            menu.component = () => import("@/views/mirco/index.vue")
        }
        if (item.children && item.children.length) {
            menu.children = deepMap(item.children)

        }
        return menu
    })
}

const asyncRoute = deepMap(data)


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
                path: "/designer/micro/designer-interface",
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
            ...asyncRoute
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
    history: createWebHashHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
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
    const token = localStorage.getItem('accessToken');
    if (!token) {
        let loginUrl = await ConfigUtil.getLocalConfig('loginUrl')
        loginUrl = loginUrl || '/toy-proxy/toy-login/?redirect=${redirect}'
        const path = `${window.location.origin}${to.fullPath}`
        loginUrl = loginUrl.replace('${redirect}', path)
        console.log(loginUrl);
        window.location.href = loginUrl;
    } else {
        next()
    }
});


export default router;