<script setup>
	const props = defineProps({
		assetId: {
			type: String,
			required: true
		},
		caption: {
			type: String,
		},
		isSpanFull: {
			type: Boolean,
			default: false
		},
		hasContainer: {
			type: Boolean,
			default: false
		},
		hasBorder: {
			type: Boolean,
			default: false
		}
	})
	const imageView = ref(false)
	const toggleImageView = () => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			imageView.value = !imageView.value
		}
	}
</script>

<template>
	<figure :class="isSpanFull ? 'col-span-full' : 'col-span-8 col-start-3'" class="flex flex-col gap-2">
		<section :class="hasContainer ? 'flex flex-col bg-zinc-100 rounded-3xl border border-white ring ring-zinc-200' : ''">
			<span v-if="hasContainer" class="flex gap-2 py-3 px-4">
				<Icon name="ph:circle-fill" size="16" class="text-zinc-200" />
				<Icon name="ph:circle-fill" size="16" class="text-zinc-200" />
				<Icon name="ph:circle-fill" size="16" class="text-zinc-200" />
			</span>
			<SanityImage @click="toggleImageView" :asset-id="assetId" :class="hasBorder ? 'border border-zinc-200 ring ring-white' : ''
				" class="w-full hover:scale-102 transition cursor-zoom-in rounded-3xl" />
		</section>
		<figcaption v-if="caption" class="text-center italic">{{ caption }}</figcaption>
		<!-- Image Fullscreen Modal -->
		<Transition name="fade" appear>
			<div v-if="imageView" @click="toggleImageView" class="z-50 fixed inset-0 flex justify-center items-center bg-black/66 p-6 w-full h-full transition duration-200 cursor-zoom-out">
				<SanityImage :asset-id="assetId" class="h-full w-fit object-scale-down animate-grow rounded-3xl" />
			</div>
		</Transition>
	</figure>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	.fade-enter-active,
	.fade-leave-active {
		transition: all 300ms ease-in-out;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>