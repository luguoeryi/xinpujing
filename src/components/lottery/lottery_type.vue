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
                    <li class="item-content close-popup" v-for="item in $store.state.normalLottery" @click="setType(item)">
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
		name: 'lotteryTypes',
		methods:{
			setType(type){

				$.showPreloader('正在加载'+type+'...')

				var formData = new FormData()
				formData.append('lottery', 'cq')
				
		        this.$http.post(this.$store.state.serverURL+'cplist.php', formData).then((response) => {

		        	var datas = JSON.parse( response.data )

		        	console.log( datas )

					this.$store.state.activeLottery = type

					$.hidePreloader()

					$.toast('加载成功~', 500)

		        }, (error) => {

		        	console.log( error )

		        	$.hidePreloader()

		        	$.alert('服务器错误: status: '+error.status)

		        })

			}
		}
	}
</script>