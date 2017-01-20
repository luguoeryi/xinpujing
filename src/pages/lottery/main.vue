<template>
	<div class="page page-current" id="lottery_main">

		<v-header :headTitle="$store.state.activeLottery" lAutoClass="icon-menu" rAutoClass="icon-me" lDPanel="#side_left" rDPanel="#side_right"></v-header>
		
        
		<v-nav></v-nav>

		<div class="content" style="overflow:hidden;">
            
            <!-- 彩种选择 -->
			<lottery-nav :headTitle="$store.state.activeLottery" lToPopup=".modal_lottery_type" rToPopup=".modal_lottery_sub"></lottery-nav>
            
            <!-- 期数 -->
            <periods-l></periods-l>
            
            <!-- 球数列表 -->
            <lottery-list></lottery-list>

		</div>
        
        <!-- popup -->
		<lottery-type></lottery-type>
        <lottery-sub></lottery-sub>
        <lottery-bet></lottery-bet>
        <!-- ! end popup -->
	</div>
</template>

<script>
    import vHeader from '../../components/com/header'

    import lotteryNav from '../../components/lottery/nav'
    import periodsL from '../../components/lottery/periods'
    import lotteryList from '../../components/lottery/lottery_list'

    import lotteryType from '../../components/lottery/lottery_type'
    import lotterySub from '../../components/lottery/lottery_sub'
    import lotteryBet from '../../components/lottery/bet'

    import vNav from '../../components/com/nav'
	export default {
		name:'LotteryMain',
        components:{vHeader, lotteryNav, periodsL, lotteryList, lotteryType, lotterySub, lotteryBet, vNav}
	}
</script>