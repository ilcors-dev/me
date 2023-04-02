import { useEffect, useRef, useState } from 'react';
import { useTextEffect } from '../composables/useTextEffect';

interface Props {
	text: string;
	className?: string;
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

export const GlitchText = (props: Props) => {
	const [_text, setText] = useState(props.text);
	const [isRunning, setIsRunning] = useState(false);
	const [int, setInt] = useState(0);
	const el = useRef(null);

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
		if (isRunning) {
			return;
		}

		setIsRunning(true);

		setInt(setInterval(effect, 70));
	};

	const stop = () => {
		clearInterval(int);

		setText(props.text);

		setIsRunning(false);
	};

	useEffect(() => {
		// if (!el) {
		// 	return;
		// }
		console.log(el.current);
		new useTextEffect(el.current as HTMLElement);
	}, []);

	return (
		<p
			className={props.className}
			ref={el}
			onMouseEnter={start}
			onMouseLeave={stop}
		>
			{_text}
		</p>
	);
};
