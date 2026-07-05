<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})
</script>

<template>
	<span class="flex flex-col md:flex-row gap-6 justify-start items-start" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<template v-for="item in data.items">
			<article class="w-full">
				<FigureBlock v-if="item._type == 'figureBlock'" :data="item" class="w-full" />
				<VideoBlock v-else-if="item._type == 'videoBlock'" :data="item" class="w-full" />
				<CardBlock v-else-if="item._type == 'cardBlock'" :data="item" class="w-full" />
			</article>
		</template>
	</span>
</template>