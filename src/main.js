// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('!style-loader!css-loader!sass-loader!./lib/css/sm-extend.min.css')
require("!style-loader!css-loader!sass-loader!./assets/sass/common.scss")

require('./lib/zepto/zepto.min')
require('./lib/js/sm.min')

//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Forget from './pages/Forget'
import Lottery from './pages/Lottery'
import Game from './pages/Game'
import Sport from './pages/Sport'
import Live from './pages/Live'
import Activity from './pages/Activity'

//lottery
import LotteryMain from './pages/lottery/main'

//user
import User from './pages/User'
import Money from './pages/user/Money'
import Remit from './pages/user/Remit'
import Drawing from './pages/user/Drawing'
import Mtransform from './pages/user/Mtransform'
import Record from './pages/user/Record'
import News from './pages/user/News'
import GameNews from './pages/user/GameNews'
import Bankbind from './pages/user/Bankbind'

//order
import OrderRemit from './pages/user/Order_remit'


//components
import vSide from './components/com/side'

//404
import is404 from './components/Hello'

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	    {path:'/wap', name:'home', components:{
            default:Home,
            mainSide:vSide
        }},
        {path:'/wap/login', name:'login', component:Login},
        {path:'/wap/reg', name:'reg', component:Reg},
        {path:'/wap/forget', name:'forget', component:Forget},
        {path:'/wap/lottery', name:'lottery', components:{
            default:Lottery,
            mainSide:vSide
        }},
        {path:'/wap/game', name:'game', components:{
            default:Game,
            mainSide:vSide
        }},
        {path:'/wap/sport', name:'sport', components:{
            default:Sport,
            mainSide:vSide
        }},
        {path:'/wap/live', name:'live', components:{
            default:Live,
            mainSide:vSide
        }},
        {path:'/wap/activity', name:'activity', components:{
            default:Activity,
            mainSide:vSide
        }},

        {path:'/wap/lotterymain', name:'lotterym', components:{
            default:LotteryMain,
            mainSide:vSide
        }},

        {path:'/wap/user', name:'user', component:User},
        {path:'/wap/user/money', name:'money', component:Money},
        {path:'/wap/user/remit', name:'remit', component:Remit},
        {path:'/wap/user/bankbind', name:'bankbind', component:Bankbind},
        {path:'/wap/user/drawing', name:'drawing', component:Drawing},
        {path:'/wap/user/mtransform', name:'mtransform', component:Mtransform},
        {path:'/wap/user/record', name:'record', component:Record},
        {path:'/wap/user/news', name:'news', component:News},
        {path:'/wap/user/gamenews', name:'gamenews', component:GameNews},

        {path:'/wap/user/orderremit', name:'orderremit', component:OrderRemit},

		{path:'*', component:is404}
	]
})

/*router.beforeEach((to, from, next) => {
    console.log({
        'to':to, 'from':from, 'next':next
    });
    next();
})*/

router.afterEach(route => {
    $.closePanel()
})


/* eslint-disable no-new */
const vm = new Vue({
    router,
    store,
    template: `
    	<article class="page-group">
    		<transition name="fade" mode="out-in">
                <router-view></router-view>
    		</transition>
            <router-view name="mainSide"></router-view>
    	</article>
    `,
    beforeCreate (){
        //console.log(router)
        if( this.$store.state.isLogin != 1 ){
          router.push({path:'/wap/login'});
        }
        console.log( this.$store.state.isLogin )
    }
}).$mount('#app')

window.vm = vm;
