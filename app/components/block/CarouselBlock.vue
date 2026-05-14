<script setup>
	const props = defineProps({ data: Object })
	console.log(props.data);

	const FS = ref(false)
	const toggleFS = () => {
		document.body.classList.toggle('modal-active');
		FS.value = !FS.value
	}
	setTimeout(() => {
		var elements = document.querySelectorAll('.carousel__prev, .carousel__next, .btn-middle');
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.opacity = '0';
		}
	}, 3000);
</script>
<template>
	<section class="flex flex-col gap-2" :class="[FS ? 'bg-black/90 fixed inset-0 z-40 justify-center items-center' : '', data.fullSpan ? 'col-span-full' : 'col-span-8 col-start-3']">
		<Carousel :class="{ 'hover:scale-101 duration-150': !FS, edge: data.hasBorder }">
			<Slide v-for="image in data.content">
				<SanityImage :asset-id="image.asset._ref" class="w-full contain-content" />
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
				<button @click="toggleFS" :class="FS ? 'w-3xl' : 'w-lg'" class="absolute inset-0 z-50 h-full m-auto cursor-pointer btn-middle">
					<Icon :name="FS ? 'ph:arrows-in-simple' : 'ph:arrows-out-simple'" size="24" />
				</button>
			</template>
		</Carousel>
		<p class="text-sm text-zinc-500 italic text-center">{{ data.caption }}</p>
	</section>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	:deep(.carousel) {
		@apply overflow-hidden rounded-3xl max-w-[1440px];
	}

	:deep(.carousel__prev),
	:deep(.carousel__next) {
		@apply h-full w-fit flex p-12 justify-center items-center text-zinc-900;
	}

	:deep(.carousel__prev):hover,
	:deep(.carousel__next):hover,
	.btn-middle:hover {
		opacity: 1 !important;
		@apply duration-300;
	}



</style>