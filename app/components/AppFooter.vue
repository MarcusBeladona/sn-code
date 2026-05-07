<script setup>
	// E-mail Clipboard
	const textToCopy = 'marcusbeladona@gmail.com';
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};
</script>

<template>
	<footer class="flex flex-col gap-24 w-full">
		<!-- Contact Card -->
		<article id="contact"
		class="flex flex-col gap-4 md:gap-12 md:grid md:grid-cols-12 bg-zinc-100 p-4 md:p-12 border border-white rounded-2xl md:rounded-3xl ring ring-zinc-200 overflow-clip">
			<!-- Contact Information -->
			<span class="flex flex-col justify-center gap-4 lg:gap-6 md:col-span-6">
				<h2 class="md:min-w-105 text-3xl sm:text-4xl lg:text-5xl">Gostou do que viu?<br>Vamos conversar!</h2>
				<!-- Field Container -->
				<span class="flex flex-wrap items-center gap-4">
					<!-- Field -->
					<span class="flex items-center bg-white border border-zinc-200 rounded-lg h-10.5 overflow-clip">
						<p class="content-center px-4 border-zinc-200 border-r h-full">marcusbeladona@gmail.com</p>
						<button
						class="hover:bg-zinc-100 px-2 border-none rounded-none rounded-r-lg w-10 h-10 text-zinc-700 hover:text-zinc-900"
						@click="copyToClipboard">
							<Icon name="ph:copy" size="20" />
						</button>
					</span>
					<NuxtLink href="mailto:marcusbeladona@gmail.com"
					class="bg-zinc-900 hover:bg-white border-zinc-900 hover:border-zinc-200 text-white hover:text-zinc-900 button">
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
			<p>2026 &copy; Marcus Beladona&trade;</p>
			<span class="flex gap-2 lg:-mr-4">
				<NuxtLink href="https://www.behance.net/marcusbeladona" target="_blank"
				class="border-none text-zinc-700 hover:text-zinc-900 button">
					<Icon name="ph:arrow-square-out" size="20" />
					Behance
				</NuxtLink>
				<NuxtLink href="https://www.linkedin.com/in/marcusbeladona/" target="_blank"
				class="border-none text-zinc-700 hover:text-zinc-900 button">
					<Icon name="ph:arrow-square-out" size="20" />
					LinkedIn
				</NuxtLink>
			</span>
		</span>
	</footer>
</template>