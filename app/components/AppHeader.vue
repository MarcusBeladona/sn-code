<script setup>
	// Contact Scroller
	const contactElement = ref(null)
	onMounted(() => {
		contactElement.value = document.getElementById('contact')
	})
	const scrollToContact = () => {
		closeOverlay()
		contactElement.value?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	// Check If Home
	const route = useRoute()
	const isHome = computed(() => route.path === '/')

	// Toggle Overlay Menu
	const isOverlayOpen = ref(false)
	const toggleOverlay = () => {
		isOverlayOpen.value = !isOverlayOpen.value
	}

	// Close Overlay Menu
	const closeOverlay = async () => {
		isOverlayOpen.value = false
	}
</script>

<template>
	<header class="flex justify-between items-center gap-4 pt-6 w-full">
		<NuxtLink to="/" @click="closeOverlay" class="animate-appear button">
			<Icon v-show="!isHome" name="ph:arrow-left" size="20" />
			Marcus Beladona
		</NuxtLink>
		<span class="flex gap-2">
			<!-- <NuxtLink to="/lang" class="flex items-center px-5 border border-black rounded-full h-10 font-medium">
				<Icon name="ph:globe" size="20" />
			</NuxtLink> -->
			<button class="md:hidden p-2 w-10 h-10" @click="toggleOverlay">
				<TransitionGroup name="fade">
					<Icon v-if="!isOverlayOpen" name="ph:list" size="20" />
					<Icon v-else name="ph:x" size="20" />
				</TransitionGroup>
			</button>
			<NuxtLink to="/about" @click="closeOverlay" class="hidden md:flex button">
				Sobre
			</NuxtLink>
			<button @click="scrollToContact"
			class="hidden md:flex bg-zinc-900 hover:bg-zinc-100 border-zinc-900 hover:border-zinc-200 text-white hover:text-zinc-900">
				Contato
			</button>
		</span>
		<!-- Mobile Menu Overlay -->
		<Transition name="fade">
			<span v-if="isOverlayOpen"
			class="top-22 right-0 z-50 fixed flex flex-col justify-center items-center gap-4 bg-zinc-100 mx-6 p-4 border border-zinc-200 rounded-2xl w-fit h-fit">
				<NuxtLink to="/about" @click="closeOverlay" class="w-full">
					Sobre
				</NuxtLink>
				<button @click="scrollToContact"
				class="bg-zinc-900 hover:bg-zinc-100 px-5 py-2 border-zinc-900 hover:border-zinc-200 rounded-full text-white hover:text-zinc-900">
					Contato
				</button>
			</span>
		</Transition>
	</header>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	.router-link-exact-active {
		@apply hover:bg-white border-zinc-200 hover:border-zinc-200 cursor-default;
	}

	a {
		@apply hover:bg-zinc-100 border-zinc-900 hover:border-zinc-200;
	}

	/* Transition styles */
	.fade-enter-active,
	.fade-leave-active {
		transition: all 300ms ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		position: absolute;
	}
</style>