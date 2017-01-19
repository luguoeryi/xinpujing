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
	                            <div class="item-input text-right">{{ allMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">用户余额</div>
	                            <div class="item-input text-right">{{ userMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">AG平台</div>
	                            <div class="item-input text-right">{{ agMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">MG平台</div>
	                            <div class="item-input text-right">{{ mgMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">OG平台</div>
	                            <div class="item-input text-right">{{ ogMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">PT平台</div>
	                            <div class="item-input text-right">{{ ptMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">NA平台</div>
	                            <div class="item-input text-right">{{ naMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">TTG平台</div>
	                            <div class="item-input text-right">{{ ttgMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                 <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">HB平台</div>
	                            <div class="item-input text-right">{{ hbMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">BBIN平台</div>
	                            <div class="item-input text-right">{{ bbMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">ALLBET平台</div>
	                            <div class="item-input text-right">{{ abMoney }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">BH彩票</div>
	                            <div class="item-input text-right">{{ bhLottery }}</div>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item-content">
	                        <div class="item-inner">
	                            <div class="item-title label">BH棋牌</div>
	                            <div class="item-input text-right">{{ bhPuke }}</div>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        <div class="content-padded">
                <a class="button button-big button-fill button-danger close-popup" href="#" @click="$router.go(-1)">返回</a>
	        </div>
	    </div>
	</div>
	<!-- ! end  account -->

</template>

<script>
import vHeader from '../../components/com/header.vue'
	export default {
		name:'Money',
		components:{vHeader},
		data(){
			return {
				allMoney:'',
				userMoney:'',
				agMoney:'',
				mgMoney:'',
				ogMoney:'',
				ptMoney:'',
				naMoney:'',
				ttgMoney:'',
				hbMoney:'',
				bbMoney:'',
				abMoney:'',
				bhLottery:'',
				bhPuke:''
			}
		},
		created(){
			this.$http.get(this.$store.state.serverURL+'money.php').then((response) => {
						
				if( response.data ){
					var datas = JSON.parse( response.data )
					if( datas.isLogin == 1 ){
						this.allMoney = datas.total
						this.userMoney = datas.money
						this.agMoney = datas.ag
						this.mgMoney = datas.mg
						this.ogMoney = datas.og
						this.ptMoney = datas.pt
						this.naMoney = datas.na
						this.ttgMoney = datas.ttg
						this.hbMoney = datas.hb
						this.bbMoney = datas.bbin
						this.abMoney = datas.ab
						this.bhLottery = datas.cp
						this.bhPuke = datas.dx
					}else {
						$.alert('您已退出，请重新登录',function(){
							vm.$store.state.isLogin = 0
							vm.$router.push({name:'login'})
						})
					}

				}

			}, (error) => {
				$.alert('服务器错误'+error.status);
			});
		}
	}
</script>