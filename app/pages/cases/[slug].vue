<script setup>
	const slug = useRoute().params.slug
	const query = groq`*[_type == "case" && slug.current == $slug][0]`
	const { data: story } = await useSanityQuery(query, { slug })
</script>

<template>
	<main v-if="story" class="flex flex-col gap-6">
		<h4 class="md:col-span-8 md:col-start-3">{{ story.title }}</h4>
		<p class="md:col-span-8 md:col-start-3">{{ story.description }}</p>
		<span class="flex md:col-span-8 md:col-start-3">
			<p v-for="tagName in story.tags" :key="tagName" class="pr-1 text-xs uppercase tracking-wider"> {{ tagName }}</p>
		</span>
		<SanityImage :asset-id="story.thumb.asset._ref" class="md:col-span-full rounded-2xl md:rounded-3xl w-full" />
		<VueBody :body="story.body" />
	</main>
</template>