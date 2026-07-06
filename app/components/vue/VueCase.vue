<script setup>
	const props = defineProps({ item: Object })

	const showModal = ref(false)
	function toggleModal() {
		showModal.value = !showModal.value
	}

	watch(showModal, (value) => {
		document.body.style.overflow = value ? 'hidden' : ''
	})

	onBeforeUnmount(() => {
		document.body.style.overflow = ''
	})
</script>

<template>
	<section class="flex flex-1 gap-2">
		<!-- Case Card -->
		<div class="card image-full w-full rounded-3xl overflow-clip transition-all duration-150" @click="toggleModal">
			<figure class="rounded-none">
				<SanityImage :asset-id="item.thumb.asset._ref" format="webp" alt="thumbnail" class="w-full aspect-4/3 brightness-100" />
			</figure>
			<div class="card-body opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-end gap-2 bg-linear-to-b from-transparent to-black/80 cursor-pointer">
				<h4 class="">{{ item.title }}</h4>
				<VueTags :list="item.tags" class="flex flex-wrap gap-2 opacity-80" />
			</div>
		</div>
		<!-- Case Modal -->
		<VueModal :item="item" v-if="showModal" @close-modal="toggleModal" />
	</section>
</template>

<style scoped>
	:deep(p) {
		color: white;
	}
</style>