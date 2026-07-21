<script setup>
	import { squircleDirective as vSquircle } from "@squircle-js/vue";
	const width = ref(0)
	const updateWidth = () => {
		width.value = window.innerWidth
	}
	onMounted(() => {
		updateWidth()
		window.addEventListener('resize', updateWidth)
	})
	onUnmounted(() => {
		window.removeEventListener('resize', updateWidth)
	})
	const radius = computed(() => width.value >= 768 ? 24 : 16)

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
			<h2 class="text-nowrap">Cases</h2>
			<hr class="pb-3 border-dashed w-full text-base-content/12">
		</section>

		<section v-if="cases?.length" class="flex flex-col gap-6 md:grid md:grid-cols-3">
			<NuxtLink v-squircle="{ cornerRadius: radius, cornerSmoothing: 0.8 }" v-for="item in cases" :to="'/cases/' + item.slug.current" class="w-full h-fit md:relative overflow-clip group border border-base-300" :class="item.border ? '' : 'md:border-none'">
				<figure class="w-full h-full aspect-4/3">
					<SanityImage :asset-id="item.thumb.asset._ref" quality="100" format="webp" class="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
				</figure>

				<span class="flex flex-col p-4 md:p-6 bg-base-200 md:bg-black/0 md:bg-linear-180 justify-end md:from-black/0 md:to-black/80 md:absolute md:inset-0 md:opacity-0 group-hover:opacity-100 transition duration-300">
					<h5 class="md:text-white">{{ item.title }}</h5>
					<VueTags :list="item.tags" class="[&_p]:md:text-white" />
				</span>
			</NuxtLink>
		</section>
	</main>
</template>
