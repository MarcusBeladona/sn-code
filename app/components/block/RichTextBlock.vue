<script setup>
	import CarouselBlock from './CarouselBlock.vue'

	const props = defineProps({
		body: {
			type: Object,
			required: true
		},
	})
	const components = {
		types: {
			figure: props => h(FigureBlock, {
				assetId: props.value.image.asset._ref,
				isSpanFull: props.value.isSpanFull,
				hasContainer: props.value.hasContainer,
				hasBorder: props.value.hasBorder,
				caption: props.value.caption
			}),
			card: props => h(CardBlock, {
				icon: props.value.icon_name,
				title: props.value.title,
				description: props.value.description
			}),
			container: props => h(ContainerBlock, {
				fullSpan: Boolean(props.value.fullSpan),
				assetId: props.value.image.asset._ref,
			}),
			grid: props => h(GridBlock, {
				fullSpan: props.value.fullspan,
				items: props.value.items,
			}),
			carousel: props => h(CarouselBlock, {
				data: props.value.hero[0],
			}),
		},
		marks: {
			highlight: (props) => h('span', { class: 'highlight' }, props.text)
		}
	}

	onMounted(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add('isVisible')
					observer.unobserve(e.target)
				}
			})
		})

		document.querySelectorAll('.highlight').forEach(el => {
			observer.observe(el)
		})
	})
</script>

<template>
	<div class="prose prose-zinc prose-a:text-blue-700 max-w-max md:grid grid-cols-12 flex flex-col gap-8">
		<SanityContent :value="body" :components="components" />
	</div>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	:deep(*) {
		margin: 0px;
	}

	:deep(.highlight) {
		@apply text-zinc-900 inline pb-0.5;

		background-image: linear-gradient(to right, #fff2aa 0%, #fff2aa 100%);
		background-repeat: no-repeat;
		background-size: 0% 100%;
	}

	:deep(.highlight.isVisible) {
		animation: slide 2s ease forwards;
	}

	:deep(:where(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, li, ol)) {
		@apply col-span-8 col-start-3 text-zinc-900;
	}

	:deep(code) {
		@apply px-2 pt-px font-normal bg-zinc-100 rounded-full text-red-600 border border-zinc-200;
	}

	:deep(code)::before,
	:deep(code)::after {
		content: none;
	}


</style>