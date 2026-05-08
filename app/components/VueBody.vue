<script setup>
	const props = defineProps({
		body: {
			type: Object,
			required: true
		},
	})
	const components = {
		types: {
			// Example of handling caption and attribution in a custom component
			image: props => h(VueImage, {
				assetId: props.value.asset._ref,
				caption: props.value.caption
			})
		},
	}
</script>

<template>
	<section class="prose">
		<SanityContent :value="body" :components="components" />
	</section>
</template>