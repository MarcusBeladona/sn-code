<script setup lang="ts">
	import type { NuxtError } from '#app'
	const props = defineProps<{ error: NuxtError }>()
</script>

<template>
	<NuxtLayout>
		<main class="flex flex-col justify-center items-center gap-6">
			<img src="assets/icons/clumsy-opendoodles.svg" alt="clumsy-opendoodles" class="h-48" />
			<h5>{{ $t('error.title') }}</h5>
			<NuxtLink to="/" class="btn-secondary">{{ $t('error.return') }}</NuxtLink>
		</main>
	</NuxtLayout>
</template>