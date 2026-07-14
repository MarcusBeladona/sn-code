<script setup>
	import DiffBlock from './DiffBlock.vue'

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
				class: "block",
			}),
			videoBlock: props => h(VideoBlock, {
				data: props.value,
				class: "block",
			}),
			cardBlock: props => h(CardBlock, {
				data: props.value,
				class: "block",
			}),
			gridBlock: props => h(GridBlock, {
				data: props.value,
				class: "block",
			}),
			iframeBlock: props => h(IframeBlock, {
				data: props.value,
				class: "block",
			}),
			carouselBlock: props => h(CarouselBlock, {
				data: props.value,
				class: "block",
			}),
			containerBlock: props => h(ContainerBlock, {
				data: props.value,
				class: "block",
			}),
			diffBlock: props => h(DiffBlock, {
				data: props.value,
				class: "block",
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
	<section id="textBlock" class="w-full flex flex-col gap-6 items-center">
		<SanityContent :value="body" :components="components" />
	</section>
</template>

<style>

	@reference "@/assets/css/main.css";

	#textBlock {

		/* LAYOUT */

		.block:not(:first-child):not(.block + .block) {
			@apply md:mt-18;
		}

		.block:not(:last-child):not(:has(+ .block)) {
			@apply md:mb-18;
		}

		/* ELEMENTS */

		> :where(h1, h2, h3, h4, h5, h6, p, li, ol, ul, blockquote, pre) {
			@apply w-full max-w-178;
		}

		> :where(h1, h2, h3, h4, h5, h6):not(.block + *) {
			@apply mt-6;
		}

		>ul {
			@apply prose list-disc list-inside text-base-content/85;
		}

		>ol {
			@apply prose list-decimal list-inside text-base-content/85;
		}

		code {
			@apply px-1.5 pt-px font-normal rounded-sm bg-base-200 border border-base-300 text-red-600;

			&::before,
			&::after {
				content: none;
			}
		}

		.highlight {
			@apply inline pb-0.5 text-black;

			background: linear-gradient(#F3DBB4, #F3DBB4) no-repeat;
			background-size: 0% 100%;

			&.isVisible {
				animation: slide 2s ease-in-out forwards;
			}
		}

		>a {
			@apply underline text-blue-700 visited:text-purple-700 hover:text-base-content;
		}
	}

</style>