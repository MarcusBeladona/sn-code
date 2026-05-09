<script setup>
	const email = 'marcusbeladona@gmail.com'
	const socialLinks = [
		{
			label: 'Behance',
			url: 'https://www.behance.net/marcusbeladona'
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
		<article id="contact" class="flex flex-col gap-4 md:gap-12 md:grid md:grid-cols-12 bg-zinc-100 p-4 md:p-12 border border-white rounded-3xl  ring ring-zinc-200 overflow-clip">
			<!-- Contact Information -->
			<span class="flex flex-col justify-center gap-4 md:gap-6 md:col-span-6">
				<h2 class="md:min-w-105 text-2xl sm:text-3xl md:text-4xl">Gostou do que viu?<br>Vamos conversar!</h2>
				<!-- Field Container -->
				<span class="flex flex-wrap w-fit items-center gap-2">
					<!-- Field -->
					<span class="flex items-center bg-white border border-zinc-200 rounded-lg h-10.5 overflow-clip">
						<p class="content-center px-4 border-zinc-200 border-r h-full">{{ email }}</p>
						<button type="button" aria-label="Copiar e-mail" @click="copyToClipboard" class="button-secondary active:bg-zinc-200 rounded-none border-none px-2 w-10 h-10">
							<Icon name="ph:copy" size="20" />
						</button>
					</span>
					<NuxtLink :to="`mailto:${email}`" class="button-primary">
						<Icon name="ph:arrow-square-out" size="20" />
						Abrir
					</NuxtLink>
				</span>
			</span>
			<!-- Image Container -->
			<span class="order-first md:order-last md:col-span-6">
				<NuxtImg src="img/jumping-opendoodles.svg" class="w-full max-w-105 h-fit object-cover"></NuxtImg>
			</span>
		</article>
		<!-- Real Footer -->
		<span class="flex flex-wrap justify-center md:justify-between items-center gap-4 pb-4 w-full">
			<p>{{ new Date().getFullYear() }} &copy; Marcus Beladona&trade;</p>
			<span class="flex lg:-mr-4">
				<NuxtLink v-for="link in socialLinks" :key="link.url" :to="link.url" target="_blank" class="flex w-fit h-10 items-center justify-center gap-1 px-4 py-2 text-zinc-700 hover:text-zinc-900">
					<Icon name="ph:arrow-square-out" size="20" />
					{{ link.label }}
				</NuxtLink>
			</span>
		</span>
	</footer>
</template>