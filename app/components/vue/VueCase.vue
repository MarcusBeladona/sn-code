<script setup>
	const props = defineProps({ item: Object })
</script>
<template>
	<NuxtLink :to="`/cases/${item.slug.current}`" class="flex animate-enter hover:-translate-y-1 hover:ring-zinc-300 duration-150 flex-1">
		<SanityImage :asset-id="item.thumb.asset._ref" class="rounded-3xl w-full h-auto object-cover aspect-4/3 order-first" />
		<!-- <section class="flex flex-col gap-2 p-4 hidden">
			<h6 class="line-clamp-2">{{ item.title }}</h6>
			<VueTags :list="item.tags" />
			<p class="lg:line-clamp-2">{{ item.description }}</p>
		</section> -->
	</NuxtLink>
</template>