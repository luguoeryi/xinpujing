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
		                            <div class="item-input"><input type="text" v-model="agentname"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-email base_red">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">账号</div>
		                            <div class="item-input"><input type="text" placeholder="6-12位英文字母和数字的组合" maxlength="12" v-model="username"></div>
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
		                            <div class="item-input"><input type="password" placeholder="须为6~12码英文或数字夹杂且符合0~9或a~z字元" maxlength="12" v-model="userpassA"></div>
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
		                            <div class="item-input"><input type="password" placeholder="同密码一致" maxlength="12" v-model="userpassB"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-email base_red">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">取款密码</div>
		                            <div class="item-input"><input type="password" pattern="\d{4}" placeholder="请输入4位取款密码，纯数字" maxlength="12" v-model="moneypass"></div>
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
		                            <div class="item-input"><input type="text" placeholder="请输入真实姓名方便存取款" v-model="realname"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">手机</div>
		                            <div class="item-input"><input type="number" v-model="tel"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-name">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">邮箱</div>
		                            <div class="item-input"><input type="text" v-model="email"></div>
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
		                            <div class="item-input yzm_wrap"><input type="number" placeholder="请点击" pattern="\d{4}" v-model="yzm"><img src="../assets/img/icon/validCode.jpg" alt=""></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <label class="label-checkbox item-content">
		                            <input type="checkbox" name="my-radio" v-model="agree">
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
		            <p><a href="#" class="button button-big button-fill button-danger" @click="submit">确定</a></p>
		        </div>
		    </div>
		</div>
		<!-- ! end reg -->
		
		<ageement></ageement>

	</div>
	

</template>

<script>
	import ageement from '../components/ageement'

	import Vue from 'vue'
	import vueResource from 'vue-resource'
	Vue.use(vueResource)

	export default {
		name:'Reg',
		components:{ageement},
		data(){
			return {
				agentname: '',
				username: '',
				userpassA: '',
				userpassB: '',
				moneypass: '',
				realname: '',
				tel: '',
				email: '',
				yzm: '',
				agree: false
			}
		},
		methods:{
			submit(){				
				console.group('user')
				console.log(this.agentname)
				console.log(this.username)
				console.log(this.userpassA)
				console.log(this.userpassB)
				console.log(this.moneypass)
				console.log(this.realname)
				console.log(this.tel)
				console.log(this.email)
				console.log(this.yzm)
				console.log(this.agree)
				console.groupEnd('user')

				var formData = new FormData()
				formData.append('agent_name', this.agentname)
				formData.append('username', this.username)
				formData.append('password', this.userpassA)
				formData.append('pwd1', this.yzm.toString().substring(0,1))
				formData.append('pwd2', this.yzm.toString().substring(1,2))
				formData.append('pwd3', this.yzm.toString().substring(2,3))
				formData.append('pwd4', this.yzm.toString().substring(3,4))
				formData.append('real_name', this.realname)
				formData.append('tel', this.tel)
				formData.append('email', this.email)

				if( this.agree ){
					this.$http.get('/someUrl', formData).then((response) => {
						
						console.log('注册成功')

						this.$store.state.isLogin = 1

						this.$router.push({name:'home'})

					}, (error) => {
						alert('注册失败'+error);
					});
				}

			}
		}
	}
</script>