<script setup>
	const slug = useRoute().params.slug
	const language = useSanityLanguage()
	const query = groq`*[_type == "article" && language == $language && slug.current == $slug][0]`
	const { data: item } = await useSanityQuery(query, { slug, language })

	useSeoMeta({
		title: item.value?.title || 'Marcus Beladona',
		description: item.value?.description || 'Article',
		ogTitle: item.value?.title || 'Marcus Beladona',
		ogDescription: item.value?.description || 'Article',
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

	const shareData = {
		title: item.value?.title || 'Marcus Beladona',
		text: item.value?.description || 'Article',
		url: 'https://marcusbeladona.com/articles/' + slug || 'https://marcusbeladona.com',
	}
	const handleShare = async () => {
		try {
			if (navigator.share) {
				await navigator.share(shareData)
			} else {
				await navigator.clipboard.writeText(shareData.url)
			}
		} catch (error) {
			console.error('Error sharing:', error)
		}
	}

	console.log(item.value);

</script>

<template>
	<main class="flex flex-col items-center gap-6 md:gap-36 w-full">
		<!-- Header -->
		<section class="flex flex-col gap-6 w-full max-w-178">
			<h2 class="md:col-span-8 md:col-start-3">{{ item.title }}</h2>
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
					<button class="btn-secondary" aria-label="share" @click="handleShare">
						{{ $t('case.share') }}
					</button>
				</span>
			</div>
		</section>

		<!-- Body -->
		<RichTextBlock :body="item.body" />
	</main>
</template>
