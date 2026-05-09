<script setup>
	const props = defineProps({
		open: {
			type: Boolean,
			required: true
		},
		onClose: {
			type: Function,
			required: true
		},
		onGoAbout: {
			type: Function,
			required: true
		},
		onGoContact: {
			type: Function,
			required: true
		}
	})

	const panelId = 'mobile-menu-panel'
	let previouslyFocused = null
	let previousOverflow = null

	const focusFirst = () => {
		// Focus the first actionable element when the overlay opens.
		const panel = document.getElementById(panelId)
		const first =
			panel?.querySelector(
				'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
			) ?? null

		first?.focus?.()
	}

	watch(
		() => props.open,
		async (isOpen) => {
			if (typeof window === 'undefined') return

			if (isOpen) {
				previouslyFocused = document.activeElement
				previousOverflow = document.body.style.overflow
				document.body.style.overflow = 'hidden'
				await nextTick()
				focusFirst()
			} else {
				document.body.style.overflow = previousOverflow ?? ''
				previousOverflow = null
				previouslyFocused?.focus?.()
				previouslyFocused = null
			}
		},
		{ immediate: true }
	)

	const onKeydown = (e) => {
		if (!props.open) return
		if (e.key === 'Escape') props.onClose()
	}

	onMounted(() => {
		window.addEventListener('keydown', onKeydown)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('keydown', onKeydown)
	})
</script>

<template>
	<Teleport to="body">
		<div v-if="open">
			<!-- Backdrop -->
			<Transition name="mobileMenuBackdrop" appear>
				<div role="presentation" @click.self="onClose" class="fixed inset-0 bg-black/30 z-40" />
			</Transition>

			<!-- Panel -->
			<Transition name="mobileMenuPanel" appear>
				<nav :id="panelId" role="dialog" aria-modal="true" class="top-22 right-0 z-50 fixed flex flex-col justify-center items-center gap-4 bg-zinc-100 mx-6 p-4 border border-zinc-200 rounded-2xl w-fit h-fit">
					<NuxtLink to="/about" @click="onGoAbout" class="w-full button-secondary">
						Sobre
					</NuxtLink>
					<button type="button" @click="onGoContact" class="bg-zinc-900 hover:bg-zinc-100 px-5 py-2 border-zinc-900 hover:border-zinc-200 rounded-full text-white hover:text-zinc-900">
						Contato
					</button>
				</nav>
			</Transition>
		</div>
	</Teleport>
</template>

<style scoped>

	.mobileMenuBackdrop-enter-active,
	.mobileMenuBackdrop-leave-active {
		transition: opacity 200ms ease;
	}

	.mobileMenuBackdrop-enter-from,
	.mobileMenuBackdrop-leave-to {
		opacity: 0;
	}

	.mobileMenuPanel-enter-active,
	.mobileMenuPanel-leave-active {
		transition: opacity 200ms ease, transform 200ms ease;
	}

	.mobileMenuPanel-enter-from,
	.mobileMenuPanel-leave-to {
		opacity: 0;
		transform: translateY(-8px) scale(0.98);
	}
</style>
