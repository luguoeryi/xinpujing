<template>
	<!-- Recharge -->
	<div class="page page-current modal_remit modal_base base_tabs modal_form_li modal_user">
	    
	     <v-header headTitle="充值" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>

	    <div class="content">
	        <div class="buttons-tab">
	            <a href="#bank_online" class="tab-link button active">线上存款</a>
	            <a href="#bank_weixin" class="tab-link button">微信支付</a>
	            <a href="#bank_zhifubao" class="tab-link button">支付宝支付</a>
	            <a href="#bankIs_remit" class="tab-link button">线下汇款</a>
	        </div>

	        <div class="tabs">

	            <div class="tab active" id="bank_online">
	                <div class="content-block-title">填写付款人资料</div>
	                <div class="list-block">
	                    <ul>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">会员账号</div>
	                                    <div class="item-input"><input type="text" class="text-right" readonly value="vh0001" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">存款金额</div>
	                                    <div class="item-input"><input type="text" class="text-right" placeholder="0" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content item-link">
	                                <div class="item-inner">
	                                    <div class="item-title label">支付银行</div>
	                                    <div class="item-input"><input type="text" class="text-right bank_card" placeholder="上海农商银行" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">验证码</div>
	                                    <div class="item-input yzm_wrap">
	                                        <input type="number" placeholder="请点击">
	                                        <img src="../../assets/img/icon/validCode.jpg" alt="" >
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	                <div class="content-padded">
	                    <a class="button button-big button-fill button-danger" href="#">确认</a>
	                </div>
	            </div>

	            <div class="tab" id="bank_weixin">
	                <div class="content-block-title">填写付款人资料</div>
	                <div class="list-block">
	                    <ul>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">会员账号</div>
	                                    <div class="item-input"><input type="text" class="text-right" readonly value="vh0001" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">存款金额</div>
	                                    <div class="item-input"><input type="text" class="text-right" placeholder="0" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">支付银行</div>
	                                    <div class="item-input"><input type="text" class="text-right" readonly value="微信客户端支付" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">验证码</div>
	                                    <div class="item-input yzm_wrap">
	                                        <input type="number" placeholder="请点击">
	                                        <img src="../../assets/img/icon/validCode.jpg" alt="" >
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	                <div class="content-padded">
	                    <a class="button button-big button-fill button-danger" href="#">确认</a>
	                </div>
	            </div>

	            <div class="tab" id="bank_zhifubao">
	                <div class="content-block-title">填写付款人资料</div>
	                <div class="list-block">
	                    <ul>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">会员账号</div>
	                                    <div class="item-input"><input type="text" class="text-right" readonly value="vh0001" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">存款金额</div>
	                                    <div class="item-input"><input type="text" class="text-right" placeholder="0" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">支付银行</div>
	                                    <div class="item-input"><input type="text" class="text-right" readonly value="支付宝客户端支付" ></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">验证码</div>
	                                    <div class="item-input yzm_wrap">
	                                        <input type="number" placeholder="请点击">
	                                        <img src="../../assets/img/icon/validCode.jpg" alt="" >
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	                <div class="content-padded">
	                    <a class="button button-big button-fill button-danger" href="#">确认</a>
	                </div>
	            </div>

	            <div class="tab" id="bankIs_remit">
	                <div class="content-block-title">您所使用的银行卡</div>
	                <div class="list-block">
	                    <ul>
	                        <li>
	                            <div class="item-content item-link">
	                                <div class="item-inner">
	                                    <div class="item-title label">银行卡</div>
	                                    <div class="item-input"><input type="text" placeholder="请选择汇款银行" class="text-right bank_card"></div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>

	                <div class="content-block-title">转入银行资料</div>
	                <div class="list-block">
	                    <ul>
	                        <li>
	                            <div class="item-content item-link bank-s">
	                                <div class="item-inner">
	                                    <div class="item-title">请选择您要转入的银行账号</div>
	                                </div>
	                            </div>
	                            <div class="card" id="bank-urls">
	                                <!-- <div class="card-content-inner">
	                                    <p>所属银行：中国工商银行</p>
	                                    <p>卡号： 190105360454554500803379</p>
	                                    <p>收款名称： 龚某某</p>
	                                    <p>开户网点：长沙体育新城支行</p>
	                                </div> -->
	                            </div>
	                        </li>
	                    </ul>
	                </div>

	                <div class="content-block-title">填写您的转账资料</div>

	                <div class="list-block">
	                    <ul>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">订单号</div>
	                                    <div class="item-input"><input type="text" class="text-right" readonly value="12121221212"></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">存入金额</div>
	                                    <div class="item-input"><input class="text-right" placeholder="0" type="number"></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">存入日期</div>
	                                    <div class="item-input"><input type="text" class="text-right deposit_date"></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">存款人姓名</div>
	                                    <div class="item-input"><input class="text-right" placeholder="请填写您的真实姓名" type="text"></div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-inner">
	                                    <div class="item-title label">验证码</div>
	                                    <div class="item-input yzm_wrap">
	                                        <input type="number" placeholder="请点击">
	                                        <img src="../../assets/img/icon/validCode.jpg" alt="" >
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>

	                <div class="content-block-title base_red">
	                    <small>注：请您根据上述账号完成存款后，再提交申请！</small>
	                </div>

	                <div class="content-padded">
	                    <a href="#" class="button button-big button-fill button-danger">提交申请</a>
	                </div>
	            </div>

	        </div>


	        <div class="content-padded wrap_child_color">
	            <h4 class="m0">温馨提醒：</h4>
	            <span>标记有<strong class="base_red">*</strong>均为必填项目，请认真填写。</span>
	            <span>单笔最低存款金额1.00以上。</span>
	            <span>单笔最高存款金额5000.00元以下。</span>
	        </div>

	    </div>
	</div>
	<!-- ! end Recharge -->

</template>

<script>
import vHeader from '../../components/com/header.vue'
	export default {
		name:'Remit',
		components:{vHeader},
		mounted(){
			RemitFn()
		}
	}

	function RemitFn(){
	 $(window).ready(function(){
        //$.popup('.modal_remit');

        $(document).on('click','.bank-s', function () {
	        $.modal({
	          title:  '<div class="buttons-row">'+
	                    '<a href="#bank-u1" class="button active tab-link">账号1</a>'+
	                    '<a href="#bank-u2" class="button tab-link">账号2</a>'+
	                  '</div>',
	          text: '<div class="tabs">\
	                  <div class="tab active" id="bank-u1">\
	                      <p>所属银行：中国工商银行</p>\
	                      <p>卡号： 190105360454554500803379</p>\
	                      <p>收款名称： 龚某某</p>\
	                      <p>开户网点：长沙体育新城支行</p>\
	                  </div>\
	                  <div class="tab" id="bank-u2">\
	                     <p>微信支付</p>\
	                     <p>卡号： luguoeryi</p>\
	                     <p>微信名称： my name is jingkong</p>\
	                  </div>\
	                 </div>',
	          buttons: [
	            {
	              text: '确定选择',
	              bold: true,
	              onClick: function(e){
	                  $('#bank-urls').html( '<div class="card-content-inner">'+$(e).find('.tabs .tab.active').html()+'</div>' );
	              }
	            },
	          ]
	        })
        });

        $(".deposit_date").calendar({
            value: ['2017-01-05']
        });


        $(".bank_card").picker({
	          toolbarTemplate: '<header class="bar bar-nav">\
	          <button class="button button-link pull-right close-picker">确定</button>\
	          <h1 class="title">银行类别</h1>\
	          </header>',
	          cols: [{
	                  textAlign: 'center',
	                  values: [
	                      '中国农业银行',
	                      '北京银行',
	                      '交通银行',
	                      '上海银行',
	                      '中国银行',
	                      '中国建设银行',
	                      '中国光大银行',
	                      '兴业银行',
	                      '中国民生银行',
	                      '招商银行',
	                      '中信银行',
	                      '广发银行',
	                      '华夏银行',
	                      '中国工商银行',
	                      '中国邮政',
	                      '深圳发展银行',
	                      '上海浦发银行',
	                      '平安银行',
	                      '渤海银行',
	                      '东莞银行',
	                      '广州银行',
	                      '杭州银行',
	                      '浙商银行',
	                      '宁波银行'
	                  ]}
	          ]
	        });
	    });
	}
</script>