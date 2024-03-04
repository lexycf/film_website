<template>
    <div class="playerPage">
        <div class="playerWrap">
            <div class="videoBox">
                <iframe :src="playerLinks" frameborder="0" width="100%" height="400"></iframe>
                <!-- <PlayerVideo :src="videoOption.src" /> -->
            </div>
            <div class="videoNotice">If current server dosen't work please try other version below.</div>
        </div>
        <div class="subTitle" v-for="(item, indexI) in subTitle">
            <div class="titLabel">{{ item.language }}：</div>
            <div class="titleVals"><span :class="[item.active ? 'active' : '']" v-for="(item, indexJ) in item.list"
                    @click="dealAssetsSource(indexI, indexJ)">{{ 'url-' + (indexJ + 1)
                    }}</span></div>
        </div>
        <div class="videoIntroduce">
            <div class="imgShow"><img :src="videoIntro.imagen" alt=""></div>
            <div class="videoIntro">
                <div class="videoName">{{ videoIntro.name }}</div>
                <div class="videoSei">{{ videoIntro.aired }}</div>
                <div class="videoDesc">{{ videoIntro.overview }}</div>
                <div class="videoGenre">{{ videoIntro.genres }}</div>
            </div>
        </div>
        <div class="videoSeiBox">
            <div class="titLabel">Seasons：</div>
            <div class="titleVals"><span :class="[item.active ? 'active' : '']" v-for="(item, index) in seasons"
                    @click="handleSeason(index, item)">{{
                        item.seasonNums }}</span></div>
        </div>
        <div class="videoSeiBox">
            <div class="titLabel">Chapters：</div>
            <div class="titleVals"><span :class="[item.active ? 'active' : '']" v-for="(item, index) in chapters"
                    @click="handleChapter(index, item)">{{ item.nums }}</span></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ajaxEpisodesApi, ajaxPlayersApi } from '@/api/index'
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { dataGroupingToArray } from '@/utils/tools';
import { useCommonStore } from '@/store/commonStore'
const $route = useRoute();
let itemId = $route.query.id;
let subTitle = ref([]);//资源路径（字幕&配音）
let seasons = ref([]),
    chapters = ref([]),
    episodeIds = '';
let videoIntro = ref({
    name: '',
    aired: '',
    overview: '',
    genres: ''
})

const set_playerInfo = () => {
    videoIntro.value = useCommonStore().$state.playerInfo;
    console.log(videoIntro.value, 'videoIntro')
}
set_playerInfo();
const dealChapters = (seasonIdx: any) => {
    chapters.value = seasons.value[seasonIdx].list;
    chapters.value.map(item => {
        item.active = false;
    })
    chapters.value[0].active = true;
    episodeIds = chapters.value[0].id;
    getPlayInfo(chapters.value[0].id);

}
const getMovieInfo = async () => {
    const res = await ajaxEpisodesApi({ itemId });
    let res2 = dataGroupingToArray(res, 'seasonNums')
    res2.map(item => {
        item.active = false;
    })
    res2[0].active = true;
    seasons.value = res2;
    dealChapters(0);
    console.log(res, 'res');
}
getMovieInfo();
let playerLinks = ref('');

const dealAssetsSource = (parentIdx: any, childIdx) => {
    subTitle.value.map((item, indexI) => {
        item.list.map((itemJ, indexJ) => {
            itemJ.active = false;;
        })
    })
    subTitle.value[parentIdx].list[childIdx].active = true;
    playerLinks.value = subTitle.value[parentIdx].list[childIdx].url;

}
const getPlayInfo = async (episodeId) => {
    const res = await ajaxPlayersApi({ episodeId });
    let res2 = dataGroupingToArray(res, 'language');
    subTitle.value = res2;
    dealAssetsSource(0, 0);
    console.log(res2, 'getPlay');
}

const handleSeason = (index: any, item: any) => {
    seasons.value.map((item) => {
        item.active = false;
    })
    seasons.value[index].active = true;
}

const handleChapter = (index: any, item: any) => {
    chapters.value.map((item) => {
        item.active = false;
    })
    chapters.value[index].active = true;
    getPlayInfo(chapters.value[index].id);
}

</script>

<style lang="scss">
@import './index.scss';
</style>