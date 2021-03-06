import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcatContainer from './components/tabbar/ShopcarContainer.vue'
import SearchCotainer from './components/tabbar/SearchContainer.vue'

var router = new VueRouter({
routes:[
    {path:'/home',component:HomeContainer},
    {path:'/search',component:SearchCotainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcatContainer}

],
linkActiveClass:'mui-active'

})
export default router