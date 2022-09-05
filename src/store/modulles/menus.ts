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
                path: '',
                name: item.name,
                meta: {
                    title: item.name_zh,
                    icon: 'Odometer'
                },
            }
            if (item.pid) {
                menu.path = '/' + item.url
                menu.component = () => import("@/views/mirco/index.vue")
            }else {
                menu.path = item.name
                menu.meta.top=true
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
