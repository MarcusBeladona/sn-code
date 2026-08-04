<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})
</script>

<template>
	<span class="flex flex-col gap-6 justify-between bg-base-200 p-6 squircle edge aspect-4/3">
		<span class="btn-secondary w-12 h-12 p-0 rounded-full">
			<Icon :name="data.iconName" size="24" />
		</span>
		<span class="flex flex-col gap-2">
			<h5>{{ data.title }}</h5>
			<p>{{ data.description }}</p>
		</span>
	</span>
</template>
