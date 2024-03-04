<template>
    <div class="homePage">
        <div class="bannerWrap">

            <swiper class="my-swiper" :modules="modules" loop
                :pagination="{ enabled: true, type: 'bullets', clickable: true }"
                :autoplay="{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide v-for="item of bannerList" class="swiperSlideWrap">
                    <div class="item-container" @click="addHomeJump(item)">
                        <img class="item-img" :src="item.imagen" :alt="item.name" />
                        <div class="bannerMask"></div>
                        <div class="item-desc">
                            <div class="item-name">{{ item.name }}</div>
                            <div class="item-aired">{{ item.aired }}</div>
                            <div class="item-overview">{{ item.overview }}</div>
                            <div class="item-play-btn">
                                <Edit style="width: 1rem; height: 1em; margin-right: 8px" />Watch Now
                            </div>
                        </div>


                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="clears"></div>
        <div class="recommendMovies">
            <div class="recommendTitle"><span>RECOMENDED MOVIES</span>
                <div class="recommendMore" @click="handleMore('movie')">View More</div>
            </div>
            <div class="moviesList">
                <div class="moviesShow" v-for="item in recommandMovies">
                    <div class="imgbox">
                        <img :src="item.imagen" class="image" object-fit='cover' />
                    </div>
                    <div class="moviesName">{{ item.name }}</div>

                </div>
            </div>
        </div>
        <div class="recommendMovies recommendSeies">
            <div class="recommendTitle"><span>RECOMENDED SEIES</span>
                <div class="recommendMore" @click="handleMore('tv')">View More</div>
            </div>
            <div class="moviesList">
                <div class="moviesShow" v-for="item in recommandTvs">
                    <div class="imgbox">
                        <img :src="item.imagen" class="image" object-fit='cover' />
                    </div>
                    <div class="moviesName">{{ item.name }}</div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
import { ajaxRecentMoviesApi, ajaxRecentTvsApi } from '@/api/index'
import { useRouter } from 'vue-router';
const $router = useRouter();
let bannerList = ref([
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
const onSwiper = (swiper: any) => {
    // console.log(swiper);
};

const onSlideChange = () => {
    // console.log('slide change');
};
const addHomeJump = (item: any) => {

}
let recommandMovies = ref([]),
    recommandTvs = ref([]);

const getRecentMovies = async () => {
    const res = await ajaxRecentMoviesApi();
    recommandMovies.value = res.slice(0, 18);
    console.log(res);
}
getRecentMovies();

const getRecentTvs = async () => {
    const res = await ajaxRecentTvsApi();
    recommandTvs.value = res.slice(0, 18);
    console.log(res);
}
getRecentTvs();

const handleMore = (type: string) => {
    $router.push({
        path: "/more",
        query: { type },
    });
}
</script>

<style lang="scss">
@import './index.scss';
</style>