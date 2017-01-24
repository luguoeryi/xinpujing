<template>
	<section class="lottery_lists list-block cards-list mp0 no-padd-link">
		<ul>
			<li class="card" v-for="(value, key, index) in $store.state.lotteryData.ball">
				<div class="card-header">
					<h4 class="m0 item-inner ball-types"><i class="ltSub active"></i>{{ key }}</h4>
				</div>
				<div class="card-content">
					<section class="row">
						<div class="col-33" v-for="(itm, jndex) in value">
							<label>
								<input type="checkbox" :name="'ball_'+index+'_'+jndex" >
								<div class="ball_item">
									<i :class="jndex+1 | isNum">{{ jndex+1 }}</i>
									<strong>{{ itm }}</strong>
									<i class="icon icon-check ic_on"></i>
								</div>
							</label>
						</div>
					</section>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name:'Lotterylist',
		filters:{
			isNum(value){
				return typeof value == 'number'  ||  !isNaN( Number(value) )  ?  'blueball-sm blueBs'+value : '';
			}
		},
		mounted(){
			
			(function(){
				$('.card-header').on('click', function(){
					if( !$(this).attr('isShow') ){
						$(this).find('.ltSub').removeClass('active')
						$(this).next('.card-content').hide()
						$(this).attr('isShow', 'true')
					}else {
						$(this).find('.ltSub').addClass('active')
						$(this).next('.card-content').show()
						$(this).attr('isShow', '')
					}
				})
			})()
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/sass/var", "../../assets/sass/mixin";
	$borderColor: #fad0d0;
	$listBg: #fef1f1;
	$ball_margin: 0.5rem;
	.content .lottery_lists {
		background: none;
	    overflow: auto;
	    height: 100%;
	    &>ul {
	    	padding-bottom: 6rem;
	    }
	}

	.ltSub {
		display: inline-block;
		width: 20px;
		height: 22px;
		margin-right: .6em;
		background: $base_top_bg;
		text-align: center;
		line-height: 20px;
		position: relative;
		@include border-radius(3px);
		&:before, &:after {
			content: "";
			display: inline-block;
			width: 60%;
			height: 2px;
			background: #fff;
			vertical-align: middle;
		}
		&:after {
			width: 2px;
			height: 55%;
			position: absolute;
			left: calc( (100% - 2px)/2 );
			top: calc( (22px - 55%)/2 );
		}
	}
	.ltSub.active:after {
		display: none;
	}
	label{
		.ball_item {
			margin: $ball_margin 0 0 $ball_margin;
			background: $ball_item_bg;
			border: 1px solid #ddd;
			height: 3.2rem;
			text-align: center;
			line-height: 2rem;
			position: relative;
			border-radius: 5px;
			strong {
				display: block;
				color: $base_top_bg;
				line-height: 0.5rem;
			}
			span {
				font-weight: bold;
			}
			.ic_on {
				width: 1.2rem;
				height: 1.2rem;
				line-height: 1.2rem;
				font-weight: bold;
				text-align: center;
				position: absolute;
				bottom: -0.4rem; 
				right: -0.4rem;
				color: $base_footer_bg;
				border: 1px solid $base_top_bg;
				@include border-radius(50%);
				background: #fff;
				display: none;
			}
		}
		input[type=checkbox]{
			display: none;
		}
		i,em { font-style: normal; }
	}


	label input[type=checkbox]:checked + .ball_item{
		background: $base_top_bg_l;
		border-color: $borderColor;
		color: #fff;
		strong {
			color: inherit;
		}
		.ic_on { display: block; }
	}


	.card{ box-shadow:none; margin:0 !important; }
	.card-header {
		background: $listBg;
		color: $base_top_bg;
		border: 1px solid $borderColor;
		.item-inner {
			@include justify-content(initial);
			font-weight: normal;
		}
	}
	.card-content { padding: 0 $ball_margin $ball_margin 0; }
	.theme-dark  label .ball_item{ background: none; }
	.theme-dark .card-header { background: #3c3c3c; border:none; }
</style>