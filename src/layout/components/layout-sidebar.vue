<script setup lang="ts" name="LayoutSidebar">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/modulles/sidebar';
import { useRoute } from 'vue-router';
import router from '@/router';
import logo from '@/assets/vue.svg'

const sidebar = useSidebarStore()
const handleOpen = (key: string, keyPath: string[]) => {
	// console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	// console.log(key, keyPath)
}
const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});
const menus =  computed(()=>router.getRoutes().filter(item=>item.meta.top))

</script>

<template>
	<div class="layout-sidebar">
		<div class="sidebar-logo-container" :class="{ 'collapse': sidebar.collapse }">
			<transition name="sidebarLogoFade">
				<router-link v-if="sidebar.collapse" key="collapse" class="sidebar-logo-link" to="/404">
					<img v-if="logo" :src="logo" class="sidebar-logo">
					<h1 v-else class="sidebar-title">{{ 123 }} </h1>
				</router-link>
				<router-link v-else key="expand" class="sidebar-logo-link" to="/404">
					<img v-if="logo" :src="logo" class="sidebar-logo">
					<h1 class="sidebar-title">{{ 1231312312 }} </h1>
				</router-link>
			</transition>
		</div>
		<el-scrollbar>
			<el-menu active-text-color="#ffd04b" background-color="#545c64" :default-active="route.path"
				text-color="#fff" :collapse="sidebar.collapse" @open="handleOpen" @close="handleClose" router>
				<template v-for="item in menus">
					<template v-if="item.children">
						<el-sub-menu :index="item.path" :key="item.path">
							<template #title>
								<el-icon>
									<component :is="item.meta.icon"></component>
								</el-icon>
								<span>{{ item.meta.title }}</span>
							</template>
							<template v-for="subItem in item.children">
								<el-sub-menu v-if="subItem.children" :index="subItem.path" :key="subItem.path">
									<template #title>{{ subItem.meta.title }}</template>
									<el-menu-item v-for="(threeItem, i) in subItem.children" :key="i"
										:index="threeItem.path">
										{{ threeItem.meta.title }}
									</el-menu-item>
								</el-sub-menu>
								<el-menu-item v-else :index="subItem.path">
									{{ subItem.meta.title }}
								</el-menu-item>
							</template>
						</el-sub-menu>
					</template>
					<template v-else>
						<el-menu-item :index="item.path" :key="item.path">
							<el-icon>
								<component :is="item.meta.icon"></component>
							</el-icon>
							<template #title>{{ item.meta.title }}</template>
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