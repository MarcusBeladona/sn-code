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

	const assetId = computed(() => props.data?.image?.asset?._ref || props.data?.video?.asset?._ref)

	const classes = computed(() => {
		const border = props.data?.border ? 'edge' : 'border-none'
		const rounded = props.rounded ? 'squircle' : 'rounded-none'
		return `${border} ${rounded}`
	})

	const borderClass = computed(() => props.data?.border ? 'edge' : 'border-none')
</script>

<template>
	<!-- Preview -->
	<div class="contents cursor-pointer" @click="open">
		<SanityImage v-if="data.image" :asset-id="assetId" quality="100" format="webp" :alt="data?.caption || 'image'" class="w-full h-auto squircle" :class="classes" />

		<SanityFile v-else-if="data.video" :asset-id="assetId">
			<template #default="{ src }">
				<video autoplay loop muted preload="metadata" :alt="data.caption || 'video'" class="w-full h-full object-contain squircle" :class="classes">
					<source :src="src" />
				</video>
			</template>
		</SanityFile>
	</div>

	<!-- Modal -->
	<dialog ref="dialog" class="modal outline-none">
		<div class="modal-box bg-transparent flex items-center justify-center w-full h-full max-w-screen max-h-screen p-6 rounded-none" @click="close">
			<SanityImage v-if="data.image" :asset-id="assetId" quality="100" format="webp" :alt="data?.caption || 'image'" class="w-full h-fit max-h-full max-w-full object-contain rounded-none border-none" :class="borderClass" />

			<SanityFile v-else-if="data.video" :asset-id="assetId">
				<template #default="{ src }">
					<video autoplay loop controls muted preload="metadata" :alt="data.caption || 'video'" class="w-fit h-fit max-h-full max-w-full object-contain rounded-none border-none" :class="borderClass">
						<source :src="src" />
					</video>
				</template>
			</SanityFile>
		</div>
	</dialog>
</template>
