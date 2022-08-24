<script setup lang="ts">
import { onMounted } from 'vue';
// import { useSidebarStore } from '../store/sidebar';
import { useRouter } from 'vue-router';
// import imgurl from '../assets/img/img.jpg';
import imgurl from '../../assets/vue.svg';
const username: string | null = localStorage.getItem('ms_username');
const message: number = 2;
// const sidebar = useSidebarStore();
// 侧边栏折叠
const collapseChage = () => {
	// sidebar.handleCollapse();
};
onMounted(() => {
	if (document.body.clientWidth < 1500) {
		collapseChage();
	}
});
// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command: string) => {
	if (command == 'loginout') {
		localStorage.removeItem('ms_username');
		router.push('/login');
	} else if (command == 'user') {
		router.push('/user');
	}
};
</script>

<template>
	<el-header>
		<!-- 折叠按钮 -->
		<!-- <div class="collapse-btn" @click="collapseChage">
			<el-icon v-if="sidebar.collapse"><Expand /></el-icon>
			<el-icon v-else><Fold /></el-icon>
		</div> -->
		<div class="logo">后台管理系统</div>
		<div class="header-right">
			<div class="header-user-con">
				<!-- 消息中心 -->
				<div class="btn-bell" @click="router.push('/tabs')">
					<el-tooltip effect="dark" :content="message ? `有${message}条未读消息` : `消息中心`" placement="bottom">
						<i class="el-icon-lx-notice"></i>
					</el-tooltip>
					<span class="btn-bell-badge" v-if="message"></span>
				</div>
				<!-- 用户头像 -->
				<el-avatar class="user-avator" :size="30" :src="imgurl" />
				<!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						{{ username }}
						<el-icon class="el-icon--right">
							<!-- <arrow-down /> -->
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item command="user">个人中心</el-dropdown-item>
							<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</el-header>
</template>

<style scoped>
.logo {
	line-height: 70px;
}
</style>