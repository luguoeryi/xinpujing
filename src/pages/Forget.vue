<template>
	<!-- forget password -->
	<div class="page page-current modal_forget_pass modal_base modal_form_li">
	    <v-header headTitle="修改密码" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>

	    <div class="content">
	        <div class="list-block" style="margin-top:0;margin-bottom:10px;">
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
	        </div>
	        <div class="content-padded">
	            <a class="button button-big button-danger button-fill" href="#">登录</a>
	        </div>
	    </div>
	</div>
	<!-- ! end forget password -->

</template>
<script>
import vHeader from '../components/com/header.vue'
	export default {
		name:'Forget',
		components:{vHeader}
	}
</script>