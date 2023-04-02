import { useEffect, useRef, useState } from 'react';
import { useTextEffect } from '../composables/useTextEffect';

interface Props {
	text: string;
	className?: string;
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

export const GlitchText = (props: Props) => {
	const [_text, setText] = useState(props.text);
	const [intervalId, setIntervalId] = useState(0);
	const el = useRef<HTMLElement>(null);

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

		setText(text);
	};

	const start = () => {
		if (intervalId !== 0) {
			return;
		}

		setIntervalId(setInterval(effect, 70));
	};

	const stop = () => {
		clearInterval(intervalId);
		setIntervalId(0);

		setText(props.text);
	};

	useEffect(() => {
		if (!el || !el.current) {
			return;
		}

		new useTextEffect(el.current);
	}, []);

	return (
		<span
			className={props.className}
			ref={el}
			onMouseEnter={start}
			onMouseLeave={stop}
		>
			{_text}
		</span>
	);
};
