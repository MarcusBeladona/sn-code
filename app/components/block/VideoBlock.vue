<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
		clip: { type: Boolean, default: true },
	})

	const assetId = computed(() => props.data?.video?.asset?._ref)
	const borderClass = computed(() => (props.data.border ? 'border border-base-300' : ''))
</script>

<template>
	<figure v-if="assetId" class="flex flex-col gap-2" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<VueModal :clip="clip" :squircle-class="['hover:scale-101 duration-150', borderClass]" modal-squircle-class="max-w-full max-h-full h-full">
			<SanityFile :asset-id="assetId">
				<template #default="{ src }">
					<video autoplay loop muted preload="metadata" :alt="data.caption || 'video'" class="w-full" :class="[!clip && 'hover:scale-101 duration-150', !clip && outlineClass]">
						<source :src="src" />
					</video>
				</template>
			</SanityFile>

			<template #modal>
				<SanityFile :asset-id="assetId">
					<template #default="{ src }">
						<video autoplay loop muted controls preload="metadata" :alt="data.caption || 'video'" class="max-h-full max-w-full">
							<source :src="src" />
						</video>
					</template>
				</SanityFile>
			</template>
		</VueModal>

		<figcaption v-if="data.caption" class="w-full text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>
	</figure>
</template>
