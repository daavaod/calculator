/*----------  Calculator
------------------------------------------------------------------------------*/

// numbers
const numbers = document.querySelector('.calculator-numbers-wrap').getElementsByTagName('li');
// operations
const operation = document.querySelector('.calculator-operations-wrap').getElementsByTagName('li');
// input field
const clear = document.querySelector('.input-clear');
// equals (submit button)
const calculateValue = document.querySelector('.calculate-wrap').getElementsByTagName('li');
// operation track
const operationTrack = document.querySelector('.operation-track');

// pick numbers, add clicked numbers to input field value
Array.from(numbers).forEach(function(numbers){
	numbers.addEventListener('click', function(e){

		const li = e.target.innerHTML;
		const inputField = document.querySelector('.calculator-input');

		inputField.value += li;

	});
});

// pick operation and add operation to input field value
Array.from(operation).forEach(function(operation){
	operation.addEventListener('click', function(e){

		const li = e.target.innerHTML;
		const inputField = document.querySelector('.calculator-input');

		inputField.value += li;

	});
});

// clear input field value
clear.addEventListener('click', function(e){

	const inputField = document.querySelector('.calculator-input');

	inputField.value = "";
	operationTrack.innerHTML = "";

});

// check if valid data is entered and put result in input field
Array.from(calculateValue).forEach(function(calculateValue){
	calculateValue.addEventListener('click', function(e){

		const inputField = document.querySelector('.calculator-input');
		const result = inputField.value;
		const numbersOperations = /^[^+*/](?!.*([.+\-*/]){2})[0-9().+\-*/]+$/; //no more than two operations in a row

		if (inputField.value.match(numbersOperations))
		{
			operationTrack.innerHTML = inputField.value + " =";
			inputField.value = eval(result);
			
		}
		else
		{
			alert("Incorrect data");
		}	

	});
});


