<script setup>
	const props = defineProps({ data: Object })
</script>
<template>
	<Carousel itemsToShow="1" :wrapAround=true :class="data.fullWidth ? 'w-full rounded-2xl md:rounded-3xl' : 'w-178 rounded-xl md:rounded-2xl'">
		<Slide v-for="item in data.images">
			<FigureBlock :data="item" :class="data.border ? 'border border-base-300' : ''" />
			<!-- <SanityImage :asset-id="item.image.asset._ref" class="h-fit w-full" /> -->
		</Slide>

		<template #addons>
			<Navigation>
				<template #prev>
					<Icon name="ph:caret-left" size="24" />
				</template>
				<template #next>
					<Icon name="ph:caret-right" size="24" />
				</template>
			</Navigation>
			<Pagination />
		</template>
	</Carousel>
</template>

<style>
	@reference "@/assets/css/main.css";

	.carousel__viewport,
	.carousel__track,
	.carousel__slide {
		@apply max-w-full w-full h-fit m-0 p-0;
	}

	.carousel__pagination {
		@apply bottom-0 mt-4 relative w-fit;
	}

	.carousel__pagination-button {
		@apply rounded-full h-2 w-2 bg-primary/10;
	}

	.carousel__pagination-button--active {
		@apply bg-black;
	}

	/* BUTTONS */

	.carousel__prev,
	.carousel__next {
		@apply btn-primary bg-black text-white p-0 m-6 opacity-0 transition-opacity duration-300;
	}

	.is-hover button {
		@apply opacity-100;
	}
</style>