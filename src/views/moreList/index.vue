<template>
    <div class="categoryPage">
        <div class="categoryPageTit"><span>{{ resultLabel }}</span>
        </div>
        <div class="categoryList">
            <div class="categoryItem moviesShow" v-for="item in moviesList">
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
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import { ajaxPageQueryApi } from '@/api/index'
const $route = useRoute();
const type = $route.query.type;
let resultLabel = ref('ACTIONS');
resultLabel.value=type;
let totalList=[];
let moviesList = ref([])
let totalPage=1;
let startId = 1,
    pageSize = 24;
let pageCount = ref(1),
    currentPage = ref(1);
const getMovies = async () => {
    let param = {
        type, startId, pageSize
    }
    const res = await ajaxPageQueryApi(param);
    moviesList.value = res.list;
    console.log(moviesList.value, 'moviesList')
    startId = res.startId;
    totalList=[...totalList,...res.list];
    if (res.list.length == pageSize) {
        pageCount.value++;
        totalPage++;
    }
    console.log(res);
    console.log(totalList,'totalList')
}
getMovies();

const changeShowList=(currentPage:any)=>{
    moviesList.value=totalList.slice((currentPage-1)*pageSize,currentPage*pageSize);
    console.log(totalList,'totalList')
}
const changePage=(e)=>{
    console.log(e,totalPage,111);
    if(e<totalPage){
        changeShowList(e);
    }else{
        getMovies();
    }
    

}
</script>
<style lang="scss">
@import './index.scss';
</style>