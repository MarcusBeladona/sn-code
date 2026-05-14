<script setup>
	const props = defineProps({ data: Object })


	const FS = ref(false)
	const toggleFS = () => {
		document.body.classList.toggle('modal-active');
		FS.value = !FS.value
	}
</script>

<template>
	<section class="flex flex-col gap-2" :class="data.fullSpan ? 'col-span-full' : 'col-span-8 col-start-3'">
		<SanityImage :asset-id="data.images[0].asset._ref" @click="toggleFS" :class="data.hasBorder ? 'edge' : ''" class="rounded-3xl cursor-zoom-in hover:scale-101 duration-150" />
		<p class="text-sm text-zinc-500 italic text-center">{{ data.caption }}</p>

		<div @click="toggleFS" :class="FS ? 'bg-black/90 fixed inset-0' : 'hidden'" class=" flex flex-col items-center justify-start overflow-y-auto w-full z-50 cursor-zoom-out">
			<SanityImage v-for="image in data.images" :asset-id="image.asset._ref" class="w-full max-w-[1440px] animate-enter" />
		</div>
	</section>
</template>