var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var n = numbers.pop();

	var result = fib(n);

	numbers.push(result);
	return result;
}

function fib(n) {
	if (n<=0) 
		return 0;
	if (n==1)
		return 1;

	return ( fib(n-2) + fib(n-1) );
}

function handlesOperatorCharacter(operator) {
	return (operator.toUpperCase()=="FIB" || operator.toUpperCase()=="FIBONACCI");
}

exports.doOperation=doOperation;
exports.handlesOperatorCharacter=handlesOperatorCharacter;