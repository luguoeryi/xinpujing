<template>
	<header class="bar bar-nav base_head">
	    <a @click="tos" :class="[lAutoClass,{'open-panel':openModalL}]" :data-panel="lDPanel" class="icon pull-left" v-if="ifShowL"></a>
	    <a @click="gos" :class="[rAutoClass,{'open-panel':openModalR}]" :data-panel="rDPanel" class="icon pull-right" v-if="ifShowR"></a>
	    <h1 class="title">{{headTitle}}</h1>
	</header>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)

	export default {
		name:'Header',
		props:['headTitle', 'lAutoClass', 'rAutoClass', 'lDPanel', 'rDPanel', 'lToName', 'rToName'],
		computed:{
			openModalL(){
				return this.lDPanel ? true : false;
			},
			openModalR(){
				return this.rDPanel ? true : false;
			},
			ifShowL(){
				return this.lAutoClass ? true : false;
			},
			ifShowR(){
				return this.rAutoClass ? true : false;
			}

		},
		methods:{
			tos(){
				if( this.lToName == 'back' ){
					this.$router.go(-1)
				}else if( this.lToName ) {
					this.$router.push({ name: this.lToName })
				}
			},
			gos(){
				if( this.rToName == 'front' ){
					this.$router.go(1)
				}else if( this.rToName ) {
					this.$router.push({ name: this.rToName })
				}
			}
		}
	}
</script>