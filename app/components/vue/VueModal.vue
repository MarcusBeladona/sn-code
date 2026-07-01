<script setup>
	const props = defineProps({ item: Object })
	const language = useSanityLanguage()
	defineEmits(['closeModal'])

	const shareData = {
		title: props.item.title || 'Marcus Beladona',
		text: props.item.description || 'Case Study',
		url: 'https://marcusbeladona.com/cases/' + props.item.slug.current || 'https://marcusbeladona.com',
	}

	const handleShare = async () => {
		try {
			if (navigator.share) {
				console.log(shareData);
				await navigator.share(shareData)
			} else {
				await navigator.clipboard.writeText(shareData.url)
			}
		} catch (error) {
			console.error('Error sharing:', error)
		}
	}

	const formattedRelease = computed(() => {
		const raw = props.item?.release
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

	const scrollToTop = () => {
		document.getElementById('modal-title')?.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<template>
	<dialog @click.self="$emit('closeModal')" class="fixed inset-0 z-50 h-screen bg-black/90 backdrop-blur-lg flex flex-col w-full overflow-y-auto scrollbar-thumb-white/30">
		<span class="flex flex-col gap-2 p-6 sticky top-0 w-full items-end z-100">
			<button @click="$emit('closeModal')" class="btn-primary p-0 bg-black" aria-label="close">
				<Icon name="ph:x" />
			</button>
			<button aria-label="Back to Top" @click="scrollToTop" class="p-0 btn-primary bg-black">
				<Icon name="ph:arrow-up" />
			</button>
		</span>
		<section class="relative flex flex-col gap-12 lg:gap-36 w-full max-w-360 pt-0 pb-36 mx-auto">

			<section class="flex flex-col gap-6 text-white px-6 xl:px-0 pt-0">
				<h3 id="modal-title" class="text-3xl md:text-4xl">{{ item.title }}</h3>
				<span class="flex gap-2">
					<span v-for="tag in item.tags" :key="tag" class="flex gap-2">
						<p class="text-sm uppercase text-white">{{ tag }}</p>
					</span>
				</span>
				<p class="text-white">{{ item.description }}</p>
				<hr class="border-dashed text-white/30">
				<div class="flex justify-between">
					<span class="flex items-center gap-3">
						<NuxtImg src="/img/avatar.png" alt="Avatar" width="32" height="32" format="webp" class="rounded-full" />
						<span class="flex flex-col">
							<p class="text-white text-sm">{{ $t('case.published') }}</p>
							<p class="text-white">{{ formattedRelease }}</p>
						</span>
					</span>
					<span class="flex gap-2">
						<button class="btn-secondary" aria-label="share" @click="handleShare">
							{{ $t('case.share') }}
						</button>
					</span>
				</div>
			</section>

			<section class="flex flex-col w-full">
				<template v-for="value in item.body" :key="value._key">
					<SanityImage v-if="value._type === 'image'" :asset-id="value.asset._ref" :alt="item.title" format="webp" quality="100" class="w-full" />
					<SanityFile v-else-if="value._type === 'video'" :asset-id="value.asset._ref">
						<template #default="{ src }">
							<video autoplay loop muted width="100%" preload="metadata" :alt="value.title">
								<source :src="src" type="video/webm" />
							</video>
						</template>
					</SanityFile>
					<iframe v-else-if="value._type === 'iframe'" :src="value.url" class="w-full aspect-video" frameborder="0" allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>
				</template>
			</section>

		</section>

	</dialog>
</template>