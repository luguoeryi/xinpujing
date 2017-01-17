<template>
    <div class="page page-current" id="page_live">

        <v-header headTitle="真人视讯" lAutoClass="icon-menu" rAutoClass="icon-me" lDPanel="#side_left" rDPanel="#side_right"></v-header>

        <v-nav></v-nav>

        <div class="content">

            <!-- live_list -->
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
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_ssc_cq.png" alt="">
                            <span>重庆时时彩</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/c2img_jstb.png" alt="">
                            <span>江苏骰宝</span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ! end live_list -->

            <v-contact></v-contact>
        </div>

    </div>
	
</template>

<script>
    import vHeader from '../components/com/header.vue'
    import vNav from '../components/com/nav.vue'
    import vContact from '../components/com/contact.vue'
	export default {
		name:'Live',
        components:{vHeader, vNav, vContact}
	}
</script>
