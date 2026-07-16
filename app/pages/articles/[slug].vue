<script setup>
	const slug = useRoute().params.slug
	const language = useSanityLanguage()
	const query = groq`*[_type == "article" && language == $language && slug.current == $slug][0]`
	const { data: item } = await useSanityQuery(query, { slug, language })

	if (!item.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Page not found',
			fatal: true
		})
	}

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

	const showSummary = ref(false);
	const toggleSummary = computed(() => {
		showSummary.value = !showSummary.value
	})

</script>

<template>
	<main class="flex flex-col items-center gap-6 md:gap-36 w-full">
		<!-- Header -->
		<section class="flex flex-col w-full max-w-178">
			<h4 class="mb-6">{{ item.title }}</h4>
			<VueTags class="mb-6" :list="item.tags" />
			<p class="mb-6">{{ item.description }}</p>
			<hr class="mb-6 border-dashed text-base-content/12">
			<div class="flex justify-between">
				<span class="flex items-center gap-3">
					<NuxtImg src="/img/avatar.png" alt="Avatar" width="32" height="32" format="webp" class="rounded-full" />
					<span class="flex flex-col">
						<p class="text-caption">{{ $t('case.published') }}</p>
						<p class="text-base-content leading-tight">{{ formattedRelease }}</p>
					</span>
				</span>
				<span class="flex gap-2">
					<button class="btn-secondary" aria-label="summary" @click="toggleSummary">
						{{ $t('case.summary') }}
					</button>
					<button class="btn-secondary p-0" aria-label="share" @click="handleShare">
						<Icon name="ph:share-fat" />
					</button>
				</span>
			</div>
			<Transition name="expand">
				<VueToc v-if="showSummary" class="mt-6 animate-none" />
			</Transition>
		</section>

		<!-- Body -->
		<RichTextBlock :body="item.body" />
	</main>
</template>

<style>

	.expand-enter-active,
	.expand-leave-active {
		transition: all 300ms ease;
		overflow: hidden;
	}

	.expand-enter-from,
	.expand-leave-to {
		max-height: 0;
		opacity: 0;
		margin-top: 0;
		padding-top: 0;
		padding-bottom: 0;
	}

	.expand-enter-to,
	.expand-leave-from {
		max-height: 1280px;
		opacity: 1;
	}
</style>