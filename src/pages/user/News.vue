<template>
	<!-- Message announcement -->
	<div class="page page-current modal_news_acement modal_base base_tabs modal_form_li modal_user">
	    
	     <v-header headTitle="消息公告" lAutoClass="icon-left" rAutoClass="icons-home2"  lToName="back" rToName="home"></v-header>
	     
	    <div class="content">
	        <div class="buttons-tab">
	            <a class="tab-link active button" href="#my_news">个人消息</a>
	            <a class="tab-link button" href="#newest_news">最新消息</a>
	            <a class="tab-link button" href="#history_news">历史消息</a>
	        </div>

	        <div class="tabs">
	            <div class="tab active" id="my_news">
	                <div class="list-block content_color">
	                    <ul>
	                        <li v-for="item in mymsg">
	                            <div class="item-content open-popup" data-popup=".modal_msg_details">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">{{ item.create_date }}</time></div>
	                                    <div class="info_wrap">{{ item.content }}</div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            <div class="tab" id="newest_news">
	                <div class="list-block content_color">
	                    <ul>
	                        <li v-for="item in newmsg">
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">{{ item.create_date }}</time></div>
	                                    <div class="info_wrap">{{ item.content }}</div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            <div class="tab" id="history_news">
	                <div class="list-block content_color">
	                    <ul>
	                        <li v-for="item in historymsg">
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">{{ item.create_date }}</time></div>
	                                    <div class="info_wrap">{{ item.content }}</div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>

	    </div>
	</div>
	<!-- ! end Message announcement -->

</template>

<script>
import vHeader from '../../components/com/header.vue'
	export default {
		name:'News',
		components:{vHeader},
		data(){
			return {
				newmsg:[
					{
						content:'hello my is newmsg',
						create_date:'2017-01-23 16:10:02'
					},
					{
						content:'hello my is newmsg',
						create_date:'2017-01-23 16:10:02'
					}
				],
				historymsg:[
					{
						content:'hello my is historymsg',
						create_date:'2017-01-23 16:10:02'
					},
					{
						content:'hello my is historymsg',
						create_date:'2017-01-23 16:10:02'
					}
				],
				mymsg:[
					{
						content:'hello my is mymsg',
						create_date:'2017-01-23 16:10:02'
					},
					{
						content:'hello my is mymsg',
						create_date:'2017-01-23 16:10:02'
					}
				]
			}
		},
		created(){

			this.$http.get(this.$store.state.serverURL+'msg.php').then((response) => {

				if( response.data ){
					var datas = JSON.parse( response.data )
					console.log( datas )
					if( datas.zt == 1 ){
						this.mymsg = datas.msg_info
						this.newmsg = datas.nmsg
						this.historymsg = datas.omsg
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