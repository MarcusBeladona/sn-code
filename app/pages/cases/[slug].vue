<script setup>
	const slug = useRoute().params.slug
	const query = groq`*[_type == "case" && slug.current == $slug][0]`
	const { data: story } = await useSanityQuery(query, { slug })
</script>

<template>
	<main v-if="story" class="flex flex-col gap-6">
		<h4 class="md:col-span-8 md:col-start-3">{{ story.title }}</h4>
		<p class="md:col-span-8 md:col-start-3">{{ story.description }}</p>
		<span class="flex flex-wrap gap-x-2 md:col-span-8 md:col-start-3">
			<p v-for="tagName in story.tags" :key="tagName" class="text-xs uppercase tracking-wider">
				{{ tagName }}
			</p>
		</span>
		<VueImage :asset-id="story.thumb.asset._ref" />
		<VueBody :body="story.body" />
	</main>
	<main v-else class="flex flex-col gap-6">
		<p class="text-zinc-600">Este projeto não foi encontrado.</p>
		<NuxtLink to="/" class="button-secondary w-fit">Voltar ao início</NuxtLink>
	</main>
</template>