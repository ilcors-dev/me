<template>
	<a ref="el" @mouseenter="start" @mouseleave="stop" v-bind="attrs">
		{{ _text }}
	</a>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useTextEffect } from '../../composables/useTextEffect';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

const props = defineProps({
	href: {
		type: String,
		default: undefined,
	},
	text: {
		type: String,
		required: true,
	},
});

const _text = ref(props.text);

const el = ref(null);

const isRunning = ref(false);
const interval = ref(0);

const attrs = computed(() => {
	if (props.href) {
		return {
			href: props.href,
			target: '_blank',
			class: 'w-max link-underline link-underline-black',
		};
	}

	return {};
});

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

<style>
.link-underline {
	border-bottom-width: 0;
	background-image: linear-gradient(transparent, transparent),
		linear-gradient(#fff, #fff);
	background-size: 0 2px;
	background-position: 0 100%;
	background-repeat: no-repeat;
	transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
	background-image: linear-gradient(transparent, transparent),
		linear-gradient(white, white);
}

.link-underline:hover {
	background-size: 100% 2px;
	background-position: 0 100%;
}
</style>
