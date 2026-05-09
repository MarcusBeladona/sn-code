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
			})
		},
	}
</script>

<template>
	<div class="prose max-w-max grid grid-cols-12 flex flex-col gap-6">
		<SanityContent :value="body" :components="components" />
	</div>
</template>

<style scoped>

	:deep(*) {
		margin: 0px;
	}

	:deep(:where(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre)) {
		@apply col-span-8 col-start-3;
	}

	:deep(figure) {
		@apply col-span-full;
	}

	:deep(figcaption) {
		@apply text-center;
	}
</style>