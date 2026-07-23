<script setup>
	const route = useRoute()
	const slug = computed(() => {
		const param = route.params.slug
		return Array.isArray(param) ? param[0] : param
	})
	const language = useSanityLanguage()
	const siteUrl = useRuntimeConfig().public.siteUrl

	const query = groq`*[_type == "case" && language == $language && slug.current == $slug][0]{
		...,
		"ogImage": thumb.asset->url
	}`
	const { data: item } = await useSanityQuery(query, { slug, language })

	if (!item.value) {
		throw createError({ statusCode: 404, statusMessage: 'Case not found' })
	}

	watch(item, (value) => {
		if (!value) {
			showError({ statusCode: 404, statusMessage: 'Case not found' })
		}
	})

	useSeoMeta({
		title: () => item.value?.title || 'Marcus Beladona',
		description: () => item.value?.description || 'Case',
		ogTitle: () => item.value?.title || 'Marcus Beladona',
		ogDescription: () => item.value?.description || 'Case',
		ogImage: () => item.value?.ogImage,
	})

	const formattedRelease = computed(() => {
		const raw = item.value?.release
		if (!raw) return ''
		const d = new Date(raw)
		if (isNaN(d.getTime())) return raw
		const loc = language.value === 'pt' ? 'pt-BR' : 'en-US'
		const month = new Intl.DateTimeFormat(loc, { month: 'long' }).format(d)
		const monthAbbr = month.charAt(0).toUpperCase() + month.slice(1, 3) + '.'
		const year = d.getUTCFullYear()
		if (loc.startsWith('pt')) {
			return `${monthAbbr} de ${year}`
		}
		return `${monthAbbr} ${year}`
	})

	const shareData = computed(() => ({
		title: item.value?.title || 'Marcus Beladona',
		text: item.value?.description || 'Case',
		url: `${siteUrl}/cases/${slug.value}`,
	}))

	const handleShare = async () => {
		try {
			if (navigator.share) {
				await navigator.share(shareData.value)
			} else {
				await navigator.clipboard.writeText(shareData.value.url)
			}
		} catch (error) {
			console.error('Error sharing:', error)
		}
	}

	const showSummary = ref(false)
	function toggleSummary() {
		showSummary.value = !showSummary.value
	}
</script>

<template>
	<main v-if="item" class="flex flex-col items-center gap-24 w-full">
		<!-- Header -->
		<section class="flex flex-col w-full max-w-178">
			<h1 class="mb-6">{{ item.title }}</h1>
			<VueTags v-if="item.tags?.length" class="mb-6" :list="item.tags" />
			<p class="mb-6">{{ item.description }}</p>
			<hr class="mb-6 border-dashed text-base-content/12">
			<div class="flex justify-between">
				<span class="flex items-center gap-2 md:gap-3">
					<NuxtImg src="/img/avatar.png" alt="Avatar" width="32" height="32" format="webp" class="rounded-full" />
					<span class="flex flex-col">
						<p class="text-caption leading-none mt-0.5">{{ $t('case.published') }}</p>
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
		<RichTextBlock v-if="item.body" :body="item.body" />
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
