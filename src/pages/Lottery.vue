<template>
    <div class="page page-current" id="page_lottery">

        <v-header headTitle="彩票游戏" lAutoClass="icon-menu" rAutoClass="icon-me" lDPanel="#side_left" rDPanel="#side_right"></v-header>

        <v-nav></v-nav>

        <div class="content">

            <!-- lottery_list -->
            <section class="game_list text-center">
                <div class="display-box">
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_pk10.png" alt="">
                            <span>北京赛车</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_lhc.png" alt="">
                            <span>香港六合彩</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <router-link :to="{name:'lotterym', query:{code:'cq'}}" class="link_box" >
                            <img src="../assets/img/menu/c2img_ssc_cq.png" alt="">
                            <span>重庆时时彩</span>
                        </router-link>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_jstb.png" alt="">
                            <span>江苏骰宝</span>
                        </a>
                    </div>
                </div>
                <div class="display-box">
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c1img_xy28.png" alt="">
                            <span>幸运28</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_klsf_hn.png" alt="">
                            <span>湖南快乐10分</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <router-link :to="{name:'lotterym', query:{name:'天津时时彩', code:'tj'}}" class="link_box">
                            <img src="../assets/img/menu/c2img_ssc_tj.png" alt="" >
                            <span>天津时时彩</span>
                        </router-link>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_ssc_xj.png" alt="">
                            <span>新疆时时彩</span>
                        </a>
                    </div>
                </div>
                <div class="display-box">
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_xync_cq.png" alt="">
                            <span>重庆幸运农场</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_k3_gx.png" alt="">
                            <span>广西快三</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                       <router-link :to="{name:'lotterym', query:{code:'kl8'}}" class="link_box">
                            <img src="../assets/img/menu/c2img_k8_bj.png" alt="">
                            <span>北京快乐8</span>
                        </router-link>
                    </div>
                    <div class="box-flex-3">
                        <router-link :to="{name:'lotterym', query:{code:'gdsf'}}" class="link_box">
                            <img src="../assets/img/menu//c2img_11-5_gd.png" alt="">
                            <span>广东11选5</span>
                        </router-link>
                    </div>
                </div>
                <div class="display-box">
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_sf_gx.png" alt="">
                            <span>广西快乐十分</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_klsf_gd.png" alt="">
                            <span>广东快乐10分</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_ssc_jx.png" alt="">
                            <span>江西时时彩</span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ! end lottery_list -->

            <v-contact></v-contact>
        </div>

    </div>
	
</template>

<script>
    import vHeader from '../components/com/header.vue'
    import vNav from '../components/com/nav.vue'
    import vContact from '../components/com/contact.vue'
	export default {
		name:'Lottery',
        components:{vHeader, vNav, vContact}
	}
</script>
