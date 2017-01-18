import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    isLogin : 1,
    username:'bh100',
	money:{
		usermoney:1000
	},
	newinfo:[
		'welcome',
		'you is very good'
	]
}

const mutations = {
	setLogin(state, num){
		state.isLogin = num;
	}
}

export default new Vuex.Store({
    state,
    mutations
})
