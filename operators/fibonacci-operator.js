var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var n = numbers.pop();

	if (!isInteger(n)) {
		throw new Error("cannot enter non-integer values");
	}

	var result = fib(n);

	numbers.push(result);
	return result;
}

function fib(n) {
	var prev1 = 1;
	var prev2 = 0;

	if (n<=0) 
		return 0;

	for (var i = 1; i<n; i++) {
		var sum = prev1+prev2;
		prev2 = prev1;
		prev1 = sum;
	}

	return prev1;
}

exports.doOperation=doOperation;

function isInteger(n) {
	return (n == parseInt(n, 10));
}