<template>
	<main>
		<AppHeader />
		<!-- Intro -->
		<section class="flex flex-col items-center gap-6 md:grid grid-cols-12">
			<span class="flex flex-col gap-6 col-span-7">
				<h5>Sobre Mim</h5>
				<p>Sou Designer Digital com +4 anos de experiência em usabilidade, design systems e criação de
					produtos digitais orientados à consistência e à experiência do usuário. Sou graduado em Design
					Digital pela Universidade Federal do Ceará (UFC), onde estudei Interação Humano-Computador,
					usabilidade e
					acessibilidade, criação de produtos digitais, desenvolvimento front-end, e muitas outras áreas.</p>
				<p>Eu acredito em produtos que unem funcionalidade, estética e intuitividade, sem jamais ignorar
					as
					pessoas, seus contextos e a realidade em que vivem. Se quiser conhecer mais sobre meu
					trabalho ou
					conversar sobre
					oportunidades, estou à disposição!</p>
			</span>
			<NuxtImg src="img/clumsy-opendoodles.svg" class="order-first md:order-last col-span-5 object-cover" />
		</section>
		<!-- Service Cards -->
		<section class="flex md:flex-row flex-col gap-6">
			<span
			class="flex flex-col gap-2 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
				<Icon name="ph:devices" size="32" class="text-zinc-900" />
				<h6>Pesquisa & Estratégia</h6>
				<p>Criação de interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário.</p>
			</span>
			<span
			class="flex flex-col gap-2 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
				<Icon name="ph:bounding-box" size="32" class="text-zinc-900" />
				<h6>Pesquisa & Estratégia</h6>
				<p>Criação de interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário.</p>
			</span>
			<span
			class="flex flex-col gap-2 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
				<Icon name="ph:circles-three" size="32" class="text-zinc-900" />
				<h6>Pesquisa & Estratégia</h6>
				<p>Criação de interfaces intuitivas e agradáveis, focadas na melhor experiência do usuário.</p>
			</span>
		</section>
		<!-- Experiences -->
		<section class="flex md:flex-row flex-col gap-24 md:gap-6">
			<!-- Acadêmico -->
			<section class="flex flex-col gap-6">
				<h5>Acadêmico</h5>
				<p>Graduado em Design Digital com estudos nas áreas de Interação Humano-Computador,
					Prototipagem, UX,
					Desenvolvimento Front-end, Mobile, Arq. de Informação, Tipografia, entre outras.</p>
				<span class="flex flex-wrap gap-4 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
					<NuxtImg src="img/ufc-logo.jpg" class="rounded-full w-12 h-12" />
					<span class="flex flex-col gap-1">
						<h6>Bacharelado em Design Digital</h6>
						<p>Universidade Federal do Ceará (UFC)</p>
						<p>Nov. 2020 - Dez. 2024</p>
					</span>
				</span>
			</section>
			<!-- Profissional -->
			<section class="flex flex-col gap-6">
				<h5>Profissional</h5>
				<p>Mais de quatro anos trabalhos na área de experiência do usuário e design de interfaces, com
					foco em
					usabilidade, acessibilidade e design systems para times de design e desenvolvimento.</p>
				<span class="flex flex-wrap gap-4 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
					<NuxtImg src="img/ldi-logo.jpg" class="rounded-full w-12 h-12" />
					<span class="flex flex-col gap-1">
						<h6>UX/UI Designer</h6>
						<p>LDI (UECE)</p>
						<p>Jun. 2023 - Jan. 2024</p>
					</span>
				</span>
				<span class="flex flex-wrap gap-4 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
					<NuxtImg src="img/lead-logo.jpg" class="rounded-full w-12 h-12" />
					<span class="flex flex-col gap-1">
						<h6>UX/UI Designer</h6>
						<p>Lead Dell</p>
						<p>Mai. 2022 - Jan. 2023</p>
					</span>
				</span>
				<span class="flex flex-wrap gap-4 bg-zinc-100 p-4 border border-white rounded-2xl ring ring-zinc-200">
					<NuxtImg src="img/nomo-logo.jpg" class="rounded-full w-12 h-12" />
					<span class="flex flex-col gap-1">
						<h6>UX/UI Designer</h6>
						<p>Nomo</p>
						<p>Out. 2020 - Nov. 2021</p>
					</span>
				</span>
			</section>
		</section>
		<AppFooter />
	</main>
</template>