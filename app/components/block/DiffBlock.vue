<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});
</script>

<template>
	<section class="flex flex-col gap-2 w-full">
		<figure class="diff aspect-video grid rounded-2xl md:rounded-3xl" tabindex="0" :class="data.border ? 'border border-base-300' : ''">
			<div class="diff-item-1" role="img" tabindex="0">
				<SanityImage :asset-id="data.images[0].asset._ref" quality="100" format="webp" />
			</div>
			<div class="diff-item-2" role="img">
				<SanityImage :asset-id="data.images[1].asset._ref" quality="100" format="webp" />
			</div>
			<div class="diff-resizer"></div>
		</figure>
		<p class="text-caption text-center italic text-base-content/50">
			{{ data.caption }}
		</p>
	</section>
</template>