<script setup>
	const props = defineProps({ item: Object })
	// console.log(props.item);
</script>
<template>
	<NuxtLink :to="`/cases/${item.slug.current}`" class="flex flex-1 hover:ring-zinc-300 hover:-translate-y-1 animate-enter duration-150">
		<SanityImage :asset-id="item.thumb.asset._ref" format="webp" alt="case thumbnail" class="order-first rounded-3xl object-cover aspect-4/3" />
		<!-- <section class="hidden flex flex-col gap-2 p-4">
			<h6 class="line-clamp-2">{{ item.title }}</h6>
			<VueTags :list="item.tags" />
			<p class="lg:line-clamp-2">{{ item.description }}</p>
		</section> -->
	</NuxtLink>
</template>