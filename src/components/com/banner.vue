<template>
	<section class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><a href="#"><img src="../../assets/img/banner/banner01.jpg" alt=""></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/img/banner/banner02.jpg" alt=""></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/img/banner/banner03.jpg" alt=""></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/img/banner/banner04.jpg" alt=""></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/img/banner/banner05.jpg" alt=""></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/img/banner/banner06.jpg" alt=""></a></div>
	    </div>
	    <div class="swiper-pagination"></div>
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>
	</section>
</template>

<script>
	export default {
		name:'Banner',
        mounted (){
			require(['../../lib/js/sm-extend.min'], function(){
				$(".swiper-container").swiper({
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					autoplay : 3000,
					loop : true
				});
			})
        }
	}
</script>