<script setup>
	const props = defineProps({
		article: {
			type: Object,
			default: () => ({}),
			required: true
		}
	})
</script>

<template>
	<NuxtLink :to="`/cases/${article.slug.current}`" :key="article._id"
	class="flex flex-col flex-1 bg-zinc-100 p-0 border border-white rounded-3xl ring ring-zinc-200 hover:ring-zinc-300 h-fit transition hover:-translate-y-1 animate-enter duration-300 cursor-pointer">
		<SanityImage :asset-id="article.thumb.asset._ref"
		class="border border-zinc-200 rounded-[23px] w-full h-auto object-cover aspect-4/3" />
		<section class="flex flex-col gap-2 p-4">
			<h6 class="line-clamp-1">{{ article.title }}</h6>
			<span class="flex gap-1 divide-x divide-zinc-300">
				<p v-for="tagName in article.tags" :key="tagName"
				class="pr-1 text-xs uppercase tracking-wider">
					{{ tagName }}
				</p>
			</span>
			<p class="line-clamp-3">{{ article.description }}</p>
		</section>
	</NuxtLink>
</template>