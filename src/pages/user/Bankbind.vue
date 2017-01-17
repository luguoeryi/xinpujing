<template>
	<!-- bindbank -->
	<div class="page page-current modal_bindbank modal_base modal_form_li">
	    <header class="bar bar-nav base_head">
	        <a class="icon icon-up pull-left close-popup" data-popup=".modal_forget_pass" href="#"></a>
	        <h3 class="title">绑定银行卡</h3>
	    </header>
	    <div class="content">
	        <div class="list-block" style="margin-top:0;margin-bottom:10px;">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">真实姓名</div>
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
	                                <input type="number">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">银行类别</div>
	                            <div class="item-input">
	                                <input type="text" class="bank_card">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">银行账号</div>
	                            <div class="item-input">
	                                <input type="number">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">省</div>
	                            <div class="item-input">
	                                <input type="text">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">市</div>
	                            <div class="item-input">
	                                <input type="text">
	                            </div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <div class="content-padded">
	            <a class="button button-big button-danger button-fill" href="#">确定</a>
	        </div>
	    </div>
	</div>
	<!-- ! end bindbank -->

</template>

<script>
	export default {
		name:'Bankbind'
	}
</script>