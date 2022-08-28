<script setup lang="ts" name="LayoutSidebar">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useRoute } from 'vue-router';
import logo from '@/assets/vue.svg'

const sidebar = useSidebarStore()
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const items = [
		{
		icon: 'Odometer',
		index: '/dashboard',
		title: '主应用首页',
		permiss: '1'
	},
	{
		icon: 'Odometer',
		index: '/m1',
		title: '微应用1',
		permiss: '1'
	},
	{
		icon: 'Calendar',
		index: '/m2',
		title: '微应用2',
		permiss: '2'
	},
	{
		icon: 'Calendar',
		index: '/t',
		title: '业务组件',
		permiss: '2'
	}
	]
const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});
// const sidebar = useSidebarStore();
</script>

<template>
	<div class="layout-sidebar">
		<div class="logo">
			<img :src="logo" class="sidebar-logo">
			{{ sidebar.collapse ? '' : '后台管理系统' }}
		</div>
		<el-menu active-text-color="#ffd04b" background-color="#545c64" :default-active="route.path" text-color="#fff"
			:collapse="sidebar.collapse" @open="handleOpen" @close="handleClose" router >
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-sub-menu :index="item.index" :key="item.index" >
						<template #title>
							<el-icon>
								<component :is="item.icon"></component>
							</el-icon>
							<span>{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"
								>
								<template #title>{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
									{{ threeItem.title }}
								</el-menu-item>
							</el-sub-menu>
							<el-menu-item v-else :index="subItem.index" >
								{{ subItem.title }}
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index" >
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<template #title>{{ item.title }}</template>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<style>
.layout-sidebar {
	display: inline-block;
	/* width: auto; */
}

.layout-sidebar .el-menu {
	border: none;
}

.el-menu:not(.el-menu--collapse) {
	width: 250px;
}

.el-sub-menu__title>span {
	max-width: 150px;
	overflow: hidden;
}

.logo {
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
}
.sidebar-logo {
	width: 30px;
	height: 30px;
	margin-right: 10px;
}
</style>