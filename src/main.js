import 'mint-ui/lib/style.css'
import Vue from 'vue'
import app from './App.vue'
import {Header} from 'mint-ui'
import './css/mui.css'
import './css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.component(Header.name, Header);
import router from './router.js'
import { Swipe, SwipeItem } from 'mint-ui';

import VueRources from 'vue-resource'
Vue.use(VueRources)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm=new Vue({

    el:"#app",
    render:c=>c(app),
    router

})