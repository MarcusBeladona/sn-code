<script setup>
	const props = defineProps({
		fullSpan: {
			type: Boolean,
			default: true
		},
		assetId: {
			type: String,
		},
		caption: {
			type: String,
		}
	})
</script>

<template>
	<span id="container" class="flex flex-col col-span-full bg-zinc-100 rounded-3xl border border-white ring ring-zinc-200">
		<span class="flex gap-1 py-3 px-3">
			<Icon name="ph:circle-fill" size="16" class="text-[#FF605C]" />
			<Icon name="ph:circle-fill" size="16" class="text-[#FFBD44]" />
			<Icon name="ph:circle-fill" size="16" class="text-[#00CA4E]" />
		</span>
		<SanityImage :asset-id="props.assetId" class="rounded-t-none rounded-b-3xl hover:rounded-3xl hover:scale-102 transition-all cursor-zoom-in" />
	</span>
</template>