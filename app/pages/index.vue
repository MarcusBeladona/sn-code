<script setup>
	const query = groq`*[_type in ["case"]]`
	const { data: cases } = await useSanityQuery(query)
</script>

<template>
	<main class="flex flex-col gap-36">
		<!-- Intro -->
		<section class="flex flex-col gap-6">
			<h5 class="md:text-6xl">Olá! Eu sou Marcus Beladona, Designer Digital atualmente em Fortaleza-CE.</h5>
			<span class="flex gap-2">
				<p class="btn-secondary text-sm">UX/UI</p>
				<p class="btn-secondary text-sm">PRODUCT</p>
				<p class="btn-secondary text-sm">BRANDING</p>
			</span>
		</section>
		<!-- Cases -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 justify-between">
				<h4>Cases</h4>
				<NuxtLink to="/cases" class="btn-secondary">Ver Mais</NuxtLink>
			</div>
			<section v-if="cases.length" id="cardsbox" class="flex flex-col gap-6 md:grid md:grid-cols-2">
				<VueCase v-for="item in cases" :item="item" />
			</section>
		</section>
		<!-- Blog -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 justify-between">
				<h4>Blog</h4>
				<NuxtLink to="/blog" class="btn-secondary">Ver Mais</NuxtLink>
			</div>
			<section class="flex gap-6">
				<article v-for="i in 3" class="flex flex-col gap-4">
					<span class="bg-zinc-100 aspect-4/3 rounded-2xl"></span>
					<span>
						<p>25 Jan. 2026</p>
						<h6>The Art of Minimalist Design: A Guide to Efficient Design Systems</h6>
					</span>
				</article>
			</section>
		</section>
	</main>
</template>