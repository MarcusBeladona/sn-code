<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})

	const assetId = computed(() => props.data?.image?.asset?._ref)

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
	<figure
		v-if="assetId"
		class="flex flex-col gap-2 h-fit hover:scale-101 duration-150"
		:class="data.fullWidth ? 'w-full ' : 'w-178'"
	>
		<SanityImage
			:asset-id="assetId"
			@click="handleClick"
			quality="100"
			format="webp"
			:alt="data.caption || 'image'"
			class="w-full cursor-pointer contain-content rounded-2xl md:rounded-3xl"
			:class="data.border ? 'outline' : ''"
		/>
		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>

		<dialog :id="data._key" class="modal outline-none">
			<div
				@click="closeModal"
				class="modal-box bg-transparent flex items-center justify-center w-full h-full max-w-screen max-h-screen rounded-none"
			>
				<SanityImage
					:asset-id="assetId"
					quality="100"
					format="webp"
					class="max-w-full max-h-full h-auto lg:h-full object-contain rounded-2xl md:rounded-3xl"
				/>
			</div>
		</dialog>
	</figure>
</template>
