<template>
	<!-- forget password -->
	<div class="page page-current modal_forget_pass modal_base modal_form_li">
	    <v-header headTitle="页面找不到了" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>

	    <div class="content" id="iserror">
	       
	    </div>
	</div>
	<!-- ! end forget password -->

</template>
<script>
import vHeader from '../components/com/header.vue'
	export default {
		name:'page404',
		components:{vHeader}
	}
</script>

<style scoped>
	#iserror {
		background: url("../assets/img/404.jpg") no-repeat center;
		-webkit-background-size: cover;
		background-size: cover;
	}
</style>