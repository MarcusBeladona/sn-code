// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const sanityProjectId = 'zt4joqnt'
const sanityDataset = 'production'

export default defineNuxtConfig({
	compatibilityDate: '2026-06-26',
	devtools: { enabled: false },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	modules: [
		'@nuxtjs/i18n',
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxtjs/sanity',
		'vue3-carousel-nuxt',
	],
	i18n: {
		defaultLocale: 'en-US',
		strategy: 'no_prefix',
		locales: [
			{ code: 'en-US', language: 'en-US', name: 'English', file: 'en-US.json' },
			{ code: 'pt-BR', language: 'pt-BR', name: 'Português', file: 'pt-BR.json' },
		],
		lazy: true,
		langDir: 'locales',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'locale',
			fallbackLocale: 'en-US',
			alwaysRedirect: false,
		},
	},
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