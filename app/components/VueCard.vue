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
	<article class="col-span-8 col-start-3 border border-white ring ring-zinc-200 rounded-3xl p-4 flex flex-col gap-4 bg-zinc-100">
		<Icon v-if="icon" :name="icon" size="32" />
		<span class="flex flex-col gap-2">
			<h6>{{ title }}</h6>
			<p>{{ description }}</p>
		</span>
	</article>
</template>
