<script setup>
	const route = useRoute()

	const query = groq`
  *[_type == "case" && slug.current == $slug][0]`

	const { data: story, refresh } = await useSanityQuery(query, {
		slug: route.params.slug
	})
</script>

<template>
	<main>
		<AppHeader />
		<section v-if="story" class="flex flex-col gap-8">
			<h4 class="md:col-span-8 md:col-start-3">{{ story.title }}</h4>
			<p class="md:col-span-8 md:col-start-3">{{ story.description }}</p>
			<span class="flex md:col-span-8 md:col-start-3">
				<p v-for="tagName in story.tags" :key="tagName" class="pr-1 text-xs uppercase tracking-wider">
					{{ tagName }}</p>
			</span>
			<SanityImage :asset-id="story.thumb.asset._ref"
			class="md:col-span-full rounded-2xl md:rounded-3xl w-full" />
			<SanityContent :value="story.body" />
		</section>
		<AppFooter />
	</main>
</template>