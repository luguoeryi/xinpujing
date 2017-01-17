<template>
	<!-- drawing -->
	<div class="page page-current modal_drawing modal_base modal_form_li modal_user">
	    
	     <v-header headTitle="提款" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>

	    <div class="content">

	        <div class="list-block">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">账户余额</div>
	                            <div class="item-input"><input type="text" value="0" readonly ></div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <div class="content-block-title">绑定的账户</div>
	        <div class="list-block">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title">中国农业银行</div>
	                        </div>
	                    </div>
	                    <div class="card">
	                        <div class="card-content-inner">
	                            <p>龚某某</p>
	                            <p>62170021515154515445</p>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <div class="content-block-title"></div>

	        <div class="list-block">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">取款金额</div>
	                            <div class="item-input"><input type="text"value="0"></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">取款密码</div>
	                            <div class="item-input"><input type="number"></div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <div class="content-block-title">
	            <small>取款额度范围：1.00 - 300,000.00</small>
	        </div>

	        <div class="content-padded">
	            <p><a href="#" class="button button-big button-fill button-danger">提交</a></p>
	        </div>
	    </div>
	</div>
	<!-- ! end drawing -->

</template>

<script>
import vHeader from '../../components/com/header.vue'
	export default {
		name:'Drawing',
		components:{vHeader}
	}
</script>