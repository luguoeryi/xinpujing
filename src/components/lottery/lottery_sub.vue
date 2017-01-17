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
                    <li class="item-content" v-for="item in type">
                        <div class="item-inner">{{ item }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- ! end modal_news -->
</template>

<script>
	export default {
		name: 'lotterySub',
		data(){
			return {
				type:[
					'珠仔',
					'总和龙虎',
					'组合',
					'斗牛'
				]
			}
		}
	}
</script>