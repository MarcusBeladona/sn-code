<script setup>
	import { Squircle } from '@squircle-js/vue'

	const props = defineProps({
		cornerRadius: { type: Number, default: undefined },
		cornerSmoothing: { type: Number, default: 0.8 },
	})

	const { cornerRadius: responsiveRadius } = useSquircleRadius()
	const radius = computed(() => props.cornerRadius ?? responsiveRadius.value)
</script>

<template>
	<Squircle :corner-radius="radius" :corner-smoothing="cornerSmoothing" class="overflow-clip">
		<slot />
	</Squircle>
</template>
