<script setup lang="ts" name="LayoutSidebar">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/modulles/sidebar';
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
		permiss: '1',
	},
	{
		icon: 'Odometer',
		index: '/designer/micro/designer-interface',
		title: '微应用1',
		permiss: '1',
	},
	{
		icon: 'Calendar',
		index: '/m2',
		title: '微应用2',
		permiss: '2',
	},
	{
		icon: 'Edit',
		index: '3',
		title: '表单相关',
		permiss: '4',
		subs: [
			{
				index: '/form',
				title: '基本表单',
				permiss: '5'
			},
			{
				index: '/upload',
				title: '文件上传',
				permiss: '6'
			},
			{
				index: '4',
				title: '三级菜单',
				permiss: '7',
				subs: [
					{
						index: '/editor',
						title: '富文本编辑器',
						permiss: '8'
					},
					{
						index: '/markdown',
						title: 'markdown编辑器',
						permiss: '9'
					}
				]
			}
		]
	},
]
const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

</script>

<template>
	<div class="layout-sidebar">
		<div class="sidebar-logo-container" :class="{ 'collapse': sidebar.collapse }">
			<transition name="sidebarLogoFade">
				<router-link v-if="sidebar.collapse" key="collapse" class="sidebar-logo-link" to="/">
					<img v-if="logo" :src="logo" class="sidebar-logo">
					<h1 v-else class="sidebar-title">{{ 123 }} </h1>
				</router-link>
				<router-link v-else key="expand" class="sidebar-logo-link" to="/">
					<img v-if="logo" :src="logo" class="sidebar-logo">
					<h1 class="sidebar-title">{{ 1231312312 }} </h1>
				</router-link>
			</transition>
		</div>
		<el-scrollbar>
			<el-menu active-text-color="#ffd04b" background-color="#545c64" :default-active="route.path"
				text-color="#fff" :collapse="sidebar.collapse" @open="handleOpen" @close="handleClose" router>
				<template v-for="item in items">
					<template v-if="item.subs">
						<el-sub-menu :index="item.index" :key="item.index">
							<template #title>
								<el-icon>
									<component :is="item.icon"></component>
								</el-icon>
								<span>{{ item.title }}</span>
							</template>
							<template v-for="subItem in item.subs">
								<el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
									<template #title>{{ subItem.title }}</template>
									<el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i"
										:index="threeItem.index">
										{{ threeItem.title }}
									</el-menu-item>
								</el-sub-menu>
								<el-menu-item v-else :index="subItem.index">
									{{ subItem.title }}
								</el-menu-item>
							</template>
						</el-sub-menu>
					</template>
					<template v-else>
						<el-menu-item :index="item.index" :key="item.index">
							<el-icon>
								<component :is="item.icon"></component>
							</el-icon>
							<template #title>{{ item.title }}</template>
						</el-menu-item>
					</template>
				</template>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<style scoped lang="less">
.layout-sidebar {
	display: inline-block;
	height: 100%;
	/* width: auto; */
}

.layout-sidebar .el-menu {
	border: none;
}

.el-menu:not(.el-menu--collapse) {
	width: 250px;
}


// .logo {
// 	height: 70px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	color: #fff;
// }

// .sidebar-logo {
// 	width: 30px;
// 	height: 30px;
// 	margin-right: 10px;
// }
.el-scrollbar {
	height: calc(100% - 70px) !important
}

.sidebarLogoFade-enter-active {
	transition: opacity 1s;
}

.sidebarLogoFade-enter-from,
.sidebarLogoFade-leave-to {
	opacity: 0;
}

.sidebarLogoFade-enter-to,
.sidebarLogoFade-leave-from {
	opacity: 1;
}

.sidebar-logo-container {
	position: relative;
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #2b2f3a;
	text-align: center;
	overflow: hidden;

	& .sidebar-logo-link {
		height: 100%;
		width: 100%;

		& .sidebar-logo {
			width: 32px;
			height: 32px;
			vertical-align: middle;
			margin-right: 12px;
		}

		& .sidebar-title {
			display: inline-block;
			margin: 0;
			color: #fff;
			font-weight: 600;
			line-height: 50px;
			font-size: 14px;
			font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
			vertical-align: middle;
		}
	}

	&.collapse {
		.sidebar-logo {
			margin-right: 0px;
		}
	}
}
</style>