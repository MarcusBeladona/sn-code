<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});
</script>

<template>
	<figure class="flex flex-col gap-2" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<iframe :src="data.url" class="w-full aspect-video rounded-2xl md:rounded-3xl" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>
		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>

</template>
