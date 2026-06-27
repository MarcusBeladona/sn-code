<script setup>
const slug = useRoute().params.slug
const language = useSanityLanguage()
const query = groq`*[_type == "case" && language == $language && slug.current == $slug][0]`
const { data: item } = await useSanityQuery(query, { slug, language })
const hero = computed(() => item.value?.hero?.[0])
</script>

<template>
	<main v-if="item" class="flex flex-col gap-36 items-center">
		<section class="flex flex-col gap-12 max-w-[708px]">
			<div class="flex gap-6 flex-col">
				<h3 class="md:col-span-8 md:col-start-3">{{ item.title }}</h3>
				<VueTags class="md:col-span-8 md:col-start-3" :list="item.tags" />
				<p class="md:col-span-8 md:col-start-3">{{ item.description }}</p>
				<hr class="border-dashed text-zinc-300">
				<div class="flex justify-between">
					<span>
						<p>{{ $t('case.published') }}</p>
						<p class="text-zinc-900">15 Jun, 2026</p>
					</span>
					<span class="gap-2 flex">
						<button class="btn-secondary">{{ $t('case.showcase') }}</button>
						<button class="btn-secondary p-0">
							<Icon name="ph:share" />
						</button>
					</span>
				</div>
			</div>
			<CarouselBlock v-if="hero?._type == 'carousel'" :data="hero" />
			<ScrollBlock v-else-if="hero?._type == 'scroll'" :data="hero" />
			<FigureBlock v-else-if="hero?._type == 'figure'" :data="hero" />
			<RichTextBlock v-if="item.body" :body="item.body" />
		</section>
	</main>

	<main v-else class="flex flex-col gap-6 items-center">
		<h1>404</h1>
		<p class="text-zinc-600">{{ $t('case.notFound') }}</p>
	</main>
</template>
