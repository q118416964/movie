import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'lib-flexible'

import {Button} from 'vant';
import 'vant/lib/index.css';

import { Search } from 'vant';

Vue.use(Search);

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
 
Vue.use(VideoPlayer)
import hls from 'videojs-contrib-hls'
Vue.use(hls)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(Button);

