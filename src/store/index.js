import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    isLogin : 0,
    username:'bh100',
	money:{
		usermoney:1000
	},
	newinfo:[
		'welcome',
		'you is very good'
	]
}

var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
	if( xhr.readyState == 4 && xhr.status == 200 ){
		state.isLogin = xhr.responseText
		console.log(xhr.responseText);
	}
}
xhr.open('post', 'http://127.0.0.1:1029/data/login.php', false)  //同步获取
xhr.send()

/*Vue.http.post('http://127.0.0.1:1029/data/login.php').then((response) => {
	state.isLogin = response.data
	console.log(response.data);
}, (error) => {
	console.log( error );
});*/


const mutations = {
	setLogin(state, num){
		state.isLogin = num;
	}
}


export default new Vuex.Store({
    state,
    mutations
})

