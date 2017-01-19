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
                    {name:'首页', to:'/'},
                    {name:'真人视讯', to:'/live'},
                    {name:'体育赛事', to:'/sport'},
                    {name:'彩票游戏', to:'/lottery'},
                    {name:'电子游戏', to:'/game'}
                ],
                leftBotton: [
                    {name:'优惠活动', to:'/activity'},
                    {name:'我的最爱', to:'/mylove'},
                    {name:'最近浏览', to:'myhistory'}
                ]
            }
        },
        computed:{
            isLogin(){
                return this.$store.state.isLogin  ? true : false;
            }
        },
        methods:{
            logout(){
                this.$http.get(this.$store.state.serverURL+'logout.php').then((response) => {
          
                    var datas = JSON.parse( response.data )

                    if( datas == 1 ){
                        this.$store.state.isLogin = 0
                        $.alert('退出成功')
                    }else {
                        $.alert('退出失败')
                    }

                }, (error) => {
                    console.log( error )
                    $.alert('服务器错误：'+error)

                });
            }
        }
    }
</script>