<script setup>
	const specialties = [
		{
			icon: 'ph:devices',
			title: 'Pesquisa & Estratégia',
			description: 'Criação de interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário baseada em estratégia de negócios.'
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
	<main class="flex flex-col gap-36 w-full">
		<!-- About Me -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 items-end">
				<h4 class="text-nowrap">Sobre Mim</h4>
				<hr class="border-dashed text-zinc-300 w-full pb-3.5">
			</div>
			<section class="grid grid-cols-12 gap-6">
				<span class="flex flex-col gap-6 col-span-5">
					<p class="">
						Sou Designer Digital com +4 anos de experiência em usabilidade, design systems e criação de
						produtos digitais orientados à consistência e à experiência do usuário. Sou graduado em Design
						Digital pela Universidade Federal do Ceará (UFC), onde estudei Interação Humano-Computador,
						usabilidade, acessibilidade, criação de produtos digitais, desenvolvimento front-end e outras áreas.
					</p>
					<p class="">
						Acredito em produtos que unem funcionalidade, estética e intuitividade, sem ignorar pessoas, seus
						contextos e a realidade em que vivem. Se quiser conhecer mais sobre meu trabalho ou conversar sobre
						oportunidades, estou à disposição.
					</p>
				</span>
				<NuxtImg src="img/cover-img.png" class="object-contain rounded-3xl col-start-7 col-span-6" />
			</section>
		</section>
		<!-- Specialties Cards -->
		<section class="w-full">
			<div class="col-span-full flex flex-col gap-6 md:flex-row">
				<CardBlock v-for="item in specialties" :key="item.title" :icon="item.icon" :title="item.title" :description="item.description" class="flex-1 rounded-2xl bg-zinc-100" />
			</div>
		</section>
		<!-- Study -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 items-end">
				<h4 class="text-nowrap">Acadêmico</h4>
				<hr class="border-dashed text-zinc-300 w-full pb-3.5">
			</div>
			<section class="grid grid-cols-12 gap-6">
				<p class="col-span-5">
					Graduado em Design Digital com estudos nas áreas de Interação Humano-Computador, Prototipagem, UX, Desenvolvimento Front-end, Mobile, Arq. de Informação, Tipografia, entre outras.
				</p>
				<div class="col-start-7 col-span-6 relative">
					<NuxtImg src="img/study-img.png" class="object-contain rounded-3xl" />
					<span class="flex w-full justify-between items-end absolute p-6 left-0 bottom-0">
						<span class="flex gap-6">
							<NuxtImg src="img/ufc-logo.jpg" class="w-12 h-12 rounded-xl" />
							<span class="flex flex-col">
								<p class="text-white">UFC</p>
								<h6 class="text-white">Design Digital</h6>
							</span>
						</span>
						<p class="text-white">2020 - 2024</p>
					</span>
				</div>
			</section>
		</section>
		<!-- Professional -->
		<section class="flex flex-col gap-6">
			<div class="flex gap-6 items-end">
				<h4 class="text-nowrap">Profissinoal</h4>
				<hr class="border-dashed text-zinc-300 w-full  pb-3.5">
			</div>
			<section class="grid grid-cols-12 gap-6">
				<p class="col-span-5">
					Mais de quatro anos trabalhos na área de experiência do usuário e design de interfaces, com foco em usabilidade, acessibilidade e design systems para times de design e desenvolvimento.
				</p>
				<section class="col-start-7 col-span-6 flex flex-col gap-6 divide-y divide-dashed divide-zinc-300">
					<span v-for="job in experience" :key="`${job.company}-${job.period}`" class="flex justify-between items-end pb-6 last:pb-0">
						<span class="flex gap-6">
							<NuxtImg :src="job.logo" class="w-12 h-12 rounded-xl" />
							<span class="flex flex-col">
								<p>{{ job.company }}</p>
								<h6>{{ job.role }}</h6>
							</span>
						</span>
						<p>{{ job.period }}</p>
					</span>
				</section>
			</section>
		</section>
	</main>
</template>