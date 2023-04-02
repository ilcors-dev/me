/**
 * Creates a text effect applied to a target element.
 */
export class useTextEffect {
	private readonly _el: HTMLElement;
	private LETTERS = '&#*+%?£@§$';
	private INITIAL: string;
	private message: number;
	private currentLength: number;
	private fadeBuffer: { c: number; l: string }[];
	private messages: string[];

	constructor(el: HTMLElement) {
		this.LETTERS = '&#*+%?£@§$';
		this.INITIAL = el.innerText;
		this.message = 0;
		this._el = el;
		this.currentLength = 0;
		this.fadeBuffer = [];
		this.messages = [el.innerText];

		setTimeout(this.animateIn, 100);
	}

	/**
	 * Generates a random string of letters which matches the passed `length`
	 *
	 * @param length the length of the text to animate
	 * @returns the random generated string matching the `length`
	 */
	generateRandomString = (length: number): string => {
		let randomText = '';

		while (randomText.length < length) {
			randomText += this.LETTERS.charAt(
				Math.floor(Math.random() * this.LETTERS.length)
			);
		}

		return randomText;
	};

	/**
	 * Starts the animation
	 */
	animateIn = () => {
		if (this.currentLength < this.messages[this.message].length) {
			this.currentLength = this.currentLength + 2;

			if (this.currentLength > this.messages[this.message].length) {
				this.currentLength = this.messages[this.message].length;
			}

			const message = this.generateRandomString(this.currentLength);

			this._el.innerText = message;

			setTimeout(this.animateIn, 20);

			return;
		}

		setTimeout(this.animateFadeBuffer, 20);
	};

	/**
	 * Animates each letter until every one has been animated
	 */
	animateFadeBuffer = () => {
		// if nothing is in the buffer, populate a new one
		if (this.fadeBuffer.length === 0) {
			for (var i = 0; i < this.messages[this.message].length; i++) {
				this.fadeBuffer.push({
					c: Math.floor(Math.random() * 12) + 1,
					l: this.messages[this.message].charAt(i),
				});
			}
		}

		let doCycles = false;
		let message = '';

		for (var i = 0; i < this.fadeBuffer.length; i++) {
			let fader = this.fadeBuffer[i];

			if (fader.c > 0) {
				doCycles = true;
				fader.c--;
				message += this.LETTERS.charAt(
					Math.floor(Math.random() * this.LETTERS.length)
				);
			} else {
				message += fader.l;
			}
		}

		this._el.innerText = message;

		if (doCycles === true) {
			setTimeout(this.animateFadeBuffer, 75);
			return;
		}

		setTimeout(this.cycleText, 2000);
	};

	/**
	 * Cycles through the text
	 */
	cycleText = () => {
		this.message = this.message + 1;

		if (this.message >= this.messages.length) {
			this.message = 0;
		}

		this.currentLength = 0;
		this.fadeBuffer = [];
		this._el.innerText = this.INITIAL;
	};
}
