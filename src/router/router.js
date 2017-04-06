import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Forget from '../pages/Forget'
import Forgetw from '../pages/Forgetw'
import Lottery from '../pages/Lottery'
import Game from '../pages/Game'
import Sport from '../pages/Sport'
import Live from '../pages/Live'
import Activity from '../pages/Activity'

//lottery
import LotteryMain from '../pages/lottery/main'

//user
import User from '../pages/User'
import Money from '../pages/user/Money'
import Remit from '../pages/user/Remit'
import Drawing from '../pages/user/Drawing'
import Mtransform from '../pages/user/Mtransform'
import Record from '../pages/user/Record'
import GameNews from '../pages/user/GameNews'
import Bankbind from '../pages/user/Bankbind'
import News from '../pages/user/News'

//order
import OrderRemit from '../pages/user/Order_remit'


//components
import vSide from '../components/com/side'

//404
import is404 from '../pages/page404'

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
        {path:'/', components:{
            default:Home,
            mainSide:vSide
        }},
	    {path:'/wap', name:'home', components:{
            default:Home,
            mainSide:vSide
        }},
        {path:'/wap/login', name:'login', datas:{login:true}, component:Login},
        {path:'/wap/reg', name:'reg', component:Reg},
        {path:'/wap/forget', name:'forget', component:Forget},
        {path:'/wap/forgetw', name:'forgetw', component:Forgetw},
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
        {path:'/wap/user/news', name:'news', component:News
            /*children:[
                {path:'/', name:'newshot', component:News},
                {path:'me', name:'newsme', component:NewsMe},
                {path:'history', name:'newshistory', component:NewsHistory}
            ]*/
        },
        {path:'/wap/user/gamenews', name:'gamenews', component:GameNews},

        {path:'/wap/user/orderremit', name:'orderremit', component:OrderRemit},

		{path:'*', component:is404}
	]
})


router.beforeEach((to, from, next) => {
    //$.closePanel()
    store.state.loginPage.map(function(item){
        if( to.name == item.name && !vm.$store.state.isLogin){   //路由切换包含白名单自动跳到登录页
            $.toast('您尚未登录', 500)
            next({name:'login'})
            return 
        }
    })
    next()
})

export default router