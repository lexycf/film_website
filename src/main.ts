import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import 'swiper/css';
import "video.js/dist/video-js.css";
import videojs from "video.js";

createApp(App)
    .use(router)
    .mount('#app')
