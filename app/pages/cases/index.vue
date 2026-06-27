<script setup>
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && language == $language] | order(_createdAt desc)`
	const { data: cases } = await useSanityQuery(query, { language })
</script>

<template>
	<main class="flex flex-col gap-36">
		<section class="flex flex-col gap-6">
			<h5 class="md:text-6xl">{{ $t('home.intro') }}</h5>
			<span class="flex gap-2">
				<p class="btn-secondary text-sm">UX/UI</p>
				<p class="btn-secondary text-sm">PRODUCT</p>
				<p class="btn-secondary text-sm">BRANDING</p>
			</span>
		</section>
	</main>
</template>
