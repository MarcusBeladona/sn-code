<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
		imgStyle: { type: String }
	});

	const FS = ref(false)

	const toggleFS = () => {
		FS.value = !FS.value
	}
</script>

<template>
	<figure v-if="data" :class="[data.fullSpan ? 'col-span-full' : 'col-span-8 col-start-3'], [
		FS ? 'fixed inset-0 m-auto bg-black/90 z-50 justify-center items-center w-full h-full gap-4' : ''
	]" class="flex flex-col gap-2">
		<SanityImage @click="toggleFS" :asset-id="data.image.asset._ref" sizes="xs:100vw sm:100vw md:100vw lg:100vw" fit="max" format="webp" class="rounded-3xl cursor-pointer contain-content hover:scale-101 duration-150" :class="[data.hasBorder ? 'edge' : ''], [imgStyle]" />
		<figcaption v-if="data.caption" class="text-sm text-zinc-500 italic text-center">{{ data.caption }}</figcaption>
	</figure>
</template>
