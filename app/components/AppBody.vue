<script setup>
	import { computed } from 'vue'
	import { StoryblokComponent } from '@storyblok/vue'
	import { ComponentBlok, richTextResolver } from '@storyblok/richtext'

	const props = defineProps({
		doc: Object,
	})

	const INLINE_TAGS = new Set([
		'strong', 'b', 'i', 'em', 'a', 'u', 'span', 'code', 'small', 'sub', 'sup', 'mark', 'abbr', 'cite', 's', 'br', 'wbr'
	])

	const buildAttributes = (attrs = {}) => {
		return Object.entries(attrs)
			.filter(([, value]) => value !== false && value != null)
			.map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`)
			.join(' ')
	}

	const flattenChildren = (children) => {
		if (children == null) return []
		if (Array.isArray(children)) return children.flatMap(flattenChildren)
		return [children]
	}

	const normalizeChildren = (children) => {
		return flattenChildren(children).map((item) => String(item)).join('')
	}

	const parseParagraphHtml = (html) => {
		const segments = []
		let currentText = ''
		let i = 0

		const flushParagraph = () => {
			if (currentText.trim()) {
				segments.push({ type: 'paragraph', html: `<p>${currentText}</p>` })
			}
			currentText = ''
		}

		const parse = (closingTag) => {
			while (i < html.length) {
				if (html.startsWith('<!--', i)) {
					const commentEnd = html.indexOf('-->', i + 4)
					const comment = html.slice(i, commentEnd > -1 ? commentEnd + 3 : html.length)
					flushParagraph()
					segments.push({ type: 'outside', html: comment })
					i = commentEnd > -1 ? commentEnd + 3 : html.length
					continue
				}

				if (html[i] !== '<') {
					const next = html.indexOf('<', i)
					const text = html.slice(i, next === -1 ? html.length : next)
					currentText += text
					i = next === -1 ? html.length : next
					continue
				}

				const end = html.indexOf('>', i)
				if (end === -1) {
					currentText += html.slice(i)
					i = html.length
					break
				}

				const tag = html.slice(i, end + 1)
				const isClosing = tag.startsWith('</')
				const nameMatch = tag.match(/^<\/?([a-z0-9]+)/i)
				const tagName = nameMatch ? nameMatch[1].toLowerCase() : null
				i = end + 1

				if (isClosing) {
					if (tagName === closingTag) return
					currentText += tag
					continue
				}

				const isSelfClosing = tag.endsWith('/>') || /^(<(br|img|hr|input|link|meta|source|track|wbr)\b)/i.test(tag)

				if (isSelfClosing) {
					if (INLINE_TAGS.has(tagName)) {
						currentText += tag
					} else {
						flushParagraph()
						segments.push({ type: 'outside', html: tag })
					}
					continue
				}

				const openingTag = tag
				const outerText = currentText
				currentText = ''
				parse(tagName)
				const innerHtml = currentText
				currentText = outerText

				if (INLINE_TAGS.has(tagName)) {
					currentText += `${openingTag}${innerHtml}</${tagName}>`
				} else {
					flushParagraph()
					segments.push({ type: 'outside', html: `${openingTag}${innerHtml}</${tagName}>` })
				}
			}
		}

		parse(null)
		flushParagraph()
		return segments
	}

	const renderHtml = (tag, attrs = {}, children) => {
		const content = normalizeChildren(children)
		if (!tag) return content
		const attrsString = buildAttributes(attrs)
		const tagString = attrsString ? `${tag} ${attrsString}` : tag
		return `<${tagString}>${content}</${tag}>`
	}

	const wrapImagesInFigure = (html) => {
		return html.replace(/<img\s+([^>]*)>/gi, (match, attrs) => {
			const titleMatch = attrs.match(/title=["']([^"']*)["']/i)
			const titleText = titleMatch ? titleMatch[1] : ''
			return `<figure><img ${attrs}><figurecaption>${titleText}</figurecaption></figure>`
		})
	}

	const richTextSegments = computed(() => {
		if (!props.doc) return []

		const blokGroups = []
		const htmlOrArray = richTextResolver({
			renderFn(tag, attrs, children) {
				if (tag === 'p') {
					const html = normalizeChildren(children)
					const segments = parseParagraphHtml(html)
					return segments.map((segment) => segment.html).join('')
				}
				return renderHtml(tag, attrs, children)
			},
			tiptapExtensions: {
				blok: ComponentBlok.configure({
					renderComponent: (blok) => {
						const body = [blok]
						return `<!--SB_BLOK_GROUP_${blokGroups.push(body) - 1}-->`
					}
				})
			}
		}).render(props.doc)

		const html = Array.isArray(htmlOrArray) ? htmlOrArray.join('') : htmlOrArray
		const parts = html.split(/<!--SB_BLOK_GROUP_(\d+)-->/)
		const segments = []

		for (let i = 0; i < parts.length; i++) {
			if (i % 2 === 0) {
				const htmlPart = parts[i]
				if (htmlPart && htmlPart.trim()) {
					const processedHtml = wrapImagesInFigure(htmlPart)
					segments.push({ type: 'html', content: processedHtml })
				}
				continue
			}

			const blokIndex = Number(parts[i])
			const blokGroup = blokGroups[blokIndex]
			if (blokGroup) {
				for (const blok of blokGroup) {
					segments.push({ type: 'blok', blok })
				}
			}
		}

		return segments
	})
</script>

<template>
	<template v-for="(segment, index) in richTextSegments" :key="index">
		<span v-if="segment.type === 'html'"
		class="body-wrapper prose prose-zinc"
		v-html="segment.content" />
		<StoryblokComponent v-else :blok="segment.blok" />
	</template>
</template>

<style scoped>

	@reference "@/assets/css/main.css";

	:deep(*) {
		@apply md:col-span-8 md:col-start-3 m-0;
	}

	.body-wrapper {
		@apply flex flex-col gap-8 md:grid md:grid-cols-subgrid col-span-full max-w-max;
	}

	.body-wrapper :deep(figure) {
		@apply col-span-full m-0 text-center;
	}

	.body-wrapper :deep(img) {
		@apply rounded-2xl md:rounded-3xl;
	}

	.body-wrapper :deep(figurecaption) {
		@apply mt-2 text-zinc-600 text-sm text-center italic;
	}

	:deep(pre) {
		@apply bg-zinc-100 border border-white rounded-xl ring ring-zinc-200 text-zinc-900;
	}

	:deep(code:not(pre code)) {
		@apply bg-zinc-100 px-2 py-0.5 border border-white rounded-full ring ring-zinc-200 text-red-500;
	}

	:deep(code:not(pre code))::before,
	:deep(code:not(pre code))::after {
		content: none;
	}

	:deep(table) {
		@apply rounded-xl text-base;
	}

	/* :deep(th) {
		@apply py-2
	} */

	:deep(th p) {
		@apply font-medium text-zinc-900;
	}

	/* :deep(p span) {
		text-align: inherit;
	} */

	:deep(p):empty,
	:deep(br) {
		display: none;
	}

</style>