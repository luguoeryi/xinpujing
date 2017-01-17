<template>
	<!-- modal_money_transform -->
	<div class="page page-current modal_money_transform modal_base modal_form_li modal_user">
	    
	    <v-header headTitle="额度转换" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>
	    
	    <div class="content">

	        <div class="content-block-title"></div>
	        <div class="list-block">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">自动额度转换</div>
	                            <div class="item-input text-right">
	                                <label class="label-switch">
	                                    <input type="checkbox">
	                                    <div class="checkbox"></div>
	                                </label>
	                            </div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>

	        <!-- 自动额度转换 -->
	        <!-- <div class="list-block readonly_wrap">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">账户余额</div>
	                            <div class="item-input">
	                                <input type="text" class="text-right" readonly value="1000" >
	                            </div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div> -->
	        <!-- ！ end 自动额度转换 -->

	        <!-- 手动额度转换 -->
	        <div class="list-block readonly_wrap">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">总余额</div>
	                            <div class="item-input">
	                                <input class="text-right" readonly type="text" value="1000" />
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">现金余额</div>
	                            <div class="item-input">
	                                <input class="text-right" readonly type="text" value="0" />
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">
	                                <select name="" style="height:auto;">
	                                    <option value="">选择平台余额</option>
	                                    <option value="">AG平台</option>
	                                    <option value="">AG平台</option>
	                                    <option value="">AG平台</option>
	                                    <option value="">AG平台</option>
	                                    <option value="">AG平台</option>
	                                </select>
	                            </div>
	                            <div class="item-input">
	                                    <input class="text-right" type="text" value="200" >
	                            </div>
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
	                            <div class="item-title label">转出账户</div>
	                            <div class="item-input">
	                                <select style="width:auto;float:right;">
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                </select>
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">转入账户</div>
	                            <div class="item-input">
	                                <select style="width:auto;float:right;">
	                                    <option value="">OG余额</option>
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                    <option value="">AG余额</option>
	                                </select>
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">金额</div>
	                            <div class="item-input"><input class="text-right" value="0" type="number"></div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <!-- ！end 手动额度转换 -->

	        <div class="content-padded base_red">
	            <small>温馨提示：切换到自动额度转换前，请先把额度转移到现金余额哦~</small>
	        </div>

	        <div class="content-padded">
	            <p><a href="#" class="button button-big button-fill button-danger">提交</a></p>
	        </div>
	    </div>
	</div>
	<!-- ! end modal_money_transform -->

</template>

<script>
import vHeader from '../../components/com/header.vue'
	export default {
		name: 'Mtransform',
		components:{vHeader}
	}
</script>