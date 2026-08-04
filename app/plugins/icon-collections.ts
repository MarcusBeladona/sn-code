import { defineNuxtPlugin } from '#app'
import { addCollection } from '@iconify/vue'
import { icons as phIcons } from '@iconify-json/ph'

export default defineNuxtPlugin(() => {
	addCollection(phIcons as any)
})
