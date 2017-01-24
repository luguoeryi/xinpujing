<template>
	<!-- login -->
	<div class="page page-current modal_base modal_form_li" id="page_login">

	   <v-header headTitle="登录" lAutoClass="icon-left" lToName="back"></v-header>

	    <div class="content">
	        <div class="list-block" style="margin-top:0;margin-bottom:10px;">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">账号</div>
	                            <div class="item-input">
	                                <input type="text" v-model.trim="username">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">密码</div>
	                            <div class="item-input">
	                                <input type="password" v-model.trim="userpass">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">验证码</div>
	                            <div class="item-input yzm_wrap">
	                                <input type="number" placeholder="请点击" pattern="\d{4}" v-model="yzm" @focus="qieYzm" >
	                                <img @click="qieYzm" class="imgUrl" src="../assets/img/icon/validCode.jpg" >
	                            </div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <div class="content-padded">
	            <a class="button button-big button-danger button-fill" href="#" @click="submit" >登录</a>
	            <p class="link_black">
	            	<router-link :to="{name:'reg'}" class="pull-left">注册账号</router-link>
	            	<router-link :to="{name:'forgetw'}" class="pull-right">忘记密码</router-link>
	            </p>
	        </div>
	    </div>
	</div>
	<!-- ! end login -->
</template>

<script>
import vHeader from '../components/com/header.vue'


	export default {
		name:'Login',
		components:{vHeader},
		data(){
			return {
				username: '',
				userpass: '',
				yzm: ''
			}
		},
		methods:{
			qieYzm(){
				document.getElementsByClassName('imgUrl')[0].src = this.$store.state.yzm+'?'+Math.random()
			},
			submit(){

				if( this.username.length && this.userpass.length  && this.userpass.length ){

					var formData = new FormData()
					formData.append('name', this.username)
					formData.append('pwd', this.userpass)
					formData.append('yzm', this.yzm)

					this.$http.post(this.$store.state.serverURL+'loginDao.php', formData).then((response) => {
						
						var datas = JSON.parse( response.data )
						console.log( datas )

						if( datas.zt == 1 ){
							$.toast('登录成功', 500)
							this.$store.state.isLogin = datas.zt 
							this.$store.state.money = datas.money
							this.$store.state.username = datas.username
							this.$router.push({name:'home'})

						}else {
							$.toast(datas.info, 500)
						}

					}, (error) => {

						$.toast('服务器错误: status: '+error.status, 500)

					});

				}else {

					$.toast('请完善登录信息', 500)

				}
				

			}
		}
	}
</script>