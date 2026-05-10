<script setup>
	const props = defineProps({
		isSpanFull: {
			type: Boolean,
			default: false
		},
		hasContainer: {
			type: Boolean,
			default: false
		},
		items: {
			type: Array,
			default: () => []
		}
	})
</script>

<template>
	<div :class="[
		isSpanFull ? 'col-span-full' : 'col-span-8 col-start-3',
		hasContainer ? 'flex flex-col bg-zinc-100 rounded-3xl border border-white ring ring-zinc-200 vue-container--has-container' : 'flex gap-6'
	]">
		<span v-if="hasContainer" class="flex gap-2 py-3 px-4">
			<Icon name="ph:circle-fill" size="16" class="text-zinc-200" />
			<Icon name="ph:circle-fill" size="16" class="text-zinc-200" />
			<Icon name="ph:circle-fill" size="16" class="text-zinc-200" />
		</span>
		<span class="flex flex-col md:flex-row gap-6">
			<template v-for="item in items" :key="item._key">
				<VueCard v-if="item._type === 'card'" :icon="item.icon_name" :title="item.title" :description="item.description" class="flex-1" />
				<VueImage v-else-if="item._type === 'imageBlock' && item.image?.asset?._ref" :asset-id="item.image.asset._ref" :caption="item.caption" :has-border="Boolean(item.hasBorder)" class="flex-1 rounded-3xl" />
			</template>
		</span>
	</div>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	.vue-container--has-container :deep(img) {
		@apply rounded-3xl;
	}
</style>