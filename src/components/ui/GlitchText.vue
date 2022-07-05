<template>
	<p ref="el" @mouseenter="start" @mouseleave="stop">
		{{ _text }}
	</p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useTextEffect } from '../../composables/useTextEffect';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
});

const _text = ref(props.text);

const el = ref(null);

const isRunning = ref(false);
const interval = ref(0);

const rand = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomLetter = () => {
	return ALPHABET[rand(0, ALPHABET.length - 1)];
};

const effect = (replaceCount: number = 4) => {
	let text = props.text;

	text = text.substring(0, text.length - replaceCount);

	for (let i = 0; i < replaceCount; i++) {
		text += getRandomLetter();
	}

	_text.value = text;
};

const start = () => {
	if (isRunning.value) {
		return;
	}

	isRunning.value = true;

	interval.value = setInterval(effect, 70);
};

const stop = () => {
	clearInterval(interval.value);

	_text.value = props.text;

	isRunning.value = false;
};

onMounted(() => {
	if (!el.value) {
		return;
	}

	new useTextEffect(el.value as HTMLElement);
});
</script>

<style></style>
