<template>
    <div class="searchResult">
        <div class="categoryPageTit"><span>{{ resultLabel }}</span></div>
        <div class="categoryList">
            <div class="categoryItem moviesShow" v-for="item in moviesList" @click="handleLink(item)">
                <div class="moviesImgs">
                    <img :src="item.imagen" alt="" class="image">
                    <div class="aired">{{ item.aired }}</div>
                </div>
                <div class="moviesName">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { ajaxSearchApi } from '@/api/index'
import { useCommonStore } from '@/store/commonStore'
const commonStore = useCommonStore()
const $route = useRoute(),
    $router = useRouter();
let keyword = $route.query.keyword;
let resultLabel = ref('ACTIONS');
resultLabel.value = keyword;
let moviesList = ref([
    {
        "itemId": 1,
        "episodeId": 159408,
        "name": "Los campeones",
        "overview": "Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",
        "imagen": "https://pelisimg.online/cover/los-campeones-933419.jpg",
        "genres": "Comedia,  Drama",
        "aired": "2023",
        "createdAt": "2024-01-27 09:30:14"
    },
    {
        "itemId": 1,
        "episodeId": 159408,
        "name": "Los campeones",
        "overview": "Un equipo de baloncesto entrena y compite en las Olimpiadas Especiales bajo la guía de un entrenador imperfecto pero dedicado, Marcus. Remake de la exitosa película de Javier Fesser 'Campeones' (2018).",
        "imagen": "https://pelisimg.online/cover/los-campeones-933419.jpg",
        "genres": "Comedia,  Drama",
        "aired": "2023",
        "createdAt": "2024-01-27 09:30:14"
    },
])

const getResult = async () => {
    const res = await ajaxSearchApi({ keyword });
    moviesList.value = res.slice(0, 36);
    console.log(res);
}
getResult();

const handleLink = (item: any) => {
    commonStore.set_playerInfo(item);
    $router.push({
        path: 'playerPage',
        query: { id: item.id }
    })
}
</script>
<style lang="scss">
@import './index.scss';
</style>