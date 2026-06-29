<script setup>
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && language == $language] | order(orderRank)  {
    _id,
    title,
    slug,
    description,
    tags,
    release,
    thumb
  }`
	const { data: cases } = await useSanityQuery(query, { language })
</script>

<template>
	<main class="flex flex-col gap-36">
		<!-- Cases -->
		<section class="flex flex-col gap-6">
			<div class="flex items-end gap-6">
				<h4 class="text-nowrap">Cases</h4>
				<hr class="pb-3.5 border-dashed w-full text-zinc-300">
			</div>
			<section v-if="cases?.length" id="cardsbox" class="gap-6 grid grid-cols-3">
				<VueCase v-for="item in cases" :key="item._id" :item="item" />
			</section>
		</section>
	</main>
</template>
