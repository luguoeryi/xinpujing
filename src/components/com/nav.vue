<template>
	<nav class="bar bar-tab base_footer">
	    <router-link :to="{name:'reg'}" class="tab-item">
	    	 <span class="icon icons-add-user"></span>
	        <span class="tab-label">立即注册</span>
	    </router-link>	

	    <router-link :to="{name:'drawing'}" class="tab-item" v-if="isLogin">
	        <span class="icon icons-attach_money" style="font-size:1.5rem;"></span>
	        <span class="tab-label">线上取款</span>
	    </router-link>
	    <router-link :to="{name:'login'}" class="tab-item" v-else>
	        <span class="icon icons-user3"></span>
	        <span class="tab-label">立即登录</span>
	    </router-link>
		
		
	    <router-link :to="{name:'remit'}" class="tab-item" v-if="isLogin">
	        <span class="icon icons-credit-card3"></span>
	        <span class="tab-label">线上存款</span>
	    </router-link>
	    <router-link :to="{name:'forget'}" class="tab-item" v-else>
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
		},
		computed:{
            isLogin(){
                return this.$store.state.isLogin  ? true : false;
            }
        }
	}
</script>