<script setup>
	const props = defineProps({ data: Object })
</script>

<template>
	<span id="container" class="flex flex-col bg-base-200 border border-base-300 rounded-2xl md:rounded-[28px]" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<span class="flex gap-1 px-4 py-3">
			<Icon name="ph:circle-fill" size="16" class="text-[#FF605C]" />
			<Icon name="ph:circle-fill" size="16" class="text-[#FFBD44]" />
			<Icon name="ph:circle-fill" size="16" class="text-[#00CA4E]" />
		</span>
		<span class="p-2 pt-0">
			<FigureBlock :data="{ ...data.image, _key: data._key }" class="rounded-xl" :class="data.border ? 'border border-base-300' : ''" />
		</span>
	</span>
</template>