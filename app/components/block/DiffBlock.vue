<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})

	const beforeRef = computed(() => props.data?.images?.[0]?.asset?._ref)
	const afterRef = computed(() => props.data?.images?.[1]?.asset?._ref)
</script>

<template>
	<section v-if="beforeRef && afterRef" class="flex flex-col gap-2 w-full">
		<figure class="diff aspect-video grid rounded-2xl md:rounded-3xl" tabindex="0" :class="data.border ? 'outline' : ''">
			<div class="diff-item-1" role="img" tabindex="0">
				<SanityImage :asset-id="beforeRef" quality="100" format="webp" />
			</div>
			<div class="diff-item-2" role="img">
				<SanityImage :asset-id="afterRef" quality="100" format="webp" />
			</div>
			<div class="diff-resizer"></div>
		</figure>
		<p v-if="data.caption" class="text-caption text-center italic text-base-content/50">
			{{ data.caption }}
		</p>
	</section>
</template>
