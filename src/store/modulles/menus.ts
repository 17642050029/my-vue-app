import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getSystemMenus } from '@/api/system'
export const useMenusStore = defineStore('menus', () => {
    const menus = ref<[]>([])
    const setMenus = (menu: any) => {
        menus.value = menu
    }

    const deepMap = (list: any) => {
        return list.map((item: any) => {
            const menu: any = {
                path: '/' + item.url,
                name: item.funCode,
                meta: {
                    title: item.funZh,
                    icon: 'Odometer'
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
    const getMenus = async () => {
        const { data: { data } } = await getSystemMenus({
            appCode: "DESIGNER"
        })
        const menus = deepMap(data)
        setMenus(menus)
        return menus
    }
    return {
        menus,
        setMenus,
        getMenus
    }
},{persist: true});
