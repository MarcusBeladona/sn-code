<script setup>
	const slug = useRoute().params.slug
	const language = useSanityLanguage()
	const query = groq`*[_type == "case" && language == $language && slug.current == $slug][0]`
	const { data: item } = await useSanityQuery(query, { slug, language })

	useSeoMeta({
		title: item.value?.title || 'Marcus Beladona',
		description: item.value?.description || 'Case Study',
		ogTitle: item.value?.title || 'Marcus Beladona',
		ogDescription: item.value?.description || 'Case Study',
		ogImage: item.value?.thumb?.asset?.url,
	})

	const formattedRelease = computed(() => {
		const raw = item?.value?.release
		if (!raw) return ''
		const d = new Date(raw)
		if (isNaN(d.getTime())) return raw
		const loc = typeof language === 'string' ? language : (language?.value ?? 'pt-BR')
		const month = new Intl.DateTimeFormat(loc, { month: 'long' }).format(d)
		const monthCap = month.charAt(0).toUpperCase() + month.slice(1)
		const year = d.getUTCFullYear()
		if (String(loc).startsWith('pt')) {
			return `${monthCap} de ${year}`
		}
		return `${monthCap} ${year}`
	})
</script>

<template>
	<main class="flex flex-col items-center gap-36 w-full">
		<!-- Header -->
		<section class="flex flex-col gap-6 w-full">
			<h3 class="md:col-span-8 md:col-start-3">{{ item.title }}</h3>
			<VueTags class="md:col-span-8 md:col-start-3" :list="item.tags" />
			<p class="md:col-span-8 md:col-start-3">{{ item.description }}</p>
			<hr class="border-dashed text-zinc-300">
			<div class="flex justify-between">
				<span class="flex items-center gap-3">
					<NuxtImg src="/img/avatar.png" alt="Avatar" width="32" height="32" format="webp" class="rounded-full" />
					<span class="flex flex-col">
						<p class="text-sm">{{ $t('case.published') }}</p>
						<p class="text-zinc-900">{{ formattedRelease }}</p>
					</span>
				</span>
				<span class="flex gap-2">
					<button class="btn-secondary">{{ $t('case.showcase') }}</button>
					<button class="p-0 btn-secondary" aria-label="share">
						<Icon name="ph:share" />
					</button>
				</span>
			</div>
		</section>
		<!-- Body -->
		<section class="flex flex-col bg-black w-full">
			<template v-for="value in item.body" :key="value._key">
				<SanityImage v-if="value._type === 'imageBlock'" :asset-id="value.image.asset._ref" :alt="item.title" format="webp" class="w-full" />
				<SanityFile v-else-if="value._type === 'videoBlock'" :asset-id="value.video.asset._ref">
					<template #default="{ src }">
						<video autoplay loop muted width="100%" preload="metadata" :alt="value.title">
							<source :src="src" type="video/webm" />
						</video>
					</template>
				</SanityFile>
			</template>
		</section>
	</main>
</template>
