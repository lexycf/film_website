<template>
 <el-config-provider :locale="zhCn">
    
    <el-container>
      <el-header><headerTpl /></el-header>
      <el-main><router-view /></el-main>
      <el-footer><FooterTpl /></el-footer>
    </el-container>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from "element-plus/es/locale/lang/zh-cn";
import headerTpl from '@/components/Header/index.vue';
import FooterTpl from '@/components/Footer/index.vue';
</script>

<style lang="scss" scoped>
.el-main{
  padding:0;
}
@import './styles/common.scss';
</style>
