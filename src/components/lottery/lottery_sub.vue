<template>
	<!-- modal_news -->
    <div class="popup modal_bg_white modal_base modal_form_li modal_lottery_sub">
        <header class="bar bar-nav">
            <a class="icon icon-up pull-left close-popup"></a>
            <h3 class="title">选择玩法</h3>
        </header>
        <div class="content">
            <div class="list-block">
                <ul>
                    <li class="item-content" v-for="(value, key) in $store.state.lotteryData.ball">
                        <div class="item-inner">{{ key }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- ! end modal_news -->
</template>

<script>
	export default {
		name: 'lotterySub'
	}
</script>