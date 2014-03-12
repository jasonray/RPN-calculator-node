var rpnstack = require("./rpn-stack");
var registryModule = require("./operator-registry");

function calc() {
	var numbers=new rpnstack.stack();
	var operatorRegistry=initializeRegistry();

	this.processInputStream = function(stream) {
		var inputArray = stream.split(" ");
		var result="";

		for (var i=0; i<inputArray.length; i++) {
			var nextElement = inputArray[i];
			if (isNaN(nextElement)) {
				console.log("operator:" + nextElement);
				result=this.perform(nextElement);
			} else {
				console.log("operand:" + nextElement);
				this.enter(parseInt(nextElement));
			}
		}

		return result;
	}

	this.enter = function(operand) {
		if (!isNumber(operand)) {
			throw new Error("cannot enter non-numeric values");
		}

		numbers.push(operand);
	}
	function isNumber(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	this.perform = function(operatorCharacter) {
		var operator = operatorRegistry.getOperatorMethod(operatorCharacter);

		if (operator == null) {
			throw new Error("Unknown operator " + operatorCharacter);
		}

		return operator(numbers);
	}

	function initializeRegistry() {
		var registry = new registryModule.registry();
		registry.registerHandler("+", require("./operators/addition-operator").doOperation);
		registry.registerHandler("*", require("./operators/multiplication-operator").doOperation);
		registry.registerHandler("x", require("./operators/multiplication-operator").doOperation);
		registry.registerHandler("-", require("./operators/subtraction-operator").doOperation);
		registry.registerHandler("||", require("./operators/absolute-operator").doOperation);
		registry.registerHandler("average", require("./operators/average-operator").doOperation);
		registry.registerHandler("ave", require("./operators/average-operator").doOperation);
		registry.registerHandler("c", require("./operators/clear-operator").doOperation);
		registry.registerHandler("clear", require("./operators/clear-operator").doOperation);
		registry.registerHandler("fib", require("./operators/fibonacci-operator").doOperation);
		registry.registerHandler("!", require("./operators/factorial-operator").doOperation);
		return registry;
	}

}

exports.calc = calc;


