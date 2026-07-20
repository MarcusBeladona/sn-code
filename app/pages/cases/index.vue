<script setup>
	const { t } = useI18n()
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && visible == true && language == $language] | order(orderRank)`
	const { data: cases } = await useSanityQuery(query, { language })

	useSeoMeta({
		title: () => t('seo.casesTitle'),
		description: () => t('seo.casesDescription'),
		ogTitle: () => t('seo.casesTitle'),
		ogDescription: () => t('seo.casesDescription'),
	})
</script>

<template>
	<main class="w-full flex flex-col gap-6">
		<section class="flex items-end gap-6">
			<h4 class="text-nowrap">Cases</h4>
			<hr class="pb-3 border-dashed w-full text-base-content/12">
		</section>

		<section v-if="cases?.length" class="flex flex-col gap-6 md:grid md:grid-cols-3">
			<NuxtLink v-for="item in cases" :to="'/cases/' + item.slug.current" class="w-full h-fit md:relative rounded-2xl md:rounded-3xl overflow-clip group outline md:outline-none">
				<figure class="">
					<SanityImage :asset-id="item.thumb.asset._ref" quality="100" format="webp" class="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
				</figure>

				<span class="flex flex-col p-4 md:p-6 bg-base-200 md:bg-black/0 md:bg-linear-180 justify-end md:from-black/0 md:to-black/80 md:absolute md:inset-0 md:opacity-0 group-hover:opacity-100 transition duration-300">
					<p class="md:text-white">{{ item.title }}</p>
					<VueTags :list="item.tags" class="[&_p]:md:text-white" />
				</span>
			</NuxtLink>
		</section>
	</main>
</template>
