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
    index: 'Home',
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
        path:'category?genres=Acción'
      },
      {
        index: '2-2',
        name: 'Animación',
        path:'category?genres=Animación'
      },
      {
        index: '2-3',
        name: 'Aventura',
        path:'category?genres=Aventura'
      },
      {
        index: '2-4',
        name: 'Biografico',
        path:'category?genres=Biografico'
      },
      {
        index: '2-5',
        name: 'Ciencia Ficción',
        path:'category?genres=Ciencia Ficción'
      },
      {
        index: '2-6',
        name: 'Comedia',
        path:'category?genres=Comedia'
      },
      {
        index: '2-7',
        name: 'Crimen',
        path:'category?genres=Crimen'
      },
      {
        index: '2-8',
        name: 'Documental',
        path:'category?genres=Documental'
      },
      {
        index: '2-9',
        name: 'Drama',
        path:'category?genres=Drama'
      },
      {
        index: '2-10',
        name: 'Familiar',
        path:'category?genres=Familiar'
      },

      {
        index: '2-11',
        name: 'Fantasía',
        path:'category?genres=Fantasía'
      },
      {
        index: '2-12',
        name: 'Misterio',
        path:'category?genres=Misterio'
      },
      {
        index: '2-13',
        name: 'Música',
        path:'category?genres=Música'
      },
      {
        index: '2-14',
        name: 'Romance',
        path:'category?genres=Romance'
      },
      {
        index: '2-15',
        name: 'Terror',
        path:'category?genres=Terror'
      },
      {
        index: '2-16',
        name: 'Thriller',
        path:'category?genres=Thriller'
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
        path:'category?type=movie&tag=peliculas'
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
        path:'category?type=tv&tag=en-emision'
      },
      {
        index: '4-2',
        name: 'finalizado',
        path:'category?type=tv&tag=finalizado'
      },
      {
        index: '4-3',
        name: 'dia',
        path:'category?type=tv&tag=dia'
      },
      {
        index: '4-4',
        name: 'semana',
        path:'category?type=tv&tag=semana'
      },
      {
        index: '4-5',
        name: 'mes',
        path:'category?type=tv&tag=mes'
      },
      {
        index: '4-6',
        name: 'estrenos',
        path:'category?type=tv&tag=estrenos'
      },
      {
        index: '4-7',
        name: 'peliculas',
        path:'category?type=tv&tag=peliculas'
      },
    ]

  }
]
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
.el-menu--horizontal.el-menu{
  border: none !important;;
}
</style>