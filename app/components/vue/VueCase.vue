<script setup>
	const props = defineProps({ item: Object })
	// console.log(props.item);

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
		<span @click="toggleModal" class="w-full hover:ring-zinc-300 hover:-translate-y-1 animate-enter duration-150">
			<SanityImage :asset-id="item.thumb.asset._ref" format="webp" alt="thumbnail" class="w-full order-first rounded-3xl aspect-4/3" />
		</span>
		<!-- Case Modal -->
		<VueModal :item="item" v-if="showModal" @close-modal="toggleModal" />
	</section>
</template>