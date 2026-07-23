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
	})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
