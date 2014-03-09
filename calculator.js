var rpnstack = require("./rpn-stack");
var operatorRegistry = require("./operator-registry");

function calc() {
	var numbers=new rpnstack.stack();

	this.enter = function(operand) {
		if (!isNumber(operand)) {
			throw new Error("cannot enter non-numeric values");
		}

		numbers.push(operand);
	}
	function isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	this.perform = function (operatorCharacter) {
		var operator = operatorRegistry.getOperator(operatorCharacter);

		if (operator == null) {
			throw new Error("Unknown operator " + operatorCharacter);
		}

		return operator.doOperation(numbers);
	}

}

exports.calc = calc;
