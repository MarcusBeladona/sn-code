<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	})
</script>

<template>
	<span class="w-full flex gap-6 justify-start items-start">
		<template v-for="item in data.items">
			<article class="w-full">
				<FigureBlock v-if="item._type == 'figure'" :data="item" />
				<VideoBlock v-else-if="item._type == 'video'" :data="item" class="m-0" />
				<CardBlock v-else-if="item._type == 'cardBlock'" :data="item" />
			</article>
		</template>
	</span>
</template>