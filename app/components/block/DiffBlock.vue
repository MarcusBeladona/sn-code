<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})

	const beforeRef = computed(() => props.data?.images?.[0]?.asset?._ref)
	const afterRef = computed(() => props.data?.images?.[1]?.asset?._ref)
</script>

<template>
	<section v-if="beforeRef && afterRef" class="flex flex-col gap-2 w-full">
		<VueSquircle class="w-full" :class="data.border ? 'outline' : ''">
			<figure class="diff aspect-video grid" tabindex="0">
				<div class="diff-item-1" role="img" tabindex="0">
					<SanityImage :asset-id="beforeRef" quality="100" format="webp" />
				</div>
				<div class="diff-item-2" role="img">
					<SanityImage :asset-id="afterRef" quality="100" format="webp" />
				</div>
				<div class="diff-resizer"></div>
			</figure>
		</VueSquircle>
		<p v-if="data.caption" class="text-caption text-center italic text-base-content/50">
			{{ data.caption }}
		</p>
	</section>
</template>
