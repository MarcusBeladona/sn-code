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
	<figure v-if="data" class="flex flex-col gap-3 w-full not-first:my-18">
		<SanityImage @click="toggleFS" :asset-id="data.image.asset._ref" fit="max" format="webp" class="w-full rounded-2xl cursor-pointer contain-content hover:scale-101 duration-150" :class="[data.hasBorder ? 'edge' : ''], [imgStyle]" />
		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">{{ data.caption }}</figcaption>
	</figure>
</template>
