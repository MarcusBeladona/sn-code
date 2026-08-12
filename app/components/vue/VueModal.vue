<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
		rounded: { type: Boolean, default: true },
	})

	const dialog = ref(null)
	function open() {
		dialog.value?.showModal()
	}
	function close() {
		dialog.value?.close()
	}

	const assetType = computed(() => {
		if (props.data?._type === 'image' || props.data?._type === 'figureBlock') return 'image'
		if (props.data?._type === 'videoBlock') return 'video'
		return null
	})

	const assetId = computed(() => props.data?.image?.asset?._ref || props.data?.video?.asset?._ref || props.data?.asset?._ref || null)

	const classes = computed(() => {
		const border = props.data?.border ? 'edge' : 'border-none'
		const rounded = props.rounded ? 'squircle' : 'rounded-none'
		return `${border} ${rounded}`
	})

	const borderClass = computed(() => props.data?.border ? 'edge' : 'border-none')
</script>

<template>
	<!-- Preview -->
	<div class="cursor-pointer" @click="open" :class="classes">
		<SanityImage v-if="assetType === 'image'" :asset-id="assetId" quality="100" format="webp" :alt="data?.caption || 'image'" class="w-full h-auto hover:scale-101 transition duration-300" />

		<SanityFile v-else-if="assetType === 'video'" :asset-id="assetId">
			<template #default="{ src }">
				<video autoplay loop muted preload="metadata" :alt="data.caption || 'video'" class="w-full h-auto object-contain hover:scale-101 transition duration-300">
					<source :src="src" />
				</video>
			</template>
		</SanityFile>
	</div>

	<!-- Modal -->
	<dialog ref="dialog" class="modal outline-none">
		<div class="modal-box bg-transparent flex items-center justify-center w-full h-full max-w-screen max-h-screen p-6 rounded-none" @click="close">
			<SanityImage v-if="assetType === 'image'" :asset-id="assetId" quality="100" format="webp" :alt="data?.caption || 'image'" class="w-full h-auto max-h-full max-w-full object-contain rounded-none border-none" :class="borderClass" />

			<SanityFile v-else-if="assetType === 'video'" :asset-id="assetId">
				<template #default="{ src }">
					<video autoplay loop controls muted preload="metadata" :alt="data.caption || 'video'" class="w-fit h-auto max-h-full max-w-full object-contain rounded-none border-none" :class="borderClass">
						<source :src="src" />
					</video>
				</template>
			</SanityFile>
		</div>
	</dialog>
</template>
