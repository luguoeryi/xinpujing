<template>
	<div>
		<!-- reg -->
		<div class="page page-current modal_reg modal_base modal_form_li" id="page_reg">
		    <header class="bar bar-nav base_head">
		        <router-link to="/" class="icon icon-left pull-left"></router-link>
		        <router-link to="/Login" class="button button-link pull-right">登录</router-link>
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
		                            <div class="item-input"><input type="text"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-email">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">账号</div>
		                            <div class="item-input"><input type="text" placeholder="6-12位英文字母和数字的组合" maxlength="12"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media">
		                            <i class="icon icon-form-password">*</i>
		                        </div>
		                        <div class="item-inner">
		                            <div class="item-title label">密码</div>
		                            <div class="item-input"><input type="password" placeholder="须为6~12码英文或数字夹杂且符合0~9或a~z字元" maxlength="12"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media">
		                            <i class="icon icon-form-password">*</i>
		                        </div>
		                        <div class="item-inner">
		                            <div class="item-title label">确认密码</div>
		                            <div class="item-input"><input type="password" placeholder="同密码一致" maxlength="12"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media">
		                            <i class="icon icon-form-password">*</i>
		                        </div>
		                        <div class="item-inner">
		                            <div class="item-title label">验证码</div>
		                            <div class="item-input yzm_wrap"><input type="number" placeholder="请点击" pattern="\d{4}"><img src="../assets/img/icon/validCode.jpg" alt=""></div>
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
		                        <div class="item-media"><i class="icon icon-form-name">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">真实姓名</div>
		                            <div class="item-input"><input type="text"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <div class="item-media"><i class="icon icon-form-email">*</i></div>
		                        <div class="item-inner">
		                            <div class="item-title label">取款密码</div>
		                            <div class="item-input"><input type="password" pattern="\d{4}" placeholder="请输入4位取款密码，纯数字" maxlength="12"></div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div class="item-content">
		                        <label class="label-checkbox item-content">
		                            <input type="checkbox" name="my-radio">
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
		            <p><a href="#" class="button button-big button-fill button-danger">确定</a></p>
		        </div>
		    </div>
		</div>
		<!-- ! end reg -->

		<!-- ageement -->
		<div class="popup modal_ageement modal_side modal_bg_white">
		    <header class="bar bar-nav">
		        <h3 class="title">开户协议</h3>
		    </header>
		    <div class="content">
		        <div class="content-padded">
		            <span>立即开通本公司账户，享受最优惠的各项红利!</span>
		            <ul class="side_list">
		                <li><p>本公司只接受合法博彩年龄的客户申请。同时我们保留要求客户提供其年龄证明的权利。</p></li>
		                <li><p>在本公司进行注册时所提供的全部信息必须在各个方面都是准确和完整的。在使用借记卡或信用卡时，持卡人的姓名必须与在网站上注册时的一致。</p></li>
		                <li><p>在开户后进行一次有效存款，恭喜您成为本公司有效会员!</p></li>
		                <li><p>存款免手续费，开户最低入款金额100人民币，最高单次入款金额50000人民币。</p></li>
		                <li><p>成为本公司有效会员后，客户有责任以电邮、联系在线客服、在本公司网站上留言等方式，随时向本公司提供最新的个人资料。</p></li>
		                <li><p>经本公司发现会员有重复申请账号行为时，有权将这些账户视为一个联合账户。我们保留取消、收回会员所有优惠红利，以及优惠红利所产生的盈利之权利。每位玩家、每一住址、每一电子邮箱、每一电话号码、相同支付卡/信用卡号码，以及共享计算机环境 (例如:网吧、其他公共用计算机等)只能够拥有一个会员账号，各项优惠只适用于每位客户在本公司唯一的账户。</p></li>
		                <li><p>本公司是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在本公司注册、下注，为会员个人行为，本公司不负责、承担任何相关责任。</p></li>
		                <li><p>无论是个人或是团体，如有任何威胁、滥用本公司优惠的行为，本公司保留权利取消、收回由优惠产生的红利，并保留权利追讨最高50%手续费。</p></li>
		                <li><p>所有本公司的优惠是特别为玩家而设，在玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，本公司保留权利要求客户向我们提供充足有效的文件， 并以各种方式辨别客户是否符合资格享有我们的任何优惠。</p></li>
		                <li><p>客户一经注册开户，将被视为接受所有颁布在本公司网站上的规则与条例。 </p></li>
		            </ul>
		            <p class="base_red">本公司是使用东方集团所提供的在线娱乐软件，若发现您在同系统的娱乐城上开设多个会员账户，并进行套利下注；本公司有权取消您的会员账号并将所有下注盈利取消！ </p>
		            <p><a class="button button-big button-danger button-fill close-popup" data-popup=".modal_ageement">确定</a></p>
		        </div>
		    </div>
		</div>
		<!-- ! end ageement -->

	</div>
	

</template>

<script>
	export default {
		name:'Reg'
	}
</script>