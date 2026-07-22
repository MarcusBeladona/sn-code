<script setup>
	const { t, tm, rt } = useI18n()

	useSeoMeta({
		title: () => `${t('about.title')} | Marcus Beladona`,
		description: () => t('seo.aboutDescription'),
		ogTitle: () => `${t('about.title')} | Marcus Beladona`,
		ogDescription: () => t('seo.aboutDescription'),
	})

	const specialties = computed(() => tm('about.specialties').map((item) => ({
		iconName: rt(item.icon),
		title: rt(item.title),
		description: rt(item.description),
	})))

	const experience = computed(() => tm('about.experience').map((item) => ({
		role: rt(item.role),
		company: rt(item.company),
		period: rt(item.period),
		logo: rt(item.logo),
	})))
</script>

<template>
	<main class="flex flex-col gap-24 lg:gap-36">
		<section class="flex flex-col gap-6 ">
			<div class="flex gap-6 items-end">
				<h2 class="text-nowrap">{{ $t('about.title') }}</h2>
				<hr class="border-dashed text-base-content/12 w-full pb-3">
			</div>
			<section class="flex flex-col lg:grid grid-cols-12 gap-6">
				<span class="flex flex-col gap-6 col-span-5">
					<p>{{ $t('about.bio1') }}</p>
					<p>{{ $t('about.bio2') }}</p>
				</span>
				<VueSquircle class="col-start-7 col-span-6">
					<NuxtImg src="img/cover-img.png" class="object-contain w-full" />
				</VueSquircle>
			</section>
		</section>
		<section class="w-full">
			<div class="col-span-full flex flex-col gap-6 md:flex-row">
				<CardBlock v-for="item in specialties" :key="item.title" :data="item" class="flex-1" />
			</div>
		</section>
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 items-end">
				<h2 class="text-nowrap">{{ $t('about.academic') }}</h2>
				<hr class="border-dashed text-base-content/12 w-full pb-3">
			</div>
			<section class="flex flex-col lg:grid grid-cols-12 gap-6">
				<p class="col-span-5 text-balance">{{ $t('about.academicText') }}</p>
				<div class="col-start-7 col-span-6 relative">
					<VueSquircle class="w-full">
						<NuxtImg src="img/study-img.png" class="w-full" />
					</VueSquircle>
					<span class="flex w-full justify-between items-end absolute p-6 left-0 bottom-0">
						<span class="flex flex-col md:flex-row gap-6 md:items-end">
							<NuxtImg src="img/ufc-logo.jpg" class="w-12 h-12 rounded-xl" />
							<span class="flex flex-col">
								<h5 class="text-white">UFC</h5>
								<p class="text-white">{{ $t('about.degree') }}</p>
							</span>
						</span>
						<p class="text-white">2020 - 2024</p>
					</span>
				</div>
			</section>
		</section>
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 items-end">
				<h2 class="text-nowrap">{{ $t('about.professional') }}</h2>
				<hr class="border-dashed text-base-content/12 w-full pb-3">
			</div>
			<section class="flex flex-col lg:grid grid-cols-12 gap-6">
				<p class="col-span-5 text-balance">{{ $t('about.professionalText') }}</p>
				<section class="col-start-7 col-span-6 flex flex-col gap-6 divide-y divide-dashed divide-base-300">
					<span v-for="job in experience" :key="`${job.company}-${job.period}`" class="flex  justify-between items-end pb-6 last:pb-0">
						<span class="flex flex-col md:flex-row gap-6">
							<NuxtImg :src="job.logo" class="w-12 h-12 rounded-xl" />
							<span class="flex flex-col">
								<h5>{{ job.company }}</h5>
								<p>{{ job.role }}</p>
							</span>
						</span>
						<p>{{ job.period }}</p>
					</span>
				</section>
			</section>
		</section>
	</main>
</template>
