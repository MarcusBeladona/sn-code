const LOCALE_PREFIXES = ['en-US', 'pt-BR', 'en', 'pt']
const LOCALE_QUERY_KEYS = ['lang', 'locale', 'language']

export default defineNuxtRouteMiddleware((to) => {
	let path = to.path
	let changed = false

	for (const prefix of LOCALE_PREFIXES) {
		const prefixPath = `/${prefix}`
		if (path === prefixPath || path.startsWith(`${prefixPath}/`)) {
			path = path.slice(prefixPath.length) || '/'
			changed = true
			break
		}
	}

	const query = { ...to.query }
	for (const key of LOCALE_QUERY_KEYS) {
		if (key in query) {
			delete query[key]
			changed = true
		}
	}

	if (!changed) return

	return navigateTo({ path, query, hash: to.hash }, { redirectCode: 301 })
})
