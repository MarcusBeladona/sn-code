<script setup>
	const props = defineProps({
		open: {
			type: Boolean,
			required: true
		},
	})

	const emit = defineEmits(['close', 'contact'])

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
		if (e.key === 'Escape') emit('close')
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
		<!-- v-if must be on each Transition's root so leave hooks run before unmount -->
		<Transition name="mobileMenuBackdrop" appear>
			<div
				v-if="open"
				role="presentation"
				@click.self="emit('close')"
				class="fixed inset-0 bg-black/30 z-40"
			/>
		</Transition>
		<Transition name="mobileMenuPanel" appear>
			<nav
				v-if="open"
				:id="panelId"
				role="dialog"
				aria-modal="true"
				class="top-22 right-0 z-50 fixed flex flex-col justify-center items-center gap-4 bg-zinc-100 mx-6 p-4 border border-zinc-200 rounded-3xl w-fit h-fit"
			>
				<NuxtLink to="/about" @click="emit('close')" class="w-full button-secondary">
					Sobre
				</NuxtLink>
				<button type="button" class="button-primary w-full" @click="emit('contact')">
					Contato
				</button>
			</nav>
		</Transition>
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
