<template>

    <div class="page page-current" id="userIndex">

        <v-header headTitle="用户中心" lAutoClass="icons-home2" rAutoClass="icons-cog3" lToName="home" rToName="forget"></v-header>
        
        <div class="content">

            <!-- user mu -->
            <section class="user_head text-center">
                <label>
                    <map>
                        <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
                        <span class="icon icons-note"></span>
                        <input style="display: none;" type="file" >
                    </map>
                </label>
                <h3>{{ $store.state.username }}</h3>
            </section>
            <!-- ! end user mu -->

            <!-- user money  -->
            <section class="money_wrap text-center">
                <div class="row">
                    <router-link :to="{name:'money', params:{a:123}}" tag="div" class="col-50">
                        <i>{{ $store.state.money }}</i>
                        <span>账户余额</span>
                    </router-link>
                    <router-link :to="{name:'news'}" tag="div" class="col-50">
                        <i>{{ $store.state.msg.length }}</i>
                        <span>最新消息</span>
                    </router-link>
                </div>
            </section>
            <!-- ! end user monet -->

            <!-- user center -->
            <section class="user_center text-center">
                <div class="row">
                        <!-- modal_bindbank -->
                    <router-link :to="{name:'remit'}" tag="div" class="col-33">
                        <h3><i class="icon icons-rmb"></i></h3>
                        <span>充值</span>
                    </router-link>
                    <router-link :to="{name:'drawing'}" tag="div" class="col-33">
                        <h3><i class="icon icons-attach_money"></i></h3>
                        <span>提款</span>
                    </router-link>
                    <router-link :to="{name:'mtransform'}" tag="div" class="col-33">
                        <h3><i class="icon icons-math2"></i></h3>
                        <span>额度转换</span>
                    </router-link>
                </div>
                <div class="row">
                    <router-link :to="{name:'record'}" tag="div" class="col-33">
                        <h3><i class="icon icons-credit-card2"></i></h3>
                        <span>交易记录</span>
                    </router-link>
                    <router-link :to="{name:'news'}" tag="div" class="col-33">
                        <h3><i class="icon icons-mail-envelope-closed4"></i></h3>
                        <span>消息记录</span>
                    </router-link>
                    <router-link :to="{name:'gamenews'}" tag="div" class="col-33">
                        <h3><i class="icon icons-volume_up"></i></h3>
                        <span>游戏公告</span>
                    </router-link>
                </div>
            </section>
            <!-- ! end user center -->

        </div>
    </div>
	
</template>

<script>
    import vHeader from '../components/com/header.vue'
	export default {
		name:'userIndex',
        components:{vHeader}
	}
</script>

<style lang="scss">
.theme-dark { 
    .user_center .row div, .user_center .row, .money_wrap div {
        border: none !important;  
    }
    .user_head, .money_wrap { background: none !important; }
}
</style>
