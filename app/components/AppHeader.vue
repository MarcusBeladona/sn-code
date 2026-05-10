<script setup>
	const route = useRoute()
	const isHome = computed(() => route.path === '/')
	const isOverlayOpen = ref(false)
	const mobileMenuPanelId = 'mobile-menu-panel'

	const closeOverlay = () => {
		isOverlayOpen.value = false
	}

	const toggleOverlay = () => {
		isOverlayOpen.value = !isOverlayOpen.value
	}

	const scrollToContact = () => {
		closeOverlay()
		document.getElementById('contact')?.scrollIntoView({
			behavior: 'smooth',
		})
	}
</script>

<template>
	<header class="flex justify-between items-center gap-4 pt-6 w-full">
		<NuxtLink to="/" @click="closeOverlay" class="animate-appear button-secondary">
			<span class="inline-flex items-center min-w-0" :class="!isHome ? 'gap-1' : 'gap-0'">
				<span class="home-link__iconWrap" :class="{ 'home-link__iconWrap--open': !isHome }" aria-hidden="true">
					<Icon name="ph:arrow-left" size="20" class="home-link__icon" :class="{ 'home-link__icon--visible': !isHome }" />
				</span>
				<span>Marcus Beladona</span>
			</span>
		</NuxtLink>
		<span class="flex gap-2">
			<NuxtLink to="/about" @click="closeOverlay" class="hidden md:flex button-secondary">Sobre</NuxtLink>
			<button @click="scrollToContact" class="hidden md:flex button-primary">Contato</button>
			<!-- Mobile Menu Toggle -->
			<button type="button" @click="toggleOverlay" :aria-expanded="isOverlayOpen" :aria-controls="mobileMenuPanelId" class="button-primary md:hidden p-2 w-10 h-10">
				<Transition name="iconFade" mode="out-in">
					<Icon v-if="!isOverlayOpen" name="ph:list" size="20" />
					<Icon v-else name="ph:x" size="20" />
				</Transition>
			</button>
		</span>
		<!-- Mobile Menu Overlay -->
		<AppMenu :open="isOverlayOpen" @close="closeOverlay" @contact="scrollToContact" />
	</header>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	.router-link-exact-active {
		@apply hover:bg-white border-zinc-200 hover:border-zinc-200 cursor-default;
	}

	/* Home link: slot width and icon fade run together */
	.home-link__iconWrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		max-width: 0;
		transition: max-width 200ms ease;
	}

	.home-link__iconWrap--open {
		max-width: 1.75rem;
	}

	.home-link__icon {
		opacity: 0;
		transform: translateY(-2px);
		transition: opacity 200ms ease, transform 200ms ease;
		flex-shrink: 0;
	}

	.home-link__icon--visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Transition styles */
	.iconFade-enter-active,
	.iconFade-leave-active {
		transition: opacity 200ms ease, transform 200ms ease;
	}

	.iconFade-enter-from,
	.iconFade-leave-to {
		opacity: 0;
		transform: translateY(-2px);
	}
</style>