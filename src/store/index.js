import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import functions from '../lib/js/function'
Vue.use(VueResource)
Vue.use(Vuex)

let normalLottery = [
	{name:'重庆时时彩', code:'cq'},
	{name:'重庆快乐十分', code:'cqsf'},
	{name:'广东快乐十分', code:'gdsf'},
	{name:'天津时时彩', code:'tj'},
	{name:'北京快乐8', code:'kl8'},
	{name:'广东11选5', code:'gd11'},
	{name:'广西十分彩', code:'gxsf'},
	{name:'天津快乐十分', code:'tjsf'},
	{name:'上海时时乐', code:'t3'},
	{name:'北京PK拾', code:'pk10'},
	{name:'六合彩', code:'lhc'},
	{name:'福彩3D', code:'d3'},
	{name:'排列3', code:'p3'}
]

let activeLottery = {name:'重庆时时彩', code:'cq'}

let lotteryData = {
    ball:{
        万定位:[
           '9.80','9.80','9.80','9.80','9.80','9.80','9.80','9.80','9.80'
        ],
        仟定位:[
            '9.80','9.80','9.80','9.80','9.80','9.80','9.80','9.80','9.80'
        ]
    },
    fenpan:'2017-01-21 10:09:00',
    kaijiang:'2017-01-21 10:10:00',
    qishu:'20170121025',
    result:['20170116023',['5','1','9','3','1']],
    zt:1
}



const state = {
    isLogin : 0,
    agent: '',
	money: '0.00',
	msg:['welcome'],
	allMsg:0,
	intr:0,
    username:'ceshi',
    night:false,
	serverURL:'http://www.hb10069.com/dist/data/',
	yzm:'http://www.hb10069.com/dist/data/yzm.php',

	//lottery
	activeLottery: activeLottery,
	normalLottery: normalLottery,

	lotteryData:lotteryData,

	jiezhiTime: '00:02:12',  //投注截止
	kaipanjiezhi: '00:00:15',   //离开盘截止时间
	timeOut: '15000',	//开奖延迟时间：毫秒
	touTimer:null,
	kaiTimer:null,

	//function
	functions:functions,

	//login -- page
	loginPage:[
		{name:'user'},
		{name:'money'},
		{name:'remit'},
		{name:'bankbind'},
		{name:'drawing'},
		{name:'mtransform'},
		{name:'record'},
		{name:'news'},
		{name:'gamenews'},
		{name:'orderremit'},
		{name:'forget'}
	]
}

const mutations = {
	setLogin(state, num){
		state.isLogin = num
	},
	setYzm(state){
		state.yzm = state.yzm+Math.random()
	},
	setLotteryType(state, type){
		state.activeLottery = type
	}  
}


export default new Vuex.Store({
    state,
    mutations
})

state.intr = functions.GetQueryString('intr')
state.night = window.localStorage.getItem('night')  == 'yes' ? true : false
//loading
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 && xhr.status == 200 ){

		if( xhr.responseText ){
			var loadState = JSON.parse(  xhr.responseText )
			if( loadState.zt == 1 ){
				state.isLogin = loadState.zt
				state.money = loadState.money
				state.username = loadState.username
			}

			if( loadState.msg.length ){
				state.msg = loadState.msg
			}
			state.agent = loadState.agent
			state.allMsg = loadState.msg.length

			console.log( loadState )

			//console.log( state )
		}
		
	}
}
xhr.open('GET', state.serverURL+'top.php?intr='+state.intr, false)  //同步获取
xhr.send()

/*Vue.http.post('http://127.0.0.1:1029/data/login.php').then((response) => {
	state.isLogin = response.data
	console.log(response.data);
}, (error) => {
	console.log( error );
});*/



