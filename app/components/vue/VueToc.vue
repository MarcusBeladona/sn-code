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

	onMounted(async () => {
		const body = document.getElementById('textBlock');
		const elements = body.querySelectorAll('h4, h5, h6');
		headings.value = [...elements].map((el) => {
			if (!el.id) {
				el.id = slugify(el.textContent)
			}
			return {
				id: el.id,
				title: el.textContent,
				level: Number(el.tagName[1])
			}
		})
	})
</script>

<template>
	<section v-if="headings.length" class="bg-base-200 rounded-2xl md:rounded-3xl p-6 outline">
		<li v-for="el in headings" :key="el.id" :class="el.level == 6 ? 'ml-4 hover:ml-5 text-base-content/60' : 'text-base-content/85'" class=" hover:text-base-content hover:ml-1 transition-all mb-0 mt-0 py-1.5 px-0 leading-none list-none">
			<a :href="`#${el.id}`" class="no-underline">{{ el.title }}</a>
		</li>
	</section>
</template>