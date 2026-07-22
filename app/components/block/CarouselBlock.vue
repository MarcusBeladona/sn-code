<script setup>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
	import { squircleDirective as vSquircle } from '@squircle-js/vue'
	import '@splidejs/vue-splide/css'

	const props = defineProps({ data: Object })
	const { squircleOptions } = useSquircleRadius()
</script>

<template>
	<section id="carousel">
		<Splide :has-track="false" :options="{ rewind: true }" aria-label="Carousel">
			<SplideTrack
				v-squircle="squircleOptions"
				class="overflow-clip"
				:class="data.border ? 'outline' : ''"
			>
				<SplideSlide v-for="item in data.images" :key="item._key">
					<FigureBlock :data="item" :clip="false" />
				</SplideSlide>
			</SplideTrack>
			<ul class="splide__pagination"></ul>
			<div class="splide__arrows">
				<button class="splide__arrow splide__arrow--prev">
					<Icon name="ph:caret-left" size="24" />
				</button>
				<button class="splide__arrow splide__arrow--next">
					<Icon name="ph:caret-right" size="24" />
				</button>
			</div>
		</Splide>
	</section>
</template>

<style>
	@reference "@/assets/css/main.css";

	.splide__arrows {
		@apply opacity-0 transition-opacity duration-300;
	}

	.splide:hover .splide__arrows {
		@apply opacity-100;
	}

	.splide__arrow {
		@apply bg-black text-white opacity-100 h-10 w-10;
	}

	.splide__pagination {
		@apply relative bottom-0 pt-2;
	}

	.splide__pagination__page.is-active {
		@apply bg-black opacity-100 transform-none;
	}
</style>
