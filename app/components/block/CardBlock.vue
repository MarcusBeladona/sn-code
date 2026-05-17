<script setup>
	const props = defineProps({
		icon: {
			type: String,
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	})
</script>

<template>
	<article class="aspect-4/3 p-6 flex flex-col gap-2 bg-white edge justify-between">
		<span class="btn-secondary w-12 h-12 p-0 rounded-field">
			<Icon v-if="icon" :name="icon" size="24" />
		</span>
		<span class="flex flex-col gap-2">
			<h6>{{ title }}</h6>
			<p>{{ description }}</p>
		</span>
	</article>
</template>
