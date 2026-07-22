<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})
</script>

<template>
	<VueSquircle class="md:aspect-4/3 p-6 flex flex-col gap-6 bg-base-200 outline outline-base-300 justify-between">
		<span class="btn-secondary w-12 h-12 p-0 rounded-field">
			<Icon :name="data.iconName" size="24" />
		</span>
		<span class="flex flex-col gap-2">
			<h5>{{ data.title }}</h5>
			<p>{{ data.description }}</p>
		</span>
	</VueSquircle>
</template>
