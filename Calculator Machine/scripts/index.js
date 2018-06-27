/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

(function(){
	const display_screen = getElementById('display');
	const button = getElementByClass('calculator__btn');

	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener('click', (event) => {
			switch(event.target.value){
				case '=':
					display_screen.value = calculates();
					break;
				case 'C':
					display_screen.value = '';
					break;
				default:
					let { value } = display_screen;
					value += event.target.value; 
					display_screen.value = value;			
			}
		});
	}

	/* calcula */
	function calculates() {
		const temp = display_screen.value;
		return eval(temp);
	};

	function getElementById(Id){
		return document.getElementById(Id);
	}

	function getElementByClass(cl){
		return document.getElementsByClassName(cl);
	}
})();