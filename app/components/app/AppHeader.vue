<script setup>
	const scrollToContact = () => {
		document.getElementById('contact')?.scrollIntoView({
			behavior: 'smooth',
		})
	}
</script>

<template>
	<header class="navbar p-0 pt-6">
		<!-- Logo -->
		<div class="flex-1">
			<NuxtLink to="/" class="btn-secondary">Marcus Beladona</NuxtLink>
		</div>
		<!-- Menu -->
		<div class="flex gap-2 flex-none">
			<!-- Langs -->
			<div class="dropdown dropdown-center">
				<div tabindex="0" role="button" class="btn-secondary p-0">
					<Icon name="ph:globe" />
				</div>
				<ul tabindex="-1" class="dropdown-content menu z-1 mt-2 p-2 bg-white rounded-2xl border border-stone-300">
					<li><a class="text-nowrap font-mono">pt-BR</a></li>
					<li><a class="text-nowrap font-mono">en-US</a></li>
				</ul>
			</div>
			<!-- Buttons -->
			<NuxtLink to="/about" class="btn-secondary hidden md:flex">Sobre</NuxtLink>
			<button @click="scrollToContact" class="hidden md:flex">Contato</button>
			<!-- Mobile Menu -->
			<div class="btn p-0 h-10 w-10 dropdown dropdown-bottom dropdown-end md:hidden">
				<div tabindex="0" role="button" class="btn-primary p-0">
					<Icon name="ph:list" />
				</div>
				<ul tabindex="1" class="dropdown-content menu z-1 mt-2 gap-2 justify-center items-center p-4 bg-white rounded-2xl border border-stone-200">
					<li class="w-full">
						<NuxtLink to="/about" class="btn-secondary w-full">Sobre</NuxtLink>
					</li>
					<li>
						<button @click="scrollToContact" class="btn-primary">Contato</button>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	.router-link-exact-active {
		@apply cursor-default bg-zinc-100;
	}
</style>