<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});
</script>

<template>
	<figure class="flex flex-col gap-2" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<iframe :src="data.url" class="w-full aspect-16/10 rounded-2xl md:rounded-3xl" frameborder=" 0" loading="lazy" allowfullscreen sandbox="allow-scripts allow-same-origin" :class="data.border ? 'outline' : ''"></iframe>
		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>
</template>

<style scoped>
	iframe:fullscreen {
		border-radius: 0px;
		border: none;
		outline: none;
	}
</style>
