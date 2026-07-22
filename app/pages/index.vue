<script setup>
	const { t } = useI18n()
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && bookmark == true && language == $language]
  | order(orderRank)`
	const { data: cases } = await useSanityQuery(query, { language })

	useSeoMeta({
		title: () => t('seo.homeTitle'),
		description: () => t('seo.homeDescription'),
		ogTitle: () => t('seo.homeTitle'),
		ogDescription: () => t('seo.homeDescription'),
	})
</script>

<template>
	<main class="flex flex-col gap-24 lg:gap-36">
		<!-- Intro -->
		<section class="flex flex-col gap-6">
			<span class="flex items-center gap-2">
				<NuxtImg src="/img/avatar.png" alt="Avatar" width="32" height="32" format="webp" class="rounded-full" />
				<span class="flex justify-center items-center gap-1.5 bg-green-50 pr-4 pl-3.5 border border-green-600 rounded-full w-fit h-8">
					<Icon name="ph:circle-fill" size="6" class="text-green-700 animate-pulse" />
					<p class="text-green-700 text-sm">{{ $t('home.disponibility') }}</p>
				</span>
			</span>
			<h1 class="text-hero">{{ $t('home.intro') }}</h1>
			<span class="flex items-center gap-2 mt-2 flex-wrap">
				<p class="badge">PRODUCT</p>
				<p class="badge">UX/UI</p>
				<span class="badge bg-linear-[-90deg,#0047FF_0%,#00B1FD_97%] pr-4 pl-3 gap-1 border-none h-7.5">
					<img src="../assets/icons/sparkle.svg" width="16" height="16" alt="sparkle icon">
					<p class="text-white text-sm">AI</p>
				</span>
			</span>
		</section>
		<!-- Cases -->
		<section v-if="cases?.length" class="flex flex-col gap-6">
			<div class="flex justify-between items-center gap-6">
				<h2 class="mb-1">{{ $t('home.cases') }}</h2>
				<NuxtLink to="/cases" class="btn-secondary">{{ $t('home.seeMore') }}</NuxtLink>
			</div>
			<section class="flex flex-col gap-6 md:grid md:grid-cols-3">
				<VueCard v-for="item in cases" :key="item._id" :item="item" />
			</section>
		</section>
	</main>
</template>
