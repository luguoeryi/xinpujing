<template>
	<!-- account -->
	<div class="page page-current modal_account_wrap modal_form_li modal_base">
	    
	    <v-header headTitle="平台余额" lAutoClass="icon-left" lToName="back"></v-header>
	    <div class="content">

	        <div class="content-block-title"></div>
	        <div class="list-block readonly_wrap md_list_block">
	            <ul>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">总余额</div>
	                            <div class="item-input text-right">1000.00</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">OG平台</div>
	                            <div class="item-input text-right">26.05</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">AG平台</div>
	                            <div class="item-input text-right">201.00</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">BBIN平台</div>
	                            <div class="item-input text-right">100.00</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">OG平台</div>
	                            <div class="item-input text-right">26.05</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">AG平台</div>
	                            <div class="item-input text-right">201.00</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">BBIN平台</div>
	                            <div class="item-input text-right">100.00</div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <div class="content-padded">
                <a class="button button-big button-fill button-danger close-popup" href="#">返回</a>
	        </div>
	    </div>
	</div>
	<!-- ! end  account -->

</template>

<script>
import vHeader from '../../components/com/header.vue'
	export default {
		name:'Money',
		components:{vHeader}
	}
</script>