<template>
	<div>
		<!-- reg -->
		<div class="page page-current modal_reg modal_base modal_form_li" id="page_reg">

		    <header class="bar bar-nav base_head">
		        <router-link :to="{name:'home'}" class="icon icon-left pull-left"></router-link>
		        <router-link :to="{name:'login'}" class="button button-link pull-right">登录</router-link>
		        <h3 class="title">新葡京电玩城</h3>
		    </header>

		    <div class="content">
		        <div class="content-block-title">会员注册</div>

		        <div class="list-block">
		            <ul>
		                <!-- Text inputs -->
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name"></i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">介绍人</div>
		                            <div class="item-input"><input type="text" :readonly="readonly" v-model="agentname.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-email base_red">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">账号</div>
		                            <div class="item-input"><input type="text" placeholder="6-12位英文字母和数字的组合" maxlength="12" v-model="username.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media">
		                            <i class="icon icon-form-password base_red">*</i>
		                        </div>
		                        <div class="item-inner">
		                            <div class="item-title label">密码</div>
		                            <div class="item-input"><input type="password" placeholder="须为6~12码英文或数字夹杂且符合0~9或a~z字元" maxlength="12" v-model="userpassA.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media">
		                            <i class="icon icon-form-password base_red">*</i>
		                        </div>
		                        <div class="item-inner">
		                            <div class="item-title label">确认密码</div>
		                            <div class="item-input"><input type="password" placeholder="同密码一致" maxlength="12" v-model="userpassB.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-email base_red">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">取款密码</div>
		                            <div class="item-input"><input type="password" pattern="\d{4}" placeholder="请输入4位取款密码，纯数字" maxlength="12" v-model="moneypass.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name"></i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">货币</div>
		                            <div class="item-input">
		                                <select name="money">
		                                    <option value="人民币">人民币</option>
		                                </select>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		            </ul>
		        </div>

		        <div class="content-block-title">会员资料</div>

		        <div class="list-block">
		            <ul>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name base_red">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">真实姓名</div>
		                            <div class="item-input"><input type="text" placeholder="请输入真实姓名方便存取款" v-model="realname.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">手机</div>
		                            <div class="item-input"><input type="number" v-model="tel.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">QQ</div>
		                            <div class="item-input"><input type="number" v-model="qq.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">邮箱</div>
		                            <div class="item-input"><input type="text" v-model="email.val"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media">
		                            <i class="icon icon-form-password base_red">*</i>
		                        </div>
		                        <div class="item-inner">
		                            <div class="item-title label">验证码</div>
		                            <div class="item-input yzm_wrap"><input type="number" @focus="qieYzm" placeholder="请点击" pattern="\d{4}" v-model="yzm.val"><img @touchend="qieYzm" class="imgUrl" src="../assets/img/icon/validCode.jpg" ></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <label class="label-checkbox item-content" @touchend="agree_fn">
		                            <input type="checkbox" v-model="agree.val">
		                            <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
		                            <div class="item-inner">
		                                <small>我已届满合法博彩年龄，且同意各项开户条约。</small>
		                            </div>
		                        </label>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <a class="f_second open-popup" data-popup=".modal_ageement" href="#">查看协议</a>
		                    </div>
		                </li>
		            </ul>
		        </div>
		        <div class="content-padded">
					<small class="text-right">温馨提示：标了<strong class="base_red">*</strong>为必填</small>	
		            <p><a href="#" class="button button-big button-fill button-danger" @touchend="submit">确定</a></p>
		        </div>
		    </div>
		</div>
		<!-- ! end reg -->
		
		<ageement></ageement>

	</div>
	

</template>

<script>
	import ageement from '../components/ageement'

	export default {
		name:'Reg',
		components:{ageement},
		data(){
			return {
				yzmURL:'../assets/img/icon/validCode.jpg',
				readonly: false,
				toReg: false,
				agentname: {
					val: ''
				},
				username: {
					val: '',
					required: true,
					name: '账号'
				},
				userpassA: {
					val: '',
					required: true,
					name: '密码'
				},
				userpassB: {
					val: '',
					required: true,
					name: '确认密码'
				},
				moneypass: {
					val: '',
					required: true,
					name: '取款密码'
				},
				realname: {
					val: '',
					required: true,
					name: '真实姓名'
				},
				tel: {
					val: ''
				},
				email: {
					val: ''
				},
				qq: {
					val: ''
				},
				yzm: {
					val: '',
					required: true,
					name: '验证码'
				},
				agree: {
					val: true,
					required: true,
					name: '用户协议'
				}
			}
		},
		mounted(){
			let _agent = this.$store.state.agent
			if( _agent ){
				this.agentname.val = _agent
				this.readonly = true
			}
		},
		methods:{
			agree_fn(){
				//this.agree.val = !this.agree.val
				console.log( this.agree.val )
			},
			qieYzm(){
				document.getElementsByClassName('imgUrl')[0].src = this.$store.state.yzm+'?'+Math.random()
			},
			submit(){
				console.log( this.$http.post )

				this.toReg = true
				var formData = new FormData()
				formData.append('agent_name', this.agentname.val)
				formData.append('username', this.username.val)
				formData.append('password', this.userpassA.val)
				formData.append('pwd1', this.moneypass.val.toString().charAt(0))
				formData.append('pwd2', this.moneypass.val.toString().charAt(1))
				formData.append('pwd3', this.moneypass.val.toString().charAt(2))
				formData.append('pwd4', this.moneypass.val.toString().charAt(3))
				formData.append('real_name', this.realname.val)
				formData.append('tel', this.tel.val)
				formData.append('email', this.email.val)
				formData.append('qq', this.qq.val)
				formData.append('yzm', this.yzm.val)

				for( var attr in this.$data ){
					if( this.$data[attr]['required'] && !this.$data[attr]['val'] ){
						$.toast('请确认'+this.$data[attr]['name'], 1000)
						console.log( this.$data[attr]['val'] )
						this.toReg = false
						break;
					}
				}

				if( this.toReg ){

					if( !this.agree.val ){ $.toast('请同意开户协议', 1000); return false; }

					this.$http.post(this.$store.state.serverURL+'save.php', formData).then((response) => {
						
						var datas = JSON.parse( response.data )
						console.log( datas )

						if( datas.zt == 1 ){
							$.toast('注册成功')
							this.$store.state.isLogin = datas.zt 
							this.$store.state.money = datas.money
							this.$store.state.username = datas.username
							this.$router.push({name:'home'})
							this.$store.state.isLogin = 1

						}else {
							$.alert(datas.info)
						}


					}, (error) => {

						$.alert('服务器错误: status: '+error.status)

					});
				}

			}
		}
	}
</script>