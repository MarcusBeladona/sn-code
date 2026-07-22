<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
		clip: { type: Boolean, default: true },
	})

	const assetId = computed(() => props.data?.image?.asset?._ref)
	const borderClass = computed(() => (props.data.border ? 'border border-base-300' : ''))
</script>

<template>
	<figure v-if="assetId" class="flex flex-col gap-2 h-fit" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<VueModal :clip="clip" :squircle-class="['w-full h-auto hover:scale-101 duration-150', borderClass]" modal-squircle-class="max-w-full max-h-full w-auto h-full">
			<SanityImage :asset-id="assetId" quality="100" format="webp" :alt="data.caption || 'image'" class="w-full h-full object-scale-down" :class="[!clip && 'hover:scale-101 duration-150', !clip && outlineClass]" />
		</VueModal>

		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>
</template>
