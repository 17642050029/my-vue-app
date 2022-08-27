<script setup lang="ts" name="Layout">
import LayoutSidebar from './components/layout-sidebar.vue'
import LayoutHeader from './components/layout-header.vue'
import LayoutMain from './components/layout-main.vue'
</script>

<template>
  <el-container>
    <el-aside>
      <LayoutSidebar />
    </el-aside>
    <el-container>
      <el-header>
        <LayoutHeader />
      </el-header>
      <el-main>
        <LayoutMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-container {
  height: 100%;
}
.el-container .el-aside {
	width: auto;
	background-color: #545c64;
}
</style>