<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
    <template v-for="item in menuList">
      <el-sub-menu :index="item.index" v-if="item.children">
        <template #title>{{ item.name }}</template>
        <el-menu-item :index="item2.path" :class="[$route.path==item2.path?'active':'']" v-for="item2 in item.children">{{ item2.name }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="item.index" v-else>{{ item.name }}</el-menu-item>

    </template>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('Home')
const menuList = [
  {
    index: '1',
    name: 'Home',
    path:'Home'
  },
  {
    index: '2',
    name: 'Genre',
    children: [
      {
        index: '2-1',
        name: 'Acción',
        path:'category'
      },
      {
        index: '2-2',
        name: 'Animación',
        path:'category'
      },
      {
        index: '2-3',
        name: 'Aventura',
        path:'category'
      },
      {
        index: '2-4',
        name: 'Biografico',
        path:'category'
      },
      {
        index: '2-5',
        name: 'Ciencia Ficción',
        path:'category'
      },
      {
        index: '2-6',
        name: 'Comedia',
        path:'category'
      },
      {
        index: '2-7',
        name: 'Crimen',
        path:'category'
      },
      {
        index: '2-8',
        name: 'Documental',
        path:'category'
      },
      {
        index: '2-9',
        name: 'Drama',
        path:'category'
      },
      {
        index: '2-10',
        name: 'Familiar',
        path:'category'
      },

      {
        index: '2-11',
        name: 'Fantasía',
        path:'category'
      },
      {
        index: '2-12',
        name: 'Misterio',
        path:'category'
      },
      {
        index: '2-13',
        name: 'Música',
        path:'category'
      },
      {
        index: '2-14',
        name: 'Romance',
        path:'category'
      },
      {
        index: '2-15',
        name: 'Terror',
        path:'category'
      },
      {
        index: '2-16',
        name: 'Thriller',
        path:'category'
      },
    ]
  },
  {
    index: '3',
    name: 'Movies',
    children: [
      {
        index: '3-1',
        name: 'peliculas',
        path:'category'
      },
    ]
  },
  {
    index: '4',
    name: 'Series',
    children: [
      {
        index: '4-1',
        name: 'en-emision',
        path:'category'
      },
      {
        index: '4-2',
        name: 'finalizado',
        path:'category'
      },
      {
        index: '4-3',
        name: 'dia',
        path:'category'
      },
      {
        index: '4-4',
        name: 'semana',
        path:'category'
      },
      {
        index: '4-5',
        name: 'mes',
        path:'category'
      },
      {
        index: '4-6',
        name: 'estrenos',
        path:'category'
      },
      {
        index: '4-7',
        name: 'peliculas',
        path:'category'
      },
    ]

  }
]
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleRouter=()=>{

}
</script>

<style lang="scss">
.el-menu--horizontal.el-menu{
  border: none !important;;
}
</style>