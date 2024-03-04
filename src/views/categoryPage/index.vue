<template>
    <div class="categoryPage">
        <div class="categoryPageTit"><span>{{ resultLabel }}</span>
            <div class="searchWrap"><el-input v-model="value" class="w-50 m-2" placeholder="Search" :prefix-icon="Search" />
            </div>
        </div>
        <div class="categoryList">
            <div class="categoryItem moviesShow" v-for="item in moviesList" @click="handleLink(item)">
                <div class="moviesImgs"><img :src="item.imagen" alt="" class="image"></div>
                <div class="moviesName">{{ item.name }}</div>
            </div>
        </div>
        <el-pagination background layout="prev, pager, next" v-model:current-page="currentPage" :page-size='36'
            :page-count="pageCount" @change="changePage" class="mt-4" />
        <div class="clears"></div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
import { ajaxMovieItemsApi } from '@/api/index'
import { useCommonStore } from '@/store/commonStore'
const commonStore = useCommonStore()
const $route = useRoute(),
    $router = useRouter();
const genres = $route.query.genre,
    type = $route.query.type,
    tag = $route.query.tag;
let resultLabel = ref('ACTIONS');
if (genres) resultLabel.value = genres;
if (tag) resultLabel.value = tag;
let totalList = [];
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
let totalPage = 1;
let startId = 1,
    pageSize = 24;
let pageCount = ref(1),
    currentPage = ref(1);
const getMovies = async () => {
    let param = {
        genres, tag, type, startId, pageSize
    }
    const res = await ajaxMovieItemsApi(param);
    moviesList.value = res.list;
    console.log(moviesList.value, 'moviesList')
    startId = res.startId;
    totalList = [...totalList, ...res.list];
    if (res.list.length == pageSize) {
        pageCount.value++;
        totalPage++;
    }
    console.log(res);
    console.log(totalList, 'totalList')
}
getMovies();

const changeShowList = (currentPage: any) => {
    moviesList.value = totalList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log(totalList, 'totalList')
}
const changePage = (e) => {
    console.log(e, totalPage, 111);
    if (e < totalPage) {
        changeShowList(e);
    } else {
        getMovies();
    }


}

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