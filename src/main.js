import 'mint-ui/lib/style.css'
import Vue from 'vue'
import app from './App.vue'
import {Header} from 'mint-ui'
import './css/mui.css'

Vue.component(Header.name, Header);


var vm=new Vue({

    el:"#app",
    render:c=>c(app)

})