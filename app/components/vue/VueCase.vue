<script setup>
	const props = defineProps({ item: Object })
</script>
<template>
	<NuxtLink id="showcard" v-if="item.mockup" :to="`/cases/${item.slug.current}`" class="flex edge flex-col lg:flex-row col-span-full items-center animate-enter hover:-translate-y-1 hover:ring-zinc-300 duration-150">
		<section class="flex flex-col gap-2 p-4 lg:gap-4 lg:p-12 lg:pr-0 max-w-lg">
			<h6 class="line-clamp-2 md:text-4xl">{{ item.title }}</h6>
			<VueTags :list="item.tags" />
			<p class="lg:line-clamp-2">{{ item.description }}</p>
			<span class="lg:flex gap-2 hidden">
				<button class="button-primary">Showcase</button>
				<button class="button-secondary">Saiba Mais</button>
			</span>
		</section>
		<SanityImage :asset-id="item.mockup.asset._ref" class="w-fit h-128 order-last object-cover hidden lg:block" />
		<SanityImage :asset-id="item.thumb.asset._ref" class="border border-zinc-200 rounded-3xl w-full h-auto object-cover aspect-4/3 order-first lg:hidden" />
	</NuxtLink>

	<NuxtLink v-else :to="`/cases/${item.slug.current}`" class="flex edge flex-col col-span-1 animate-enter hover:-translate-y-1 hover:ring-zinc-300 duration-150">
		<section class="flex flex-col gap-2 p-4">
			<h6 class="line-clamp-2">{{ item.title }}</h6>
			<VueTags :list="item.tags" />
			<p class="lg:line-clamp-2">{{ item.description }}</p>
		</section>
		<SanityImage :asset-id="item.thumb.asset._ref" class="border border-zinc-200 rounded-3xl w-full h-auto object-cover aspect-4/3 order-first" />
	</NuxtLink>
</template>

<style scoped></style>