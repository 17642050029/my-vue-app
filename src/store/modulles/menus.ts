import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSystemMenus } from '@/api/system'
// import Layout from "@/layout/index.vue";
export const useMenusStore = defineStore('menus', () => {
    const menus = ref<[]>([])
    const setMenus = (menu: any) => {
        menus.value = menu
        localStorage.setItem('menus', JSON.stringify(menu))
    }

    const deepMap = (list: any) => {
        return list.map((item: any) => {
            const menu: any = {
                path: item.url || item.name,
                name: item.name,
                meta: {
                    title: item.name_zh,
                },
            }
            if (item.url) {
                menu.component = () => import("@/views/mirco/index.vue")
            }
            if (!item.pid) {
                menu.meta.top = true
                if (!item.url) {
                    menu.redirect = '/' + item.subMenu[0].url
                }
            }
            if (item.subMenu?.length) {
                menu.children = deepMap(item.subMenu)
            }
            return menu
        })
    }
    const getUserMenus = async () => {
        const { data: { data } } = await getSystemMenus()
        const menus = deepMap(data)
        setMenus(menus)
        return menus
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
