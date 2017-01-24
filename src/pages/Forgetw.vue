<template>
	<!-- forget password -->
	<div class="page page-current modal_forget_pass modal_base modal_form_li">
	    <v-header headTitle="忘记密码" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>

	    <div class="content">
	        <div class="list-block" style="margin-top:0;margin-bottom:10px;">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">会员账号</div>
	                            <div class="item-input">
	                                <input type="text" v-model.trim="username">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">真实姓名</div>
	                            <div class="item-input">
	                                <input type="text" v-model.trim="realname">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">取款密码</div>
	                            <div class="item-input">
	                                <input type="password" v-model.trim="moneypass">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">验证码</div>
	                            <div class="item-input yzm_wrap">
	                                <input type="number" placeholder="请点击" pattern="\d{4}" v-model="yzm" @focus="qieYzm">
	                                <img class="imgUrl" @click="qieYzm" src="../assets/img/icon/validCode.jpg" alt="">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <div class="content-padded">
	            <a class="button button-big button-danger button-fill" href="#" @click="resetPass">确认</a>
	        </div>
	    </div>
	</div>
	<!-- ! end forget password -->

</template>
<script>
import vHeader from '../components/com/header.vue'
	export default {
		name:'Forget',
		components:{vHeader},
		data(){
			return {
				username:'',
				realname:'',
				moneypass:'',
				yzm: ''
			}
		},
		methods:{
			qieYzm(){
				document.getElementsByClassName('imgUrl')[0].src = this.$store.state.yzm+'?'+Math.random()
			},
			resetPass(){
				if( this.username.length &&  this.realname.length && this.moneypass.length && this.yzm ){


					var formData = new FormData()
					formData.append('username', this.username)
					formData.append('realname', this.realname)
					formData.append('pwd1', this.moneypass.toString().charAt(0))
					formData.append('pwd2', this.moneypass.toString().charAt(1))
					formData.append('pwd3', this.moneypass.toString().charAt(2))
					formData.append('pwd4', this.moneypass.toString().charAt(3))
					formData.append('yzm', this.yzm)
					
					this.$http.post(this.$store.state.serverURL+'forget.php', formData).then((response) => {
				
						if( response.data ){

							var datas = JSON.parse( response.data )
							console.log( datas )

							/*
								check: 1    表示后台密码重置成功
								zt: 1     表示已为用户自动登录 
								pwd: 0000   为返回的重置密码
							*/

							if( datas.check == 1 && datas.zt==1 ){

								$.alert('已将您的密码重置为<b class="base_red">'+datas.pwd+'</b>请前往会员中心修改密码', '信息匹配成功', function(){
									vm.$store.state.isLogin = 1
									vm.$router.push({name:'forget'})
								})

							}else {

								//如果失败只需要返回 check=0 即可
								$.toast('信息匹配失败', 500)

							}

						}

					}, (error) => {

						$.toast('服务器错误: status: '+error.status, 500)

					});

				}else {
					$.toast('请先完善以上信息', 500)
				}

			}
		}
	}
</script>