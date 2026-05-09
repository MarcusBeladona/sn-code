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
	<main class="flex flex-col gap-24">
		<section class="flex flex-col items-center gap-6 md:grid grid-cols-12">
			<span class="flex flex-col gap-6 col-span-7">
				<h5>Sobre Mim</h5>
				<p>
					Sou Designer Digital com +4 anos de experiência em usabilidade, design systems e criação de
					produtos digitais orientados à consistência e à experiência do usuário. Sou graduado em Design
					Digital pela Universidade Federal do Ceará (UFC), onde estudei Interação Humano-Computador,
					usabilidade, acessibilidade, criação de produtos digitais, desenvolvimento front-end e outras áreas.
				</p>
				<p>
					Acredito em produtos que unem funcionalidade, estética e intuitividade, sem ignorar pessoas, seus
					contextos e a realidade em que vivem. Se quiser conhecer mais sobre meu trabalho ou conversar sobre
					oportunidades, estou à disposição.
				</p>
			</span>
			<NuxtImg src="img/clumsy-opendoodles.svg" class="order-first md:order-last col-span-5 object-cover" />
		</section>

		<section class="md:grid grid-cols-12 w-full">
			<div class="col-span-full flex flex-col gap-6 md:flex-row">
				<VueCard
					v-for="item in specialties"
					:key="item.title"
					:icon="item.icon"
					:title="item.title"
					:description="item.description"
					class="flex-1"
				/>
			</div>
		</section>

		<section class="flex md:flex-row flex-col gap-24 md:gap-6">
			<section class="flex flex-col gap-6">
				<h5>Acadêmico</h5>
				<p>
					Graduado em Design Digital com estudos nas áreas de Interação Humano-Computador, Prototipagem, UX,
					Desenvolvimento Front-end, Mobile, Arquitetura da Informação e Tipografia.
				</p>
				<span class="flex flex-wrap gap-4 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
					<NuxtImg src="img/ufc-logo.jpg" class="rounded-full w-12 h-12" />
					<span class="flex flex-col gap-1">
						<h6>Bacharelado em Design Digital</h6>
						<p>Universidade Federal do Ceará (UFC)</p>
						<p>Nov. 2020 - Dez. 2024</p>
					</span>
				</span>
			</section>

			<section class="flex flex-col gap-6">
				<h5>Profissional</h5>
				<p>
					Mais de quatro anos na área de experiência do usuário e design de interfaces, com foco em
					usabilidade, acessibilidade e design systems para times de design e desenvolvimento.
				</p>
				<span v-for="job in experience" :key="`${job.company}-${job.period}`" class="flex flex-wrap gap-4 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
					<NuxtImg :src="job.logo" class="rounded-full w-12 h-12" />
					<span class="flex flex-col gap-1">
						<h6>{{ job.role }}</h6>
						<p>{{ job.company }}</p>
						<p>{{ job.period }}</p>
					</span>
				</span>
			</section>
		</section>
	</main>
</template>