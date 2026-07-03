<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});
</script>

<template>
	<figure class="flex flex-col gap-3 w-full">
		<SanityImage :asset-id="data.image.asset._ref" fit="max" format="webp" class="w-full rounded-2xl cursor-pointer contain-content hover:scale-101 duration-150" :class="[data.border ? 'edge' : '']" />
		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>
</template>
