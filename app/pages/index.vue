<script setup>
	const query = groq`*[_type in ["showcase", "case"]]{...,case->{_type,"slug":slug.current}}`
	const { data } = await useSanityQuery(query)
	const showcases = data.value.filter(item => item._type == 'showcase')
	const cases = data.value.filter(item => item._type == 'case' && item.visible == true)
	console.log(showcases);
</script>

<template>
	<main class="flex flex-col gap-24">
		<section class="flex flex-col gap-6">
			<h5 class="md:text-5xl">Olá! Eu sou Marcus Beladona, Designer Digital atualmente em Fortaleza-CE.</h5>
			<span class="flex gap-2">
				<p class="flex justify-center items-center text-zinc-900 bg-zinc-100 px-4 border border-zinc-200 rounded-full w-fit h-10">UX/UI Designer</p>
				<p class="flex justify-center text-zinc-900 items-center bg-zinc-100 px-4 border border-zinc-200 rounded-full h-10">Product Designer</p>
			</span>
		</section>
		<!-- Showcases -->
		<section v-if="showcases.length">
			<VueShowcaseCard v-for="item in showcases" :item="item" />
		</section>
		<!-- Cases -->
		<section v-if="cases.length" class="flex flex-col gap-6 md:grid md:grid-cols-2">
			<NuxtLink v-for="item in cases" :to="`/cases/${item.slug.current}`" :key="item._id" class="flex flex-col flex-1 bg-zinc-100 p-0 edge hover:ring-zinc-300 h-fit transition hover:-translate-y-1 animate-enter duration-300 cursor-pointer">
				<SanityImage :asset-id="item.thumb.asset._ref" class="border border-zinc-200 rounded-[23px] w-full h-auto object-cover aspect-4/3" />
				<section class="flex flex-col gap-2 p-4">
					<h6 class="line-clamp-2">{{ item.title }}</h6>
					<span class="flex gap-1 divide-x divide-zinc-300">
						<p v-for="tagName in item.tags" :key="tagName" class="pr-1 text-xs uppercase tracking-wider">
							{{ tagName }}
						</p>
					</span>
					<p class="lg:line-clamp-2">{{ item.description }}</p>
				</section>
			</NuxtLink>
		</section>
	</main>
</template>
