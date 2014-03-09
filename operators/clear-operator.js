var rpnstack = require("../rpn-stack");

function doOperation(numbers) {
	while (!numbers.isEmpty()) {
		numbers.pop();
	}

	return 0;
}

function handlesOperatorCharacter(operator) {
	return (operator.toUpperCase()=="C" || operator.toUpperCase()=="CLEAR");
}

exports.doOperation=doOperation;
exports.handlesOperatorCharacter=handlesOperatorCharacter;