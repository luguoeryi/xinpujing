<template>
	<div class="display-box lo_nav">
		<div :data-popup="lToPopup" :class="{'open-popup':openModalL}" class="box-flex-6">{{ headTitle }}<span class="icon icon-down"></span></div>
		<div :data-popup="rToPopup" :class="{'open-popup':openModalR}" class="box-flex-6">整合<span class="icon icon-down"></span></div>				
	</div>
</template>

<script>
	export default {
		name:'lotterynav',
		props:['headTitle','lToPopup','rToPopup'],
		computed:{
			openModalL(){
				return this.lToPopup ? true : false;
			},
			openModalR(){
				return this.rToPopup ? true : false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/sass/var", "../../assets/sass/mixin";
	.lo_nav {
		text-align: center;
		color: $fff;
		background: $base_top_bg_s;
		font-size: 0.8rem;
		div[class*=box]{
    		padding: 0.5rem 0;
    		span {
    			display: inline-block;
    			font-size: 0.5em;
    			margin-left: 0.5em;
    		}
    		&:nth-of-type(2){
    			border-left: 1px solid $base_top_bg;
    		}
		}
	}
	.theme-dark .lo_nav{ background: #131313; }
	.theme-dark .lo_nav div:nth-of-type(2){ border-color: transparent; }
</style>