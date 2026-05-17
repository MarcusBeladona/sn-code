<script setup>
	const email = 'marcusbeladona@gmail.com'
	const socialLinks = [
		{
			label: 'GitHub',
			url: 'https://github.com/marcusbeladona'
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/marcusbeladona/'
		}
	]

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email)
		} catch (error) {
			console.error('Failed to copy email:', error)
		}
	}
</script>

<template>
	<footer class="flex flex-col gap-24 w-full">
		<!-- Contact Card -->
		<article id="contact" class="flex edge p-12 lg:gap-12 flex-col md:flex-row">
			<!-- Contact Information -->
			<span class="flex flex-col justify-center items-center md:items-start gap-4 md:gap-6">
				<h2 class="md:min-w-90 text-nowrap text-2xl text-center md:text-start md:text-4xl lg:text-5xl">
					Gostou do que viu?<br>Vamos conversar!</h2>
				<!-- Field Container -->
				<span class="flex flex-col gap-4 items-center md:items-start">
					<!-- Field -->
					<span class="flex items-center bg-white border border-zinc-200 overflow-hidden rounded-xl w-fit">
						<p class="content-center px-4 border-zinc-200 border-r h-full">{{ email }}</p>
						<button type="button" aria-label="Copiar e-mail" @click="copyToClipboard" class="btn-secondary border-none p-0 rounded-none">
							<Icon name="ph:copy" />
						</button>
					</span>
					<a :href="`mailto:${email}`" class="btn-primary">
						<Icon name="ph:arrow-square-out" />
						Abrir
					</a>
				</span>
			</span>
			<!-- Image Container -->
			<span class="order-first md:order-last w-full">
				<NuxtImg src="img/jumping-opendoodles.svg" class="w-full max-w-[512px] h-fit object-contain"></NuxtImg>
			</span>
		</article>
		<!-- Real Footer -->
		<span class="flex flex-wrap justify-center md:justify-between items-center gap-4 pb-4 w-full">
			<p>{{ new Date().getFullYear() }} &copy; Marcus Beladona&trade;</p>
			<span class="flex lg:-mr-4">
				<a v-for="link in socialLinks" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="btn-link">
					<Icon name="ph:arrow-square-out" />
					{{ link.label }}
				</a>
			</span>
		</span>
	</footer>
</template>