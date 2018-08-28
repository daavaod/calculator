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
// input field
const inputField = document.querySelector('.calculator-input');

// pick numbers, add clicked numbers to input field value
Array.from(numbers).forEach(function(numbers){
	numbers.addEventListener('click', function(e){

		const number = e.target;
		const numberContent = number.textContent;
		const operationsReg = /[+\-*/]/;

		if(inputField.value.match(operationsReg)) {
			inputField.value = '';
			inputField.value += numberContent;
			operationTrack.textContent += numberContent;
		}
		else{
			inputField.value += numberContent;
			operationTrack.textContent += numberContent;
		}

	});
});

// pick operation and add operation to input field value
Array.from(operation).forEach(function(operation){
	operation.addEventListener('click', function(e){
		
		
		const operation = e.target;
		const operationContent = operation.textContent;

		firstValue = inputField.value;
		inputField.value = operationContent;
		operastionSetValue = operation.dataset.operation;
		operationTrack.textContent += operationContent;

		if(operationContent !== 'CA') {
			let firstValueData = inputField.dataset.firstValue = firstValue;
			let operastionSetValueData = inputField.dataset.operastionSetValue = operastionSetValue;
		}

	});
});

// clear input field value
clear.addEventListener('click', function(e){

	inputField.value = '';
	operationTrack.textContent = '';

});

Array.from(calculateValue).forEach(function(calculateValue){
	calculateValue.addEventListener('click', function(e){

		let result = '';
		const firstValue = inputField.dataset.firstValue;
		const operation = inputField.dataset.operastionSetValue;
		
		if(operation === 'add') {
			result = parseInt(firstValue) + parseInt(inputField.value);
			inputField.value = result;
		}
		if(operation === 'subtrack') {
			result = parseInt(firstValue) - parseInt(inputField.value);
			inputField.value = result;
		}
		if(operation === 'multiply') {
			result = parseInt(firstValue) * parseInt(inputField.value);
			inputField.value = result;
		}
		if(operation === 'divide') {
			result = parseInt(firstValue) / parseInt(inputField.value);
			inputField.value = result;
		}
		

	});
});

// check if valid data is entered and put result in input field
//Array.from(calculateValue).forEach(function(calculateValue){
	//calculateValue.addEventListener('click', function(e){

		//const result = inputField.value;
		//const numbersOperations = /^[^+*/](?!.*([.+\-*/]){2})[0-9().+\-*/]+$/; //no more than two operations in a row

		//if (inputField.value.match(numbersOperations))
		//{
			//operationTrack.innerHTML = inputField.value + " =";
			//inputField.value = eval(result);
		//}
		//else
		//{
			//alert("Incorrect data");
		//}	

	//});
//});


