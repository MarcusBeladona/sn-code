<script setup>
	const props = defineProps({
		fullSpan: {
			type: Boolean,
			default: true
		},
		items: {
			type: Array,
		},
	})
	console.log(props.items);

	const even = props.items.length % 2 === 0;
</script>

<template>
	<span id="grid" :class="even ? 'grid-cols-2' : 'grid-cols-3'" class="grid gap-6 col-span-full">
		<template v-for="item in items">
			<SanityImage v-if="item._type == 'image'" :asset-id="item.asset._ref" class="col-span-1 rounded-2xl" />
			<CardBlock v-else-if="item._type == 'card'" :icon="item.icon_name" :title="item.title" :description="item.description" :class="even ? 'rounded-3xl' : 'rounded-2xl'" class="col-span-1" />
		</template>
	</span>
</template>