// pick numbers, add clicked numbers to input field value
const numbers = document.querySelector('.calculator-numbers-wrap').getElementsByTagName('li');

Array.from(numbers).forEach(function(numbers){
	numbers.addEventListener('click', function(e){

		const li = e.target.innerHTML;
		const inputField = document.querySelector('.calculator-input');

		inputField.value += li;

	});
});

// pick operation and add operation to input field value
const operation = document.querySelector('.calculator-operations-wrap').getElementsByTagName('li');

Array.from(operation).forEach(function(operation){
	operation.addEventListener('click', function(e){

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

// check if valid data is entered and alert input value on equals
const calculateValue = document.querySelector('.calculate-wrap').getElementsByTagName('li');

Array.from(calculateValue).forEach(function(calculateValue){
	calculateValue.addEventListener('click', function(e){

		const inputField = document.querySelector('.calculator-input');
		const result = inputField.value;
		const letterOperation = /^[0-9.+\-*/]+$/;

		if (inputField.value.match(letterOperation))
		{
			alert(eval(result));
		}else
		{
			alert("Please enter valid numbers and operations only.");
		}	

	});
});


