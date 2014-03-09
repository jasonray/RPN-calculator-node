var rpnstack = require("./rpn-stack");

function calc() {
	var stack=new rpnstack.stack();

	this.enter = function(operand) {
		if (!isNumber(operand)) {
			throw new Error("cannot enter non-numeric values");
		}

		stack.push(operand);
	}
	function isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	this.perform = function (operatorCharacter) {
		if (operatorCharacter=="+") {
			var rhs = stack.pop();
			var lhs = stack.pop();
			var result = lhs + rhs;
			stack.push(result);
			return result;
		} else if (operatorCharacter=="-") {
			var rhs = stack.pop();
			var lhs = stack.pop();
			var result = lhs - rhs;
			stack.push(result);
			return result;
		}

	}



}

exports.calc = calc;
