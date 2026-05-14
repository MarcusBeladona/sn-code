<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
		imgStyle: { type: String }
	});

	const FS = ref(false)

	const toggleFS = () => {
		console.log('clocked');
		FS.value = !FS.value
	}
</script>

<template>
	<figure v-if="data" :class="[data.fullSpan ? 'col-span-full' : 'col-span-8 col-start-3'], [
		FS ? 'fixed inset-0 m-auto bg-black/90 z-50 justify-center items-center w-full h-full gap-4' : ''
	]" class="flex flex-col gap-2">
		<SanityImage @click="toggleFS" :asset-id="data.image.asset._ref" class="rounded-3xl w-full max-w-[1440px] cursor-pointer hover:scale-101 duration-150" :class="[data.hasBorder ? 'edge' : ''], [imgStyle]" />
		<figcaption v-if="data.caption" class="text-sm text-zinc-500 italic text-center">{{ data.caption }}</figcaption>
	</figure>
</template>
