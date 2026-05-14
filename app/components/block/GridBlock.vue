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
	const components = {
		types: {
			imageBlock: props => h(VueImage, {
				assetId: props.value.image.asset._ref,
				fullSpan: false,
				hasBorder: props.value.hasBorder,
				caption: props.value.caption
			}),
			card: props => h(VueCard, {
				icon: props.value.icon_name,
				title: props.value.title,
				description: props.value.description
			}),
		},
	}
	const even = props.items.length % 2 === 0;
</script>

<template>
	<span id="grid" :class="even ? 'grid-cols-2' : 'grid-cols-3'" class="grid  gap-6 col-span-full">
		<template v-for="item in items">
			<SanityImage v-if="item._type == 'imageBlock'" :asset-id="item.image.asset._ref" :class="even ? 'rounded-3xl' : 'rounded-2xl'" class="col-span-1" />
			<VueCard v-if="item._type == 'card'" :icon="item.icon_name" :title="item.title" :description="item.description" :class="even ? 'rounded-3xl' : 'rounded-2xl'" class="col-span-1" />
		</template>
	</span>
</template>