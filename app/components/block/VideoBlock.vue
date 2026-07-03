<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});
</script>

<template>
	<figure class="flex flex-col gap-3 w-full">
		<SanityFile :asset-id="data.video.asset._ref">
			<template #default="{ src }">
				<video autoplay loop muted width="100%" preload="metadata" alt="video" class="rounded-2xl">
					<source :src="src" type="video/webm" />
				</video>
			</template>
		</SanityFile>
		<figcaption v-if="data.caption" class="w-full text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>
</template>