<script setup>
	const socialLinks = [
		{ label: 'GitHub', url: 'https://github.com/marcusbeladona' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/marcusbeladona/' },
	]

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
</script>

<template>
	<footer class="flex flex-col gap-36 w-full">
		<section id="contact" class="flex flex-col gap-6">
			<div class="flex justify-between items-center gap-6">
				<h4>{{ $t('footer.contact') }}</h4>
				<button aria-label="Back to Top" @click="scrollToTop" class="p-0 btn-secondary">
					<Icon name="ph:arrow-up" />
				</button>
			</div>
			<hr class="border-dashed text-base-content/12">
			<section class="justify-between flex flex-col gap-6 md:grid grid-cols-12">
				<section class="flex flex-col col-span-6">
					<a href="mailto:marcusbeladona@gmail.com" class="content-center h-10 underline w-fit">marcusbeladona@gmail.com</a>
					<p class="content-center h-10 text-base-content/70">+55 (88) 9 8859-4402</p>
				</section>
				<section class="flex gap-6 col-span-6">
					<section class="flex flex-col w-full">
						<NuxtLink to="/" class="-ml-4 btn-link">Home</NuxtLink>
						<NuxtLink to="/cases" class="-ml-4 btn-link">{{ $t('footer.cases') }}</NuxtLink>
						<!-- <NuxtLink to="" class="-ml-4 btn-link">{{ $t('footer.blog') }}</NuxtLink> -->
					</section>
					<section class="flex flex-col w-full">
						<NuxtLink to="/about" class="-ml-4 btn-link">{{ $t('footer.about') }}</NuxtLink>
						<a href="#contact" class="-ml-4 btn-link">{{ $t('footer.contact') }}</a>
					</section>
				</section>
			</section>
		</section>
		<span class="flex flex-wrap justify-center md:justify-between items-center gap-4 pb-4 w-full">
			<p>{{ new Date().getFullYear() }} &copy; Marcus Beladona</p>
			<span class="flex lg:-mr-4">
				<a v-for="link in socialLinks" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="btn-link">
					<Icon name="ph:arrow-square-out" />
					{{ link.label }}
				</a>
			</span>
		</span>
	</footer>
</template>
