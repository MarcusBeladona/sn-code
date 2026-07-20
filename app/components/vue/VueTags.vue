<script setup>
	defineProps({ list: { type: Array, required: true } })
</script>

<template>
	<span class="flex gap-2">
		<span v-for="(tag, index) in list" :key="`${tag}-${index}`">
			<p class="text-caption uppercase">{{ tag }}</p>
		</span>
	</span>
</template>
