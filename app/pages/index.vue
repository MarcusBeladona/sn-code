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
				<p class="flex justify-center items-center text-zinc-900 bg-zinc-100 px-4 border border-zinc-200 rounded-full w-fit h-10">UX/UI Designer</p>
				<p class="flex justify-center text-zinc-900 items-center bg-zinc-100 px-4 border border-zinc-200 rounded-full h-10">Product Designer</p>
			</span>
		</section>
		<!-- Cases -->
		<section v-if="cases.length" class="flex flex-col gap-6 md:grid md:grid-cols-2">
			<VueCase v-for="item in cases" :item="item" />
		</section>
	</main>
</template>
