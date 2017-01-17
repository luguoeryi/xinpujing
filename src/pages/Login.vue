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
	                                <input type="text">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">密码</div>
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
	        </div>
	        <div class="content-padded">
	            <a class="button button-big button-danger button-fill" href="#">登录</a>
	            <p class="link_black">
	            	<router-link to="/Reg" class="pull-left">注册账号</router-link>
	            	<router-link to="/forget" class="pull-right">忘记密码</router-link>
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
		components:{vHeader}
	}
</script>