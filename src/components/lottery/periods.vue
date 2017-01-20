<template>
	<section class="periods">
        <div class="per_odd display-box">
            <div class="box-flex-3">
                <span class="per_item">第<em class="pernum">{{ $store.state.pre.qishu }}</em>期</span>
            </div>
            <div class="box-flex-9">
                <span class="per_talk">开奖号码&nbsp;</span>
                <i class="blueball-sm" :class="'blueBs'+item" v-for="item in $store.state.pre.ball">{{ item }}</i>
            </div>
        </div>
        <div class="per_new display-box">
            <div class="box-flex-3">
                <span class="per_item">第<em class="pernum">{{ $store.state.now.qishu }}</em>期</span>
            </div>
            <div class="box-flex-9">
                <span class="pernum v-sub">投注截止{{ $store.state.jiezhiTime }}</span>
                <a href="#" class="pull-right button button-fill button-danger button-md open-popup" data-popup=".modal_lottery_bet">下单</a>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		name: 'Periods'
	}
</script>

<style lang="scss" scoped>
    @import "../../assets/sass/var", "../../assets/sass/mixin";
    .periods {
        font-size: 0.7rem;
        padding: 0 0.5rem;
        em { font-style: normal; }
        .per_item { vertical-align: sub; }
        .per_talk { color: $side_list_bg; }
        .per_odd, .per_new {
            padding: 0.2rem 0;
        }
    }
</style>