<template>
    <el-dropdown
      trigger="click"
      class="international"
      @command="handleSetLanguage"
    >
      <div>
        <el-tooltip content="国际化">
          <el-button>语言</el-button>
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="language === 'zh-CN'" command="zh-CN">
            中文
          </el-dropdown-item>
          <el-dropdown-item :disabled="language === 'en-US'" command="en-US">
            English
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>
 
  <script setup lang="ts">
  import { useI18n } from "vue-i18n";
  import {  computed } from "vue";
  import { useSystemStore } from "@/store/modulles/system";
  // import { ElMessage } from "element-plus";
 
  const system = useSystemStore();
  const language = computed(() => system.language);
 
  // 切换语言的方法
  const i18n = useI18n();
  const handleSetLanguage = (lang:string) => {
    i18n.locale.value = lang;
    system.setLanguage(lang)
    // ElMessage.success(`语言成功切换为${lang === "zh" ? "中文" : "英文"}`);
  };
  </script>
