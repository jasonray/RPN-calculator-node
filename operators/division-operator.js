var rpnstack = require("../rpn-stack");

// accepts the rpn-stack
function doOperation(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();

	if (rhs === 0) throw new Error("division by zero");

	var result = lhs / rhs;
	numbers.push(result);
	return result;
}

exports.doOperation = doOperation;