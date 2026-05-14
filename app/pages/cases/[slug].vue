<script setup>
	const slug = useRoute().params.slug
	const query = groq`*[_type == "case" && slug.current == $slug][0]`
	const { data: item } = await useSanityQuery(query, { slug })
	const hero = item.value.hero[0]
</script>

<template>
	<main v-if="item" class="flex flex-col md:grid md:grid-cols-12 gap-6">
		<!-- Header -->
		<h4 class="md:col-span-8 md:col-start-3">{{ item.title }}</h4>
		<p class="md:col-span-8 md:col-start-3">{{ item.description }}</p>
		<VueTags class="md:col-span-8 md:col-start-3" :list="item.tags" />
		<!-- Hero -->
		<CarouselBlock v-if="hero._type == 'carousel'" :data="hero" />
		<ScrollBlock v-else-if="hero._type == 'scroll'" :data="hero" />
		<FigureBlock v-else-if="hero._type == 'figure'" :data="hero" />
		<!-- Text Block -->
		<RichTextBlock v-if="item.body" :body="item.body" class="col-span-full" />
	</main>

	<main v-else class="flex flex-col gap-6 items-center">
		<h1>404</h1>
		<p class="text-zinc-600">Case não encontrado.</p>
	</main>
</template>