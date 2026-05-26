<script setup>
	const slug = useRoute().params.slug
	const query = groq`*[_type == "case" && slug.current == $slug][0]`
	const { data: item } = await useSanityQuery(query, { slug })
	const hero = item.value.hero[0]
</script>

<template>
	<main v-if="item" class="flex flex-col gap-36 items-center">
		<!-- Content -->
		<section class="flex flex-col gap-12 max-w-[708px]">
			<!-- Header -->
			<div class="flex gap-6 flex-col">
				<h3 class="md:col-span-8 md:col-start-3">{{ item.title }}</h3>
				<VueTags class="md:col-span-8 md:col-start-3" :list="item.tags" />
				<p class="md:col-span-8 md:col-start-3">{{ item.description }}</p>
				<hr class="border-dashed text-zinc-300">
				<div class="flex justify-between">
					<span>
						<p>Publicado</p>
						<p class="text-zinc-900">15 Jun, 2026</p>
					</span>
					<span class="gap-2 flex">
						<button class="btn-secondary">Showcase</button>
						<button class="btn-secondary p-0">
							<Icon name="ph:share" />
						</button>
					</span>
				</div>
			</div>
			<!-- Hero -->
			<CarouselBlock v-if="hero._type == 'carousel'" :data="hero" />
			<ScrollBlock v-else-if="hero._type == 'scroll'" :data="hero" />
			<FigureBlock v-else-if="hero._type == 'figure'" :data="hero" />
			<!-- Text Block -->
			<RichTextBlock v-if="item.body" :body="item.body" />
		</section>
		<!-- Related -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 justify-between">
				<h4>Blog</h4>
				<NuxtLink to="/blog" class="btn-secondary">Ver Mais</NuxtLink>
			</div>
			<section class="flex gap-6">
				<article v-for="i in 3" class="flex flex-col gap-4">
					<span class="bg-zinc-100 aspect-4/3 rounded-2xl"></span>
					<span>
						<p>25 Jan. 2026</p>
						<h6>The Art of Minimalist Design: A Guide to Efficient Design Systems</h6>
					</span>
				</article>
			</section>
		</section>
	</main>

	<main v-else class="flex flex-col gap-6 items-center">
		<h1>404</h1>
		<p class="text-zinc-600">Case não encontrado.</p>
	</main>
</template>