<script setup>
	const props = defineProps({
		body: {
			type: Object,
			required: true
		},
	})
	const components = {
		types: {
			image: props => h(VueImage, {
				assetId: props.value.asset._ref,
				caption: props.value.caption
			}),
			imageBlock: props => h(VueImage, {
				assetId: props.value.image.asset._ref,
				isSpanFull: props.value.isSpanFull,
				hasContainer: props.value.hasContainer,
				hasBorder: props.value.hasBorder,
				caption: props.value.caption
			}),
			card: props => h(VueCard, {
				icon: props.value.icon_name,
				title: props.value.title,
				description: props.value.description
			}),
			container: props => h(VueContainer, {
				isSpanFull: Boolean(props.value.isSpanFull),
				hasContainer: Boolean(props.value.hasContainer),
				items: props.value.items ?? []
			}),
		},
	}
</script>

<template>
	<div class="prose max-w-max md:grid grid-cols-12 flex flex-col gap-6">
		<SanityContent :value="body" :components="components" />
	</div>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	:deep(*) {
		margin: 0px;
	}

	:deep(:where(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre)) {
		@apply col-span-8 col-start-3;
	}
</style>