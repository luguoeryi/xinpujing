<template>
	<nav class="bar bar-tab base_footer">
	    <router-link to="/Reg" class="tab-item">
	    	 <span class="icon icons-add-user"></span>
	        <span class="tab-label">立即注册</span>
	    </router-link>	
	    <router-link to="/Login" class="tab-item">
	        <span class="icon icons-user3"></span>
	        <span class="tab-label">立即登录</span>
	    </router-link>
	    <router-link to="/forget" class="tab-item">
	        <span class="icon icons-question-circle-o"></span>
	        <span class="tab-label">忘记密码</span>
	    </router-link>
	    <a class="tab-item" href="#">
	        <span class="icon icons-chat4"></span>
	        <span class="tab-label">在线客服</span>
	    </a>
	</nav>
</template>

<script>
	export default {
		name:'Nav',
		methods:{
			toLogin (){
				this.$router.push({path:'/login'});
			}
		}
	}
</script>