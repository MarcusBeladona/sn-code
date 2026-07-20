<script setup>
	import '~/assets/css/main.css'

	const { locale } = useI18n()
	const route = useRoute()
	const siteUrl = useRuntimeConfig().public.siteUrl

	useHead({
		htmlAttrs: {
			lang: locale,
		},
		link: [
			{
				rel: 'canonical',
				href: () => `${siteUrl}${route.path === '/' ? '' : route.path}`,
			},
		],
		script: [
			{
				type: 'application/ld+json',
				children: JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: 'Marcus Beladona',
					url: siteUrl,
					jobTitle: 'Product Designer',
					email: 'mailto:marcusbeladona@gmail.com',
					sameAs: [
						'https://github.com/marcusbeladona',
						'https://www.linkedin.com/in/marcusbeladona/',
					],
				}),
			},
		],
	})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
