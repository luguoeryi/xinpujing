<template>
    <div>
        <!-- tow side -->
    <div class="panel-overlay"></div>

    <div class="panel panel-left panel-reveal theme-dark panel-side-nav" id="side_left">
        <header class="bar bar-nav">
            <h2 class="title">导航</h2>
        </header>
        <div class="list-block cards-list">
            <ul>
                <li class="card item-link" v-for="item in leftTop">
                    <div class="card-content">
                        <router-link :to="item.to" class="card-content-inner item-inner">{{ item.name }}</router-link>
                    </div>
                </li>
            </ul>
            <ul>
                <li class="card item-link" v-for="item in leftBotton">
                    <div class="card-content">
                        <router-link :to="item.to" class="card-content-inner item-inner">{{ item.name }}</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="panel panel-right panel-reveal theme-dark panel-side-nav" id="side_right">
        <header class="content-block-title">

            <section class="display-box login_after" v-if="isLogin">
                <div class="box-flex-5">
                    <map><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt=""><span class="icon icons-note"></span></map></map>
                </div>
                <div class="box-flex-7">
                    <h4 class="user_name">{{ $store.state.username }}</h4>
                    <span>余额: {{ $store.state.money }}</span>
                </div>
            </section>

            <section class="login_before" v-else>
                <map><img src="../../assets/img/icon/tx.png" alt=""><span class="icon icons-note"></span></map>
                <p><router-link :to="{name:'login'}" class="button button-fill button-big button-danger">登录</router-link></p>
            </section>

        </header>
        <div class="list-block cards-list">
            <ul>
                <li class="card item-link">
                    
                    <div class="card-content">
                        <router-link :to="{name:'user'}" class="card-content-inner item-inner">
                            <span class="icon icons-user3"></span>我的账户
                        </router-link>
                    </div>
                </li>
                <li class="card item-link">
                    <div class="card-content">
                        <router-link :to="{name:'record'}" class="card-content-inner item-inner"><span class="icon icons-news"></span>交易记录</router-link>
                    </div>
                </li>
            </ul>
            <ul style="margin-top:18px;">
                <li class="card item-link">
                    <div class="card-content">
                        <router-link :to="{name:'news'}" class="card-content-inner item-inner"><span class="icon icons-talk"></span>最新消息</router-link>
                    </div>
                </li>
                <li class="card item-link">
                    <div class="card-content">
                        <router-link :to="{name:'gamenews'}" class="card-content-inner item-inner"><span class="icon icons-volume-up2"></span>游戏公告</router-link>
                    </div>
                </li>
                <li class="card item-link"  @click="_night">
                    <div class="card-content">
                        <div href="#" class="card-content-inner item-inner">
                            <span class="icon icon-clock"></span>
                            <label class="label-switch">
                                <input type="checkbox" v-model="night"> 
                                <div class="checkbox"></div>
                            </label>
                        </div>
                    </div>
                </li>
            </ul>

            <ul style="margin-top:18px;" v-if="isLogin">
                <li class="card item-link">
                    <div class="card-content">
                        <a href="#" class="card-content-inner item-inner" @click="logout"><span class="icon icons-volume-up2"></span>退出</a> <!-- @click="$store.commit('setLogin', 0)" -->
                    </div>
                </li>
            </ul>

        </div>
    </div>

    <!-- ! end tow side --> 
    </div>
   
</template>

<script>
    export default {
        name:'Side',
        data(){
            return {
                leftTop: [
                    {name:'首页', to:'/wap'},
                    {name:'真人视讯', to:'/wap/live'},
                    {name:'体育赛事', to:'/wap/sport'},
                    {name:'彩票游戏', to:'/wap/lottery'},
                    {name:'电子游戏', to:'/wap/game'}
                ],
                leftBotton: [
                    {name:'优惠活动', to:'/wap/activity'},
                    {name:'我的最爱', to:'/wap/mylove'},
                    {name:'最近浏览', to:'/wap/myhistory'}
                ],
                night: this.$store.state.night
            }
        },
        computed:{
            isLogin(){
                return this.$store.state.isLogin  ? true : false;
            }
        },
        methods:{
            _night(){
                this.night = !this.night
                this.$store.state.night = this.night
            },
            logout(){
                this.$http.get(this.$store.state.serverURL+'logout.php').then((response) => {
          
                    var datas = JSON.parse( response.data )
                    console.log(datas)
                    if( datas.out == 1 ){
                        this.$store.state.isLogin = 0
                        $.closePanel()
                        $.toast("退出成功")
                    }else {
                        $.toast("退出失败")
                    }

                }, (error) => {
                   
                    $.alert('服务器错误: status: '+error.status)

                });
            }
        }
    }
</script>