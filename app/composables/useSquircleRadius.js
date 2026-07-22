/**
 * Responsive squircle corner radius: 16 below md, 24 at ≥768px.
 */
export function useSquircleRadius(cornerSmoothing = 0.8) {
	const isMd = ref(false)
	let mq = null

	const update = () => {
		if (mq) isMd.value = mq.matches
	}

	onMounted(() => {
		mq = window.matchMedia('(min-width: 768px)')
		update()
		mq.addEventListener('change', update)
	})

	onUnmounted(() => {
		mq?.removeEventListener('change', update)
	})

	const cornerRadius = computed(() => (isMd.value ? 24 : 16))

	/** Ready-to-bind options for `v-squircle` (refs aren't unwrapped inside object literals). */
	const squircleOptions = computed(() => ({
		cornerRadius: cornerRadius.value,
		cornerSmoothing,
	}))

	return { cornerRadius, squircleOptions, isMd }
}
