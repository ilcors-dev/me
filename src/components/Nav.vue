<template>
	<navbar class="flex justify-between items-center">
		<MemojiLoop />
		<div class="flex justify-around">
			<div class="w-[200px]">
				<p class="font-bold">Luca Corsetti</p>
				<GlitchText class="cursor-pointer" text="fullstack developer" />
			</div>
			<ThemeSwitcher />
		</div>
	</navbar>
</template>

<script lang="ts" setup>
import GlitchText from './ui/GlitchText.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import MemojiLoop from './ui/MemojiLoop.vue';
</script>

<style></style>
