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
	                        <li>
	                            <div class="item-content open-popup" data-popup=".modal_msg_details">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            <div class="tab" id="newest_news">
	                <div class="list-block content_color">
	                    <ul>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2017-09-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，我是一颗小小的石头：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	            <div class="tab" id="history_news">
	                <div class="list-block content_color">
	                    <ul>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，你好，你妈好，你全家好：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div class="item-content">
	                                <div class="item-title">
	                                    <div class="display-box"><time class="box-flex-6">2016-08-25 02:45:27</time></div>
	                                    <div class="info_wrap">好消息：下载APP，千万红包等你来抢！本站易记域名：744138.com 844138.com</div>
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
		components:{vHeader}
	}
</script>