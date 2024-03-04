<template>
    <div class="playerPage">
        <div class="playerWrap">
            <div class="videoBox">
                <PlayerVideo :src="videoOption.src" />
            </div>
            <div class="videoNotice">If current server dosen't work please try other version below.</div>
        </div>
        <div class="subTitle" v-for="item in subTitle">
            <div class="titLabel">{{item.language}}：</div>
            <div class="titleVals"><span :class="[item.active ? 'active' : '']" v-for="(item,index) in item.list">{{ 'url-'+(index+1)
            }}</span></div>
        </div>
        <div class="videoIntroduce">
            <div class="imgShow"></div>
            <div class="videoIntro">
                <div class="videoName">{{ videoIntro.name }}</div>
                <div class="videoSei">{{ videoIntro.sei }}</div>
                <div class="videoDesc">{{ videoIntro.desc }}</div>
                <div class="videoGenre">{{ videoIntro.genre }}</div>
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
import videojs from "video.js";
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { dataGroupingToArray } from '@/utils/tools';
const $route = useRoute();
let itemId = $route.query.id;
let videoOption = ref({
    src: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
    poster: '',
})
import PlayerVideo from "@/components/PlayerVideo/index.vue";

let subTitle = ref([]);//字幕
let dubList = ref([]);//配音

let seasons = ref([]),
    chapters = ref([]),
    episodeId = 1;
const dealChapters = (seasonIdx: any) => {
    chapters.value = seasons.value[seasonIdx].list;
    chapters.value.map(item => {
        item.active = false;
    })
    chapters.value[0].active = true;
    episodeId = chapters.value[0].id;
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
let dubListTit=ref('');
const dealDub = (seasonIdx: any) => {
    dubList.value = subTitle.value[seasonIdx].list;
    dubListTit.value= subTitle.value[seasonIdx].language;
    dubList.value.map(item => {
        item.active = false;
    })
    dubList.value[0].active = true;

}
const getPlayInfo = async (episodeId) => {
    const res = await ajaxPlayersApi({ episodeId });
    let res2 = dataGroupingToArray(res, 'language');
    res2.map(item => {
        item.active = false;
    })
    res2[0].active = true;
    subTitle.value = res2;
    dealDub(0);
    console.log(res2, 'getPlay');
}
let videoIntro = ref({
    name: '小欣欣',
    sei: '2022',
    desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述',
    genre: 'xxx,xxxx,xx'
})

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

<style lang="scss">@import './index.scss';</style>