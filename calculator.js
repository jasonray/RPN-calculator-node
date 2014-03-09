var rpnstack = require("./rpn-stack");

function calc() {
	var stack=new rpnstack.stack();

	this.enter = function(operand) {
		stack.push(operand);
	}

	this.perform = function (operatorCharacter) {
		var lhs = stack.pop();
		var rhs = stack.pop();
		var result = lhs + rhs;
		stack.push(result);
		return result;
	}

}

exports.calc = calc;
