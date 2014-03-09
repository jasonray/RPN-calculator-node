var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	var n = numbers.pop();
	if (n<0) {
		n=n*-1;
	}
	numbers.push(n);
	return n;
}

function handlesOperatorCharacter(operator) {
	return (operator=="||");
}

exports.doOperation=doOperation;
exports.handlesOperatorCharacter=handlesOperatorCharacter;