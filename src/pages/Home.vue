<template>
    <div class="page page-current" id="home">

        <v-header headTitle="新葡京电玩城" lAutoClass="icon-menu" rAutoClass="icon-me" lDPanel="#side_left" rDPanel="#side_right"></v-header>

        <v-nav></v-nav>

        <div class="content">

            <vBanner></vBanner>

            <section class="content-padded news">
                <div class="display-box">
                    <div class="box-flex-2">
                        <button class="button button-danger">公告</button>
                    </div>
                    <div class="box-flex-10">
                        <div class="info_wrap animation_float clear open-popup" data-popup=".modal_news">
                            <div class="news_info pull-left">
                                <span>{{ $store.state.msg[0] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home_link text-center">
                <div class="display-box">
                    <div class="box-flex-4">
                        <router-link :to="{name:'activity'}" class="base_blue">
                            <span class="icon icons-air"></span>
                            优惠活动
                        </router-link>
                    </div>
                    <div class="box-flex-4">
                        <router-link to="/mylove" class="base_red">
                            <span class="icon icons-love"></span>
                            我的最爱
                        </router-link>
                    </div>
                    <div class="box-flex-4">
                        <router-link to="/myhistory" class="base_violet">
                            <span class="icon icons-timer"></span>
                            最近浏览
                        </router-link>
                    </div>
                </div>
            </section>


            <section class="game_list text-center">
                <div class="display-box">
                    <div class="box-flex-3">
                        <router-link :to="{name:'lottery'}" class="link_box">
                            <img src="../assets/img/menu/lotteryShow.png" alt="" />
                            <span>彩票游戏</span>
                            <i class="icon icons-love3"></i>
                        </router-link>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_pk10.png" alt="" />
                            <span>北京赛车</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_lhc.png" alt="" />
                            <span>香港六合彩</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <router-link :to="{name:'lottery'}" class="link_box">
                            <img src="../assets/img/menu/c1img_hgty.png" alt="" />
                            <span>皇冠体育</span>
                        </router-link>
                    </div>
                </div>
                <div class="display-box">
                    <div class="box-flex-3">
                        <router-link :to="{name:'lottery'}" class="link_box">
                            <img src="../assets/img/menu/index_ogsx.png" alt="" />
                            <span>彩票游戏</span>
                        </router-link>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c1imgag.png" alt="" />
                            <span>北京赛车</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c1imgbbin.png" alt="" />
                            <span>香港六合彩</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <router-link :to="{name:'sport'}" class="link_box" href="#">
                            <img src="../assets/img/menu/c1imgnmg.png" alt="" />
                            <span>皇冠体育</span>
                        </router-link>
                    </div>
                </div>
                <div class="display-box">
                    <div class="box-flex-3">
                        <router-link :to="{name:'lottery'}" class="link_box">
                            <img src="../assets/img/menu/index_pt.png" alt="" />
                            <span>彩票游戏</span>
                        </router-link>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/index_ibc.png" alt="" />
                            <span>北京赛车</span>
                        </a>
                    </div>
                </div>
            </section>

            <v-contact></v-contact>

        </div>

        <!-- modal_news -->
        <div class="popup modal_news">
            <header class="bar bar-nav base_head">
                <a class="icon icon-up pull-left close-popup" href="#"></a>
                <h3 class="title">最新消息</h3>
            </header>
            <div class="content">
                <div class="list-block">
                    <ul>
                        <li class="item-content" v-for="(item, index) in $store.state.msg">
                            <div class="item-inner">{{ index+1 }}. {{ item }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- ! end modal_news -->

    </div>
	
</template>

<script>
    import vHeader from '../components/com/header.vue'
    import vNav from '../components/com/nav.vue'
    import vContact from '../components/com/contact.vue'
    import vBanner from '../components/com/banner.vue'
	export default {
		name:'home',
        components:{vHeader, vNav, vContact, vBanner},
        data(){
            return {
                a:123,
                b:456
            }
        },
        mounted (){
            var newsWrap = document.getElementsByClassName('info_wrap')[0];
            newsWrap.innerHTML+=newsWrap.innerHTML;
        }
	}
</script>

<style lang="scss" scoped>

@import "../assets/sass/var", "../assets/sass/mixin";

.news {
    div[class*=box-flex]{ overflow: hidden; }
    .info_wrap { width: 200%; }
    .news_info {
        display: inline-block;
        width: 50%;
        height: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.animation_float {
    @include animation(news_float infinite 8s linear);
}
@keyframes news_float {
    100% {
        @include transform(translateX(-50%));
    }
}
@-webkit-keyframes news_float {
    100% {
        @include transform(translateX(-50%));
    }
}
@-moz-keyframes news_float {
    100% {
        @include transform(translateX(-50%));
    }
}
@-o-keyframes news_float {
    100% {
        @include transform(translateX(-50%));
    }
}

.home_link {
    font-size: 0.7rem;
    span[class*=icon]{
        font-weight: bold;
        font-size: 1.1rem;
        vertical-align: sub;
    }
    border-top: 1px solid #ececec;
    a {
        margin: .5rem;
        display: block;
    }
}
</style>
