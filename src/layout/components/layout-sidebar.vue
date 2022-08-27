<script setup lang="ts" name="LayoutSidebar">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useRoute } from 'vue-router';

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
		title: '系统首页',
		permiss: '1'
	},
	{
		icon: 'Calendar',
		index: '/table',
		title: '基础表格',
		permiss: '2'
	},
	{
		icon: 'DocumentCopy',
		index: '/tabs',
		title: 'tab选项卡',
		permiss: '3'
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
	{
		icon: 'Setting',
		index: '/icon',
		title: '自定义图标',
		permiss: '10'
	},
	{
		icon: 'PieChart',
		index: '/charts',
		title: 'schart图表',
		permiss: '11'
	},
	{
		icon: 'Warning',
		index: '/permission',
		title: '权限管理',
		permiss: '13'
	},
	{
		icon: 'CoffeeCup',
		index: '/donate',
		title: '支持作者',
		permiss: '14'
	}
];
const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});
// const sidebar = useSidebarStore();
</script>

<template>
	<div class="app-sidebar">
		<div class="logo">
			<!-- <img :src="logo" class="sidebar-logo"> -->
			{{ sidebar.collapse ? '1' : '后台管理系统' }}
		</div>
		<el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="2"
			text-color="#fff" :collapse="sidebar.collapse" @open="handleOpen" @close="handleClose">
			<el-sub-menu index="1">
				<template #title>
					<el-icon>
						<location />
					</el-icon>
					<span>Navigator O222222ssss22222ne</span>
				</template>
				<el-menu-item-group title="Group One">
					<el-menu-item index="1-1">item one</el-menu-item>
					<el-menu-item index="1-2">item two</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Group Two">
					<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-sub-menu index="1-4">
					<template #title>item four</template>
					<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
			<el-menu-item index="3" disabled>
				<el-icon>
					<document />
				</el-icon>
				<span>Navigator Three</span>
			</el-menu-item>
			<el-menu-item index="4">
				<el-icon>
					<setting />
				</el-icon>
				<span>Navigator Four</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<style>
.app-sidebar {
	display: inline-block;
	/* width: auto; */
}

.app-sidebar .el-menu {
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
	text-align: center;
	line-height: 70px;
	color: #fff;
}
</style>