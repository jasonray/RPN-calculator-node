var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	while (!numbers.isEmpty()) {
		numbers.pop();
	}

	return 0;
}

exports.doOperation = doOperation;