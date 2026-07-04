<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})
</script>

<template>
	<article class="md:aspect-4/3 p-6 flex flex-col gap-6 edge rounded-2xl justify-between">
		<span class="btn-secondary w-12 h-12 p-0 rounded-field">
			<Icon :name="data.iconName" size="24" />
		</span>
		<span class="flex flex-col gap-2">
			<h4>{{ data.title }}</h4>
			<p class="">{{ data.description }}</p>
		</span>
	</article>
</template>
