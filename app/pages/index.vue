<script setup>
	const query = groq`*[_type in ["case"]]`
	const { data: cases } = await useSanityQuery(query)
</script>

<template>
	<main class="flex flex-col gap-24">
		<!-- Intro -->
		<section class="flex flex-col gap-6">
			<h5 class="md:text-5xl">Olá! Eu sou Marcus Beladona, Designer Digital atualmente em Fortaleza-CE.</h5>
			<span class="flex gap-2">
				<p class="btn-secondary">UX/UI Designer</p>
				<p class="btn-secondary">Product Designer</p>
			</span>
		</section>
		<!-- Cases -->
		<section v-if="cases.length" id="cardsbox" class="flex flex-col gap-24 md:grid md:grid-cols-2">
			<VueCase v-for="item in cases" :item="item" />
		</section>
	</main>
</template>