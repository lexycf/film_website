<template>
    <div class="pageHeader">
        <div class="logo"></div>
        <div class="menuWrap"><MenuTpl /></div>
        <div class="searchWrap"><SearchTpl /></div>
    </div>
</template>
<script lang="ts" setup>
import MenuTpl from './components/Menu/index.vue';
import SearchTpl from './components/Search/index.vue';
</script>
<style lang="scss">
@import './index.scss';
</style>