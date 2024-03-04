<template>
    <div class="searchPage">
        <el-input v-model="value" class="w-50 m-2" placeholder="Search" :prefix-icon="Search" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
let value = ref('');
</script>