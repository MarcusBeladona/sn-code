<script setup>
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && visible == true && language == $language] | order(orderRank)`
	const { data: cases } = await useSanityQuery(query, { language })

	useSeoMeta({
		title: 'Marcus Beladona Portfolio Site | Cases Page',
		description: 'Product Designer | UX/UI Designer | Digital Designer | Portfolio Site',
		ogTitle: 'Marcus Beladona Portfolio Site | Cases Page',
		ogDescription: 'Product Designer | UX/UI Designer | Digital Designer | Portfolio Site',
	})
</script>

<template>
	<main class="w-full flex flex-col gap-6">
		<section class="flex items-end gap-6">
			<h2 class="text-nowrap">Cases</h2>
			<hr class="pb-3 border-dashed w-full text-base-content/12">
		</section>

		<section v-if="cases?.length" class="flex flex-col gap-6 md:grid md:grid-cols-3">
			<VueCard v-for="item in cases" :key="item._id" :item="item" />
		</section>
	</main>
</template>
