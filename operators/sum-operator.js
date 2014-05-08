var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var sum = 0;

	while (!numbers.isEmpty()) {
		sum = sum + numbers.pop();
	}

	numbers.push(sum);
	return sum;
}

exports.doOperation = doOperation;