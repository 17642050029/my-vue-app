<script setup lang="ts">
import AppSidebar from './components/app-sidebar.vue'
import AppHeader from './components/app-header.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { useSidebarStore } from '../store/sidebar'
const sidebar = useSidebarStore()
const router = useRouter()

</script>
<template>
  <el-container>
    <AppSidebar />
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-container {
  height: 100%;
}




</style>