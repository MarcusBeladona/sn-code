<script setup>
	import '~/assets/css/main.css'
	const { locale } = useI18n()

	useHead({
		htmlAttrs: {
			lang: locale,
		},
	})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
