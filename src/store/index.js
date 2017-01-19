import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    isLogin : 1,
    agent: '',
	money: '0.00',
	msg:['welcome'],
	allMsg:0,
	intr:0,
    username:'ceshi',
	serverURL:'http://www.hb10069.com/dist/data/',
	yzm:'http://www.hb10069.com/yzm.php'
}


//state.intr = location.search.indexof

var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 && xhr.status == 200 ){

		//console.log(loadState)

		if( xhr.responseText ){
			var loadState = JSON.parse(  xhr.responseText )
			if( loadState.isLogin == 1 ){
				state.isLogin = loadState.isLogin
				state.money = loadState.money
				state.username = loadState.username
			}

			if( state.msg.length ){
				state.msg = loadState.msg
			}
			state.agent = loadState.agent
			state.allMsg = loadState.num

			console.log( loadState )

			//console.log( state )
		}
		
	}
}
xhr.open('get', state.serverURL+'top.php?intr='+state.intr, false)  //同步获取
xhr.send()

/*Vue.http.post('http://127.0.0.1:1029/data/login.php').then((response) => {
	state.isLogin = response.data
	console.log(response.data);
}, (error) => {
	console.log( error );
});*/



const mutations = {
	setLogin(state, num){
		state.isLogin = num
	},
	setYzm(state){
		state.yzm = state.yzm+Math.random()
	}
}


export default new Vuex.Store({
    state,
    mutations
})

