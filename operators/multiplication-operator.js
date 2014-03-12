var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();
	var result = lhs * rhs;
	numbers.push(result);
	return result;
}

exports.doOperation=doOperation;
