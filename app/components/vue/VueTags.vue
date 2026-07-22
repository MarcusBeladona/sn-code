<script setup>
	defineProps({
		list: { type: Array, default: () => [] },
	})
</script>

<template>
	<span v-if="list.length" class="flex gap-2">
		<span v-for="(tag, index) in list" :key="`${tag}-${index}`">
			<p class="text-caption uppercase">{{ tag }}</p>
		</span>
	</span>
</template>
