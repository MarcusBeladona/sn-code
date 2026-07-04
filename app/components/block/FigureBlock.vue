<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});

	const handleClick = () => {
		const modal = document.getElementById(props.data._key);
		if (modal) {
			modal.showModal();
		}
	};

	const closeModal = () => {
		const modal = document.getElementById(props.data._key);
		if (modal) {
			modal.close();
		}
	};
</script>

<template>
	<figure class="flex flex-col gap-3" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<SanityImage :asset-id="data.image.asset._ref" @click="handleClick" quality="100" format="webp" class="w-full rounded-2xl cursor-pointer contain-content hover:scale-101 duration-150" :class="data.border ? 'border border-base-300' : ''" />
		<figcaption v-if="data.caption" class="text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>

		<dialog :id="data._key" class="modal outline-none">
			<div @click="closeModal" class="modal-box p-6 bg-transparent flex items-center justify-center rounded-none h-full w-full max-w-dvw max-h-dvh">
				<SanityImage as="button" :asset-id="data.image.asset._ref" quality="100" format="webp" class="max-w-full max-h-full w-auto h-auto rounded-2xl" :class="data.border ? 'border border-base-300' : ''" />
			</div>
		</dialog>

	</figure>

</template>
