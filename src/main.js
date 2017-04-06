// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('!style-loader!css-loader!sass-loader!./lib/css/sm-extend.min.css')
require("!style-loader!css-loader!sass-loader!./assets/sass/common.scss")

require('./lib/zepto/zepto.min')
require('./lib/js/sm.min')

import Vue from 'vue'
import store from './store/index'
import router from './router/router'


/* eslint-disable no-new */
const vm = new Vue({
    router,
    store,
    template: `
    	<article class="page-group">
    		<transition :name="transitionName" mode="in-out">
                <router-view :class="$store.state.night | _night"></router-view>
    		</transition>
            <router-view name="mainSide"></router-view>
    	</article>
    `,
    data: {
        transitionName: 'fadeIn'
    },     
    watch: {
        '$route' (to, from) {
            var isClose = $.closePanel()
            //console.log(isClose)
            if( isClose == undefined ){
                this.transitionName = ''
            }else {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth > fromDepth ? 'fadeIn' : 'fadeOut'
            }
        } 
    }, 
    beforeCreate (){
        if( this.$store.state.isLogin != 1 ){
          //router.push({path:'/wap/login'});
        }
    },
    filters:{
        _night(val){
            if( val ){   //夜间模式   --  日间模式
                $('body').addClass('theme-dark')
                window.localStorage.setItem("night", 'yes') 
            }else {
                $('body').removeClass('theme-dark') 
                window.localStorage.removeItem("night")
            }
            return 
        }
    }
}).$mount('#app')

window.vm = vm;
