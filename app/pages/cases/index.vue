<script setup>
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && language == $language] | order(orderRank)`
	const { data: cases } = await useSanityQuery(query, { language })
</script>

<template>
	<main class="flex flex-col gap-36">
		<!-- Cases -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 items-end">
				<h4 class="text-nowrap">Cases</h4>
				<hr class="border-dashed text-zinc-300 w-full pb-3.5">
			</div>
			<section v-if="cases?.length" id="cardsbox" class="grid grid-cols-3 gap-6">
				<VueCase v-for="item in cases" :key="item._id" :item="item" />
			</section>
		</section>
	</main>
</template>
