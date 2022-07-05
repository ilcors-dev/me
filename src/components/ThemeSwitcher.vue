<template>
	<div
		class="p-2 cursor-pointer hover:rounded hover:bg-white/20 inline-flex items-center w-10 h-10"
		@click="toggle"
	>
		<span v-if="isDark" class="material-symbols-outlined"> dark_mode </span>
		<span v-else class="material-symbols-outlined"> light_mode </span>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isDark = ref(false);

const toggle = () => {
	if (isDark.value) {
		document.querySelector('html')?.classList.remove('dark');
	} else {
		document.querySelector('html')?.classList.add('dark');
	}

	isDark.value = !isDark.value;
};

if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	document.querySelector('html')?.classList.add('dark');
	isDark.value = true;
}
</script>

<style></style>
