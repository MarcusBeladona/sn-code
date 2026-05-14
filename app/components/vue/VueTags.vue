<script setup>
	const props = defineProps({ list: { type: Array, required: true } })
</script>
<template>
	<span class="flex gap-2">
		<span v-for="tag in list">
			<p>{{ tag }}</p>
		</span>
	</span>
</template>