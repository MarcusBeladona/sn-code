<script setup>
	const specialties = [
		{
			icon: 'ph:devices',
			title: 'Pesquisa & Estratégia',
			description: 'Diagnóstico de produto, entrevistas e priorização para orientar decisões de UX.'
		},
		{
			icon: 'ph:bounding-box',
			title: 'UI & Prototipagem',
			description: 'Interfaces acessíveis com protótipos navegáveis para validar fluxos antes do desenvolvimento.'
		},
		{
			icon: 'ph:circles-three',
			title: 'Design Systems',
			description: 'Padronização de componentes e documentação para manter consistência entre times.'
		}
	]

	const experience = [
		{
			role: 'UX/UI Designer',
			company: 'LDI (UECE)',
			period: 'Jun. 2023 - Jan. 2024',
			logo: 'img/ldi-logo.jpg'
		},
		{
			role: 'UX/UI Designer',
			company: 'Lead Dell',
			period: 'Mai. 2022 - Jan. 2023',
			logo: 'img/lead-logo.jpg'
		},
		{
			role: 'UX/UI Designer',
			company: 'Nomo',
			period: 'Out. 2020 - Nov. 2021',
			logo: 'img/nomo-logo.jpg'
		}
	]
</script>

<template>
	<main class="flex flex-col gap-24 w-full">
		<!-- About Me -->
		<section class="flex flex-col md:flex-row items-center gap-6">
			<span class="flex flex-col gap-6 md:min-w-[400px] lg:min-w-[512px] w-full">
				<h5>Sobre Mim</h5>
				<p class="max-w-[708px]">
					Sou Designer Digital com +4 anos de experiência em usabilidade, design systems e criação de
					produtos digitais orientados à consistência e à experiência do usuário. Sou graduado em Design
					Digital pela Universidade Federal do Ceará (UFC), onde estudei Interação Humano-Computador,
					usabilidade, acessibilidade, criação de produtos digitais, desenvolvimento front-end e outras áreas.
				</p>
				<p class="max-w-[708px]">
					Acredito em produtos que unem funcionalidade, estética e intuitividade, sem ignorar pessoas, seus
					contextos e a realidade em que vivem. Se quiser conhecer mais sobre meu trabalho ou conversar sobre
					oportunidades, estou à disposição.
				</p>
			</span>
			<span class="flex w-full order-first md:order-last items-center justify-center">
				<NuxtImg src="img/clumsy-opendoodles.svg" class=" object-contain max-w-[412px] w-full" />
			</span>
		</section>
		<!-- Specialties Cards -->
		<section class="w-full">
			<div class="col-span-full flex flex-col gap-6 md:flex-row">
				<CardBlock v-for="item in specialties" :key="item.title" :icon="item.icon" :title="item.title" :description="item.description" class="flex-1" />
			</div>
		</section>
		<!-- Study -->
		<section class="flex flex-col gap-6">
			<h5>Acadêmico</h5>
			<p class="line-clamp-3 max-w-[708px]">
				Graduado em Design Digital com estudos em Interação Humano-Computador, Prototipagem, UX,
				Desenvolvimento Front-end, Mobile, Arquitetura da Informação e Tipografia.
			</p>
			<span class="flex gap-6 flex-col md:flex-row">
				<span class="aspect-4/3 p-6 flex flex-col gap-2 bg-white edge justify-between w-full">
					<NuxtImg src="img/ufc-logo.jpg" class="btn-secondary p-0 w-12 h-12 rounded-field" />
					<span class="flex flex-col gap-1">
						<h6>Bacharel em Design Digital</h6>
						<p>Universidade Federal do Ceará (UFC)</p>
						<p>Nov. 2020 - Dez. 2024</p>
					</span>
				</span>
				<span class="aspect-4/3 p-6 flex flex-wrap gap-2 edge w-full items-end content-end">
					<span class="btn bg-zinc-100">IHC</span>
					<span class="btn-secondary">Prototipagem</span>
					<span class="btn-secondary">UX/UI</span>
					<span class="btn bg-zinc-100">Mobile</span>
					<span class="btn-secondary">Tipografia</span>
					<span class="btn bg-zinc-100">Front-end</span>
					<span class="btn-secondary">Semiótica</span>
					<span class="btn-secondary w-10">...</span>
				</span>
			</span>
		</section>
		<!-- Professional -->
		<section class="flex flex-col gap-6">
			<h5>Profissional</h5>
			<p class="line-clamp-3 max-w-[708px]">
				Mais de quatro anos na área de experiência do usuário e design de interfaces, com foco em
				usabilidade, acessibilidade e design systems para times de design e desenvolvimento.
			</p>
			<span class="flex gap-6 flex-col md:flex-row">
				<span v-for="job in experience" :key="`${job.company}-${job.period}`" class="aspect-4/3 p-6 flex flex-col gap-2 bg-white edge justify-between w-full">
					<NuxtImg :src="job.logo" class="w-12 h-12 rounded-field" />
					<span class="flex flex-col gap-2">
						<p>{{ job.company }}</p>
						<h6>{{ job.role }}</h6>
						<p>{{ job.period }}</p>
					</span>
				</span>
			</span>
		</section>
	</main>
</template>