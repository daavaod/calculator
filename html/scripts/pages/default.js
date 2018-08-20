// pick numbers, add clicked numbers to input field value
const numbers = document.querySelector('.calculator-numbers-wrap').getElementsByTagName('li');

Array.from(numbers).forEach(function(numbers){
	numbers.addEventListener('click', function(e){

		const li = e.target.innerHTML;
		const inputField = document.querySelector('.calculator-input');

		inputField.value += li;

	});
});

// clear input field value
const clear = document.querySelector('.input-clear');

clear.addEventListener('click', function(e){

	const inputField = document.querySelector('.calculator-input');

	inputField.value = "";

});



