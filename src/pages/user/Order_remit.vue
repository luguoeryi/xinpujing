<template>
	<!-- Deposit information -->
	<div class="page page-current modal_dp_informaction modal_base modal_form_li">
	    <header class="bar bar-nav base_head">
	        <a class="icon icon-up pull-left close-popup"></a>
	        <a class="icon icons-home2 pull-right" href="#"></a>
	        <h3 class="title">存款信息</h3>
	    </header>
	    <div class="content">

	        <div class="content-block-title">您的存款申请已成功提交!以下是您的存款资料，请妥善保存。</div>
	        <div class="list-block readonly_wrap">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">订单号</div>
	                            <div class="item-input"><input type="text" value="1511112115" readonly></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">存入金额</div>
	                            <div class="item-input"><input type="text" value="11000" readonly></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">存入日期</div>
	                            <div class="item-input"><input type="text" value="2017-01-11" readonly></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">存款人姓名</div>
	                            <div class="item-input"><input type="text" value="周恩来" readonly></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">存款方式</div>
	                            <div class="item-input"><input type="text" value="网银转账" readonly></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">您所使用的银行</div>
	                            <div class="item-input"><input type="text" value="中国农业银行" readonly></div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">存入的银行</div>
	                            <div class="item-input"><input type="text" value="微信支付" readonly></div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <div class="content-padded">
	            <p><a href="#" class="button button-big button-fill button-danger">离开本页</a></p>
	        </div>
	    </div>
	</div>
	<!-- ! end Deposit information -->

</template>

<script>
	export default {
		name:'Order_remit'
	}
</script>