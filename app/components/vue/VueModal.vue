<script setup>
	const props = defineProps({
		/** Wrap preview (default slot) with VueSquircle */
		clip: { type: Boolean, default: true },
		/** Wrap modal content with VueSquircle; falls back to `clip` when unset */
		clipModal: { type: Boolean, default: undefined },
		cornerRadius: { type: Number, default: undefined },
		cornerSmoothing: { type: Number, default: 0.8 },
		/** Classes on the preview squircle / wrapper */
		squircleClass: { type: [String, Object, Array], default: undefined },
		/** Classes on the modal squircle / wrapper */
		modalSquircleClass: { type: [String, Object, Array], default: undefined },
	})

	const dialog = ref(null)

	const useClipModal = computed(() => props.clipModal ?? props.clip)

	function open() {
		dialog.value?.showModal()
	}

	function close() {
		dialog.value?.close()
	}
</script>

<template>
	<!-- Preview: click to open -->
	<div class="contents cursor-pointer" @click="open">
		<VueSquircle v-if="clip" :corner-radius="cornerRadius" :corner-smoothing="cornerSmoothing" :class="squircleClass">
			<slot />
		</VueSquircle>
		<slot v-else />
	</div>

	<!-- Overlay -->
	<dialog ref="dialog" class="modal outline-none">
		<div class="modal-box bg-transparent flex items-center justify-center w-full h-full max-w-screen max-h-screen rounded-none p-6" @click="close">
			<VueSquircle v-if="useClipModal" :corner-radius="cornerRadius" :corner-smoothing="cornerSmoothing" :class="modalSquircleClass ?? 'w-full h-full'">
				<slot name="modal">
					<slot />
				</slot>
			</VueSquircle>
			<template v-else>
				<slot name="modal">
					<slot />
				</slot>
			</template>
		</div>
	</dialog>
</template>
