/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

(function () {
	const display_screen = getElementById('display');
	const NUMBERS_BTN = getElementByClass('calculator__btn--number');
	const OPERATORS_BTN = getElementByClass('calculator__btn--operator');
	const OTHER_BTN = getElementByClass('calculator__btn--other');

	const NOT_NUM_PATTERN = new RegExp(/[^0-9]/);

	let isEventEqual = false;
	for (var i = 0; i < NUMBERS_BTN.length; i++) {
		NUMBERS_BTN[i].addEventListener('click', (event) => {
			if (isEventEqual) {
				display_screen.value = '';
				isEventEqual = false;
			}
			let { value } = display_screen;
			value += event.target.value;
			display_screen.value = value;
		});
	}

	for (var i = 0; i < OPERATORS_BTN.length; i++) {
		OPERATORS_BTN[i].addEventListener('click', (event) => {
			if (isEventEqual) {
				display_screen.value = '';
				isEventEqual = false;
			}
			let { value } = display_screen;

			const lastChar = value[value.length - 1];

			if(!isNotNum(lastChar)){
				value += event.target.value;
			}
			display_screen.value = value;
		});
	}

	for (var i = 0; i < OTHER_BTN.length; i++) {
		OTHER_BTN[i].addEventListener('click', (event) => {
			switch (event.target.value) {
				case '=':
					isEventEqual = true;
					if (display_screen.value) {
						display_screen.value = calculates();
					} else {
						display_screen.value = '';
					}
					break;
				case 'C':
					display_screen.value = '';
					break;
				default:
					break;

			}
		});
	}

	/* calcula */
	function calculates() {
		const temp = display_screen.value;
		return eval(temp);
	};

	function getElementById(Id) {
		return document.getElementById(Id);
	}

	function getElementByClass(cl) {
		return document.getElementsByClassName(cl);
	}

	function isNum(val) {
		const pattern = new RegExp(/[0-9]+/);
		return pattern.test(val);
	}

	function isNotNum(char){
		return NOT_NUM_PATTERN.test(char);
	}
})();