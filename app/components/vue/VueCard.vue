<script setup>
	const props = defineProps({
		item: { type: Object, required: true },
	})
</script>

<template>
	<NuxtLink :to="'/cases/' + item.slug.current" class="block w-full h-fit overflow-hidden relative group">
		<figure class="w-full h-auto aspect-4/3 squircle edge">
			<SanityImage :asset-id="item.thumb.asset._ref" format="webp" class="w-full h-auto group-hover:scale-102 transition duration-300" />
		</figure>

		<span class="flex pt-6 gap-2 -ml-1">
			<Icon name="ph:text-align-left" class="text-black/30 group-hover:text-black transition duration-300" />
			<span class="flex flex-col">
				<h5>{{ item.title }}</h5>
				<VueTags :list="item.tags" />
			</span>
		</span>
	</NuxtLink>
</template>
