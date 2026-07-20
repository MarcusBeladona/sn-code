<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})

	const assetId = computed(() => props.data?.video?.asset?._ref)

	const handleClick = () => {
		const modal = document.getElementById(props.data._key)
		modal?.showModal()
	}

	const closeModal = () => {
		const modal = document.getElementById(props.data._key)
		modal?.close()
	}
</script>

<template>
	<figure v-if="assetId" class="flex flex-col gap-2" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<SanityFile :asset-id="assetId">
			<template #default="{ src }">
				<video
					autoplay
					loop
					muted
					width="100%"
					@click="handleClick"
					preload="metadata"
					:alt="data.caption || 'video'"
					class="rounded-2xl md:rounded-3xl cursor-pointer hover:scale-101 duration-150"
					:class="data.border ? 'outline' : ''"
				>
					<source :src="src" />
				</video>
			</template>
		</SanityFile>
		<figcaption v-if="data.caption" class="w-full text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>

		<dialog :id="data._key" class="modal outline-none">
			<div
				@click="closeModal"
				class="modal-box p-6 bg-transparent flex items-center justify-center rounded-none w-full h-full max-w-screen max-h-screen"
			>
				<SanityFile :asset-id="assetId">
					<template #default="{ src }">
						<video
							autoplay
							loop
							muted
							controls
							width="100%"
							preload="metadata"
							:alt="data.caption || 'video'"
							class="max-w-full max-h-full w-fit h-auto lg:h-full object-contain rounded-2xl md:rounded-3xl"
						>
							<source :src="src" />
						</video>
					</template>
				</SanityFile>
			</div>
		</dialog>
	</figure>
</template>
