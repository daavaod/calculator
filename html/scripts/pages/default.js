function tarabice(){
	var taraba = "#";

	while (taraba.length <= 7) {
		console.log(taraba);
		taraba += "#";
	}
}
tarabice();

function fizzBuzz() {
	for (var counter = 1; counter <= 100; counter++){
		/*if(counter % 3 == 0) {
			console.log("Fizz");
		}else if (counter % 5 == 0){
			console.log("Buzz");
		}*/if ((counter % 3 == 0) && (counter % 5 == 0)){
			console.log("FizzBuzz");
		}else if (counter % 3 == 0){
			console.log("Fizz3");
		}else if (counter % 5 == 0){
			console.log("Buzz5");
		}else {
			console.log(counter);
		}
	}
}
fizzBuzz();