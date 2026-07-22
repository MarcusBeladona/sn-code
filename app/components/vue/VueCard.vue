<script setup>
	defineProps({
		item: { type: Object, required: true },
	})
</script>

<template>
	<NuxtLink :to="'/cases/' + item.slug.current" class="block w-full h-fit">
		<VueSquircle
			class="w-full h-fit md:relative group border border-base-300"
			:class="item.border ? '' : 'md:border-none'"
		>
			<figure class="w-full h-full aspect-4/3">
				<SanityImage
					:asset-id="item.thumb.asset._ref"
					quality="100"
					format="webp"
					class="w-full h-full object-cover group-hover:scale-102 transition duration-300"
				/>
			</figure>

			<span
				class="flex flex-col p-4 md:p-6 bg-base-200 md:bg-black/0 md:bg-linear-180 justify-end md:from-black/0 md:to-black/80 md:absolute md:inset-0 md:opacity-0 group-hover:opacity-100 transition duration-300"
			>
				<h5 class="md:text-white">{{ item.title }}</h5>
				<VueTags :list="item.tags" class="[&_p]:md:text-white" />
			</span>
		</VueSquircle>
	</NuxtLink>
</template>
