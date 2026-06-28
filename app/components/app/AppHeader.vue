<script setup>
	const { locale, setLocale } = useI18n()
	const locales = ['pt-BR', 'en-US']

	const scrollToContact = () => {
		document.getElementById('contact')?.scrollIntoView({
			behavior: 'smooth',
		})
	}
</script>

<template>
	<header class="navbar p-0 pt-6">
		<!-- Left Pane -->
		<div class="flex-1 flex gap-2">
			<NuxtLink to="/" class="btn-secondary">Marcus Beladona</NuxtLink>
			<NuxtLink to="/cases" class="btn-secondary hidden md:flex">Cases</NuxtLink>
			<NuxtLink to="/about" class="btn-secondary hidden md:flex">{{ $t('nav.about') }}</NuxtLink>
		</div>
		<!-- Right Pane -->
		<div class="flex gap-2">
			<!-- Lang Button -->
			<div class="dropdown dropdown-center">
				<div tabindex="0" role="button" aria-label="toggle-lang" class="btn-secondary p-0">
					<Icon name="ph:globe" />
				</div>
				<ul tabindex="-1" class="dropdown-content menu z-1 mt-2 p-2 bg-white rounded-2xl border border-stone-300">
					<li v-for="code in locales" :key="code">
						<button type="button" class="text-nowrap font-mono w-full text-left" :class="{ 'font-bold': locale === code }" @click="setLocale(code)">
							{{ code }}
						</button>
					</li>
				</ul>
			</div>
			<!-- Contact Button -->
			<button @click="scrollToContact" class="hidden md:flex">{{ $t('nav.contact') }}</button>
			<!-- Mobile Menu Button -->
			<div class="btn p-0 h-10 w-10 dropdown dropdown-bottom dropdown-end md:hidden">
				<div tabindex="0" role="button" aria-label="menu-button" class="btn-primary p-0">
					<Icon name="ph:list" />
				</div>
				<ul tabindex="1" class="dropdown-content menu z-1 mt-2 gap-2 justify-center items-center p-4 bg-white rounded-2xl border border-stone-200">
					<li class="w-full">
						<NuxtLink to="/about" class="btn-secondary w-full">{{ $t('nav.about') }}</NuxtLink>
					</li>
					<li>
						<button @click="scrollToContact" class="btn-primary">{{ $t('nav.contact') }}</button>
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
