<script setup>
	const props = defineProps({
		item: { type: Object, required: true },
	})
</script>

<template>
	<NuxtLink :to="'/cases/' + item.slug.current" class="block w-full h-fit overflow-hidden relative">
		<figure class="w-full h-auto aspect-4/3 squircle edge">
			<SanityImage :asset-id="item.thumb.asset._ref" format="webp" class="w-full h-auto hover:scale-102 transition duration-300" />
		</figure>

		<span class="flex pt-6 gap-2">
			<Icon v-if="item.bookmark" name="ph:bookmark-simple-fill" class="text-black/12 -mx-1" />
			<span class="flex flex-col">
				<h5>{{ item.title }}</h5>
				<VueTags :list="item.tags" />
			</span>
		</span>
	</NuxtLink>
</template>
