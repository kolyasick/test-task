<script setup>
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]
</script>

<template>
	<div class="slider-wrapper">
		<Swiper
			:modules="modules"
			:slides-per-view="3"
			:space-between="30"
			:navigation="true"
			:pagination="{ clickable: true }"
			:scrollbar="{ draggable: true }"
			:effect="'coverflow'"
			:coverflow-effect="{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}"
			:centered-slides="true"
			:loop="true">
			<swiper-slide>
				<img src="/slider-imgs/1.jpg" alt="Image 1" />
			</swiper-slide>
			<swiper-slide>
				<img src="/slider-imgs/2.jpg" alt="Image 2" />
			</swiper-slide>
			<swiper-slide>
				<img src="/slider-imgs/3.jpg" alt="Image 3" />
			</swiper-slide>
			<swiper-slide>
				<img src="/slider-imgs/4.jpg" alt="Image 4" />
			</swiper-slide>
			<swiper-slide>
				<img src="/slider-imgs/5.webp" alt="Image 5" />
			</swiper-slide>
		</Swiper>
	</div>
</template>

<style scoped>
.slider-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: #f8f9fa;
	height: 100vh;
}

img {
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.swiper {
	width: 80%;
	max-width: 1200px;
}

.swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
