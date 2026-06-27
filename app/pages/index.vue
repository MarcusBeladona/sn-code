<script setup>
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && bookmark == true && language == $language] | order(orderRank)`
	const { data: cases } = await useSanityQuery(query, { language })
</script>

<template>
	<main class="flex flex-col gap-36">
		<!-- Intro -->
		<section class="flex flex-col gap-6">
			<span class="flex items-center gap-2">
				<NuxtImg src="/img/avatar.png" alt="Avatar" class="w-8 h-8 rounded-full" />
				<span class="flex items-center gap-1.5 bg-green-50 rounded-full pl-3.5 pr-4 h-8 justify-center w-fit border border-green-600">
					<Icon name="ph:circle-fill" size="6" class="text-green-600 animate-pulse" />
					<p class="text-sm text-green-600">{{ $t('home.disponibility') }}</p>
				</span>
			</span>
			<h5 class="md:text-6xl">{{ $t('home.intro') }}</h5>
			<span class="flex gap-2 mt-2 items-center">
				<p class="text-sm px-4 py-1.5 bg-white rounded-full border border-zinc-200 h-8 center justify-center w-fit">PRODUCT</p>
				<p class="text-sm px-4 py-1.5 bg-white rounded-full border border-zinc-200 h-8 center justify-center w-fit">UX/UI</p>
				<p class="text-sm px-4 py-1.5 bg-white rounded-full border border-zinc-200 h-8 center justify-center w-fit">BRANDING</p>
				<span class="flex items-center gap-1 bg-linear-[-90deg,#0047FF_0%,#00B1FD_97%] rounded-full pl-3 pr-4 h-7.5 justify-center w-fit">
					<img src="../assets/icons/sparkle.svg" alt="sparkle icon">
					<p class="text-sm text-white">AI</p>
				</span>
			</span>
		</section>
		<!-- Cases -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 justify-between">
				<h4>{{ $t('home.cases') }}</h4>
				<NuxtLink to="/cases" class="btn-secondary">{{ $t('home.seeMore') }}</NuxtLink>
			</div>
			<section v-if="cases?.length" id="cardsbox" class="flex flex-col md:flex-row gap-6">
				<VueCase v-for="item in cases" :key="item._id" :item="item" />
			</section>
		</section>
	</main>
</template>
