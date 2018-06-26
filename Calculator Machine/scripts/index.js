/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
/* limpa o display */ 
// document.getElementById("clear").addEventListener("click", function() {
// 	document.getElementById("display").value = "";
// });


const calculatorModule = (function(){
	const clear_btn = getElementById('clear');
	const display_screen = getElementById('display');
	const button = getElementByClass('calculator__btn');

	let { value } = display_screen;

	clear_btn.addEventListener('click', () => {
		value = '';
	});

	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener('click', (event) => {
			value += event.target.value; 
			display_screen.value = calculates();
		});
	}

	/* calcula */
	function calculates() {
		const temp = value;
		return eval(temp);
	};

	function getElementById(Id){
		return document.getElementById(Id);
	}

	function getElementByClass(cl){
		return document.getElementsByClassName(cl);
	}
})();