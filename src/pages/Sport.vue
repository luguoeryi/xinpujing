<template>

    <div class="page page-current" id="page_sport">

        <v-header headTitle="体育赛事" lAutoClass="icon-menu" rAutoClass="icon-me" lDPanel="#side_left" rDPanel="#side_right"></v-header>

        <v-nav></v-nav>

        <div class="content">

            <!-- sport_list -->
            <section class="game_list text-center">
                <div class="display-box">
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/sport-1.png" alt="" />
                            <span>足球</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/sport-2.png" alt="" />
                            <span>篮美</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/sport-4.png" alt="" />
                            <span>网球</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/sport-5.png" alt="" />
                            <span>棒球</span>
                        </a>
                    </div>
                </div>
                <div class="display-box">
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/sport-6.png" alt="" />
                            <span>排球</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/sport-9.png" alt="" />
                            <span>其他</span>
                        </a>
                    </div>
                    <div class="box-flex-3">
                        <a class="link_box" href="#">
                            <img src="../assets/img/menu/index_ibc.png" alt="" />
                            <span>沙巴体育</span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- ! end sport_list -->

            <v-contact></v-contact>
        </div>
    </div>
	
</template>

<script>
    import vHeader from '../components/com/header.vue'
    import vNav from '../components/com/nav.vue'
    import vContact from '../components/com/contact.vue'
	export default {
		name:'Sport',
        components:{vHeader, vNav, vContact}
	}
</script>
