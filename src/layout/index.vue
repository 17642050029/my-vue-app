<script setup lang="ts">
import {
	Document,
	Menu as IconMenu,
	Location,
	Setting,
} from '@element-plus/icons-vue'
import { useSidebarStore } from '../store/sidebar'
const sidebar=useSidebarStore()
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>
<template>
	<el-container>
		<el-aside width="200px">
			<div class="logo">后台管理系统</div>
<el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
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
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
		</el-aside>
		<el-container>
			<el-header>
						<div class="collapse-btn" @click="sidebar.handleCollapse()">
			<el-icon v-if="sidebar.collapse"><Expand /></el-icon>
			<el-icon v-else><Fold /></el-icon>
		</div>
			</el-header>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>
<style>
.el-container {
	height: 100%;
}
.el-aside {
	background-color:#545c64;
}
.el-aside .el-menu {
	border: none;
}
.el-main {
	background-color: #f0f0f0;
}
.logo {
	text-align: center;
	line-height: 70px;
	color: #fff;
}
</style>