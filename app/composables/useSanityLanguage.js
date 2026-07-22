export function useSanityLanguage() {
	const { locale } = useI18n()
	return computed(() => (locale.value === 'pt-BR' ? 'pt' : 'en'))
}
