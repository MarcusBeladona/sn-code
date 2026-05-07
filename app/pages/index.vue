<script setup>
	const sanity = useSanity()

	const query = groq`*[_type == "case"]`

	const { data: cases } = await useAsyncData('cases', () =>
		sanity.fetch(query)
	)
</script>

<template>
	<main>
		<AppHeader />
		<!-- Presentation -->
		<section class="flex flex-col gap-6">
			<h2 class="text-4xl md:text-5xl">Olá! Eu sou Marcus Beladona, Designer Digital atualmente em Fortaleza-CE.
			</h2>
			<span class="flex gap-2">
				<p
				class="flex justify-center items-center bg-zinc-100 px-4 border border-zinc-200 rounded-full w-fit h-10">
					UX/UI Designer</p>
				<p
				class="flex justify-center items-center bg-zinc-100 px-4 border border-zinc-200 rounded-full h-10">
					Product Designer</p>
			</span>
		</section>
		<!-- Articles Grid -->
		<section class="flex flex-col gap-6 md:grid md:grid-cols-2">
			<AppArticleCard
			v-for="item in cases"
			:key="item._id"
			:article="item" />
		</section>
		<AppFooter />
	</main>
</template>
