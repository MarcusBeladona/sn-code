const SITE_URL = 'https://marcusbeladona.com'
const PROJECT_ID = 'zt4joqnt'
const DATASET = 'production'
const API_VERSION = '2025-02-19'

type SanityCase = {
	slug?: string
	_updatedAt?: string
}

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}

function urlEntry(loc: string, lastmod?: string) {
	return [
		'  <url>',
		`    <loc>${escapeXml(loc)}</loc>`,
		lastmod ? `    <lastmod>${escapeXml(lastmod)}</lastmod>` : null,
		'  </url>',
	].filter(Boolean).join('\n')
}

export default defineEventHandler(async (event) => {
	const query = encodeURIComponent(
		`*[_type == "case" && visible == true && defined(slug.current)]{ "slug": slug.current, _updatedAt }`,
	)
	const endpoint = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${query}`

	let cases: SanityCase[] = []
	try {
		const response = await $fetch<{ result?: SanityCase[] }>(endpoint)
		cases = response.result ?? []
	} catch {
		cases = []
	}

	const staticPages = ['/', '/cases', '/about']
	const casePages = cases
		.filter((item) => item.slug)
		.map((item) => urlEntry(`${SITE_URL}/cases/${item.slug}`, item._updatedAt?.slice(0, 10)))

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...staticPages.map((path) => urlEntry(`${SITE_URL}${path}`)),
		...casePages,
		'</urlset>',
	].join('\n')

	setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
	return xml
})
