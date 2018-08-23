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

		const li = e.target.innerHTML;

		inputField.value += li;

	});
});

// pick operation and add operation to input field value
Array.from(operation).forEach(function(operation){
	operation.addEventListener('click', function(e){

		const li = e.target.innerHTML;

		inputField.value += li;

	});
});

// clear input field value
clear.addEventListener('click', function(e){

	inputField.value = "";
	operationTrack.innerHTML = "";

});

// check if valid data is entered and put result in input field
Array.from(calculateValue).forEach(function(calculateValue){
	calculateValue.addEventListener('click', function(e){

		const result = inputField.value;
		const numbersOperations = /^[^+*/](?!.*([.+\-*/]){2})[0-9().+\-*/]+$/; //no more than two operations in a row

		if (inputField.value.match(numbersOperations))
		{
			operationTrack.innerHTML = inputField.value + " =";
			//inputField.value = eval(result);

			//const splitting = result.split(/[+\-*/]/);
			/*const arraylist = Array.from(result);
			var number = "";
			for (let i=0; i<arraylist.length; i++) {
				number += arraylist[i];
			}
			alert(number);*/

			var resultThis = result.split(/\b/);
			console.log(resultThis);
			var number = resultThis[0];
			for (let i=0; i < resultThis.length; i++) {
				//number += resultThis[i];
				//number = number + resultThis[i];
				if(isNaN(number) == false){
					number += parseInt(resultThis[i]) + "broj ";
					console.log(number);
					//console.log(typeof number);
					//newNUmber += resultThis[i];
				}
				else
				{
					number += resultThis[i] + "znak ";
					//console.log(typeof number);
					console.log(number);
					//console.log(" znak ")
				}
				//console.log(number);
			}
			









			//alert(resultThis);
		}
		else
		{
			alert("Incorrect data");
		}	

	});
});


