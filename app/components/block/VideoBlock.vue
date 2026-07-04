<script setup>
	const props = defineProps({
		data: { type: Object, required: true },
	});

	const handleClick = () => {
		const modal = document.getElementById(props.data._key);
		if (modal) {
			modal.showModal();
		}
	};

	const closeModal = () => {
		const modal = document.getElementById(props.data._key);
		if (modal) {
			modal.close();
		}
	};
</script>

<template>
	<figure class="flex flex-col gap-3" :class="data.fullWidth ? 'w-full' : 'w-178'">
		<SanityFile :asset-id="data.video.asset._ref">
			<template #default="{ src }">
				<video autoplay loop muted width="100%" @click="handleClick" preload="metadata" alt="video" class="rounded-2xl cursor-pointer hover:scale-101 duration-150" :class="data.border ? 'border border-base-300' : ''">
					<source :src="src" type="video/webm" />
				</video>
			</template>
		</SanityFile>
		<figcaption v-if="data.caption" class="w-full text-caption text-base-content/50 italic text-center">
			{{ data.caption }}
		</figcaption>

		<dialog :id="data._key" class="modal outline-none">
			<div @click="closeModal" class="modal-box p-6 bg-transparent flex items-center justify-center rounded-none h-full w-full max-w-dvw max-h-dvh">
				<SanityFile :asset-id="data.video.asset._ref">
					<template #default="{ src }">
						<video autoplay loop muted controls width="100%" preload="metadata" alt="video" class="rounded-2xl max-w-full max-h-full w-auto h-auto outline-none">
							<source :src="src" type="video/webm" />
						</video>
					</template>
				</SanityFile>
			</div>
		</dialog>
	</figure>
</template>