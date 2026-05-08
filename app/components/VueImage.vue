<script setup>
	const props = defineProps({
		assetId: {
			type: String,
			required: true
		},
		caption: {
			type: String,
		}
	})
</script>

<template>
	<figure>
		<SanityImage :asset-id="assetId" />
		<figcaption>{{ caption }}</figcaption>
	</figure>
</template>
