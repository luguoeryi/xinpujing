<template>
	<!-- forget password -->
	<div class="page page-current modal_forget_pass modal_base modal_form_li">
	    <v-header headTitle="修改密码" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>

	    <div class="content">
	       <!--  <div class="list-block" style="margin-top:0;margin-bottom:10px;">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">会员账号</div>
	                            <div class="item-input">
	                                <input type="text">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">取款密码</div>
	                            <div class="item-input">
	                                <input type="text">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">验证码</div>
	                            <div class="item-input yzm_wrap">
	                                <input type="number" placeholder="请点击" pattern="\d{4}">
	                                <img src="../assets/img/icon/validCode.jpg" alt="">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div> -->

	         <div class="list-block" style="margin-top:0;margin-bottom:10px;">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">原密码</div>
	                            <div class="item-input">
	                                <input type="password" v-model="oddPass">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">新密码</div>
	                            <div class="item-input">
	                                <input type="password" v-model="newPass">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">确认密码</div>
	                            <div class="item-input">
	                                <input type="password" v-model="newPassto">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">验证码</div>
	                            <div class="item-input yzm_wrap">
	                                <input type="number" placeholder="请点击" pattern="\d{4}" v-model="yzm">
	                                <img src="../assets/img/icon/validCode.jpg" >
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
				oddPass:'',
				newPass:'',
				newPassto: '',
				yzm: ''
			}
		},
		methods:{
			resetPass(){
				console.log(1212212)
				//if( this.oddPass.length &&  this.newPass.length && this.newPassto.length && this.yzm.length ){

					var formData = new FormData()
					formData.append('opwd', this.oddPass)
					formData.append('npwd', this.newPass)
					formData.append('yzm', this.yzm)

					this.$http.post(this.$store.state.serverURL+'pwd.php', formData).then((response) => {
				
						if( response.data ){
							var datas = JSON.parse( response.data )
							console.log( datas )

							if( datas.isLogin == 1 ){

								if( datas.check == 1 ){
									$.alert('修改成功，请重新登录',function(){
										vm.$store.state.isLogin = 0
										vm.$router.push({name:'login'})
									})
								}else {
									$.alert(datas.info)
								}
							}else {
								$.alert('您已退出，请重新登录',function(){
									vm.$store.state.isLogin = 0
									vm.$router.push({name:'login'})
								})
							}

						}

					}, (error) => {
						$.alert('服务器错误'+error.status);
					});

				//}

			}
		}
	}
</script>