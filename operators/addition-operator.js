var rpnstack = require("../rpn-stack");

// accepts the rpn-stack
function doOperation(numbers) {
			var rhs = numbers.pop();
			var lhs = numbers.pop();
			var result = lhs + rhs;
			numbers.push(result);
			return result;
}

function handlesOperatorCharacter(operator) {
	console.log("addition-operator checking to see supports " + operator);
	return (operator=="+");
}

exports.doOperation=doOperation;
exports.handlesOperatorCharacter=handlesOperatorCharacter;