<template>
	<!-- modal_lottery_type -->
    <div class="popup modal_bg_white modal_base modal_form_li modal_lottery_type">
        <header class="bar bar-nav">
            <a class="icon icon-up pull-left close-popup"></a>
            <h3 class="title">选择彩票</h3>
        </header>
        <div class="content">
            <div class="list-block">
                <ul>
                    <li class="item-content" v-for="item in type">
                        <div class="item-inner">{{ item }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- ! end modal_lottery_type -->
</template>

<script>
	export default {
		name: 'lotteryType',
		data(){
			return {
				type:[
					'六合彩',
					'重庆时时彩',
					'北京PK拾',
					'重庆快乐十分',
					'广东快乐十分',
					'北京快乐8',
					'广东11选5',
					'广西十分彩',
					'天津快乐十分',
					'福彩3D',
					'排列3',
					'上海时时乐',
					'天津时时彩',
					'敬请期待...'
				]
			}
		}
	}
</script>