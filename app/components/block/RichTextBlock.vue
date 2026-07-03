<script setup>
	const props = defineProps({
		body: {
			type: Object,
			required: true
		},
	})

	const components = {
		types: {
			figureBlock: props => h(FigureBlock, {
				data: props.value,
			}),
			videoBlock: props => h(VideoBlock, {
				data: props.value,
			}),
			cardBlock: props => h(CardBlock, {
				data: props.value
			}),
			gridBlock: props => h(GridBlock, {
				data: props.value,
			}),
		},
		marks: {
			highlight: (props) => h('span', { class: 'highlight' }, props.text)
		}
	}

	// Observer for Highlight Animation
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
	<section class="w-full flex flex-col gap-6 items-center">
		<SanityContent :value="body" :components="components" />
	</section>
</template>

<style scoped>
	@reference "@/assets/css/main.css";

	:deep(.highlight) {
		@apply text-stone-900 inline pb-0.5;

		background-image: linear-gradient(to right, #F3DBB4 0%, #F3DBB4 100%);
		background-repeat: no-repeat;
		background-size: 0% 100%;
	}

	:deep(.highlight.isVisible) {
		animation: slide 2s ease-in-out forwards;
	}

	:deep(:where(p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, pre, li, ol)) {
		@apply max-w-178 w-full;
	}

	:deep(:where(h1, h2, h3)):not(:first-child) {
		@apply mt-18;
	}

	:deep(code) {
		@apply px-3 pt-px font-normal bg-zinc-100 rounded-full text-red-600 border border-zinc-200;
	}

	:deep(code)::before,
	:deep(code)::after {
		content: none;
	}

	:deep(ul) {
		@apply prose list-disc list-inside;
	}

	:deep(ol) {
		@apply prose list-decimal list-inside;
	}

	:deep(p + figure) {
		@apply mt-18;
	}

	:deep(figure + p) {
		@apply mb-18;
	}

</style>