// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const sanityProjectId = 'zt4joqnt'
const sanityDataset = 'production'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	modules: [
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxtjs/sanity',
		'vue3-carousel-nuxt',
	],
	css: ['./app/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss()
		]
	},
	sanity: {
		projectId: sanityProjectId,
		dataset: sanityDataset,
	},
	image: {
		sanity: {
			projectId: sanityProjectId,
			dataset: sanityDataset,
		},
	},
})