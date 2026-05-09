<script setup>
	const contactElement = ref(null)
	const route = useRoute()
	const isHome = computed(() => route.path === '/')
	const isOverlayOpen = ref(false)
	const mobileMenuPanelId = 'mobile-menu-panel'

	onMounted(() => {
		contactElement.value = document.getElementById('contact')
	})

	const closeOverlay = () => {
		isOverlayOpen.value = false
	}

	const toggleOverlay = () => {
		isOverlayOpen.value = !isOverlayOpen.value
	}

	const scrollToContact = () => {
		closeOverlay()
		contactElement.value?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}
</script>

<template>
	<header class="flex justify-between items-center gap-4 pt-6 w-full">
		<Transition name="iconFade" mode="out-in">
			<NuxtLink to="/" @click="closeOverlay" class="animate-appear button-secondary">
				<Icon v-show="!isHome" name="ph:arrow-left" size="20" class="animate-appear" />
				Marcus Beladona
			</NuxtLink>
		</Transition>
		<span class="flex gap-2">
			<NuxtLink to="/about" @click="closeOverlay" class="hidden md:flex button-secondary">Sobre</NuxtLink>
			<button @click="scrollToContact" class="hidden md:flex button-primary">Contato</button>
			<!-- Mobile Menu Toggle -->
			<button type="button" @click="toggleOverlay" :aria-expanded="isOverlayOpen" :aria-controls="mobileMenuPanelId" class="md:hidden p-2 w-10 h-10">
				<Transition name="iconFade" mode="out-in">
					<Icon v-if="!isOverlayOpen" name="ph:list" size="20" />
					<Icon v-else name="ph:x" size="20" />
				</Transition>
			</button>
		</span>
		<!-- Mobile Menu Overlay -->
		<AppMenu :open="isOverlayOpen" :onClose="closeOverlay" :onGoAbout="closeOverlay" :onGoContact="scrollToContact" />
	</header>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	.router-link-exact-active {
		@apply hover:bg-white border-zinc-200 hover:border-zinc-200 cursor-default;
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