
function calc() {
	var stack=new Array();

	this.enter = function(operand) {
		console.log("enter " + operand);
		console.log("stack size " + stack.length);
		stack.push(operand);
		console.log("stack size " + stack.length);
	}

	this.perform = function (operatorCharacter) {
		var lhs = pop();
		var rhs = pop();
		var result = lhs + rhs;
		stack.push(result);
		return result;
	}

	function pop() {
		if (stack.length>0) {
			return stack.pop();
		} else {
			return 0;
		}
	}

}

exports.calc = calc;
