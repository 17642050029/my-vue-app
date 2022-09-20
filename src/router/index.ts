import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { usePermissStore } from '../store/permiss'
import Layout from "../layout/index.vue";
// import ConfigUtil from '../utils/config'
import MicroApps from '../modules/microApps'


import { useMenusStore } from '../store/modulles/menus'


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页',
                    top: true
                },
                // component: () => import( /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue")
                children:[
                    {
                        path: "m1",
                        name: "m1",
                        meta: {
                            title: 'm1',
                        },
                        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/mirco/index.vue")
                    },
                ]
            },
            {
                path: "m2",
                name: "m2",
                meta: {
                    title: 'm2',
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/mirco/index.vue")
            },
            {
                path: "t",
                name: "t",
                meta: {
                    title: '业务组件',
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/t/index.vue")
            },
        ]
    }
    , {
        path: "/404",
        name: "404",
        meta: {
            title: '404',
        },
        component: () => import( /* webpackChunkName: "login" */ "@/views/404.vue")
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录',
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

// 手动控制应用加载
import {loadMicroApp} from 'qiankun';

// 缓存应用实例
const microList = new Map([])
// 当前应用配置
let current={
    activeRule:''
}

let firstEnterRoute = true
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
        if (firstEnterRoute) {
            const menu = useMenusStore()
            const routes = await menu.getUserMenus()
            routes.forEach((item: any) => router.addRoute('Layout',item))
            firstEnterRoute = false
            const conf = MicroApps.find(item => to.path.indexOf(item.activeRule) !== -1)
            // debugger
            // if(conf){
        
            //     // 未切换子应用
            //     if(current &&  current.activeRule === conf.activeRule ){
            //         router.push({ ...to, replace: true })
            //       return 
            //     }
                
            //     const cacheMicro = microList.get(conf.activeRule)
                
            //     // 已缓存应用
            //     if(cacheMicro){
            //         router.push({ ...to, replace: true })
            //       return
            //     }
                
            //     // 未缓存应用
            //     const micro = loadMicroApp(conf)
                  
            //     microList.set(conf.activeRule, micro)
            //     console.log(microList);
                
            //     current = conf
            //     router.push({ ...to, replace: true })
            
            //   }
            router.push({ ...to, replace: true })
        }
    }
});


export default router;