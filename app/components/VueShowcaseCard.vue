<script setup>
	import { ref, watch } from 'vue'

	const props = defineProps({
		item: Object
	})

	const modalOpen = ref(false)
	watch(modalOpen, (open) => {
		document.body.style.overflow = open ? 'hidden' : ''
	})
	console.log(props.item);
</script>

<template>
	<article id="showcase" class="edge flex flex-col md:flex-row overflow-clip">
		<span class="flex flex-col gap-4 md:gap-6 col-span-1 w-full p-4 md:p-12 md:pr-0 justify-center">
			<h5 class="md:text-4xl">{{ item.title }}</h5>

			<span id="tags" class="flex gap-1 divide-x divide-zinc-200">
				<p v-for="tag in item.tags" :key="tag" class="pr-1 text-xs uppercase tracking-wider">
					{{ tag }}
				</p>
			</span>

			<p>{{ item.description }}</p>

			<span class="flex gap-2">
				<button @click="modalOpen = true" class="button-primary">
					Showcase
				</button>

				<NuxtLink v-if="item.case" :to="`/cases/${item.case.slug}`" class="button-secondary">
					Saiba Mais
				</NuxtLink>
			</span>
		</span>

		<SanityImage :asset-id="item.thumb.asset._ref" class="order-first aspect-4/3 max-h-[512px] object-cover md:hidden" />

		<SanityImage :asset-id="item.mockup.asset._ref" class="w-fit h-fill max-h-[512px] hidden md:inline" />

		<!-- Modal -->
		<Transition name="fade">
			<div v-if="modalOpen" id="modal" class="fixed inset-0 z-50 flex flex-col items-center overflow-y-auto bg-black/90">

				<button @click="modalOpen = false" class="button-primary fixed bottom-10 border-white/10 text-white/50  hover:text-white bg-black/30 p-2 w-10 animate-grow">
					<Icon name="ph:x" size="20" />
				</button>

				<SanityImage loading="lazy" v-for="image in item.body" :key="image.asset._ref" :asset-id="image.asset._ref" class="w-[1440px] shrink-0 animate-enter" />
			</div>
		</Transition>
	</article>
</template>

<style scoped>

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 300ms ease;
		opacity: 100;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>