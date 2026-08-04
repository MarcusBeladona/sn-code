import { defineNuxtPlugin } from '#app'
import { addCollection } from '@iconify/vue'
import phData from '@iconify-json/ph/icons.json'

export default defineNuxtPlugin(() => {
	addCollection(phData)
})
