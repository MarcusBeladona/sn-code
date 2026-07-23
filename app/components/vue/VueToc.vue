<script setup>
	const headings = ref([])

	function slugify(text) {
		return text
			.toLowerCase()
			.trim()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
	}

	onMounted(() => {
		const body = document.getElementById('textBlock')
		if (!body) return
		const elements = body.querySelectorAll('h1, h2, h3, h4')
		headings.value = [...elements].map((el) => {
			if (!el.id) {
				el.id = slugify(el.textContent || '')
			}
			return {
				id: el.id,
				title: el.textContent,
				level: Number(el.tagName[1]),
			}
		})
	})
</script>

<template>
	<section v-if="headings.length" class="bg-base-200 p-6 outline rounded-2xl md:rounded-3xl">
		<ul class="list-none m-0 p-0">
			<li v-for="el in headings" :key="el.id" :class="el.level == 2 ? 'ml-4 hover:ml-5 text-base-content/60' : 'text-base-content/85'" class="hover:text-base-content hover:ml-1 transition-all mb-0 mt-0 py-1.5 px-0 leading-none">
				<a :href="`#${el.id}`" class="no-underline">{{ el.title }}</a>
			</li>
		</ul>
	</section>
</template>
