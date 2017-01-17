<template>
	<section class="periods">
        <div class="per_odd display-box">
            <div class="box-flex-3">
                <span class="per_item">第<em class="pernum">066</em>期</span>
            </div>
            <div class="box-flex-9">
                <span class="per_talk">开奖号码&nbsp;</span>
                <i class="blueball-sm blueBs5">5</i>
                <i class="blueball-sm blueBs4">4</i>
                <i class="blueball-sm blueBs4">4</i>
                <i class="blueball-sm blueBs0">0</i>
                <i class="blueball-sm blueBs6">6</i>
            </div>
        </div>
        <div class="per_new display-box">
            <div class="box-flex-3">
                <span class="per_item">第<em class="pernum">067</em>期</span>
            </div>
            <div class="box-flex-9">
                <span class="pernum v-sub">投注截止00:02:36</span>
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