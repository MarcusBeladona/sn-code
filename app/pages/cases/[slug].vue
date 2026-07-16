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

	const showModal = ref(false)
	function toggleModal() {
		showModal.value = !showModal.value
	}

	watch(showModal, (value) => {
		document.body.style.overflow = value ? 'hidden' : ''
	})

	onBeforeUnmount(() => {
		document.body.style.overflow = ''
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
		text: item.value?.description || 'Case Study',
		url: 'https://marcusbeladona.com/cases/' + slug || 'https://marcusbeladona.com',
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

</script>

<template>
	<main class="flex flex-col items-center gap-36 max-w-200">
		<!-- Header -->
		<section class="flex flex-col gap-6 w-full">
			<h3 class="md:col-span-8 md:col-start-3">{{ item.title }}</h3>
			<VueTags class="md:col-span-8 md:col-start-3" :list="item.tags" />
			<p class="md:col-span-8 md:col-start-3">{{ item.description }}</p>
			<hr class="border-dashed text-base-content/12">
			<div class="flex justify-between">
				<span class="flex items-center gap-3">
					<NuxtImg src="/img/avatar.png" alt="Avatar" width="32" height="32" format="webp" class="rounded-full" />
					<span class="flex flex-col">
						<p class="text-sm">{{ $t('case.published') }}</p>
						<p class="text-base-content">{{ formattedRelease }}</p>
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
		<section @click="toggleModal" class="flex flex-col w-full bg-black rounded-3xl cursor-pointer hover:ring-base-300 hover:-translate-y-1 animate-enter duration-150 overflow-clip justify-center items-center">
			<SanityImage v-if="item.thumb" :asset-id="item.thumb.asset._ref" :alt="item.title" format="webp" class="w-full opacity-30" />
			<button class="btn-secondary absolute" aria-label="view details">
				<p>{{ $t('case.showcase') }}</p>
			</button>
		</section>

		<!-- Case Modal -->
		<VueModal :item="item" v-if="showModal" @close-modal="toggleModal" />
	</main>
</template>
