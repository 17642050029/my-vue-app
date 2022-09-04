import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSystemMenus } from '@/api/system'
import Layout from "@/layout/index.vue";
export const useMenusStore = defineStore('menus', () => {
    const menus = ref<[]>([])
    const setMenus = (menu: any) => {
        menus.value = menu
        localStorage.setItem('menus', JSON.stringify(menu))
    }

    const deepMap = (list: any) => {
        return list.map((item: any) => {
            const menu: any = {
                path: '',
                name: item.funCode,
                meta: {
                    title: item.funZh,
                    icon: 'Odometer'
                },
                component: Layout
            }
            if (item.url) {
                menu.path = '/' + item.url
                menu.component = () => import("@/views/mirco/index.vue")
            }else {
                menu.meta.top=true
            }
            if (item.children?.length) {
                menu.children = deepMap(item.children)
            }
            return menu
        })
    }
    const getUserMenus = async () => {
        const localMenus = JSON.parse(localStorage.getItem('menus') || '[]')
        if (localMenus.length) {
            setMenus(localMenus)
            return localMenus
        } else {
            const { data: { data } } = await getSystemMenus({
                appCode: "DESIGNER"
            })
            const menus = deepMap(data)
            setMenus(menus)
            return menus
        }
    }
    const clearMenus = () => {
        setMenus([])
    }
    return {
        menus,
        setMenus,
        getUserMenus,
        clearMenus
    }
});
