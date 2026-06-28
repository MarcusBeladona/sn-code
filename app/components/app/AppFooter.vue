<script setup>
	const socialLinks = [
		{ label: 'GitHub', url: 'https://github.com/marcusbeladona' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/marcusbeladona/' },
	]
</script>

<template>
	<footer class="flex flex-col gap-36 w-full">
		<section id="contact" class="flex flex-col gap-6">
			<div class="flex gap-6 justify-between">
				<h4>{{ $t('footer.contact') }}</h4>
				<button aria-label="Go to top" class="btn-secondary p-0">
					<Icon name="ph:arrow-up" />
				</button>
			</div>
			<hr class="border-dashed text-zinc-300">
			<section class="grid grid-cols-12 gap-6 justify-between">
				<section class="flex flex-col col-span-6">
					<h5 class="underline h-10 content-center">marcusbeladona@gmail.com</h5>
					<h6 class="text-zinc-700 h-10 content-center">+55 (88) 9 8859-4402</h6>
				</section>
				<section class="flex flex-col col-span-3">
					<NuxtLink to="/" class="btn-link -ml-4">Home</NuxtLink>
					<NuxtLink to="/cases" class="btn-link -ml-4">{{ $t('footer.cases') }}</NuxtLink>
					<!-- <NuxtLink to="" class="btn-link -ml-4">{{ $t('footer.blog') }}</NuxtLink> -->
				</section>
				<section class="flex flex-col col-span-3">
					<NuxtLink to="/about" class="btn-link -ml-4">{{ $t('footer.about') }}</NuxtLink>
					<a href="#contact" class="btn-link -ml-4">{{ $t('footer.contact') }}</a>
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
