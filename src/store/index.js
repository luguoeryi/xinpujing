import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let normalLottery = [
	'重庆时时彩',
	'重庆快乐十分',
	'广东快乐十分',
	'天津时时彩',
	'北京快乐8',
	'广东11选5',
	'广西十分彩',
	'天津快乐十分',
	'上海时时乐',
	'北京PK拾',
	'六合彩',
	'福彩3D',
	'排列3'
]

let activeLottery = '重庆时时彩'

let oPre = {qishu: '023', ball: '94629'}

let oNow = {
	qishu:'024',
    touTime:'12:43:52',
    fengTime:'12:48:56',
    kaiTime:'12:50:56',
    type:'重庆时时彩',
    ball:[
        {
          wanfa:'总和/龙虎',
          listball:[
              {
                    leixin:'单',
                    haoma:'1.98'
              },{
                    leixin:'双',
                    haoma:'1.98'
              },{
                    leixin:6,
                    haoma:'1.98'
              },{
                    leixin:5,
                    haoma:'1.98'
              },{
                    leixin:'双',
                    haoma:'1.98'
              },{
                    leixin:'单',
                    haoma:'1.98'
              },{
                    leixin:'单',
                    haoma:'1.98'
              }
          ]
        },{
          wanfa:'珠仔',
          listball:[
              {
                    leixin:'单',
                    haoma:'1.98'
              },{
                    leixin:'双',
                    haoma:'1.28'
              },{
                    leixin:3,
                    haoma:'1.98'
              },{
                    leixin:'双',
                    haoma:'1.28'
              },{
                    leixin:'单',
                    haoma:'1.98'
              },{
                    leixin:'双',
                    haoma:'1.28'
              }
          ]
        }

    ]
}



const state = {
    isLogin : 1,
    agent: '',
	money: '0.00',
	msg:['welcome'],
	allMsg:0,
	intr:0,
    username:'ceshi',
	serverURL:'http://www.hb10069.com/dist/data/',
	yzm:'http://www.hb10069.com/yzm.php',

	//lottery
	activeLottery: activeLottery,
	normalLottery: normalLottery,
	pre: oPre,
	now: oNow,
	jiezhiTime: '00:02:12'
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

//state.intr = location.search.indexof


//loading
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 && xhr.status == 200 ){

		if( xhr.responseText ){
			var loadState = JSON.parse(  xhr.responseText )
			if( loadState.isLogin == 1 ){
				state.isLogin = loadState.isLogin
				state.money = loadState.money
				state.username = loadState.username
			}

			if( loadState.msg.length ){
				state.msg = loadState.msg
			}
			state.agent = loadState.agent
			state.allMsg = loadState.num

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




