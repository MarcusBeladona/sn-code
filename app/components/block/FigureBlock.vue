<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})

	const widthClass = computed(() => (props.data.fullWidth ? 'w-full' : 'w-178'))
</script>

<template>
	<figure v-if="data" class="flex flex-col gap-2 h-fit" :class="widthClass">
		<VueModal :data="data" />

		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>
</template>